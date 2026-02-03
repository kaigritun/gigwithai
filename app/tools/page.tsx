'use client'

import Link from 'next/link'
import { useState } from 'react'

const tools = {
  'AI Writing': [
    {
      name: 'Jasper',
      rating: 4.7,
      pricing: { free: '7-day trial', pro: '$49/mo' },
      features: ['Marketing templates', 'Brand voice AI', 'Team collaboration', 'SEO integration', '50+ templates'],
      limits: 'Trial: 7 days, then paid plans only',
      pros: ['Best for marketing copy', 'Team features', 'Brand consistency'],
      cons: ['Expensive', 'No real free tier', 'Overkill for beginners'],
      bestFor: 'Agencies and serious freelancers doing marketing copy at scale',
      url: 'https://www.jasper.ai/',
      recommended: true,
    },
    {
      name: 'Copy.ai',
      rating: 4.5,
      pricing: { free: '2,000 words/mo', pro: '$36/mo' },
      features: ['90+ templates', 'Blog wizard', 'Workflows', 'Brand voice', 'Chat interface'],
      limits: 'Free: 2,000 words/month, limited templates',
      pros: ['Generous free tier', 'Great templates', 'Easy to use'],
      cons: ['Output quality varies', 'Limited customization free'],
      bestFor: 'Freelancers starting out who need a solid free option',
      url: 'https://www.copy.ai/',
      recommended: true,
    },
    {
      name: 'Writesonic',
      rating: 4.3,
      pricing: { free: '10,000 words/mo', pro: '$19/mo' },
      features: ['Article writer', 'AI art generation', 'Chatsonic', 'Browser extension', '100+ templates'],
      limits: 'Free: 10,000 words/month (GPT-3.5)',
      pros: ['Best free word count', 'Image generation included', 'Affordable pro'],
      cons: ['Free tier uses older model', 'Quality inconsistent'],
      bestFor: 'High-volume content creators on a budget',
      url: 'https://writesonic.com/',
      recommended: false,
    },
    {
      name: 'Rytr',
      rating: 4.1,
      pricing: { free: '10,000 chars/mo', pro: '$9/mo' },
      features: ['40+ use cases', 'Tone selection', 'Plagiarism checker', 'SEO analyzer', '30+ languages'],
      limits: 'Free: 10,000 characters/month',
      pros: ['Cheapest premium', 'Simple interface', 'Plagiarism check'],
      cons: ['Limited free tier', 'Output needs editing', 'Basic features'],
      bestFor: 'Beginners who want affordable AI writing assistance',
      url: 'https://rytr.me/',
      recommended: false,
    },
  ],
  'Productivity': [
    {
      name: 'Notion AI',
      rating: 4.8,
      pricing: { free: 'Limited AI', pro: '$10/mo add-on' },
      features: ['AI writing in docs', 'Summarization', 'Action items', 'Translation', 'Q&A on your notes'],
      limits: 'Free: 20 AI responses, then $10/mo',
      pros: ['Integrated with Notion', 'Context-aware', 'Great for workflows'],
      cons: ['Requires Notion', 'Add-on cost', 'Limited free AI'],
      bestFor: 'Existing Notion users who want AI superpowers',
      url: 'https://www.notion.so/product/ai',
      recommended: true,
    },
    {
      name: 'Canva Pro',
      rating: 4.7,
      pricing: { free: 'Limited features', pro: '$13/mo' },
      features: ['AI image generation', 'Background remover', 'Magic resize', 'Brand kit', '100M+ assets'],
      limits: 'Free: Basic templates, no AI features',
      pros: ['Essential for freelancers', 'AI tools included', 'Huge template library'],
      cons: ['AI features need Pro', 'Can feel overwhelming'],
      bestFor: 'Anyone creating visual content for clients or products',
      url: 'https://www.canva.com/',
      recommended: true,
    },
    {
      name: 'Descript',
      rating: 4.6,
      pricing: { free: '1 hr transcription', pro: '$12/mo' },
      features: ['Edit video by editing text', 'AI voice cloning', 'Filler word removal', 'Screen recording', 'Auto captions'],
      limits: 'Free: 1 hour transcription, 1 watermarked export',
      pros: ['Revolutionary editing', 'Voice cloning', 'All-in-one'],
      cons: ['Learning curve', 'Limited free exports'],
      bestFor: 'Podcasters and video creators who want fast editing',
      url: 'https://www.descript.com/',
      recommended: true,
    },
  ],
  'Freelance Platforms': [
    {
      name: 'Fiverr',
      rating: 4.4,
      pricing: { free: 'Seller account', pro: '20% fee' },
      features: ['Gig marketplace', 'Seller levels', 'Buyer requests', 'Promoted gigs', 'Instant payments'],
      limits: 'Free to list, 20% commission on sales',
      pros: ['Low barrier to entry', 'Buyers come to you', 'Good for AI services'],
      cons: ['Race to bottom pricing', 'High commission', 'Algorithm dependent'],
      bestFor: 'Beginners wanting quick client access for AI services',
      url: 'https://www.fiverr.com/',
      recommended: true,
    },
    {
      name: 'Upwork',
      rating: 4.3,
      pricing: { free: 'Basic account', pro: '10-20% fee' },
      features: ['Job bidding', 'Connects system', 'Time tracking', 'Payment protection', 'Client history'],
      limits: 'Free: 10 Connects/month, sliding fee 10-20%',
      pros: ['Higher rates possible', 'Long-term clients', 'Better projects'],
      cons: ['Competitive', 'Connects cost money', 'Slow to start'],
      bestFor: 'Established freelancers seeking premium clients',
      url: 'https://www.upwork.com/',
      recommended: true,
    },
    {
      name: 'Toptal',
      rating: 4.6,
      pricing: { free: 'If accepted', pro: 'Lower % than others' },
      features: ['Elite network', 'Rigorous screening', 'Premium rates', 'No bidding', 'Full-time options'],
      limits: 'Must pass screening (3% acceptance)',
      pros: ['Highest rates', 'Quality clients', 'No price competition'],
      cons: ['Hard to get in', 'Not for beginners', 'Fewer opportunities'],
      bestFor: 'Expert-level freelancers with proven track records',
      url: 'https://www.toptal.com/',
      recommended: false,
    },
  ],
  'Automation': [
    {
      name: 'Zapier',
      rating: 4.7,
      pricing: { free: '100 tasks/mo', pro: '$20/mo' },
      features: ['5,000+ integrations', 'Multi-step zaps', 'AI actions', 'Filters & paths', 'Scheduling'],
      limits: 'Free: 100 tasks/month, 5 zaps',
      pros: ['Most integrations', 'Easiest to use', 'AI built-in'],
      cons: ['Gets expensive', 'Task limits', 'Limited free'],
      bestFor: 'Beginners who want simple, reliable automation',
      url: 'https://zapier.com/',
      recommended: true,
    },
    {
      name: 'Make.com',
      rating: 4.6,
      pricing: { free: '1,000 ops/mo', pro: '$9/mo' },
      features: ['Visual builder', 'Complex workflows', 'HTTP requests', 'Data stores', 'Scheduling'],
      limits: 'Free: 1,000 operations/month',
      pros: ['More powerful than Zapier', 'Cheaper', 'Better free tier'],
      cons: ['Steeper learning curve', 'Fewer integrations'],
      bestFor: 'Tech-savvy freelancers building complex automations',
      url: 'https://www.make.com/',
      recommended: true,
    },
    {
      name: 'n8n',
      rating: 4.4,
      pricing: { free: 'Self-hosted', pro: '$20/mo cloud' },
      features: ['Open source', 'Self-hostable', '400+ integrations', 'Code nodes', 'AI agents'],
      limits: 'Self-hosted: Unlimited. Cloud: 5 workflows free',
      pros: ['Self-host free forever', 'No task limits', 'AI agent building'],
      cons: ['Requires tech skills', 'Setup needed', 'Smaller community'],
      bestFor: 'Technical users who want unlimited automation',
      url: 'https://n8n.io/',
      recommended: false,
    },
  ],
}

const categories = ['All', ...Object.keys(tools)]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= Math.floor(rating) ? 'text-yellow-400' : star - 0.5 <= rating ? 'text-yellow-400/50' : 'text-white/20'}
        >
          ★
        </span>
      ))}
      <span className="text-sm text-white/60 ml-1">{rating}</span>
    </div>
  )
}

export default function ToolsPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [expandedTool, setExpandedTool] = useState<string | null>(null)

  const filteredCategories = activeCategory === 'All' 
    ? Object.entries(tools) 
    : Object.entries(tools).filter(([cat]) => cat === activeCategory)

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <nav className="border-b border-white/10 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="font-semibold text-lg text-violet-400 hover:text-violet-300 transition-colors">
            GigWithAI
          </Link>
          <div className="flex gap-6 text-sm text-white/60">
            <Link href="/guides" className="hover:text-white transition-colors">Guides</Link>
            <Link href="/tools" className="text-white">Tools</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-16">
          <p className="text-violet-400 font-mono text-sm mb-4 uppercase tracking-wider">
            Tools Comparison
          </p>
          <h1 className="text-4xl font-bold mb-6">
            Best AI Tools for Side Hustles 2026
          </h1>
          <p className="text-xl text-white/60 leading-relaxed">
            Comprehensive comparison of AI tools for freelancers and side hustlers. 
            Pricing, features, pros & cons — make money faster with the right tools.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex gap-2 flex-wrap mb-12 sticky top-0 bg-[#0a0a0a] py-4 z-10">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-mono px-4 py-2 rounded-full border transition-colors ${
                activeCategory === cat
                  ? 'border-violet-500 bg-violet-500/10 text-violet-400'
                  : 'border-white/20 text-white/60 hover:border-white/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tools by Category */}
        {filteredCategories.map(([category, categoryTools]) => (
          <section key={category} className="mb-16">
            <h2 className="text-2xl font-bold mb-2">{category}</h2>
            <p className="text-white/50 mb-8">
              {category === 'AI Writing' && 'Generate content, copy, and creative writing for clients and products'}
              {category === 'Productivity' && 'Organize, create, and edit faster with AI assistance'}
              {category === 'Freelance Platforms' && 'Find clients and sell AI-powered services'}
              {category === 'Automation' && 'Automate workflows and sell automation services'}
            </p>

            {/* Comparison Table - Desktop */}
            <div className="hidden lg:block overflow-x-auto mb-8">
              <table className="w-full border border-white/10 rounded-lg overflow-hidden">
                <thead className="bg-white/5">
                  <tr>
                    <th className="text-left p-4 font-medium">Tool</th>
                    <th className="text-left p-4 font-medium">Rating</th>
                    <th className="text-left p-4 font-medium">Free Tier</th>
                    <th className="text-left p-4 font-medium">Pro Price</th>
                    <th className="text-left p-4 font-medium">Best For</th>
                    <th className="text-center p-4 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {categoryTools.map((tool) => (
                    <tr key={tool.name} className={`border-t border-white/10 ${tool.recommended ? 'bg-violet-500/5' : ''}`}>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{tool.name}</span>
                          {tool.recommended && (
                            <span className="text-xs bg-violet-500/20 text-violet-400 px-2 py-0.5 rounded-full">
                              Recommended
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="p-4"><StarRating rating={tool.rating} /></td>
                      <td className="p-4 text-sm text-white/70">{tool.pricing.free}</td>
                      <td className="p-4 text-sm font-mono text-violet-400">{tool.pricing.pro}</td>
                      <td className="p-4 text-sm text-white/60 max-w-xs">{tool.bestFor}</td>
                      <td className="p-4 text-center">
                        <a
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-violet-500 hover:bg-violet-400 text-white text-sm font-medium px-4 py-2 rounded transition-colors"
                        >
                          Try Free →
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Cards - All Screens */}
            <div className="grid gap-4">
              {categoryTools.map((tool) => (
                <div
                  key={tool.name}
                  className={`border rounded-xl overflow-hidden transition-all ${
                    tool.recommended 
                      ? 'border-violet-500/30 bg-violet-500/5' 
                      : 'border-white/10'
                  }`}
                >
                  {/* Card Header */}
                  <div 
                    className="p-5 cursor-pointer hover:bg-white/5 transition-colors"
                    onClick={() => setExpandedTool(expandedTool === tool.name ? null : tool.name)}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          {tool.recommended && (
                            <span className="text-xs font-mono text-violet-400 bg-violet-500/20 px-2 py-1 rounded-full uppercase">
                              ★ Recommended
                            </span>
                          )}
                          <StarRating rating={tool.rating} />
                        </div>
                        <h3 className="font-semibold text-xl mb-1">{tool.name}</h3>
                        <p className="text-white/50 text-sm">{tool.bestFor}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-violet-400 font-mono font-medium">{tool.pricing.pro}</div>
                        <div className="text-xs text-white/40">Free: {tool.pricing.free}</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xs text-white/40">
                        {expandedTool === tool.name ? 'Click to collapse' : 'Click for details'}
                      </span>
                      <span className={`transition-transform ${expandedTool === tool.name ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {expandedTool === tool.name && (
                    <div className="border-t border-white/10 p-5 bg-black/20">
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Features */}
                        <div>
                          <h4 className="font-medium text-violet-400 mb-3 text-sm uppercase tracking-wider">Key Features</h4>
                          <ul className="space-y-2">
                            {tool.features.map((feature) => (
                              <li key={feature} className="flex items-center gap-2 text-sm text-white/70">
                                <span className="text-violet-400">✓</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Limits */}
                        <div>
                          <h4 className="font-medium text-violet-400 mb-3 text-sm uppercase tracking-wider">Free Tier Limits</h4>
                          <p className="text-sm text-white/70 mb-4">{tool.limits}</p>
                          
                          <h4 className="font-medium text-violet-400 mb-3 text-sm uppercase tracking-wider">Pricing</h4>
                          <div className="flex gap-4 text-sm">
                            <div className="bg-white/5 rounded px-3 py-2">
                              <span className="text-white/50">Free:</span> <span className="text-white">{tool.pricing.free}</span>
                            </div>
                            <div className="bg-violet-500/10 rounded px-3 py-2">
                              <span className="text-white/50">Pro:</span> <span className="text-violet-400 font-mono">{tool.pricing.pro}</span>
                            </div>
                          </div>
                        </div>

                        {/* Pros */}
                        <div>
                          <h4 className="font-medium text-green-400 mb-3 text-sm uppercase tracking-wider">Pros</h4>
                          <ul className="space-y-2">
                            {tool.pros.map((pro) => (
                              <li key={pro} className="flex items-center gap-2 text-sm text-white/70">
                                <span className="text-green-400">+</span>
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Cons */}
                        <div>
                          <h4 className="font-medium text-red-400 mb-3 text-sm uppercase tracking-wider">Cons</h4>
                          <ul className="space-y-2">
                            {tool.cons.map((con) => (
                              <li key={con} className="flex items-center gap-2 text-sm text-white/70">
                                <span className="text-red-400">−</span>
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-white/50">
                          <strong className="text-white">Best for:</strong> {tool.bestFor}
                        </p>
                        <a
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto text-center bg-violet-500 hover:bg-violet-400 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                        >
                          Try {tool.name} Free →
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Quick Recommendations */}
        <section className="mt-16 border-t border-white/10 pt-12">
          <h2 className="text-2xl font-bold mb-8">Quick Recommendations by Goal</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-violet-400">✍️ Content Creator Stack</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                <strong className="text-white">Copy.ai</strong> (free writing) + 
                <strong className="text-white"> Canva Pro</strong> ($13/mo) + 
                <strong className="text-white"> Descript</strong> (video editing)
              </p>
              <p className="text-xs text-white/40">Total: ~$25/month for professional content</p>
            </div>
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-violet-400">💰 Freelance Starter</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                <strong className="text-white">Fiverr</strong> (clients) + 
                <strong className="text-white"> Copy.ai</strong> (free tier) + 
                <strong className="text-white"> Zapier</strong> (free tier)
              </p>
              <p className="text-xs text-white/40">Total: $0 — Start earning before investing</p>
            </div>
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-violet-400">🤖 Automation Seller</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                <strong className="text-white">Make.com</strong> ($9/mo) + 
                <strong className="text-white"> Upwork</strong> (clients) + 
                <strong className="text-white"> Notion AI</strong> (organization)
              </p>
              <p className="text-xs text-white/40">Sell automations for $50-500+ each</p>
            </div>
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-violet-400">🚀 Scale-Up Stack</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                <strong className="text-white">Jasper</strong> ($49/mo) + 
                <strong className="text-white"> Toptal</strong> (premium clients) + 
                <strong className="text-white"> n8n</strong> (unlimited automation)
              </p>
              <p className="text-xs text-white/40">For $5k+/month freelancers ready to level up</p>
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="mt-12 bg-violet-500/5 border border-violet-500/20 rounded-lg p-6">
          <h3 className="font-semibold mb-4 text-lg">💵 Real ROI Math</h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="text-white/50 mb-2">Fiverr AI Writing Gig</p>
              <p className="text-white">3 blog posts × $50 = <span className="text-violet-400 font-mono">$150</span></p>
              <p className="text-white/40">Time: 2 hours with Copy.ai</p>
            </div>
            <div>
              <p className="text-white/50 mb-2">Automation Service</p>
              <p className="text-white">1 workflow × $200 = <span className="text-violet-400 font-mono">$200</span></p>
              <p className="text-white/40">Time: 1-3 hours with Zapier</p>
            </div>
            <div>
              <p className="text-white/50 mb-2">Social Media Package</p>
              <p className="text-white">30 posts × $300 = <span className="text-violet-400 font-mono">$300</span></p>
              <p className="text-white/40">Time: 3 hours with Jasper + Canva</p>
            </div>
          </div>
        </section>

        {/* Pro Tip */}
        <section className="mt-6 bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-lg p-6">
          <h3 className="font-semibold mb-2">💡 The $0 to First Dollar Strategy</h3>
          <p className="text-white/70">
            Don&apos;t pay for tools until you have paying clients. Sign up for free tiers, 
            create your first Fiverr gig, land a client, then reinvest 20% into better tools. 
            Check our{' '}
            <Link href="/guides/ai-freelancing-first-client" className="text-violet-400 hover:text-violet-300 underline">
              guide to landing your first AI freelancing client
            </Link>{' '}
            for the full playbook.
          </p>
        </section>
      </main>

      <footer className="border-t border-white/10 mt-24">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/40">
              © 2026 GigWithAI. Helping you build income with AI.
            </p>
            <div className="flex gap-6 text-sm text-white/40">
              <Link href="/guides" className="hover:text-white transition-colors">Guides</Link>
              <Link href="/tools" className="hover:text-white transition-colors">Tools</Link>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
