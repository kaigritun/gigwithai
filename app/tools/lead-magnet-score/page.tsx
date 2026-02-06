import SideHustleScorer from '@/components/tools/SideHustleScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lead Magnet Score | GigWithAI',
  description: 'Score your lead magnet idea or landing page. Optimize for downloads, conversions, and email list growth.',
  keywords: ['lead magnet', 'email list', 'freebie', 'opt-in', 'content upgrade', 'list building'],
}

export default function LeadMagnetScorePage() {
  return (
    <div className="py-16 px-6">
      <SideHustleScorer
        title="Lead Magnet Score"
        subtitle="Get AI feedback on your lead magnet strategy"
        placeholder={`Describe your lead magnet:

TYPE: PDF checklist

TITLE: "The Ultimate Freelance Rate Calculator"

TARGET AUDIENCE: New freelancers unsure how to price services

WHAT IT INCLUDES:
- Hourly rate calculator based on expenses and goals
- Industry benchmark rates
- Value-based pricing framework
- Rate negotiation scripts

LANDING PAGE HEADLINE: "Stop Undercharging. Calculate Your True Rate in 5 Minutes."

CALL TO ACTION: "Get the free calculator"

DELIVERY: Email sequence (day 0: calculator, day 3: pricing tips, day 7: services pitch)`}
        ctaHref="/guides/ai-lead-magnets"
        variant="content"
      />
    </div>
  )
}
