import SideHustleScorer from '@/components/tools/SideHustleScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Freelance Profile Score | GigWithAI',
  description: 'Score your freelance profile. Get feedback on niche, pricing, portfolio, and positioning.',
  keywords: ['freelance profile', 'upwork profile', 'fiverr profile', 'freelance bio'],
}

export default function FreelanceProfileScorePage() {
  return (
    <div className="py-16 px-6">
      <SideHustleScorer
        title="Freelance Profile Score"
        subtitle="Analyze your Upwork, Fiverr, or freelance bio"
        placeholder="Paste your freelance profile or bio here..."
        ctaHref="/guides/ai-freelance-profile"
        variant="freelance"
      />
    </div>
  )
}
