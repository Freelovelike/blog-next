import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const slugs = getAllPostSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) {
        return { title: "文章未找到" };
    }
    return {
        title: `${post.title} - 博客`,
        description: post.description,
    };
}

export default async function PostPage({ params }: Props) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Animated background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl animate-pulse" />
                <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl animate-pulse" />
            </div>

            {/* Grid pattern */}
            <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto px-6 py-16">
                {/* Back link */}
                <Link
                    href="/blog"
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
                    返回列表
                </Link>

                {/* Article Header */}
                <header className="mb-10">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                        <time className="text-sm text-slate-500">{post.date}</time>
                        <span className="text-slate-600">•</span>
                        <span className="text-sm text-slate-500">作者: {post.author}</span>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {post.title}
                    </h1>

                    <p className="text-lg text-slate-400 mb-4">{post.description}</p>

                    <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-300"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </header>

                {/* Article Content */}
                <article className="prose prose-invert prose-purple max-w-none prose-headings:text-white prose-p:text-slate-300 prose-li:text-slate-300 prose-strong:text-white prose-a:text-purple-400 prose-a:no-underline hover:prose-a:underline prose-code:text-pink-400 prose-code:bg-slate-800/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-slate-800/80 prose-pre:border prose-pre:border-white/10 prose-blockquote:border-l-purple-500 prose-blockquote:text-slate-400 prose-hr:border-white/10 prose-table:text-slate-300 prose-th:text-white prose-td:border-white/10 prose-th:border-white/10">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {post.content}
                    </ReactMarkdown>
                </article>

                {/* Footer */}
                <footer className="mt-16 pt-8 border-t border-white/10">
                    <div className="flex justify-between items-center">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
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
                            查看更多文章
                        </Link>

                        <Link
                            href="/"
                            className="text-slate-400 hover:text-white transition-colors"
                        >
                            返回首页
                        </Link>
                    </div>
                </footer>
            </div>
        </div>
    );
}
