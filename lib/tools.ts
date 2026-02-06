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

// ============ CONTENT CREATOR TOOLS ============

export const socialMediaProfileScore: ScoreTool = {
  slug: 'social-media-profile-score',
  name: 'Social Media Profile Score',
  description: 'Rate your Twitter/X, LinkedIn, or Instagram profile for monetization potential',
  category: 'Content Creator',
  type: 'score',
  seo: {
    title: 'Free Social Media Profile Score | Optimize for Growth & Income',
    description: 'Analyze your social media profile for engagement and monetization potential. Get tips to grow your audience and income.',
  },
  inputLabel: 'Paste Your Social Media Bio & Recent Posts',
  inputPlaceholder: 'Paste your bio, headline, and 3-5 recent post examples...',
  criteria: [
    {
      name: 'Clear Value Proposition',
      weight: 25,
      keywords: ['help', 'teach', 'share', 'tips', 'guide', 'insights', 'learn', 'grow', 'build', 'create'],
      description: 'Bio clearly states what value you provide',
    },
    {
      name: 'Niche Focus',
      weight: 20,
      keywords: ['specialize', 'focus', 'niche', 'expert', 'only', 'dedicated', 'specifically', 'all about'],
      description: 'Consistent theme rather than random topics',
    },
    {
      name: 'Engagement Hooks',
      weight: 15,
      keywords: ['thread', 'story', 'lesson', 'how to', 'mistake', 'secret', 'truth', 'here\'s', 'why', 'revealed'],
      description: 'Content uses hooks that drive engagement',
    },
    {
      name: 'Social Proof',
      weight: 15,
      keywords: ['followers', 'featured', 'clients', 'years', 'built', 'grew', '$', 'revenue', 'subscribers', 'downloads'],
      description: 'Credibility indicators in bio or content',
    },
    {
      name: 'Call to Action',
      weight: 15,
      keywords: ['follow', 'dm', 'link', 'newsletter', 'subscribe', 'join', 'download', 'free', 'get'],
      description: 'Clear CTAs driving action',
    },
    {
      name: 'Monetization Path',
      weight: 10,
      keywords: ['course', 'coaching', 'consulting', 'product', 'service', 'book', 'template', 'hire', 'work with'],
      description: 'Visible path to monetization',
    },
  ],
  tips: [
    'Pick ONE niche and go deep — generalists don\'t build audiences',
    'Lead with transformation: "I help X achieve Y"',
    'Add social proof: followers, revenue, client results',
    'Include a CTA: newsletter, DM, or link',
    'Post consistently (3-5x/week minimum)',
    'Engage genuinely with others in your niche',
  ],
}

export const landingPageScore: ScoreTool = {
  slug: 'landing-page-score',
  name: 'Landing Page Score Calculator',
  description: 'Analyze your landing page copy for conversions',
  category: 'Sales',
  type: 'score',
  seo: {
    title: 'Free Landing Page Score | Optimize Copy for Conversions',
    description: 'Get instant feedback on your landing page copy. Improve headlines, CTAs, and conversion elements.',
  },
  inputLabel: 'Paste Your Landing Page Copy',
  inputPlaceholder: 'Paste your landing page headline, subheadline, body copy, and CTA...',
  criteria: [
    {
      name: 'Headline Clarity',
      weight: 25,
      keywords: ['get', 'how to', 'without', 'in', 'days', 'free', 'simple', 'easy', 'fast', 'proven'],
      description: 'Clear, benefit-driven headline',
    },
    {
      name: 'Problem Agitation',
      weight: 20,
      keywords: ['tired', 'frustrated', 'struggle', 'problem', 'pain', 'hate', 'difficult', 'confusing', 'overwhelmed', 'stuck'],
      description: 'Clearly articulates the problem',
    },
    {
      name: 'Solution Clarity',
      weight: 20,
      keywords: ['solution', 'answer', 'finally', 'introducing', 'discover', 'learn', 'get', 'achieve', 'transform'],
      description: 'Clear explanation of the solution',
    },
    {
      name: 'Social Proof',
      weight: 15,
      keywords: ['testimonial', 'review', 'clients', 'customers', 'trusted', 'featured', 'as seen', 'companies', 'results'],
      description: 'Testimonials or credibility indicators',
    },
    {
      name: 'Strong CTA',
      weight: 10,
      keywords: ['start', 'get', 'try', 'join', 'download', 'sign up', 'free', 'now', 'today', 'instant'],
      description: 'Compelling call-to-action',
    },
    {
      name: 'Urgency/Scarcity',
      weight: 10,
      keywords: ['limited', 'only', 'today', 'now', 'spots', 'closing', 'deadline', 'last chance', 'expires'],
      description: 'Elements creating urgency',
    },
  ],
  tips: [
    'Headline should pass the "blink test" — clear value in <3 seconds',
    'Lead with the problem, then present the solution',
    'Use specific numbers: "Join 10,437 subscribers"',
    'One CTA, repeated multiple times',
    'Above the fold: headline, subheadline, CTA',
    'Include at least 3 testimonials with real names/photos',
  ],
}

export const testimonialRequestGenerator: GeneratorTool = {
  slug: 'testimonial-request-generator',
  name: 'Testimonial Request Generator',
  description: 'Get powerful testimonials from your clients with easy-to-use templates',
  category: 'Sales',
  type: 'generator',
  seo: {
    title: 'Free Testimonial Request Generator | Get Client Reviews',
    description: 'Generate professional testimonial request messages. Get powerful social proof from your clients.',
  },
  fields: [
    { id: 'client_name', label: 'Client Name', type: 'text', placeholder: 'Sarah Johnson', required: true },
    { id: 'service', label: 'Service You Provided', type: 'text', placeholder: 'Website redesign', required: true },
    { id: 'result', label: 'Key Result/Outcome', type: 'text', placeholder: 'Increased conversions by 40%', required: true },
    { id: 'format', label: 'Testimonial Format', type: 'select', options: [
      { value: 'written', label: 'Written testimonial' },
      { value: 'video', label: 'Video testimonial' },
      { value: 'linkedin', label: 'LinkedIn recommendation' },
      { value: 'review', label: 'Platform review (G2, Upwork, etc)' },
    ], required: true },
  ],
  template: `📧 TESTIMONIAL REQUEST

Subject: Quick favor — 2 min testimonial?

Hi {{client_name}},

I hope you're enjoying the results from the {{service}}! It was great to see {{result}}.

I'm building out my portfolio and would love to feature your experience. Would you be open to providing a quick testimonial?

To make it super easy, you could just answer these 3 questions:
1. What problem were you facing before?
2. How did working together help?
3. What results have you seen?

If you have 2 minutes, a brief response would mean the world. (I've drafted a sample below you can edit or use as inspiration.)

Thanks so much!
[Your name]

---

📝 DRAFT TEMPLATE (for them to edit)

"Before working with [Your name], I was struggling with [problem]. They helped me [solution], and the results have been [result]. I'd highly recommend them to anyone looking to [outcome]."

---

💡 TIPS FOR GREAT TESTIMONIALS
• Make it easy: provide a draft they can edit
• Be specific: ask about specific outcomes
• Time it right: ask when results are fresh
• Follow up once if no response
• Offer to write it for their approval`,
  outputLabel: 'Your Testimonial Request',
}

export const servicePackageGenerator: GeneratorTool = {
  slug: 'service-package-generator',
  name: 'Service Package Generator',
  description: 'Create tiered service packages that sell',
  category: 'Sales',
  type: 'generator',
  seo: {
    title: 'Free Service Package Generator | Create Tiered Offerings',
    description: 'Generate professional service packages with tiered pricing. Template for freelancers and consultants.',
  },
  fields: [
    { id: 'service', label: 'Your Core Service', type: 'text', placeholder: 'AI Copywriting', required: true },
    { id: 'basic_price', label: 'Basic Package Price', type: 'text', placeholder: '$500', required: true },
    { id: 'basic_includes', label: 'Basic Package Includes', type: 'text', placeholder: '5 blog posts, basic SEO', required: true },
    { id: 'standard_price', label: 'Standard Package Price', type: 'text', placeholder: '$1000', required: true },
    { id: 'standard_includes', label: 'Standard Package Includes', type: 'text', placeholder: '10 blog posts, SEO, social clips', required: true },
    { id: 'premium_price', label: 'Premium Package Price', type: 'text', placeholder: '$2500', required: true },
    { id: 'premium_includes', label: 'Premium Package Includes', type: 'text', placeholder: '20 posts, full strategy, unlimited revisions', required: true },
  ],
  template: `🎯 {{service}} PACKAGES

---

📦 STARTER — {{basic_price}}
Perfect for: Testing the waters

Includes:
{{basic_includes}}

---

⭐ PROFESSIONAL — {{standard_price}} ← MOST POPULAR
Perfect for: Serious growth

Includes:
{{standard_includes}}

---

🚀 PREMIUM — {{premium_price}}
Perfect for: Full transformation

Includes:
{{premium_includes}}

---

💡 PRICING PSYCHOLOGY TIPS

1. **Anchor high**: Show premium first so standard looks reasonable
2. **Mark the middle**: "Most Popular" badge increases conversions 50%+
3. **Price endings**: $997 > $1000 (feels like a deal)
4. **Bundle value**: Show itemized value vs. package price
5. **Guarantee**: "100% satisfaction or full refund" reduces friction

---

📊 VALUE STACK EXAMPLE

Premium Package Value:
• 20 blog posts ($100 each = $2,000)
• Content strategy ($500 value)
• Unlimited revisions ($300 value)
• Priority support ($200 value)

**Total value: $3,000**
**Your price: {{premium_price}}**

(This shows a 40%+ discount)`,
  outputLabel: 'Your Service Packages',
}

export const contentCalendarGenerator: GeneratorTool = {
  slug: 'content-calendar-generator',
  name: 'Content Calendar Generator',
  description: 'Create a week of content ideas for your niche',
  category: 'Content Creator',
  type: 'generator',
  seo: {
    title: 'Free Content Calendar Generator | Weekly Content Plan',
    description: 'Generate a full week of content ideas for your niche. Templates for Twitter, LinkedIn, Instagram, and YouTube.',
  },
  fields: [
    { id: 'niche', label: 'Your Niche', type: 'text', placeholder: 'AI for freelancers', required: true },
    { id: 'platform', label: 'Primary Platform', type: 'select', options: [
      { value: 'twitter', label: 'Twitter/X' },
      { value: 'linkedin', label: 'LinkedIn' },
      { value: 'instagram', label: 'Instagram' },
      { value: 'youtube', label: 'YouTube' },
    ], required: true },
    { id: 'goal', label: 'Content Goal', type: 'select', options: [
      { value: 'awareness', label: 'Build awareness/followers' },
      { value: 'engagement', label: 'Increase engagement' },
      { value: 'leads', label: 'Generate leads' },
      { value: 'sales', label: 'Drive sales' },
    ], required: true },
    { id: 'offer', label: 'Your Offer (optional)', type: 'text', placeholder: 'AI automation course' },
  ],
  template: `📅 WEEKLY CONTENT CALENDAR: {{niche}}

Platform: {{platform}} | Goal: {{goal}}

---

**MONDAY — Educational**
Topic: "5 mistakes most people make with {{niche}}"
Format: Carousel / Thread
Hook: "I made all of these. Don't repeat my errors."

**TUESDAY — Personal Story**
Topic: Your journey with {{niche}}
Format: Long-form post
Hook: "3 years ago I knew nothing about {{niche}}. Now..."

**WEDNESDAY — Tactical**
Topic: Step-by-step how-to
Format: Tutorial / Guide
Hook: "Do this in the next 10 minutes and see results"

**THURSDAY — Contrarian**
Topic: Unpopular opinion about {{niche}}
Format: Short-form hot take
Hook: "Most advice about {{niche}} is wrong. Here's why:"

**FRIDAY — Results/Proof**
Topic: Client result or personal win
Format: Before/after or case study
Hook: "From [before state] to [after state] in X days"

**SATURDAY — Community/Engagement**
Topic: Ask a question or run a poll
Format: Short engagement post
Hook: "What's your biggest challenge with {{niche}}?"

**SUNDAY — Value Bomb + CTA**
Topic: Your best insight + soft pitch
Format: Thread/carousel ending with {{offer}}
Hook: "The complete guide to [outcome] with {{niche}}"

---

💡 POSTING BEST PRACTICES
• Optimal times: 8-9am, 12-1pm, 5-6pm
• Engage for 30 min after posting
• Reply to every comment
• Batch create on one day, schedule for week
• Repurpose: Twitter→LinkedIn→Newsletter`,
  outputLabel: 'Your Content Calendar',
}

export const passiveIncomeQuiz: QuizTool = {
  slug: 'passive-income-quiz',
  name: 'Passive Income Readiness Quiz',
  description: 'Find out which passive income stream matches your situation',
  category: 'Side Hustle',
  type: 'quiz',
  seo: {
    title: 'Passive Income Quiz | Find Your Best Income Stream',
    description: 'Discover which passive income model fits your skills, time, and goals. Get personalized recommendations.',
  },
  questions: [
    {
      id: 'time_upfront',
      question: 'How much time can you invest upfront to build this?',
      options: [
        { value: 'minimal', label: 'A few hours total', points: { affiliate: 3, digital: 0, course: 0 } },
        { value: 'moderate', label: 'A few hours per week for 1-2 months', points: { affiliate: 2, digital: 3, course: 1 } },
        { value: 'significant', label: '10+ hours/week for 3-6 months', points: { affiliate: 0, digital: 2, course: 3 } },
        { value: 'major', label: 'Whatever it takes, I want it right', points: { affiliate: 0, digital: 1, course: 3 } },
      ],
    },
    {
      id: 'existing_audience',
      question: 'Do you have an existing audience?',
      options: [
        { value: 'none', label: 'No audience yet', points: { affiliate: 0, digital: 2, course: 0 } },
        { value: 'small', label: 'Small following (under 1K)', points: { affiliate: 1, digital: 3, course: 1 } },
        { value: 'medium', label: 'Medium following (1K-10K)', points: { affiliate: 2, digital: 2, course: 3 } },
        { value: 'large', label: 'Large following (10K+)', points: { affiliate: 3, digital: 2, course: 3 } },
      ],
    },
    {
      id: 'expertise',
      question: 'How deep is your expertise in your niche?',
      options: [
        { value: 'beginner', label: 'Still learning', points: { affiliate: 3, digital: 1, course: 0 } },
        { value: 'intermediate', label: 'Know more than most', points: { affiliate: 2, digital: 3, course: 1 } },
        { value: 'expert', label: 'Recognized expert', points: { affiliate: 1, digital: 2, course: 3 } },
        { value: 'proven', label: 'Proven results for others', points: { affiliate: 0, digital: 2, course: 3 } },
      ],
    },
    {
      id: 'income_style',
      question: 'What type of income stream appeals to you?',
      options: [
        { value: 'low_touch', label: 'Truly passive, minimal maintenance', points: { affiliate: 3, digital: 2, course: 0 } },
        { value: 'moderate', label: 'Some ongoing work is fine', points: { affiliate: 2, digital: 3, course: 2 } },
        { value: 'high_touch', label: 'Happy to engage with customers', points: { affiliate: 0, digital: 1, course: 3 } },
        { value: 'community', label: 'Want to build a community', points: { affiliate: 0, digital: 1, course: 3 } },
      ],
    },
  ],
  results: [
    {
      id: 'affiliate',
      title: 'Affiliate Marketing',
      description: 'You\'re suited for promoting other people\'s products and earning commissions. Lower effort to start, scales with traffic.',
      recommendations: [
        'Start a review site or content hub in your niche',
        'Join affiliate programs (Amazon, PartnerStack, Impact)',
        'Focus on SEO for evergreen traffic',
        'Build an email list to promote offers',
      ],
    },
    {
      id: 'digital',
      title: 'Digital Products',
      description: 'You should create and sell digital products — templates, guides, tools. Build once, sell forever.',
      recommendations: [
        'Create Notion templates, spreadsheets, or checklists',
        'Sell on Gumroad, Lemonsqueezy, or your own site',
        'Price $9-49 for volume, or premium for smaller sales',
        'Build a product ladder: free → low-ticket → high-ticket',
      ],
    },
    {
      id: 'course',
      title: 'Online Courses',
      description: 'Your expertise + audience makes courses ideal. Higher effort but highest income ceiling.',
      recommendations: [
        'Start with a cohort-based course to validate',
        'Pre-sell before building the full course',
        'Price $200-2000 based on transformation value',
        'Add community/coaching for premium pricing',
      ],
    },
  ],
}

export const contentRoiCalculator: ScoreTool = {
  slug: 'content-roi-calculator',
  name: 'Content ROI Calculator',
  description: 'Calculate the return on investment for your content creation efforts',
  category: 'Analytics',
  type: 'score',
  seo: {
    title: 'Free Content ROI Calculator | Measure Content Performance',
    description: 'Calculate whether your content is worth the time investment. Measure views, engagement, and revenue against effort.',
  },
  inputLabel: 'Describe your content piece and results',
  inputPlaceholder: `Content: YouTube video tutorial
Time spent: 8 hours (script, filming, editing)
Views: 5,000
Subscribers gained: 150
Revenue: $50 from ads, 2 clients worth $500 each`,
  criteria: [
    { name: 'Reach', weight: 25, keywords: ['views', 'impressions', 'visitors', 'traffic', 'reach', 'followers', 'subscribers'], description: 'How many people saw your content' },
    { name: 'Engagement', weight: 25, keywords: ['comments', 'likes', 'shares', 'saves', 'replies', 'dms', 'engagement', 'interaction'], description: 'How people interacted with your content' },
    { name: 'Conversion', weight: 30, keywords: ['leads', 'emails', 'subscribers', 'clients', 'customers', 'sales', 'revenue', 'conversion'], description: 'Business outcomes generated' },
    { name: 'Efficiency', weight: 20, keywords: ['hours', 'time', 'quick', 'fast', 'efficient', 'repurposed', 'batched'], description: 'Time investment vs results' },
  ],
  tips: [
    'Track time investment accurately to calculate true ROI',
    'Consider compounding value (evergreen content keeps working)',
    'Repurposed content counts for efficiency',
    'Revenue attribution can be indirect (leads → clients)',
  ],
}

export const clientOnboardingGenerator: GeneratorTool = {
  slug: 'client-onboarding-generator',
  name: 'Client Onboarding Generator',
  description: 'Create a professional client onboarding sequence and welcome packet',
  category: 'Client Management',
  type: 'generator',
  seo: {
    title: 'Free Client Onboarding Generator | Welcome Packet Template',
    description: 'Generate a professional client onboarding sequence with welcome emails, questionnaires, and project kickoff templates.',
  },
  fields: [
    { id: 'service', label: 'Your Service', type: 'text', placeholder: 'Website Design', required: true },
    { id: 'client_name', label: 'Client Name', type: 'text', placeholder: 'Sarah', required: true },
    { id: 'project', label: 'Project Description', type: 'text', placeholder: '5-page business website', required: true },
    { id: 'timeline', label: 'Project Timeline', type: 'select', options: [
      { value: '1week', label: '1 week' },
      { value: '2weeks', label: '2 weeks' },
      { value: '1month', label: '1 month' },
      { value: '2months', label: '2+ months' },
    ], required: true },
  ],
  template: `🎉 CLIENT ONBOARDING SEQUENCE

Client: {{client_name}}
Project: {{project}}
Service: {{service}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📧 EMAIL 1: WELCOME (Send immediately)

Subject: Welcome aboard, {{client_name}}! 🎉 Here's what's next

Hi {{client_name}},

I'm so excited to work on your {{project}}!

Here's what happens next:
1. You'll receive a short questionnaire (takes ~10 min)
2. We'll schedule a kickoff call
3. I'll start working on your {{service}}

Timeline: {{timeline}}

If you have any questions, just reply to this email.

Let's make something great together!
[Your name]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 ONBOARDING QUESTIONNAIRE

1. What's the #1 goal for this {{project}}?
2. Who is your target audience?
3. What brands/competitors do you admire?
4. What's your brand voice? (professional, playful, bold?)
5. Any must-haves or dealbreakers?
6. Best way to reach you for quick questions?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📞 KICKOFF CALL AGENDA (30 min)

□ Review questionnaire answers
□ Clarify project scope and deliverables
□ Set milestone dates
□ Establish communication cadence
□ Answer any questions
□ Get excited about the project!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 PROJECT TRACKER TEMPLATE

Phase 1: Discovery (Day 1-3)
□ Questionnaire received
□ Kickoff call complete
□ Assets gathered

Phase 2: Creation (Day 4-X)
□ First draft delivered
□ Feedback received
□ Revisions complete

Phase 3: Delivery (Final days)
□ Final version approved
□ Files/access delivered
□ Testimonial requested

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 TIPS
• Respond to client messages within 24 hours
• Send progress updates even if not asked
• Under-promise, over-deliver on timeline
• Ask for testimonial while they're happy`,
  outputLabel: 'Your Onboarding Sequence',
}

// ============ PITCH & COURSE TOOLS ============

export const gigPitchScore: ScoreTool = {
  slug: 'gig-pitch-score',
  name: 'Gig Pitch Score',
  description: 'Score your freelance pitch messages for conversion likelihood',
  category: 'Freelance',
  type: 'score',
  seo: {
    title: 'Gig Pitch Score | Freelance Proposal Analyzer',
    description: 'Score your freelance pitch messages. Get feedback on personalization, value proposition, and conversion likelihood.',
  },
  inputLabel: 'Paste Your Pitch Message',
  inputPlaceholder: `Building a waitlist for an AI product? I noticed you need both the landing page and email collection integrated.

I recently built a similar waitlist page for an AI writing tool - it converted at 12% and collected 3,000 signups in the first month.

I can have a draft ready in 3 days. Would Tuesday work for a quick call to discuss?`,
  criteria: [
    {
      name: 'Opening Hook',
      weight: 20,
      keywords: ['noticed', 'saw', 'read', 'your', 'problem', 'challenge', 'goal', 'looking for', 'need'],
      description: 'First line grabs attention and shows understanding',
    },
    {
      name: 'Problem Understanding',
      weight: 25,
      keywords: ['looks like', 'sounds like', 'understand', 'your goal', 'you need', 'specifically', 'because', 'particularly'],
      description: 'Shows you understand their specific needs',
    },
    {
      name: 'Relevant Proof',
      weight: 25,
      keywords: ['similar', 'built', 'created', 'helped', 'worked on', 'portfolio', '%', 'increased', 'generated', 'saved', 'x'],
      description: 'Shows similar work or results',
    },
    {
      name: 'Clear Next Step',
      weight: 15,
      keywords: ['call', 'chat', 'discuss', 'send', 'share', 'would', 'can we', 'available', 'ready'],
      description: 'Ends with a specific call to action',
    },
    {
      name: 'Not Generic',
      weight: 15,
      keywords: ['specifically', 'your project', 'this', 'for you', 'based on'],
      description: 'Avoids copy-paste template feel',
    },
  ],
  tips: [
    'Lead with their problem, not your intro',
    'Include ONE highly relevant portfolio example',
    'Add specific results (12% conversion > "good results")',
    'Keep it under 150 words - clients skim',
    'End with a specific next step (not "let me know")',
    'Don\'t mention your rates in the first message',
  ],
}

export const courseOutlineScore: ScoreTool = {
  slug: 'course-outline-score',
  name: 'Course Outline Score',
  description: 'Score your course or workshop outline for student success likelihood',
  category: 'Digital Products',
  type: 'score',
  seo: {
    title: 'Course Outline Score | Online Course Analyzer',
    description: 'Score your course or workshop outline. Get feedback on structure, clarity, and student success likelihood.',
  },
  inputLabel: 'Paste Your Course Outline',
  inputPlaceholder: `AI Automation for Freelancers

By the end of this course, you'll have 5 working AI automations saving you 10+ hours per week.

Perfect for: Freelancers who want to scale without hiring

Module 1: Foundations (2 hours)
- How AI automation actually works
- Exercise: Set up your first automation

Module 2: Client Communication (3 hours)
- Automated follow-ups and scheduling
- Project: Build your client onboarding automation

Module 3: Capstone (4 hours)
- Build a custom automation for your business`,
  criteria: [
    {
      name: 'Clear Outcome',
      weight: 25,
      keywords: ['learn', 'master', 'build', 'create', 'understand', 'able to', 'by the end', 'you\'ll', 'walk away', 'result'],
      description: 'Students know exactly what they\'ll achieve',
    },
    {
      name: 'Logical Progression',
      weight: 20,
      keywords: ['module', 'week', 'lesson', 'chapter', 'part', 'section', 'intro', 'basics', 'fundamentals', 'advanced', 'capstone'],
      description: 'Modules build on each other logically',
    },
    {
      name: 'Practical Application',
      weight: 25,
      keywords: ['exercise', 'project', 'build', 'create', 'practice', 'hands-on', 'assignment', 'workshop', 'real-world', 'template'],
      description: 'Includes hands-on exercises or projects',
    },
    {
      name: 'Time Estimates',
      weight: 10,
      keywords: ['hour', 'hours', 'minute', 'minutes', 'week', 'day', 'total', 'duration'],
      description: 'Students know time commitment',
    },
    {
      name: 'Target Audience',
      weight: 10,
      keywords: ['for', 'perfect for', 'designed for', 'beginner', 'intermediate', 'advanced', 'prerequisite', 'who should'],
      description: 'States who it\'s for and any requirements',
    },
    {
      name: 'Unique Angle',
      weight: 10,
      keywords: ['unlike', 'different', 'unique', 'my approach', 'framework', 'system', 'method', 'proven', 'experience'],
      description: 'What makes this different from other courses',
    },
  ],
  tips: [
    'Start with the transformation: "By the end, you\'ll be able to..."',
    'Include a capstone project that uses all skills',
    'Add time estimates for each module',
    'Include "quick wins" early for motivation',
    'Make exercises progressively more challenging',
    'Define your target audience clearly',
  ],
}

// ============ BUSINESS TOOLS ============

export const invoiceScore: ScoreTool = {
  slug: 'invoice-score',
  name: 'Freelance Invoice Score',
  description: 'Rate your invoices for professionalism and on-time payment likelihood',
  category: 'Business',
  type: 'score',
  seo: {
    title: 'Freelance Invoice Score | Get Paid Faster',
    description: 'Score your invoices for professionalism and payment likelihood. Get tips to ensure clients pay on time.',
  },
  inputLabel: 'Paste Your Invoice Text',
  inputPlaceholder: `INVOICE #1234
Date: Feb 6, 2026
Due: Feb 20, 2026

Bill To:
Acme Corp
123 Main St

Services:
- Website redesign (20 hours) - $3,000
- Logo design - $500

Subtotal: $3,500
Total Due: $3,500

Payment Methods:
Bank Transfer, PayPal, Stripe

Thank you for your business!`,
  criteria: [
    {
      name: 'Clear Identification',
      weight: 20,
      keywords: ['invoice', 'number', '#', 'date', 'bill to', 'from', 'client', 'address'],
      description: 'Invoice number, date, and client details clearly shown',
    },
    {
      name: 'Due Date Specified',
      weight: 25,
      keywords: ['due', 'due date', 'payment due', 'net', 'within', 'days', 'by'],
      description: 'Clear payment deadline stated',
    },
    {
      name: 'Itemized Services',
      weight: 20,
      keywords: ['hours', 'rate', 'services', 'description', 'qty', 'quantity', 'unit', 'items'],
      description: 'Services broken down with details',
    },
    {
      name: 'Payment Options',
      weight: 15,
      keywords: ['payment', 'pay', 'bank', 'transfer', 'paypal', 'stripe', 'wire', 'check', 'credit card'],
      description: 'Multiple payment methods offered',
    },
    {
      name: 'Professional Details',
      weight: 10,
      keywords: ['total', 'subtotal', 'tax', 'thank', 'terms', 'late fee', 'contact'],
      description: 'Professional touches like totals and terms',
    },
    {
      name: 'Late Payment Terms',
      weight: 10,
      keywords: ['late', 'overdue', 'penalty', 'fee', 'interest', 'after due date'],
      description: 'Late payment consequences stated',
    },
  ],
  tips: [
    'Always include a clear due date (Net 14 or Net 30)',
    'Add late payment fees (1.5%/month is standard)',
    'Offer multiple payment methods (bank, PayPal, Stripe)',
    'Include your business name and contact info',
    'Send invoices immediately upon completion',
    'Follow up 3 days before due date as a reminder',
  ],
}

export const scopeCreepDetector: ScoreTool = {
  slug: 'scope-creep-detector',
  name: 'Scope Creep Detector',
  description: 'Analyze project specs and contracts for scope creep risk before signing',
  category: 'Business',
  type: 'score',
  seo: {
    title: 'Scope Creep Detector | Protect Your Freelance Projects',
    description: 'Analyze project specifications for scope creep risk. Identify vague requirements and missing boundaries before they cost you.',
  },
  inputLabel: 'Paste Project Description or Contract',
  inputPlaceholder: `Project: Website Redesign

The client wants a modern, professional website that "wows" visitors. Should include:
- Homepage that makes a great first impression
- Several internal pages as needed
- Mobile responsive
- "Fast and SEO-friendly"
- Unlimited revisions until happy
- Logo tweaks if needed
- Social media graphics would be nice

Budget: $2,000
Timeline: 2 weeks`,
  criteria: [
    {
      name: 'Specific Deliverables',
      weight: 25,
      keywords: ['pages', 'screens', 'features', 'deliverables', 'includes', 'scope', 'specifically', 'exactly', 'defined'],
      description: 'Deliverables are clearly defined with quantities',
    },
    {
      name: 'Revision Limits',
      weight: 20,
      keywords: ['revisions', 'rounds', 'changes', 'edits', 'feedback', 'iterations', 'final'],
      description: 'Number of revision rounds specified',
    },
    {
      name: 'Timeline Clarity',
      weight: 15,
      keywords: ['deadline', 'timeline', 'milestones', 'due date', 'delivery', 'phases', 'weeks', 'days'],
      description: 'Clear timeline with milestones',
    },
    {
      name: 'Out of Scope',
      weight: 20,
      keywords: ['not included', 'excluded', 'out of scope', 'does not include', 'separate', 'additional'],
      description: 'Explicitly states what is NOT included',
    },
    {
      name: 'Change Request Process',
      weight: 10,
      keywords: ['change request', 'additional work', 'extra', 'hourly', 'additional fee', 'outside scope'],
      description: 'Process for handling scope changes',
    },
    {
      name: 'Red Flags',
      weight: 10,
      keywords: ['unlimited', 'as needed', 'whatever', 'flexible', 'etc', 'and more', 'if needed', 'would be nice'],
      description: 'Absence of vague, open-ended language',
    },
  ],
  tips: [
    '"Unlimited revisions" = RUN (cap at 2-3 rounds)',
    '"As needed" = Define exactly what that means',
    '"Fast turnaround" = Get specific dates in writing',
    'Always list what is OUT of scope explicitly',
    'Add hourly rate for work beyond scope',
    'Get sign-off at each milestone before proceeding',
  ],
}

// ============ CONTRACT & RETAINER TOOLS ============

export const contractNegotiationScore: ScoreTool = {
  slug: 'contract-negotiation-score',
  name: 'Contract Negotiation Score',
  description: 'Evaluate your freelance contract for risks and better terms',
  category: 'Client Management',
  type: 'score',
  seo: {
    title: 'Free Contract Score | Freelance Contract Review',
    description: 'Analyze your freelance contract for red flags. Protect yourself and your work.',
  },
  inputLabel: 'Paste Your Contract Terms',
  inputPlaceholder: 'Paste key terms: payment, IP rights, cancellation, scope, timeline...',
  criteria: [
    { name: 'Payment Terms', weight: 25, keywords: ['deposit', 'upfront', '50%', 'milestone', 'net 15', 'net 30', 'late fee'], description: 'Clear payment schedule with protection' },
    { name: 'Scope Definition', weight: 20, keywords: ['scope', 'deliverables', 'includes', 'excludes', 'revisions', 'limit', 'change order'], description: 'Well-defined scope with revision limits' },
    { name: 'Kill Fee', weight: 20, keywords: ['cancellation', 'kill fee', 'termination', 'notice', 'non-refundable'], description: 'Protection if project is cancelled' },
    { name: 'IP Ownership', weight: 15, keywords: ['intellectual property', 'ownership', 'rights', 'transfer', 'upon payment', 'portfolio'], description: 'Clear IP transfer terms' },
    { name: 'Timeline', weight: 10, keywords: ['timeline', 'deadline', 'delivery', 'client materials', 'delay'], description: 'Realistic timeline with dependencies' },
    { name: 'Liability', weight: 10, keywords: ['liability', 'limited', 'cap', 'indemnify', 'maximum'], description: 'Limited liability protection' },
  ],
  tips: [
    'Always get 30-50% deposit upfront',
    'Cap revisions (e.g., 3 rounds included)',
    'Include kill fee (50% if cancelled after start)',
    'IP transfers only upon full payment',
    'Add late payment penalties (1.5%/month)',
  ],
}

export const retainerProposalGenerator: GeneratorTool = {
  slug: 'retainer-proposal-generator',
  name: 'Retainer Proposal Generator',
  description: 'Create proposals for ongoing retainer relationships',
  category: 'Sales',
  type: 'generator',
  seo: {
    title: 'Free Retainer Proposal Generator | Recurring Revenue',
    description: 'Generate retainer proposals for steady freelance income.',
  },
  fields: [
    { id: 'client_name', label: 'Client Name', type: 'text', placeholder: 'Sarah at Acme Corp', required: true },
    { id: 'service', label: 'Service', type: 'text', placeholder: 'Content writing and social media', required: true },
    { id: 'monthly_hours', label: 'Monthly Hours', type: 'text', placeholder: '20', required: true },
    { id: 'monthly_rate', label: 'Monthly Rate', type: 'text', placeholder: '$3,000', required: true },
    { id: 'includes', label: 'What\'s Included', type: 'textarea', placeholder: '8 blog posts, daily social, monthly call', required: true },
    { id: 'commitment', label: 'Minimum Commitment', type: 'select', options: [
      { value: '1', label: '1 month' },
      { value: '3', label: '3 months' },
      { value: '6', label: '6 months' },
    ], required: true },
  ],
  template: `📋 RETAINER PROPOSAL

For: {{client_name}}
Service: {{service}}

💼 MONTHLY RETAINER: {{monthly_rate}}

Hours: {{monthly_hours}}h/month
Commitment: {{commitment}} month minimum

What's Included:
{{includes}}

📊 VALUE COMPARISON

Retainer benefits:
• ~15-20% savings vs. project pricing
• Guaranteed capacity each month
• Priority turnaround (24-48h)
• Monthly strategy alignment

📋 HOW IT WORKS

1. Monthly kick-off call to plan
2. I deliver within your hour allocation
3. Slack/email, 24h response time
4. Unused hours roll over (up to 50%)
5. Additional hours at [hourly rate]

✅ NEXT STEPS

Reply to confirm interest, I'll send the agreement.

💡 TIPS:
• Offer after successful project
• Price 10-20% below project work
• Allow limited hour rollover
• Bill monthly in advance`,
  outputLabel: 'Your Retainer Proposal',
}

// ============ LEAD GEN & SALES TOOLS ============

export const leadMagnetScore: ScoreTool = {
  slug: 'lead-magnet-score',
  name: 'Lead Magnet Score',
  description: 'Rate your lead magnet for conversion and email capture effectiveness',
  category: 'Marketing',
  type: 'score',
  seo: {
    title: 'Free Lead Magnet Score | Optimize for Conversions',
    description: 'Score your lead magnet for email capture effectiveness. Get tips to improve downloads and grow your list.',
  },
  inputLabel: 'Describe Your Lead Magnet',
  inputPlaceholder: `Lead Magnet: "10 AI Prompts for Freelancers"

Landing page headline: Get 10 AI prompts that save me 5 hours every week
Description: These exact prompts helped me 3x my output without working more hours
Format: PDF download
Price: Free (email required)
Current conversion: ~8%`,
  criteria: [
    {
      name: 'Specific Promise',
      weight: 25,
      keywords: ['get', 'learn', 'discover', 'exactly', 'step-by-step', 'how to', 'templates', 'checklist', 'swipe file'],
      description: 'Clear, specific outcome promised',
    },
    {
      name: 'Urgency/Desire',
      weight: 20,
      keywords: ['now', 'today', 'instant', 'immediately', 'fast', 'quick', 'save time', 'make money', 'grow', 'scale'],
      description: 'Creates desire to get it now',
    },
    {
      name: 'Social Proof',
      weight: 15,
      keywords: ['downloads', 'subscribers', 'people', 'companies', 'used by', 'trusted', 'results', 'testimonial'],
      description: 'Evidence others have benefited',
    },
    {
      name: 'Easy Format',
      weight: 15,
      keywords: ['pdf', 'checklist', 'template', 'swipe', 'quick', 'short', 'one-page', 'cheatsheet', 'guide'],
      description: 'Format is quick to consume',
    },
    {
      name: 'Low Friction',
      weight: 15,
      keywords: ['free', 'no credit card', 'instant', 'immediately', 'email only', 'just enter'],
      description: 'Easy to get (minimal form fields)',
    },
    {
      name: 'Relevance to Offer',
      weight: 10,
      keywords: ['related', 'leads to', 'perfect for', 'if you want', 'next step', 'for those who'],
      description: 'Attracts people who would buy your paid offer',
    },
  ],
  tips: [
    'Best performing formats: checklists, templates, swipe files',
    'Name it specifically: "10 AI Prompts" > "AI Guide"',
    'Add a number: "7 Templates" > "Templates"',
    'Ask for email only (not name, company, etc.)',
    'Show download count as social proof',
    'Make it lead naturally to your paid offer',
  ],
}

export const discoveryCallGenerator: GeneratorTool = {
  slug: 'discovery-call-generator',
  name: 'Discovery Call Script Generator',
  description: 'Create a professional discovery call framework to qualify and close clients',
  category: 'Sales',
  type: 'generator',
  seo: {
    title: 'Free Discovery Call Script | Close More Clients',
    description: 'Generate a discovery call framework to qualify leads and close clients. Templates for freelancers and consultants.',
  },
  fields: [
    { id: 'service', label: 'Your Service', type: 'text', placeholder: 'AI automation consulting', required: true },
    { id: 'typical_client', label: 'Typical Client', type: 'text', placeholder: 'SaaS founders doing $1-10M ARR', required: true },
    { id: 'main_problem', label: 'Main Problem You Solve', type: 'text', placeholder: 'Manual processes eating up founder time', required: true },
    { id: 'price_range', label: 'Price Range', type: 'text', placeholder: '$3,000-10,000', required: true },
    { id: 'timeline', label: 'Typical Timeline', type: 'text', placeholder: '2-4 weeks', required: true },
  ],
  template: `📞 DISCOVERY CALL SCRIPT

Service: {{service}}
Ideal Client: {{typical_client}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 OPENING (2 min)

"Thanks for taking the time. Before we dive in, I'd love to learn more about your situation so I can see if I can actually help. Mind if I ask a few questions?"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❓ DISCOVERY QUESTIONS (15 min)

**Situation:**
"Tell me about your business — what do you do and where are you right now?"

**Problem:**
"What's the biggest challenge you're facing with {{main_problem}}?"
"How long has this been a problem?"
"What have you tried so far?"

**Impact:**
"What is this costing you? (Time, money, opportunity)"
"What would solving this mean for your business?"

**Timeline:**
"When do you want to have this solved by?"
"What happens if you don't solve it?"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 PRESENT SOLUTION (5 min)

"Based on what you've shared, here's how I typically help {{typical_client}}..."

[Explain your {{service}} approach briefly]

"Typically, we can get this done in {{timeline}} with investment of {{price_range}}."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ CLOSE (3 min)

If interested:
"Do you want me to put together a proposal?"

If hesitant:
"What questions do you have?"
"What would need to be true for this to be a yes?"

If not a fit:
"Based on what you've shared, I don't think I'm the right fit because [reason]. But I can recommend [alternative]."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 POST-CALL CHECKLIST

□ Send summary email within 2 hours
□ Include proposal if they requested one
□ Set follow-up reminder for 3 days
□ Add to CRM with notes

💡 TIPS
• Listen 70%, talk 30%
• Take notes on their exact words
• Never quote price before understanding value
• Always get a next step scheduled`,
  outputLabel: 'Your Discovery Call Script',
}

// ============ POLICY & PRICING TOOLS ============

export const clientRetainerScore: ScoreTool = {
  slug: 'client-retainer-score',
  name: 'Client Retainer Score',
  description: 'Evaluate if a client relationship is ready for a retainer agreement',
  category: 'Sales',
  type: 'score',
  seo: {
    title: 'Client Retainer Score | When to Propose Ongoing Work',
    description: 'Evaluate if a client is ready for a retainer. Score your relationship to know when to propose ongoing agreements.',
  },
  inputLabel: 'Describe Your Client Relationship',
  inputPlaceholder: 'How long have you worked together? Project history? Communication quality? Payment history? Future needs?',
  criteria: [
    { name: 'Track Record', weight: 25, keywords: ['projects', 'months', 'years', 'completed', 'successful', 'history', 'worked together'], description: 'History of successful projects together' },
    { name: 'Payment Reliability', weight: 20, keywords: ['paid', 'on time', 'reliable', 'invoices', 'no issues', 'prompt', 'quick payment'], description: 'Consistent, on-time payments' },
    { name: 'Communication Quality', weight: 20, keywords: ['responsive', 'clear', 'easy', 'communicate', 'feedback', 'collaborative', 'professional'], description: 'Good communication and collaboration' },
    { name: 'Ongoing Needs', weight: 20, keywords: ['ongoing', 'recurring', 'monthly', 'regular', 'consistent work', 'continuous', 'always'], description: 'Clear ongoing work requirements' },
    { name: 'Budget Capacity', weight: 15, keywords: ['budget', 'afford', 'invest', 'committed', 'priority', 'growth', 'scale'], description: 'Financial capacity for recurring engagement' },
  ],
  tips: [
    'Wait for 2-3 successful projects before proposing retainer',
    'Ensure they have consistent ongoing needs, not one-time work',
    'Verify payment history is reliable before committing to retainer',
    'Start with 3-month minimum term to test the arrangement',
    'Price retainer at slight discount to project rates (5-10%)',
  ],
}

export const cancellationPolicyGenerator: GeneratorTool = {
  slug: 'cancellation-policy-generator',
  name: 'Cancellation Policy Generator',
  description: 'Create professional cancellation and refund policies for freelance services',
  category: 'Business',
  type: 'generator',
  seo: {
    title: 'Cancellation Policy Generator | Freelance Refund Policy',
    description: 'Generate professional cancellation and refund policies. Protect your business while staying client-friendly.',
  },
  fields: [
    { id: 'service_type', label: 'Service Type', type: 'select', options: [
      { value: 'project', label: 'Project-based (websites, design)' },
      { value: 'retainer', label: 'Retainer/Ongoing' },
      { value: 'consulting', label: 'Consulting/Coaching calls' },
    ], required: true },
    { id: 'deposit', label: 'Deposit Amount', type: 'select', options: [
      { value: '25', label: '25%' },
      { value: '50', label: '50%' },
    ], required: true },
    { id: 'notice_period', label: 'Cancellation Notice Required', type: 'select', options: [
      { value: '7', label: '7 days' },
      { value: '14', label: '14 days' },
      { value: '30', label: '30 days' },
    ], required: true },
  ],
  template: `📋 CANCELLATION & REFUND POLICY

Service: {{service_type}} | Deposit: {{deposit}}%

**DEPOSIT:** {{deposit}}% required to secure booking and begin work.

**CANCELLATION:**
• Before work begins: Full refund minus {{deposit}}% booking fee
• After work begins: Prorated refund for uncompleted work
• Less than {{notice_period}} days notice: No refund

**RESCHEDULING:** Calls reschedule free with 24h+ notice. Less than 24h = forfeited.

**HOW TO CANCEL:** Email with name, project, and request (refund/credit/reschedule).

💡 TIP: Get signed agreement before starting. Be firm but fair.`,
  outputLabel: 'Your Cancellation Policy',
}

// ============ NEW TOOLS FEB 6 ============

export const pricingStrategyQuiz: QuizTool = {
  slug: 'pricing-strategy-quiz',
  name: 'Pricing Strategy Quiz',
  description: 'Find your optimal freelance pricing approach — hourly, project, or value-based',
  category: 'Pricing',
  type: 'quiz',
  seo: {
    title: 'Pricing Strategy Quiz | Find Your Optimal Freelance Pricing',
    description: 'Discover whether hourly, project-based, or value-based pricing is right for your freelance business.',
  },
  questions: [
    { id: 'scope', question: 'How defined are your client projects usually?', options: [
      { value: 'clear', label: 'Very clear scope, predictable work', points: { project: 3, hourly: 1, value: 2 } },
      { value: 'variable', label: 'Scope often changes or expands', points: { project: 0, hourly: 3, value: 1 } },
      { value: 'outcomes', label: 'Focused on business outcomes, flexible scope', points: { project: 1, hourly: 0, value: 3 } },
    ]},
    { id: 'speed', question: 'How fast do you work compared to peers?', options: [
      { value: 'faster', label: 'Much faster than average', points: { project: 3, hourly: 0, value: 2 } },
      { value: 'average', label: 'About average', points: { project: 1, hourly: 2, value: 1 } },
      { value: 'thorough', label: 'Slower but more thorough', points: { project: 0, hourly: 3, value: 1 } },
    ]},
    { id: 'impact', question: 'Can you measure the impact of your work?', options: [
      { value: 'direct', label: 'Yes — revenue, conversions, time saved', points: { project: 1, hourly: 0, value: 3 } },
      { value: 'indirect', label: 'Somewhat — quality improvements', points: { project: 2, hourly: 1, value: 1 } },
      { value: 'hard', label: 'Hard to measure directly', points: { project: 2, hourly: 2, value: 0 } },
    ]},
    { id: 'trust', question: 'Do clients trust your expertise?', options: [
      { value: 'expert', label: 'Yes — they hire me for results', points: { project: 1, hourly: 0, value: 3 } },
      { value: 'growing', label: 'Building reputation', points: { project: 2, hourly: 2, value: 1 } },
      { value: 'new', label: 'Still establishing credibility', points: { project: 1, hourly: 3, value: 0 } },
    ]},
  ],
  results: [
    { id: 'value', title: 'Value-Based Pricing', description: 'Price based on ROI to client, not time spent. Best for experts with measurable impact.', recommendations: ['Quote as % of expected value (10-20%)', 'Focus on business outcomes in proposals', 'Require discovery call before quoting'] },
    { id: 'project', title: 'Project-Based Pricing', description: 'Fixed price per deliverable. Good for defined scope and fast workers.', recommendations: ['Quote projects, not hours', 'Build in scope change provisions', 'Track time privately to improve estimates'] },
    { id: 'hourly', title: 'Hourly Pricing', description: 'Bill for time spent. Best for variable scope or when building reputation.', recommendations: ['Track time meticulously', 'Set minimum engagement hours', 'Plan to transition to project/value pricing as you grow'] },
  ],
}

export const clientRedFlagScore: ScoreTool = {
  slug: 'client-red-flag-score',
  name: 'Client Red Flag Score',
  description: 'Identify problematic clients before you sign the contract',
  category: 'Clients',
  type: 'score',
  seo: {
    title: 'Client Red Flag Score | Spot Bad Clients Early',
    description: 'Rate potential clients for red flags. Avoid nightmare clients before signing contracts.',
  },
  inputLabel: 'Describe the Situation',
  inputPlaceholder: 'Describe the potential client: how they found you, their communication style, what they want, budget discussions, timeline expectations, any concerns...',
  criteria: [
    { name: 'Respect for Process', weight: 25, keywords: ['rush', 'urgent', 'asap', 'yesterday', 'skip', 'just do it', 'no contract', 'handshake', 'trust'], description: 'Red flags around rushing or skipping your process' },
    { name: 'Budget Reality', weight: 25, keywords: ['cheap', 'budget', 'discount', 'exposure', 'equity', 'negotiate', 'competitor', 'cheaper', 'free'], description: 'Warning signs about unrealistic budget expectations' },
    { name: 'Scope Clarity', weight: 20, keywords: ['vague', 'unclear', 'figure out', 'you decide', 'whatever', 'simple', 'quick', 'just', 'little'], description: 'Red flags around undefined or underestimated scope' },
    { name: 'Communication Style', weight: 15, keywords: ['ghosted', 'slow', 'difficult', 'demanding', 'weekend', 'after hours', 'urgent', 'angry', 'frustrated'], description: 'Warning signs about difficult communication' },
    { name: 'Decision Authority', weight: 15, keywords: ['committee', 'approval', 'boss', 'stakeholder', 'check with', 'maybe', 'depends', 'not sure'], description: 'Red flags about unclear decision-making authority' },
  ],
  tips: [
    'Trust your gut — if something feels off, it probably is',
    'The best clients respect your process from day one',
    'Difficult discovery calls = difficult projects',
    'It costs more to fire a bad client than to pass on them',
    'Saying no to bad fits makes room for great clients',
  ],
}

// ============ CLIENT MANAGEMENT TOOLS ============

export const upsellScriptGenerator: GeneratorTool = {
  slug: 'upsell-script-generator',
  name: 'Upsell Script Generator',
  description: 'Generate natural scripts to upsell existing clients on additional services',
  category: 'Sales',
  type: 'generator',
  seo: {
    title: 'Upsell Script Generator | Increase Revenue from Existing Clients',
    description: 'Create natural upsell scripts that feel helpful, not salesy. Grow revenue from your existing client base.',
  },
  fields: [
    { id: 'current', label: 'Current Service', type: 'text', placeholder: 'Logo design, $800 project', required: true },
    { id: 'upsell', label: 'Upsell Service', type: 'text', placeholder: 'Brand guidelines package, $1,500', required: true },
    { id: 'benefit', label: 'Key Client Benefit', type: 'textarea', placeholder: 'Why this will help them specifically' },
    { id: 'timing', label: 'When to Pitch', type: 'select', options: [
      { value: 'midproject', label: 'During current project' },
      { value: 'delivery', label: 'At project delivery' },
      { value: 'followup', label: 'Post-project follow-up' },
    ], required: true },
  ],
  template: `📈 UPSELL SCRIPT

CONTEXT: You completed {{current}} and want to offer {{upsell}}

---

NATURAL CONVERSATION STARTER:

"Hey [Client], I've been thinking about your project and noticed something that might be worth discussing.

Right now you have {{current}}, which is working great. But I've seen clients get even more value when they pair this with {{upsell}}.

{{benefit}}

I wanted to mention it now because [timing-specific reason]:
• Mid-project: "We're already deep in the creative process, so adding this would be seamless"
• At delivery: "While everything is fresh, it's the perfect time to extend this foundation"  
• Follow-up: "Now that you've had time to use what we created, you can see where there are gaps"

If it's not the right time, totally understand. Just wanted you to know the option exists."

---

💡 UPSELL TIPS:
• Best time is when client is happiest (after a win)
• Position as helping them, not selling
• Make it easy to say no (removes pressure)
• Existing clients are 3x easier to sell than new ones`,
  outputLabel: 'Your Upsell Script',
}

export const projectTimelineScore: ScoreTool = {
  slug: 'project-timeline-score',
  name: 'Project Timeline Score',
  description: 'Rate how realistic and client-friendly your project timelines are',
  category: 'Project Management',
  type: 'score',
  seo: {
    title: 'Project Timeline Score | Create Realistic Estimates',
    description: 'Analyze your project timeline for realism, buffer, and client clarity. Stop underestimating.',
  },
  inputLabel: 'Describe Your Project Timeline',
  inputPlaceholder: 'Describe the project, your estimated timeline, phases, milestones, and any dependencies...',
  criteria: [
    { name: 'Buffer Time', weight: 25, keywords: ['buffer', 'contingency', 'margin', 'flexibility', 'extra', 'room', 'worst case', 'if delayed'], description: 'Includes realistic buffer for unexpected issues' },
    { name: 'Clear Milestones', weight: 20, keywords: ['milestone', 'phase', 'deliverable', 'checkpoint', 'review', 'approval', 'deadline', 'week'], description: 'Broken into clear checkpoints' },
    { name: 'Dependencies Noted', weight: 20, keywords: ['depends', 'waiting', 'client', 'feedback', 'approval', 'asset', 'content', 'before', 'after'], description: 'Identifies client dependencies that could cause delays' },
    { name: 'Revision Rounds', weight: 20, keywords: ['revision', 'round', 'feedback', 'iteration', 'change', 'adjust', 'refine', 'version'], description: 'Accounts for revision time' },
    { name: 'Communication Cadence', weight: 15, keywords: ['update', 'check-in', 'weekly', 'daily', 'status', 'call', 'meeting', 'report'], description: 'Clear communication schedule' },
  ],
  tips: [
    'Add 20-30% buffer to your realistic estimate',
    'Identify everything you need from the client upfront',
    'Include specific revision rounds (e.g., 2 rounds included)',
    'Set milestones every 1-2 weeks for longer projects',
    'Build in explicit approval gates before moving forward',
  ],
}

// ============ OUTREACH & CONTENT TOOLS ============

export const coldDmScore: ScoreTool = {
  slug: 'cold-dm-score',
  name: 'Cold DM Score',
  description: 'Rate your cold DMs for response likelihood before sending',
  category: 'Outreach',
  type: 'score',
  seo: {
    title: 'Cold DM Score | Get More Responses',
    description: 'Score your cold DMs before sending. Get feedback on hooks, personalization, and response likelihood.',
  },
  inputLabel: 'Paste Your Cold DM',
  inputPlaceholder: `Hey Sarah! Loved your thread on AI automation - the part about saving 10 hours/week really resonated.

I help creators like you turn their expertise into digital products. Just helped someone in your space launch a $15k course.

Would you be open to a quick chat about whether this could work for you?`,
  criteria: [
    { name: 'Personalized Hook', weight: 30, keywords: ['loved', 'saw', 'noticed', 'your post', 'your thread', 'your video', 'your content', 'resonated', 'impressed'], description: 'Opens with something specific about them' },
    { name: 'Relevant Value', weight: 25, keywords: ['help', 'helped', 'similar', 'like you', 'in your space', 'your niche', 'creators', 'result', '$'], description: 'Shows relevant value you can provide' },
    { name: 'Social Proof', weight: 15, keywords: ['helped', 'worked with', 'client', 'result', '$', '%', 'case study', 'example', 'testimonial'], description: 'Includes brief proof of results' },
    { name: 'Soft Ask', weight: 20, keywords: ['would you be', 'open to', 'interested', 'quick', 'brief', 'chat', 'call', 'curious if'], description: 'Low-pressure call to action' },
    { name: 'Brevity', weight: 10, keywords: [], description: 'Short and easy to read (under 100 words)' },
  ],
  tips: [
    'Lead with THEIR content, not your pitch',
    'One specific compliment > generic praise',
    'Keep it under 4-5 sentences',
    'Soft ask: "open to chatting" not "let\'s hop on a call"',
    'Don\'t attach anything or include links',
  ],
}

export const youtubeTitleScore: ScoreTool = {
  slug: 'youtube-title-score',
  name: 'YouTube Title Score',
  description: 'Rate your YouTube titles for click-through potential',
  category: 'Content Creator',
  type: 'score',
  seo: {
    title: 'YouTube Title Score | Get More Clicks',
    description: 'Score your YouTube titles for CTR potential. Get feedback on hooks, curiosity gaps, and searchability.',
  },
  inputLabel: 'Paste Your YouTube Title(s)',
  inputPlaceholder: `Option 1: I Made $10,000 in 30 Days Using AI (Here's How)
Option 2: How to Make Money with AI in 2026
Option 3: The AI Side Hustle That Changed My Life`,
  criteria: [
    { name: 'Curiosity Gap', weight: 25, keywords: ['how', 'why', 'what', 'secret', 'truth', 'actually', 'really', 'revealed', 'nobody tells you', 'here\'s'], description: 'Creates curiosity that demands a click' },
    { name: 'Specific Numbers', weight: 25, keywords: ['$', '%', '1', '2', '3', '4', '5', '7', '10', '30', '100', 'days', 'hours', 'minutes', 'steps'], description: 'Includes specific numbers or timeframes' },
    { name: 'Emotional Hook', weight: 20, keywords: ['changed', 'transformed', 'mistake', 'regret', 'wish', 'finally', 'stopped', 'quit', 'best', 'worst'], description: 'Triggers emotional response' },
    { name: 'Clear Topic', weight: 15, keywords: ['ai', 'money', 'business', 'tutorial', 'guide', 'review', 'vs', 'how to', 'what is'], description: 'Viewer knows what the video is about' },
    { name: 'Length', weight: 15, keywords: [], description: 'Optimal length (40-60 characters)' },
  ],
  tips: [
    'Front-load the hook (first 3-4 words matter most)',
    'Use numbers: "$10k" > "money"',
    'Create curiosity: "Here\'s How" makes people click',
    'Test with/without "I" - personal can boost or hurt CTR',
    'Keep under 60 characters (gets cut off on mobile)',
  ],
}

export const clientExpectationScore: ScoreTool = {
  slug: 'client-expectation-score',
  name: 'Client Expectation Score',
  description: 'Rate your project proposal for clear expectation-setting',
  category: 'Client Management',
  type: 'score',
  seo: {
    title: 'Client Expectation Score | Prevent Scope Creep',
    description: 'Score your proposal for clear expectations. Prevent misunderstandings before they happen.',
  },
  inputLabel: 'Paste Your Project Proposal/SOW',
  inputPlaceholder: `Project: Website Redesign
Duration: 4 weeks
Price: $3,500

Deliverables:
- New homepage design (1 revision round)
- 5 inner page templates
- Mobile responsive
- Basic SEO setup

NOT included:
- Content writing
- Stock photos
- Ongoing maintenance
- Additional revision rounds ($150/hour)

Payment: 50% upfront, 50% on delivery`,
  criteria: [
    { name: 'Specific Deliverables', weight: 25, keywords: ['deliverable', 'include', 'provide', 'deliver', 'create', 'design', 'build', 'pages', 'revision'], description: 'Lists exactly what client gets' },
    { name: 'Clear Exclusions', weight: 25, keywords: ['not include', 'exclud', 'outside', 'additional', 'extra', 'not part of', 'separate'], description: 'States what is NOT included' },
    { name: 'Timeline/Milestones', weight: 20, keywords: ['week', 'day', 'phase', 'milestone', 'deadline', 'delivery', 'timeline', 'schedule'], description: 'Clear timing expectations' },
    { name: 'Payment Terms', weight: 15, keywords: ['payment', 'deposit', 'upfront', 'invoice', 'due', '%', 'milestone', 'final'], description: 'When and how payment works' },
    { name: 'Revision Policy', weight: 15, keywords: ['revision', 'change', 'edit', 'round', 'feedback', 'additional', 'hour'], description: 'How changes are handled' },
  ],
  tips: [
    'Always list what\'s NOT included (prevents scope creep)',
    'Define revision rounds upfront with pricing for extras',
    'Break timeline into milestones for client visibility',
    'Get payment terms in writing before starting',
    'Include what happens if they ghost (kill fee)',
  ],
}

export const passiveIncomeCalculator: ScoreTool = {
  slug: 'passive-income-calculator',
  name: 'Passive Income Portfolio Score',
  description: 'Evaluate your passive income strategy for stability and growth',
  category: 'Business Strategy',
  type: 'score',
  seo: {
    title: 'Passive Income Calculator | Build Recurring Revenue',
    description: 'Score your passive income portfolio. Find gaps and opportunities to build more stable revenue.',
  },
  inputLabel: 'Describe Your Passive Income Sources',
  inputPlaceholder: `Current passive income streams:

1. Digital products on Gumroad - $400/month
   - Notion template pack ($29)
   - Prompt collection ($19)
   
2. Affiliate marketing - $200/month
   - Software tools reviews
   - YouTube description links

3. Course on Teachable - $300/month
   - Self-paced AI course ($99)
   - Last updated 6 months ago

Total: ~$900/month passive
Goal: $3,000/month by end of year`,
  criteria: [
    { name: 'Diversification', weight: 25, keywords: ['gumroad', 'teachable', 'udemy', 'amazon', 'affiliate', 'course', 'template', 'ebook', 'membership', 'saas'], description: 'Multiple income sources, not dependent on one' },
    { name: 'Recurring vs One-time', weight: 25, keywords: ['recurring', 'subscription', 'membership', 'monthly', 'annual', 'saas', 'retainer'], description: 'Includes subscription/recurring revenue' },
    { name: 'Scalability', weight: 20, keywords: ['scale', 'automat', 'digital', 'unlimited', 'no cap', 'leverage', 'platform'], description: 'Can grow without proportional time increase' },
    { name: 'Maintenance Level', weight: 15, keywords: ['update', 'maintain', 'evergreen', 'current', 'refresh', 'support'], description: 'Low ongoing maintenance required' },
    { name: 'Clear Metrics', weight: 15, keywords: ['$', 'month', 'year', 'revenue', 'income', 'profit', 'conversion', '%'], description: 'Tracks numbers and knows what works' },
  ],
  tips: [
    'Build at least 3 income streams (platform risk)',
    'Prioritize recurring over one-time (subscriptions, memberships)',
    'Create evergreen products that don\'t need constant updates',
    'Know your numbers: CAC, LTV, conversion rates',
    'Reinvest profits into traffic/marketing, not more products',
  ],
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
  socialMediaProfileScore,
  landingPageScore,
  testimonialRequestGenerator,
  servicePackageGenerator,
  contentCalendarGenerator,
  passiveIncomeQuiz,
  contentRoiCalculator,
  clientOnboardingGenerator,
  gigPitchScore,
  courseOutlineScore,
  invoiceScore,
  scopeCreepDetector,
  contractNegotiationScore,
  retainerProposalGenerator,
  leadMagnetScore,
  discoveryCallGenerator,
  clientRetainerScore,
  cancellationPolicyGenerator,
  pricingStrategyQuiz,
  clientRedFlagScore,
  upsellScriptGenerator,
  projectTimelineScore,
  coldDmScore,
  youtubeTitleScore,
  clientExpectationScore,
  passiveIncomeCalculator,
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
