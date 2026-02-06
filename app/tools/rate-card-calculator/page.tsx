import SideHustleScorer from '@/components/tools/SideHustleScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Freelance Rate Card Calculator | GigWithAI',
  description: 'Build a professional rate card for your freelance services. Calculate hourly, project, and retainer rates based on market data.',
  keywords: ['freelance rate card', 'pricing calculator', 'hourly rate', 'freelance pricing', 'consulting rates'],
}

export default function RateCardCalculatorPage() {
  return (
    <div className="py-16 px-6">
      <SideHustleScorer
        title="Rate Card Calculator"
        subtitle="Build a rate card based on your skills and market position"
        placeholder={`Enter your freelance details:

Service type: UX/UI Design
Years of experience: 6
Location: Los Angeles (remote-friendly)

Current pricing:
- Hourly: $95/hour
- Day rate: $750
- Project minimum: $2,500

Target annual income: $180,000
Billable hours target: 1,200/year`}
        ctaHref="/guides/freelance-pricing"
        variant="freelance"
      />
    </div>
  )
}
