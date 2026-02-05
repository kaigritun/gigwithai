// Tool configurations for dynamic tool generation
// Add tools here, pages auto-generate from config

export type ToolType = 'score' | 'quiz' | 'generator'

export interface ScoreCriteria {
  name: string
  weight: number
  keywords: string[]
  description: string
}

export interface QuizQuestion {
  id: string
  question: string
  options: { value: string; label: string; points: Record<string, number> }[]
}

export interface QuizResult {
  id: string
  title: string
  description: string
  recommendations: string[]
}

export interface GeneratorField {
  id: string
  label: string
  type: 'text' | 'textarea' | 'select' | 'number'
  placeholder?: string
  options?: { value: string; label: string }[]
  required?: boolean
}

export interface BaseTool {
  slug: string
  name: string
  description: string
  category: string
  type: ToolType
  seo: {
    title: string
    description: string
  }
}

export interface ScoreTool extends BaseTool {
  type: 'score'
  inputLabel: string
  inputPlaceholder: string
  criteria: ScoreCriteria[]
  tips: string[]
}

export interface QuizTool extends BaseTool {
  type: 'quiz'
  questions: QuizQuestion[]
  results: QuizResult[]
}

export interface GeneratorTool extends BaseTool {
  type: 'generator'
  fields: GeneratorField[]
  template: string
  outputLabel: string
}

export type Tool = ScoreTool | QuizTool | GeneratorTool

// ============ FREELANCE TOOLS ============

export const freelanceProfileScore: ScoreTool = {
  slug: 'freelance-profile-score',
  name: 'Freelance Profile Score',
  description: 'Rate your Upwork, Fiverr, or freelance profile for client appeal',
  category: 'Freelance',
  type: 'score',
  seo: {
    title: 'Free Freelance Profile Score | Optimize Your Upwork/Fiverr Profile',
    description: 'Get instant feedback on your freelance profile. Improve your Upwork, Fiverr, or Toptal profile to win more clients.',
  },
  inputLabel: 'Paste Your Freelance Profile',
  inputPlaceholder: 'Paste your profile title, overview, and services description...',
  criteria: [
    {
      name: 'Clear Value Proposition',
      weight: 25,
      keywords: ['help', 'specialist', 'expert', 'deliver', 'results', 'guarantee', 'years', 'experience', 'clients'],
      description: 'Clearly states what you offer and why clients should hire you',
    },
    {
      name: 'Niche Focus',
      weight: 20,
      keywords: ['specialize', 'focus', 'niche', 'industry', 'specific', 'dedicated', 'exclusively'],
      description: 'Shows specialization rather than being a generalist',
    },
    {
      name: 'Social Proof',
      weight: 20,
      keywords: ['clients', 'projects', 'completed', 'reviews', 'rated', 'testimonial', 'portfolio', 'case study', '%', '$', 'revenue'],
      description: 'Evidence of past success and client satisfaction',
    },
    {
      name: 'Call to Action',
      weight: 15,
      keywords: ['contact', 'message', 'discuss', 'let\'s', 'reach out', 'hire', 'get started', 'free consultation'],
      description: 'Clear next step for interested clients',
    },
    {
      name: 'Professional Tone',
      weight: 10,
      keywords: ['professional', 'quality', 'communication', 'deadline', 'responsive', 'reliable'],
      description: 'Professional and trustworthy language',
    },
    {
      name: 'Keywords & Skills',
      weight: 10,
      keywords: [], // Dynamic based on service
      description: 'Relevant keywords for platform search visibility',
    },
  ],
  tips: [
    'Lead with your specialty, not "I can do everything"',
    'Add specific numbers (projects completed, years, client results)',
    'Include a clear call to action',
    'Use keywords clients search for',
    'Keep it scannable with short paragraphs',
  ],
}

export const clientProposalScore: ScoreTool = {
  slug: 'client-proposal-score',
  name: 'Client Proposal Score',
  description: 'Analyze your proposal for winning potential before you send it',
  category: 'Freelance',
  type: 'score',
  seo: {
    title: 'Free Proposal Score Calculator | Win More Freelance Clients',
    description: 'Score your freelance proposal before sending. Get feedback on personalization, value proposition, and closing techniques.',
  },
  inputLabel: 'Paste Your Proposal',
  inputPlaceholder: 'Paste the proposal you plan to send to a client...',
  criteria: [
    {
      name: 'Personalization',
      weight: 25,
      keywords: ['your', 'you', 'project', 'mentioned', 'noticed', 'saw', 'specific', 'understand'],
      description: 'Shows you read and understood their specific needs',
    },
    {
      name: 'Relevant Experience',
      weight: 25,
      keywords: ['similar', 'experience', 'previously', 'worked on', 'example', 'portfolio', 'case study', 'results'],
      description: 'Demonstrates relevant past work',
    },
    {
      name: 'Clear Solution',
      weight: 20,
      keywords: ['approach', 'plan', 'process', 'deliver', 'steps', 'timeline', 'methodology', 'strategy'],
      description: 'Explains how you will solve their problem',
    },
    {
      name: 'Value Focus',
      weight: 15,
      keywords: ['value', 'benefit', 'result', 'outcome', 'increase', 'save', 'improve', 'goal'],
      description: 'Focuses on outcomes, not just deliverables',
    },
    {
      name: 'Strong Close',
      weight: 15,
      keywords: ['call', 'discuss', 'available', 'start', 'questions', 'happy to', 'look forward'],
      description: 'Clear call to action and availability',
    },
  ],
  tips: [
    'Reference something specific from their job post',
    'Include one relevant example from your portfolio',
    'State your approach in 2-3 sentences',
    'Focus on their goals, not your credentials',
    'End with a question to invite response',
  ],
}

// ============ QUIZ TOOLS ============

export const sideHustleQuiz: QuizTool = {
  slug: 'side-hustle-quiz',
  name: 'AI Side Hustle Quiz',
  description: 'Find the perfect AI-powered side hustle based on your skills and goals',
  category: 'Side Hustle',
  type: 'quiz',
  seo: {
    title: 'AI Side Hustle Quiz | Find Your Perfect AI Income Stream',
    description: 'Take our free quiz to discover which AI-powered side hustle matches your skills, time availability, and income goals.',
  },
  questions: [
    {
      id: 'time',
      question: 'How much time can you dedicate weekly?',
      options: [
        { value: 'minimal', label: '2-5 hours (just testing)', points: { content: 1, service: 0, product: 2 } },
        { value: 'parttime', label: '5-15 hours (serious side hustle)', points: { content: 2, service: 2, product: 1 } },
        { value: 'significant', label: '15-30 hours (almost full-time)', points: { content: 1, service: 3, product: 2 } },
        { value: 'fulltime', label: '30+ hours (going all-in)', points: { content: 1, service: 2, product: 3 } },
      ],
    },
    {
      id: 'skills',
      question: 'Which skill set is strongest?',
      options: [
        { value: 'writing', label: 'Writing & Communication', points: { content: 3, service: 2, product: 1 } },
        { value: 'technical', label: 'Technical & Problem-Solving', points: { content: 0, service: 3, product: 2 } },
        { value: 'creative', label: 'Design & Visual', points: { content: 2, service: 2, product: 2 } },
        { value: 'teaching', label: 'Teaching & Explaining', points: { content: 3, service: 1, product: 3 } },
      ],
    },
    {
      id: 'income_goal',
      question: 'What\'s your monthly income goal?',
      options: [
        { value: 'extra', label: '$100-500 (coffee money)', points: { content: 3, service: 1, product: 1 } },
        { value: 'meaningful', label: '$500-2000 (meaningful extra)', points: { content: 2, service: 3, product: 2 } },
        { value: 'replace', label: '$2000-5000 (significant income)', points: { content: 1, service: 3, product: 2 } },
        { value: 'major', label: '$5000+ (full income replacement)', points: { content: 0, service: 2, product: 3 } },
      ],
    },
    {
      id: 'preference',
      question: 'How do you prefer to work?',
      options: [
        { value: 'async', label: 'Independently, async', points: { content: 3, service: 0, product: 3 } },
        { value: 'client', label: 'Directly with clients', points: { content: 0, service: 3, product: 0 } },
        { value: 'mixed', label: 'Mix of both', points: { content: 2, service: 2, product: 2 } },
        { value: 'team', label: 'As part of a team', points: { content: 1, service: 2, product: 1 } },
      ],
    },
    {
      id: 'risk',
      question: 'How do you feel about income variability?',
      options: [
        { value: 'steady', label: 'Need consistent income', points: { content: 0, service: 3, product: 0 } },
        { value: 'moderate', label: 'Some variability is fine', points: { content: 2, service: 2, product: 2 } },
        { value: 'variable', label: 'Okay with feast or famine', points: { content: 3, service: 1, product: 3 } },
        { value: 'building', label: 'Will invest time for later payoff', points: { content: 1, service: 0, product: 3 } },
      ],
    },
  ],
  results: [
    {
      id: 'content',
      title: 'AI Content Creator',
      description: 'You\'re suited for creating content with AI assistance — blogs, social media, newsletters, or YouTube scripts. Low barrier to entry, scalable over time.',
      recommendations: [
        'Start a niche newsletter using AI for research/drafting',
        'Create a content-focused social media presence',
        'Offer AI-assisted blog writing on Upwork',
        'Build a faceless YouTube channel with AI scripts',
      ],
    },
    {
      id: 'service',
      title: 'AI-Augmented Freelancer',
      description: 'Your best path is offering services enhanced by AI — consulting, development, design, or specialized skills. Higher income ceiling, more client interaction.',
      recommendations: [
        'Position yourself as an AI-enhanced specialist',
        'Offer "AI audit" services in your field',
        'Use AI to 3x your output and charge premium rates',
        'Build a portfolio showcasing AI-assisted results',
      ],
    },
    {
      id: 'product',
      title: 'Digital Product Creator',
      description: 'You\'re best suited for building and selling digital products — templates, courses, tools, or prompts. Upfront work, passive income potential.',
      recommendations: [
        'Create and sell prompt packs or templates',
        'Build a micro-SaaS with AI capabilities',
        'Sell courses teaching AI skills in your niche',
        'Create Notion/Airtable templates enhanced with AI',
      ],
    },
  ],
}

// ============ GENERATOR TOOLS ============

export const freelanceRateCalculator: GeneratorTool = {
  slug: 'freelance-rate-calculator',
  name: 'Freelance Rate Calculator',
  description: 'Calculate your ideal hourly or project rate based on your goals',
  category: 'Freelance',
  type: 'generator',
  seo: {
    title: 'Free Freelance Rate Calculator | Find Your Ideal Rate',
    description: 'Calculate your freelance hourly rate based on income goals, expenses, and desired lifestyle. Stop undercharging.',
  },
  fields: [
    { id: 'annual_income', label: 'Target Annual Income ($)', type: 'text', placeholder: '80000', required: true },
    { id: 'weekly_hours', label: 'Billable Hours Per Week', type: 'text', placeholder: '30', required: true },
    { id: 'weeks_off', label: 'Weeks Off Per Year (Vacation + Sick)', type: 'text', placeholder: '4', required: true },
    { id: 'expenses', label: 'Annual Business Expenses ($)', type: 'text', placeholder: '5000' },
    { id: 'taxes', label: 'Estimated Tax Rate (%)', type: 'select', options: [
      { value: '15', label: '15% (Low)' },
      { value: '25', label: '25% (Moderate)' },
      { value: '30', label: '30% (Standard)' },
      { value: '35', label: '35% (High)' },
    ], required: true },
  ],
  template: `💰 YOUR FREELANCE RATES

Based on your inputs:
• Target income: {{annual_income}}/year
• Billable hours: {{weekly_hours}}h/week
• Time off: {{weeks_off}} weeks
• Tax rate: {{taxes}}%

📊 CALCULATED RATES

Use the formula: (Target Income × (1 + Tax Rate) + Expenses) ÷ (Working Weeks × Hours/Week)

Recommended Rates:
• Budget clients: Minimum + 10%
• Standard clients: Minimum + 25%  
• Premium clients: Minimum + 50%

Project Pricing Guide:
• Small project (1-5 hours): hourly × 5 × 1.2
• Medium project (5-20 hours): hourly × 15 × 1.15
• Large project (20-50 hours): hourly × 35 × 1.1

💡 PRO TIP: Never quote your minimum rate. Start negotiations at your "Standard" rate and only go to "Budget" for strategic relationships.`,
  outputLabel: 'Your Rate Breakdown',
}

export const clientPitchGenerator: GeneratorTool = {
  slug: 'client-pitch-generator',
  name: 'Cold Pitch Generator',
  description: 'Create personalized outreach messages for potential clients',
  category: 'Freelance',
  type: 'generator',
  seo: {
    title: 'Free Client Pitch Generator | Cold Outreach Templates',
    description: 'Generate personalized cold pitches for freelance clients. Templates for email, LinkedIn, and DMs that actually get responses.',
  },
  fields: [
    { id: 'client_name', label: 'Client/Company Name', type: 'text', placeholder: 'Acme Corp', required: true },
    { id: 'service', label: 'Service You Offer', type: 'text', placeholder: 'AI-powered content writing', required: true },
    { id: 'problem', label: 'Problem They Likely Have', type: 'text', placeholder: 'Inconsistent content output', required: true },
    { id: 'result', label: 'Result You Can Deliver', type: 'text', placeholder: '4x content output with maintained quality', required: true },
    { id: 'proof', label: 'Quick Proof Point', type: 'text', placeholder: 'Helped 3 SaaS companies scale content', required: true },
  ],
  template: `📧 EMAIL VERSION

Subject: Quick idea for {{client_name}}'s {{problem}}

Hi,

I noticed {{client_name}} might be dealing with {{problem}} — it's something I've helped several companies solve.

I specialize in {{service}}, and I've {{proof}}.

The result? {{result}}.

Would you be open to a quick 15-minute call to see if I could help?

Best,
[Your name]

---

💼 LINKEDIN VERSION

Hey! I've been following {{client_name}} and noticed you might benefit from {{service}}.

I've {{proof}}, helping clients achieve {{result}}.

Worth a quick chat?

---

📱 SHORT DM VERSION

Hey! Saw {{client_name}} and thought I could help with {{problem}}.

I specialize in {{service}} — {{proof}}.

Interested in chatting?`,
  outputLabel: 'Your Pitch Templates',
}

export const gigDescriptionGenerator: GeneratorTool = {
  slug: 'gig-description-generator',
  name: 'Gig Description Generator',
  description: 'Create optimized Fiverr/Upwork gig descriptions that rank and convert',
  category: 'Freelance',
  type: 'generator',
  seo: {
    title: 'Free Gig Description Generator | Fiverr & Upwork Optimization',
    description: 'Generate SEO-optimized gig descriptions for Fiverr, Upwork, and freelance platforms. Stand out and win more clients.',
  },
  fields: [
    { id: 'service', label: 'Your Service', type: 'text', placeholder: 'AI-powered logo design', required: true },
    { id: 'benefit', label: 'Main Benefit for Client', type: 'text', placeholder: 'Professional brand identity in 24 hours', required: true },
    { id: 'includes', label: 'What\'s Included (comma-separated)', type: 'textarea', placeholder: '3 concepts, unlimited revisions, source files, commercial rights', required: true },
    { id: 'experience', label: 'Your Experience/Credentials', type: 'text', placeholder: '5 years, 500+ logos, Fortune 500 clients', required: true },
    { id: 'turnaround', label: 'Typical Turnaround', type: 'text', placeholder: '24-48 hours', required: true },
  ],
  template: `🎯 GIG TITLE OPTIONS

1. I will {{service}} — {{benefit}}
2. Professional {{service}} with {{turnaround}} delivery
3. {{service}} | {{benefit}} | {{turnaround}}

---

📝 GIG DESCRIPTION

Are you looking for {{service}}?

✅ {{benefit}} — that's exactly what I deliver.

With {{experience}}, I know exactly what works.

📦 WHAT YOU GET:
{{includes}}

⏰ DELIVERY: {{turnaround}}

🔥 WHY CHOOSE ME?
• {{experience}}
• Fast communication
• Unlimited revisions until you're happy
• 100% satisfaction guarantee

Ready to get started? Click "Order Now" or message me with questions!

---

🏷️ SUGGESTED TAGS

[Extract keywords from service and benefit for platform tags]`,
  outputLabel: 'Your Gig Description',
}

// ============ ADDITIONAL TOOLS ============

export const portfolioScoreCalculator: ScoreTool = {
  slug: 'portfolio-score-calculator',
  name: 'Portfolio Score Calculator',
  description: 'Rate your freelance portfolio and get tips to improve conversions',
  category: 'Freelance',
  type: 'score',
  seo: {
    title: 'Free Portfolio Score Calculator | Rate Your Work Samples',
    description: 'Find out how effective your freelance portfolio is at winning clients. Get actionable tips to improve your conversion rate.',
  },
  inputLabel: 'Describe Your Portfolio',
  inputPlaceholder: 'Describe your portfolio: what projects are included, how it\'s organized, testimonials, case studies, etc...',
  criteria: [
    {
      name: 'Case Studies',
      weight: 25,
      keywords: ['case study', 'before after', 'results', 'roi', 'outcome', 'metrics', 'impact', 'increased', 'grew', 'saved'],
      description: 'Detailed case studies showing process and results',
    },
    {
      name: 'Social Proof',
      weight: 20,
      keywords: ['testimonial', 'review', 'client', 'feedback', 'quote', 'recommendation', 'endorsement', '5 star', 'rating'],
      description: 'Client testimonials and reviews',
    },
    {
      name: 'Variety & Range',
      weight: 15,
      keywords: ['different', 'variety', 'range', 'industries', 'types', 'styles', 'diverse', 'multiple', 'various'],
      description: 'Diverse projects showing range of capabilities',
    },
    {
      name: 'Clear Specialization',
      weight: 15,
      keywords: ['specialize', 'focus', 'niche', 'expert', 'specifically', 'only', 'dedicated', 'best at'],
      description: 'Clear positioning and specialty',
    },
    {
      name: 'Professional Presentation',
      weight: 15,
      keywords: ['website', 'behance', 'dribbble', 'notion', 'custom', 'branded', 'professional', 'clean', 'organized'],
      description: 'Professional platform or custom portfolio site',
    },
    {
      name: 'Call to Action',
      weight: 10,
      keywords: ['contact', 'hire', 'book', 'schedule', 'call', 'email', 'form', 'inquiry', 'get in touch'],
      description: 'Clear call to action for potential clients',
    },
  ],
  tips: [
    'Lead with your 3 best projects, not 30 mediocre ones',
    'Include metrics and results for every project if possible',
    'Add testimonials directly on project pages, not a separate section',
    'Show your process with before/after or step-by-step breakdowns',
    'Specialize: "I design SaaS dashboards" beats "I do graphic design"',
    'Add a clear CTA: "Book a free discovery call" with calendar link',
  ],
}

export const aiBusinessIdeaGenerator: GeneratorTool = {
  slug: 'ai-business-idea-generator',
  name: 'AI Side Hustle Idea Generator',
  description: 'Get personalized AI business ideas based on your skills and interests',
  category: 'Side Hustle',
  type: 'generator',
  seo: {
    title: 'AI Business Idea Generator | Find Your Perfect Side Hustle',
    description: 'Discover AI-powered side hustle ideas matched to your skills. Get actionable business concepts you can start today.',
  },
  fields: [
    {
      id: 'skills',
      label: 'Your Current Skills',
      type: 'select',
      options: [
        { value: 'writing', label: 'Writing / Content Creation' },
        { value: 'design', label: 'Design / Visual Arts' },
        { value: 'coding', label: 'Programming / Development' },
        { value: 'marketing', label: 'Marketing / Sales' },
        { value: 'video', label: 'Video / Audio Production' },
        { value: 'consulting', label: 'Consulting / Coaching' },
        { value: 'admin', label: 'Admin / Operations' },
        { value: 'none', label: 'No specific skills yet' },
      ],
      required: true,
    },
    { id: 'hours', label: 'Hours Available Per Week', type: 'text', placeholder: '10', required: true },
    { id: 'budget', label: 'Startup Budget', type: 'select', options: [
      { value: '0', label: '$0 - Free tools only' },
      { value: '100', label: 'Under $100' },
      { value: '500', label: '$100 - $500' },
      { value: '1000', label: '$500+' },
    ], required: true },
    { id: 'interests', label: 'Industries/Topics You Like', type: 'text', placeholder: 'tech, fitness, finance...', required: true },
  ],
  template: `🚀 AI SIDE HUSTLE IDEAS FOR YOU

Based on: {{skills}} skills, {{hours}}h/week, {{budget}} budget, interests in {{interests}}

---

💡 IDEA 1: AI-Enhanced {{skills}} Agency
• Use AI tools to 10x your output
• Start by offering services on Fiverr/Upwork
• Automate repetitive tasks, focus on strategy
• Potential: $500-5000/month

💡 IDEA 2: AI Tool Tutorials
• Create content teaching others to use AI for {{skills}}
• Monetize: YouTube, courses, affiliate links
• Low competition in specific niches
• Potential: $200-2000/month

💡 IDEA 3: Niche {{interests}} Content
• Use AI to research and draft content faster
• Focus on {{interests}} + {{skills}} intersection
• Build audience, monetize with products/services
• Potential: $100-1000/month (grows over time)

---

📋 YOUR 7-DAY ACTION PLAN

Day 1-2: Research competitors, pick one idea
Day 3-4: Set up basic infrastructure (accounts, tools)
Day 5-6: Create first deliverable/content
Day 7: Launch and get feedback

---

🔧 RECOMMENDED AI TOOLS
• ChatGPT/Claude: Research, writing, brainstorming
• Midjourney/DALL-E: Image generation
• ElevenLabs: Voice/audio content
• Gamma: Presentations and decks

Start small, iterate fast. Your first $100 teaches more than 100 hours of planning.`,
  outputLabel: 'Your AI Side Hustle Ideas',
}

// ============ ALL TOOLS ============

export const allTools: Tool[] = [
  freelanceProfileScore,
  clientProposalScore,
  sideHustleQuiz,
  freelanceRateCalculator,
  clientPitchGenerator,
  gigDescriptionGenerator,
  portfolioScoreCalculator,
  aiBusinessIdeaGenerator,
]

export function getToolBySlug(slug: string): Tool | undefined {
  return allTools.find(t => t.slug === slug)
}

export function getToolsByCategory(category: string): Tool[] {
  return allTools.filter(t => t.category === category)
}

export function getToolsByType(type: ToolType): Tool[] {
  return allTools.filter(t => t.type === type)
}
