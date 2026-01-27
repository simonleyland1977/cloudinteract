"use client";

import { ExternalLink } from "lucide-react";

export interface LinkedInPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    linkedInUrl: string;
    author?: string;
}

interface LinkedInPostCardProps {
    post: LinkedInPost;
}

export function LinkedInPostCard({ post }: LinkedInPostCardProps) {
    return (
        <a
            href={post.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 backdrop-blur-sm transition-all hover:border-[#0A66C2]/50 hover:shadow-lg hover:shadow-[#0A66C2]/5"
        >
            <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    {/* LinkedIn Logo */}
                    <svg
                        className="h-5 w-5 text-[#0A66C2]"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span className="text-xs font-medium text-[#0A66C2]">LinkedIn</span>
                </div>
                <span className="text-xs text-[var(--foreground)]/50">{post.date}</span>
            </div>

            <h3 className="mb-2 text-lg font-semibold text-[var(--foreground)] group-hover:text-[#0A66C2] transition-colors line-clamp-2">
                {post.title}
            </h3>

            <p className="mb-4 text-sm text-[var(--foreground)]/60 line-clamp-3">
                {post.excerpt}
            </p>

            {post.author && (
                <p className="mb-4 text-xs text-[var(--foreground)]/40">
                    By {post.author}
                </p>
            )}

            <div className="flex items-center text-sm font-medium text-[#0A66C2] group-hover:underline">
                Read on LinkedIn
                <ExternalLink className="ml-2 h-4 w-4" />
            </div>
        </a>
    );
}
