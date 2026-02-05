import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Automate Your Busywork with AI (and Bill More) | GigWithAI',
  description: 'Increase your effective hourly rate by automating low-value tasks with AI. Same deliverable, same price, 62% less time.',
}

const automateThese = [
  {
    category: 'Email and Communication',
    tasks: ['Draft client responses', 'Write proposals and SOWs', 'Follow-up sequences', 'Meeting summaries'],
  },
  {
    category: 'Research and Prep',
    tasks: ['Competitor analysis', 'Industry research', 'Data gathering', 'Brief creation'],
  },
  {
    category: 'First Drafts',
    tasks: ['Blog posts and articles', 'Social media content', 'Ad copy variations', 'Email newsletters'],
  },
  {
    category: 'Administrative',
    tasks: ['Invoice follow-ups', 'Scheduling messages', 'Project status updates', 'Documentation'],
  },
]

const dontAutomate = [
  'Strategy and recommendations',
  'Client relationships',
  'Quality control (always review AI output)',
  'Creative direction',
  'Difficult conversations',
]

const prompts = [
  {
    title: 'Proposal from brief',
    category: 'Client Communication',
    prompt: `Write a proposal for [service] based on this client brief:
[paste brief]

Include: scope, timeline, deliverables, pricing ($[X]), next steps
Tone: professional but warm`,
  },
  {
    title: 'Meeting summary',
    category: 'Client Communication',
    prompt: `Summarize this meeting transcript into:
- Key decisions made
- Action items with owners
- Next meeting agenda items
- Any open questions

[paste transcript]`,
  },
  {
    title: 'Competitor analysis',
    category: 'Research',
    prompt: `Analyze [competitor] based on their website. Include:
- Value proposition
- Target audience
- Pricing model
- Key differentiators
- Weaknesses we can exploit`,
  },
  {
    title: 'Industry brief',
    category: 'Research',
    prompt: `Create a 1-page brief on [industry/topic] for a client in [their industry]. Include:
- Current trends
- Key statistics (with sources)
- Opportunities
- Risks
- Recommended actions`,
  },
  {
    title: 'Blog from outline',
    category: 'Content Creation',
    prompt: `Write a blog post based on this outline:
[outline]

Target audience: [who]
Goal: [what reader should do/learn]
Tone: [voice]
Length: [word count]
Include: introduction hook, subheadings, conclusion with CTA`,
  },
  {
    title: 'Social batch',
    category: 'Content Creation',
    prompt: `Create 10 social media posts about [topic] for [platform].
Mix: 4 educational, 3 engaging questions, 2 promotional, 1 personal story
Include: suggested image concepts
Character limit: [X]`,
  },
]

const toolStack = [
  { name: 'ChatGPT Plus', price: '$20/month', note: 'Most versatile', tier: 'must' },
  { name: 'Notion AI or similar', price: 'Included', note: 'Integrated workspace', tier: 'must' },
  { name: 'TextExpander/Raycast', price: 'Free-$8/mo', note: 'Quick prompt access', tier: 'must' },
  { name: 'Make.com/Zapier', price: 'Free-$20/mo', note: 'Connect apps', tier: 'nice' },
  { name: 'Otter.ai', price: 'Free-$17/mo', note: 'Auto transcription', tier: 'nice' },
  { name: 'Claude Pro', price: '$20/month', note: 'Alternative/backup', tier: 'nice' },
]

export default function AutomateBusyworkGuide() {
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
            Productivity
          </p>
          <h1 className="text-4xl font-bold mb-6">
            Automate Your Busywork with AI (and Bill More)
          </h1>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            The fastest way to increase your effective hourly rate: do less work per client while delivering the same results.
          </p>

          <div className="bg-violet-600/10 border border-violet-500/30 rounded-lg p-6 mb-12">
            <h2 className="font-bold mb-4">The Math That Changes Everything</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-400 text-sm mb-2">Before AI:</p>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• 4 hours writing a blog post</li>
                  <li>• Bill $50/hour = $200</li>
                </ul>
              </div>
              <div>
                <p className="text-violet-400 text-sm mb-2">After AI:</p>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• 1.5 hours (AI drafts, you edit)</li>
                  <li>• Bill $50/hour = $200</li>
                  <li className="text-white font-bold">• Effective rate: $133/hour</li>
                </ul>
              </div>
            </div>
            <p className="text-violet-400 mt-4 text-sm font-medium">
              Same deliverable. Same price. 62% less time.
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">What to Automate (and What NOT To)</h2>
            
            <div className="mb-8">
              <h3 className="text-lg font-bold text-green-400 mb-4">✅ Automate These</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {automateThese.map((cat, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <h4 className="font-medium text-white mb-2">{cat.category}</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {cat.tasks.map((task, j) => (
                        <li key={j}>• {task}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-red-400 mb-4">❌ Don&apos;t Automate These</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <ul className="text-gray-400 space-y-2">
                  {dontAutomate.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-red-400">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Automation Prompts That Save Hours</h2>
            
            <div className="space-y-6">
              {prompts.map((p, i) => (
                <div key={i} className="border border-white/10 rounded-lg overflow-hidden">
                  <div className="bg-white/5 px-4 py-2 flex justify-between items-center">
                    <span className="font-medium">{p.title}</span>
                    <span className="text-xs text-gray-500 font-mono">{p.category}</span>
                  </div>
                  <div className="bg-black/50 p-4">
                    <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono">{p.prompt}</pre>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Setting Up Your Automation Stack</h2>
            
            <div className="space-y-4">
              <h3 className="font-medium text-white/80">Must-have (free/cheap):</h3>
              <div className="space-y-2 mb-6">
                {toolStack.filter(t => t.tier === 'must').map((tool, i) => (
                  <div key={i} className="flex items-center justify-between bg-white/5 border border-white/10 rounded px-4 py-3">
                    <span className="text-white">{tool.name}</span>
                    <div className="text-right">
                      <span className="text-violet-400 text-sm">{tool.price}</span>
                      <span className="text-gray-500 text-sm ml-2">— {tool.note}</span>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="font-medium text-white/80">Nice-to-have:</h3>
              <div className="space-y-2">
                {toolStack.filter(t => t.tier === 'nice').map((tool, i) => (
                  <div key={i} className="flex items-center justify-between bg-white/5 border border-white/10 rounded px-4 py-3">
                    <span className="text-white">{tool.name}</span>
                    <div className="text-right">
                      <span className="text-violet-400 text-sm">{tool.price}</span>
                      <span className="text-gray-500 text-sm ml-2">— {tool.note}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-lg p-6 mb-12">
            <h2 className="text-xl font-bold mb-4">The Hidden Benefit: Faster Turnaround</h2>
            <p className="text-gray-300 mb-4">
              Clients pay premiums for speed. AI lets you:
            </p>
            <ul className="text-gray-300 space-y-2 mb-4">
              <li>• Deliver drafts same-day instead of next-week</li>
              <li>• Handle rush requests without burnout</li>
              <li>• Take on more clients without working more hours</li>
            </ul>
            <div className="bg-violet-600/10 border border-violet-500/30 rounded p-4">
              <p className="text-sm text-gray-300">
                <strong className="text-white">Positioning script:</strong> &quot;I have systems that let me deliver [X] in [fast time] instead of the typical [slow time]. Same quality, faster results.&quot;
              </p>
            </div>
          </section>

          <section className="bg-violet-600/10 border border-violet-500/30 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">What About Ethics?</h2>
            <p className="text-gray-300 mb-4">
              Be transparent about your process without oversharing.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-red-400">Don&apos;t say: &quot;I use AI to do your work&quot;</p>
              <p className="text-green-400">Do say: &quot;I use advanced tools that let me work faster and smarter&quot;</p>
            </div>
            <p className="text-gray-400 mt-4 text-sm">
              Clients care about results, not your exact workflow.
            </p>
          </section>

          <section className="mt-12 bg-white/5 border border-white/10 rounded-lg p-6">
            <p className="text-gray-300">
              The goal isn&apos;t to do less work. It&apos;s to do less <strong className="text-white">low-value</strong> work so you can focus on what actually requires your brain.
            </p>
          </section>

          <div className="mt-12 flex gap-4">
            <Link 
              href="/guides/ai-automation-services"
              className="text-violet-400 hover:text-violet-300"
            >
              Read next: Sell AI Automation Services →
            </Link>
          </div>
        
          <RelatedGuides guides={[
            {
              slug: 'ai-automation-services',
              title: 'AI Automation Services',
              description: 'Sell automation to clients.'
            },
            {
              slug: 'chatgpt-freelancing',
              title: 'ChatGPT Freelancing',
              description: 'Boost your freelance work with AI.'
            },
            {
              slug: 'make-money-content-creation-ai',
              title: 'Content Creation',
              description: 'Make money creating content with AI.'
            }
          ]} />
        </article>
    </div>
  )
}
