'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function LinkedInScorer() {
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
      const firstLine = input.split('\n')[0] || ''
      
      // Headline
      const hasSeperator = firstLine.includes('|') || firstLine.includes('•') || firstLine.includes('→')
      const headlineScore = hasSeperator ? 90 : firstLine.length > 50 ? 70 : 40
      
      // Keywords
      const keywords = ['manager', 'director', 'engineer', 'developer', 'analyst', 'specialist', 'lead', 'senior', 'strategy', 'growth', 'product', 'data', 'marketing', 'sales', 'operations', 'founder', 'ceo', 'cto', 'vp']
      const foundKeywords = keywords.filter(k => lower.includes(k)).length
      const keywordScore = foundKeywords >= 5 ? 100 : foundKeywords >= 3 ? 70 : 40
      
      // Results
      const numbers = input.match(/\d+%|\$[\d,]+|\d+x|\d+ (team|people|users|clients|projects)/gi) || []
      const resultsScore = numbers.length >= 4 ? 100 : numbers.length >= 2 ? 70 : 30
      
      // Personality
      const hasI = input.includes('I ')
      const hasPassion = /passion|love|excited|driven|dedicated|mission|believe/i.test(input)
      const personalityScore = hasI && hasPassion ? 100 : hasI ? 70 : 40
      
      // Length
      const words = input.split(/\s+/).length
      const lengthScore = words >= 150 && words <= 500 ? 100 : words >= 100 ? 70 : words < 50 ? 30 : 60
      
      const breakdown = [
        { name: 'Headline Impact', score: headlineScore, feedback: hasSeperator ? 'Good use of separators' : 'Add separators (|) for scannability' },
        { name: 'Searchable Keywords', score: keywordScore, feedback: foundKeywords >= 5 ? 'Strong keyword presence' : `Found ${foundKeywords} keywords. Add more role-specific terms.` },
        { name: 'Quantified Results', score: resultsScore, feedback: numbers.length >= 4 ? 'Excellent metrics' : 'Add more numbers to prove impact' },
        { name: 'Personal Brand', score: personalityScore, feedback: hasI && hasPassion ? 'Good personal voice' : 'Write in first person, show what drives you' },
        { name: 'About Length', score: lengthScore, feedback: words >= 150 ? 'Good length' : 'Expand your About section (aim for 200-400 words)' }
      ]
      
      const total = Math.round(breakdown.reduce((sum, b) => sum + b.score, 0) / breakdown.length)
      
      const tips = total >= 80 
        ? ['Strong profile! Keep it updated', 'Engage with content to boost visibility', 'Ask for recommendations']
        : total >= 60
        ? ['Add more quantified achievements', 'Make headline more specific', 'Include what drives and motivates you']
        : ['Rewrite headline with clear value proposition', 'Add metrics to your About section', 'Use first person and show personality', 'Include searchable keywords']
      
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
        <h1 className="text-3xl font-bold mb-2">LinkedIn Profile Score</h1>
        <p className="text-white/60">Paste your headline and About section for instant feedback</p>
      </div>

      <div className="space-y-6">
        <div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Paste your LinkedIn headline and About section here...

Example:
Senior Product Manager | B2B SaaS | Growth & Strategy

I help B2B companies build products users love.

Over the past 8 years, I've launched 12 products that generated $50M+ in revenue...`}
            className="w-full h-64 bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-500/50 resize-none"
          />
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-white/40">{input.split(/\s+/).filter(Boolean).length} words</span>
            <button onClick={analyze} disabled={!input.trim() || loading} className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 disabled:bg-white/10 disabled:text-white/30 rounded-lg font-medium transition-colors">
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
                  <li key={i} className="flex gap-2 text-white/70"><span className="text-emerald-400">→</span>{tip}</li>
                ))}
              </ul>
              <Link href="/guides/chatgpt-linkedin-profile" className="inline-block mt-4 text-emerald-400 hover:text-emerald-300 text-sm">LinkedIn optimization guide →</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
