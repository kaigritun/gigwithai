import SideHustleScorer from '@/components/tools/SideHustleScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Course Description Score | GigWithAI',
  description: 'Score your online course description. Optimize for conversions.',
  keywords: ['course description', 'udemy course', 'online course', 'course sales page'],
}

export default function CourseDescriptionScorePage() {
  return (
    <div className="py-16 px-6">
      <SideHustleScorer
        title="Course Description Score"
        subtitle="Analyze your online course description"
        placeholder="Paste your course description or sales page here..."
        ctaHref="/guides/create-online-course-ai"
        variant="freelance"
      />
    </div>
  )
}
