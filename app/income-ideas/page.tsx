import Link from 'next/link'

export const metadata = {
  title: 'AI Income Ideas | GigWithAI',
  description: 'Curated list of AI-powered income opportunities - from side hustles to full businesses.',
}

const ideas = [
  {
    title: 'AI Content Creation',
    earning: '$2K-10K/mo',
    difficulty: 'Beginner',
    desc: 'Write blog posts, social content, and marketing copy for businesses using AI tools.',
    href: '/guides/ai-content-creation-business',
  },
  {
    title: 'AI Virtual Assistant',
    earning: '$3K-6K/mo',
    difficulty: 'Beginner',
    desc: 'Handle 3x the clients with ChatGPT and automation tools. Earn $35-75/hour.',
    href: '/guides/ai-virtual-assistant',
  },
  {
    title: 'AI Social Media Management',
    earning: '$3K-8K/mo',
    difficulty: 'Beginner',
    desc: 'Manage social for small businesses. Turn 2 hours of work into 20 hours of output.',
    href: '/guides/ai-social-media-management',
  },
  {
    title: 'AI Newsletter Business',
    earning: '$1K-10K/mo',
    difficulty: 'Beginner',
    desc: 'Build a niche newsletter with AI-assisted research and writing. Monetize with ads/sponsorships.',
    href: '/guides/ai-newsletter-business',
  },
  {
    title: 'AI Tutoring',
    earning: '$3K-8K/mo',
    difficulty: 'Beginner',
    desc: 'Build an AI-powered tutoring business. Custom materials, 24/7 student support, $50-150/hour.',
    href: '/guides/ai-tutoring-side-hustle',
  },
  {
    title: 'AI Bookkeeping',
    earning: '$4K-10K/mo',
    difficulty: 'Beginner',
    desc: 'QuickBooks + AI to help small businesses. Auto-categorize transactions, $50-100/hour.',
    href: '/guides/ai-bookkeeping-services',
  },
  {
    title: 'AI Automation Services',
    earning: '$5K-15K/mo',
    difficulty: 'Intermediate',
    desc: 'Build automations for businesses using Zapier, Make, and AI. No coding required.',
    href: '/guides/selling-ai-automation-services',
  },
  {
    title: 'AI Data & Spreadsheet Automation',
    earning: '$5K-12K/mo',
    difficulty: 'Intermediate',
    desc: 'Automate spreadsheets and data workflows. Premium rates at $100/hour.',
    href: '/guides/ai-data-automation',
  },
  {
    title: 'AI YouTube Channel',
    earning: '$1K-20K/mo',
    difficulty: 'Intermediate',
    desc: 'Cut video production from 13 hours to 3 hours with AI. Scripts, editing, thumbnails.',
    href: '/guides/ai-youtube-channel',
  },
  {
    title: 'AI Online Courses',
    earning: '$2K-30K/mo',
    difficulty: 'Intermediate',
    desc: 'Launch a course in 3 weeks instead of 3 months using AI for planning and production.',
    href: '/guides/ai-online-course-business',
  },
]

export default function IncomeIdeasPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">AI Income Ideas</h1>
          <p className="text-gray-400 mb-12">Curated opportunities ranked by earning potential and difficulty.</p>

          <div className="space-y-4">
            {ideas.map((idea) => (
              <Link
                key={idea.title}
                href={idea.href}
                className="block p-6 border border-white/10 rounded-lg hover:border-violet-500/50 hover:bg-white/[0.02] transition group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-lg font-semibold group-hover:text-violet-400 transition">
                        {idea.title}
                      </span>
                      <span className="text-sm font-mono text-emerald-400">{idea.earning}</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{idea.desc}</p>
                    <span className={`text-xs px-2 py-1 rounded ${
                      idea.difficulty === 'Beginner' 
                        ? 'bg-violet-500/10 text-violet-400'
                        : 'bg-amber-500/10 text-amber-400'
                    }`}>
                      {idea.difficulty}
                    </span>
                  </div>
                  <span className="text-violet-400 opacity-0 group-hover:opacity-100 transition">→</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 p-6 border border-violet-500/30 rounded-lg bg-violet-500/5">
            <h3 className="font-semibold mb-2">Don&apos;t know where to start?</h3>
            <p className="text-gray-400 text-sm mb-4">
              Check our guide on pricing your services and landing your first client.
            </p>
            <Link href="/guides/pricing-ai-services" className="text-violet-400 hover:underline text-sm">
              How to Price AI Services →
            </Link>
          </div>
        </div>
      </section>

      </main>
  )
}
