import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import EmailSignup from '@/components/EmailSignup'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Sell AI Art Online: Complete Guide for 2026 | GigWithAI',
  description: 'Learn where and how to sell AI-generated art. Covers print-on-demand, stock sites, Etsy, pricing strategies, legal considerations, and income expectations.',
}

const platforms = [
  {
    category: 'Print-on-Demand (Easiest Start)',
    items: [
      { name: 'Redbubble', description: 'Upload designs, they print and ship. You earn 20% base (adjustable). No upfront costs.', best: 'Quirky, niche designs' },
      { name: 'Society6', description: 'Higher-end aesthetic. Premium products (furniture, curtains). Better margins on art prints.', best: 'Artistic, cohesive collections' },
      { name: 'Printful + Etsy', description: 'More control over branding. Higher margins (you set prices). Requires Etsy shop management.', best: 'Building a brand' },
    ],
  },
  {
    category: 'Stock Art Sites',
    items: [
      { name: 'Adobe Stock', description: '33% commission on standard licenses. Huge marketplace, high competition. Accepts AI art (must disclose).', best: 'Commercial, versatile images' },
      { name: 'Shutterstock', description: '15-40% commission based on lifetime earnings. Contributor program with levels.', best: 'Volume uploaders' },
      { name: 'Wirestock', description: 'Distributes to multiple stock sites at once. Takes 15% cut. One upload, multiple marketplaces.', best: 'Efficiency' },
    ],
  },
  {
    category: 'Direct Sales',
    items: [
      { name: 'Etsy', description: 'Digital downloads (instant delivery). Print-on-demand integration. Built-in audience.', best: 'Specific styles/niches' },
      { name: 'Gumroad', description: 'Sell prompt packs and art bundles. Keep 90%+ of revenue. Build email list from buyers.', best: 'Digital products' },
      { name: 'Your Own Site', description: 'Shopify, Squarespace, or WordPress + WooCommerce. Full control, full margins.', best: 'Established artists with audience' },
    ],
  },
]

const hotNiches = [
  'Fantasy and sci-fi — Dragons, space, magic',
  'Cute animals — Especially anthropomorphized',
  'Retro/vintage styles — 80s neon, Art Deco',
  'Abstract patterns — For phone cases, home decor',
  'Motivational/quotes — With unique visual styles',
  'Pet portraits — Custom commissions',
  'Seasonal — Holiday themes, events',
]

export default function HowToSellAIArt() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/guides" className="text-violet-400 hover:text-violet-300 text-sm mb-4 inline-block">
          ← Back to Guides
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-purple-400 text-transparent bg-clip-text">
          How to Sell AI Art Online: Complete Guide for 2026
        </h1>
        
        <p className="text-xl text-gray-300 mb-8">
          AI art generators like Midjourney, DALL-E, and Stable Diffusion have created a new market. Here's how to turn AI-generated artwork into real income.
        </p>

        <div className="prose prose-invert max-w-none">
          <h2>Where to Sell AI Art</h2>
        </div>

        <div className="space-y-8 mt-6">
          {platforms.map((platform, idx) => (
            <section key={idx}>
              <h3 className="text-xl font-bold mb-4 text-violet-400">{platform.category}</h3>
              <div className="grid gap-4">
                {platform.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="bg-white/5 border border-white/10 rounded-lg p-5">
                    <h4 className="font-semibold text-white mb-2">{item.name}</h4>
                    <p className="text-gray-300 text-sm mb-2">{item.description}</p>
                    <p className="text-violet-400 text-sm"><strong>Best for:</strong> {item.best}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="prose prose-invert max-w-none mt-12">
          <h2>What Sells</h2>
          
          <h3>Hot Niches</h3>
          <ul>
            {hotNiches.map((niche, idx) => (
              <li key={idx}>{niche}</li>
            ))}
          </ul>

          <h3>What Doesn't Sell</h3>
          <ul>
            <li>Generic landscapes (oversaturated)</li>
            <li>Celebrity likenesses (legal issues)</li>
            <li>Exact copies of famous art (copyright)</li>
            <li>Low-effort generations (obvious AI artifacts)</li>
          </ul>

          <h2>Creating Sellable AI Art</h2>

          <h3>Quality Checklist</h3>
          <ul>
            <li>✓ No obvious AI artifacts (weird hands, text gibberish)</li>
            <li>✓ High resolution (upscale if needed)</li>
            <li>✓ Cohesive style (not random generations)</li>
            <li>✓ Commercial use rights clear</li>
            <li>✓ Fills a specific need or aesthetic</li>
          </ul>

          <h3>Tools and Workflow</h3>
          
          <div className="bg-white/5 border border-white/10 rounded-lg p-6 my-6">
            <h4 className="text-violet-400 font-semibold mb-3">Generation</h4>
            <ul className="text-gray-300 space-y-1 mb-4">
              <li>Midjourney (best overall quality)</li>
              <li>DALL-E 3 (good for text integration)</li>
              <li>Stable Diffusion (free, customizable)</li>
              <li>Leonardo.ai (good free tier)</li>
            </ul>
            
            <h4 className="text-violet-400 font-semibold mb-3">Upscaling</h4>
            <ul className="text-gray-300 space-y-1 mb-4">
              <li>Topaz Gigapixel AI</li>
              <li>Real-ESRGAN (free)</li>
              <li>Midjourney --upscale flag</li>
            </ul>
            
            <h4 className="text-violet-400 font-semibold mb-3">Editing</h4>
            <ul className="text-gray-300 space-y-1">
              <li>Photoshop for cleanup</li>
              <li>Canva for adding text</li>
              <li>Remove.bg for background removal</li>
            </ul>
          </div>

          <h2>Pricing Strategy</h2>
          
          <h3>Print-on-Demand</h3>
          <p>Let the platform set base prices, add 20-40% margin:</p>
          <ul>
            <li>T-shirts: $22-28 retail</li>
            <li>Posters: $15-40 depending on size</li>
            <li>Phone cases: $25-35</li>
          </ul>

          <h3>Digital Downloads</h3>
          <ul>
            <li>Single image: $1-5</li>
            <li>Pack of 10: $9-19</li>
            <li>Full collection (50+): $29-49</li>
          </ul>

          <h3>Custom Commissions</h3>
          <ul>
            <li>Simple request: $20-50</li>
            <li>Complex/commercial: $100-500</li>
            <li>Unlimited revisions package: $200+</li>
          </ul>

          <h2>Legal Considerations</h2>

          <h3>Copyright</h3>
          <p>AI-generated images have unclear copyright status. US Copyright Office requires "human authorship" for protection. Your prompts may not be enough—but you can still sell, just can't stop copies.</p>

          <h3>Disclosure</h3>
          <p>Some platforms require AI disclosure. Be honest if asked. "AI-assisted" is fair if you edit/curate.</p>

          <h3>Model Terms</h3>
          <ul>
            <li><strong>Midjourney:</strong> Commercial use allowed on paid plans</li>
            <li><strong>DALL-E:</strong> You own generations, can commercialize</li>
            <li><strong>Stable Diffusion:</strong> Depends on model license</li>
          </ul>

          <h2>Scaling Your AI Art Business</h2>

          <h3>Volume Strategy</h3>
          <ol>
            <li>Generate 100 images per week</li>
            <li>Curate down to best 20</li>
            <li>Upload to 3-5 platforms</li>
            <li>Track what sells</li>
            <li>Create more of what works</li>
          </ol>

          <h3>Niche Down</h3>
          <p>Instead of "AI art," be known for:</p>
          <ul>
            <li>Retro sci-fi travel posters</li>
            <li>Watercolor pet portraits</li>
            <li>Minimalist motivational prints</li>
          </ul>

          <h2>Monthly Income Expectations</h2>
          <div className="bg-violet-900/20 border border-violet-800 rounded-lg p-6 my-6">
            <ul className="space-y-2">
              <li><strong>Month 1-3:</strong> $0-50 (building catalog)</li>
              <li><strong>Month 4-6:</strong> $50-200 (finding what sells)</li>
              <li><strong>Month 7-12:</strong> $200-1000 (scaling winners)</li>
              <li><strong>Year 2+:</strong> $1000-5000+ (established catalog + audience)</li>
            </ul>
            <p className="text-gray-400 text-sm mt-4">Assumes consistent effort: 5-10 hours/week on generation, curation, and marketing.</p>
          </div>

          <h2>Action Plan</h2>
          <ul>
            <li><strong>Week 1:</strong> Choose your primary AI tool, generate 50 images in a specific style, open accounts on Redbubble + Etsy</li>
            <li><strong>Week 2:</strong> Upload best 20 designs, write compelling titles and tags, set up one print-on-demand integration</li>
            <li><strong>Week 3:</strong> Generate 50 more images, start social media presence, upload to a second platform</li>
            <li><strong>Week 4:</strong> Review analytics, double down on popular styles, create your first collection/bundle</li>
          </ul>

          <p className="text-lg mt-8">The AI art market is real. Competition is growing, but so is demand. Start now.</p>
        </div>

        <EmailSignup headline="Get weekly AI art selling tips" buttonText="Subscribe" />

        <RelatedGuides guides={[
          { slug: 'ai-print-on-demand', title: 'AI Print on Demand', description: 'Complete guide to POD with AI-generated designs.' },
          { slug: 'ai-passive-income-2026', title: 'AI Passive Income 2026', description: 'More ways to earn passive income with AI.' },
          { slug: 'ai-stock-photo-side-hustle', title: 'AI Stock Photo Side Hustle', description: 'Sell AI images on stock sites.' },
        ]} />
      </div>
    </main>
  )
}
