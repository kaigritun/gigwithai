import SideHustleScorer from '@/components/tools/SideHustleScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Service Description Score | GigWithAI',
  description: 'Score your freelance service description. Optimize for conversions and clarity.',
  keywords: ['service description', 'freelance services', 'gig description', 'fiverr gig'],
}

export default function ServiceDescriptionScorePage() {
  return (
    <div className="py-16 px-6">
      <SideHustleScorer
        title="Service Description Score"
        subtitle="Paste your service or gig description for feedback"
        placeholder={`Paste your service description...

Example:
AI-Powered Content Strategy & Writing

I help B2B SaaS companies create content that ranks and converts.

What you get:
✅ SEO keyword research and content strategy
✅ Long-form blog posts (2000-3000 words)
✅ AI-assisted research with human editing
✅ Meta descriptions and internal linking
✅ 1 round of revisions included

Perfect for:
- Startups without a content team
- Companies scaling their content marketing
- Brands wanting thought leadership content

My process:
1. Discovery call (15 min) to understand your goals
2. Keyword research and outline approval
3. First draft within 5 business days
4. Revisions and final delivery

Pricing starts at $300/article. Volume discounts available.

100+ articles published. 50+ happy clients.`}
        ctaHref="/guides/ai-side-hustles"
        variant="freelance"
      />
    </div>
  )
}
