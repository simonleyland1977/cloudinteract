
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/lib/resources';

interface FeaturedResourcesProps {
    posts: BlogPost[];
}

export function FeaturedResources({ posts }: FeaturedResourcesProps) {
    if (!posts || posts.length === 0) return null;

    const mainPost = posts[0];
    const sidePosts = posts.slice(1, 3);

    return (
        <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Featured Post */}
                <Link href={`/resources/${mainPost.slug}`} className="lg:col-span-2 group">
                    <div className="relative h-[400px] w-full overflow-hidden rounded-2xl">
                        {mainPost.image ? (
                            <Image
                                src={mainPost.image}
                                alt={mainPost.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        ) : (
                            <div className="w-full h-full bg-linear-to-br from-blue-600 to-purple-600" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-8">
                            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-white uppercase bg-blue-600 rounded-full">
                                {mainPost.category}
                            </span>
                            <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
                                {mainPost.title}
                            </h3>
                            <p className="text-gray-200 line-clamp-2 max-w-2xl text-lg">
                                {mainPost.excerpt}
                            </p>
                        </div>
                    </div>
                </Link>

                {/* Side Posts */}
                <div className="flex flex-col gap-6">
                    {sidePosts.map((post) => (
                        <Link key={post.slug} href={`/resources/${post.slug}`} className="group flex-1">
                            <div className="relative h-full min-h-[190px] w-full overflow-hidden rounded-2xl">
                                {post.image ? (
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-linear-to-br from-indigo-600 to-pink-600" />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                                <div className="absolute bottom-0 left-0 p-6">
                                    <span className="inline-block px-2 py-0.5 mb-2 text-[10px] font-semibold tracking-wider text-white uppercase bg-gray-800/80 backdrop-blur-xs rounded-full">
                                        {post.category}
                                    </span>
                                    <h3 className="text-lg font-bold text-white group-hover:text-blue-200 transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
