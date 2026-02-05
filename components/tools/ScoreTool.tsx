'use client'

import { useState } from 'react'

interface Criterion {
  id: string
  name: string
  weight: number
  description: string
  checkFn: (text: string) => { score: number; feedback: string }
}

interface ScoreToolProps {
  title: string
  subtitle: string
  placeholder: string
  criteria: Criterion[]
  tipsByScore: { min: number; max: number; tips: string[] }[]
  ctaText?: string
  ctaHref?: string
}

export default function ScoreTool({
  title,
  subtitle,
  placeholder,
  criteria,
  tipsByScore,
  ctaText = 'Get more tips',
  ctaHref = '/guides'
}: ScoreToolProps) {
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
    
    // Simulate brief processing
    setTimeout(() => {
      const breakdown = criteria.map(c => {
        const result = c.checkFn(input)
        return {
          name: c.name,
          score: Math.round(result.score * c.weight),
          maxScore: c.weight,
          feedback: result.feedback
        }
      })
      
      const total = breakdown.reduce((sum, b) => sum + b.score, 0)
      const maxTotal = criteria.reduce((sum, c) => sum + c.weight, 0)
      const percentage = Math.round((total / maxTotal) * 100)
      
      const tips = tipsByScore.find(t => percentage >= t.min && percentage <= t.max)?.tips || []
      
      setResults({
        total: percentage,
        breakdown: breakdown.map(b => ({
          name: b.name,
          score: Math.round((b.score / b.maxScore) * 100),
          feedback: b.feedback
        })),
        tips
      })
      setLoading(false)
    }, 800)
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400'
    if (score >= 60) return 'text-yellow-400'
    if (score >= 40) return 'text-orange-400'
    return 'text-red-400'
  }

  const getScoreLabel = (score: number) => {
    if (score >= 80) return 'Excellent'
    if (score >= 60) return 'Good'
    if (score >= 40) return 'Needs Work'
    return 'Major Issues'
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-white/60">{subtitle}</p>
      </div>

      <div className="space-y-6">
        <div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={placeholder}
            className="w-full h-64 bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-500/50 resize-none"
          />
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-white/40">{input.length} characters</span>
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
          <div className="space-y-6 animate-in fade-in duration-500">
            {/* Overall Score */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
              <div className={`text-6xl font-bold ${getScoreColor(results.total)}`}>
                {results.total}
              </div>
              <div className="text-white/60 mt-1">out of 100</div>
              <div className={`text-lg font-medium mt-2 ${getScoreColor(results.total)}`}>
                {getScoreLabel(results.total)}
              </div>
            </div>

            {/* Breakdown */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="font-semibold mb-4">Score Breakdown</h3>
              <div className="space-y-4">
                {results.breakdown.map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <span className="text-white/80">{item.name}</span>
                      <span className={getScoreColor(item.score)}>{item.score}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${
                          item.score >= 80 ? 'bg-green-500' :
                          item.score >= 60 ? 'bg-yellow-500' :
                          item.score >= 40 ? 'bg-orange-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                    <p className="text-sm text-white/50 mt-1">{item.feedback}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tips */}
            {results.tips.length > 0 && (
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-emerald-400">Improvement Tips</h3>
                <ul className="space-y-2">
                  {results.tips.map((tip, i) => (
                    <li key={i} className="flex gap-2 text-white/70">
                      <span className="text-emerald-400">→</span>
                      {tip}
                    </li>
                  ))}
                </ul>
                {ctaHref && (
                  <a 
                    href={ctaHref}
                    className="inline-block mt-4 text-emerald-400 hover:text-emerald-300 text-sm"
                  >
                    {ctaText} →
                  </a>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
