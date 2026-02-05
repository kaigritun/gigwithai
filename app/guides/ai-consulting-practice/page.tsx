import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Starting an AI Consulting Practice: From Side Hustle to Six Figures | GigWithAI',
  description: 'Build a profitable AI consulting practice. Find your niche, price services, get clients, and scale from side hustle to full business.',
  keywords: ['ai consulting', 'ai consulting business', 'start ai consulting', 'ai consulting pricing', 'ai consultant side hustle'],
}

const serviceTiers = [
  {
    name: 'AI Readiness Assessment',
    price: '$1,000-3,000',
    description: 'Audit current workflows, identify AI opportunities, prioritize by impact/effort, deliver roadmap document',
    duration: '1-2 weeks',
  },
  {
    name: 'Implementation Package',
    price: '$5,000-15,000',
    description: 'Set up specific AI tools, build custom workflows, train the team, document processes',
    duration: '4-8 weeks',
  },
  {
    name: 'Ongoing Advisory',
    price: '$2,000-5,000/month',
    description: 'Monthly strategy sessions, new tool evaluations, team training, troubleshooting support',
    duration: 'Ongoing',
  },
]

const toolCategories = [
  {
    category: 'Content & Writing',
    tools: ['ChatGPT/Claude for drafting', 'Jasper for marketing copy', 'Copy.ai for variations', 'Grammarly for polish'],
  },
  {
    category: 'Productivity',
    tools: ['Notion AI for documentation', 'Zapier/Make for automation', 'Otter.ai for meeting notes', 'Motion for scheduling'],
  },
  {
    category: 'Sales & Marketing',
    tools: ['Clay for lead enrichment', 'Apollo for prospecting', 'Lavender for email optimization', 'Descript for video'],
  },
  {
    category: 'Customer Support',
    tools: ['Intercom AI', 'Zendesk AI', 'ChatBot builders', 'FAQ automation'],
  },
]

const packages = [
  {
    name: 'Starter Package',
    price: '$2,500',
    features: ['AI tool audit (3 hours)', 'Top 3 recommendations', 'Implementation guide', '1 tool setup + training', '30-day email support'],
  },
  {
    name: 'Growth Package',
    price: '$7,500',
    features: ['Full workflow analysis (8 hours)', 'Custom AI stack design', '3 tool implementations', 'Team training sessions (3)', '60-day support + 2 calls'],
  },
  {
    name: 'Enterprise Package',
    price: '$15,000+',
    features: ['Comprehensive AI strategy', 'Multiple department implementations', 'Executive briefings', 'Change management support', '90-day support + weekly calls'],
  },
]

export default function AIConsultingPracticePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link 
          href="/guides" 
          className="text-sm text-white/50 hover:text-white transition-colors mb-8 inline-block"
        >
          ← Back to Guides
        </Link>

        <article>
          <p className="text-orange-400 font-mono text-sm mb-4 uppercase tracking-wider">
            Business
          </p>
          <h1 className="text-4xl font-bold mb-6">
            Starting an AI Consulting Practice: From Side Hustle to Six Figures
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            AI consulting is exploding. Businesses know they need AI but don&apos;t know where to start. 
            You can be the bridge. Here&apos;s how to build a profitable AI consulting practice from scratch.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Why AI Consulting Works</h2>
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                <p className="font-semibold text-orange-400 mb-2">The Market Reality:</p>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>• 80% of businesses want to use AI but lack internal expertise</li>
                  <li>• AI is moving too fast for traditional consulting firms</li>
                  <li>• Small and mid-size businesses are underserved</li>
                  <li>• Hands-on implementation beats slide decks</li>
                  <li>• You don&apos;t need to be a data scientist</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Finding Your Niche</h2>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold mb-3 text-orange-400">Horizontal (Function)</h3>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>• AI for marketing teams</li>
                    <li>• AI for sales operations</li>
                    <li>• AI for customer support</li>
                    <li>• AI for HR and recruiting</li>
                    <li>• AI for finance/accounting</li>
                  </ul>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold mb-3 text-orange-400">Vertical (Industry)</h3>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>• AI for law firms</li>
                    <li>• AI for real estate agencies</li>
                    <li>• AI for healthcare practices</li>
                    <li>• AI for e-commerce brands</li>
                    <li>• AI for manufacturing</li>
                  </ul>
                </div>
              </div>
              <p className="text-white/50 text-sm">
                <strong>Best strategy:</strong> Start vertical, expand horizontal. &quot;AI for law firms&quot; is more sellable than &quot;AI consulting.&quot;
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Service Tiers</h2>
              <div className="space-y-4">
                {serviceTiers.map((tier, index) => (
                  <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-orange-400">{tier.name}</h3>
                      <span className="text-white/80 font-mono">{tier.price}</span>
                    </div>
                    <p className="text-white/60 text-sm mb-2">{tier.description}</p>
                    <p className="text-white/40 text-xs">{tier.duration}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Tools You Must Know</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {toolCategories.map((cat, index) => (
                  <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <h3 className="font-bold mb-3 text-orange-400">{cat.category}</h3>
                    <ul className="space-y-1 text-white/70 text-sm">
                      {cat.tools.map((tool, i) => (
                        <li key={i}>• {tool}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Pricing Your Services</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-orange-400">Value-Based Pricing</h3>
              <p className="text-white/70 mb-4">Don&apos;t charge hourly. Calculate value delivered:</p>
              
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-white/80 font-mono text-sm mb-2">Example ROI Calculation:</p>
                <ul className="space-y-1 text-white/60 text-sm">
                  <li>• Client spends 20 hours/week on task</li>
                  <li>• Your AI solution reduces to 5 hours</li>
                  <li>• Time saved: 15 hours × $50/hour = $750/week</li>
                  <li>• Annual value: $39,000</li>
                  <li>• <strong className="text-orange-400">Your fee: $5,000-10,000 (12-25% of value)</strong></li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-orange-400">Package Templates</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {packages.map((pkg, index) => (
                  <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <h4 className="font-bold text-white mb-1">{pkg.name}</h4>
                    <p className="text-orange-400 font-mono mb-3">{pkg.price}</p>
                    <ul className="space-y-1 text-white/60 text-xs">
                      {pkg.features.map((feature, i) => (
                        <li key={i}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Finding Clients</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-orange-400">Warm Outreach First</h3>
              <ol className="list-decimal list-inside space-y-2 text-white/70 mb-6">
                <li>Former colleagues who run businesses</li>
                <li>LinkedIn connections in target industry</li>
                <li>Local business owners you know</li>
                <li>Referrals from your network</li>
                <li>Past clients from any work</li>
              </ol>

              <h3 className="text-xl font-semibold mb-3 text-orange-400">Cold Outreach Template</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-white/50 text-xs mb-2">Subject: Quick question about [their specific process]</p>
                <p className="text-white/80 text-sm">
                  Hi [Name],<br/><br/>
                  Saw that [Company] is [growing/hiring/launching]. Quick question: how is your 
                  team handling [specific task that AI could improve]?<br/><br/>
                  I help [industry] companies cut [X hours/cost] from [process] using AI tools. 
                  Recently helped [similar company] [specific result].<br/><br/>
                  Would a 15-minute call to explore if there&apos;s a fit make sense?
                </p>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-orange-400">Content Marketing</h3>
              <p className="text-white/70 mb-2">Write about:</p>
              <ul className="space-y-1 text-white/60 text-sm">
                <li>• &quot;How I helped [client type] save [result] with AI&quot;</li>
                <li>• &quot;The 3 AI tools every [industry] needs in 2024&quot;</li>
                <li>• &quot;[Industry] AI implementation: lessons learned&quot;</li>
                <li>• &quot;Why most [industry] AI projects fail (and how to avoid it)&quot;</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Real Numbers</h2>
              
              <div className="space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold text-orange-400 mb-2">First 6 Months (Realistic)</h3>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>• 2-3 assessment projects: $5,000-9,000</li>
                    <li>• 1-2 implementation projects: $7,500-15,000</li>
                    <li>• <strong>Total: $12,500-24,000</strong></li>
                  </ul>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold text-orange-400 mb-2">Year 1 (Achievable)</h3>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>• 8-10 projects of various sizes</li>
                    <li>• <strong>Total: $50,000-80,000</strong></li>
                    <li>• Plus: proof of concept, case studies, referral network</li>
                  </ul>
                </div>

                <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                  <h3 className="font-bold text-orange-400 mb-2">Year 2+ (With Focus)</h3>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>• 2-3 retainer clients: $4,000-10,000/month</li>
                    <li>• New projects: $5,000-15,000/month</li>
                    <li>• <strong>Total: $100,000-200,000+</strong></li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Getting Started This Week</h2>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <ul className="space-y-2 text-white/70">
                  <li><strong className="text-orange-400">Day 1-2:</strong> Pick your niche (industry + function)</li>
                  <li><strong className="text-orange-400">Day 3-4:</strong> Build your service packages and pricing</li>
                  <li><strong className="text-orange-400">Day 5:</strong> Create simple landing page and LinkedIn profile</li>
                  <li><strong className="text-orange-400">Day 6-7:</strong> Reach out to 10 warm contacts</li>
                </ul>
                <p className="text-white/50 text-sm mt-4">
                  Don&apos;t overthink it. The best way to learn AI consulting is to start consulting.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Key Takeaways</h2>
              <ul className="space-y-3 text-white/70">
                <li className="flex gap-3">
                  <span className="text-orange-400">1.</span>
                  <span><strong>Niche down</strong> — &quot;AI for dentists&quot; beats &quot;AI consulting&quot;</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400">2.</span>
                  <span><strong>Value-based pricing</strong> — Calculate ROI, charge percentage</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400">3.</span>
                  <span><strong>Start warm</strong> — Your network has more opportunity than you think</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400">4.</span>
                  <span><strong>Document everything</strong> — Case studies are your best sales tool</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400">5.</span>
                  <span><strong>Productize over time</strong> — Move from custom to scalable</span>
                </li>
              </ul>
            </section>

            <section className="border-t border-white/10 pt-8">
              <h2 className="text-xl font-bold mb-4">Related Guides</h2>
              <div className="grid gap-4">
                <Link href="/guides/pricing-ai-services" className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <span className="text-orange-400 font-semibold">Pricing AI Services</span>
                  <p className="text-white/50 text-sm mt-1">Deep dive on value pricing</p>
                </Link>
                <Link href="/guides/selling-ai-automation-services" className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <span className="text-orange-400 font-semibold">Selling AI Automation</span>
                  <p className="text-white/50 text-sm mt-1">Sales techniques that work</p>
                </Link>
                <Link href="/guides/ai-freelancing-first-client" className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <span className="text-orange-400 font-semibold">AI Freelancing: First Client</span>
                  <p className="text-white/50 text-sm mt-1">Getting started guide</p>
                </Link>
              </div>
            </section>
          </div>
        
          <RelatedGuides guides={[
                    {
                              slug: 'selling-ai-automation-services',
                              title: 'Selling Automation',
                              description: 'Consult then implement automation.'
                    },
                    {
                              slug: 'ai-freelancing-first-client',
                              title: 'First Client',
                              description: 'Land your first consulting client.'
                    },
                    {
                              slug: 'pricing-ai-services',
                              title: 'Pricing AI Services',
                              description: 'Price consulting engagements.'
                    }
          ]} />
        </article>
    </div>
  )
}
