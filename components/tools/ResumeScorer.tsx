'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Props {
  title: string
  subtitle: string
  placeholder: string
  ctaText?: string
  ctaHref?: string
  variant?: 'general' | 'tech' | 'marketing' | 'sales' | 'executive'
}

export default function ResumeScorer({
  title,
  subtitle,
  placeholder,
  ctaText = 'Get more tips',
  ctaHref = '/guides',
  variant = 'general'
}: Props) {
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
      const breakdown = getBreakdown(input, variant)
      const total = Math.round(breakdown.reduce((sum, b) => sum + b.score, 0) / breakdown.length)
      const tips = getTips(total, variant)
      
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
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
              <div className={`text-6xl font-bold ${getScoreColor(results.total)}`}>
                {results.total}
              </div>
              <div className="text-white/60 mt-1">out of 100</div>
              <div className={`text-lg font-medium mt-2 ${getScoreColor(results.total)}`}>
                {getScoreLabel(results.total)}
              </div>
            </div>

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
                <Link 
                  href={ctaHref}
                  className="inline-block mt-4 text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  {ctaText} →
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function getBreakdown(text: string, variant: string) {
  const lower = text.toLowerCase()
  const words = text.split(/\s+/).length
  
  // Common checks
  const actionVerbs = ['led', 'managed', 'developed', 'created', 'built', 'launched', 'increased', 'reduced', 'improved', 'achieved', 'delivered', 'designed', 'implemented', 'negotiated', 'spearheaded', 'orchestrated', 'transformed', 'streamlined', 'optimized', 'drove']
  const foundActions = actionVerbs.filter(v => lower.includes(v)).length
  
  const numbers = text.match(/\d+%|\$[\d,]+|\d+x|\d+ (team|people|users|customers|clients|projects|deals)/gi) || []
  
  const hasExperience = lower.includes('experience') || lower.includes('work history')
  const hasSkills = lower.includes('skills')
  const hasEducation = lower.includes('education')
  
  if (variant === 'tech') {
    const techWords = ['python', 'javascript', 'typescript', 'react', 'node', 'java', 'go', 'rust', 'aws', 'gcp', 'azure', 'docker', 'kubernetes', 'sql', 'postgresql', 'mongodb', 'redis', 'graphql', 'rest', 'api', 'git', 'ci/cd', 'terraform', 'linux']
    const foundTech = techWords.filter(t => lower.includes(t)).length
    
    const impactPatterns = text.match(/reduced.*\d+%|improved.*\d+%|scaled to \d+|\d+x (faster|improvement)|latency.*\d+|uptime.*\d+|processed \d+/gi) || []
    
    const scopeWords = ['architected', 'designed', 'built', 'led', 'owned', 'system', 'platform', 'infrastructure', 'microservices', 'distributed']
    const foundScope = scopeWords.filter(w => lower.includes(w)).length
    
    return [
      { name: 'Technical Skills', score: Math.min(100, foundTech * 10), feedback: foundTech >= 10 ? 'Excellent tech stack' : `Found ${foundTech} technologies. Add more relevant skills.` },
      { name: 'Engineering Impact', score: Math.min(100, impactPatterns.length * 25), feedback: impactPatterns.length >= 4 ? 'Great quantified impact' : 'Add more metrics: latency, scale, uptime' },
      { name: 'Project Scope', score: Math.min(100, foundScope * 20), feedback: foundScope >= 5 ? 'Shows ownership' : 'Show architecture decisions and system ownership' },
      { name: 'Action Verbs', score: Math.min(100, foundActions * 12), feedback: foundActions >= 8 ? 'Strong verbs' : 'Use more action verbs: Led, Built, Architected' },
      { name: 'ATS Format', score: hasExperience && hasSkills ? 100 : 60, feedback: hasExperience && hasSkills ? 'Good structure' : 'Add clear section headers' }
    ]
  }
  
  if (variant === 'marketing') {
    const channels = ['seo', 'sem', 'ppc', 'social', 'email', 'content', 'paid', 'organic', 'influencer', 'affiliate', 'facebook', 'google ads', 'linkedin', 'tiktok', 'hubspot', 'salesforce', 'marketo', 'analytics']
    const foundChannels = channels.filter(c => lower.includes(c)).length
    
    const metricPatterns = text.match(/\d+% (growth|increase|improvement)|\$[\d,]+( revenue| ROI| spend)|\d+k? (leads|users|subscribers|followers)|\d+x (ROI|ROAS|growth)/gi) || []
    
    return [
      { name: 'Marketing Metrics', score: Math.min(100, metricPatterns.length * 20), feedback: metricPatterns.length >= 5 ? 'Excellent metrics' : 'Add: growth %, ROI, leads generated' },
      { name: 'Channel Expertise', score: Math.min(100, foundChannels * 12), feedback: foundChannels >= 8 ? 'Strong channel coverage' : 'List more channels and tools' },
      { name: 'Action Verbs', score: Math.min(100, foundActions * 12), feedback: foundActions >= 5 ? 'Good verbs' : 'Use: drove, generated, scaled, launched' },
      { name: 'Quantified Results', score: Math.min(100, numbers.length * 15), feedback: numbers.length >= 6 ? 'Well quantified' : 'Add more numbers and percentages' },
      { name: 'ATS Format', score: hasExperience && hasSkills ? 100 : 60, feedback: hasExperience && hasSkills ? 'Good structure' : 'Add section headers' }
    ]
  }
  
  if (variant === 'sales') {
    const quotaPatterns = text.match(/\d+% (of quota|quota attainment|to quota)|exceeded quota|president.?s club|top \d+%|\$[\d,]+[km]? (revenue|ARR|quota|closed)/gi) || []
    const dealPatterns = text.match(/\$[\d,]+[km]? (deal|ACV|contract)|\d+ (deals|accounts|clients)|deal size|sales cycle/gi) || []
    
    const processWords = ['salesforce', 'hubspot', 'outreach', 'salesloft', 'gong', 'pipeline', 'forecast', 'discovery', 'demo', 'negotiation', 'closing', 'prospecting', 'cold call']
    const foundProcess = processWords.filter(w => lower.includes(w)).length
    
    return [
      { name: 'Quota Attainment', score: Math.min(100, quotaPatterns.length * 33), feedback: quotaPatterns.length >= 3 ? 'Excellent quota metrics' : 'Add: % to quota, revenue closed, rankings' },
      { name: 'Deal Metrics', score: Math.min(100, dealPatterns.length * 33), feedback: dealPatterns.length >= 3 ? 'Strong deal metrics' : 'Add: deal size, volume, cycle time' },
      { name: 'Sales Process', score: Math.min(100, foundProcess * 15), feedback: foundProcess >= 5 ? 'Shows process expertise' : 'Add: CRM tools, methodology' },
      { name: 'Action Verbs', score: Math.min(100, foundActions * 12), feedback: foundActions >= 5 ? 'Good verbs' : 'Use: closed, exceeded, generated, grew' },
      { name: 'ATS Format', score: hasExperience && hasSkills ? 100 : 60, feedback: hasExperience && hasSkills ? 'Good structure' : 'Add section headers' }
    ]
  }
  
  if (variant === 'executive') {
    const scalePatterns = text.match(/\$[\d,]+[bmk]? (P&L|revenue|budget|portfolio)|\d+ (direct reports|team|organization|employees)|global|enterprise/gi) || []
    const transformWords = ['transformed', 'turnaround', 'restructured', 'built', 'scaled', 'launched', 'established', 'pioneered', 'repositioned', 'm&a', 'acquisition', 'integration', 'ipo']
    const foundTransform = transformWords.filter(w => lower.includes(w)).length
    
    const boardWords = ['board', 'investor', 'stakeholder', 'shareholder', 'governance', 'fiduciary', 'fundraising', 'series']
    const foundBoard = boardWords.filter(w => lower.includes(w)).length
    
    return [
      { name: 'Scale & Scope', score: Math.min(100, scalePatterns.length * 25), feedback: scalePatterns.length >= 4 ? 'Excellent scale' : 'Add: P&L size, org size, geographic scope' },
      { name: 'Transformation', score: Math.min(100, foundTransform * 25), feedback: foundTransform >= 4 ? 'Shows transformational leadership' : 'Add: turnarounds, builds, strategic initiatives' },
      { name: 'Board Experience', score: Math.min(100, foundBoard * 33), feedback: foundBoard >= 3 ? 'Strong board exposure' : 'Add: board presentations, fundraising, governance' },
      { name: 'Business Results', score: Math.min(100, numbers.length * 15), feedback: numbers.length >= 6 ? 'Well quantified' : 'Add: revenue growth, exits, profitability' },
      { name: 'ATS Format', score: hasExperience ? 100 : 60, feedback: hasExperience ? 'Good structure' : 'Use clear section headers' }
    ]
  }
  
  // General resume
  return [
    { name: 'Length & Format', score: words < 150 ? 30 : words < 300 ? 60 : words > 800 ? 70 : 100, feedback: words < 300 ? 'Could be more detailed' : 'Good length' },
    { name: 'Action Verbs', score: Math.min(100, foundActions * 12), feedback: foundActions >= 8 ? 'Excellent action verbs' : `Found ${foundActions} action verbs. Add more.` },
    { name: 'Quantified Results', score: Math.min(100, numbers.length * 15), feedback: numbers.length >= 6 ? 'Great metrics' : 'Add more numbers and percentages' },
    { name: 'ATS Compatibility', score: hasExperience && hasSkills && hasEducation ? 100 : 60, feedback: hasExperience && hasSkills ? 'Good structure' : 'Add clear section headers' },
    { name: 'Keywords', score: Math.min(100, (text.match(/\b(manager|engineer|developer|analyst|lead|senior|strategy|growth|product|data|marketing|sales)\b/gi) || []).length * 10), feedback: 'Include relevant industry keywords' }
  ]
}

function getTips(score: number, variant: string) {
  if (score >= 80) {
    return ['Strong resume! Customize for each application', 'Keep updating with new achievements', 'Consider a brief summary section']
  }
  if (score >= 60) {
    return ['Add more quantified achievements', 'Mirror keywords from target job descriptions', 'Expand on your most relevant experience']
  }
  if (score >= 40) {
    return ['Add numbers: revenue, %, team size, users', 'Start bullets with action verbs', 'Include relevant keywords from job descriptions', 'Ensure clear section headers']
  }
  return ['Add quantified achievements (increased X by Y%)', 'Start every bullet with a strong action verb', 'Include a dedicated Skills section', 'Ensure clear section headers: Experience, Education, Skills', 'Remove graphics and emojis for ATS compatibility']
}
