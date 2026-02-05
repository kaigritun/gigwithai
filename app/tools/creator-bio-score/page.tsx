import SideHustleScorer from '@/components/tools/SideHustleScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Content Creator Bio Score | GigWithAI',
  description: 'Score your creator bio. Optimize for sponsorships and brand deals.',
  keywords: ['creator bio', 'influencer bio', 'youtube bio', 'tiktok bio'],
}

export default function CreatorBioScorePage() {
  return (
    <div className="py-16 px-6">
      <SideHustleScorer
        title="Content Creator Bio Score"
        subtitle="Analyze your creator bio for brand deals"
        placeholder="Paste your YouTube, TikTok, or social media bio here..."
        ctaHref="/guides/youtube-automation-ai"
        variant="freelance"
      />
    </div>
  )
}
