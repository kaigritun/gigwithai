'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Product } from '@/lib/products'

export default function ProductClient({ product }: { product: Product }) {
  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productSlug: product.slug }),
      })
      const { url, error } = await response.json()
      if (error) throw new Error(error)
      window.location.href = url
    } catch (error) {
      console.error('Checkout failed:', error)
      setLoading(false)
    }
  }

  const formatPrice = (cents: number) => `$${(cents / 100).toFixed(0)}`

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">GigWithAI</Link>
          <nav className="flex gap-6 text-sm text-zinc-400">
            <Link href="/guides" className="hover:text-white">Guides</Link>
            <Link href="/tools" className="hover:text-white">Tools</Link>
            <Link href="/products" className="hover:text-white">Products</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <nav className="text-sm text-zinc-500 mb-8">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-white">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-zinc-300">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Info */}
          <div>
            <span className="text-xs uppercase tracking-wider text-purple-400 mb-2 block">
              {product.category.replace('-', ' ')}
            </span>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-xl text-zinc-400 mb-6">{product.description}</p>
            <p className="text-zinc-300 mb-8">{product.longDescription}</p>

            {/* Features */}
            <div className="mb-8">
              <h3 className="font-semibold mb-3">What you get:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-zinc-300">
                    <svg className="w-5 h-5 text-purple-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Purchase Card */}
          <div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 sticky top-8">
              <div className="text-center mb-6">
                <span className="text-5xl font-bold">{formatPrice(product.price)}</span>
                <span className="text-zinc-500 ml-2">one-time</span>
              </div>

              <button
                onClick={handleCheckout}
                disabled={loading}
                className="w-full bg-purple-500 hover:bg-purple-400 text-white font-semibold py-4 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed mb-4"
              >
                {loading ? 'Processing...' : 'Get Instant Access'}
              </button>

              <p className="text-center text-xs text-zinc-500 mb-6">
                Instant download after purchase
              </p>

              {/* What's Included */}
              <div className="border-t border-zinc-800 pt-6">
                <h4 className="font-semibold mb-3 text-sm">Includes:</h4>
                <ul className="space-y-2 text-sm text-zinc-400">
                  {product.includes.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Guarantee */}
              <div className="mt-6 pt-6 border-t border-zinc-800 text-center">
                <p className="text-xs text-zinc-500">
                  🔒 Secure payment via Stripe
                </p>
              </div>
            </div>
          </div>
        </div>
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
