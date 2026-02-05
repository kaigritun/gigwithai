import SideHustleScorer from '@/components/tools/SideHustleScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gig Proposal Score | GigWithAI',
  description: 'Score your Upwork or freelance proposal. Optimize for higher win rates.',
  keywords: ['upwork proposal', 'freelance proposal', 'gig proposal', 'bid template'],
}

export default function GigProposalScorePage() {
  return (
    <div className="py-16 px-6">
      <SideHustleScorer
        title="Gig Proposal Score"
        subtitle="Analyze your Upwork or freelance proposal"
        placeholder="Paste your proposal here..."
        ctaHref="/guides/ai-freelance-proposals"
        variant="freelance"
      />
    </div>
  )
}
