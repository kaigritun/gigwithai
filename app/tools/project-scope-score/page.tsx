import SideHustleScorer from '@/components/tools/SideHustleScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Project Scope Score | GigWithAI',
  description: 'Evaluate your project scope for clarity and completeness. Prevent scope creep and set clear boundaries.',
  keywords: ['project scope', 'scope of work', 'scope creep', 'project boundaries', 'deliverables', 'freelance scope'],
}

export default function ProjectScopeScorePage() {
  return (
    <div className="py-16 px-6">
      <SideHustleScorer
        title="Project Scope Score"
        subtitle="Prevent scope creep with crystal clear boundaries"
        placeholder={`Paste your project scope:

PROJECT: Brand Identity Design

DELIVERABLES:
- Primary logo (3 concepts, 2 revision rounds)
- Secondary logo mark
- Color palette (primary + secondary colors)
- Typography selection (2 fonts)
- Brand guidelines PDF (10-15 pages)
- Final files: AI, EPS, PNG, SVG

INCLUDED:
- Discovery call (1 hour)
- Mood board presentation
- 2 revision rounds per deliverable
- Final presentation walkthrough

NOT INCLUDED:
- Business cards or stationery
- Website design
- Social media templates
- Photography or illustrations
- Ongoing brand management

TIMELINE: 3 weeks from discovery call to final delivery`}
        ctaHref="/guides/ai-freelance-proposals"
        variant="freelance"
      />
    </div>
  )
}
