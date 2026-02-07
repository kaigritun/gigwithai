import SideHustleScorer from '@/components/tools/SideHustleScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Referral Request Score | GigWithAI',
  description: 'Score your referral request message. Grow your business through word of mouth.',
  keywords: ['referral request', 'client referrals', 'word of mouth', 'referral marketing'],
}

export default function ReferralRequestScorePage() {
  return (
    <div className="py-16 px-6">
      <SideHustleScorer
        title="Referral Request Score"
        subtitle="Optimize your referral ask messages"
        placeholder="Paste your referral request email or message here..."
        ctaHref="/guides/freelance-referrals"
        variant="freelance"
      />
    </div>
  )
}
