import Link from 'next/link'

export const metadata = {
  title: 'AI Tools for Side Hustles | GigWithAI',
  description: 'Recommended AI tools to build your side hustle.',
}

export default function ToolsPage() {
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
            <Link href="/tools" className="text-white">Tools</Link>
          </div>
        </div>
      </nav>

      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">AI Tools</h1>
          <p className="text-gray-400 mb-12">Tools I recommend for AI side hustles. Coming soon.</p>

          <div className="p-8 border border-white/10 rounded-lg text-center">
            <p className="text-gray-500">Tool recommendations coming soon</p>
            <p className="text-sm text-gray-600 mt-2">Check back next week</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 mt-auto absolute bottom-0 w-full">
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
