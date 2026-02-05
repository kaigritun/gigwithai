import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import EmailSignup from '@/components/EmailSignup'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Thumbnail Designer: Make $500-2,000/Month Creating YouTube Thumbnails | GigWithAI',
  description: 'Learn how to make $500-2,000/month creating YouTube thumbnails with AI tools like Midjourney. Step-by-step guide to finding clients and scaling.',
}

export default function AIThumbnailDesignerGuide() {
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
            Design
          </p>
          <h1 className="text-4xl font-bold mb-6">
            AI Thumbnail Designer: Make $500-2,000/Month
          </h1>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            YouTube thumbnails drive clicks. Most creators hate making them. This is one of the most underrated AI side hustles in 2026.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Why This Works</h2>
            <p className="text-gray-300 mb-4">
              Every day, 500+ hours of video are uploaded to YouTube. Every video needs a thumbnail. Most creators:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• Don&apos;t have design skills</li>
              <li>• Don&apos;t have time to learn</li>
              <li>• Will pay $10-50 per thumbnail for quality work</li>
            </ul>
            <p className="text-gray-300 mt-4">
              With AI tools, you can create professional thumbnails in <strong>5-10 minutes</strong> instead of 30-60 minutes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">The Income Math</h2>
            <div className="bg-black/30 rounded-lg p-6 border border-white/10">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-400">Price per thumbnail</p>
                  <p className="text-xl font-bold text-white">$15-50</p>
                </div>
                <div>
                  <p className="text-gray-400">Time per thumbnail</p>
                  <p className="text-xl font-bold text-white">10-15 min</p>
                </div>
                <div>
                  <p className="text-gray-400">Thumbnails per hour</p>
                  <p className="text-xl font-bold text-white">4-6</p>
                </div>
                <div>
                  <p className="text-gray-400">Effective hourly rate</p>
                  <p className="text-xl font-bold text-violet-400">$60-300/hr</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-4 border-t border-white/10 pt-4">
                At 2-3 hours/day, that&apos;s $500-2,000/month.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Tools You Need</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-white/10 rounded-lg p-6">
                <h3 className="font-bold text-violet-400 mb-3">AI Image Generation</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• <strong>Midjourney</strong> ($10/mo) - Best quality</li>
                  <li>• <strong>DALL-E 3</strong> ($20/mo via Plus) - Quick concepts</li>
                  <li>• <strong>Leonardo.ai</strong> (free tier) - Consistent style</li>
                </ul>
              </div>
              <div className="border border-white/10 rounded-lg p-6">
                <h3 className="font-bold text-violet-400 mb-3">Editing</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• <strong>Canva Pro</strong> ($13/mo) - Text/layout</li>
                  <li>• <strong>Photopea</strong> (free) - Photoshop alt</li>
                  <li>• <strong>Remove.bg</strong> (free) - Background removal</li>
                </ul>
              </div>
            </div>
            <p className="text-violet-400 mt-4 font-bold">Total monthly cost: $23-43</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">The 10-Minute Thumbnail Process</h2>
            
            <div className="border border-white/10 rounded-lg p-6 mb-4">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-lg">Step 1: Get the Brief</h3>
                <span className="text-violet-400 font-mono text-sm">2 min</span>
              </div>
              <p className="text-gray-300 text-sm">Client sends: video topic, target emotion, any specific requests</p>
            </div>

            <div className="border border-white/10 rounded-lg p-6 mb-4">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-lg">Step 2: Generate Base Image</h3>
                <span className="text-violet-400 font-mono text-sm">3 min</span>
              </div>
              <p className="text-gray-300 text-sm mb-2">Prompt formula for Midjourney:</p>
              <div className="bg-black/50 rounded p-3 text-sm font-mono text-gray-300">
                [subject] + [emotion/action] + [style] + [colors] --ar 16:9
              </div>
              <p className="text-gray-400 text-sm mt-2">Example: &quot;shocked man looking at laptop screen, dramatic lighting, orange and blue tones --ar 16:9&quot;</p>
            </div>

            <div className="border border-white/10 rounded-lg p-6 mb-4">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-lg">Step 3: Add Text and Polish</h3>
                <span className="text-violet-400 font-mono text-sm">5 min</span>
              </div>
              <p className="text-gray-300 text-sm">In Canva: Add 3-5 word headline, contrasting colors, face/reaction if missing, subtle effects</p>
            </div>

            <div className="border border-white/10 rounded-lg p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-lg">Step 4: Deliver</h3>
                <span className="text-violet-400 font-mono text-sm">1 min</span>
              </div>
              <p className="text-gray-300 text-sm">Export as PNG, 1280x720 minimum.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Finding Clients</h2>
            <div className="border border-white/10 rounded-lg p-6 mb-4">
              <h3 className="font-bold text-violet-400 mb-3">Where They Are</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Twitter/X (search &quot;need thumbnail&quot; or &quot;thumbnail help&quot;)</li>
                <li>• YouTube creator Discord servers</li>
                <li>• Fiverr (competitive but volume)</li>
                <li>• Direct outreach to mid-size channels (10K-500K subs)</li>
              </ul>
            </div>
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="font-bold text-violet-400 mb-3">What to Say</h3>
              <p className="text-gray-300 text-sm mb-4">Don&apos;t pitch. Show value.</p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="border border-red-500/20 rounded p-3 bg-red-600/5">
                  <p className="text-red-400 font-bold mb-1">❌ Bad</p>
                  <p className="text-gray-400">&quot;Hi, I make thumbnails, hire me&quot;</p>
                </div>
                <div className="border border-emerald-500/20 rounded p-3 bg-emerald-600/5">
                  <p className="text-emerald-400 font-bold mb-1">✅ Good</p>
                  <p className="text-gray-400">&quot;Hey [name], loved your video on [topic]. I made a quick thumbnail concept for your next video - no strings attached.&quot;</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Niching for Higher Rates</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-white/10 rounded-lg p-6">
                <p className="text-gray-400 text-sm">Generic thumbnail designer</p>
                <p className="text-xl font-bold text-white">$10-15/thumbnail</p>
              </div>
              <div className="border border-violet-500/30 rounded-lg p-6 bg-violet-600/10">
                <p className="text-gray-400 text-sm">Niche specialist</p>
                <p className="text-xl font-bold text-violet-400">$25-50/thumbnail</p>
              </div>
            </div>
            <div className="mt-4 text-gray-300 text-sm">
              <p className="font-bold mb-2">Best niches:</p>
              <ul className="space-y-1">
                <li>• <strong>Finance/investing</strong> - Professional clients, higher budgets</li>
                <li>• <strong>Gaming</strong> - High volume, passionate community</li>
                <li>• <strong>Self-improvement</strong> - Consistent demand</li>
                <li>• <strong>Tech reviews</strong> - Product shots + reactions</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Getting Your First Client This Week</h2>
            <div className="bg-gradient-to-r from-violet-600/20 to-purple-600/20 border border-violet-500/30 rounded-lg p-6">
              <ol className="space-y-2 text-gray-300">
                <li>1. Pick a niche (gaming, finance, etc.)</li>
                <li>2. Find 10 channels with 50K-200K subs</li>
                <li>3. Create one unsolicited thumbnail for each</li>
                <li>4. DM them with the thumbnail attached</li>
                <li>5. Offer first paid thumbnail at 50% off</li>
              </ol>
              <p className="text-violet-400 mt-4 font-bold">Expect 1-2 clients from this. Then deliver great work and get referrals.</p>
            </div>
          </section>

          <EmailSignup />

          <div className="flex gap-4 flex-wrap mt-12">
            <Link 
              href="/guides/how-to-sell-ai-art"
              className="text-violet-400 hover:text-violet-300"
            >
              ← Sell AI Art
            </Link>
            <Link 
              href="/guides/ai-print-on-demand"
              className="text-violet-400 hover:text-violet-300 ml-auto"
            >
              AI Print on Demand →
            </Link>
          </div>
        
          <RelatedGuides guides={[
            {
              slug: 'how-to-sell-ai-art',
              title: 'How to Sell AI Art',
              description: 'Monetize AI-generated artwork.'
            },
            {
              slug: 'ai-print-on-demand',
              title: 'AI Print on Demand',
              description: 'Passive income with AI designs.'
            },
            {
              slug: 'ai-content-writing-business',
              title: 'AI Content Writing',
              description: 'Scale your writing business.'
            }
          ]} />
        </article>
    </div>
  )
}
