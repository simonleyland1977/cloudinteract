
import { MarketingHeader } from '@/components/MarketingHeader';
import { MarketingFooter } from '@/components/MarketingFooter';
import { getPostBySlug, getAllPosts } from '@/lib/blog-api';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { Metadata } from 'next';
import { ArchitectureDiagram } from '@/components/architecture/ArchitectureDiagram';

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: `${post.title} | CloudInteract`,
        description: post.excerpt,
    };
}

export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white dark:bg-black font-sans selection:bg-blue-100 dark:selection:bg-blue-900">
            <MarketingHeader />

            <main className="pt-24 pb-16">
                <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Back Link */}
                    <Link
                        href="/resources"
                        className="inline-flex items-center text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 mb-8 transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                        Back to Resources
                    </Link>

                    {/* Header */}
                    <header className="mb-12">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="px-3 py-1 text-xs font-semibold tracking-wider text-blue-700 uppercase bg-blue-50 dark:text-blue-300 dark:bg-blue-900/30 rounded-full">
                                {post.category}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-800 pb-8">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <time dateTime={post.date}>{post.date}</time>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{post.readTime || '5 min read'}</span>
                            </div>
                            {post.author && (
                                <div className="flex items-center gap-2">
                                    <span>By {post.author}</span>
                                </div>
                            )}
                        </div>
                    </header>

                    {/* Content */}
                    <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-img:rounded-xl">
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />

                        {post.slug === 'building-fiftysix-on-aws' && (
                            <div className="my-12">
                                <ArchitectureDiagram />
                            </div>
                        )}
                    </div>

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                        <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800">
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map(tag => (
                                    <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                                        <Tag className="w-3 h-3 mr-2" />
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                </article>
            </main>

            <MarketingFooter />
        </div>
    );
}
