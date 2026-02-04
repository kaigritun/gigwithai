import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import EmailSignup from '@/components/EmailSignup'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Make Your First $1,000 with AI (Step-by-Step) | GigWithAI',
  description: 'Step-by-step guide to earning your first $1,000 with AI services. From picking your offer to closing clients in 3-4 weeks.',
  keywords: ['make money with ai', 'first 1000 dollars ai', 'ai freelancing', 'ai side hustle', 'chatgpt income', 'ai services'],
  openGraph: {
    title: 'How to Make Your First $1,000 with AI (Step-by-Step)',
    description: 'Step-by-step guide to earning your first $1,000 with AI services. From picking your offer to closing clients in 3-4 weeks.',
    type: 'article',
    url: 'https://gigwithai.com/guides/first-1000-with-ai',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Make Your First $1,000 with AI',
    description: 'Step-by-step guide from zero to your first $1,000 with AI services.',
  },
}

const serviceOptions = [
  { skill: 'If you can write', service: 'AI content writing', rate: '$100-300/article' },
  { skill: 'If you\'re organized', service: 'AI virtual assistant', rate: '$25-50/hour' },
  { skill: 'If you understand marketing', service: 'AI social media management', rate: '$500-1,500/month' },
  { skill: 'If you\'re technical', service: 'Chatbot setup', rate: '$500-2,000/project' },
  { skill: 'If you\'re analytical', service: 'AI research reports', rate: '$100-500/report' },
]

const mathOptions = [
  { option: 'Option A', description: '2 content writing clients at $500/month', total: '$1,000' },
  { option: 'Option B', description: '1 chatbot project at $1,000', total: '$1,000' },
  { option: 'Option C', description: '20 hours of VA work at $50/hour', total: '$1,000' },
  { option: 'Option D', description: '2 research projects at $500 each', total: '$1,000' },
]

const mistakes = [
  { mistake: 'Building before selling', fix: 'Validate demand first' },
  { mistake: 'Targeting everyone', fix: 'Pick a niche' },
  { mistake: 'Waiting for perfection', fix: 'Good enough beats perfect' },
  { mistake: 'Giving up after 20 rejections', fix: 'It\'s a numbers game' },
]

export default function First1000WithAI() {
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
            <Link href="/toolkit" className="hover:text-white transition">Toolkit</Link>
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
            Getting Started Guide • Updated February 2026
          </p>
          <h1 className="text-4xl font-bold mb-6">
            How to Make Your First $1,000 with AI (Step-by-Step)
          </h1>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Making your first $1,000 with AI isn&apos;t about building the next big app. 
            It&apos;s about providing value to people who&apos;ll pay for it. Here&apos;s exactly how to do it.
          </p>

          {/* Key Insight */}
          <div className="bg-violet-600/10 border border-violet-500/30 rounded-lg p-6 mb-12">
            <h2 className="font-bold mb-3 text-lg">The Fastest Path: Service &gt; Product</h2>
            <p className="text-gray-300">
              Products require traffic, marketing, and time. Services require one client.
              <strong className="text-white"> If you need $1,000 fast, sell a service.</strong>
            </p>
          </div>

          {/* Step 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">
              <span className="text-violet-400">Step 1:</span> Pick Your Service (Day 1)
            </h2>
            <p className="text-gray-300 mb-6">Choose ONE of these based on your skills:</p>
            
            <div className="space-y-3">
              {serviceOptions.map((opt, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-lg">
                  <div>
                    <span className="text-gray-400">{opt.skill}: </span>
                    <span className="text-white font-semibold">{opt.service}</span>
                  </div>
                  <span className="text-emerald-400 font-mono text-sm">{opt.rate}</span>
                </div>
              ))}
            </div>
            
            <p className="text-gray-400 mt-4 text-sm italic">
              Don&apos;t overthink it. Pick one and move on.
            </p>
          </section>

          {/* Step 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">
              <span className="text-violet-400">Step 2:</span> Create Your Offer (Day 1-2)
            </h2>
            <p className="text-gray-300 mb-4">Your offer needs three things:</p>
            
            <div className="space-y-2 mb-6">
              <div className="flex gap-3">
                <span className="text-violet-400 font-bold">1.</span>
                <span className="text-gray-300"><strong className="text-white">What you do</strong> (specific deliverable)</span>
              </div>
              <div className="flex gap-3">
                <span className="text-violet-400 font-bold">2.</span>
                <span className="text-gray-300"><strong className="text-white">Who it&apos;s for</strong> (specific audience)</span>
              </div>
              <div className="flex gap-3">
                <span className="text-violet-400 font-bold">3.</span>
                <span className="text-gray-300"><strong className="text-white">Why now</strong> (urgency or benefit)</span>
              </div>
            </div>

            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
              <p className="text-emerald-300 font-semibold mb-2">Example Offer:</p>
              <p className="text-emerald-200">
                &quot;I write 4 SEO-optimized blog posts per month for SaaS companies. 
                Posts are delivered within 48 hours, ready to publish. $400/month.&quot;
              </p>
              <p className="text-emerald-400 text-sm mt-3">
                Notice: Specific deliverable. Specific audience. Clear price.
              </p>
            </div>
          </section>

          {/* Step 3 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">
              <span className="text-violet-400">Step 3:</span> Build Minimal Proof (Day 2-3)
            </h2>
            <p className="text-gray-300 mb-4">
              You need 2-3 samples. Not a portfolio website. Not a logo. <strong className="text-white">Samples.</strong>
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <span className="text-violet-400">Content writing:</span>
                <span className="text-gray-300"> Write 2 sample articles in your niche</span>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <span className="text-violet-400">Virtual assistant:</span>
                <span className="text-gray-300"> Document a workflow you&apos;ve automated</span>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <span className="text-violet-400">Social media:</span>
                <span className="text-gray-300"> Create a sample content calendar</span>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <span className="text-violet-400">Chatbots:</span>
                <span className="text-gray-300"> Build a demo chatbot on Chatbase (free tier)</span>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm">
              Put samples in a Google Doc or Notion page. That&apos;s your portfolio.
            </p>
          </section>

          {/* Step 4 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">
              <span className="text-violet-400">Step 4:</span> Find 50 Potential Clients (Day 3-4)
            </h2>
            <p className="text-gray-300 mb-4">
              Don&apos;t wait for clients to find you. <strong className="text-white">Find them.</strong>
            </p>
            
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-4">
              <p className="font-semibold mb-3">Where to look:</p>
              <ul className="space-y-2 text-gray-300">
                <li>• LinkedIn (search job titles + company size)</li>
                <li>• Local business directories</li>
                <li>• Upwork/Fiverr (for initial traction)</li>
                <li>• Industry-specific communities</li>
              </ul>
            </div>
            
            <p className="text-white font-semibold">
              Make a list of 50. Names, emails, LinkedIn profiles. This is your prospecting list.
            </p>
          </section>

          {/* Step 5 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">
              <span className="text-violet-400">Step 5:</span> Reach Out Daily (Day 5+)
            </h2>
            <p className="text-gray-300 mb-4">
              Contact <strong className="text-white">10 prospects per day</strong>. Here&apos;s a template:
            </p>
            
            <div className="bg-gray-900 border border-white/10 rounded-lg p-6 font-mono text-sm mb-6">
              <p className="text-gray-500 mb-2">Subject: Quick question about [their company]</p>
              <div className="border-t border-white/10 pt-4 text-gray-300">
                <p className="mb-3">Hi [Name],</p>
                <p className="mb-3">
                  I noticed [something specific about their business]. I help [type of company] 
                  with [your service]—recently helped [result if you have one].
                </p>
                <p className="mb-3">Would it make sense to chat for 15 minutes this week?</p>
                <p>[Your name]</p>
              </div>
            </div>
            
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
              <p className="text-amber-300 font-semibold mb-2">Key Rules:</p>
              <ul className="text-amber-200 text-sm space-y-1">
                <li>• Personalize the first line</li>
                <li>• Keep it under 100 words</li>
                <li>• End with a question</li>
                <li>• Follow up 3x</li>
              </ul>
            </div>
          </section>

          {/* Step 6 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">
              <span className="text-violet-400">Step 6:</span> Close Your First Client (Week 2-3)
            </h2>
            <p className="text-gray-300 mb-4">
              At 10 outreach per day, you&apos;ll have contacted 50+ people in a week. 
              Industry average is 1-3% response rate.
            </p>
            <p className="text-gray-300 mb-6">
              That means <strong className="text-white">1-3 conversations per week</strong>. Close 1 and you&apos;re on your way.
            </p>
            
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
              <p className="text-emerald-300 font-semibold mb-2">Pricing for your first client:</p>
              <ul className="text-emerald-200 text-sm space-y-1">
                <li>• Undercut the market slightly to get started</li>
                <li>• $300-500 is easier to say yes to than $1,000</li>
                <li>• Deliver exceptional work to get referrals</li>
              </ul>
            </div>
          </section>

          {/* The Math */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">The Math to $1,000</h2>
            
            <div className="space-y-3">
              {mathOptions.map((opt, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-lg">
                  <div>
                    <span className="text-violet-400 font-semibold">{opt.option}: </span>
                    <span className="text-gray-300">{opt.description}</span>
                  </div>
                  <span className="text-emerald-400 font-bold">{opt.total}</span>
                </div>
              ))}
            </div>
            
            <p className="text-white font-semibold mt-6">
              Most people reach $1,000 within 3-4 weeks of consistent effort.
            </p>
          </section>

          {/* Email Signup */}
          <EmailSignup 
            headline="Get the AI Freelancer Starter Pack" 
            buttonText="Get Free Pack"
          />

          {/* Tools */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">What AI Tools You Need</h2>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <p className="text-emerald-400 font-semibold mb-2">Essential (free):</p>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• ChatGPT (free tier works fine)</li>
                  <li>• Google Docs (for deliverables)</li>
                  <li>• Canva (for any visual work)</li>
                </ul>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <p className="text-yellow-400 font-semibold mb-2">Helpful (low cost):</p>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• ChatGPT Plus ($20/month) - faster, GPT-4</li>
                  <li>• Grammarly (free tier)</li>
                  <li>• Calendly (free tier for booking calls)</li>
                </ul>
              </div>
            </div>
            
            <p className="text-gray-400 mt-4 text-sm">
              You don&apos;t need expensive tools. You need clients.
            </p>
          </section>

          {/* Common Mistakes */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Common Mistakes to Avoid</h2>
            
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
              <div className="space-y-3">
                {mistakes.map((m, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-red-400 flex-shrink-0">✗</span>
                    <div>
                      <span className="text-white font-semibold">{m.mistake}</span>
                      <span className="text-gray-400"> — {m.fix}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Real Timeline</h2>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-violet-400 font-mono text-sm">Day 1-2</div>
                <div className="text-gray-300">Pick service, create offer</div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-violet-400 font-mono text-sm">Day 3-4</div>
                <div className="text-gray-300">Build samples, make prospect list</div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-violet-400 font-mono text-sm">Day 5-14</div>
                <div className="text-gray-300">Daily outreach (10/day)</div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-violet-400 font-mono text-sm">Week 2-3</div>
                <div className="text-gray-300">First client conversation</div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-emerald-400 font-mono text-sm">Week 3-4</div>
                <div className="text-emerald-300 font-semibold">First $500+ earned</div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-emerald-400 font-mono text-sm">Week 4-6</div>
                <div className="text-emerald-300 font-semibold">Hit $1,000</div>
              </div>
            </div>
            
            <p className="text-white font-semibold mt-6">
              This isn&apos;t theory. This is what works.
            </p>
          </section>

          {/* What's Next */}
          <section className="bg-white/5 border border-white/10 rounded-lg p-6 mb-12">
            <h2 className="text-xl font-bold mb-4">What&apos;s Next?</h2>
            <p className="text-gray-300 mb-4">
              Once you hit $1,000, you have proof of concept. From there:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Raise your prices</li>
              <li>• Systematize delivery</li>
              <li>• Get referrals</li>
              <li>• Scale to $5,000/month</li>
            </ul>
          </section>

          {/* Related Links */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Continue Learning</h2>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/guides/ai-side-hustles-2026"
                className="text-violet-400 hover:text-violet-300 underline"
              >
                AI Side Hustles for 2026 →
              </Link>
              <Link 
                href="/guides/sell-chatgpt-services"
                className="text-violet-400 hover:text-violet-300 underline"
              >
                Selling ChatGPT Services →
              </Link>
            </div>
          </section>

          <RelatedGuides guides={[
            {
              slug: 'chatgpt-business-ideas',
              title: 'ChatGPT Business Ideas',
              description: '10 proven ways to make money with ChatGPT in 2026.'
            },
            {
              slug: 'ai-side-hustles-2026',
              title: 'AI Side Hustles 2026',
              description: '15 best AI side hustles with realistic income potential.'
            },
            {
              slug: 'sell-chatgpt-services',
              title: 'Sell ChatGPT Services',
              description: 'How to sell ChatGPT services and make $1,000-5,000/month.'
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
