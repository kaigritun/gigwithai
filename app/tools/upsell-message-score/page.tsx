import SideHustleScorer from '@/components/tools/SideHustleScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Upsell Message Score | GigWithAI',
  description: 'Score your upsell and cross-sell messages. Increase revenue per client.',
  keywords: ['upsell', 'cross-sell', 'freelance upselling', 'client revenue'],
}

export default function UpsellMessageScorePage() {
  return (
    <div className="py-16 px-6">
      <SideHustleScorer
        title="Upsell Message Score"
        subtitle="Optimize your upsell and additional service pitches"
        placeholder="Paste your upsell message or additional service offer here..."
        ctaHref="/guides/freelance-upselling"
        variant="freelance"
      />
    </div>
  )
}
