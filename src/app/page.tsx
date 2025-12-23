export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-500/30 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-500/30 blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
        {/* Avatar/Logo */}
        <div className="mb-8 relative group">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative h-32 w-32 rounded-full bg-gradient-to-br from-purple-400 via-pink-500 to-blue-500 p-1">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-900 text-4xl font-bold text-white">
              👋
            </div>
          </div>
        </div>

        {/* Welcome text */}
        <h1 className="mb-4 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
          欢迎访问
        </h1>

        <p className="mb-8 max-w-lg text-lg text-slate-300/80 leading-relaxed">
          这是一个简洁的个人空间，记录生活与技术的点滴。
        </p>

        {/* Feature cards */}
        <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="group rounded-2xl bg-white/5 p-6 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1">
            <div className="mb-3 text-3xl">✨</div>
            <h3 className="text-white font-semibold mb-1">简约设计</h3>
            <p className="text-slate-400 text-sm">极简风格，专注内容</p>
          </div>
          <div className="group rounded-2xl bg-white/5 p-6 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1">
            <div className="mb-3 text-3xl">🚀</div>
            <h3 className="text-white font-semibold mb-1">极速体验</h3>
            <p className="text-slate-400 text-sm">Next.js 驱动</p>
          </div>
          <div className="group rounded-2xl bg-white/5 p-6 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-pink-500/50 transition-all duration-300 hover:-translate-y-1">
            <div className="mb-3 text-3xl">💡</div>
            <h3 className="text-white font-semibold mb-1">持续更新</h3>
            <p className="text-slate-400 text-sm">敬请期待更多内容</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex gap-4">
          <a
            href="/blog"
            className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-3 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5"
          >
            <span>浏览博客</span>
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </main>

      {/* Footer with ICP */}
      <footer className="absolute bottom-0 left-0 right-0 py-6 text-center">
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <span>© 2024</span>
            <span className="text-slate-600">•</span>
            <span>All rights reserved</span>
          </div>
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-purple-400 transition-colors text-sm"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
            <span>桂ICP备2023011409号-1</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
