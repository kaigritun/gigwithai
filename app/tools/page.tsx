import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best AI Tools for Freelancers & Side Hustles 2026 | GigWithAI',
  description: 'Curated list of AI tools for freelancers and side hustlers - writing, design, productivity, and automation tools to boost your income.',
}

const tools = [
  // AI Writing
  {
    name: 'Claude',
    category: 'AI Writing',
    desc: 'Best for long-form content and nuanced writing. Excellent at matching your voice. Free tier available.',
    url: 'https://claude.ai/',
    highlight: true,
    free: true,
  },
  {
    name: 'Jasper',
    category: 'AI Writing',
    desc: 'AI copywriting tool built for marketers. Great templates for ads and sales copy.',
    url: 'https://www.jasper.ai/',
    highlight: true,
    free: false,
  },
  {
    name: 'Copy.ai',
    category: 'AI Writing',
    desc: 'Generate marketing copy, blog posts, and social content. Good free tier.',
    url: 'https://www.copy.ai/',
    highlight: false,
    free: true,
  },
  {
    name: 'Writesonic',
    category: 'AI Writing',
    desc: 'AI writer for blogs, ads, and product descriptions. Includes image generation.',
    url: 'https://writesonic.com/',
    highlight: false,
    free: true,
  },
  {
    name: 'ChatGPT',
    category: 'AI Writing',
    desc: 'The versatile all-rounder. Use for brainstorming, drafts, and client work.',
    url: 'https://chat.openai.com/',
    highlight: false,
    free: true,
  },
  // Design & Content
  {
    name: 'Canva',
    category: 'Design & Content',
    desc: 'AI-powered design tool for social media, presentations, and marketing materials. Essential for freelancers.',
    url: 'https://www.canva.com/',
    highlight: true,
    free: true,
  },
  {
    name: 'Midjourney',
    category: 'Design & Content',
    desc: 'Generate stunning AI art and illustrations. Perfect for selling prints or client work.',
    url: 'https://www.midjourney.com/',
    highlight: true,
    free: false,
  },
  {
    name: 'DALL-E 3',
    category: 'Design & Content',
    desc: 'OpenAI\'s image generator. Great for quick concept art and illustrations.',
    url: 'https://openai.com/dall-e-3',
    highlight: false,
    free: false,
  },
  {
    name: 'Adobe Firefly',
    category: 'Design & Content',
    desc: 'AI image generation integrated with Adobe Creative Cloud. Commercially safe.',
    url: 'https://www.adobe.com/products/firefly.html',
    highlight: false,
    free: true,
  },
  {
    name: 'Leonardo.ai',
    category: 'Design & Content',
    desc: 'AI art generation with fine-tuned models. Great for game assets and illustrations.',
    url: 'https://leonardo.ai/',
    highlight: false,
    free: true,
  },
  // Productivity
  {
    name: 'Notion AI',
    category: 'Productivity',
    desc: 'AI-powered workspace for notes, projects, and client management. Game-changer for organization.',
    url: 'https://www.notion.so/product/ai',
    highlight: true,
    free: true,
  },
  {
    name: 'Zapier',
    category: 'Productivity',
    desc: 'Automate workflows between apps. Connect your tools and save hours weekly.',
    url: 'https://zapier.com/',
    highlight: true,
    free: true,
  },
  {
    name: 'Make.com',
    category: 'Productivity',
    desc: 'Visual automation builder. More powerful than Zapier for complex workflows.',
    url: 'https://www.make.com/',
    highlight: false,
    free: true,
  },
  {
    name: 'Otter.ai',
    category: 'Productivity',
    desc: 'AI transcription for meetings and interviews. Great for content repurposing.',
    url: 'https://otter.ai/',
    highlight: false,
    free: true,
  },
  {
    name: 'Calendly',
    category: 'Productivity',
    desc: 'AI-enhanced scheduling. Essential for client bookings and consultations.',
    url: 'https://calendly.com/',
    highlight: false,
    free: true,
  },
  // Freelance Platforms
  {
    name: 'Fiverr',
    category: 'Freelance Platforms',
    desc: 'Sell AI-powered services as gigs. Low barrier to entry, instant client access.',
    url: 'https://www.fiverr.com/',
    highlight: true,
    free: true,
  },
  {
    name: 'Upwork',
    category: 'Freelance Platforms',
    desc: 'Find clients for AI writing, automation, and consulting projects. Higher rates than Fiverr.',
    url: 'https://www.upwork.com/',
    highlight: true,
    free: true,
  },
  {
    name: 'Toptal',
    category: 'Freelance Platforms',
    desc: 'Elite freelance network. Higher barrier but premium rates for AI/ML work.',
    url: 'https://www.toptal.com/',
    highlight: false,
    free: true,
  },
  {
    name: 'Contra',
    category: 'Freelance Platforms',
    desc: 'Commission-free freelancing. Great for building a portfolio of AI services.',
    url: 'https://contra.com/',
    highlight: false,
    free: true,
  },
  // Video/Audio
  {
    name: 'Descript',
    category: 'Video & Audio',
    desc: 'Edit video and podcasts by editing text. AI removes filler words and generates clips.',
    url: 'https://www.descript.com/',
    highlight: true,
    free: true,
  },
  {
    name: 'ElevenLabs',
    category: 'Video & Audio',
    desc: 'AI voice cloning and text-to-speech. Create voiceovers for YouTube or clients.',
    url: 'https://elevenlabs.io/',
    highlight: true,
    free: true,
  },
  {
    name: 'Runway',
    category: 'Video & Audio',
    desc: 'AI video generation and editing. Create stunning video content from text prompts.',
    url: 'https://runwayml.com/',
    highlight: false,
    free: true,
  },
  {
    name: 'Opus Clip',
    category: 'Video & Audio',
    desc: 'Turn long videos into viral shorts. Perfect for content repurposing.',
    url: 'https://www.opus.pro/',
    highlight: false,
    free: true,
  },
  {
    name: 'HeyGen',
    category: 'Video & Audio',
    desc: 'AI avatar videos for marketing and training. No camera needed.',
    url: 'https://www.heygen.com/',
    highlight: false,
    free: true,
  },
]

const categories = ['All', 'AI Writing', 'Design & Content', 'Productivity', 'Freelance Platforms', 'Video & Audio']

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <nav className="border-b border-white/10 px-6 py-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link href="/" className="font-semibold text-lg text-violet-400 hover:text-violet-300 transition-colors">
            GigWithAI
          </Link>
          <div className="flex gap-6 text-sm text-white/60">
            <Link href="/guides" className="hover:text-white transition-colors">Guides</Link>
            <Link href="/tools" className="text-white">Tools</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-16">
          <p className="text-violet-400 font-mono text-sm mb-4 uppercase tracking-wider">
            Tools
          </p>
          <h1 className="text-4xl font-bold mb-6">
            AI Tools for Side Hustles
          </h1>
          <p className="text-xl text-white/60 leading-relaxed">
            The best AI tools to build your freelance business or side hustle.
            All personally tested. Many have free tiers to get started.
          </p>
        </div>

        <div className="flex gap-2 flex-wrap mb-8">
          {categories.map((cat) => (
            <span 
              key={cat}
              className="text-xs font-mono px-3 py-1.5 rounded border border-white/20 text-white/60 hover:border-violet-400/50 hover:text-violet-400 cursor-pointer transition-colors"
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="grid gap-4">
          {tools.map((tool) => (
            <a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`border rounded-lg p-5 transition-colors ${
                tool.highlight 
                  ? 'border-violet-500/30 bg-violet-500/5 hover:border-violet-500/50' 
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="text-xs font-mono text-violet-400 uppercase">
                      {tool.category}
                    </span>
                    {tool.highlight && (
                      <span className="text-xs font-mono text-amber-400 uppercase">
                        ★ Recommended
                      </span>
                    )}
                    {tool.free && (
                      <span className="text-xs font-mono text-emerald-400 uppercase">
                        Free Tier
                      </span>
                    )}
                  </div>
                  <h3 className="font-medium text-lg mb-1">{tool.name}</h3>
                  <p className="text-white/50">{tool.desc}</p>
                </div>
                <span className="text-white/30 text-xl shrink-0">↗</span>
              </div>
            </a>
          ))}
        </div>

        <section className="mt-16 border-t border-white/10 pt-12">
          <h2 className="text-2xl font-bold mb-6">How to Get Started</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-violet-400">For Content Creators</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Start with <strong className="text-white">Claude</strong> for writing + <strong className="text-white">Canva</strong> for design.
                Add <strong className="text-white">Descript</strong> when you&apos;re ready for video/audio content.
              </p>
            </div>
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-violet-400">For Freelance Services</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Set up on <strong className="text-white">Fiverr</strong> or <strong className="text-white">Upwork</strong> first.
                Use <strong className="text-white">Jasper</strong> for client copy and <strong className="text-white">Zapier</strong> to automate delivery.
              </p>
            </div>
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-violet-400">For Automation Sellers</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Master <strong className="text-white">Zapier</strong> and <strong className="text-white">Make.com</strong> first.
                Sell automation services on Upwork for $50-500+ per workflow.
              </p>
            </div>
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-violet-400">For Digital Products</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Use <strong className="text-white">Midjourney</strong> for visual products.
                <strong className="text-white"> ElevenLabs</strong> for audio courses.
                <strong className="text-white"> Notion AI</strong> to organize and template everything.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 bg-violet-500/10 border border-violet-500/20 rounded-lg p-6">
          <h3 className="font-semibold mb-2">💡 Pro Tip</h3>
          <p className="text-white/70">
            Don&apos;t pay for premium tools until you have paying clients. Almost every tool here has a 
            free tier that&apos;s enough to land your first gig. Once you&apos;re making money, reinvest in 
            better tools. Check our{' '}
            <Link href="/guides" className="text-violet-400 hover:text-violet-300 underline">
              guides
            </Link>{' '}
            for step-by-step tutorials on using these tools to make money.
          </p>
        </section>
      </main>

      <footer className="border-t border-white/10 mt-24">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/40">
              © 2026 GigWithAI. Helping you build income with AI.
            </p>
            <div className="flex gap-6 text-sm text-white/40">
              <Link href="/guides" className="hover:text-white transition-colors">Guides</Link>
              <Link href="/tools" className="hover:text-white transition-colors">Tools</Link>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
