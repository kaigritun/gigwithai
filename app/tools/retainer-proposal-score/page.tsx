import SideHustleScorer from '@/components/tools/SideHustleScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Retainer Proposal Score | GigWithAI',
  description: 'Score your retainer proposal. Convert one-off clients to recurring revenue.',
  keywords: ['retainer proposal', 'recurring revenue', 'freelance retainer', 'monthly retainer'],
}

export default function RetainerProposalScorePage() {
  return (
    <div className="py-16 px-6">
      <SideHustleScorer
        title="Retainer Proposal Score"
        subtitle="Optimize your retainer proposal for recurring revenue"
        placeholder="Paste your retainer proposal or pitch here..."
        ctaHref="/guides/freelance-retainer-clients"
        variant="freelance"
      />
    </div>
  )
}
