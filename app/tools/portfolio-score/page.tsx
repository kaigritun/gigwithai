import SideHustleScorer from '@/components/tools/SideHustleScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio Score Calculator | GigWithAI',
  description: 'Score your freelance portfolio. Get feedback on presentation, case studies, social proof, and conversion optimization.',
  keywords: ['portfolio review', 'freelance portfolio', 'design portfolio', 'developer portfolio', 'portfolio feedback'],
}

export default function PortfolioScorePage() {
  return (
    <div className="py-16 px-6">
      <SideHustleScorer
        title="Portfolio Score"
        subtitle="Analyze your freelance portfolio for conversion potential"
        placeholder={`Describe your portfolio here...

Include:
• Your portfolio URL or site description
• Number and type of case studies
• What you showcase (process, results, testimonials)
• Any client logos or social proof
• Your call-to-action strategy

Example:
Portfolio: mydesignwork.com
- 8 case studies with before/after
- Each shows problem, process, outcome
- Client testimonials on 5 projects
- Featured clients: Nike, Stripe, Airbnb
- Clear "Hire Me" CTA with calendar link`}
        ctaHref="/guides/ai-freelance-portfolio"
        variant="freelance"
      />
    </div>
  )
}
