import SideHustleScorer from '@/components/tools/SideHustleScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing Page Score Calculator | GigWithAI',
  description: 'Score your service pricing page. Get feedback on packages, positioning, value communication, and conversion optimization.',
  keywords: ['pricing page', 'freelance pricing', 'service packages', 'pricing strategy', 'freelance rates'],
}

export default function PricingPageScorePage() {
  return (
    <div className="py-16 px-6">
      <SideHustleScorer
        title="Pricing Page Score"
        subtitle="Analyze your service pricing page for maximum conversions"
        placeholder={`Describe your pricing page here...

Include:
• Your pricing tiers/packages
• What's included in each tier
• Any guarantees or bonuses
• Social proof near pricing
• FAQ or objection handling

Example:
STARTER - $500
- Logo design (3 concepts)
- 2 revision rounds
- Final files (PNG, SVG)

PRO - $1,500 (Most Popular)
- Full brand identity
- Logo + colors + fonts
- Business card design
- Brand guidelines PDF
- Unlimited revisions

PREMIUM - $3,500
- Everything in Pro
- Website design (5 pages)
- Social media templates
- Priority support

All packages include: 30-day money-back guarantee
Testimonial: "Best investment for my business" - Client`}
        ctaHref="/guides/ai-pricing-strategy"
        variant="freelance"
      />
    </div>
  )
}
