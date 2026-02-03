import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Get Your First AI Freelance Client | GigWithAI',
  description: 'Step-by-step guide to landing your first paying client as an AI freelancer. Practical tactics that work in 2026.',
}

export default function AIFreelancingFirstClient() {
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
            Getting Your First AI Freelance Client
          </h1>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            The hardest client is the first one. Here&apos;s exactly how to land it—no 
            fluff, no waiting for clients to find you.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Week 1: Setup</h2>
            
            <div className="space-y-6">
              <div className="border-l-2 border-violet-500 pl-6">
                <h3 className="font-bold mb-2">Day 1-2: Pick Your Service</h3>
                <p className="text-gray-400 mb-3">
                  Don&apos;t be a generalist. Pick ONE thing:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• AI-assisted content writing</li>
                  <li>• ChatGPT prompt engineering</li>
                  <li>• AI chatbot setup</li>
                  <li>• AI workflow automation</li>
                  <li>• AI-enhanced copywriting</li>
                </ul>
                <p className="text-sm text-gray-500 mt-3">
                  Pick what you&apos;re best at, not what pays most. You can expand later.
                </p>
              </div>

              <div className="border-l-2 border-violet-500 pl-6">
                <h3 className="font-bold mb-2">Day 3-4: Create Portfolio Pieces</h3>
                <p className="text-gray-400 mb-3">
                  You need proof. Create 2-3 samples:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• <strong>Content writer?</strong> Write 2 articles in your niche</li>
                  <li>• <strong>Chatbot builder?</strong> Build a demo chatbot</li>
                  <li>• <strong>Automation?</strong> Document a workflow you&apos;ve built</li>
                </ul>
                <p className="text-sm text-gray-500 mt-3">
                  These can be hypothetical. "Here&apos;s what I&apos;d build for a business like yours."
                </p>
              </div>

              <div className="border-l-2 border-violet-500 pl-6">
                <h3 className="font-bold mb-2">Day 5-7: Set Up Your Presence</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• LinkedIn profile optimized for your service</li>
                  <li>• Simple portfolio (Notion page, Carrd, or your own site)</li>
                  <li>• Clear pricing in your head (you don&apos;t need to publish it)</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Week 2: Outreach</h2>
            
            <div className="bg-violet-600/10 border border-violet-500/30 rounded-lg p-6 mb-6">
              <p className="font-bold mb-2">The Math</p>
              <p className="text-gray-300">
                Expect a 5-10% response rate. To get 5 responses, send 50-100 messages.
                To get 1 client, you might need 100-200 outreaches.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold mb-3">Option A: Warm Network</h3>
                <p className="text-gray-400 mb-3">Fastest path to first client:</p>
                <ol className="space-y-2 text-gray-300">
                  <li>1. List everyone you know who runs a business</li>
                  <li>2. Message them: "Hey, I&apos;m offering [service]. Know anyone who might need this?"</li>
                  <li>3. Don&apos;t sell to them directly—ask for referrals</li>
                </ol>
              </div>

              <div>
                <h3 className="font-bold mb-3">Option B: Cold Outreach</h3>
                <p className="text-gray-400 mb-3">When you don&apos;t have a network:</p>
                <ol className="space-y-2 text-gray-300">
                  <li>1. Find businesses that need your service (search LinkedIn, Twitter, local directories)</li>
                  <li>2. Research each one for 2 minutes before reaching out</li>
                  <li>3. Send personalized message with a specific observation</li>
                </ol>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="font-bold mb-3">Cold Outreach Template</h3>
                <div className="font-mono text-sm text-gray-300 whitespace-pre-wrap bg-black/30 p-4 rounded">
{`Hey [Name],

Noticed [specific thing about their business].

I help [type of business] with [your service] using AI—
typically saves [benefit: time/money/effort].

Would a quick chat be useful? If not, no worries.

[Your name]`}
                </div>
                <p className="text-sm text-gray-500 mt-3">
                  Short. Specific. Low pressure. No pitch deck needed.
                </p>
              </div>

              <div>
                <h3 className="font-bold mb-3">Option C: Platforms</h3>
                <p className="text-gray-400 mb-3">Lower conversion but steady leads:</p>
                <ul className="space-y-2 text-gray-300">
                  <li>• <strong>Upwork:</strong> Competitive but volume is there</li>
                  <li>• <strong>Fiverr:</strong> Good for productized services</li>
                  <li>• <strong>LinkedIn Services:</strong> Underrated, less competition</li>
                  <li>• <strong>Twitter/X:</strong> Build in public, attract inbound</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Week 3-4: Close &amp; Deliver</h2>
            
            <div className="space-y-6">
              <div className="border border-white/10 rounded-lg p-6">
                <h3 className="font-bold mb-3">The Discovery Call</h3>
                <p className="text-gray-400 mb-3">When someone shows interest:</p>
                <ol className="space-y-2 text-gray-300">
                  <li>1. Ask about their problem (listen more than talk)</li>
                  <li>2. Explain how you&apos;d solve it (briefly)</li>
                  <li>3. Give a price range</li>
                  <li>4. Handle objections</li>
                  <li>5. Close or follow up</li>
                </ol>
              </div>

              <div className="border border-white/10 rounded-lg p-6">
                <h3 className="font-bold mb-3">Pricing Your First Project</h3>
                <p className="text-gray-400 mb-3">For your first client:</p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Charge 50-70% of market rate</li>
                  <li>• Make it easy to say yes</li>
                  <li>• Get the testimonial, raise prices after</li>
                </ul>
                <p className="text-sm text-gray-500 mt-3">
                  Your first client is worth more in proof than in dollars.
                </p>
              </div>

              <div className="border border-white/10 rounded-lg p-6">
                <h3 className="font-bold mb-3">Over-Deliver</h3>
                <p className="text-gray-400 mb-3">First client = your best marketing:</p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Finish early if possible</li>
                  <li>• Add a small bonus deliverable</li>
                  <li>• Ask for feedback and testimonial</li>
                  <li>• Ask for referrals ("Know anyone else who needs this?")</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Common Mistakes</h2>
            <ul className="space-y-3">
              <li className="flex gap-3 text-gray-300">
                <span className="text-red-400">✗</span>
                <span><strong className="text-white">Waiting to be &quot;ready&quot;</strong> — You&apos;ll never feel ready. Start now.</span>
              </li>
              <li className="flex gap-3 text-gray-300">
                <span className="text-red-400">✗</span>
                <span><strong className="text-white">Offering too many services</strong> — Confuses clients. Pick one.</span>
              </li>
              <li className="flex gap-3 text-gray-300">
                <span className="text-red-400">✗</span>
                <span><strong className="text-white">Generic outreach</strong> — "I do AI stuff" means nothing. Be specific.</span>
              </li>
              <li className="flex gap-3 text-gray-300">
                <span className="text-red-400">✗</span>
                <span><strong className="text-white">Giving up after 20 messages</strong> — This is a numbers game. Keep going.</span>
              </li>
              <li className="flex gap-3 text-gray-300">
                <span className="text-emerald-400">✓</span>
                <span><strong className="text-white">Asking for referrals</strong> — Every conversation is a chance. Ask.</span>
              </li>
            </ul>
          </section>

          <section className="bg-violet-600/10 border border-violet-500/30 rounded-lg p-6 mb-12">
            <h2 className="text-xl font-bold mb-4">Your 30-Day Challenge</h2>
            <div className="space-y-3 text-gray-300">
              <p>• <strong>Week 1:</strong> Pick service, create samples, set up profile</p>
              <p>• <strong>Week 2:</strong> Send 50 outreach messages</p>
              <p>• <strong>Week 3:</strong> Send 50 more, do discovery calls</p>
              <p>• <strong>Week 4:</strong> Close and deliver first project</p>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              If you actually do this, you&apos;ll have a client. Most people quit at week 2.
            </p>
          </section>

          <div className="flex gap-4 flex-wrap">
            <Link 
              href="/guides/ai-side-hustles-2026"
              className="text-violet-400 hover:text-violet-300"
            >
              ← Back: AI Side Hustles 2026
            </Link>
            <Link 
              href="/guides"
              className="text-gray-500 hover:text-white"
            >
              All Guides →
            </Link>
          </div>
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
