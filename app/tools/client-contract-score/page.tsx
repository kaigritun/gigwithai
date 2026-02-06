import SideHustleScorer from '@/components/tools/SideHustleScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Freelance Contract Score | GigWithAI',
  description: 'Score your freelance contract terms. Protect yourself and set clear expectations.',
  keywords: ['freelance contract', 'client contract', 'consulting agreement', 'scope of work'],
}

export default function ClientContractScorePage() {
  return (
    <div className="py-16 px-6">
      <SideHustleScorer
        title="Freelance Contract Score"
        subtitle="Paste your contract or scope of work for feedback"
        placeholder={`Paste your freelance contract or key terms...

Example:
Project: Website Redesign
Client: ABC Company
Timeline: 4 weeks
Rate: $5,000 fixed price

Scope:
- Redesign 5 core pages (Home, About, Services, Contact, Blog)
- Mobile responsive design
- 2 rounds of revisions included
- Source files delivered upon final payment

Payment Terms:
- 50% deposit before work begins
- 50% upon completion
- Net 15 payment terms

Out of Scope:
- Content writing
- Photography
- SEO optimization
- Ongoing maintenance`}
        ctaHref="/guides/ai-freelance-proposals"
        variant="freelance"
      />
    </div>
  )
}
