'use client'

import { useState } from 'react'
import type { ScoreTool, ScoreCriteria } from '@/lib/tools'

interface Props {
  tool: ScoreTool
}

interface CriteriaResult {
  name: string
  score: number
  maxScore: number
  feedback: string
  found: string[]
}

function calculateScore(text: string, criteria: ScoreCriteria[]): { total: number; max: number; results: CriteriaResult[] } {
  const lowerText = text.toLowerCase()
  const wordCount = text.split(/\s+/).filter(w => w.length > 0).length
  
  const results: CriteriaResult[] = criteria.map(c => {
    // Special case for length check
    if (c.name === 'Length & Format') {
      const ideal = wordCount >= 400 && wordCount <= 800
      const acceptable = wordCount >= 200 && wordCount <= 1000
      return {
        name: c.name,
        score: ideal ? c.weight : acceptable ? Math.floor(c.weight * 0.7) : Math.floor(c.weight * 0.3),
        maxScore: c.weight,
        feedback: ideal 
          ? `Good length (${wordCount} words)` 
          : wordCount < 400 
            ? `Too short (${wordCount} words). Aim for 400-800.`
            : `Too long (${wordCount} words). Keep it under 800.`,
        found: [],
      }
    }

    const found = c.keywords.filter(kw => lowerText.includes(kw.toLowerCase()))
    const matchRatio = found.length / Math.max(c.keywords.length, 1)
    const score = Math.round(c.weight * Math.min(matchRatio * 2, 1)) // 50% match = full score

    let feedback = ''
    if (matchRatio >= 0.3) {
      feedback = `Strong ${c.name.toLowerCase()} section`
    } else if (matchRatio > 0) {
      feedback = `Add more ${c.description.toLowerCase()}`
    } else {
      feedback = `Missing: ${c.description}`
    }

    return { name: c.name, score, maxScore: c.weight, feedback, found }
  })

  const total = results.reduce((sum, r) => sum + r.score, 0)
  const max = results.reduce((sum, r) => sum + r.maxScore, 0)

  return { total, max, results }
}

function getScoreColor(score: number): string {
  if (score >= 80) return 'text-green-400'
  if (score >= 60) return 'text-yellow-400'
  if (score >= 40) return 'text-orange-400'
  return 'text-red-400'
}

function getScoreLabel(score: number): string {
  if (score >= 80) return 'Excellent'
  if (score >= 60) return 'Good'
  if (score >= 40) return 'Needs Work'
  return 'Poor'
}

export default function ScoreCalculator({ tool }: Props) {
  const [input, setInput] = useState('')
  const [result, setResult] = useState<ReturnType<typeof calculateScore> | null>(null)

  const handleAnalyze = () => {
    if (input.trim().length < 50) return
    const analysis = calculateScore(input, tool.criteria)
    setResult(analysis)
  }

  const scorePercent = result ? Math.round((result.total / result.max) * 100) : 0

  return (
    <div className="space-y-8">
      {/* Input Section */}
      <div>
        <label className="block text-sm font-medium text-white/80 mb-2">
          {tool.inputLabel}
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={tool.inputPlaceholder}
          rows={10}
          className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder:text-white/30 focus:outline-none focus:border-orange-500/50 resize-none"
        />
        <div className="flex justify-between items-center mt-2">
          <span className="text-xs text-white/40">
            {input.split(/\s+/).filter(w => w.length > 0).length} words
          </span>
          <button
            onClick={handleAnalyze}
            disabled={input.trim().length < 50}
            className="bg-orange-500 hover:bg-orange-400 disabled:bg-white/10 disabled:text-white/30 text-black font-medium px-6 py-2 rounded-lg transition-colors"
          >
            Analyze
          </button>
        </div>
      </div>

      {/* Results Section */}
      {result && (
        <div className="space-y-6 animate-in fade-in duration-500">
          {/* Overall Score */}
          <div className="text-center p-8 bg-white/5 rounded-xl border border-white/10">
            <div className={`text-6xl font-bold ${getScoreColor(scorePercent)}`}>
              {scorePercent}
            </div>
            <div className="text-white/60 mt-2">out of 100</div>
            <div className={`text-lg font-medium mt-2 ${getScoreColor(scorePercent)}`}>
              {getScoreLabel(scorePercent)}
            </div>
          </div>

          {/* Criteria Breakdown */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Score Breakdown</h3>
            {result.results.map((r) => (
              <div key={r.name} className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{r.name}</span>
                  <span className={`font-mono ${r.score >= r.maxScore * 0.7 ? 'text-green-400' : r.score > 0 ? 'text-yellow-400' : 'text-red-400'}`}>
                    {r.score}/{r.maxScore}
                  </span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden mb-2">
                  <div 
                    className={`h-full transition-all ${r.score >= r.maxScore * 0.7 ? 'bg-green-500' : r.score > 0 ? 'bg-yellow-500' : 'bg-red-500'}`}
                    style={{ width: `${(r.score / r.maxScore) * 100}%` }}
                  />
                </div>
                <p className="text-sm text-white/60">{r.feedback}</p>
                {r.found.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {r.found.slice(0, 5).map(kw => (
                      <span key={kw} className="text-xs bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded">
                        {kw}
                      </span>
                    ))}
                    {r.found.length > 5 && (
                      <span className="text-xs text-white/40">+{r.found.length - 5} more</span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Tips */}
          {scorePercent < 80 && (
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-orange-400">💡 Quick Improvements</h3>
              <ul className="space-y-2">
                {tool.tips.slice(0, 3).map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                    <span className="text-orange-400 mt-0.5">→</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
