import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import EmailSignup from '@/components/EmailSignup'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sell AI-Generated Coloring Books on Amazon KDP (Full Guide) | GigWithAI',
  description: 'Complete guide to creating and selling AI-generated coloring books on Amazon KDP. Step-by-step: niche research, AI tools, formatting, and scaling to $500-2,000/month passive income.',
}

export default function AIColoringBooksGuide() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
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

      <main className="max-w-3xl mx-auto px-6 py-16">
        <Link 
          href="/guides" 
          className="text-sm text-gray-500 hover:text-white transition mb-8 inline-block"
        >
          ← Back to Guides
        </Link>

        <article>
          <p className="text-violet-400 text-sm font-mono uppercase tracking-wider mb-4">
            Passive Income
          </p>
          <h1 className="text-4xl font-bold mb-6">
            Sell AI-Generated Coloring Books on Amazon KDP
          </h1>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            Low-content books on Amazon KDP are a proven side hustle. AI makes creating them 10x faster.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Why Coloring Books Work</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-white/10 rounded-lg p-6">
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>✓ Low competition in specific niches</li>
                  <li>✓ Zero inventory - Amazon prints on demand</li>
                  <li>✓ Passive income - create once, sell forever</li>
                  <li>✓ No design skills needed with AI</li>
                </ul>
              </div>
              <div className="border border-violet-500/30 rounded-lg p-6 bg-violet-600/10">
                <p className="text-gray-400 text-sm mb-2">Average earnings per book</p>
                <p className="text-3xl font-bold text-violet-400">$50-200/mo</p>
                <p className="text-gray-400 text-sm mt-2">Create 10 books = $500-2,000/mo passive</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">The Business Model</h2>
            <div className="bg-black/30 rounded-lg p-6 border border-white/10">
              <ol className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-violet-400 font-bold">1.</span>
                  <span>Find underserved niche</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-violet-400 font-bold">2.</span>
                  <span>Generate 30-50 coloring pages with AI</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-violet-400 font-bold">3.</span>
                  <span>Format into book with KDP specs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-violet-400 font-bold">4.</span>
                  <span>Upload to Amazon</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-violet-400 font-bold">5.</span>
                  <span>Optimize listing and wait</span>
                </li>
              </ol>
              <div className="border-t border-white/10 mt-4 pt-4 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-400">Time per book</p>
                  <p className="font-bold text-white">4-8 hours</p>
                </div>
                <div>
                  <p className="text-gray-400">Potential monthly earnings</p>
                  <p className="font-bold text-violet-400">$50-200 per book</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Step 1: Find Your Niche</h2>
            <p className="text-gray-300 mb-4">Avoid oversaturated markets (mandalas, animals). Look for:</p>
            <ul className="space-y-2 text-gray-300 text-sm mb-4">
              <li>• Specific hobbies (mushroom foraging, van life, birdwatching)</li>
              <li>• Professions (nurses, teachers, mechanics)</li>
              <li>• Trends (specific fandoms, viral aesthetics)</li>
            </ul>
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="font-bold text-violet-400 mb-3">Research Method</h3>
              <ol className="space-y-2 text-gray-300 text-sm">
                <li>1. Go to Amazon Books → Coloring Books</li>
                <li>2. Search niche keywords</li>
                <li>3. Check competition - <strong>under 1,000 results is good</strong></li>
                <li>4. Look at bestseller ranks - <strong>under 100,000 means it sells</strong></li>
              </ol>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Step 2: Generate Coloring Pages</h2>
            <div className="border border-white/10 rounded-lg p-6 mb-4">
              <h3 className="font-bold text-violet-400 mb-3">Midjourney Prompt Formula ($10/mo)</h3>
              <div className="bg-black/50 rounded p-3 text-sm font-mono text-gray-300 mb-2">
                [subject] coloring book page, black and white line art, clean outlines, no shading, white background --ar 8:10
              </div>
              <p className="text-gray-400 text-sm">Example: &quot;cozy coffee shop interior coloring book page, black and white line art, clean outlines, no shading, white background --ar 8:10&quot;</p>
            </div>
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="font-bold text-violet-400 mb-3">Quality Checklist</h3>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>✓ Clean, closed lines (no gaps)</li>
                <li>✓ No gray shading</li>
                <li>✓ Good variety of detail levels</li>
                <li>✓ Interesting compositions</li>
              </ul>
              <p className="text-gray-400 text-sm mt-3">Generate 40+ pages, keep the best 30-35.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Step 3: Format for Amazon KDP</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-white/10 rounded-lg p-6">
                <h3 className="font-bold text-violet-400 mb-3">Specifications</h3>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• Interior: 8.5 x 11 inches</li>
                  <li>• File type: PDF</li>
                  <li>• Resolution: 300 DPI minimum</li>
                  <li>• Margins: 0.25&quot; minimum</li>
                </ul>
              </div>
              <div className="border border-white/10 rounded-lg p-6">
                <h3 className="font-bold text-violet-400 mb-3">Tools</h3>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• <strong>Canva</strong> (free) - Easy to use</li>
                  <li>• <strong>Book Bolt</strong> ($10/mo) - KDP specific</li>
                  <li>• <strong>Adobe InDesign</strong> - Overkill</li>
                </ul>
              </div>
            </div>
            <div className="border border-white/10 rounded-lg p-6 mt-4">
              <h3 className="font-bold text-violet-400 mb-3">Page Structure</h3>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• Title page</li>
                <li>• Copyright page</li>
                <li>• 30-35 coloring pages (one-sided with blank backs)</li>
                <li>• Back page with simple CTA</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Step 4-5: Upload and Optimize</h2>
            <div className="border border-white/10 rounded-lg p-6 mb-4">
              <h3 className="font-bold text-violet-400 mb-3">Title Formula</h3>
              <div className="bg-black/50 rounded p-3 text-sm text-gray-300">
                [Main Keyword]: [Benefit/Description] Coloring Book for [Audience]
              </div>
              <p className="text-gray-400 text-sm mt-2">Example: &quot;Cozy Coffee Shops: A Relaxing Coloring Book for Adults Who Love Café Culture&quot;</p>
            </div>
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="font-bold text-violet-400 mb-3">Pricing Sweet Spot</h3>
              <p className="text-gray-300 text-sm mb-2">$6.99-9.99 works best</p>
              <ul className="space-y-1 text-gray-400 text-sm">
                <li>• Under $5.99 looks cheap</li>
                <li>• Over $12.99 is too expensive</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Realistic Expectations</h2>
            <div className="border border-white/10 rounded-lg p-6">
              <div className="space-y-3 text-gray-300 text-sm">
                <div className="flex justify-between">
                  <span>Month 1:</span>
                  <span className="text-gray-400">0-5 sales (Amazon learning)</span>
                </div>
                <div className="flex justify-between">
                  <span>Month 2-3:</span>
                  <span className="text-gray-400">5-20 sales if niche is good</span>
                </div>
                <div className="flex justify-between">
                  <span>Month 6+:</span>
                  <span className="text-violet-400 font-bold">10-50 sales/month for good books</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-4 border-t border-white/10 pt-4">
                Some books flop. That&apos;s normal. The strategy is volume—create 10+ books across different niches.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Common Mistakes</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-red-500/20 rounded-lg p-6 bg-red-600/5">
                <h3 className="font-bold text-red-400 mb-3">❌ Avoid</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Too broad niche (&quot;Animals&quot;)</li>
                  <li>• Poor line quality</li>
                  <li>• Wrong pricing</li>
                  <li>• Giving up too early</li>
                </ul>
              </div>
              <div className="border border-emerald-500/20 rounded-lg p-6 bg-emerald-600/5">
                <h3 className="font-bold text-emerald-400 mb-3">✅ Do</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Specific niches (&quot;Backyard Birds of PNW&quot;)</li>
                  <li>• Clean, closed lines</li>
                  <li>• $6.99-9.99 range</li>
                  <li>• Wait 2-3 months for traction</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Getting Started Today</h2>
            <div className="bg-gradient-to-r from-violet-600/20 to-purple-600/20 border border-violet-500/30 rounded-lg p-6">
              <ol className="space-y-2 text-gray-300">
                <li>1. Research 3 potential niches (1 hour)</li>
                <li>2. Pick the best one based on competition</li>
                <li>3. Generate 10 test pages (1 hour)</li>
                <li>4. Evaluate quality, adjust prompts</li>
                <li>5. Generate full set of 40 pages (2-3 hours)</li>
                <li>6. Format and upload (2 hours)</li>
              </ol>
              <p className="text-violet-400 mt-4 font-bold">Your first book can be live within a week.</p>
            </div>
          </section>

          <EmailSignup />

          <div className="flex gap-4 flex-wrap mt-12">
            <Link 
              href="/guides/ai-passive-income-2026"
              className="text-violet-400 hover:text-violet-300"
            >
              ← AI Passive Income
            </Link>
            <Link 
              href="/guides/ai-print-on-demand"
              className="text-violet-400 hover:text-violet-300 ml-auto"
            >
              Print on Demand →
            </Link>
          </div>
        
          <RelatedGuides guides={[
            {
              slug: 'ai-passive-income-2026',
              title: 'AI Passive Income',
              description: 'Realistic passive income with AI.'
            },
            {
              slug: 'ai-print-on-demand',
              title: 'Print on Demand',
              description: 'Sell AI designs on products.'
            },
            {
              slug: 'how-to-sell-ai-art',
              title: 'Sell AI Art',
              description: 'Monetize your AI artwork.'
            }
          ]} />
        </article>
      </main>

      <footer className="border-t border-white/10 mt-24">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <p className="text-sm text-gray-500">
            © 2026 GigWithAI. Real guides for real income.
          </p>
        </div>
      </footer>
    </div>
  )
}
