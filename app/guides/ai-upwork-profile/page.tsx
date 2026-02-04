import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import EmailSignup from '@/components/EmailSignup'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Use AI to Create a Winning Upwork Profile | GigWithAI',
  description: 'Use AI to build an Upwork profile that actually converts. Step-by-step guide to crafting your title, overview, and portfolio descriptions with ChatGPT.',
  openGraph: {
    title: 'How to Use AI to Create a Winning Upwork Profile',
    description: 'Use AI to build an Upwork profile that actually converts. Step-by-step guide to crafting your title, overview, and portfolio descriptions with ChatGPT.',
    type: 'article',
    url: 'https://gigwithai.com/guides/ai-upwork-profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Use AI to Create a Winning Upwork Profile',
    description: 'Use AI to build an Upwork profile that actually converts. Step-by-step guide to crafting your title, overview, and portfolio descriptions with ChatGPT.',
  },
}

export default function AIUpworkProfileGuide() {
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
            Freelancing
          </p>
          <h1 className="text-4xl font-bold mb-6">
            How to Use AI to Create a Winning Upwork Profile
          </h1>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            Your Upwork profile is your 24/7 salesperson. A good one gets invites while you sleep. Here&apos;s how to use AI to build a profile that actually converts.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">The AI Profile Framework</h2>
            
            <div className="border border-white/10 rounded-lg p-6 mb-4">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-lg">Step 1: Analyze Top Performers</h3>
                <span className="text-violet-400 font-mono text-sm">Research</span>
              </div>
              <p className="text-gray-300 text-sm mb-4">Before writing anything, study what works.</p>
              <div className="bg-black/30 rounded p-4 text-sm font-mono text-gray-300">
                <p className="text-gray-500 mb-2">// Prompt:</p>
                <p>I&apos;m a [your specialty] freelancer on Upwork. Based on successful freelancer profiles in this category, what elements make a profile convert well? Consider:</p>
                <p>- Title structure</p>
                <p>- Overview length and format</p>
                <p>- Social proof elements</p>
                <p>- Call-to-action approach</p>
              </div>
            </div>

            <div className="border border-white/10 rounded-lg p-6 mb-4">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-lg">Step 2: Craft Your Title</h3>
                <span className="text-violet-400 font-mono text-sm">&lt;70 chars</span>
              </div>
              <p className="text-gray-300 text-sm mb-4">Your title appears in search results. It needs to be specific and benefit-focused.</p>
              <div className="bg-black/30 rounded p-4 text-sm font-mono text-gray-300 mb-4">
                <p className="text-gray-500 mb-2">// Prompt:</p>
                <p>I&apos;m a [specialty] who helps [target clients] achieve [outcome]. Generate 10 Upwork title options that:</p>
                <p>- Lead with the benefit to the client</p>
                <p>- Include my specialty</p>
                <p>- Are under 70 characters</p>
                <p>- Don&apos;t use buzzwords like &quot;guru&quot; or &quot;ninja&quot;</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="border border-emerald-500/20 rounded-lg p-4 bg-emerald-600/5">
                  <p className="text-emerald-400 font-bold mb-2 text-sm">✅ Good Titles</p>
                  <ul className="text-gray-300 text-xs space-y-1">
                    <li>• Email Copywriter | 30%+ Open Rates for SaaS</li>
                    <li>• WordPress Developer | Sites That Load in Under 2 Seconds</li>
                    <li>• B2B Content Writer | Case Studies That Close Deals</li>
                  </ul>
                </div>
                <div className="border border-red-500/20 rounded-lg p-4 bg-red-600/5">
                  <p className="text-red-400 font-bold mb-2 text-sm">❌ Bad Titles</p>
                  <ul className="text-gray-300 text-xs space-y-1">
                    <li>• Expert Writer and Content Creator</li>
                    <li>• Full Stack Development Ninja</li>
                    <li>• Marketing Guru Available for Hire</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border border-white/10 rounded-lg p-6 mb-4">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-lg">Step 3: Write Your Overview</h3>
                <span className="text-violet-400 font-mono text-sm">5 seconds</span>
              </div>
              <p className="text-gray-300 text-sm mb-4">Your overview has 5 seconds to hook them. Structure matters.</p>
              
              <div className="bg-violet-900/20 border border-violet-500/30 rounded-lg p-4 mb-4">
                <p className="text-violet-400 font-bold mb-2">The Formula:</p>
                <ol className="text-gray-300 text-sm space-y-1">
                  <li>1. Hook (problem you solve)</li>
                  <li>2. Credibility (proof you can solve it)</li>
                  <li>3. How you work (process)</li>
                  <li>4. Call to action</li>
                </ol>
              </div>

              <div className="bg-black/30 rounded p-4 text-sm font-mono text-gray-300">
                <p className="text-gray-500 mb-2">// Prompt:</p>
                <p>Write an Upwork overview for a [specialty] freelancer with this background: [paste your experience/results]</p>
                <p className="mt-2">Structure:</p>
                <p>- Opening hook about the client&apos;s problem (1-2 sentences)</p>
                <p>- My relevant experience and results (2-3 sentences)</p>
                <p>- How I work/my process (2-3 sentences)</p>
                <p>- Clear call to action (1 sentence)</p>
                <p className="mt-2">Keep it under 300 words. Use first person. Sound confident but not arrogant.</p>
              </div>
            </div>

            <div className="border border-white/10 rounded-lg p-6 mb-4">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-lg">Step 4: Optimize Specializations</h3>
                <span className="text-violet-400 font-mono text-sm">Algorithm</span>
              </div>
              <p className="text-gray-300 text-sm mb-4">Upwork&apos;s algorithm weighs your specializations heavily.</p>
              <div className="bg-black/30 rounded p-4 text-sm font-mono text-gray-300">
                <p className="text-gray-500 mb-2">// Prompt:</p>
                <p>I offer these services: [list your services]</p>
                <p>My target clients are in these industries: [list industries]</p>
                <p className="mt-2">Suggest the top 10 Upwork specializations I should add to maximize visibility for my ideal projects.</p>
              </div>
            </div>

            <div className="border border-white/10 rounded-lg p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-lg">Step 5: Portfolio Descriptions</h3>
                <span className="text-violet-400 font-mono text-sm">Context</span>
              </div>
              <p className="text-gray-300 text-sm mb-4">Each portfolio item needs context.</p>
              <div className="bg-black/30 rounded p-4 text-sm font-mono text-gray-300">
                <p className="text-gray-500 mb-2">// Prompt:</p>
                <p>Write a portfolio description for this project: [describe the project briefly]</p>
                <p className="mt-2">Include:</p>
                <p>- What the client needed</p>
                <p>- What I delivered</p>
                <p>- The measurable result (if applicable)</p>
                <p className="mt-2">Keep it under 100 words.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">More Sections AI Can Optimize</h2>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="border border-white/10 rounded-lg p-4">
                <p className="font-bold text-violet-400 mb-2">Skills</p>
                <p className="text-gray-400 text-sm">Ask for top 15 skills for maximum searchability</p>
              </div>
              <div className="border border-white/10 rounded-lg p-4">
                <p className="font-bold text-violet-400 mb-2">Employment</p>
                <p className="text-gray-400 text-sm">Rewrite to emphasize relevant Upwork skills</p>
              </div>
              <div className="border border-white/10 rounded-lg p-4">
                <p className="font-bold text-violet-400 mb-2">Certifications</p>
                <p className="text-gray-400 text-sm">Identify high-impact certifications to add</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Avoiding AI Detection</h2>
            <p className="text-gray-400 mb-4">Clients are getting better at spotting AI-generated profiles. Here&apos;s how to keep it human:</p>
            <div className="border border-white/10 rounded-lg p-6">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-violet-400 font-bold">1.</span>
                  <span><strong>Add specific numbers</strong> — &quot;Wrote 147 articles&quot; beats &quot;extensive experience&quot;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-violet-400 font-bold">2.</span>
                  <span><strong>Include personality</strong> — One quirky detail makes you memorable</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-violet-400 font-bold">3.</span>
                  <span><strong>Reference real projects</strong> — Specifics AI can&apos;t fake</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-violet-400 font-bold">4.</span>
                  <span><strong>Use your natural voice</strong> — Edit the AI output to sound like you</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-violet-400 font-bold">5.</span>
                  <span><strong>Include photos of your work</strong> — Visual proof is unassailable</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">The Profile Audit</h2>
            <p className="text-gray-400 mb-4">Once written, run this check:</p>
            <div className="bg-black/30 rounded p-4 text-sm font-mono text-gray-300">
              <p className="text-gray-500 mb-2">// Prompt:</p>
              <p>Review this Upwork profile and identify:</p>
              <p>- Any generic phrases that should be more specific</p>
              <p>- Claims without proof</p>
              <p>- Missed opportunities to show results</p>
              <p>- Anything that sounds AI-generated</p>
              <p className="mt-2">[paste your profile]</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Quick Wins</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-white/10 rounded-lg p-4">
                <p className="font-bold text-white mb-1">📸 Profile photo</p>
                <p className="text-gray-400 text-sm">Professional headshot, smile, good lighting</p>
              </div>
              <div className="border border-white/10 rounded-lg p-4">
                <p className="font-bold text-white mb-1">🎥 Video intro</p>
                <p className="text-gray-400 text-sm">60 seconds explaining your approach</p>
              </div>
              <div className="border border-white/10 rounded-lg p-4">
                <p className="font-bold text-white mb-1">🟢 Availability badge</p>
                <p className="text-gray-400 text-sm">Keep it green</p>
              </div>
              <div className="border border-white/10 rounded-lg p-4">
                <p className="font-bold text-white mb-1">⚡ Response time</p>
                <p className="text-gray-400 text-sm">Reply to invites within 2 hours</p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-violet-600/20 to-purple-600/20 border border-violet-500/30 rounded-lg p-8 mb-12">
            <h2 className="text-xl font-bold mb-4">The Bottom Line</h2>
            <p className="text-gray-300 mb-4">
              Your profile is an investment. Spend 2 hours optimizing it with AI, and it&apos;ll work for you for years.
            </p>
            <p className="text-gray-300">
              Start with your title and overview. Get those right, and everything else follows.
            </p>
          </section>

          <EmailSignup 
            headline="Building your freelance business?"
            buttonText="Get Weekly AI Tips"
          />

          <div className="flex gap-4 flex-wrap mt-8">
            <Link 
              href="/guides/chatgpt-for-freelancers"
              className="text-violet-400 hover:text-violet-300"
            >
              ← ChatGPT for Freelancers Guide
            </Link>
            <Link 
              href="/guides/sell-chatgpt-services"
              className="text-violet-400 hover:text-violet-300 ml-auto"
            >
              Sell ChatGPT Services →
            </Link>
          </div>
        
          <RelatedGuides guides={[
            {
              slug: 'chatgpt-for-freelancers',
              title: 'ChatGPT for Freelancers',
              description: '10x your freelance output.'
            },
            {
              slug: 'chatgpt-client-acquisition',
              title: 'Client Acquisition Scripts',
              description: 'Cold outreach that works.'
            },
            {
              slug: 'ai-freelancing-first-client',
              title: 'Getting Your First Client',
              description: 'Land your first AI services client.'
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
