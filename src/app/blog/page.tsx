import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
    title: "博客 - 文章列表",
    description: "浏览所有博客文章",
};

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Animated background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl animate-pulse" />
                <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl animate-pulse" />
            </div>

            {/* Grid pattern */}
            <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
                {/* Header */}
                <header className="mb-12">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                            />
                        </svg>
                        返回首页
                    </Link>

                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent mb-4">
                        博客文章
                    </h1>
                    <p className="text-slate-400 text-lg">
                        记录技术与生活的点滴 · 共 {posts.length} 篇文章
                    </p>
                </header>

                {/* Posts List */}
                <div className="space-y-6">
                    {posts.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-slate-400 text-lg">暂无文章，敬请期待...</p>
                        </div>
                    ) : (
                        posts.map((post) => (
                            <article
                                key={post.slug}
                                className="group relative rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300"
                            >
                                <Link href={`/blog/${post.slug}`} className="block">
                                    {/* Date & Tags */}
                                    <div className="flex flex-wrap items-center gap-3 mb-3">
                                        <time className="text-sm text-slate-500">{post.date}</time>
                                        <span className="text-slate-600">•</span>
                                        <div className="flex flex-wrap gap-2">
                                            {post.tags.slice(0, 3).map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-2 py-0.5 text-xs rounded-full bg-purple-500/20 text-purple-300"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h2 className="text-xl md:text-2xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                                        {post.title}
                                    </h2>

                                    {/* Description */}
                                    <p className="text-slate-400 line-clamp-2 mb-4">
                                        {post.description}
                                    </p>

                                    {/* Read more */}
                                    <div className="flex items-center gap-2 text-purple-400 text-sm font-medium">
                                        <span>阅读全文</span>
                                        <svg
                                            className="w-4 h-4 transition-transform group-hover:translate-x-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                                            />
                                        </svg>
                                    </div>
                                </Link>
                            </article>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
