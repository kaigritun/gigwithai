import SideHustleScorer from '@/components/tools/SideHustleScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cold Email Score | GigWithAI',
  description: 'Score your cold outreach email. Checks for personalization, value prop, and CTA.',
  keywords: ['cold email', 'outreach email', 'sales email', 'prospecting email'],
}

export default function ColdEmailScorePage() {
  return (
    <div className="py-16 px-6">
      <SideHustleScorer
        title="Cold Email Score"
        subtitle="Analyze your cold outreach email"
        placeholder="Paste your cold email here..."
        ctaHref="/guides/ai-cold-outreach"
        variant="freelance"
      />
    </div>
  )
}
