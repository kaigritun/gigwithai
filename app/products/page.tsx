import Link from 'next/link'
import { products, Product } from '@/lib/products'

export const metadata = {
  title: 'AI Side Hustle Products - Prompts, Cheat Sheets & Templates',
  description: 'Digital products to launch your AI side hustle. Prompt packs, business cheat sheets, and automation templates.',
}

function ProductCard({ product }: { product: Product }) {
  const formatPrice = (cents: number) => `$${(cents / 100).toFixed(0)}`
  
  return (
    <Link 
      href={`/products/${product.slug}`}
      className="group bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors"
    >
      <span className="text-xs uppercase tracking-wider text-purple-400 mb-2 block">
        {product.category.replace('-', ' ')}
      </span>
      <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition-colors">
        {product.name}
      </h3>
      <p className="text-sm text-zinc-400 mb-4">{product.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold">{formatPrice(product.price)}</span>
        <span className="text-sm text-zinc-500 group-hover:text-purple-400 transition-colors">
          View →
        </span>
      </div>
    </Link>
  )
}

export default function ProductsPage() {
  const promptPacks = products.filter(p => p.category === 'prompt-pack')
  const cheatSheets = products.filter(p => p.category === 'cheat-sheet')

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">GigWithAI</Link>
          <nav className="flex gap-6 text-sm text-zinc-400">
            <Link href="/guides" className="hover:text-white">Guides</Link>
            <Link href="/tools" className="hover:text-white">Tools</Link>
            <Link href="/products" className="hover:text-white text-white">Products</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Side Hustle Accelerators
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Digital products to launch and scale your AI-powered side business. Prompts, cheat sheets, and proven templates.
          </p>
        </div>

        {/* Prompt Packs */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">AI Prompt Packs</h2>
          <p className="text-zinc-400 mb-8">
            Copy-paste prompts for building your side hustle. Use with ChatGPT, Claude, or any AI assistant.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {promptPacks.map(product => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </section>

        {/* Cheat Sheets */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Business Cheat Sheets</h2>
          <p className="text-zinc-400 mb-8">
            Quick-reference guides for freelancing and side hustles. Print them, keep them handy, grow faster.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cheatSheets.map(product => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-zinc-500">
          © 2026 GigWithAI. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
