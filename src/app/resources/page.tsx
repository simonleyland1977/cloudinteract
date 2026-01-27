"use client";

import { MarketingHeader } from '@/components/MarketingHeader';
import { MarketingFooter } from '@/components/MarketingFooter';
import { ResourceCard } from '@/components/ResourceCard';
import { ResourceFilter } from '@/components/ResourceFilter';
import { LinkedInPostCard } from '@/components/LinkedInPostCard';
import { blogPosts } from '@/lib/resources';
import { linkedInPosts } from '@/lib/linkedin-posts';
import { useState, useMemo } from 'react';

export default function ResourcesPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = useMemo(() => {
        const cats = new Set(blogPosts.map((post) => post.category));
        return Array.from(cats);
    }, []);

    const filteredPosts = useMemo(() => {
        if (activeCategory === "All") {
            return blogPosts;
        }
        return blogPosts.filter((post) => post.category === activeCategory);
    }, [activeCategory]);

    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[#7D55C7]/30">
            <MarketingHeader />

            <main className="relative pt-32 pb-24">
                {/* Background Gradients */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute left-1/4 top-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-blue-500/10 blur-[100px]" />
                    <div className="absolute right-1/4 top-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-purple-500/10 blur-[100px]" />
                </div>

                <div className="container mx-auto px-6">
                    <div className="mb-12 text-center">
                        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                            <span className="bg-gradient-to-b from-[var(--foreground)] to-[var(--foreground)]/60 bg-clip-text text-transparent">
                                Resources
                            </span>
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg text-[var(--foreground)]/60">
                            Insights, guides, and strategies for the future of customer experience.
                        </p>
                    </div>

                    <div className="mb-16">
                        <ResourceFilter
                            categories={categories}
                            activeCategory={activeCategory}
                            onSelectCategory={setActiveCategory}
                        />
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {filteredPosts.map((post) => (
                            <ResourceCard key={post.slug} post={post} />
                        ))}
                    </div>

                    {filteredPosts.length === 0 && (
                        <div className="text-center py-20 text-[var(--foreground)]/50">
                            No articles found in this category.
                        </div>
                    )}

                    {/* LinkedIn Insights Section */}
                    <div className="mt-24 pt-16 border-t border-[var(--border)]">
                        <div className="mb-8 flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-[var(--foreground)] mb-2">
                                    LinkedIn Insights
                                </h2>
                                <p className="text-[var(--foreground)]/60">
                                    Thought leadership and industry perspectives from our team.
                                </p>
                            </div>
                            <a
                                href="https://www.linkedin.com/company/fiftysixai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0A66C2]/10 text-[#0A66C2] text-sm font-medium hover:bg-[#0A66C2]/20 transition-colors"
                            >
                                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                                Follow us
                            </a>
                        </div>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {linkedInPosts.map((post) => (
                                <LinkedInPostCard key={post.id} post={post} />
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <MarketingFooter />
        </div>
    );
}
