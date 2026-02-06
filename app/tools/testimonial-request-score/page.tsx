import SideHustleScorer from '@/components/tools/SideHustleScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Testimonial Request Score | GigWithAI',
  description: 'Optimize your testimonial request messages. Get more client reviews with better ask timing, phrasing, and follow-up strategies.',
  keywords: ['testimonial request', 'client review', 'freelance testimonials', 'social proof', 'client feedback'],
}

export default function TestimonialRequestScorePage() {
  return (
    <div className="py-16 px-6">
      <SideHustleScorer
        title="Testimonial Request Score"
        subtitle="Craft requests that get clients excited to recommend you"
        placeholder={`Paste your testimonial request:

Hi Marcus,

Now that we've wrapped up the brand refresh project, I wanted to reach out. Working with your team has been a highlight.

I'm building out my portfolio and would love to feature our collaboration. Would you be open to sharing a brief testimonial?

Thanks for being such a great client,
Jamie`}
        ctaHref="/guides/client-retention"
        variant="freelance"
      />
    </div>
  )
}
