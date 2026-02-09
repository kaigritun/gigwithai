import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24 text-center">
      <p className="text-violet-400 font-mono text-sm mb-4">404</p>
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Page not found</h1>
      <p className="text-xl text-white/60 mb-8">
        This page doesn't exist. Maybe you were looking for one of these?
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link 
          href="/guides"
          className="bg-violet-600 hover:bg-violet-500 text-white font-medium px-6 py-3 rounded-lg transition-all"
        >
          Browse Guides
        </Link>
        <Link 
          href="/"
          className="border border-white/20 hover:border-white/40 px-6 py-3 rounded-lg transition-all"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}
