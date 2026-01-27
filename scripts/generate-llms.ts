
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Configuration
const SITE_URL = 'https://cloudinteract.io';
const OUTPUT_FILE = path.join(process.cwd(), 'public/llms.txt');
const RESOURCES_DIR = path.join(process.cwd(), 'src/content/resources');

interface PageInfo {
    title: string;
    url: string;
    description?: string;
}

function getBlogPosts(): PageInfo[] {
    if (!fs.existsSync(RESOURCES_DIR)) return [];

    const files = fs.readdirSync(RESOURCES_DIR).filter(file => file.endsWith('.mdx'));

    return files.map(file => {
        const content = fs.readFileSync(path.join(RESOURCES_DIR, file), 'utf-8');
        const { data } = matter(content);
        return {
            title: data.title || file.replace('.mdx', ''),
            url: `${SITE_URL}/resources/${file.replace('.mdx', '')}`,
            description: data.description || `Read about ${data.title}`
        };
    });
}

const STATIC_PAGES: PageInfo[] = [
    { title: 'Home', url: SITE_URL, description: 'CloudInteract - AI-Powered Contact Center Solutions' },
    { title: 'Resources', url: `${SITE_URL}/resources`, description: 'Insights, guides, and strategies for CX' },
    { title: 'Healthcare Solutions', url: `${SITE_URL}/healthcare`, description: 'AI-driven contact center solutions for healthcare' },
    { title: 'Public Sector Solutions', url: `${SITE_URL}/public-sector`, description: 'Secure, compliant cloud contact centers for government' },
    { title: 'Finance Solutions', url: `${SITE_URL}/finance`, description: 'Secure banking and finance CX solutions' },
    { title: 'Retail Solutions', url: `${SITE_URL}/retail`, description: 'Personalized retail customer experiences' },
    { title: 'Utilities Solutions', url: `${SITE_URL}/utilities`, description: 'High-volume utility customer service' },
    { title: 'EdTech Solutions', url: `${SITE_URL}/edtech`, description: 'Support solutions for education technology' },
];

function generateLLMsTxt() {
    const posts = getBlogPosts();
    const allPages = [...STATIC_PAGES, ...posts];

    const content = `# CloudInteract.io Content Index for LLMs

## About CloudInteract
CloudInteract specializes in transforming customer experience (CX) through Amazon Connect and AI. We help organizations modernize their contact centers, automate interactions, and leverage data for actionable insights.

## Core Solutions
- **Migration**: Moving legacy on-premise systems (Avaya, Cisco, Mitel) to Amazon Connect.
- **AI & Automation**: Implementing Amazon Lex, GenAI bots, and automated workflows.
- **Optimization**: Workforce management (WFM), analytics, and custom agent desktops.

## Site Map & Resources

${allPages.map(page => `- [${page.title}](${page.url}): ${page.description}`).join('\n')}
`;

    fs.writeFileSync(OUTPUT_FILE, content);
    console.log(`Generated ${OUTPUT_FILE} with ${allPages.length} links.`);
}

generateLLMsTxt();
