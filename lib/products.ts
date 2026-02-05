// Digital product configurations for GigWithAI
// Products auto-generate pages from this config

export interface Product {
  slug: string
  name: string
  description: string
  longDescription: string
  price: number // in cents
  category: 'prompt-pack' | 'cheat-sheet' | 'template-bundle'
  features: string[]
  includes: string[]
  seo: {
    title: string
    description: string
  }
  stripePriceId?: string
}

export const products: Product[] = [
  // PROMPT PACKS
  {
    slug: 'side-hustle-prompt-pack',
    name: 'AI Side Hustle Prompt Pack',
    description: '50 prompts to launch and scale your side business',
    longDescription: 'From idea validation to your first paying client. These prompts guide you through every stage of building a profitable side hustle with AI.',
    price: 1200,
    category: 'prompt-pack',
    features: [
      'Business idea validation',
      'Service packaging & pricing',
      'Client acquisition prompts',
      'Content creation automation',
      'Scaling strategies'
    ],
    includes: [
      '10 Idea validation prompts',
      '10 Service design prompts',
      '10 Client outreach prompts',
      '10 Content creation prompts',
      '10 Growth & scaling prompts'
    ],
    seo: {
      title: 'AI Side Hustle Prompt Pack - Build Your Business',
      description: '50 prompts to start and grow your AI-powered side hustle. Idea validation, pricing, client acquisition, and scaling.'
    }
  },
  {
    slug: 'freelance-business-prompts',
    name: 'Freelance Business Prompt Pack',
    description: '50 prompts for serious freelancers',
    longDescription: 'Level up from gig worker to business owner. These prompts help you systematize, price, and scale your freelance practice.',
    price: 900,
    category: 'prompt-pack',
    features: [
      'Proposal writing automation',
      'Rate calculation formulas',
      'Client communication templates',
      'Project scoping guides',
      'Contract & negotiation help'
    ],
    includes: [
      '15 Proposal & pitch prompts',
      '10 Pricing strategy prompts',
      '10 Client communication prompts',
      '10 Project management prompts',
      '5 Contract & legal prompts'
    ],
    seo: {
      title: 'Freelance Business AI Prompts - Scale Your Practice',
      description: 'AI prompts for professional freelancers. Proposals, pricing, client communication, and business growth.'
    }
  },
  {
    slug: 'ai-business-builder-prompts',
    name: 'AI Business Builder Prompt Pack',
    description: '50 prompts to build AI-powered services',
    longDescription: 'Turn AI tools into income streams. These prompts help you identify opportunities, package services, and market AI-powered offerings.',
    price: 1500,
    category: 'prompt-pack',
    features: [
      'AI service opportunity mapping',
      'Service productization',
      'Workflow automation design',
      'AI tool selection guides',
      'Client education scripts'
    ],
    includes: [
      '10 Market research prompts',
      '10 Service design prompts',
      '15 Marketing prompts',
      '10 Delivery automation prompts',
      '5 Upselling prompts'
    ],
    seo: {
      title: 'AI Business Builder Prompts - Turn AI Into Income',
      description: 'Build profitable AI services. Market research, service design, and marketing prompts for AI entrepreneurs.'
    }
  },
  {
    slug: 'content-creator-prompts',
    name: 'Content Creator Prompt Pack',
    description: '50 prompts for profitable content creation',
    longDescription: 'Create content that converts. Blog posts, social media, newsletters, and more - all optimized for engagement and revenue.',
    price: 900,
    category: 'prompt-pack',
    features: [
      'Blog post frameworks',
      'Social media content batching',
      'Newsletter templates',
      'SEO optimization',
      'Repurposing strategies'
    ],
    includes: [
      '15 Blog writing prompts',
      '15 Social media prompts',
      '10 Newsletter prompts',
      '5 SEO optimization prompts',
      '5 Content repurposing prompts'
    ],
    seo: {
      title: 'Content Creator AI Prompts - Write Faster, Earn More',
      description: 'AI prompts for content creators. Blog posts, social media, newsletters, and SEO optimization.'
    }
  },
  // CHEAT SHEETS
  {
    slug: 'freelance-client-acquisition',
    name: 'Freelance Client Acquisition Cheat Sheet',
    description: 'Land clients without cold pitching',
    longDescription: 'Inbound strategies that bring clients to you. Build authority, optimize your profiles, and create content that converts.',
    price: 900,
    category: 'cheat-sheet',
    features: [
      'Profile optimization scripts',
      'Portfolio presentation tips',
      'Inbound content strategies',
      'Referral system templates',
      'Pricing psychology'
    ],
    includes: [
      'LinkedIn optimization checklist',
      'Portfolio page framework',
      '30 content ideas that attract clients',
      'Referral request scripts',
      'Pricing tier templates'
    ],
    seo: {
      title: 'Client Acquisition Cheat Sheet - Freelance Marketing',
      description: 'Attract freelance clients without cold pitching. Profile optimization, content strategies, and referral systems.'
    }
  },
  {
    slug: 'ai-tools-comparison',
    name: 'AI Tools Comparison Cheat Sheet',
    description: 'Pick the right AI tool for every task',
    longDescription: 'Stop wasting time testing tools. This guide compares 50+ AI tools across categories so you can choose the best one fast.',
    price: 700,
    category: 'cheat-sheet',
    features: [
      'Writing AI comparison',
      'Image generation comparison',
      'Automation tool rankings',
      'Pricing breakdowns',
      'Use case recommendations'
    ],
    includes: [
      'Writing AI: ChatGPT vs Claude vs Gemini',
      'Image AI: DALL-E vs Midjourney vs Stable Diffusion',
      'Video AI tool rankings',
      'Automation: Zapier vs Make vs n8n',
      'Best free tier tools list'
    ],
    seo: {
      title: 'AI Tools Comparison Guide - Pick the Right Tool',
      description: 'Compare 50+ AI tools. Writing, image, video, and automation tools ranked with pricing and use cases.'
    }
  },
  {
    slug: 'side-hustle-idea-finder',
    name: 'Side Hustle Idea Finder Cheat Sheet',
    description: 'Find your perfect AI side hustle match',
    longDescription: 'Based on your skills, time, and income goals, find the side hustle that fits. Includes 50+ validated ideas with earning potential.',
    price: 700,
    category: 'cheat-sheet',
    features: [
      'Skills assessment framework',
      'Time investment calculator',
      'Income potential rankings',
      'Startup cost breakdowns',
      'Competition analysis'
    ],
    includes: [
      '50+ side hustle ideas',
      'Skills-to-hustle matching guide',
      'Time-to-income projections',
      'Startup requirements checklist',
      'Month 1 action plans'
    ],
    seo: {
      title: 'AI Side Hustle Ideas - Find Your Perfect Match',
      description: '50+ AI side hustle ideas matched to your skills and goals. Earning potential, time investment, and startup costs.'
    }
  },
  {
    slug: 'passive-income-automation',
    name: 'Passive Income Automation Cheat Sheet',
    description: 'Build income that works while you sleep',
    longDescription: 'Systems and automations for passive revenue streams. Digital products, affiliate marketing, and content monetization on autopilot.',
    price: 1200,
    category: 'cheat-sheet',
    features: [
      'Digital product creation',
      'Affiliate marketing setup',
      'Email automation sequences',
      'Content monetization',
      'Payment automation'
    ],
    includes: [
      'Digital product templates (ebook, course, template)',
      'Affiliate program checklist',
      '5 email automation sequences',
      'Ad revenue optimization guide',
      'Payment & delivery automation setup'
    ],
    seo: {
      title: 'Passive Income Automation - Build Income on Autopilot',
      description: 'Automate your income streams. Digital products, affiliate marketing, and content monetization systems.'
    }
  }
]

export function getProduct(slug: string): Product | undefined {
  return products.find(p => p.slug === slug)
}

export function getProductsByCategory(category: Product['category']): Product[] {
  return products.filter(p => p.category === category)
}
