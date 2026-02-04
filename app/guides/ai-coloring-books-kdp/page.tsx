import Link from 'next/link'
import EmailSignup from '@/components/EmailSignup'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sell AI-Generated Coloring Books on Amazon KDP (Full Guide) | GigWithAI',
  description: 'Create and sell AI coloring books on Amazon KDP. Step-by-step guide to passive income with low-content books. $50-200/month per book potential.',
}

export default function AIColoringBooksKDPGuide() {
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
            Sell AI-Generated Coloring Books on Amazon KDP (Full Guide)
          </h1>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            Low-content books on Amazon KDP are a proven side hustle. AI makes creating them 10x faster.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Why Coloring Books Work</h2>
            <ul className="space-y-2 text-gray-300">
              <li>• <strong>Low competition</strong> in specific niches</li>
              <li>• <strong>Zero inventory</strong> - Amazon prints on demand</li>
              <li>• <strong>Passive income</strong> - Create once, sell forever</li>
              <li>• <strong>No design skills needed</strong> with AI</li>
            </ul>
            <div className="mt-4 border border-violet-500/30 rounded-lg p-4 bg-violet-600/10">
              <p className="text-gray-300">
                Average coloring book earns <span className="text-violet-400 font-bold">$50-200/month</span>. 
                Create 10 and you&apos;re at <span className="text-violet-400 font-bold">$500-2,000/month passive</span>.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">The Business Model</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-white/10 rounded-lg p-6">
                <p className="text-gray-400 text-sm mb-1">Time per book</p>
                <p className="text-2xl font-bold">4-8 hours</p>
              </div>
              <div className="border border-white/10 rounded-lg p-6">
                <p className="text-gray-400 text-sm mb-1">Potential monthly earnings</p>
                <p className="text-2xl font-bold text-emerald-400">$50-200/book</p>
              </div>
            </div>
            <ol className="mt-6 space-y-2 text-gray-300">
              <li>1. Find underserved niche</li>
              <li>2. Generate 30-50 coloring pages with AI</li>
              <li>3. Format into book with KDP specs</li>
              <li>4. Upload to Amazon</li>
              <li>5. Optimize listing and wait</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Step 1: Find Your Niche</h2>
            <p className="text-gray-300 mb-4">
              Avoid oversaturated markets (mandalas, animals). Look for:
            </p>
            <ul className="space-y-2 text-gray-400 mb-6">
              <li>• Specific hobbies (mushroom foraging, van life, birdwatching)</li>
              <li>• Professions (nurses, teachers, mechanics)</li>
              <li>• Trends (specific fandoms, viral aesthetics)</li>
            </ul>
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="font-bold text-violet-400 mb-3">Research Method</h3>
              <ol className="space-y-2 text-gray-300 text-sm">
                <li>1. Go to Amazon Books → Coloring Books</li>
                <li>2. Search niche keywords</li>
                <li>3. Check competition - <span className="text-emerald-400">under 1,000 results is good</span></li>
                <li>4. Look at bestseller ranks - <span className="text-emerald-400">under 100,000 means it sells</span></li>
              </ol>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Step 2: Generate Coloring Pages</h2>
            
            <div className="border border-white/10 rounded-lg p-6 mb-4">
              <h3 className="font-bold text-violet-400 mb-3">Best AI Tools</h3>
              
              <div className="mb-4">
                <p className="text-gray-300 font-medium mb-2">Midjourney ($10/month)</p>
                <div className="bg-black/50 rounded p-3 font-mono text-sm text-gray-300">
                  [subject] coloring book page, black and white line art, clean outlines, no shading, white background --ar 8:10
                </div>
                <p className="text-gray-400 text-xs mt-2">
                  Example: &quot;cozy coffee shop interior coloring book page, black and white line art, clean outlines, no shading, white background --ar 8:10&quot;
                </p>
              </div>

              <div className="mb-4">
                <p className="text-gray-300 font-medium mb-2">Leonardo.ai (free tier)</p>
                <p className="text-gray-400 text-sm">Use &quot;Deliberate&quot; or &quot;DreamShaper&quot; models with similar prompts.</p>
              </div>

              <div>
                <p className="text-gray-300 font-medium mb-2">DALL-E 3</p>
                <p className="text-gray-400 text-sm">Works but sometimes adds shading. Specify &quot;no gray, no shading, only black outlines on white.&quot;</p>
              </div>
            </div>

            <div className="border border-emerald-500/20 rounded-lg p-6 bg-emerald-600/5">
              <h3 className="font-bold text-emerald-400 mb-3">Quality Checklist</h3>
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
            <h2 className="text-2xl font-bold mb-6">Step 3: Format for Amazon KDP</h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="border border-white/10 rounded-lg p-6">
                <h3 className="font-bold text-violet-400 mb-3">Specifications</h3>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• <strong>Interior:</strong> 8.5 x 11 inches</li>
                  <li>• <strong>File type:</strong> PDF</li>
                  <li>• <strong>Resolution:</strong> 300 DPI minimum</li>
                  <li>• <strong>Margins:</strong> 0.25&quot; minimum</li>
                </ul>
              </div>
              <div className="border border-white/10 rounded-lg p-6">
                <h3 className="font-bold text-violet-400 mb-3">Tools for Formatting</h3>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• <strong>Canva</strong> - Free, easy to use</li>
                  <li>• <strong>Adobe InDesign</strong> - Professional</li>
                  <li>• <strong>Book Bolt</strong> - Specifically for KDP, $10/month</li>
                </ul>
              </div>
            </div>

            <div className="border border-white/10 rounded-lg p-6">
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
            <h2 className="text-2xl font-bold mb-6">Step 4: Create Your Cover</h2>
            <p className="text-gray-300 mb-4">Your cover sells the book. AI can help here too.</p>
            <div className="bg-black/50 rounded p-3 font-mono text-sm text-gray-300 mb-4">
              book cover design for [niche] coloring book, featuring [key elements], vibrant colors, professional typography space at top --ar 2:3
            </div>
            <p className="text-gray-400 text-sm mb-4">Then add title text in Canva.</p>
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="font-bold text-violet-400 mb-3">Cover Requirements</h3>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• <strong>Front:</strong> 8.75 x 11.25 inches</li>
                <li>• <strong>Full wrap (with spine):</strong> Calculate based on page count</li>
                <li>• <strong>Format:</strong> PDF, 300 DPI</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Step 5: Upload to Amazon KDP</h2>
            <ol className="space-y-2 text-gray-300">
              <li>1. Create KDP account (free): <span className="text-violet-400">kdp.amazon.com</span></li>
              <li>2. Create new Paperback</li>
              <li>3. Enter book details (title, description, keywords)</li>
              <li>4. Upload interior PDF</li>
              <li>5. Upload cover PDF</li>
              <li>6. Set price ($6.99-9.99 works well)</li>
              <li>7. Publish</li>
            </ol>
            <p className="text-gray-400 text-sm mt-4">Amazon review takes 24-72 hours.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Step 6: Optimize Your Listing</h2>
            
            <div className="border border-white/10 rounded-lg p-6 mb-4">
              <h3 className="font-bold text-violet-400 mb-3">Title Formula</h3>
              <div className="bg-black/50 rounded p-3 text-sm text-gray-300 mb-2">
                [Main Keyword]: [Benefit/Description] Coloring Book for [Audience]
              </div>
              <p className="text-gray-400 text-sm">
                Example: &quot;Cozy Coffee Shops: A Relaxing Coloring Book for Adults Who Love Café Culture&quot;
              </p>
            </div>

            <div className="border border-white/10 rounded-lg p-6 mb-4">
              <h3 className="font-bold text-violet-400 mb-3">Keywords (7 slots)</h3>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• Main niche keyword</li>
                <li>• Alternative terms</li>
                <li>• Audience terms</li>
                <li>• Benefit terms</li>
                <li>• Related interests</li>
              </ul>
            </div>

            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="font-bold text-violet-400 mb-3">Description</h3>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• Lead with benefits</li>
                <li>• Describe what&apos;s inside</li>
                <li>• Include page count</li>
                <li>• Mention paper quality (one-sided printing)</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Realistic Expectations</h2>
            <div className="space-y-3">
              <div className="border border-white/10 rounded-lg p-4">
                <span className="text-violet-400 font-mono text-sm">Month 1</span>
                <p className="text-gray-300">0-5 sales (Amazon learning your book)</p>
              </div>
              <div className="border border-white/10 rounded-lg p-4">
                <span className="text-violet-400 font-mono text-sm">Month 2-3</span>
                <p className="text-gray-300">5-20 sales if niche is good</p>
              </div>
              <div className="border border-violet-500/30 rounded-lg p-4 bg-violet-600/10">
                <span className="text-violet-400 font-mono text-sm">Month 6+</span>
                <p className="text-gray-300">Stabilizes at 10-50 sales/month for good books</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Some books flop. That&apos;s normal. The strategy is volume—create 10+ books across different niches.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Scaling Strategy</h2>
            <ol className="space-y-2 text-gray-300">
              <li>1. Create one book, test the process</li>
              <li>2. If it sells, create more in same niche</li>
              <li>3. Expand to adjacent niches</li>
              <li>4. Build a catalog of 20-50 books</li>
              <li>5. Let compound growth do its work</li>
            </ol>
            <div className="mt-4 border border-emerald-500/20 rounded-lg p-4 bg-emerald-600/5">
              <p className="text-emerald-400 font-medium">
                At $100/month average per book with 20 books = $2,000/month passive
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Common Mistakes</h2>
            <ul className="space-y-3 text-gray-300">
              <li>• <strong className="text-red-400">Too broad niche</strong> - &quot;Animals&quot; won&apos;t rank. &quot;Backyard Birds of the Pacific Northwest&quot; might.</li>
              <li>• <strong className="text-red-400">Poor line quality</strong> - Buyers leave bad reviews for messy lines</li>
              <li>• <strong className="text-red-400">Wrong pricing</strong> - Under $5.99 looks cheap, over $12.99 is too expensive</li>
              <li>• <strong className="text-red-400">Giving up too early</strong> - Books need 2-3 months to gain traction</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Getting Started Today</h2>
            <div className="border border-violet-500/30 rounded-lg p-6 bg-violet-600/10">
              <ol className="space-y-2 text-gray-300">
                <li>1. Research 3 potential niches (1 hour)</li>
                <li>2. Pick the best one based on competition</li>
                <li>3. Generate 10 test pages (1 hour)</li>
                <li>4. Evaluate quality, adjust prompts</li>
                <li>5. Generate full set of 40 pages (2-3 hours)</li>
                <li>6. Format and upload (2 hours)</li>
              </ol>
              <p className="text-violet-400 font-medium mt-4">
                Your first book can be live within a week.
              </p>
            </div>
          </section>

          <EmailSignup headline="Want more passive income ideas?" buttonText="Get Free Tips" />

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
              AI Print on Demand →
            </Link>
          </div>
        
          <RelatedGuides guides={[
            {
              slug: 'ai-passive-income-2026',
              title: 'AI Passive Income',
              description: '7 ways to make money while you sleep.'
            },
            {
              slug: 'ai-etsy-sellers',
              title: 'AI for Etsy Sellers',
              description: 'Double your Etsy sales with AI.'
            },
            {
              slug: 'ai-print-on-demand',
              title: 'AI Print on Demand',
              description: 'Start a POD business with AI.'
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
