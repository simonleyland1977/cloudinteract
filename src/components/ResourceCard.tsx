import Link from 'next/link';
import { BlogPost } from '@/lib/resources';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

interface ResourceCardProps {
    post: BlogPost;
}

export function ResourceCard({ post }: ResourceCardProps) {
    return (
        <article className="group relative flex flex-col justify-between rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 backdrop-blur-sm transition-all hover:border-[#7D55C7]/30 hover:bg-[var(--card)]">
            <div>
                <div className="mb-4 flex items-center justify-between text-xs text-[var(--foreground)]/60">
                    <span className="rounded-full bg-blue-500/10 px-3 py-1 text-blue-400">
                        {post.category}
                    </span>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{post.readTime}</span>
                        </div>
                    </div>
                </div>

                <h3 className="mb-3 text-xl font-bold text-[var(--foreground)] group-hover:text-[#7D55C7] transition-colors">
                    <Link href={`/resources/${post.slug}`} className="focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        {post.title}
                    </Link>
                </h3>

                <p className="mb-6 text-[var(--foreground)]/60 line-clamp-3">
                    {post.excerpt}
                </p>
            </div>

            <div className="flex items-center text-sm font-medium text-blue-400 group-hover:text-blue-300">
                Read Article
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
        </article>
    );
}
