'use client'

import ScoreTool from '@/components/tools/ScoreTool'

const metadata = {
  title: 'Income Diversification Score | GigWithAI',
  description: 'Score your freelance income diversification. Get feedback on revenue streams, client concentration, and passive income.',
  keywords: ['freelance income', 'multiple income streams', 'freelance diversification', 'passive income freelance'],
}

const criteria = [
  {
    id: 'streams',
    name: 'Number of Streams',
    weight: 25,
    description: 'How many income sources do you have?',
    checkFn: (text: string) => {
      const lower = text.toLowerCase()
      const streams = [
        lower.includes('client') || lower.includes('project') || lower.includes('freelance'),
        lower.includes('course') || lower.includes('teaching') || lower.includes('coaching'),
        lower.includes('product') || lower.includes('template') || lower.includes('tool'),
        lower.includes('affiliate') || lower.includes('referral'),
        lower.includes('content') || lower.includes('youtube') || lower.includes('newsletter'),
        lower.includes('retainer') || lower.includes('subscription') || lower.includes('recurring'),
        lower.includes('consulting') || lower.includes('advisory')
      ].filter(Boolean).length
      
      if (streams >= 4) return { score: 1, feedback: `Excellent - ${streams} income streams` }
      if (streams >= 3) return { score: 0.7, feedback: `Good diversification with ${streams} streams` }
      if (streams >= 2) return { score: 0.4, feedback: 'Add more streams - aim for 4+' }
      return { score: 0.2, feedback: 'Consider: products, courses, retainers, content monetization' }
    }
  },
  {
    id: 'clientConcentration',
    name: 'Client Concentration',
    weight: 25,
    description: 'Is too much revenue from one client?',
    checkFn: (text: string) => {
      const lower = text.toLowerCase()
      const hasMultiple = lower.includes('clients') || /\d+\s*client/.test(lower) || lower.includes('multiple')
      const hasDiverse = lower.includes('diverse') || lower.includes('spread') || lower.includes('balanced')
      const hasPercentage = /\d+%/.test(text)
      const noSingle = !lower.includes('main client') && !lower.includes('one client') && !lower.includes('primary client')
      
      if (hasMultiple && hasDiverse && noSingle) return { score: 1, feedback: 'Well-distributed client base' }
      if (hasMultiple) return { score: 0.6, feedback: 'Good but ensure no client is >30% of revenue' }
      if (noSingle) return { score: 0.4, feedback: 'Add more clients to reduce risk' }
      return { score: 0.2, feedback: 'Dangerous: diversify so no client is >30% of income' }
    }
  },
  {
    id: 'passive',
    name: 'Passive/Scalable Income',
    weight: 20,
    description: 'Do you have income that doesn\'t require your time?',
    checkFn: (text: string) => {
      const lower = text.toLowerCase()
      const hasPassive = lower.includes('passive') || lower.includes('automated') || lower.includes('while i sleep')
      const hasProduct = lower.includes('product') || lower.includes('course') || lower.includes('template') || lower.includes('ebook')
      const hasRecurring = lower.includes('recurring') || lower.includes('subscription') || lower.includes('membership')
      const hasAmount = /\$\d+/.test(text) || /\d+%/.test(text)
      
      if ((hasPassive || hasProduct || hasRecurring) && hasAmount) return { score: 1, feedback: 'Great passive income with clear numbers' }
      if (hasProduct || hasRecurring) return { score: 0.7, feedback: 'Good! Track and grow these streams' }
      if (hasPassive) return { score: 0.4, feedback: 'Add specifics on your passive income' }
      return { score: 0.2, feedback: 'Build scalable assets: templates, courses, tools' }
    }
  },
  {
    id: 'recurring',
    name: 'Recurring Revenue',
    weight: 20,
    description: 'Do you have predictable monthly income?',
    checkFn: (text: string) => {
      const lower = text.toLowerCase()
      const hasRetainer = lower.includes('retainer') || lower.includes('monthly') || lower.includes('recurring')
      const hasSubscription = lower.includes('subscription') || lower.includes('membership') || lower.includes('mrr')
      const hasPredict = lower.includes('predictable') || lower.includes('guaranteed') || lower.includes('consistent')
      
      if ((hasRetainer || hasSubscription) && hasPredict) return { score: 1, feedback: 'Strong recurring revenue base' }
      if (hasRetainer || hasSubscription) return { score: 0.7, feedback: 'Good recurring streams' }
      return { score: 0.3, feedback: 'Convert clients to retainers or build subscription products' }
    }
  },
  {
    id: 'growth',
    name: 'Growth Strategy',
    weight: 10,
    description: 'Do you have a plan to grow income streams?',
    checkFn: (text: string) => {
      const lower = text.toLowerCase()
      const hasPlan = lower.includes('plan') || lower.includes('goal') || lower.includes('target') || lower.includes('building')
      const hasGrowth = lower.includes('grow') || lower.includes('increase') || lower.includes('scale') || lower.includes('launch')
      const hasTimeline = lower.includes('month') || lower.includes('quarter') || lower.includes('year') || /202\d/.test(text)
      
      if (hasPlan && hasGrowth && hasTimeline) return { score: 1, feedback: 'Clear growth strategy with timeline' }
      if (hasPlan || hasGrowth) return { score: 0.6, feedback: 'Good but add specific timeline and targets' }
      return { score: 0.3, feedback: 'Set goals for each income stream' }
    }
  }
]

const tipsByScore = [
  { min: 0, max: 39, tips: ['Immediate: convert best client to a retainer', 'Build one digital product from your expertise', 'Rule of thumb: no client should be >30% of income'] },
  { min: 40, max: 59, tips: ['Add a passive income stream (course, templates, tools)', 'Increase retainer clients for predictability', 'Document your process for productization'] },
  { min: 60, max: 79, tips: ['Great foundation! Focus on growing existing streams', 'Consider affiliate partnerships in your niche', 'Build an audience to fuel all streams'] },
  { min: 80, max: 100, tips: ['Excellent diversification!', 'Optimize: which streams have best time-to-income ratio?', 'Consider hiring to scale service income'] }
]

export default function IncomeDiversificationScorePage() {
  return (
    <div className="py-16 px-6">
      <ScoreTool
        title="Income Diversification Score"
        subtitle="Describe your current income streams and revenue mix"
        placeholder={`Example:

Current income streams:

1. Client Work (60%): 5 active clients, no single client over 20% of revenue. Mix of project and retainer work.

2. Course Sales (20%): "UX for SaaS" course on Gumroad, brings in $2k/month passively. Launched 6 months ago.

3. Templates (10%): Figma template pack, $500/month on autopilot.

4. Affiliate (5%): Design tool affiliate links in my newsletter, ~$300/month.

5. Consulting (5%): Occasional advisory calls at $400/hour.

Goals: Grow course to $5k/month, launch second template pack, add 2 more retainer clients.`}
        criteria={criteria}
        tipsByScore={tipsByScore}
        ctaText="See our side hustle guides"
        ctaHref="/guides/chatgpt-side-hustle-prompts"
      />
    </div>
  )
}
