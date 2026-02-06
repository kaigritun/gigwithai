import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Write an AI-Optimized Freelance Profile | GigWithAI',
  description: 'Create a freelance profile that stands out. Use AI to write compelling bios for Upwork, Fiverr, and other platforms.',
  keywords: ['freelance profile', 'upwork profile', 'fiverr profile', 'freelance bio', 'ai freelance'],
}

export default function AIFreelanceProfilePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/guides" className="text-sm text-white/50 hover:text-white transition-colors mb-8 inline-block">
        ← Back to Guides
      </Link>

      <article className="prose-custom">
        <p className="text-violet-400 font-mono text-sm mb-4 uppercase tracking-wider">Freelancing</p>
        <h1 className="text-4xl font-bold mb-6">How to Write an AI-Optimized Freelance Profile</h1>
        <p className="text-xl text-white/60 mb-12 leading-relaxed">
          Your profile is your 24/7 salesperson. Here is how to make it work harder using AI.
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4">Why Your Profile Matters</h2>
            <p className="text-white/70 mb-4">
              On platforms like Upwork and Fiverr, clients see hundreds of profiles. You have 3 seconds to stand out.
            </p>
            <p className="text-white/70">
              A great profile does three things: establishes credibility, shows personality, and makes it easy to hire you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">The AI-Powered Profile Formula</h2>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-4">
              <h3 className="font-semibold mb-2">1. Headline (Your Hook)</h3>
              <p className="text-white/70 text-sm mb-4">Use this prompt:</p>
              <pre className="bg-black/50 p-4 rounded text-sm text-white/80 overflow-x-auto">
{`Write a freelance headline for [your skill].
Include: specific niche, key result, differentiator.
Keep under 70 characters.
Example format: [Skill] | [Niche] | [Result]`}
              </pre>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-4">
              <h3 className="font-semibold mb-2">2. Overview (Your Story)</h3>
              <p className="text-white/70 text-sm mb-4">Use this prompt:</p>
              <pre className="bg-black/50 p-4 rounded text-sm text-white/80 overflow-x-auto">
{`Write a freelance profile overview for a [your skill] specialist.
Include:
- Opening hook (1 sentence)
- Key results with numbers
- Who I work best with
- Why clients choose me
- Call to action
Keep it 150-200 words. First person. Confident but not arrogant.`}
              </pre>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="font-semibold mb-2">3. Skills & Portfolio</h3>
              <p className="text-white/70 text-sm">
                List 5-10 relevant skills. For portfolio, prioritize projects with measurable results.
                Use AI to write case study descriptions that focus on client outcomes.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Profile Optimization Tips</h2>
            <ul className="space-y-2 text-white/70">
              <li className="flex gap-3"><span className="text-violet-400">✓</span>Use keywords clients search for</li>
              <li className="flex gap-3"><span className="text-violet-400">✓</span>Add a professional photo (not a logo)</li>
              <li className="flex gap-3"><span className="text-violet-400">✓</span>Include social proof and testimonials</li>
              <li className="flex gap-3"><span className="text-violet-400">✓</span>Set competitive rates (not the lowest)</li>
              <li className="flex gap-3"><span className="text-violet-400">✓</span>Keep availability status current</li>
            </ul>
          </section>

          <section className="bg-violet-500/10 border border-violet-500/30 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-3">Test Your Profile</h2>
            <p className="text-white/70 mb-4">
              Use our free tool to score your freelance profile and get specific improvement tips.
            </p>
            <Link href="/tools/freelance-profile-score" className="text-violet-400 hover:text-violet-300">
              Try the Freelance Profile Scorer →
            </Link>
          </section>
        </div>
      </article>
    </div>
  )
}
