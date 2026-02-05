import SideHustleScorer from '@/components/tools/SideHustleScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Consulting Offer Score | GigWithAI',
  description: 'Score your consulting offer. Optimize positioning and pricing.',
  keywords: ['consulting offer', 'consulting services', 'consulting pricing'],
}

export default function ConsultingOfferScorePage() {
  return (
    <div className="py-16 px-6">
      <SideHustleScorer
        title="Consulting Offer Score"
        subtitle="Analyze your consulting services and pricing"
        placeholder="Paste your consulting offer or services page here..."
        ctaHref="/guides/ai-consulting-business"
        variant="agency"
      />
    </div>
  )
}
