
"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/lib/resources';
import { Search } from 'lucide-react';

interface ResourceBrowserProps {
    initialPosts: BlogPost[];
    categories: string[];
}

export function ResourceBrowser({ initialPosts, categories }: ResourceBrowserProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [visibleCount, setVisibleCount] = useState(6);

    const filteredPosts = useMemo(() => {
        return initialPosts.filter(post => {
            const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
            const matchesSearch = searchQuery === '' ||
                post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());

            return matchesCategory && matchesSearch;
        });
    }, [initialPosts, selectedCategory, searchQuery]);

    const visiblePosts = filteredPosts.slice(0, visibleCount);
    const hasMore = visibleCount < filteredPosts.length;

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 6);
    };

    return (
        <div className="space-y-8">
            {/* Controls Container */}
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/10">

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                    <button
                        onClick={() => setSelectedCategory('All')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === 'All'
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'bg-transparent text-slate-400 hover:text-white hover:bg-white/5'
                            }`}
                    >
                        All
                    </button>
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                                ? 'bg-blue-600 text-white shadow-md'
                                : 'bg-transparent text-slate-400 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Search Bar */}
                <div className="relative w-full md:w-64">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-slate-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search articles..."
                        className="block w-full pl-10 pr-3 py-2 border border-white/10 rounded-lg leading-5 bg-white/5 text-white placeholder-slate-500 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {visiblePosts.length > 0 ? (
                    visiblePosts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/resources/${post.slug}`}
                            className="group flex flex-col bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="flex-1 p-6 flex flex-col">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="px-3 py-1 text-xs font-semibold text-blue-400 bg-blue-500/10 rounded-full">
                                        {post.category}
                                    </span>
                                    <div className="flex items-center gap-2 text-sm text-slate-400">
                                        <span>{post.readTime || '5 min read'}</span>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                                    {post.title}
                                </h3>

                                <p className="text-slate-400 mb-4 line-clamp-3 flex-1 text-sm leading-relaxed">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center text-blue-400 font-medium text-sm mt-auto pt-4 border-t border-white/10">
                                    Read Article
                                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))
                ) : (
                    <div className="col-span-full text-center py-12">
                        <h3 className="text-lg font-medium text-white">No articles found</h3>
                        <p className="text-slate-400 mt-2">Try adjusting your search or category filter</p>
                    </div>
                )}
            </div>

            {/* Load More Button */}
            {hasMore && (
                <div className="flex justify-center pt-8">
                    <button
                        onClick={handleLoadMore}
                        className="px-8 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-colors"
                    >
                        Load More Articles
                    </button>
                </div>
            )}
        </div>
    );
}
