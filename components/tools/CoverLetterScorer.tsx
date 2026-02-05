'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function CoverLetterScorer() {
  const [input, setInput] = useState('')
  const [results, setResults] = useState<{
    total: number
    breakdown: { name: string; score: number; feedback: string }[]
    tips: string[]
  } | null>(null)
  const [loading, setLoading] = useState(false)

  const analyze = () => {
    if (!input.trim()) return
    setLoading(true)
    
    setTimeout(() => {
      const lower = input.toLowerCase()
      const words = input.split(/\s+/).length
      const firstLine = input.split('\n')[0] || ''
      
      // Personalization
      const hasCompany = /\b(company|[A-Z][a-z]+ (Inc|Corp|LLC|Co))\b/.test(input)
      const hasRole = lower.includes('role') || lower.includes('position') || lower.includes('opportunity')
      const personScore = hasCompany && hasRole ? 100 : hasCompany || hasRole ? 60 : 20
      
      // Value proposition
      const valueWords = ['deliver', 'contribute', 'bring', 'offer', 'provide', 'help', 'achieve', 'drive', 'improve', 'create', 'build']
      const foundValue = valueWords.filter(w => lower.includes(w)).length
      const valueScore = foundValue >= 3 ? 100 : foundValue >= 1 ? 60 : 20
      
      // Tone
      const weakWords = ['i think', 'maybe', 'hopefully', 'i believe', 'i feel']
      const hasWeak = weakWords.some(w => lower.includes(w))
      let toneScore = hasWeak ? 50 : 90
      if (words < 100) toneScore = Math.min(toneScore, 60)
      if (words > 400) toneScore = Math.min(toneScore, 70)
      
      // Call to action
      const ctaWords = ['interview', 'discuss', 'meet', 'call', 'conversation', 'connect', 'opportunity', 'speak']
      const hasCta = ctaWords.some(w => lower.includes(w))
      const ctaScore = hasCta ? 100 : 30
      
      // Opening
      const boringOpening = firstLine.toLowerCase().includes('i am writing to apply') || firstLine.toLowerCase().includes('dear hiring manager')
      const openingScore = boringOpening ? 30 : firstLine.length > 50 ? 80 : 50
      
      const breakdown = [
        { name: 'Personalization', score: personScore, feedback: personScore >= 80 ? 'Good personalization' : 'Mention specific company and role details' },
        { name: 'Value Proposition', score: valueScore, feedback: valueScore >= 80 ? 'Strong value shown' : 'Explain what you specifically bring to this role' },
        { name: 'Professional Tone', score: toneScore, feedback: hasWeak ? 'Remove uncertain language (think, maybe, hopefully)' : words < 100 ? 'Too brief, expand on your qualifications' : 'Good tone' },
        { name: 'Call to Action', score: ctaScore, feedback: hasCta ? 'Good call to action' : 'Request an interview or discussion' },
        { name: 'Opening Hook', score: openingScore, feedback: boringOpening ? 'Avoid generic openings like "I am writing to apply"' : 'Opening is engaging' }
      ]
      
      const total = Math.round(breakdown.reduce((sum, b) => sum + b.score, 0) / breakdown.length)
      
      const tips = total >= 80 
        ? ['Strong cover letter! Customize for each application', 'Consider adding a PS with a relevant company fact']
        : total >= 60
        ? ['Be more specific about what you offer', 'Mention company-specific details you researched', 'Strengthen your closing with clear next steps']
        : ['Personalize to the specific company and role', 'Add a clear value proposition', 'Include a call to action', 'Avoid generic openings']
      
      setResults({ total, breakdown, tips })
      setLoading(false)
    }, 800)
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400'
    if (score >= 60) return 'text-yellow-400'
    if (score >= 40) return 'text-orange-400'
    return 'text-red-400'
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Cover Letter Score</h1>
        <p className="text-white/60">Get instant feedback on your cover letter</p>
      </div>

      <div className="space-y-6">
        <div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste your cover letter here..."
            className="w-full h-64 bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-500/50 resize-none"
          />
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-white/40">{input.split(/\s+/).filter(Boolean).length} words</span>
            <button
              onClick={analyze}
              disabled={!input.trim() || loading}
              className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 disabled:bg-white/10 disabled:text-white/30 rounded-lg font-medium transition-colors"
            >
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
                    <div className="flex justify-between mb-1">
                      <span className="text-white/80">{item.name}</span>
                      <span className={getScoreColor(item.score)}>{item.score}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${item.score >= 80 ? 'bg-green-500' : item.score >= 60 ? 'bg-yellow-500' : item.score >= 40 ? 'bg-orange-500' : 'bg-red-500'}`} style={{ width: `${item.score}%` }} />
                    </div>
                    <p className="text-sm text-white/50 mt-1">{item.feedback}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-emerald-400">Tips</h3>
              <ul className="space-y-2">
                {results.tips.map((tip, i) => (
                  <li key={i} className="flex gap-2 text-white/70">
                    <span className="text-emerald-400">→</span>{tip}
                  </li>
                ))}
              </ul>
              <Link href="/guides/chatgpt-cover-letter-prompts" className="inline-block mt-4 text-emerald-400 hover:text-emerald-300 text-sm">
                Cover letter guide →
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
