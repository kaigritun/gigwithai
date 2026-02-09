import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About | GigWithAI',
  description: 'GigWithAI helps people build profitable side hustles using AI tools.',
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Hero */}
      <div className="max-w-2xl mb-16">
        <p className="text-violet-400 font-mono text-sm mb-4 uppercase tracking-wider">About</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Real income with AI tools</h1>
        <p className="text-xl text-white/60 leading-relaxed">
          GigWithAI provides practical guides to help you build profitable side hustles 
          using AI. No hype, no get-rich-quick schemes — just real methods with 
          realistic income potential.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-white/10 mb-16">
        {[
          { stat: '37+', label: 'Detailed Guides' },
          { stat: '$500-10K', label: 'Income Range' },
          { stat: '15+', label: 'Side Hustle Ideas' },
          { stat: '100%', label: 'Free to Start' },
        ].map((item) => (
          <div key={item.label} className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-violet-400 mb-2">{item.stat}</div>
            <div className="text-xs text-white/50">{item.label}</div>
          </div>
        ))}
      </div>

      {/* What We Offer */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">What we cover</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'Freelancing with AI',
              desc: 'How to offer AI services on Upwork, Fiverr, and direct to clients. Pricing, positioning, and landing your first gig.',
            },
            {
              title: 'Agency Building',
              desc: 'Scale from freelancer to agency owner. Systems, hiring, and client management for AI service businesses.',
            },
            {
              title: 'Content Creation',
              desc: 'YouTube, newsletters, social media — how to create faster and better with AI tools.',
            },
            {
              title: 'Passive Income',
              desc: 'Print on demand, digital products, courses, and other ways to earn while you sleep.',
            },
          ].map((item) => (
            <div key={item.title} className="border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-white/50 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-violet-900/20 border border-violet-500/20 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to start earning?</h2>
        <p className="text-white/60 mb-6">Browse our free guides and pick your first side hustle today.</p>
        <Link 
          href="/guides"
          className="inline-block bg-violet-600 hover:bg-violet-500 text-white font-medium px-8 py-3 rounded-lg transition-all"
        >
          Browse Guides →
        </Link>
      </div>
    </div>
  )
}
