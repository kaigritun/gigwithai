import ResumeScorer from '@/components/tools/ResumeScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Client Retention Score | GigWithAI',
  description: 'Evaluate your client relationship strategy. Get feedback on communication, deliverables, and strategies to increase repeat business.',
  keywords: ['client retention', 'repeat clients', 'freelance clients', 'client relationships', 'customer retention'],
}

export default function ClientRetentionScorePage() {
  return (
    <div className="py-16 px-6">
      <ResumeScorer
        title="Client Retention Score"
        subtitle="Evaluate your approach to keeping clients coming back"
        placeholder={`Describe your client relationship strategy:

COMMUNICATION:
- Weekly status updates via email
- Slack channel for quick questions
- Monthly video calls for active projects

DELIVERABLES:
- Always deliver 1-2 days before deadline
- Include documentation with every feature
- Provide recorded walkthrough videos

FOLLOW-UP:
- Check in 30 days after project completion
- Send relevant industry articles occasionally
- Offer loyalty discount for repeat work

PROBLEM SOLVING:
- Acknowledge issues within 2 hours
- Provide solutions, not just problems
- Over-communicate during fixes`}
        ctaText="Client retention guide"
        ctaHref="/guides/freelance-client-retention"
        variant="general"
      />
    </div>
  )
}
