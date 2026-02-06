import ResumeScorer from '@/components/tools/ResumeScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Upwork Profile Score | GigWithAI',
  description: 'Optimize your Upwork profile for more client invitations. Get AI feedback on your headline, overview, and positioning.',
  keywords: ['upwork profile', 'freelance profile', 'upwork optimization', 'fiverr profile', 'freelancer bio'],
}

export default function UpworkProfileScorePage() {
  return (
    <div className="py-16 px-6">
      <ResumeScorer
        title="Upwork Profile Score"
        subtitle="Optimize your freelance profile for more client invitations"
        placeholder={`Paste your Upwork profile:

HEADLINE:
Full-Stack Developer | React & Node.js | 5+ Years Experience

OVERVIEW:
I help startups and businesses build web applications that users love.

With 5+ years of experience, I've delivered 50+ projects ranging from MVPs to enterprise solutions. My expertise includes:

✓ React/Next.js frontend development
✓ Node.js/Python backend APIs
✓ Database design (PostgreSQL, MongoDB)
✓ Cloud deployment (AWS, Vercel)

I communicate clearly, deliver on time, and treat your project like my own. Let's discuss your project!

HOURLY RATE: $75/hour
SKILLS: React, Node.js, TypeScript, PostgreSQL`}
        ctaText="Freelance profile guide"
        ctaHref="/guides/optimize-freelance-profile"
        variant="general"
      />
    </div>
  )
}
