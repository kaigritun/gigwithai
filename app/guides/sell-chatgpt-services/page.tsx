import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Sell ChatGPT Services and Make $1,000-5,000/Month | GigWithAI',
  description: 'Learn how to sell ChatGPT services to businesses. 5 services you can offer today, pricing strategies, and how to find clients.',
}

export default function SellChatGPTServicesGuide() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link 
          href="/guides" 
          className="text-sm text-gray-500 hover:text-white transition mb-8 inline-block"
        >
          ← Back to Guides
        </Link>

        <article>
          <p className="text-violet-400 text-sm font-mono uppercase tracking-wider mb-4">
            Services
          </p>
          <h1 className="text-4xl font-bold mb-6">
            How to Sell ChatGPT Services and Make $1,000-5,000/Month
          </h1>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            There&apos;s a massive gap between what AI can do and what most businesses know how to do with it. You can fill that gap.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Why This Works</h2>
            <p className="text-gray-300 mb-4">
              Most small businesses:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li>• Know AI exists but don&apos;t know how to use it</li>
              <li>• Don&apos;t have time to learn prompt engineering</li>
              <li>• Will pay someone to set it up for them</li>
            </ul>
            <div className="bg-violet-600/10 border border-violet-500/30 rounded-lg p-4 mt-6">
              <p className="text-sm text-gray-300">
                <strong className="text-violet-400">Key insight:</strong> You don&apos;t need to be a developer. You just need to be competent with ChatGPT.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">5 Services You Can Sell Today</h2>
            
            <div className="border border-white/10 rounded-lg p-6 mb-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-lg">1. Content Systems</h3>
                <span className="text-violet-400 font-mono text-sm">$500-2,000</span>
              </div>
              <p className="text-gray-300 mb-3">Set up a content workflow: blog posts, social media, email newsletters.</p>
              <div className="bg-black/30 rounded p-4 text-sm text-gray-400">
                <p><strong>Deliverable:</strong> Custom prompts, style guide, SOPs, 1-hour training</p>
                <p><strong>Time:</strong> 3-5 hours</p>
              </div>
            </div>

            <div className="border border-white/10 rounded-lg p-6 mb-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-lg">2. Customer Service Templates</h3>
                <span className="text-violet-400 font-mono text-sm">$300-800</span>
              </div>
              <p className="text-gray-300 mb-3">Create response templates for common customer questions.</p>
              <div className="bg-black/30 rounded p-4 text-sm text-gray-400">
                <p><strong>Deliverable:</strong> 20-50 templated responses, escalation workflows</p>
                <p><strong>Time:</strong> 2-3 hours</p>
              </div>
            </div>

            <div className="border border-white/10 rounded-lg p-6 mb-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-lg">3. Sales Email Sequences</h3>
                <span className="text-violet-400 font-mono text-sm">$400-1,500</span>
              </div>
              <p className="text-gray-300 mb-3">Build outreach sequences using AI for personalization at scale.</p>
              <div className="bg-black/30 rounded p-4 text-sm text-gray-400">
                <p><strong>Deliverable:</strong> 5-10 email templates, personalization prompts, A/B variants</p>
                <p><strong>Time:</strong> 3-4 hours</p>
              </div>
            </div>

            <div className="border border-white/10 rounded-lg p-6 mb-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-lg">4. Meeting Summaries & Follow-ups</h3>
                <span className="text-violet-400 font-mono text-sm">$200-500/month</span>
              </div>
              <p className="text-gray-300 mb-3">Take meeting recordings, produce summaries, action items, follow-up emails.</p>
              <div className="bg-black/30 rounded p-4 text-sm text-gray-400">
                <p><strong>Deliverable:</strong> Weekly summaries and action items</p>
                <p><strong>Time:</strong> 1-2 hours/week</p>
              </div>
            </div>

            <div className="border border-white/10 rounded-lg p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-lg">5. AI Training Sessions</h3>
                <span className="text-violet-400 font-mono text-sm">$150-500/session</span>
              </div>
              <p className="text-gray-300 mb-3">Teach teams how to use ChatGPT for their specific workflows.</p>
              <div className="bg-black/30 rounded p-4 text-sm text-gray-400">
                <p><strong>Deliverable:</strong> 1-2 hour training, custom cheat sheet</p>
                <p><strong>Time:</strong> 2-3 hours including prep</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">How to Find Clients</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-white/10 rounded-lg p-6">
                <h3 className="font-bold text-violet-400 mb-3">LinkedIn (Best for B2B)</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Post AI productivity tips</li>
                  <li>• Comment on business owner posts</li>
                  <li>• DM people who engage</li>
                </ul>
              </div>
              <div className="border border-white/10 rounded-lg p-6">
                <h3 className="font-bold text-violet-400 mb-3">Local Businesses</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Realtors, lawyers, accountants</li>
                  <li>• They&apos;re busy and will pay</li>
                  <li>• Referrals work best</li>
                </ul>
              </div>
              <div className="border border-white/10 rounded-lg p-6">
                <h3 className="font-bold text-violet-400 mb-3">Freelance Platforms</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Upwork: search &quot;ChatGPT&quot;</li>
                  <li>• Fiverr: productized packages</li>
                  <li>• Filter by &quot;AI assistant&quot;</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Pricing Strategy</h2>
            <p className="text-gray-300 mb-4">
              Start lower to get testimonials, then raise prices:
            </p>
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="text-violet-400 font-mono">01</span>
                <div>
                  <p className="font-medium">First 3 clients: 50% off</p>
                  <p className="text-gray-500 text-sm">Get testimonials and case studies</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-violet-400 font-mono">02</span>
                <div>
                  <p className="font-medium">Next 5 clients: Full price</p>
                  <p className="text-gray-500 text-sm">You have proof it works now</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-violet-400 font-mono">03</span>
                <div>
                  <p className="font-medium">After 8+ clients: Raise prices 20%</p>
                  <p className="text-gray-500 text-sm">Demand justifies premium rates</p>
                </div>
              </li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">What You Need to Get Started</h2>
            <ul className="space-y-3 text-gray-300">
              <li>• <strong>A portfolio of example work</strong> — create samples even for fake clients</li>
              <li>• <strong>A simple landing page</strong> — or just an optimized LinkedIn profile</li>
              <li>• <strong>5-10 prompts you&apos;ve perfected</strong> — your secret sauce</li>
              <li>• <strong>Confidence to reach out</strong> — worst they can say is no</li>
            </ul>
          </section>

          <section className="bg-gradient-to-r from-violet-600/20 to-purple-600/20 border border-violet-500/30 rounded-lg p-8 mb-12">
            <h2 className="text-xl font-bold mb-4">Get the AI Freelancer Toolkit</h2>
            <p className="text-gray-300 mb-6">
              Templates, prompts, and pricing guides to start selling ChatGPT services this week.
            </p>
            <Link 
              href="/toolkit"
              className="inline-block px-6 py-3 bg-violet-600 hover:bg-violet-500 rounded-lg font-semibold transition"
            >
              Download Free →
            </Link>
          </section>

          <div className="flex gap-4 flex-wrap">
            <Link 
              href="/guides/chatgpt-freelancing"
              className="text-violet-400 hover:text-violet-300"
            >
              ← ChatGPT Freelancing Guide
            </Link>
            <Link 
              href="/guides/ai-automation-services"
              className="text-violet-400 hover:text-violet-300 ml-auto"
            >
              AI Automation Services →
            </Link>
          </div>
        
          <RelatedGuides guides={[
            {
              slug: 'chatgpt-freelancing',
              title: 'ChatGPT Freelancing',
              description: '7 ways to make money freelancing with AI.'
            },
            {
              slug: 'ai-automation-services',
              title: 'AI Automation Services',
              description: 'Start an automation business.'
            },
            {
              slug: 'pricing-ai-services',
              title: 'Pricing AI Services',
              description: 'Value-based pricing strategies.'
            }
          ]} />
        </article>
    </div>
  )
}
