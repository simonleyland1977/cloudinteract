
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost } from './resources';

const POSTS_DIRECTORY = path.join(process.cwd(), 'src/content/resources');

export async function getAllPosts(): Promise<BlogPost[]> {
    if (!fs.existsSync(POSTS_DIRECTORY)) {
        return [];
    }

    const fileNames = fs.readdirSync(POSTS_DIRECTORY);
    const allPostsData = fileNames
        .filter((fileName) => fileName.endsWith('.mdx'))
        .map((fileName) => {
            const slug = fileName.replace(/\.mdx$/, '');
            const fullPath = path.join(POSTS_DIRECTORY, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data } = matter(fileContents);

            return {
                slug,
                title: data.title,
                date: data.date,
                category: data.category || 'General',
                excerpt: data.excerpt || '',
                image: data.image || null,
                author: data.author || 'CloudInteract Team',
                tags: data.tags || [],
                readingTime: '5 min read', // Placeholder or calculation
            } as BlogPost;
        });

    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
    try {
        const fullPath = path.join(POSTS_DIRECTORY, `${slug}.mdx`);
        if (!fs.existsSync(fullPath)) {
            return null;
        }

        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            slug,
            title: data.title,
            date: data.date,
            category: data.category || 'General',
            excerpt: data.excerpt || '',
            image: data.image || null,
            author: data.author || 'CloudInteract Team',
            tags: data.tags || [],
            content, // Return content for individual post view
            readingTime: '5 min read',
        } as BlogPost;
    } catch (e) {
        return null;
    }
}
