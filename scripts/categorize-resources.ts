
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const RESOURCES_DIR = path.join(process.cwd(), 'src/content/resources');

const CATEGORIES = {
    'Amazon Connect': {
        keywords: ['connect', 'contact center', 'call center', 'ivr', 'amazon', 'aws', 'ccaaS'],
        subCategories: {
            'Integration': ['salesforce', 'crm', 'servicenow', 'zendesk', 'api', 'integration'],
            'Adoption and Change': ['training', 'adoption', 'culture', 'change management', 'transformation'],
            'Migration': ['migration', 'legacy', 'avaya', 'cisco', 'premise'],
            'Platform': [] // Default fallback for Amazon Connect
        }
    },
    'AI & Innovation': ['ai', 'artificial intelligence', 'machine learning', 'lex', 'bot', 'generative', 'gpt', 'llm', 'automation'],
    'Customer Experience': ['cx', 'customer experience', 'journey', 'satisfaction', 'nps', 'analytics'],
    'Workforce Engagement': ['wfm', 'workforce', 'agent', 'scheduling', 'quality', 'performance'],
    'Company News': ['announcement', 'award', 'partnership', 'news', 'launch', 'event'],
};

function categorizePosts() {
    if (!fs.existsSync(RESOURCES_DIR)) {
        console.error('Resources directory not found.');
        return;
    }

    const files = fs.readdirSync(RESOURCES_DIR).filter(file => file.endsWith('.mdx'));
    console.log(`Categorizing ${files.length} posts...`);

    files.forEach(file => {
        const filePath = path.join(RESOURCES_DIR, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        const { data, content: body } = matter(content);

        const textToScan = (data.title + ' ' + body).toLowerCase();
        let assignedCategory = 'General';
        let assignedSubCategory = '';

        // Check categories
        for (const [category, definition] of Object.entries(CATEGORIES)) {
            if (Array.isArray(definition)) {
                if (definition.some(k => textToScan.includes(k))) {
                    assignedCategory = category;
                    break;
                }
            } else {
                // Complex category (Amazon Connect)
                if (definition.keywords.some(k => textToScan.includes(k))) {
                    assignedCategory = category;
                    // Check sub-categories
                    for (const [sub, subKeywords] of Object.entries(definition.subCategories)) {
                        if (subKeywords.some(k => textToScan.includes(k))) {
                            assignedSubCategory = sub;
                            break;
                        }
                    }
                    if (!assignedSubCategory) assignedSubCategory = 'Platform'; // Default sub
                    break;
                }
            }
        }

        // Amazon Connect specific override for sub-category field
        const finalCategory = assignedCategory === 'Amazon Connect' ? assignedSubCategory : assignedCategory;

        if (data.category !== finalCategory) {
            const newContent = matter.stringify(body, {
                ...data,
                category: finalCategory
            });
            fs.writeFileSync(filePath, newContent);
            console.log(`Updated ${file}: ${data.category} -> ${finalCategory}`);
        }
    });

    console.log('Categorization complete.');
}

categorizePosts();
