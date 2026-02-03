import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Create and Sell Online Courses with AI (2026) | GigWithAI',
  description: 'Online courses are a $300B+ market. AI lets you launch in weeks, not months. Complete guide to planning, creating, and selling.',
}

export default function AIOnlineCourseBusinessPage() {
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
            Digital Products
          </p>
          <h1 className="text-4xl font-bold mb-6">
            How to Create and Sell Online Courses with AI (2026)
          </h1>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            Online courses are a $300B+ market. The barrier to entry used to be months of production. 
            Now? AI lets you launch in weeks.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Why Courses + AI = Perfect Side Hustle</h2>
            <ul className="space-y-3 text-gray-300">
              <li>• <strong>High margins:</strong> Digital product, no inventory</li>
              <li>• <strong>Passive income:</strong> Create once, sell forever</li>
              <li>• <strong>AI acceleration:</strong> What took 3 months now takes 3 weeks</li>
              <li>• <strong>Credibility builder:</strong> Positions you as an expert</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">The AI-Powered Course Creation Stack</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <h3 className="font-bold mb-3 text-violet-400">Planning & Research</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• ChatGPT/Claude for outlines</li>
                  <li>• Perplexity for market research</li>
                  <li>• Google Trends to validate demand</li>
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <h3 className="font-bold mb-3 text-violet-400">Content Creation</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Claude for lesson scripts</li>
                  <li>• Descript for video editing</li>
                  <li>• Canva AI for slides/graphics</li>
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <h3 className="font-bold mb-3 text-violet-400">Production</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• ElevenLabs for voiceover</li>
                  <li>• Synthesia for AI avatars (optional)</li>
                  <li>• Loom for screen recordings</li>
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <h3 className="font-bold mb-3 text-violet-400">Hosting & Sales</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Teachable/Thinkific</li>
                  <li>• Gumroad for simple sales</li>
                  <li>• Notion (budget-friendly)</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Step-by-Step: Course in 3 Weeks</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-violet-400">Week 1: Research & Outline</h3>
                
                <div className="space-y-4">
                  <div className="border-l-2 border-violet-500 pl-6">
                    <h4 className="font-bold mb-2">Day 1-2: Validate the Idea</h4>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <p className="text-sm text-gray-500 mb-2 font-mono">PROMPT</p>
                      <p className="text-gray-300 font-mono text-sm whitespace-pre-wrap">{`I want to create an online course about [topic]. Help me validate this idea by:
1. Identifying the target audience
2. Listing 5 specific problems they have
3. Finding 3 competitor courses and their weaknesses
4. Suggesting a unique angle I could take`}</p>
                    </div>
                  </div>

                  <div className="border-l-2 border-violet-500 pl-6">
                    <h4 className="font-bold mb-2">Day 3-4: Create the Curriculum</h4>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <p className="text-sm text-gray-500 mb-2 font-mono">PROMPT</p>
                      <p className="text-gray-300 font-mono text-sm whitespace-pre-wrap">{`Create a detailed course outline for [topic] with:
- 5-7 modules
- 3-5 lessons per module
- Learning objectives for each lesson
- One practical exercise per module
- Suggested lesson length (aim for 5-10 min each)`}</p>
                    </div>
                  </div>

                  <div className="border-l-2 border-violet-500 pl-6">
                    <h4 className="font-bold mb-2">Day 5-7: Prep Materials</h4>
                    <ul className="space-y-1 text-gray-300">
                      <li>• Use AI to draft lesson scripts</li>
                      <li>• Create workbook templates</li>
                      <li>• Design slide frameworks</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-violet-400">Week 2: Content Production</h3>
                
                <div className="space-y-4">
                  <div className="border-l-2 border-violet-500 pl-6">
                    <h4 className="font-bold mb-2">Recording Strategy</h4>
                    <ul className="space-y-1 text-gray-300">
                      <li>• Batch similar lessons together</li>
                      <li>• Use Descript to edit (removes &ldquo;ums&rdquo;, long pauses)</li>
                      <li>• Screen share for tutorials, talking head for personal content</li>
                    </ul>
                  </div>

                  <div className="border-l-2 border-violet-500 pl-6">
                    <h4 className="font-bold mb-2">AI-Assisted Editing</h4>
                    <ul className="space-y-1 text-gray-300">
                      <li>• Auto-captions with Descript</li>
                      <li>• AI-suggested cuts and pacing</li>
                      <li>• Bulk export for platform upload</li>
                    </ul>
                  </div>

                  <div className="border-l-2 border-violet-500 pl-6">
                    <h4 className="font-bold mb-2">Supporting Materials</h4>
                    <ul className="space-y-1 text-gray-300">
                      <li>• Generate quiz questions with AI</li>
                      <li>• Create PDF workbooks</li>
                      <li>• Build resource lists</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-violet-400">Week 3: Launch Prep</h3>
                
                <div className="space-y-4">
                  <div className="border-l-2 border-violet-500 pl-6">
                    <h4 className="font-bold mb-2">Sales Page</h4>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <p className="text-sm text-gray-500 mb-2 font-mono">PROMPT</p>
                      <p className="text-gray-300 font-mono text-sm whitespace-pre-wrap">{`Write sales page copy for my course [name] targeting [audience]. Include:
- Headline and subheadline
- Problem/solution framing  
- Module breakdown with benefits
- Social proof section (I'll add testimonials)
- FAQ section
- Price anchoring strategy`}</p>
                    </div>
                  </div>

                  <div className="border-l-2 border-violet-500 pl-6">
                    <h4 className="font-bold mb-2">Email Sequence</h4>
                    <ul className="space-y-1 text-gray-300">
                      <li>• Welcome email</li>
                      <li>• 3-5 nurture emails</li>
                      <li>• Cart open/close sequence</li>
                    </ul>
                  </div>

                  <div className="border-l-2 border-violet-500 pl-6">
                    <h4 className="font-bold mb-2">Launch Checklist</h4>
                    <ul className="space-y-1 text-gray-300">
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

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Pricing Strategy</h2>
            
            <p className="text-gray-300 mb-4">Research competitors first. What do similar courses charge?</p>
            
            <div className="space-y-3 mb-6">
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex justify-between items-center">
                <span className="text-gray-300">Mini-course (1-2 hours)</span>
                <span className="text-violet-400 font-bold">$27-97</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex justify-between items-center">
                <span className="text-gray-300">Standard course (3-6 hours)</span>
                <span className="text-violet-400 font-bold">$97-297</span>
              </div>
              <div className="bg-violet-600/10 border border-violet-500/30 rounded-lg p-4 flex justify-between items-center">
                <span className="text-gray-300">Premium course (6+ hours + community)</span>
                <span className="text-violet-400 font-bold">$297-997</span>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm">
              <strong className="text-white">Start lower, raise over time.</strong> First 50 students at launch price builds momentum and testimonials.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Marketing Without Being Salesy</h2>
            
            <div className="space-y-6">
              <div className="border-l-2 border-violet-500 pl-6">
                <h3 className="font-bold mb-2">Content Marketing</h3>
                <ul className="space-y-1 text-gray-300">
                  <li>• Free YouTube videos on related topics</li>
                  <li>• Blog posts that rank for course keywords</li>
                  <li>• LinkedIn posts sharing expertise</li>
                </ul>
              </div>

              <div className="border-l-2 border-violet-500 pl-6">
                <h3 className="font-bold mb-2">Borrowed Audiences</h3>
                <ul className="space-y-1 text-gray-300">
                  <li>• Podcast guest appearances</li>
                  <li>• Newsletter sponsorships</li>
                  <li>• Affiliate partnerships</li>
                </ul>
              </div>

              <div className="border-l-2 border-violet-500 pl-6">
                <h3 className="font-bold mb-2">Community Building</h3>
                <ul className="space-y-1 text-gray-300">
                  <li>• Free Facebook group or Discord</li>
                  <li>• Email list with genuine value</li>
                  <li>• Twitter/LinkedIn thought leadership</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Revenue Projections (Conservative)</h2>
            
            <div className="bg-violet-600/10 border border-violet-500/30 rounded-lg p-6 mb-4">
              <p className="text-gray-400 mb-4">$97 course example:</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">Month 1: 20 sales</span>
                  <span className="text-white font-bold">$1,940</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Month 3: 50 sales</span>
                  <span className="text-white font-bold">$4,850</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Month 6: 100 sales</span>
                  <span className="text-white font-bold">$9,700</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-violet-500/30">
                  <span className="text-violet-400 font-bold">Year 1: 500 sales</span>
                  <span className="text-violet-400 font-bold">$48,500</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm">
              These numbers assume consistent marketing. Courses don&apos;t sell themselves—budget 50% of your time for marketing.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Common Mistakes</h2>
            <ol className="space-y-3 text-gray-300">
              <li><strong>1. Overproduction:</strong> Perfect is the enemy of done. Ship v1, improve later.</li>
              <li><strong>2. No validation:</strong> Don&apos;t build courses nobody wants.</li>
              <li><strong>3. Pricing too low:</strong> Cheap signals low value. Charge what it&apos;s worth.</li>
              <li><strong>4. Launch and abandon:</strong> Marketing is ongoing, not one-time.</li>
              <li><strong>5. Too broad:</strong> &ldquo;Marketing Course&rdquo; fails. &ldquo;TikTok Ads for Etsy Sellers&rdquo; wins.</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Quick Win: The Micro-Course</h2>
            <p className="text-gray-300 mb-4">Not ready for a full course? Start with a micro-course:</p>
            <ul className="space-y-2 text-gray-300 mb-4">
              <li>• 30-60 minutes total</li>
              <li>• Solve ONE specific problem</li>
              <li>• Price at $19-47</li>
              <li>• Use as lead magnet or tripwire</li>
            </ul>
            <p className="text-gray-400 text-sm">
              This gets you customer feedback and testimonials fast. Expand into full course once validated.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">The AI Advantage</h2>
            <p className="text-gray-300 mb-4">
              Your competitors are spending 6 months on course creation. You&apos;re launching in 3 weeks with AI assistance.
            </p>
            <div className="bg-violet-600/10 border border-violet-500/30 rounded-lg p-6">
              <p className="text-violet-400 font-bold text-lg">
                Same quality (often better, because AI helps with structure and clarity). 4x faster execution.
              </p>
            </div>
            <p className="text-gray-400 mt-6">
              That&apos;s not cheating. That&apos;s working smart.
            </p>
            <p className="text-gray-300 mt-4">
              Start this week. Pick your topic, validate with AI research, outline your curriculum. 
              First lesson recorded within 7 days.
            </p>
          </section>

          <div className="border-t border-white/10 pt-8 mt-12">
            <Link 
              href="/guides" 
              className="text-violet-400 hover:text-violet-300 transition"
            >
              ← More Guides
            </Link>
          </div>
        </article>
      </main>
    </div>
  )
}
