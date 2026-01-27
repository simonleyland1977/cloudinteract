import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/crm/', '/studio/'], // Assuming CRM and specific app routes shouldn't be indexed
        },
        sitemap: 'https://fiftysix.ai/sitemap.xml',
    };
}
