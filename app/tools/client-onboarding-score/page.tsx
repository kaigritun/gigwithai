import SideHustleScorer from '@/components/tools/SideHustleScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Client Onboarding Score | GigWithAI',
  description: 'Score your client onboarding process. Set projects up for success.',
  keywords: ['client onboarding', 'freelance onboarding', 'new client', 'project kickoff'],
}

export default function ClientOnboardingScorePage() {
  return (
    <div className="py-16 px-6">
      <SideHustleScorer
        title="Client Onboarding Score"
        subtitle="Analyze your client onboarding process or welcome message"
        placeholder="Paste your onboarding email, welcome packet, or kickoff message here..."
        ctaHref="/guides/client-onboarding-automation"
        variant="freelance"
      />
    </div>
  )
}
