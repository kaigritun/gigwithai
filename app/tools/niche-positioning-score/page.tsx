'use client'

import ScoreTool from '@/components/tools/ScoreTool'

const metadata = {
  title: 'Niche Positioning Score | GigWithAI',
  description: 'Score your freelance niche positioning. Get feedback on specificity, market demand, and competitive differentiation.',
  keywords: ['freelance niche', 'positioning strategy', 'freelance specialization', 'niche selection'],
}

const criteria = [
  {
    id: 'specificity',
    name: 'Specificity',
    weight: 30,
    description: 'How specific is your niche?',
    checkFn: (text: string) => {
      const lower = text.toLowerCase()
      const hasService = lower.includes('design') || lower.includes('develop') || lower.includes('write') || lower.includes('consult') || lower.includes('market')
      const hasIndustry = lower.includes('saas') || lower.includes('ecommerce') || lower.includes('healthcare') || lower.includes('fintech') || lower.includes('real estate')
      const hasAudience = lower.includes('startup') || lower.includes('enterprise') || lower.includes('small business') || lower.includes('founders') || lower.includes('agencies')
      const hasOutcome = lower.includes('increase') || lower.includes('reduce') || lower.includes('generate') || lower.includes('build') || lower.includes('launch')
      
      const specificity = [hasService, hasIndustry, hasAudience, hasOutcome].filter(Boolean).length
      
      if (specificity >= 4) return { score: 1, feedback: 'Highly specific niche - excellent!' }
      if (specificity >= 3) return { score: 0.7, feedback: 'Good specificity - could be sharper' }
      if (specificity >= 2) return { score: 0.4, feedback: 'Too broad - add industry or audience' }
      return { score: 0.2, feedback: 'Define: service + industry + audience + outcome' }
    }
  },
  {
    id: 'differentiation',
    name: 'Differentiation',
    weight: 25,
    description: 'What makes you different from competitors?',
    checkFn: (text: string) => {
      const lower = text.toLowerCase()
      const hasUnique = lower.includes('only') || lower.includes('unique') || lower.includes('different') || lower.includes('unlike')
      const hasMethod = lower.includes('method') || lower.includes('process') || lower.includes('framework') || lower.includes('approach')
      const hasBackground = lower.includes('background') || lower.includes('experience') || lower.includes('former') || lower.includes('years')
      
      if (hasUnique && hasMethod) return { score: 1, feedback: 'Strong differentiation with unique method' }
      if (hasMethod || hasUnique) return { score: 0.7, feedback: 'Good but articulate more clearly' }
      if (hasBackground) return { score: 0.4, feedback: 'Background helps but add a unique angle' }
      return { score: 0.2, feedback: 'What can clients ONLY get from you?' }
    }
  },
  {
    id: 'demand',
    name: 'Market Demand Signals',
    weight: 20,
    description: 'Is there evidence of demand for this niche?',
    checkFn: (text: string) => {
      const lower = text.toLowerCase()
      const hasDemand = lower.includes('growing') || lower.includes('demand') || lower.includes('need') || lower.includes('hiring')
      const hasProof = lower.includes('clients') || lower.includes('projects') || /\d+/.test(text) || lower.includes('companies')
      const hasProblem = lower.includes('struggle') || lower.includes('challenge') || lower.includes('problem') || lower.includes('pain')
      
      if (hasDemand && hasProof) return { score: 1, feedback: 'Clear demand signals with proof' }
      if (hasProblem && hasDemand) return { score: 0.8, feedback: 'Good problem-demand connection' }
      if (hasDemand || hasProblem) return { score: 0.5, feedback: 'Add evidence: client wins, market data' }
      return { score: 0.2, feedback: 'Research demand: Google Trends, job postings, competitor activity' }
    }
  },
  {
    id: 'pricing',
    name: 'Pricing Power',
    weight: 15,
    description: 'Does your positioning support premium pricing?',
    checkFn: (text: string) => {
      const lower = text.toLowerCase()
      const hasValue = lower.includes('roi') || lower.includes('revenue') || lower.includes('save') || lower.includes('value')
      const hasPremium = lower.includes('premium') || lower.includes('high-end') || lower.includes('expert') || lower.includes('specialist')
      const hasOutcome = /\d+%/.test(text) || /\$\d+/.test(text) || lower.includes('increase') || lower.includes('growth')
      
      if (hasOutcome && hasValue) return { score: 1, feedback: 'Strong ROI positioning for premium rates' }
      if (hasPremium || hasValue) return { score: 0.6, feedback: 'Good but quantify the value you create' }
      return { score: 0.3, feedback: 'Show ROI: "I help clients achieve X result"' }
    }
  },
  {
    id: 'clarity',
    name: 'Elevator Pitch Clarity',
    weight: 10,
    description: 'Can you explain it in one sentence?',
    checkFn: (text: string) => {
      const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0)
      const firstSentence = sentences[0] || ''
      const words = firstSentence.split(/\s+/).length
      const hasI = firstSentence.toLowerCase().includes('i help') || firstSentence.toLowerCase().includes('i work')
      
      if (hasI && words <= 25) return { score: 1, feedback: 'Clear, concise positioning statement' }
      if (words <= 30) return { score: 0.7, feedback: 'Good but tighten it up' }
      return { score: 0.4, feedback: 'Start with: "I help [audience] [achieve outcome]"' }
    }
  }
]

const tipsByScore = [
  { min: 0, max: 39, tips: ['Formula: "I help [specific audience] [achieve outcome] through [unique method]"', 'Pick ONE industry to start - you can expand later', 'Research competitors and find gaps'] },
  { min: 40, max: 59, tips: ['Get more specific on your target audience', 'Document your unique process or framework', 'Validate demand: talk to 10 potential clients'] },
  { min: 60, max: 79, tips: ['Great positioning! Test it with real prospects', 'Build content around your niche to establish authority', 'Consider raising your rates'] },
  { min: 80, max: 100, tips: ['Excellent niche positioning!', 'Document case studies to prove results', 'Create a signature offer around your niche'] }
]

export default function NichePositioningScorePage() {
  return (
    <div className="py-16 px-6">
      <ScoreTool
        title="Niche Positioning Score"
        subtitle="Describe your freelance niche and positioning"
        placeholder={`Example:

I help B2B SaaS startups (Series A-B) increase trial-to-paid conversion through UX optimization.

My background: 8 years as product designer at 3 SaaS companies, including leading the redesign that increased conversions by 47% at TechCorp.

What makes me different: I use a "First Hour Framework" - mapping exactly what users do in their first 60 minutes and removing every friction point. Most designers redesign whole apps; I focus on the critical path.

Demand: SaaS companies are struggling with conversion in this market. I've completed 12 projects this year, all from referrals.

Pricing: I charge $15k-25k per project because I deliver measurable ROI - my last client saw $400k in additional annual revenue.`}
        criteria={criteria}
        tipsByScore={tipsByScore}
        ctaText="See our freelancing guides"
        ctaHref="/guides/chatgpt-freelancing-prompts"
      />
    </div>
  )
}
