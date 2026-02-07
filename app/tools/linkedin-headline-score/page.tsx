import SideHustleScorer from '@/components/tools/SideHustleScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LinkedIn Headline Score | GigWithAI',
  description: 'Score your freelance LinkedIn headline. Attract more clients and opportunities.',
  keywords: ['linkedin headline', 'freelance linkedin', 'linkedin optimization', 'personal branding'],
}

export default function LinkedInHeadlineScorePage() {
  return (
    <div className="py-16 px-6">
      <SideHustleScorer
        title="LinkedIn Headline Score"
        subtitle="Optimize your freelance LinkedIn headline"
        placeholder="Paste your LinkedIn headline and about section here..."
        ctaHref="/guides/freelance-linkedin-profile"
        variant="freelance"
      />
    </div>
  )
}
