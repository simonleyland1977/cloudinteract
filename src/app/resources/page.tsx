
import { getAllPosts } from '@/lib/blog-api';
import { ResourceBrowser } from '@/components/ResourceBrowser';
import { FeaturedResources } from '@/components/FeaturedResources';

export const metadata = {
    title: 'Resources | CloudInteract',
    description: 'Insights, guides, and articles about Amazon Connect, AI, and Customer Experience.',
};

export default async function ResourcesPage() {
    const posts = await getAllPosts();

    // Extract unique categories, ensuring 'General' is last if present
    const categories = Array.from(new Set(posts.map(p => p.category))).sort();

    return (
        <div className="min-h-screen bg-white dark:bg-black pt-24 pb-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Resource <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">Hub</span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        Latest insights on Amazon Connect, AI, and Customer Experience.
                    </p>
                </div>

                {/* Featured Section */}
                <FeaturedResources posts={posts.slice(0, 3)} />

                {/* Browser / Filter Section */}
                <ResourceBrowser initialPosts={posts} categories={categories} />

            </div>
        </div>
    );
}
