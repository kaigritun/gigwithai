import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Create and Sell Online Courses with AI (2026) | GigWithAI',
  description: 'Build profitable online courses in weeks, not months. Learn the AI-powered workflow for research, creation, and launch.',
}

export default function AIOnlineCoursePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <nav className="border-b border-white/10 px-6 py-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link href="/" className="font-semibold text-lg hover:text-orange-400 transition-colors">
            GigWithAI
          </Link>
          <div className="flex gap-6 text-sm text-white/60">
            <Link href="/guides" className="hover:text-white transition-colors">Guides</Link>
            <Link href="/tools" className="hover:text-white transition-colors">Tools</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <Link 
          href="/guides" 
          className="text-sm text-white/50 hover:text-white transition-colors mb-8 inline-block"
        >
          ← Back to Guides
        </Link>

        <article className="prose-custom">
          <p className="text-orange-400 font-mono text-sm mb-4 uppercase tracking-wider">
            Digital Products
          </p>
          <h1 className="text-4xl font-bold mb-6">
            How to Create and Sell Online Courses with AI (2026)
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Online courses are a $300B+ market. The barrier to entry used to be months of production. 
            Now? AI lets you launch in weeks.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Why Courses + AI = Perfect Side Hustle</h2>
              <ul className="space-y-2 text-white/70">
                <li><span className="text-orange-400 font-bold">High margins:</span> Digital product, no inventory</li>
                <li><span className="text-orange-400 font-bold">Passive income:</span> Create once, sell forever</li>
                <li><span className="text-orange-400 font-bold">AI acceleration:</span> What took 3 months now takes 3 weeks</li>
                <li><span className="text-orange-400 font-bold">Credibility builder:</span> Positions you as an expert</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The AI-Powered Course Creation Stack</h2>
              <div className="grid gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="font-bold text-orange-400 mb-2">Planning & Research</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li><span className="text-white">ChatGPT/Claude:</span> Course outlines, module structure, learning objectives</li>
                    <li><span className="text-white">Perplexity:</span> Market research, competitor analysis</li>
                    <li><span className="text-white">Google Trends:</span> Validate demand</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="font-bold text-orange-400 mb-2">Content Creation</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li><span className="text-white">Claude:</span> Lesson scripts, workbook content, quiz questions</li>
                    <li><span className="text-white">Descript:</span> Video editing, auto-transcription</li>
                    <li><span className="text-white">Canva AI:</span> Slide decks, worksheets, graphics</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="font-bold text-orange-400 mb-2">Production</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li><span className="text-white">ElevenLabs:</span> Professional voiceover if needed</li>
                    <li><span className="text-white">Synthesia:</span> AI avatar videos (optional)</li>
                    <li><span className="text-white">Loom:</span> Quick screen recordings</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="font-bold text-orange-400 mb-2">Hosting & Sales</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li><span className="text-white">Teachable/Thinkific:</span> Course platform</li>
                    <li><span className="text-white">Gumroad:</span> Simple digital sales</li>
                    <li><span className="text-white">Notion:</span> Budget-friendly course delivery</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step-by-Step: Course in 3 Weeks</h2>
              
              <div className="space-y-6">
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                  <h3 className="font-bold text-orange-400 mb-3">Week 1: Research & Outline</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-white font-medium mb-2">Day 1-2: Validate the idea</p>
                      <div className="bg-black/30 rounded p-3 font-mono text-xs text-white/70">
                        I want to create an online course about [topic]. Help me validate by:<br/>
                        1. Identifying the target audience<br/>
                        2. Listing 5 specific problems they have<br/>
                        3. Finding 3 competitor courses and their weaknesses<br/>
                        4. Suggesting a unique angle I could take
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-white font-medium mb-2">Day 3-4: Create the curriculum</p>
                      <div className="bg-black/30 rounded p-3 font-mono text-xs text-white/70">
                        Create a detailed course outline for [topic] with:<br/>
                        - 5-7 modules<br/>
                        - 3-5 lessons per module<br/>
                        - Learning objectives for each lesson<br/>
                        - One practical exercise per module<br/>
                        - Suggested lesson length (aim for 5-10 min each)
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-white font-medium">Day 5-7: Prep materials</p>
                      <ul className="text-white/70 text-sm mt-1 space-y-1">
                        <li>• Use AI to draft lesson scripts</li>
                        <li>• Create workbook templates</li>
                        <li>• Design slide frameworks</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="font-bold text-orange-400 mb-3">Week 2: Content Production</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-white font-medium">Recording strategy:</p>
                      <ul className="text-white/70 text-sm mt-1 space-y-1">
                        <li>• Batch similar lessons together</li>
                        <li>• Use Descript to edit (removes &quot;ums&quot;, long pauses)</li>
                        <li>• Screen share for tutorials, talking head for personal</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-white font-medium">Supporting materials:</p>
                      <ul className="text-white/70 text-sm mt-1 space-y-1">
                        <li>• Generate quiz questions with AI</li>
                        <li>• Create PDF workbooks</li>
                        <li>• Build resource lists</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="font-bold text-orange-400 mb-3">Week 3: Launch Prep</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-white font-medium mb-2">Sales page (AI-assisted):</p>
                      <div className="bg-black/30 rounded p-3 font-mono text-xs text-white/70">
                        Write sales page copy for my course [name] targeting [audience]. Include:<br/>
                        - Headline and subheadline<br/>
                        - Problem/solution framing<br/>
                        - Module breakdown with benefits<br/>
                        - FAQ section<br/>
                        - Price anchoring strategy
                      </div>
                    </div>
                    <div>
                      <p className="text-white font-medium">Launch checklist:</p>
                      <ul className="text-white/70 text-sm mt-1 space-y-1">
                        <li>• Platform setup complete</li>
                        <li>• Payment processing tested</li>
                        <li>• Email automation connected</li>
                        <li>• Beta testers for feedback</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Pricing Strategy</h2>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-white font-medium mb-2">General guidelines:</p>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• <span className="text-white">Mini-course (1-2 hours):</span> $27-97</li>
                    <li>• <span className="text-white">Standard course (3-6 hours):</span> $97-297</li>
                    <li>• <span className="text-white">Premium course (6+ hours + community):</span> $297-997</li>
                  </ul>
                </div>
                <p className="text-white/70">
                  <span className="text-orange-400 font-medium">Start lower, raise over time.</span> First 50 
                  students at launch price builds momentum and testimonials.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Marketing Without Being Salesy</h2>
              <div className="grid gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="font-bold text-orange-400 mb-2">Content marketing</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Free YouTube videos on related topics</li>
                    <li>• Blog posts that rank for course keywords</li>
                    <li>• LinkedIn posts sharing expertise</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="font-bold text-orange-400 mb-2">Borrowed audiences</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Podcast guest appearances</li>
                    <li>• Newsletter sponsorships</li>
                    <li>• Affiliate partnerships</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="font-bold text-orange-400 mb-2">Community building</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Free Facebook group or Discord</li>
                    <li>• Email list with genuine value</li>
                    <li>• Twitter/LinkedIn thought leadership</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Revenue Projections (Conservative)</h2>
              <div className="bg-white/5 rounded-lg p-4">
                <p className="font-bold text-orange-400 mb-3">$97 course example:</p>
                <div className="space-y-2 text-white/70 text-sm">
                  <p>Month 1: 20 sales = <span className="text-white">$1,940</span></p>
                  <p>Month 3: 50 sales = <span className="text-white">$4,850</span></p>
                  <p>Month 6: 100 sales = <span className="text-white">$9,700</span></p>
                  <p>Year 1: 500 sales = <span className="text-orange-400 font-bold">$48,500</span></p>
                </div>
                <p className="text-white/50 text-sm mt-4 pt-4 border-t border-white/10">
                  These numbers assume consistent marketing. Courses don&apos;t sell themselves—budget 
                  50% of your time for marketing.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Common Mistakes</h2>
              <ol className="text-white/70 space-y-2">
                <li><span className="text-red-400 font-bold">1.</span> <span className="text-white">Overproduction:</span> Perfect is the enemy of done. Ship v1, improve later.</li>
                <li><span className="text-red-400 font-bold">2.</span> <span className="text-white">No validation:</span> Don&apos;t build courses nobody wants.</li>
                <li><span className="text-red-400 font-bold">3.</span> <span className="text-white">Pricing too low:</span> Cheap signals low value. Charge what it&apos;s worth.</li>
                <li><span className="text-red-400 font-bold">4.</span> <span className="text-white">Launch and abandon:</span> Marketing is ongoing, not one-time.</li>
                <li><span className="text-red-400 font-bold">5.</span> <span className="text-white">Too broad:</span> &quot;Marketing Course&quot; fails. &quot;TikTok Ads for Etsy Sellers&quot; wins.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Quick Win: The Micro-Course</h2>
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-white/70 mb-3">
                  Not ready for a full course? Start with a micro-course:
                </p>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>• 30-60 minutes total</li>
                  <li>• Solve ONE specific problem</li>
                  <li>• Price at $19-47</li>
                  <li>• Use as lead magnet or tripwire</li>
                </ul>
                <p className="text-white/50 text-sm mt-4 pt-4 border-t border-white/10">
                  Gets you customer feedback and testimonials fast. Expand into full course once validated.
                </p>
              </div>
            </section>

            <section className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">The AI Advantage</h2>
              <p className="text-white/70">
                Your competitors are spending 6 months on course creation. You&apos;re launching in 3 weeks 
                with AI assistance.
              </p>
              <p className="text-white/70 mt-4">
                Same quality (often better, because AI helps with structure and clarity). 4x faster execution.
              </p>
              <p className="text-orange-400 mt-4 font-medium">
                That&apos;s not cheating. That&apos;s working smart.
              </p>
              <p className="text-white/70 mt-4">
                Start this week. Pick your topic, validate with AI research, outline your curriculum. 
                First lesson recorded within 7 days.
              </p>
            </section>
          </div>
        </article>

        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-white/40 text-sm mb-4">Related Guides</p>
          <div className="grid gap-4">
            <Link 
              href="/guides/ai-youtube-channel"
              className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors block"
            >
              <p className="font-semibold">Start an AI-Powered YouTube Channel</p>
              <p className="text-white/50 text-sm mt-1">Build a YouTube presence with AI assistance</p>
            </Link>
            <Link 
              href="/guides/ai-content-creation-business"
              className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors block"
            >
              <p className="font-semibold">AI Content Creation Business</p>
              <p className="text-white/50 text-sm mt-1">Turn content creation into income</p>
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 mt-16">
        <div className="max-w-5xl mx-auto text-center text-white/40 text-sm">
          <p>© 2026 GigWithAI. Practical guides for AI-powered income.</p>
        </div>
      </footer>
    </div>
  )
}
