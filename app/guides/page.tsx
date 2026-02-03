import Link from 'next/link'

export const metadata = {
  title: 'AI Side Hustle Guides | GigWithAI',
  description: 'Practical guides to earning extra income with AI tools.',
}

const guides = [
  {
    slug: 'make-money-with-ai',
    title: 'How to Make Money with AI: 12 Proven Methods',
    description: 'Comprehensive guide to making money with AI in 2026. Freelancing, content creation, automation, and more.',
    difficulty: 'Beginner',
    time: '25 min',
    status: 'live'
  },
  {
    slug: 'best-ai-tools-for-freelancers',
    title: 'Best AI Tools for Freelancers in 2026',
    description: 'Curated list of AI tools for writing, design, productivity, and client management. Build your freelance stack.',
    difficulty: 'Beginner',
    time: '12 min',
    status: 'live'
  },
  {
    slug: 'ai-youtube-channel',
    title: 'Start an AI-Powered YouTube Channel',
    description: 'Cut video production from 13 hours to 3 hours. Scripts, editing, thumbnails, and monetization timeline.',
    difficulty: 'Beginner',
    time: '18 min',
    status: 'live'
  },
  {
    slug: 'ai-online-course-business',
    title: 'Create and Sell Online Courses with AI',
    description: 'Launch a course in 3 weeks instead of 3 months. Planning, production, pricing, and marketing.',
    difficulty: 'Intermediate',
    time: '20 min',
    status: 'live'
  },
  {
    slug: 'ai-social-media-management',
    title: 'AI Social Media Management: $3K/Month Side Hustle',
    description: 'Manage social media for small businesses using AI. Turn 2 hours of work into 20 hours of output.',
    difficulty: 'Beginner',
    time: '12 min',
    status: 'live'
  },
  {
    slug: 'ai-newsletter-business',
    title: 'Start an AI-Powered Newsletter',
    description: 'Build a profitable newsletter using AI. From picking a niche to $8K/month at 10K subscribers.',
    difficulty: 'Beginner',
    time: '15 min',
    status: 'live'
  },
  {
    slug: 'ai-data-automation',
    title: 'Sell AI Data & Spreadsheet Automation: $100/Hour',
    description: 'Automate spreadsheets and data workflows for businesses. Premium rates, no coding required.',
    difficulty: 'Intermediate',
    time: '14 min',
    status: 'live'
  },
  {
    slug: 'ai-virtual-assistant',
    title: 'AI Virtual Assistant Side Hustle',
    description: 'Start an AI-powered VA business. Handle 3x the clients with ChatGPT and automation tools. Earn $35-75/hour.',
    difficulty: 'Beginner',
    time: '18 min',
    status: 'live'
  },
  {
    slug: 'ai-bookkeeping-services',
    title: 'AI Bookkeeping: $50-100/Hour Side Hustle',
    description: 'Use QuickBooks + AI to help small businesses. Auto-categorize transactions, generate reports, earn great money.',
    difficulty: 'Beginner',
    time: '20 min',
    status: 'live'
  },
  {
    slug: 'ai-passive-income-2026',
    title: 'AI Passive Income: 7 Ways to Make Money While You Sleep',
    description: 'Build income streams that work 24/7 with AI. Print on demand, faceless YouTube, niche blogs, and more.',
    difficulty: 'Beginner',
    time: '15 min',
    status: 'live'
  },
  {
    slug: 'ai-etsy-sellers',
    title: 'AI for Etsy Sellers: Double Your Sales',
    description: 'Use AI to write better listings, optimize for search, and cut listing time from 3 hours to 30 minutes.',
    difficulty: 'Beginner',
    time: '18 min',
    status: 'live'
  },
  {
    slug: 'ai-content-creation-business',
    title: 'Start an AI Content Creation Business',
    description: 'Build a content creation service using AI. Services, pricing, tools, and getting clients.',
    difficulty: 'Beginner',
    time: '18 min',
    status: 'live'
  },
  {
    slug: 'pricing-ai-services',
    title: 'How to Price AI Services',
    description: 'Don\'t leave money on the table. Project-based, retainer, and value-based pricing strategies with real market benchmarks.',
    difficulty: 'Intermediate',
    time: '12 min',
    status: 'live'
  },
  {
    slug: 'selling-ai-automation-services',
    title: 'How to Sell AI Automation Services',
    description: 'No coding needed. Learn the tools, find clients, and price your AI automation services.',
    difficulty: 'Intermediate',
    time: '22 min',
    status: 'live'
  },
  {
    slug: 'ai-tutoring-side-hustle',
    title: 'AI Tutoring Side Hustle: Make $50-150/Hour',
    description: 'Build an AI-powered tutoring business. Use ChatGPT for prep, custom materials, and 24/7 student support.',
    difficulty: 'Beginner',
    time: '20 min',
    status: 'live'
  },
  {
    slug: 'ai-side-hustles-2026',
    title: '10 AI Side Hustles You Can Start This Week',
    description: 'Realistic income opportunities with AI—from content creation to automation services.',
    difficulty: 'Beginner',
    time: '15 min',
    status: 'coming-soon'
  },
  {
    slug: 'chatgpt-money-guide',
    title: 'How to Make Money with ChatGPT',
    description: 'Turn ChatGPT into a money-making tool. Freelancing, content, automation, and more.',
    difficulty: 'Beginner',
    time: '20 min',
    status: 'coming-soon'
  },
  {
    slug: 'ai-freelancing-first-client',
    title: 'AI Freelancing: Getting Your First Client',
    description: 'How to position, price, and land your first AI services client on Upwork or Fiverr.',
    difficulty: 'Intermediate',
    time: '25 min',
    status: 'coming-soon'
  },
]

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Nav */}
      <nav className="border-b border-white/10 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-violet-400">
            GigWithAI
          </Link>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/guides" className="text-white">Guides</Link>
            <Link href="/tools" className="hover:text-white transition">Tools</Link>
          </div>
        </div>
      </nav>

      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">AI Side Hustle Guides</h1>
          <p className="text-gray-400 mb-12">Practical, no-fluff guides to making money with AI.</p>

          <div className="space-y-4">
            {guides.map((guide) => {
              const isLive = guide.status === 'live'
              const content = (
                <>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className={`text-lg font-semibold mb-2 ${isLive ? 'group-hover:text-violet-400 transition' : ''}`}>
                        {guide.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {guide.description}
                      </p>
                    </div>
                    {isLive && <span className="text-violet-400 opacity-0 group-hover:opacity-100 transition">→</span>}
                  </div>
                  <div className="mt-4 flex gap-2">
                    <span className={`text-xs px-2 py-1 rounded ${
                      guide.difficulty === 'Beginner' 
                        ? 'bg-violet-500/10 text-violet-400'
                        : 'bg-amber-500/10 text-amber-400'
                    }`}>
                      {guide.difficulty}
                    </span>
                    <span className="text-xs px-2 py-1 bg-white/5 text-gray-400 rounded">{guide.time}</span>
                    {!isLive && <span className="text-xs px-2 py-1 bg-yellow-500/10 text-yellow-400 rounded">Coming Soon</span>}
                  </div>
                </>
              )
              
              return isLive ? (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}`}
                  className="block p-6 border border-white/10 rounded-lg relative overflow-hidden hover:border-violet-500/50 hover:bg-white/[0.02] transition group"
                >
                  {content}
                </Link>
              ) : (
                <div
                  key={guide.slug}
                  className="block p-6 border border-white/10 rounded-lg relative overflow-hidden"
                >
                  {content}
                </div>
              )
            })}
          </div>

          <p className="text-center text-gray-500 text-sm mt-12">
            More guides coming weekly. Check back soon.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 mt-auto">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© 2026 GigWithAI</p>
          <div className="flex gap-6">
            <Link href="/guides" className="hover:text-white transition">Guides</Link>
            <Link href="/tools" className="hover:text-white transition">Tools</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
