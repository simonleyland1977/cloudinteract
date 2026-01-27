import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/resources';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://fiftysix.ai'; // Update with actual domain if known

    const staticRoutes = [
        '',
        '/healthcare',
        '/public-sector',
        '/resources',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    const blogRoutes = blogPosts.map((post) => ({
        url: `${baseUrl}/resources/${post.slug}`,
        lastModified: new Date(post.date), // Simple parsing, ideal would be ISO string
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...staticRoutes, ...blogRoutes];
}
