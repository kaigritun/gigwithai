import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Start an AI Copywriting Service: Land Clients in 30 Days | GigWithAI',
  description: 'How to start an AI-powered copywriting business. Email sequences, landing pages, product descriptions. Land your first client in 30 days.',
}

export default function AICopywritingGuide() {
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
            Copywriting
          </p>
          <h1 className="text-4xl font-bold mb-6">
            Start an AI Copywriting Service: Land Clients in 30 Days
          </h1>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            Businesses need copy. Emails, landing pages, ads, product descriptions. 
            Most can&apos;t afford full-time copywriters. Enter: you, with AI as your force multiplier.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Why This Works</h2>
            <p className="text-gray-300 mb-4">
              The secret isn&apos;t that AI writes great copy (it doesn&apos;t, not without guidance). 
              The secret is:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li>• <strong>Speed</strong> — First drafts in minutes instead of hours</li>
              <li>• <strong>Volume</strong> — Handle more clients than humanly possible</li>
              <li>• <strong>Consistency</strong> — Never have writer&apos;s block again</li>
            </ul>
            <div className="bg-violet-600/10 border border-violet-500/30 rounded-lg p-4 mt-6">
              <p className="text-gray-300">
                <strong className="text-violet-400">Your value:</strong> Strategy, client communication, 
                quality control, and the judgment AI lacks.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">The Service Stack</h2>
            
            <div className="border border-white/10 rounded-lg p-6 mb-6">
              <h3 className="font-bold mb-3">What to Offer (Start Simple)</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Email sequences (welcome series, abandoned cart, newsletters)</li>
                <li>• Landing page copy</li>
                <li>• Product descriptions (e-commerce)</li>
                <li>• Social media content packages</li>
                <li>• Blog posts (with SEO)</li>
              </ul>
            </div>

            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="font-bold mb-3">Pricing</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">Email sequence (5-7 emails)</span>
                  <span className="text-violet-400 font-mono">$200-500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Landing page</span>
                  <span className="text-violet-400 font-mono">$150-400</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Product descriptions (batch of 20)</span>
                  <span className="text-violet-400 font-mono">$200-400</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Monthly social content (30 posts)</span>
                  <span className="text-violet-400 font-mono">$300-600</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Blog posts</span>
                  <span className="text-violet-400 font-mono">$75-200 each</span>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">The Workflow</h2>
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="text-violet-400 font-mono">01</span>
                <div>
                  <p className="font-medium">Client intake</p>
                  <p className="text-gray-500 text-sm">Understand their brand voice, audience, goals</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-violet-400 font-mono">02</span>
                <div>
                  <p className="font-medium">AI first draft</p>
                  <p className="text-gray-500 text-sm">Use ChatGPT/Claude with detailed prompts</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-violet-400 font-mono">03</span>
                <div>
                  <p className="font-medium">Human editing</p>
                  <p className="text-gray-500 text-sm">Add strategy, fix awkward phrasing, inject personality</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-violet-400 font-mono">04</span>
                <div>
                  <p className="font-medium">Client review</p>
                  <p className="text-gray-500 text-sm">One round of revisions included</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-violet-400 font-mono">05</span>
                <div>
                  <p className="font-medium">Deliver and invoice</p>
                  <p className="text-gray-500 text-sm">Use contracts, get paid</p>
                </div>
              </li>
            </ol>

            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mt-6">
              <p className="text-sm text-gray-300">
                <strong className="text-green-400">Time breakdown:</strong> Old way: 4 hours per landing page. 
                AI-assisted: 1-1.5 hours (same quality, more profit).
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Prompting for Copy</h2>
            <p className="text-gray-300 mb-4">Generic prompts = generic copy. Be specific:</p>
            
            <div className="space-y-4">
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="text-sm text-red-400 mb-2">❌ Bad prompt:</p>
                <p className="text-gray-400 text-sm font-mono">&quot;Write a landing page for a fitness app&quot;</p>
              </div>
              
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <p className="text-sm text-green-400 mb-2">✅ Good prompt:</p>
                <p className="text-gray-300 text-sm font-mono">
                  &quot;Write landing page copy for FitTrack, a fitness app targeting busy professionals 
                  aged 30-45. Tone: confident but not bro-y. Key benefit: 15-minute workouts that 
                  fit any schedule. Include: headline, 3 benefit sections, testimonial section 
                  framework, CTA. Address objection: &apos;I don&apos;t have time to work out.&apos;&quot;
                </p>
              </div>
            </div>

            <p className="text-gray-500 text-sm mt-4">
              <strong>Pro tip:</strong> Create prompt templates for each service type. Saves time, ensures consistency.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Landing Your First Clients</h2>
            
            <div className="space-y-6">
              <div className="border border-white/10 rounded-lg p-6">
                <h3 className="font-bold text-violet-400 mb-2">Week 1-2: Portfolio</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Create 3-5 sample pieces (pick real businesses, don&apos;t publish)</li>
                  <li>• Landing page, email sequence, social posts</li>
                  <li>• Put on simple portfolio site (Carrd, Notion, or basic site)</li>
                </ul>
              </div>

              <div className="border border-white/10 rounded-lg p-6">
                <h3 className="font-bold text-violet-400 mb-2">Week 2-3: Outreach</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• <strong>Target:</strong> Small e-commerce brands, local businesses, coaches/consultants</li>
                  <li>• <strong>Find them:</strong> Instagram, LinkedIn, local business directories</li>
                  <li>• <strong>Pitch:</strong> Specific problem + your solution + sample</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="font-bold mb-3">Sample Outreach</h3>
                <p className="text-gray-300 text-sm italic">
                  &quot;Hey [Name], saw your [website/store]. Your product looks great but the 
                  landing page copy is leaving money on the table. I specialize in conversion 
                  copy for [niche]. Would you be open to seeing a sample rewrite? No charge, 
                  just want to show you what&apos;s possible.&quot;
                </p>
              </div>

              <div className="border border-white/10 rounded-lg p-6">
                <h3 className="font-bold text-violet-400 mb-2">Week 3-4: Close and Deliver</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Follow up (most sales happen on follow-up 3-5)</li>
                  <li>• Start with small project to build trust</li>
                  <li>• Overdeliver, ask for testimonial</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Tools of the Trade</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="border border-white/10 rounded-lg p-6">
                <h3 className="font-bold mb-3">AI</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• <strong>ChatGPT Plus</strong> — Best all-around for copy</li>
                  <li>• <strong>Claude</strong> — Great for longer content</li>
                  <li>• <strong>Jasper</strong> — Marketing-specific (optional)</li>
                </ul>
              </div>

              <div className="border border-white/10 rounded-lg p-6">
                <h3 className="font-bold mb-3">Operations</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Google Docs — Client collaboration</li>
                  <li>• Notion — Project management</li>
                  <li>• Stripe/PayPal — Payments</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Scaling Up</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-gray-300">$1K-3K/month</span>
                <span className="text-gray-400 text-sm">You + AI, 5-10 clients</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-gray-300">$5K-10K/month</span>
                <span className="text-gray-400 text-sm">Raise prices, add retainer packages</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-violet-400">$10K+/month</span>
                <span className="text-gray-400 text-sm">Hire editors, focus on sales and strategy</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              <strong>Retainer model:</strong> Monthly content package. Predictable income. 
              Client pays $500-2000/month for set deliverables.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Common Objections (and Answers)</h2>
            
            <div className="space-y-4">
              <div className="border border-white/10 rounded-lg p-6">
                <p className="text-gray-400 text-sm mb-2">&quot;Isn&apos;t this just AI writing?&quot;</p>
                <p className="text-gray-300 text-sm">
                  AI creates first drafts. I bring the strategy, market research, and human 
                  judgment that makes copy actually convert. The output is 100% human-reviewed 
                  and customized.
                </p>
              </div>

              <div className="border border-white/10 rounded-lg p-6">
                <p className="text-gray-400 text-sm mb-2">&quot;I can just use ChatGPT myself&quot;</p>
                <p className="text-gray-300 text-sm">
                  You can! Most business owners don&apos;t have time to learn prompting, iterate 
                  on drafts, or stay current on what works. I handle all of that so you can 
                  focus on your business.
                </p>
              </div>

              <div className="border border-white/10 rounded-lg p-6">
                <p className="text-gray-400 text-sm mb-2">&quot;Your rates are too high&quot;</p>
                <p className="text-gray-300 text-sm">
                  You&apos;re not paying for hours, you&apos;re paying for results. One landing page 
                  that converts 2% better pays for itself many times over.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-lg p-6 mb-12">
            <h2 className="text-xl font-bold mb-4">The Bottom Line</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                AI copywriting services are a real business. You&apos;re not selling AI—you&apos;re 
                selling speed, quality, and results that AI enables.
              </p>
              <p>
                <strong className="text-white">Your move:</strong> Start with one service type. 
                Land 3 clients. Learn what they actually need. Scale from there.
              </p>
            </div>
          </section>

          <div className="flex gap-4 flex-wrap">
            <Link 
              href="/guides/ai-freelancing-first-client"
              className="text-violet-400 hover:text-violet-300"
            >
              Next: Getting Your First Freelance Client →
            </Link>
          </div>
        
          <RelatedGuides guides={[
                    {
                              slug: 'ai-freelancing-first-client',
                              title: 'Getting Your First Client',
                              description: 'Land your first copywriting client.'
                    },
                    {
                              slug: 'ai-content-creation-business',
                              title: 'Content Creation Business',
                              description: 'Expand from copywriting to content.'
                    },
                    {
                              slug: 'pricing-ai-services',
                              title: 'Pricing AI Services',
                              description: 'Price copywriting services profitably.'
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
