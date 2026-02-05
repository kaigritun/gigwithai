'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Props {
  title: string
  subtitle: string
  placeholder: string
  ctaHref?: string
  variant?: 'freelance' | 'agency' | 'content' | 'ecommerce' | 'saas'
}

export default function SideHustleScorer({ title, subtitle, placeholder, ctaHref = '/guides', variant = 'freelance' }: Props) {
  const [input, setInput] = useState('')
  const [results, setResults] = useState<{ total: number; breakdown: { name: string; score: number; feedback: string }[]; tips: string[] } | null>(null)
  const [loading, setLoading] = useState(false)

  const analyze = () => {
    if (!input.trim()) return
    setLoading(true)
    setTimeout(() => {
      const breakdown = getBreakdown(input, variant)
      const total = Math.round(breakdown.reduce((sum, b) => sum + b.score, 0) / breakdown.length)
      setResults({ total, breakdown, tips: getTips(total, variant) })
      setLoading(false)
    }, 800)
  }

  const getScoreColor = (s: number) => s >= 80 ? 'text-green-400' : s >= 60 ? 'text-yellow-400' : s >= 40 ? 'text-orange-400' : 'text-red-400'

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-white/60">{subtitle}</p>
      </div>
      <div className="space-y-6">
        <div>
          <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder={placeholder} className="w-full h-64 bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder:text-white/30 focus:outline-none focus:border-violet-500/50 resize-none" />
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-white/40">{input.length} chars</span>
            <button onClick={analyze} disabled={!input.trim() || loading} className="px-6 py-2 bg-violet-500 hover:bg-violet-600 disabled:bg-white/10 disabled:text-white/30 rounded-lg font-medium transition-colors">
              {loading ? 'Analyzing...' : 'Analyze'}
            </button>
          </div>
        </div>
        {results && (
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
              <div className={`text-6xl font-bold ${getScoreColor(results.total)}`}>{results.total}</div>
              <div className="text-white/60 mt-1">out of 100</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="font-semibold mb-4">Breakdown</h3>
              <div className="space-y-4">
                {results.breakdown.map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1"><span className="text-white/80">{item.name}</span><span className={getScoreColor(item.score)}>{item.score}%</span></div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden"><div className={`h-full rounded-full ${item.score >= 80 ? 'bg-green-500' : item.score >= 60 ? 'bg-yellow-500' : item.score >= 40 ? 'bg-orange-500' : 'bg-red-500'}`} style={{ width: `${item.score}%` }} /></div>
                    <p className="text-sm text-white/50 mt-1">{item.feedback}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-violet-500/10 border border-violet-500/30 rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-violet-400">Tips</h3>
              <ul className="space-y-2">{results.tips.map((t, i) => <li key={i} className="flex gap-2 text-white/70"><span className="text-violet-400">→</span>{t}</li>)}</ul>
              <Link href={ctaHref} className="inline-block mt-4 text-violet-400 hover:text-violet-300 text-sm">Learn more →</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function getBreakdown(text: string, variant: string) {
  const lower = text.toLowerCase()
  const words = text.split(/\s+/).length
  const numbers = text.match(/\d+%|\$[\d,]+|\d+x|\d+ (clients|projects|customers)/gi) || []

  if (variant === 'freelance') {
    const skills = ['design', 'development', 'writing', 'marketing', 'consulting', 'coaching', 'video', 'audio', 'photography', 'seo', 'ads', 'social media']
    const foundSkills = skills.filter(s => lower.includes(s)).length
    const hasPortfolio = lower.includes('portfolio') || lower.includes('samples') || lower.includes('examples')
    const hasPricing = /\$\d+|pricing|rate|package/i.test(text)
    const hasNiche = /speciali|focus|niche|expert in/i.test(text)
    
    return [
      { name: 'Clear Service', score: foundSkills >= 2 ? 100 : foundSkills >= 1 ? 70 : 30, feedback: foundSkills >= 2 ? 'Clear services defined' : 'Define your specific services' },
      { name: 'Niche Focus', score: hasNiche ? 100 : 50, feedback: hasNiche ? 'Good niche focus' : 'Specialize in a specific niche for higher rates' },
      { name: 'Social Proof', score: numbers.length >= 2 ? 100 : numbers.length >= 1 ? 60 : 30, feedback: numbers.length >= 2 ? 'Good proof' : 'Add client results and numbers' },
      { name: 'Portfolio', score: hasPortfolio ? 100 : 30, feedback: hasPortfolio ? 'Portfolio mentioned' : 'Include portfolio or work samples' },
      { name: 'Pricing', score: hasPricing ? 100 : 40, feedback: hasPricing ? 'Pricing clear' : 'Include pricing or packages' }
    ]
  }
  
  if (variant === 'agency') {
    const hasTeam = /team|hire|contractor|va|virtual assistant/i.test(text)
    const hasProcess = /process|workflow|system|sop|onboard/i.test(text)
    const hasNiche = /speciali|focus|niche|industry/i.test(text)
    
    return [
      { name: 'Service Clarity', score: words >= 100 ? 100 : 60, feedback: words >= 100 ? 'Detailed services' : 'Expand service descriptions' },
      { name: 'Team/Scale', score: hasTeam ? 100 : 40, feedback: hasTeam ? 'Shows scalability' : 'Mention team or capacity to scale' },
      { name: 'Process', score: hasProcess ? 100 : 40, feedback: hasProcess ? 'Clear process' : 'Document your delivery process' },
      { name: 'Niche', score: hasNiche ? 100 : 50, feedback: hasNiche ? 'Focused niche' : 'Pick a specific industry or service niche' },
      { name: 'Results', score: numbers.length >= 3 ? 100 : numbers.length >= 1 ? 60 : 30, feedback: numbers.length >= 3 ? 'Strong results' : 'Add more client results and case studies' }
    ]
  }

  // Default
  return [
    { name: 'Clarity', score: words >= 100 ? 100 : 60, feedback: 'Be clear about your offer' },
    { name: 'Value Prop', score: words >= 50 ? 80 : 40, feedback: 'Explain the value you provide' },
    { name: 'Social Proof', score: numbers.length >= 1 ? 80 : 30, feedback: 'Add results and testimonials' },
    { name: 'Call to Action', score: lower.includes('contact') || lower.includes('book') || lower.includes('start') ? 100 : 40, feedback: 'Include a clear call to action' },
    { name: 'Differentiation', score: 60, feedback: 'What makes you different?' }
  ]
}

function getTips(score: number, variant: string) {
  if (score >= 80) return ['Strong foundation! Focus on getting clients', 'Consider raising your rates', 'Build case studies from results']
  if (score >= 60) return ['Add more social proof and results', 'Clarify your niche', 'Create a simple process clients can follow']
  return ['Pick a specific niche to focus on', 'Define clear services with pricing', 'Gather testimonials and results', 'Create a simple portfolio', 'Add a clear call to action']
}
