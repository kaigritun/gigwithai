import SideHustleScorer from '@/components/tools/SideHustleScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fiverr Gig Score | GigWithAI',
  description: 'Optimize your Fiverr gig description. Score and improve for better visibility.',
  keywords: ['fiverr gig', 'fiverr description', 'gig optimization', 'fiverr seo'],
}

export default function FiverrGigScorePage() {
  return (
    <div className="py-16 px-6">
      <SideHustleScorer
        title="Fiverr Gig Score"
        subtitle="Analyze your Fiverr gig description for optimization"
        placeholder="Paste your Fiverr gig description here..."
        ctaHref="/guides/fiverr-ai-gigs"
        variant="freelance"
      />
    </div>
  )
}
