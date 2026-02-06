import Link from 'next/link'

export const metadata = {
  title: 'Blog | GigWithAI',
  description: 'Tips and insights for making money with AI tools.',
}

const posts = [
  {
    title: 'AI Passive Income: 7 Ways to Make Money While You Sleep',
    desc: 'Build income streams that work 24/7 with AI. Print on demand, faceless YouTube, niche blogs, and more.',
    date: '2026-02-03',
    href: '/guides/ai-passive-income-2026',
  },
  {
    title: 'Start an AI-Powered Newsletter',
    desc: 'Build a profitable newsletter using AI. From picking a niche to $8K/month at 10K subscribers.',
    date: '2026-02-02',
    href: '/guides/ai-newsletter-business',
  },
  {
    title: 'AI Social Media Management: $3K/Month Side Hustle',
    desc: 'Manage social media for small businesses using AI. Turn 2 hours of work into 20 hours of output.',
    date: '2026-02-01',
    href: '/guides/ai-social-media-management',
  },
  {
    title: 'How to Price AI Services',
    desc: "Don't leave money on the table. Project-based, retainer, and value-based pricing strategies with real market benchmarks.",
    date: '2026-01-30',
    href: '/guides/pricing-ai-services',
  },
  {
    title: 'Start an AI Content Creation Business',
    desc: 'Build a content creation service using AI. Services, pricing, tools, and getting clients.',
    date: '2026-01-28',
    href: '/guides/ai-content-creation-business',
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Blog</h1>
          <p className="text-gray-400 mb-12">Latest tips and insights for making money with AI.</p>

          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.title}
                href={post.href}
                className="block p-6 border border-white/10 rounded-lg hover:border-violet-500/50 hover:bg-white/[0.02] transition group"
              >
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h2 className="text-lg font-semibold mb-2 group-hover:text-violet-400 transition">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-sm">{post.desc}</p>
              </Link>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-12">
            <Link href="/guides" className="text-violet-400 hover:underline">
              View all guides →
            </Link>
          </p>
        </div>
      </section>

      </main>
  )
}
