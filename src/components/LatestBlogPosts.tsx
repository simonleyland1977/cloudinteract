import Link from 'next/link';
import { getAllPosts } from '@/lib/blog-api';
import { ArrowRight } from 'lucide-react';

export async function LatestBlogPosts() {
    const allPosts = await getAllPosts();
    const latestPosts = allPosts.filter(post => post.category === 'Blog').slice(0, 3);

    if (latestPosts.length === 0) {
        return null;
    }

    return (
        <section className="w-full py-24 relative overflow-hidden bg-slate-950">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Latest Insights
                        </h2>
                        <p className="text-slate-400 max-w-2xl">
                            Stay informed with our latest thoughts on AI, contact centers, and digital transformation.
                        </p>
                    </div>
                    <Link
                        href="/resources"
                        className="hidden md:flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
                    >
                        View all articles
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Blog Post Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {latestPosts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/resources/${post.slug}`}
                            className="group bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
                        >
                            {/* Article Content */}
                            <div className="p-6">
                                {/* Category & Date */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-medium">
                                        {post.category}
                                    </span>
                                    <span className="text-slate-500 text-sm">
                                        {new Date(post.date).toLocaleDateString('en-US', {
                                            month: 'short',
                                            day: 'numeric',
                                            year: 'numeric'
                                        })}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors">
                                    {post.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                {/* Read More Link */}
                                <div className="flex items-center gap-2 text-blue-400 group-hover:text-blue-300 font-medium text-sm transition-colors">
                                    Read article
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Mobile View All Link */}
                <div className="mt-8 md:hidden text-center">
                    <Link
                        href="/resources"
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
                    >
                        View all articles
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
