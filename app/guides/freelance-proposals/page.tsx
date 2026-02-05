import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Write Winning Freelance Proposals with ChatGPT | GigWithAI',
  description: 'Most freelance proposals get ignored. Use AI to write proposals that convert. ChatGPT prompts for hooks, relevance, approach, and calls to action.',
  keywords: ['freelance proposal', 'chatgpt proposal', 'upwork proposal', 'fiverr proposal', 'ai freelance writing'],
}

export default function FreelanceProposalsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link 
          href="/guides" 
          className="text-sm text-gray-500 hover:text-white transition mb-8 inline-block"
        >
          ← Back to Guides
        </Link>

        <article>
          <p className="text-violet-400 text-sm font-mono uppercase tracking-wider mb-4">
            Freelancing
          </p>
          <h1 className="text-4xl font-bold mb-6">
            How to Write Winning Freelance Proposals with ChatGPT
          </h1>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            Most freelance proposals get ignored. Here&apos;s how to use AI to write ones that convert.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Why Most Proposals Fail</h2>
            <p className="text-gray-300 mb-4">
              The average Upwork job gets 50+ proposals. Most are:
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex gap-3">
                <span className="text-red-400">✗</span>
                Generic templates
              </li>
              <li className="flex gap-3">
                <span className="text-red-400">✗</span>
                Too focused on the freelancer, not the client
              </li>
              <li className="flex gap-3">
                <span className="text-red-400">✗</span>
                Missing specific details about the project
              </li>
              <li className="flex gap-3">
                <span className="text-red-400">✗</span>
                Badly formatted
              </li>
            </ul>
            <p className="text-gray-300 mt-4">
              AI can help you stand out, but only if you use it right.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">The Winning Proposal Framework</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-violet-400 mb-3">1. Hook (First 2 Lines)</h3>
                <p className="text-gray-300 mb-4">
                  Clients see the first 2 lines in their inbox. Make them count.
                </p>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-500 mb-2 font-mono">PROMPT</p>
                  <p className="text-gray-200 font-mono text-sm whitespace-pre-wrap">{`I'm applying for this freelance job:
[Paste job description]

Write 3 opening hooks that:
- Reference something specific from their post
- Show I understand their problem
- Create curiosity to read more
- Are under 25 words`}</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-violet-400 mb-3">2. Relevance (Why You)</h3>
                <p className="text-gray-300 mb-4">
                  Show you&apos;ve done this before.
                </p>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-500 mb-2 font-mono">PROMPT</p>
                  <p className="text-gray-200 font-mono text-sm whitespace-pre-wrap">{`Based on this job posting:
[Job description]

And my background:
[Your relevant experience]

Write a 2-3 sentence section that connects my experience directly to what they need. Be specific, not generic.`}</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-violet-400 mb-3">3. Approach (How You&apos;d Do It)</h3>
                <p className="text-gray-300 mb-4">
                  Show you&apos;ve thought about their project.
                </p>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-500 mb-2 font-mono">PROMPT</p>
                  <p className="text-gray-200 font-mono text-sm whitespace-pre-wrap">{`For this project:
[Job description]

Outline a 3-step approach I would take. Each step should be:
- Specific to their project
- Show my expertise
- 1-2 sentences max`}</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-violet-400 mb-3">4. Social Proof (Quick Win)</h3>
                <p className="text-gray-300 mb-4">
                  Add credibility without bragging.
                </p>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-gray-200 text-sm">
                    <strong>Example:</strong> &ldquo;I recently helped [similar client] achieve [specific result] in [timeframe].&rdquo;
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-violet-400 mb-3">5. Call to Action</h3>
                <p className="text-gray-300 mb-4">
                  End with next steps.
                </p>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-500 mb-2 font-mono">PROMPT</p>
                  <p className="text-gray-200 font-mono text-sm whitespace-pre-wrap">{`Write 3 call-to-action endings for a freelance proposal that:
- Invite further conversation
- Are confident but not pushy
- Include a specific next step`}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Full Proposal Template</h2>
            <p className="text-gray-300 mb-4">
              Use this all-in-one prompt to generate a complete proposal:
            </p>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
              <p className="text-sm text-gray-500 mb-2 font-mono">PROMPT</p>
              <p className="text-gray-200 font-mono text-sm whitespace-pre-wrap">{`Write a freelance proposal for this job:
[Paste full job description]

My relevant background:
[Your experience and skills]

Structure:
1. Hook that references their specific need
2. Why I'm the right fit (2-3 sentences)
3. My approach (3 bullet points)
4. Relevant example/result
5. Call to action

Keep it under 200 words. Sound human, not salesy.`}</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Proposal Checklist</h2>
            <p className="text-gray-300 mb-4">
              Before submitting, verify:
            </p>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-violet-400">□</span>
                  First 2 lines reference their specific project
                </li>
                <li className="flex gap-3">
                  <span className="text-violet-400">□</span>
                  No generic phrases (&ldquo;I&apos;m a hard worker&rdquo;)
                </li>
                <li className="flex gap-3">
                  <span className="text-violet-400">□</span>
                  Includes a specific example or result
                </li>
                <li className="flex gap-3">
                  <span className="text-violet-400">□</span>
                  Under 250 words
                </li>
                <li className="flex gap-3">
                  <span className="text-violet-400">□</span>
                  Proofread for typos
                </li>
                <li className="flex gap-3">
                  <span className="text-violet-400">□</span>
                  Asks a question to start conversation
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Volume Matters</h2>
            <p className="text-gray-300 mb-4">
              Even great proposals have ~10-20% response rates. The key is:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="border border-white/10 rounded-lg p-4">
                <h3 className="font-bold text-violet-400 mb-2">5-10 daily</h3>
                <p className="text-sm text-gray-400">Apply to relevant jobs consistently</p>
              </div>
              <div className="border border-white/10 rounded-lg p-4">
                <h3 className="font-bold text-violet-400 mb-2">Track results</h3>
                <p className="text-sm text-gray-400">Note which approaches get responses</p>
              </div>
              <div className="border border-white/10 rounded-lg p-4">
                <h3 className="font-bold text-violet-400 mb-2">Iterate</h3>
                <p className="text-sm text-gray-400">Double down on what works</p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-violet-600/20 to-purple-600/20 border border-violet-500/30 rounded-lg p-8 mb-12">
            <h2 className="text-xl font-bold mb-4">Get More Freelance Prompts</h2>
            <p className="text-gray-300 mb-6">
              Proposal templates, client scripts, and rate calculators in our free toolkit.
            </p>
            <Link 
              href="/toolkit"
              className="inline-block px-6 py-3 bg-violet-600 hover:bg-violet-500 rounded-lg font-semibold transition"
            >
              Free Toolkit →
            </Link>
          </section>

          <div className="flex gap-4 flex-wrap">
            <Link 
              href="/guides/chatgpt-freelancing"
              className="text-violet-400 hover:text-violet-300"
            >
              ← 7 Ways to Freelance with ChatGPT
            </Link>
            <Link 
              href="/guides/chatgpt-client-acquisition"
              className="text-violet-400 hover:text-violet-300 ml-auto"
            >
              Client Acquisition Guide →
            </Link>
          </div>
        
          <RelatedGuides guides={[
            {
              slug: 'chatgpt-freelancing',
              title: '7 Ways to Freelance with ChatGPT',
              description: 'Services you can offer using AI to 3x your output.'
            },
            {
              slug: 'chatgpt-client-acquisition',
              title: 'Client Acquisition',
              description: 'Find and land high-paying freelance clients.'
            },
            {
              slug: 'pricing-ai-services',
              title: 'Pricing AI Services',
              description: 'How to price your AI-assisted freelance work.'
            }
          ]} />
        </article>
    </div>
  )
}
