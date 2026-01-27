import { MarketingHeader } from '@/components/MarketingHeader';
import { MarketingFooter } from '@/components/MarketingFooter';
import { blogPosts, BlogPost } from '@/lib/resources';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { Metadata } from 'next';
import { ArchitectureDiagram } from '@/components/architecture/ArchitectureDiagram';

// Generate static params for all blog posts
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

// Generate metadata for the page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: 'Resource Not Found',
        };
    }

    return {
        title: `${post.title} | Fiftysix.ai Resources`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }


    // Split content if it contains the placeholder
    const [contentBefore, contentAfter] = post.content.split('<!-- Component Placeholder: ArchitectureDiagram will be injected here by the page -->');

    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[#7D55C7]/30">
            <MarketingHeader />

            <main className="relative pt-32 pb-24">
                {/* Background Gradients */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[100px]" />
                </div>

                <div className="container mx-auto px-6">
                    <Link
                        href="/resources"
                        className="mb-8 inline-flex items-center text-sm font-medium text-[var(--foreground)]/60 transition-colors hover:text-[var(--foreground)]"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Resources
                    </Link>

                    <article className="mx-auto max-w-3xl">
                        <script
                            type="application/ld+json"
                            dangerouslySetInnerHTML={{
                                __html: JSON.stringify({
                                    '@context': 'https://schema.org',
                                    '@type': 'BlogPosting',
                                    headline: post.title,
                                    description: post.excerpt,
                                    datePublished: post.date,
                                    author: {
                                        '@type': 'Organization',
                                        name: 'Fiftysix.ai',
                                    },
                                    mainEntityOfPage: {
                                        '@type': 'WebPage',
                                        '@id': `https://fiftysix.ai/resources/${post.slug}`,
                                    },
                                }),
                            }}
                        />
                        <header className="mb-12 text-center">
                            <div className="mb-6 flex flex-wrap items-center justify-center gap-4 text-sm text-[var(--foreground)]/60">
                                <span className="flex items-center gap-1 rounded-full bg-blue-500/10 px-3 py-1 text-blue-400">
                                    <Tag className="h-3 w-3" />
                                    {post.category}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="h-4 w-4" />
                                    {post.date}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="h-4 w-4" />
                                    {post.readTime}
                                </span>
                            </div>

                            <h1 className="mb-6 text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                                <span className="bg-gradient-to-b from-[var(--foreground)] to-[var(--foreground)]/60 bg-clip-text text-transparent">
                                    {post.title}
                                </span>
                            </h1>

                            <p className="text-xl text-[var(--foreground)]/60">
                                {post.excerpt}
                            </p>
                        </header>

                        {/* Render content before the placeholder */}
                        <div
                            className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300 prose-img:rounded-2xl"
                            dangerouslySetInnerHTML={{ __html: contentBefore }}
                        />

                        {/* Render diagram if we are on the specific page AND split was successful (implied by contentAfter existence) */}
                        {post.slug === 'building-fiftysix-on-aws' && contentAfter && (
                            <div className="my-12">
                                <ArchitectureDiagram />
                            </div>
                        )}

                        {/* Render content after the placeholder (or nothing if no split) */}
                        {contentAfter && (
                            <div
                                className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300 prose-img:rounded-2xl"
                                dangerouslySetInnerHTML={{ __html: contentAfter }}
                            />
                        )}
                    </article>
                </div>
            </main>

            <MarketingFooter />
        </div>
    );
}
