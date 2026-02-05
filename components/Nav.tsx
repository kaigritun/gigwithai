import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="border-b border-white/10 px-6 py-4 sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-md z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link href="/" className="font-bold text-xl text-violet-400 hover:text-violet-300 transition-colors">
          GigWithAI
        </Link>
        <div className="flex gap-6 text-sm text-white/60">
          <Link href="/guides" className="hover:text-white transition-colors">
            Guides
          </Link>
          <Link href="/tools" className="hover:text-white transition-colors">
            Tools
          </Link>
        </div>
      </div>
    </nav>
  )
}
