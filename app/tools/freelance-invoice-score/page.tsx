import SideHustleScorer from '@/components/tools/SideHustleScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Freelance Invoice Score | GigWithAI',
  description: 'Score your invoice and payment communication. Get paid faster.',
  keywords: ['freelance invoice', 'invoice template', 'payment terms', 'get paid faster'],
}

export default function FreelanceInvoiceScorePage() {
  return (
    <div className="py-16 px-6">
      <SideHustleScorer
        title="Freelance Invoice Score"
        subtitle="Optimize your invoice and payment communications"
        placeholder="Paste your invoice template or payment follow-up message here..."
        ctaHref="/guides/freelance-getting-paid"
        variant="freelance"
      />
    </div>
  )
}
