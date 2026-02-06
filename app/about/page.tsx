import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | GigWithAI',
  description: 'GigWithAI helps people build profitable side hustles using AI tools.',
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">About GigWithAI</h1>
      <div className="space-y-6 text-white/70">
        <p>GigWithAI helps people build profitable side hustles and freelance businesses using AI tools.</p>
        <p>We provide practical guides, tools, and strategies for freelancing, agency building, content creation, and online income streams — all optimized for the AI era.</p>
        <h2 className="text-2xl font-bold text-white mt-8">Our Mission</h2>
        <p>Make AI-powered income generation accessible to everyone, regardless of technical background.</p>
        <h2 className="text-2xl font-bold text-white mt-8">What We Offer</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Guides on starting AI-powered side hustles</li>
          <li>Tools to optimize your freelance profiles and pitches</li>
          <li>Strategies for building scalable agencies</li>
          <li>Income ideas with realistic earning potential</li>
        </ul>
      </div>
    </div>
  )
}
