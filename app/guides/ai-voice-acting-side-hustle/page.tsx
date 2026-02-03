import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Voice Acting: Start a Voice-Over Side Hustle in 2026 | GigWithAI',
  description: 'How to start a voice acting side hustle using AI tools. Audiobook narration, commercial voice-over, and realistic income expectations.',
}

export default function AIVoiceActingGuide() {
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
            Voice Acting
          </p>
          <h1 className="text-4xl font-bold mb-6">
            AI Voice Acting: Start a Voice-Over Side Hustle in 2026
          </h1>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            AI voice technology has exploded, but the opportunity isn&apos;t in replacing 
            voice actors—it&apos;s in augmenting your own voice to land more gigs.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">The Real Opportunity</h2>
            <p className="text-gray-300 mb-4">
              Audiobook narration and voice-over work traditionally required expensive 
              studio equipment and years of training. AI changes the economics:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li>• <strong>Voice cloning tools</strong> let you create variations of your voice for different characters</li>
              <li>• <strong>AI audio enhancement</strong> turns a closet recording into studio-quality output</li>
              <li>• <strong>Faster turnaround</strong> means you can take on more projects</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Getting Started (Under $200)</h2>
            
            <div className="border border-white/10 rounded-lg p-6 mb-6">
              <h3 className="font-bold mb-3">Basic Setup</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Decent USB microphone ($50-100) — Audio-Technica AT2020 is solid</li>
                <li>• Quiet recording space (closet works fine)</li>
                <li>• AI enhancement tools (many have free tiers)</li>
              </ul>
            </div>

            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="font-bold mb-3">Tools to Learn</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• <strong>ElevenLabs</strong> — Voice cloning and text-to-speech (great for previews)</li>
                <li>• <strong>Adobe Podcast</strong> — Free AI audio enhancement</li>
                <li>• <strong>Descript</strong> — Edit audio by editing text, AI voice correction</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Where to Find Work</h2>
            
            <div className="grid gap-6">
              <div className="border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Audiobook Narration</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• <strong>ACX</strong> (Amazon&apos;s audiobook platform) — royalty share or per-hour pay</li>
                  <li>• <strong>Findaway Voices</strong> — wider distribution</li>
                  <li>• <strong>Authors Direct</strong> — indie authors looking for narrators</li>
                </ul>
              </div>

              <div className="border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Commercial Voice-Over</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• <strong>Voices.com</strong> — competitive but steady work</li>
                  <li>• <strong>Voice123</strong> — lower fees</li>
                  <li>• <strong>Fiverr</strong> — good for building portfolio</li>
                </ul>
              </div>
            </div>

            <div className="bg-violet-600/10 border border-violet-500/30 rounded-lg p-4 mt-6">
              <p className="text-sm text-gray-300">
                <strong className="text-violet-400">The AI angle:</strong> Offer faster turnaround 
                than traditional VOs by using AI enhancement and voice tools. Don&apos;t advertise 
                it as &quot;AI voices&quot;—it&apos;s AI-<em>assisted</em> production.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Realistic Income</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-gray-300">Starting out (audiobooks)</span>
                <span className="text-violet-400 font-mono">$50-200/finished hour</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-gray-300">Established (audiobooks)</span>
                <span className="text-violet-400 font-mono">$200-400/finished hour</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-gray-300">Commercial VO</span>
                <span className="text-violet-400 font-mono">$100-500/project</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              One audiobook (8-10 hours finished) = $400-4,000 depending on rate and experience.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">The Workflow</h2>
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="text-violet-400 font-mono">01</span>
                <div>
                  <p className="font-medium">Audition</p>
                  <p className="text-gray-500 text-sm">Record 1-2 minute sample (AI enhancement helps here)</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-violet-400 font-mono">02</span>
                <div>
                  <p className="font-medium">Land gig</p>
                  <p className="text-gray-500 text-sm">Negotiate rate and timeline</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-violet-400 font-mono">03</span>
                <div>
                  <p className="font-medium">Record raw audio</p>
                  <p className="text-gray-500 text-sm">Focus on performance, not perfection</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-violet-400 font-mono">04</span>
                <div>
                  <p className="font-medium">AI enhancement</p>
                  <p className="text-gray-500 text-sm">Clean up noise, normalize levels, smooth transitions</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-violet-400 font-mono">05</span>
                <div>
                  <p className="font-medium">Edit and deliver</p>
                  <p className="text-gray-500 text-sm">Use Descript for fast editing</p>
                </div>
              </li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Pro Tips</h2>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <ul className="space-y-3 text-gray-300">
                <li>• <strong>Niche down</strong> — Specialize in a genre (romance, business, sci-fi)</li>
                <li>• <strong>Build a demo reel</strong> — 90 seconds showcasing range</li>
                <li>• <strong>Use AI for character voices</strong> — ElevenLabs can help with distinct characters</li>
                <li>• <strong>Invest in acoustic treatment</strong> — Moving blankets work surprisingly well</li>
              </ul>
            </div>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-lg p-6 mb-12">
            <h2 className="text-xl font-bold mb-4">The Bottom Line</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                AI voice tools lower the barrier to entry but don&apos;t eliminate the need 
                for human talent. Your interpretation, emotion, and acting choices still matter.
              </p>
              <p>
                <strong className="text-white">Your move:</strong> Use AI to handle the technical 
                stuff so you can focus on performance. Start with one audiobook. Learn the process. 
                Scale from there.
              </p>
            </div>
          </section>

          <div className="flex gap-4 flex-wrap">
            <Link 
              href="/guides/ai-side-hustles-2026"
              className="text-violet-400 hover:text-violet-300"
            >
              ← More AI Side Hustle Ideas
            </Link>
          </div>
        
          <RelatedGuides guides={[
                    {
                              slug: 'ai-youtube-channel',
                              title: 'AI YouTube Channel',
                              description: 'Voice content for YouTube.'
                    },
                    {
                              slug: 'ai-online-course-business',
                              title: 'Online Courses',
                              description: 'Voice narration for courses.'
                    },
                    {
                              slug: 'ai-content-creation-business',
                              title: 'Content Creation',
                              description: 'Audio content creation.'
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
