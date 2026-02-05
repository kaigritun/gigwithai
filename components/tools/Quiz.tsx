'use client'

import { useState } from 'react'
import type { QuizTool } from '@/lib/tools'

interface Props {
  tool: QuizTool
}

export default function Quiz({ tool }: Props) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [scores, setScores] = useState<Record<string, number>>({})
  const [result, setResult] = useState<typeof tool.results[0] | null>(null)

  const handleAnswer = (points: Record<string, number>) => {
    const newScores = { ...scores }
    Object.entries(points).forEach(([key, value]) => {
      newScores[key] = (newScores[key] || 0) + value
    })
    setScores(newScores)

    if (currentQuestion < tool.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Calculate result
      const maxKey = Object.entries(newScores).reduce((a, b) => a[1] > b[1] ? a : b)[0]
      const matchedResult = tool.results.find(r => r.id === maxKey) || tool.results[0]
      setResult(matchedResult)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setScores({})
    setResult(null)
  }

  const progress = ((currentQuestion + 1) / tool.questions.length) * 100

  if (result) {
    return (
      <div className="space-y-8 animate-in fade-in duration-500">
        {/* Result Header */}
        <div className="text-center p-8 bg-gradient-to-br from-orange-500/20 to-orange-500/5 rounded-xl border border-orange-500/30">
          <div className="text-sm text-orange-400 font-mono uppercase tracking-wider mb-2">
            Your Result
          </div>
          <h2 className="text-3xl font-bold mb-4">{result.title}</h2>
          <p className="text-white/70 max-w-xl mx-auto">{result.description}</p>
        </div>

        {/* Recommendations */}
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <h3 className="font-semibold mb-4 text-orange-400">🎯 Recommended Next Steps</h3>
          <ul className="space-y-3">
            {result.recommendations.map((rec, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="bg-orange-500/20 text-orange-400 w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium shrink-0">
                  {i + 1}
                </span>
                <span className="text-white/80">{rec}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Score Breakdown */}
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <h3 className="font-semibold mb-4">Score Breakdown</h3>
          <div className="space-y-3">
            {tool.results.map(r => {
              const score = scores[r.id] || 0
              const maxPossible = tool.questions.length * 3 // Max 3 points per question
              const percent = Math.round((score / maxPossible) * 100)
              return (
                <div key={r.id}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className={r.id === result.id ? 'text-orange-400 font-medium' : 'text-white/60'}>
                      {r.title}
                    </span>
                    <span className="text-white/40">{percent}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all ${r.id === result.id ? 'bg-orange-500' : 'bg-white/20'}`}
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Retake */}
        <div className="text-center">
          <button
            onClick={resetQuiz}
            className="text-white/60 hover:text-white text-sm underline"
          >
            Take quiz again
          </button>
        </div>
      </div>
    )
  }

  const question = tool.questions[currentQuestion]

  return (
    <div className="space-y-8">
      {/* Progress */}
      <div>
        <div className="flex justify-between text-sm text-white/60 mb-2">
          <span>Question {currentQuestion + 1} of {tool.questions.length}</span>
          <span>{Math.round(progress)}% complete</span>
        </div>
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-orange-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="py-8">
        <h2 className="text-2xl font-semibold mb-8">{question.question}</h2>
        <div className="space-y-3">
          {question.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(option.points)}
              className="w-full text-left p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-orange-500/50 rounded-lg transition-all group"
            >
              <span className="text-white/80 group-hover:text-white">{option.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
