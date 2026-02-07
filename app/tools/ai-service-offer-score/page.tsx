import SideHustleScorer from '@/components/tools/SideHustleScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Service Offer Score | GigWithAI',
  description: 'Score your AI service offering. Position your AI-powered services effectively.',
  keywords: ['ai service', 'ai consulting', 'ai automation', 'ai service business'],
}

export default function AIServiceOfferScorePage() {
  return (
    <div className="py-16 px-6">
      <SideHustleScorer
        title="AI Service Offer Score"
        subtitle="Optimize your AI-powered service offering"
        placeholder="Paste your AI service description or proposal here..."
        ctaHref="/guides/ai-services-to-sell"
        variant="freelance"
      />
    </div>
  )
}
