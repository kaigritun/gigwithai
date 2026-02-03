import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Price AI Services: Don\'t Leave Money on the Table | GigWithAI',
  description: 'Learn how to price AI freelance services correctly. Project-based, retainer, and value-based pricing strategies with real benchmarks.',
}

const pricingModels = [
  {
    name: 'Project-Based',
    best: 'Best for Starting',
    examples: [
      { service: 'AI chatbot setup', range: '$500-2,000' },
      { service: 'Content strategy + 10 AI posts', range: '$800-1,500' },
      { service: 'Automation workflow', range: '$300-1,000' },
    ],
    pros: ['Clients know exactly what they\'re paying', 'Your efficiency = more profit', 'Easier to sell'],
    cons: ['Scope creep kills margins', 'Requires clear definitions'],
  },
  {
    name: 'Retainer/Subscription',
    best: 'Best for Recurring Revenue',
    examples: [
      { service: 'AI content management', range: '$500-2,000/month' },
      { service: 'Chatbot maintenance', range: '$300-800/month' },
      { service: 'Weekly AI reports', range: '$400-1,000/month' },
    ],
    pros: ['Predictable income', 'Compounds (10 clients = stable)', 'Clients stick around'],
    cons: ['Need consistent delivery', 'Harder to sell initially'],
  },
  {
    name: 'Value-Based',
    best: 'Best for Experienced',
    examples: [
      { service: 'Save client 18 hrs/month @ $50/hr', range: 'Charge $300/month' },
      { service: 'Increase conversion 20%', range: '% of revenue lift' },
      { service: 'Replace $5k/mo software', range: 'Charge $2k/mo' },
    ],
    pros: ['Highest earning potential', 'Aligned with client success'],
    cons: ['Need to understand client business', 'Must quantify the value'],
  },
]

const benchmarks = {
  entry: {
    level: 'Entry Level (0-6 months)',
    rates: [
      { service: 'Simple AI content', range: '$50-100/piece' },
      { service: 'Basic chatbot', range: '$300-500' },
      { service: 'Social media automation', range: '$200-400/month' },
    ],
  },
  intermediate: {
    level: 'Intermediate (6-18 months)',
    rates: [
      { service: 'Complex workflows', range: '$500-1,500' },
      { service: 'Custom AI integrations', range: '$1,000-3,000' },
      { service: 'Content strategy + execution', range: '$1,000-2,500/month' },
    ],
  },
  expert: {
    level: 'Expert (18+ months)',
    rates: [
      { service: 'Enterprise automation', range: '$5,000-20,000' },
      { service: 'AI strategy consulting', range: '$200-500/hour' },
      { service: 'Full AI transformation', range: '$10,000-50,000' },
    ],
  },
}

export default function PricingAIServices() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <header className="border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="text-xl font-bold text-orange-500 hover:text-orange-400">
            GigWithAI
          </Link>
        </div>
      </header>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/guides" className="text-zinc-400 hover:text-zinc-300 text-sm">
            ← Back to Guides
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-4">How to Price AI Services</h1>
        <p className="text-xl text-zinc-400 mb-8">Don't leave money on the table. Price on value, not time.</p>

        {/* Key Insight */}
        <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-6 mb-12">
          <p className="text-orange-400 font-medium text-lg">
            "Your client doesn't care how you do the work. They care about the result. A logo designed in 10 minutes with AI is worth the same as one that took 10 hours—if it solves the same problem."
          </p>
        </div>

        {/* The Mistake */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">The Pricing Mistake Everyone Makes</h2>
          <p className="text-zinc-300 mb-4">
            New AI freelancers think: "AI does most of the work, so I should charge less."
          </p>
          <p className="text-zinc-300 mb-4">
            <strong className="text-white">Wrong.</strong> Your efficiency is your competitive advantage, not a reason to discount. 
            When AI helps you work faster, you keep the same rates and make more per hour.
          </p>
        </section>

        {/* Pricing Models */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Three Pricing Models</h2>
          <div className="space-y-8">
            {pricingModels.map((model) => (
              <div key={model.name} className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold">{model.name}</h3>
                  <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded">
                    {model.best}
                  </span>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-zinc-400 mb-2">Examples:</h4>
                  <ul className="space-y-1">
                    {model.examples.map((ex, i) => (
                      <li key={i} className="flex justify-between text-sm">
                        <span className="text-zinc-300">{ex.service}</span>
                        <span className="text-green-400 font-medium">{ex.range}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="text-green-400 font-medium mb-1">Pros</h4>
                    <ul className="text-zinc-400 space-y-1">
                      {model.pros.map((pro, i) => (
                        <li key={i}>+ {pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-red-400 font-medium mb-1">Cons</h4>
                    <ul className="text-zinc-400 space-y-1">
                      {model.cons.map((con, i) => (
                        <li key={i}>- {con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benchmarks */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">2026 Market Benchmarks</h2>
          <div className="space-y-6">
            {Object.values(benchmarks).map((tier) => (
              <div key={tier.level} className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-5">
                <h3 className="font-bold text-lg mb-3">{tier.level}</h3>
                <div className="grid gap-2">
                  {tier.rates.map((rate, i) => (
                    <div key={i} className="flex justify-between text-sm">
                      <span className="text-zinc-400">{rate.service}</span>
                      <span className="text-zinc-200 font-medium">{rate.range}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Calculator */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">The "Should I Take This?" Calculator</h2>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <ol className="space-y-3 text-zinc-300">
              <li><strong className="text-white">1. Estimate hours</strong> — Be honest. Include revisions and client calls.</li>
              <li><strong className="text-white">2. Calculate hourly rate</strong> — Project fee ÷ estimated hours</li>
              <li><strong className="text-white">3. Compare to your minimum</strong> — What's the least you'll work for?</li>
            </ol>
            <p className="text-zinc-400 mt-4 text-sm">
              Example: $500 project ÷ 20 hours = $25/hour. Early on, fine for portfolio. 6 months in, be selective.
            </p>
          </div>
        </section>

        {/* How to Raise */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">How to Raise Your Prices</h2>
          
          <h3 className="font-bold text-lg mt-6 mb-2">New Clients</h3>
          <p className="text-zinc-300 mb-4">
            Just quote higher. Nobody knows what you charged before. Test: Quote 20% higher. 
            If they say yes immediately, you're still too cheap.
          </p>

          <h3 className="font-bold text-lg mt-6 mb-2">Existing Clients</h3>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 mb-4">
            <p className="text-zinc-300 italic">
              "My rates are increasing to reflect the market. New rate is [X]. I wanted to give you advance notice because I value our work together."
            </p>
          </div>
          <p className="text-zinc-400 text-sm">Most clients accept. Some don't. That's fine—you're making room for better clients.</p>
        </section>

        {/* The Real Secret */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">The Real Secret</h2>
          <p className="text-zinc-300 mb-4">
            <strong className="text-white">Confidence.</strong> Clients can smell uncertainty.
          </p>
          <p className="text-zinc-300 mb-4">
            State your price like it's obvious. Don't apologize. Don't over-explain. Don't offer discounts unprompted.
          </p>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
            <p className="text-zinc-200 font-medium">"The project is $1,200. Want to move forward?"</p>
            <p className="text-zinc-400 text-sm mt-2">That's it. The pause is uncomfortable. Let it be.</p>
          </div>
        </section>

        {/* Bottom Line */}
        <section className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-3">Bottom Line</h2>
          <ul className="text-zinc-300 space-y-2">
            <li>• Price on value, not time</li>
            <li>• Start project-based, move to retainers</li>
            <li>• Raise prices every 6-12 months</li>
            <li>• Some "too expensive" responses = priced right</li>
          </ul>
          <p className="text-orange-400 font-medium mt-4">Your AI skills have real value. Price like it.</p>
        </section>

        {/* CTA */}
        <div className="mt-12 pt-8 border-t border-zinc-800">
          <p className="text-zinc-400 mb-4">Ready to start earning?</p>
          <Link 
            href="/guides" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Explore More Guides
          </Link>
        </div>
      
          <RelatedGuides guides={[
                    {
                              slug: 'ai-freelancing-first-client',
                              title: 'First Client',
                              description: 'Price right to land clients.'
                    },
                    {
                              slug: 'selling-ai-automation-services',
                              title: 'Selling Automation',
                              description: 'Price automation services.'
                    },
                    {
                              slug: 'ai-consulting-practice',
                              title: 'AI Consulting',
                              description: 'Consulting pricing strategies.'
                    }
          ]} />
        </article>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center text-zinc-500 text-sm">
          © 2026 GigWithAI. Make money with AI.
        </div>
      </footer>
    </main>
  )
}
