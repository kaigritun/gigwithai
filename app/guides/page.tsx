'use client'

import Link from 'next/link'
import { useState, useMemo } from 'react'

const guides = [
  { title: 'Social Media Management Side Hustle', desc: 'Complete guide to starting a social media management side hustle using AI tools. Charge $500-2000/month per client.', tag: 'Social Media', href: '/guides/social-media-management-side-hustle', featured: true },
  { title: 'Start a ChatGPT Consulting Business', desc: 'Start a ChatGPT consulting business with low startup costs. Learn the consulting model and how to find clients.', tag: 'Consulting', href: '/guides/chatgpt-consulting-business', featured: true },
  { title: 'AI Thumbnail Designer Business', desc: 'Start an AI thumbnail design business. Learn the tools, process, and how to find YouTube creator clients.', tag: 'Design', href: '/guides/ai-thumbnail-designer', featured: true },
  { title: 'AI Coloring Books on Amazon KDP', desc: 'Create and sell AI coloring books on Amazon KDP. Step-by-step guide to passive income with low-content books.', tag: 'Passive Income', href: '/guides/ai-coloring-books-kdp', featured: true },
  { title: 'Start an AI Agency in 2026', desc: 'Step-by-step guide to starting an AI agency. Find clients, price services, deliver results. No coding required.', tag: 'Agency', href: '/guides/start-ai-agency-2026', featured: true },
  { title: '12 AI Services to Sell as a Freelancer', desc: 'High-demand AI services that businesses will pay for. No coding required. Start selling this week.', tag: 'Freelancing', href: '/guides/best-ai-services-freelancers', featured: true },
  { title: 'ChatGPT Business Ideas 2026', desc: 'Start a business with ChatGPT. 10 proven ideas including content writing, chatbots, consulting, and more.', tag: 'Business Ideas', href: '/guides/chatgpt-business-ideas', featured: true },
  { title: 'Make Your First $1,000 with AI', desc: 'Step-by-step guide to earning your first $1,000 with AI services. From picking your offer to closing clients.', tag: 'Getting Started', href: '/guides/first-1000-with-ai', featured: true },
  { title: 'ChatGPT for Freelancers', desc: 'Learn how to use ChatGPT to 10x your freelance output. Proposal writing, client communication, and workflows.', tag: 'Freelancing', href: '/guides/chatgpt-for-freelancers', featured: true },
  { title: 'AI Upwork Profile Guide', desc: 'Use AI to build an Upwork profile that actually converts. Step-by-step guide to crafting your title and overview.', tag: 'Freelancing', href: '/guides/ai-upwork-profile', featured: true },
  { title: 'AI Automation Agency Guide', desc: 'Complete guide to building an AI automation agency. Learn the tools, find clients, price at $2,000-10,000+.', tag: 'Agency', href: '/guides/start-ai-automation-agency', featured: true },
  { title: 'Sell ChatGPT Services ($1-5K/Month)', desc: 'Learn how to sell ChatGPT services to businesses. 5 services you can offer today, pricing strategies.', tag: 'Consulting', href: '/guides/sell-chatgpt-services', featured: true },
  { title: 'AI Automation Business (No Code)', desc: 'Start an AI automation business without coding. Learn Make.com, Zapier, and ChatGPT API.', tag: 'Automation', href: '/guides/ai-automation-services' },
  { title: 'Make Money with ChatGPT Freelancing', desc: 'Make money with ChatGPT freelancing. 7 services you can offer, how to price them.', tag: 'Freelancing', href: '/guides/chatgpt-freelancing' },
  { title: 'AI for Dropshipping', desc: 'How to use AI for dropshipping. Product research, descriptions that convert, and customer service automation.', tag: 'E-commerce', href: '/guides/ai-dropshipping-guide' },
  { title: 'ChatGPT Client Acquisition Scripts', desc: 'Cold outreach scripts powered by ChatGPT. LinkedIn messages, cold emails, and follow-up sequences.', tag: 'Sales', href: '/guides/chatgpt-client-acquisition' },
  { title: 'AI Copywriting for Freelancers', desc: 'How freelance copywriters can use AI to 4x their output without sacrificing quality.', tag: 'Writing', href: '/guides/ai-copywriting-freelancers' },
  { title: 'How to Make Money with AI (12 Methods)', desc: 'Comprehensive guide to making money with AI in 2026. Freelancing, content creation, automation, and more.', tag: 'Getting Started', href: '/guides/make-money-with-ai', featured: true },
  { title: 'Best AI Tools for Freelancers 2026', desc: 'Curated list of AI tools for writing, design, productivity, and client management.', tag: 'Tools', href: '/guides/best-ai-tools-for-freelancers', featured: true },
  { title: 'AI-Powered YouTube Channel', desc: 'Cut video production from 13 hours to 3 hours. Scripts, editing, thumbnails, and monetization.', tag: 'Content Creation', href: '/guides/ai-youtube-channel' },
  { title: 'Create Online Courses with AI', desc: 'Launch a course in 3 weeks instead of 3 months. Planning, production, pricing, and marketing.', tag: 'Education', href: '/guides/ai-online-course-business' },
  { title: 'AI Social Media Management ($3K/Month)', desc: 'Manage social media for small businesses using AI. Turn 2 hours of work into 20 hours of output.', tag: 'Social Media', href: '/guides/ai-social-media-management' },
  { title: 'AI-Powered Newsletter Business', desc: 'Build a profitable newsletter using AI. From picking a niche to $8K/month at 10K subscribers.', tag: 'Content Creation', href: '/guides/ai-newsletter-business' },
  { title: 'AI Data Automation ($100/Hour)', desc: 'Automate spreadsheets and data workflows for businesses. Premium rates, no coding required.', tag: 'Automation', href: '/guides/ai-data-automation' },
  { title: 'AI Virtual Assistant Business', desc: 'Start an AI-powered VA business. Handle 3x the clients with ChatGPT and automation tools.', tag: 'Virtual Assistant', href: '/guides/ai-virtual-assistant' },
  { title: 'AI Bookkeeping ($50-100/Hour)', desc: 'Use QuickBooks + AI to help small businesses. Auto-categorize transactions, generate reports.', tag: 'Finance', href: '/guides/ai-bookkeeping-services' },
  { title: 'AI Passive Income (7 Methods)', desc: 'Build income streams that work 24/7 with AI. Print on demand, faceless YouTube, niche blogs.', tag: 'Passive Income', href: '/guides/ai-passive-income-2026' },
  { title: 'AI for Etsy Sellers', desc: 'Use AI to write better listings, optimize for search, and cut listing time from 3 hours to 30 minutes.', tag: 'E-commerce', href: '/guides/ai-etsy-sellers' },
  { title: 'AI Content Creation Business', desc: 'Build a content creation service using AI. Services, pricing, tools, and getting clients.', tag: 'Content Creation', href: '/guides/ai-content-creation-business' },
  { title: 'How to Price AI Services', desc: 'Don\'t leave money on the table. Project-based, retainer, and value-based pricing strategies.', tag: 'Pricing', href: '/guides/pricing-ai-services' },
  { title: 'Sell AI Automation Services', desc: 'No coding needed. Learn the tools, find clients, and price your AI automation services.', tag: 'Automation', href: '/guides/selling-ai-automation-services' },
  { title: 'AI Tutoring ($50-150/Hour)', desc: 'Build an AI-powered tutoring business. Use ChatGPT for prep, custom materials, and student support.', tag: 'Education', href: '/guides/ai-tutoring-side-hustle' },
  { title: '15 Best AI Side Hustles 2026', desc: 'Comprehensive guide to AI side hustles with realistic income potential. 15 proven methods.', tag: 'Getting Started', href: '/guides/ai-side-hustles-2026', featured: true },
  { title: 'AI Data Entry Jobs', desc: 'Find and excel at AI data entry jobs. Tools, platforms, and strategies for remote data work.', tag: 'Remote Work', href: '/guides/ai-data-entry-jobs' },
  { title: 'AI Virtual Assistant Jobs', desc: 'Land AI virtual assistant jobs. Skills needed, platforms to find work, and how to stand out.', tag: 'Virtual Assistant', href: '/guides/ai-virtual-assistant-jobs' },
  { title: 'ChatGPT Customer Service Jobs', desc: 'Use ChatGPT for customer service roles. Templates, workflows, and productivity tips.', tag: 'Customer Service', href: '/guides/chatgpt-customer-service-jobs' },
  { title: 'AI Freelance Services', desc: 'Top AI freelance services in demand. What to offer, how to price, where to find clients.', tag: 'Freelancing', href: '/guides/ai-freelance-services' },
]

const categories = ['All', 'Getting Started', 'Freelancing', 'Agency', 'Automation', 'Content Creation', 'Social Media', 'Consulting', 'Passive Income', 'Tools', 'E-commerce']

export default function GuidesPage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false)

  const filteredGuides = useMemo(() => {
    return guides.filter(guide => {
      const matchesSearch = search === '' || 
        guide.title.toLowerCase().includes(search.toLowerCase()) ||
        guide.desc.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = category === 'All' || guide.tag === category
      const matchesFeatured = !showFeaturedOnly || guide.featured
      return matchesSearch && matchesCategory && matchesFeatured
    })
  }, [search, category, showFeaturedOnly])

  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <div className="max-w-2xl mb-12">
        <p className="text-violet-400 font-mono text-sm mb-4 uppercase tracking-wider">
          {guides.length} Guides
        </p>
        <h1 className="text-4xl font-bold mb-6">
          AI Side Hustle Guides
        </h1>
        <p className="text-xl text-white/60 leading-relaxed">
          Practical, no-fluff guides to making money with AI tools.
        </p>
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search guides..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-96 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-violet-500/50 transition-colors"
        />
      </div>

      {/* Category filters */}
      <div className="flex gap-2 flex-wrap mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`text-xs font-mono px-4 py-2 rounded-full border transition-colors ${
              category === cat
                ? 'border-violet-500 bg-violet-500/10 text-violet-400'
                : 'border-white/20 text-white/60 hover:border-white/40'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured toggle */}
      <div className="flex items-center gap-2 mb-10">
        <button
          onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
          className={`text-xs font-mono px-4 py-2 rounded-full border transition-colors ${
            showFeaturedOnly
              ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400'
              : 'border-white/20 text-white/60 hover:border-white/40'
          }`}
        >
          ⭐ Featured Only
        </button>
      </div>

      {/* Results count */}
      {(search || category !== 'All' || showFeaturedOnly) && (
        <p className="text-white/40 text-sm mb-6">
          {filteredGuides.length} guide{filteredGuides.length !== 1 ? 's' : ''} found
        </p>
      )}

      {/* Guides grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredGuides.map((guide) => (
          <Link
            key={guide.href}
            href={guide.href}
            className="border border-white/10 rounded-lg p-5 hover:border-violet-500/50 hover:bg-white/[0.02] transition-colors group"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono text-violet-400 uppercase">
                {guide.tag}
              </span>
              {guide.featured && (
                <span className="text-xs text-emerald-400">⭐</span>
              )}
            </div>
            <h2 className="font-medium text-lg mb-2 group-hover:text-violet-400 transition-colors">
              {guide.title}
            </h2>
            <p className="text-white/50 text-sm line-clamp-2">{guide.desc}</p>
          </Link>
        ))}
      </div>

      {filteredGuides.length === 0 && (
        <div className="text-center py-16 text-white/40">
          <p className="text-lg mb-2">No guides found</p>
          <p className="text-sm">Try a different search or category</p>
        </div>
      )}
    </main>
  )
}
