import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Make Money Creating Content with AI Tools | GigWithAI',
  description: 'Learn the most accessible AI side hustle: content creation. No technical skills needed—just ideas and consistency. Multiple monetization paths from $50-10,000/month.',
}

const monetizationPaths = [
  {
    title: '1. Freelance Writing',
    potential: '$50-500/article',
    desc: 'Businesses need content constantly. Use AI to write faster, not replace thinking.',
    howTo: [
      'Pick a niche (SaaS, health, finance)',
      'Create 3 portfolio samples using AI assistance',
      'Pitch on Upwork, Contently, or direct outreach',
      'Deliver 2x faster than non-AI writers',
    ],
    prompt: `1. Research: "What are the top 10 questions about [topic]?"
2. Outline: "Create a detailed outline for an article on [topic] targeting [audience]"
3. Draft: "Write section 1 based on this outline: [outline]"
4. Edit: "Improve this paragraph for clarity and engagement: [text]"`,
  },
  {
    title: '2. Social Media Management',
    potential: '$500-2,000/month per client',
    desc: 'Small businesses need social presence but hate creating content.',
    howTo: [
      'Offer 20 posts/month package',
      'Create basic graphics with AI tools',
      'Handle scheduling and light engagement',
      'Scale to 3-5 clients for full-time income',
    ],
    prompt: `Create a week of social media posts for a [business type] targeting [audience]. Include:
- 5 educational posts
- 2 promotional posts
- 3 engagement posts (questions, polls)
Format: Post text + suggested image description`,
  },
  {
    title: '3. Faceless YouTube Channels',
    potential: '$0-10,000+/month',
    desc: 'AI can help script, voice, and edit videos for niche channels.',
    howTo: [
      'Pick evergreen niches: tutorials, news, top 10s, explainers',
      'Use ChatGPT for scripts',
      'ElevenLabs for voiceover ($5/month)',
      'Canva/Runway for visuals, Opus Clip for shorts',
    ],
    note: 'YouTube requires 1K subs for monetization. Takes 3-6 months typically.',
  },
  {
    title: '4. Newsletter Business',
    potential: '$500-5,000/month',
    desc: 'Curate and summarize information in a niche. People pay for filtered signal.',
    howTo: [
      'Pick a niche with news flow (AI, crypto, industry)',
      'Use AI to summarize and synthesize sources',
      'Add your perspective and analysis',
      'Grow on Substack, monetize at 1000+ subscribers',
    ],
    prompt: `Summarize these 5 articles about [topic] into a 3-paragraph newsletter section. Include:
- Key takeaways
- Why it matters
- What to watch next`,
  },
  {
    title: '5. Course/Info Product',
    potential: '$97-997 one-time',
    desc: 'Package your knowledge. AI helps create faster.',
    howTo: [
      'Outline course with AI brainstorming',
      'Draft lessons using AI + your expertise',
      'Create workbooks and templates',
      'Host on Gumroad, Teachable, or Podia',
    ],
  },
]

const aiTools = [
  {
    category: 'Writing',
    tools: [
      { name: 'ChatGPT/Claude', use: 'Long-form, ideation, editing' },
      { name: 'Jasper', use: 'Marketing copy (paid)' },
      { name: 'Copy.ai', use: 'Short-form, ads' },
    ],
  },
  {
    category: 'Images',
    tools: [
      { name: 'Midjourney', use: 'Best quality, $10/month' },
      { name: 'DALL-E 3', use: 'Included with ChatGPT Plus' },
      { name: 'Leonardo.ai', use: 'Free tier, commercial use' },
    ],
  },
  {
    category: 'Video',
    tools: [
      { name: 'Runway', use: 'AI video editing' },
      { name: 'HeyGen', use: 'AI avatars' },
      { name: 'Opus Clip', use: 'Repurpose long videos' },
    ],
  },
]

export default function ContentCreationGuide() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <nav className="border-b border-white/10 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-violet-400">
            GigWithAI
          </Link>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/guides" className="hover:text-white transition">Guides</Link>
            <Link href="/tools" className="hover:text-white transition">Tools</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <Link 
          href="/guides" 
          className="text-sm text-gray-500 hover:text-white transition mb-8 inline-block"
        >
          ← Back to Guides
        </Link>

        <article>
          <p className="text-violet-400 text-sm font-mono uppercase tracking-wider mb-4">
            Content Creation
          </p>
          <h1 className="text-4xl font-bold mb-6">
            Make Money Creating Content with AI Tools
          </h1>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            Content creation is the most accessible AI side hustle. You don&apos;t need technical skills—just ideas and consistency.
          </p>

          <div className="bg-violet-600/10 border border-violet-500/30 rounded-lg p-6 mb-12">
            <h2 className="font-bold mb-2">Why Content Creation Works</h2>
            <ul className="text-gray-300 space-y-2 text-sm">
              <li>• Low startup cost ($0-20/month for AI tools)</li>
              <li>• Skills transfer everywhere</li>
              <li>• Scales with your output</li>
              <li>• Multiple monetization paths</li>
            </ul>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">The AI Content Stack</h2>
            <div className="grid gap-6">
              {aiTools.map((cat, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold text-violet-400 mb-3">{cat.category}</h3>
                  <div className="space-y-2">
                    {cat.tools.map((tool, j) => (
                      <div key={j} className="flex justify-between items-center text-sm">
                        <span className="text-white">{tool.name}</span>
                        <span className="text-gray-400">{tool.use}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <h2 className="text-2xl font-bold mb-8">5 Ways to Monetize AI Content</h2>

          <div className="space-y-12">
            {monetizationPaths.map((path, i) => (
              <section key={i} className="border-b border-white/10 pb-12">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-xl font-bold">{path.title}</h3>
                  <p className="text-violet-400 font-mono text-sm shrink-0">{path.potential}</p>
                </div>
                <p className="text-gray-300 mb-4">{path.desc}</p>
                
                <h4 className="font-medium mb-2 text-white/80">How to start:</h4>
                <ul className="space-y-2 mb-4">
                  {path.howTo.map((step, j) => (
                    <li key={j} className="text-gray-400 flex gap-2">
                      <span className="text-violet-400">→</span>
                      {step}
                    </li>
                  ))}
                </ul>
                
                {path.prompt && (
                  <div className="bg-black/50 border border-white/10 rounded-lg p-4 mt-4">
                    <p className="text-xs text-gray-500 mb-2 font-mono">PROMPT WORKFLOW</p>
                    <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono">{path.prompt}</pre>
                  </div>
                )}

                {path.note && (
                  <div className="bg-white/5 border border-white/10 rounded px-4 py-3 mt-4">
                    <p className="text-sm text-gray-300">
                      <strong className="text-white">Note:</strong> {path.note}
                    </p>
                  </div>
                )}
              </section>
            ))}
          </div>

          <section className="mt-12 bg-violet-600/10 border border-violet-500/30 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Getting Started This Week</h2>
            <div className="space-y-3 text-gray-300">
              <p><strong className="text-white">Day 1-2:</strong> Pick ONE path from above</p>
              <p><strong className="text-white">Day 3-4:</strong> Create 3 samples/examples</p>
              <p><strong className="text-white">Day 5-7:</strong> Find your first client or publish first piece</p>
            </div>
            <p className="text-violet-400 mt-4 font-medium">
              The fastest path to income is freelance writing or social media management. Passive income (YouTube, courses) takes longer but scales better.
            </p>
          </section>

          <div className="mt-12 flex gap-4">
            <Link 
              href="/guides/automate-busywork-ai-tools"
              className="text-violet-400 hover:text-violet-300"
            >
              Read next: Automate Your Busywork with AI →
            </Link>
          </div>
        
          <RelatedGuides guides={[
            {
              slug: 'ai-content-writing-business',
              title: 'Content Writing Business',
              description: 'Build a full writing business with AI.'
            },
            {
              slug: 'ai-side-hustles-2026',
              title: 'AI Side Hustles 2026',
              description: 'More ways to earn with AI.'
            },
            {
              slug: 'chatgpt-freelancing',
              title: 'ChatGPT Freelancing',
              description: 'Use ChatGPT to boost freelance work.'
            }
          ]} />
        </article>
      </main>

      <footer className="border-t border-white/10 mt-24">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <p className="text-sm text-gray-500">
            © 2026 GigWithAI. Real guides for real income.
          </p>
        </div>
      </footer>
    </div>
  )
}
