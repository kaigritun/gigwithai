import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Nav */}
      <nav className="border-b border-white/10 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-violet-400">
            GigWithAI
          </Link>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/guides" className="hover:text-white transition">Guides</Link>
            <Link href="/tools" className="hover:text-white transition">Tools</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-violet-400 text-sm font-mono uppercase tracking-wider mb-4">
            Make Money With AI
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Start Your AI Side Hustle Today
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Practical guides to earning extra income with AI tools. No fluff, no get-rich-quick schemes—just real methods that work.
          </p>
          <Link 
            href="/guides"
            className="inline-block bg-violet-600 hover:bg-violet-500 text-white px-8 py-3 rounded-lg font-medium transition"
          >
            Browse Guides →
          </Link>
        </div>
      </section>

      {/* Guides Preview */}
      <section className="px-6 py-16 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-8">
            Featured Guides
          </p>
          
          <div className="space-y-4">
            <Link 
              href="/guides/ai-content-creation-business"
              className="block p-6 border border-white/10 rounded-lg hover:border-violet-500/50 hover:bg-white/[0.02] transition group"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-violet-400 transition">
                    Start an AI Content Creation Business
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Build a content creation service using AI. Services, pricing, tools, and getting clients.
                  </p>
                </div>
                <span className="text-violet-400 opacity-0 group-hover:opacity-100 transition">→</span>
              </div>
              <div className="mt-4 flex gap-2">
                <span className="text-xs px-2 py-1 bg-violet-500/10 text-violet-400 rounded">Beginner</span>
                <span className="text-xs px-2 py-1 bg-white/5 text-gray-400 rounded">18 min read</span>
              </div>
            </Link>

            <Link 
              href="/guides/ai-side-hustles-2026"
              className="block p-6 border border-white/10 rounded-lg hover:border-violet-500/50 hover:bg-white/[0.02] transition group"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-violet-400 transition">
                    10 AI Side Hustles You Can Start This Week
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Realistic income opportunities with AI—from content creation to automation services.
                  </p>
                </div>
                <span className="text-violet-400 opacity-0 group-hover:opacity-100 transition">→</span>
              </div>
              <div className="mt-4 flex gap-2">
                <span className="text-xs px-2 py-1 bg-violet-500/10 text-violet-400 rounded">Beginner</span>
                <span className="text-xs px-2 py-1 bg-white/5 text-gray-400 rounded">15 min read</span>
              </div>
            </Link>

            <Link 
              href="/guides/ai-freelancing-first-client"
              className="block p-6 border border-white/10 rounded-lg hover:border-violet-500/50 hover:bg-white/[0.02] transition group"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-violet-400 transition">
                    AI Freelancing: Getting Your First Client
                  </h3>
                  <p className="text-gray-400 text-sm">
                    How to position, price, and land your first AI services client on Upwork or Fiverr.
                  </p>
                </div>
                <span className="text-violet-400 opacity-0 group-hover:opacity-100 transition">→</span>
              </div>
              <div className="mt-4 flex gap-2">
                <span className="text-xs px-2 py-1 bg-amber-500/10 text-amber-400 rounded">Intermediate</span>
                <span className="text-xs px-2 py-1 bg-white/5 text-gray-400 rounded">25 min read</span>
              </div>
            </Link>
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            More guides coming soon
          </p>
        </div>
      </section>

      {/* Why This Works */}
      <section className="px-6 py-16 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-8">
            Why AI Side Hustles
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl mb-3">⚡</div>
              <h3 className="font-semibold mb-2">Low Barrier to Entry</h3>
              <p className="text-gray-400 text-sm">
                Most AI tools have free tiers. Start earning with zero upfront investment.
              </p>
            </div>
            <div>
              <div className="text-2xl mb-3">📈</div>
              <h3 className="font-semibold mb-2">Scale Your Time</h3>
              <p className="text-gray-400 text-sm">
                AI lets you do in minutes what used to take hours. Multiply your output.
              </p>
            </div>
            <div>
              <div className="text-2xl mb-3">🎯</div>
              <h3 className="font-semibold mb-2">Real Demand</h3>
              <p className="text-gray-400 text-sm">
                Businesses need AI help but don&apos;t know where to start. That&apos;s your opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© 2026 GigWithAI</p>
          <div className="flex gap-6">
            <Link href="/guides" className="hover:text-white transition">Guides</Link>
            <Link href="/tools" className="hover:text-white transition">Tools</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
