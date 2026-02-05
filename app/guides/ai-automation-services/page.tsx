import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Start an AI Automation Business (No Coding Required) | GigWithAI',
  description: 'Start an AI automation business without coding. Learn Make.com, Zapier, and ChatGPT API to build automations businesses pay $2,000-10,000 for.',
}

export default function AIAutomationServicesGuide() {
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
            Automation
          </p>
          <h1 className="text-4xl font-bold mb-6">
            How to Start an AI Automation Business (No Coding Required)
          </h1>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            Businesses will pay $2,000-10,000 for automations that save them hours every week. Most of these don&apos;t require coding.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">What is AI Automation?</h2>
            <p className="text-gray-300 mb-4">
              Connecting AI tools to business workflows:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li>• Auto-respond to inquiries</li>
              <li>• Process documents and extract data</li>
              <li>• Generate reports from raw data</li>
              <li>• Automate repetitive writing tasks</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Tools You Need (All No-Code)</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-violet-500/30 rounded-lg p-6 bg-violet-600/10">
                <h3 className="font-bold text-violet-400 mb-3">Make.com</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Visual workflow builder</li>
                  <li>• Connects 1,000+ apps</li>
                  <li>• Free tier to learn</li>
                </ul>
              </div>
              <div className="border border-white/10 rounded-lg p-6">
                <h3 className="font-bold mb-3">Zapier</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Simpler interface</li>
                  <li>• Best for basic automations</li>
                  <li>• More expensive at scale</li>
                </ul>
              </div>
              <div className="border border-white/10 rounded-lg p-6">
                <h3 className="font-bold mb-3">ChatGPT API</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• $0.002 per 1K tokens</li>
                  <li>• Integrates via HTTP</li>
                  <li>• Handles AI processing</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">3 Automations You Can Build This Week</h2>
            
            <div className="border border-white/10 rounded-lg p-6 mb-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-lg">1. Lead Response Bot</h3>
                <span className="text-violet-400 font-mono text-sm">$500-1,500</span>
              </div>
              <div className="bg-black/30 rounded p-4 text-sm text-gray-300 mb-3">
                <p><strong>Trigger:</strong> New form submission</p>
                <p><strong>Action:</strong> ChatGPT writes personalized response → sends email</p>
              </div>
              <p className="text-gray-400 text-sm">
                <strong className="text-emerald-400">Value:</strong> Respond to leads in seconds, not hours
              </p>
            </div>

            <div className="border border-white/10 rounded-lg p-6 mb-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-lg">2. Content Repurposer</h3>
                <span className="text-violet-400 font-mono text-sm">$800-2,000</span>
              </div>
              <div className="bg-black/30 rounded p-4 text-sm text-gray-300 mb-3">
                <p><strong>Trigger:</strong> New blog post published</p>
                <p><strong>Action:</strong> ChatGPT creates: LinkedIn post, Twitter thread, email newsletter</p>
              </div>
              <p className="text-gray-400 text-sm">
                <strong className="text-emerald-400">Value:</strong> 4x content output from every piece
              </p>
            </div>

            <div className="border border-white/10 rounded-lg p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-lg">3. Invoice Processor</h3>
                <span className="text-violet-400 font-mono text-sm">$600-1,200</span>
              </div>
              <div className="bg-black/30 rounded p-4 text-sm text-gray-300 mb-3">
                <p><strong>Trigger:</strong> Email with PDF attachment</p>
                <p><strong>Action:</strong> Extract data, add to spreadsheet, send confirmation</p>
              </div>
              <p className="text-gray-400 text-sm">
                <strong className="text-emerald-400">Value:</strong> Eliminate manual data entry
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">How to Price Automations</h2>
            <p className="text-gray-300 mb-6">
              <strong>Value-based pricing:</strong> Price at 25-50% of annual time savings.
            </p>
            
            <div className="border border-violet-500/30 rounded-lg p-6 bg-violet-600/10">
              <h3 className="font-bold mb-3">Example Calculation</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Saves 5 hours/week at $50/hour = $250/week</li>
                <li>• Annual savings: <strong>$13,000</strong></li>
                <li>• Your price: <strong className="text-violet-400">$3,000-6,000</strong></li>
              </ul>
            </div>

            <div className="bg-black/30 rounded-lg p-4 mt-6">
              <p className="text-sm text-gray-400">
                <strong>Questions to ask:</strong> How many hours does this save per week? What&apos;s that time worth? Price accordingly.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Getting Your First Client</h2>
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="text-violet-400 font-mono">01</span>
                <div>
                  <p className="font-medium">Build 3 demo automations</p>
                  <p className="text-gray-500 text-sm">Even for yourself — they&apos;re proof you can do the work</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-violet-400 font-mono">02</span>
                <div>
                  <p className="font-medium">Record Loom videos showing them work</p>
                  <p className="text-gray-500 text-sm">Visual proof is more convincing than explanations</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-violet-400 font-mono">03</span>
                <div>
                  <p className="font-medium">Share on LinkedIn with before/after</p>
                  <p className="text-gray-500 text-sm">&quot;This used to take 3 hours. Now it takes 5 seconds.&quot;</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-violet-400 font-mono">04</span>
                <div>
                  <p className="font-medium">DM people who comment asking &quot;how&quot;</p>
                  <p className="text-gray-500 text-sm">They&apos;ve self-identified as interested</p>
                </div>
              </li>
            </ol>
          </section>

          <section className="bg-gradient-to-r from-violet-600/20 to-purple-600/20 border border-violet-500/30 rounded-lg p-8 mb-12">
            <h2 className="text-xl font-bold mb-4">Get the Automation Toolkit</h2>
            <p className="text-gray-300 mb-6">
              Free toolkit with automation templates and pricing calculator to start your AI automation business.
            </p>
            <Link 
              href="/toolkit"
              className="inline-block px-6 py-3 bg-violet-600 hover:bg-violet-500 rounded-lg font-semibold transition"
            >
              Get It Free →
            </Link>
          </section>

          <div className="flex gap-4 flex-wrap">
            <Link 
              href="/guides/sell-chatgpt-services"
              className="text-violet-400 hover:text-violet-300"
            >
              ← Sell ChatGPT Services
            </Link>
            <Link 
              href="/guides/selling-ai-automation-services"
              className="text-violet-400 hover:text-violet-300 ml-auto"
            >
              Advanced: Selling AI Automation →
            </Link>
          </div>
        
          <RelatedGuides guides={[
            {
              slug: 'sell-chatgpt-services',
              title: 'Sell ChatGPT Services',
              description: 'Start with simpler services first.'
            },
            {
              slug: 'selling-ai-automation-services',
              title: 'Selling AI Automation',
              description: 'Advanced sales strategies.'
            },
            {
              slug: 'ai-data-automation',
              title: 'Data Automation',
              description: 'Spreadsheet automation at $100/hr.'
            }
          ]} />
        </article>
    </div>
  )
}
