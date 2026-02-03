import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Stock Photo Side Hustle: Create and Sell Images with Midjourney | GigWithAI',
  description: 'Stock photography is a $4 billion market. AI tools let you compete without a camera. Build passive income selling AI-generated images.',
  keywords: ['ai stock photos', 'midjourney stock photos', 'sell ai images', 'ai passive income', 'stock photography side hustle'],
}

export default function AIStockPhotoSideHustlePage() {
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
            Stock Photography
          </p>
          <h1 className="text-4xl font-bold mb-6">
            AI Stock Photo Side Hustle: Create and Sell Images with Midjourney
          </h1>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            Stock photography is a $4 billion market. AI tools let you compete without a camera, 
            studio, or photography skills. Here&apos;s how to build a passive income stream.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Why AI Stock Photos Work</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="text-red-400 font-semibold text-sm mb-2">Traditional Photography Needs:</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Expensive camera gear</li>
                  <li>• Studio setup</li>
                  <li>• Models and releases</li>
                  <li>• Hours of editing</li>
                </ul>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <p className="text-green-400 font-semibold text-sm mb-2">AI Generation Needs:</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• $10-30/month subscription</li>
                  <li>• Prompt writing skills</li>
                  <li>• Understanding what sells</li>
                </ul>
              </div>
            </div>
            <p className="text-violet-400 font-medium">The barrier dropped. The demand didn&apos;t.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">What Actually Sells</h2>
            <p className="text-gray-300 mb-4">Before generating anything, understand the market:</p>
            
            <div className="space-y-4 mb-6">
              <div className="border border-white/10 rounded-lg p-4">
                <p className="font-bold mb-2 text-violet-400">High-demand categories:</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Business/corporate (meetings, handshakes, laptops)</li>
                  <li>• Technology (abstract tech, interfaces, data)</li>
                  <li>• Lifestyle (wellness, remote work, diversity)</li>
                  <li>• Nature/abstract (textures, backgrounds, patterns)</li>
                  <li>• Seasonal (holidays, events, themes)</li>
                </ul>
              </div>
              <div className="border border-white/10 rounded-lg p-4">
                <p className="font-bold mb-2 text-green-400">What AI excels at:</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Abstract concepts</li>
                  <li>• Impossible scenarios</li>
                  <li>• Consistent style series</li>
                  <li>• Backgrounds and textures</li>
                  <li>• Illustrations and flat designs</li>
                </ul>
              </div>
              <div className="border border-white/10 rounded-lg p-4">
                <p className="font-bold mb-2 text-red-400">What to avoid:</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Realistic human faces (legal gray area, platforms reject)</li>
                  <li>• Brand logos or products</li>
                  <li>• Celebrity likenesses</li>
                  <li>• Copyrighted characters</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">The Platform Strategy</h2>
            
            <div className="space-y-4">
              <div className="border border-white/10 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <p className="font-bold">Adobe Stock</p>
                  <span className="text-xs bg-violet-500/20 text-violet-400 px-2 py-1 rounded">33% payout</span>
                </div>
                <p className="text-sm text-gray-400">AI allowed with disclosure. High volume, established marketplace.</p>
              </div>
              <div className="border border-white/10 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <p className="font-bold">Shutterstock</p>
                  <span className="text-xs bg-violet-500/20 text-violet-400 px-2 py-1 rounded">15-40% payout</span>
                </div>
                <p className="text-sm text-gray-400">AI allowed with labeling. Huge buyer base, tiered earnings.</p>
              </div>
              <div className="border border-white/10 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <p className="font-bold">Wirestock</p>
                  <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">85% payout</span>
                </div>
                <p className="text-sm text-gray-400">AI-friendly platform. Distributes to multiple platforms automatically.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">The Production Workflow</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                  <span className="text-violet-400 font-mono">Step 1:</span>
                  Research Trending Needs
                </h3>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-sm text-gray-500 mb-2 font-mono">PROMPT</p>
                  <p className="text-gray-300 font-mono text-sm whitespace-pre-wrap">{`What visual concepts are businesses and marketers 
searching for right now? Give me 20 specific image 
ideas that would sell well on stock photo sites.
Focus on concepts AI can generate well (avoid realistic portraits).`}</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                  <span className="text-violet-400 font-mono">Step 2:</span>
                  Create with Midjourney
                </h3>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-500 mb-2 font-mono">BASE PROMPT STRUCTURE</p>
                  <p className="text-gray-300 font-mono text-sm">{`[subject], [style], [lighting], [composition], 
professional stock photo quality, clean background,
commercial use appropriate --ar 16:9 --v 6`}</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-sm text-gray-500 mb-2 font-mono">EXAMPLES THAT SELL</p>
                  <div className="space-y-3 text-gray-300 font-mono text-sm">
                    <p>{`abstract technology concept, flowing data streams, 
blue and purple gradients, professional quality,
clean minimal composition --ar 16:9 --v 6`}</p>
                    <p className="border-t border-white/10 pt-3">{`remote work lifestyle flat illustration, person at 
home desk with plants, warm color palette, modern 
vector style, commercial stock illustration --ar 4:3 --v 6`}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                  <span className="text-violet-400 font-mono">Step 3:</span>
                  Batch Production
                </h3>
                <p className="text-gray-300 mb-4">Don&apos;t create one image at a time. Build series:</p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex gap-3">
                    <span className="text-violet-400">→</span>
                    <span>Same concept, 5 color variations</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-violet-400">→</span>
                    <span>Same style, different subjects</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-violet-400">→</span>
                    <span>Same subject, different angles/compositions</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                  <span className="text-violet-400 font-mono">Step 4:</span>
                  Upscale and Prepare
                </h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• Upscale to at least 4MP (most platforms require minimum resolution)</li>
                  <li>• Use Topaz Gigapixel or similar for quality upscaling</li>
                  <li>• Save as JPEG, high quality</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                  <span className="text-violet-400 font-mono">Step 5:</span>
                  Keyword Optimization
                </h3>
                <p className="text-gray-300 mb-4">AI-generated keywords beat manual tagging.</p>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-sm text-gray-500 mb-2 font-mono">PROMPT</p>
                  <p className="text-gray-300 font-mono text-sm whitespace-pre-wrap">{`Generate 30 relevant keywords for this stock photo:
[describe your image]
Include: descriptive terms, concept terms, use-case terms, 
emotional terms. Prioritize searchable commercial terms.`}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Income Expectations (Realistic)</h2>
            <div className="space-y-4">
              <div className="border border-white/10 rounded-lg p-4">
                <div className="flex justify-between mb-2">
                  <span className="font-bold">Month 1-3</span>
                  <span className="text-gray-400">$0-50/month</span>
                </div>
                <p className="text-sm text-gray-500">Building portfolio (100-300 images). Learning what sells.</p>
              </div>
              <div className="border border-white/10 rounded-lg p-4">
                <div className="flex justify-between mb-2">
                  <span className="font-bold">Month 4-6</span>
                  <span className="text-gray-400">$50-200/month</span>
                </div>
                <p className="text-sm text-gray-500">500+ images uploaded. Patterns emerging.</p>
              </div>
              <div className="border border-white/10 rounded-lg p-4">
                <div className="flex justify-between mb-2">
                  <span className="font-bold">Month 6-12</span>
                  <span className="text-gray-400">$200-500/month</span>
                </div>
                <p className="text-sm text-gray-500">1000+ images. Focused on winners.</p>
              </div>
              <div className="border border-violet-500/30 bg-violet-500/10 rounded-lg p-4">
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-violet-400">Year 2+</span>
                  <span className="text-violet-400">$500-2000/month</span>
                </div>
                <p className="text-sm text-gray-400">Large catalog compounding. Mostly passive.</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              The key: volume + quality + time. Stock income compounds.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Legal Considerations</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <p className="text-green-400 font-semibold text-sm mb-2">Do:</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>✓ Disclose AI generation where required</li>
                  <li>✓ Use commercial-licensed AI tools</li>
                  <li>✓ Create original concepts</li>
                  <li>✓ Keep generation records</li>
                </ul>
              </div>
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="text-red-400 font-semibold text-sm mb-2">Don&apos;t:</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>✗ Upload realistic human faces without releases</li>
                  <li>✗ Copy existing artwork or photos</li>
                  <li>✗ Use free/non-commercial AI tools for sales</li>
                  <li>✗ Ignore platform terms of service</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-violet-500/10 border border-violet-500/30 rounded-lg p-6 mb-12">
            <h2 className="text-xl font-bold mb-4">Quick Start (First Week)</h2>
            <div className="space-y-4">
              <div>
                <p className="font-bold text-violet-400 mb-2">Day 1-2: Research + Setup</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Create accounts on 2-3 platforms</li>
                  <li>• Study top sellers in your niche</li>
                  <li>• Write 20 image concepts</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-violet-400 mb-2">Day 3-5: Create First Batch</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Generate 30-50 images</li>
                  <li>• Focus on variety over perfection</li>
                  <li>• Create 3-5 mini-series</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-violet-400 mb-2">Day 6-7: Upload + Optimize</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Upload with AI-generated keywords</li>
                  <li>• Write clear descriptions</li>
                  <li>• Submit for review</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Scaling Tips</h2>
            <ol className="space-y-3 text-gray-300">
              <li className="flex gap-3">
                <span className="text-violet-400 font-mono">01</span>
                <span><strong>Track what sells</strong> — Double down on winners</span>
              </li>
              <li className="flex gap-3">
                <span className="text-violet-400 font-mono">02</span>
                <span><strong>Seasonal content</strong> — Prepare 2-3 months ahead</span>
              </li>
              <li className="flex gap-3">
                <span className="text-violet-400 font-mono">03</span>
                <span><strong>Trending topics</strong> — React fast to news/culture</span>
              </li>
              <li className="flex gap-3">
                <span className="text-violet-400 font-mono">04</span>
                <span><strong>Style consistency</strong> — Build recognizable collections</span>
              </li>
              <li className="flex gap-3">
                <span className="text-violet-400 font-mono">05</span>
                <span><strong>Multiple platforms</strong> — Use Wirestock for distribution</span>
              </li>
            </ol>
            <p className="text-gray-500 text-sm mt-4 italic">
              The goal isn&apos;t one viral image. It&apos;s hundreds of decent images earning $0.30-5 each, repeatedly, while you sleep.
            </p>
          </section>

          <section className="border-t border-white/10 pt-8">
            <h2 className="text-xl font-bold mb-3">Related Guides</h2>
            <div className="flex flex-wrap gap-3">
              <Link 
                href="/guides/ai-print-on-demand"
                className="text-violet-400 hover:text-violet-300 text-sm"
              >
                AI Print-on-Demand →
              </Link>
              <Link 
                href="/guides/ai-passive-income-2026"
                className="text-violet-400 hover:text-violet-300 text-sm"
              >
                AI Passive Income 2026 →
              </Link>
              <Link 
                href="/guides/ai-side-hustles-2026"
                className="text-violet-400 hover:text-violet-300 text-sm"
              >
                AI Side Hustles 2026 →
              </Link>
            </div>
          </section>
        
          <RelatedGuides guides={[
                    {
                              slug: 'ai-print-on-demand',
                              title: 'Print on Demand',
                              description: 'Use AI images for POD.'
                    },
                    {
                              slug: 'ai-etsy-sellers',
                              title: 'AI for Etsy',
                              description: 'Sell digital art on Etsy.'
                    },
                    {
                              slug: 'ai-content-creation-business',
                              title: 'Content Creation',
                              description: 'Visual content creation business.'
                    }
          ]} />
        </article>
      </main>

      <footer className="border-t border-white/10 mt-24">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <p className="text-sm text-gray-500">
            © 2026 GigWithAI. Make money with AI tools.
          </p>
        </div>
      </footer>
    </div>
  )
}
