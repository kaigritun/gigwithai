import SideHustleScorer from '@/components/tools/SideHustleScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Study Score | GigWithAI',
  description: 'Score your portfolio case study. Showcase your work effectively.',
  keywords: ['case study', 'portfolio', 'freelance portfolio', 'client case study'],
}

export default function CaseStudyScorePage() {
  return (
    <div className="py-16 px-6">
      <SideHustleScorer
        title="Case Study Score"
        subtitle="Analyze your portfolio case study for impact"
        placeholder="Paste your case study content here..."
        ctaHref="/guides/freelance-portfolio-tips"
        variant="freelance"
      />
    </div>
  )
}
