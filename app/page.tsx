import Link from 'next/link'
import EmailSignup from '@/components/EmailSignup'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-violet-400 text-sm font-mono uppercase tracking-wider mb-4">
            Make Money With AI
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Start Your AI Side Hustle Today
          </h1>
          <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
            Practical guides to earning extra income with AI tools. No fluff, no get-rich-quick schemes—just real methods that work.
          </p>
          <Link 
            href="/guides"
            className="inline-block bg-violet-600 hover:bg-violet-500 text-white px-8 py-3 rounded-lg font-medium transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Browse Guides →
          </Link>
          
          {/* Email Signup in Hero - A/B testing enabled */}
          <div className="mt-12 max-w-md mx-auto text-left">
            <EmailSignup 
              headline="Get AI income ideas weekly" 
              description="Free weekly tips on making money with AI tools."
              buttonText="Get Free Ideas"
              abTestCta={true}
            />
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="px-6 py-16 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-mono text-white/40 uppercase tracking-wider mb-8">
            Featured Guides
          </p>
          
          <div className="space-y-4">
            {[
              {
                title: 'Start an AI Content Creation Business',
                desc: 'Build a content creation service using AI. Services, pricing, tools, and getting clients.',
                href: '/guides/ai-content-creation-business',
                level: 'Beginner',
                time: '18 min read',
              },
              {
                title: '10 AI Side Hustles You Can Start This Week',
                desc: 'Realistic income opportunities with AI—from content creation to automation services.',
                href: '/guides/ai-side-hustles-2026',
                level: 'Beginner',
                time: '15 min read',
              },
              {
                title: 'AI Freelancing: Getting Your First Client',
                desc: 'How to position, price, and land your first AI services client on Upwork or Fiverr.',
                href: '/guides/ai-freelancing-first-client',
                level: 'Intermediate',
                time: '25 min read',
              },
            ].map((guide) => (
              <Link 
                key={guide.href}
                href={guide.href}
                className="block p-6 border border-white/10 rounded-xl hover:border-violet-500/50 hover:bg-white/[0.02] transition-all group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-violet-400 transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-white/50 text-sm">
                      {guide.desc}
                    </p>
                  </div>
                  <span className="text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
                <div className="mt-4 flex gap-2">
                  <span className={`text-xs px-2 py-1 rounded ${
                    guide.level === 'Beginner' 
                      ? 'bg-violet-500/10 text-violet-400' 
                      : 'bg-amber-500/10 text-amber-400'
                  }`}>
                    {guide.level}
                  </span>
                  <span className="text-xs px-2 py-1 bg-white/5 text-white/40 rounded">
                    {guide.time}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <p className="text-center mt-8">
            <Link href="/guides" className="text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors">
              View all 60+ guides →
            </Link>
          </p>
        </div>
      </section>

      {/* Why This Works */}
      <section className="px-6 py-16 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-mono text-white/40 uppercase tracking-wider mb-8">
            Why AI Side Hustles
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Low Barrier to Entry',
                desc: 'Most AI tools have free tiers. Start earning with zero upfront investment.',
              },
              {
                icon: '📈',
                title: 'Scale Your Time',
                desc: 'AI lets you do in minutes what used to take hours. Multiply your output.',
              },
              {
                icon: '🎯',
                title: 'Real Demand',
                desc: "Businesses need AI help but don't know where to start. That's your opportunity.",
              },
            ].map((item) => (
              <div key={item.title}>
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - A/B testing enabled */}
      <section className="px-6 py-16 border-t border-white/10">
        <div className="max-w-md mx-auto">
          <EmailSignup 
            headline="Get weekly AI hustle tips" 
            description="Join thousands of side hustlers using AI to earn extra income."
            buttonText="Subscribe Free"
            abTestCta={true}
          />
        </div>
      </section>
    </>
  )
}
