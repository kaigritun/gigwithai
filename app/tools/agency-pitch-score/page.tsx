import SideHustleScorer from '@/components/tools/SideHustleScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agency Pitch Score | GigWithAI',
  description: 'Score your agency pitch. Checks for service clarity, process, and positioning.',
  keywords: ['agency pitch', 'agency proposal', 'client pitch', 'agency services'],
}

export default function AgencyPitchScorePage() {
  return (
    <div className="py-16 px-6">
      <SideHustleScorer
        title="Agency Pitch Score"
        subtitle="Analyze your agency services page or pitch deck"
        placeholder="Paste your agency pitch, services page, or proposal here..."
        ctaHref="/guides/start-ai-agency-2026"
        variant="agency"
      />
    </div>
  )
}
