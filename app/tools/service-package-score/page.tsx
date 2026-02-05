import SideHustleScorer from '@/components/tools/SideHustleScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Service Package Score | GigWithAI',
  description: 'Score your service packages. Optimize pricing, deliverables, and positioning.',
  keywords: ['service packages', 'pricing packages', 'productized services', 'service tiers'],
}

export default function ServicePackageScorePage() {
  return (
    <div className="py-16 px-6">
      <SideHustleScorer
        title="Service Package Score"
        subtitle="Analyze your service packages and pricing"
        placeholder="Paste your service packages or pricing page here..."
        ctaHref="/guides/productized-services-ai"
        variant="agency"
      />
    </div>
  )
}
