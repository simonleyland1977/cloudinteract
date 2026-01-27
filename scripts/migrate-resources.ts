
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
import TurndownService from 'turndown';
import * as cheerio from 'cheerio';
import axios from 'axios';
import matter from 'gray-matter';
import slugify from 'slugify';

const CSV_FILE = path.join(process.cwd(), 'cloudinteract-resources.csv');
const OUTPUT_DIR = path.join(process.cwd(), 'src/content/resources');
const PUBLIC_IMG_DIR = path.join(process.cwd(), 'public/images/resources');

if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });
if (!fs.existsSync(PUBLIC_IMG_DIR)) fs.mkdirSync(PUBLIC_IMG_DIR, { recursive: true });

const turndownService = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced'
});

// Configure turndown to drop empty paragraphs
turndownService.addRule('removeEmptyParagraphs', {
    filter: (node) => node.nodeName === 'P' && node.textContent?.trim() === '',
    replacement: () => ''
});

// Cleanup HubSpot specific junk
function cleanHubSpotHTML(html: string): string {
    const $ = cheerio.load(html);

    // Remove HubSpot specific elements
    $('.hs-cta-wrapper, .hs-cta-node, [id^="hs-cta-wrapper"], script, style, iframe').remove();

    // Unwrap weird spans
    $('span[style*="font-weight: bold"]').each(function () {
        $(this).replaceWith(`<strong>${$(this).html()}</strong>`);
    });

    return $('body').html() || '';
}

async function downloadImage(url: string, filename: string): Promise<string | null> {
    try {
        const filepath = path.join(PUBLIC_IMG_DIR, filename);
        if (fs.existsSync(filepath)) return `/images/resources/${filename}`; // Skip if exists

        const writer = fs.createWriteStream(filepath);
        const response = await axios({
            url,
            method: 'GET',
            responseType: 'stream'
        });

        response.data.pipe(writer);

        return new Promise((resolve, reject) => {
            writer.on('finish', () => resolve(`/images/resources/${filename}`));
            writer.on('error', reject);
        });
    } catch (e) {
        console.error(`Failed to download image ${url}:`, e);
        return null; // Fallback to no image or placeholder
    }
}

async function migrate() {
    if (!fs.existsSync(CSV_FILE)) {
        console.error(`CSV file not found at ${CSV_FILE}`);
        return;
    }

    const fileContent = fs.readFileSync(CSV_FILE);
    const records = parse(fileContent, {
        columns: true,
        skip_empty_lines: true
    });

    console.log(`Found ${records.length} posts to migrate...`);

    for (const record of records) {
        const title = record['Post title'];
        if (!title) continue;

        const slug = slugify(title, { lower: true, strict: true, remove: /[*+~.()'"!:@]/g });
        const date = record['Creation date'] || new Date().toISOString();
        const author = 'CloudInteract Team'; // Author not in CSV export
        const featuredImage = record['Featured image URL'];

        let localImage = null;
        if (featuredImage) {
            const ext = path.extname(featuredImage).split('?')[0] || '.jpg';
            const imgFilename = `${slug}${ext}`;
            localImage = await downloadImage(featuredImage, imgFilename);
        }

        const rawHtml = record['Post body'];
        const cleanHtml = cleanHubSpotHTML(rawHtml);
        const markdown = turndownService.turndown(cleanHtml);

        // Escape braces that aren't code blocks to prevent MDX errors
        const safeMarkdown = markdown.replace(/{(?![\s\S]*})/g, '\\{').replace(/}(?![\s\S]*})/g, '\\}');

        const mdxContent = matter.stringify(safeMarkdown, {
            title,
            date,
            author,
            category: 'General', // Will be refined by categorize script
            image: localImage,
            tags: [] // Tags not in CSV export
        });

        fs.writeFileSync(path.join(OUTPUT_DIR, `${slug}.mdx`), mdxContent);
        console.log(`Migrated: ${title}`);
    }

    console.log('Migration complete!');
}

migrate();
