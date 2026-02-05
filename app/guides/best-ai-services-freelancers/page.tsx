import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import EmailSignup from '@/components/EmailSignup'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '12 AI Services You Can Sell as a Freelancer in 2026 | GigWithAI',
  description: 'High-demand AI services that businesses will pay for. No coding required. Start selling this week.',
  keywords: ['ai services', 'ai freelancing', 'sell ai services', 'ai consulting', 'chatgpt services', 'ai services for businesses'],
  openGraph: {
    title: '12 AI Services You Can Sell as a Freelancer in 2026',
    description: 'High-demand AI services that businesses will pay for. No coding required. Start selling this week.',
    type: 'article',
    url: 'https://gigwithai.com/guides/best-ai-services-freelancers',
  },
  twitter: {
    card: 'summary_large_image',
    title: '12 AI Services You Can Sell as a Freelancer',
    description: 'High-demand AI services businesses need. No coding required.',
  },
}

const services = [
  {
    number: 1,
    name: 'Custom GPT Creation',
    description: 'Building custom ChatGPT bots for specific business use cases',
    examples: ['Sales script generator with company knowledge', 'Customer FAQ bot trained on their docs', 'Employee onboarding assistant', 'Content brief generator'],
    skills: ['ChatGPT custom GPT builder', 'Prompt engineering', 'Understanding business workflows'],
    price: '$500-2,500 per GPT',
    clients: 'Agencies, SaaS companies, service businesses',
  },
  {
    number: 2,
    name: 'AI Content Systems',
    description: 'Setting up workflows for AI-assisted content creation',
    examples: ['Blog post pipeline (research → outline → draft → edit)', 'Social media content calendar automation', 'Email newsletter system', 'Product description generator'],
    skills: ['ChatGPT/Claude for content', 'Zapier or Make for automation', 'Basic SEO understanding'],
    price: '$1,500-5,000 setup + $500-1,500/month retainer',
    clients: 'Marketing agencies, e-commerce, content-heavy businesses',
  },
  {
    number: 3,
    name: 'AI-Powered Lead Research',
    description: 'Using AI to research and qualify leads for sales teams',
    examples: ['Company research reports', 'Decision-maker identification', 'Personalized outreach drafts', 'Lead scoring and prioritization'],
    skills: ['Claude for research', 'LinkedIn and data tools', 'Sales process basics'],
    price: '$50-200 per lead list or $2,000-5,000/month retainer',
    clients: 'B2B companies, recruiters, sales agencies',
  },
  {
    number: 4,
    name: 'AI Customer Support Setup',
    description: 'Implementing AI chatbots and support automation',
    examples: ['Website chatbot implementation', 'Email auto-responses', 'FAQ knowledge base creation', 'Ticket routing automation'],
    skills: ['Chatbot platforms (Intercom, Drift, Chatbase)', 'ChatGPT API basics', 'Customer service workflows'],
    price: '$2,000-10,000 setup + ongoing support',
    clients: 'E-commerce, SaaS, service businesses',
  },
  {
    number: 5,
    name: 'AI Meeting Assistant Services',
    description: 'Setting up AI-powered meeting transcription and action items',
    examples: ['Otter.ai or Fireflies setup', 'Custom summary templates', 'CRM integration for meeting notes', 'Action item tracking'],
    skills: ['Meeting AI tools', 'Zapier/Make integrations', 'Business workflows'],
    price: '$500-1,500 setup',
    clients: 'Consultants, agencies, any meeting-heavy business',
  },
  {
    number: 6,
    name: 'AI-Enhanced Copywriting',
    description: 'Writing copy using AI as your superpower (not replacement)',
    examples: ['Website copy', 'Ad copy and variations', 'Email sequences', 'Sales pages'],
    skills: ['Copywriting fundamentals', 'ChatGPT/Claude for drafting', 'Editing and human touch'],
    price: 'Premium over standard copywriting (20-50% more)',
    clients: 'Same as traditional copywriting, but position as faster/better',
  },
  {
    number: 7,
    name: 'AI Process Audits',
    description: 'Analyzing business processes and recommending AI solutions',
    examples: ['Workflow analysis', 'Tool recommendations', 'ROI projections', 'Implementation roadmap'],
    skills: ['Business process understanding', 'Wide knowledge of AI tools', 'Consulting skills'],
    price: '$2,000-10,000 per audit',
    clients: 'SMBs, executives, operations managers',
  },
  {
    number: 8,
    name: 'AI-Powered Data Analysis',
    description: 'Using AI to analyze data and generate insights',
    examples: ['Customer feedback analysis', 'Survey processing', 'Competitive research', 'Market trend analysis'],
    skills: ['Claude for analysis', 'Basic data handling (CSV, spreadsheets)', 'Business context'],
    price: '$500-3,000 per analysis project',
    clients: 'Marketing teams, product teams, consultants',
  },
  {
    number: 9,
    name: 'AI Training & Workshops',
    description: 'Teaching teams how to use AI tools effectively',
    examples: ['ChatGPT prompt engineering workshops', 'AI tool adoption training', 'Custom workflow training', 'Ongoing coaching'],
    skills: ['Deep AI tool expertise', 'Teaching/facilitation skills', 'Creating training materials'],
    price: '$500-2,000 per workshop, $200-500/hour for coaching',
    clients: 'Corporate teams, agencies, startups',
  },
  {
    number: 10,
    name: 'AI-Assisted Bookkeeping',
    description: 'Using AI to speed up bookkeeping and financial tasks',
    examples: ['Receipt categorization', 'Expense report processing', 'Invoice matching', 'Financial summary generation'],
    skills: ['Bookkeeping basics', 'AI tools for finance', 'Accounting software (QuickBooks, Xero)'],
    price: '$500-2,000/month',
    clients: 'Small businesses, freelancers, startups',
  },
  {
    number: 11,
    name: 'AI Image Generation Services',
    description: 'Creating custom images using AI for business needs',
    examples: ['Social media graphics', 'Product mockups', 'Marketing visuals', 'Custom illustrations'],
    skills: ['Midjourney, DALL-E, or similar', 'Prompt crafting for images', 'Basic design sense'],
    price: '$50-500 per image set',
    clients: 'Marketing teams, content creators, e-commerce',
  },
  {
    number: 12,
    name: 'AI Video Script Writing',
    description: 'Writing video scripts optimized for AI voiceover and editing',
    examples: ['YouTube scripts', 'Course content', 'Training videos', 'Marketing videos'],
    skills: ['Script structure', 'AI video tools (Pictory, Synthesia)', 'Engagement techniques'],
    price: '$200-1,000 per script',
    clients: 'YouTubers, course creators, corporate trainers',
  },
]

export default function BestAIServicesFreelancers() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link 
          href="/guides" 
          className="text-sm text-gray-500 hover:text-white transition mb-8 inline-block"
        >
          ← Back to Guides
        </Link>

        <article>
          <p className="text-violet-400 text-sm font-mono uppercase tracking-wider mb-4">
            Services Guide • Updated 2026
          </p>
          <h1 className="text-4xl font-bold mb-6">
            12 AI Services You Can Sell as a Freelancer in 2026
          </h1>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Businesses are desperate for AI help but don&apos;t know who to hire. They&apos;re not looking 
            for AI engineers — they&apos;re looking for people who understand AI tools and can apply them. 
            Here are 12 services you can offer today, with no coding required.
          </p>

          {/* Table of Contents */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-12">
            <h2 className="font-bold mb-4 text-lg">The 12 Services</h2>
            <ul className="grid sm:grid-cols-2 gap-2 text-sm text-gray-400">
              {services.map((service) => (
                <li key={service.number}>→ {service.name}</li>
              ))}
            </ul>
          </div>

          {/* Services List */}
          <section className="mb-12">
            <div className="space-y-8">
              {services.map((service) => (
                <div key={service.number} className="border border-white/10 rounded-lg p-6 hover:border-violet-500/30 transition">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h2 className="text-xl font-bold">
                      <span className="text-violet-400">{service.number}.</span> {service.name}
                    </h2>
                    <p className="text-emerald-400 font-mono text-sm shrink-0">{service.price}</p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4">{service.description}</p>

                  {/* Examples */}
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Examples</h3>
                    <ul className="text-gray-400 text-sm space-y-1">
                      {service.examples.map((example, i) => (
                        <li key={i}>• {example}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">What You Need to Know</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.skills.map((skill, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-violet-500/10 text-violet-300 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded p-3">
                      <span className="text-xs text-gray-500 uppercase">Pricing</span>
                      <p className="font-semibold text-emerald-400">{service.price}</p>
                    </div>
                    <div className="bg-white/5 rounded p-3">
                      <span className="text-xs text-gray-500 uppercase">Where to Find Clients</span>
                      <p className="text-gray-300 text-sm">{service.clients}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Email Signup */}
          <EmailSignup 
            headline="Get the AI Services Pricing Guide" 
            buttonText="Get Free Guide"
          />

          {/* How to Choose */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">How to Choose Your Service</h2>
            <p className="text-gray-300 mb-6">Pick based on:</p>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h3 className="font-semibold mb-1">Your existing skills</h3>
                  <p className="text-gray-400 text-sm">What do you already know? Build on your strengths.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h3 className="font-semibold mb-1">Market demand</h3>
                  <p className="text-gray-400 text-sm">Who&apos;s buying this in your network? Where&apos;s the demand?</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h3 className="font-semibold mb-1">Profit margin</h3>
                  <p className="text-gray-400 text-sm">Can you make good money? Higher-value services = better margins.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center font-bold text-sm">4</div>
                <div>
                  <h3 className="font-semibold mb-1">Enjoyment</h3>
                  <p className="text-gray-400 text-sm">Will you stick with it? Pick something you won&apos;t dread doing.</p>
                </div>
              </div>
            </div>

            <div className="bg-violet-600/10 border border-violet-500/30 rounded-lg p-6 mt-6">
              <p className="text-gray-200">
                <strong className="text-white">Key insight:</strong> Start with ONE. Master it. Then expand. 
                Trying to offer everything at once means you&apos;ll be mediocre at everything.
              </p>
            </div>
          </section>

          {/* Getting Started */}
          <section className="bg-white/5 border border-white/10 rounded-lg p-6 mb-12">
            <h2 className="text-xl font-bold mb-4">Getting Started This Week</h2>
            <ol className="space-y-3 text-gray-300">
              <li className="flex gap-3">
                <span className="text-violet-400 font-bold">1.</span>
                <span><strong>Pick one service</strong> from this list</span>
              </li>
              <li className="flex gap-3">
                <span className="text-violet-400 font-bold">2.</span>
                <span><strong>Spend 5 hours</strong> learning the tools deeply</span>
              </li>
              <li className="flex gap-3">
                <span className="text-violet-400 font-bold">3.</span>
                <span><strong>Create a simple offer</strong> (one page explaining what you do)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-violet-400 font-bold">4.</span>
                <span><strong>Tell 10 people</strong> in your network what you&apos;re offering</span>
              </li>
              <li className="flex gap-3">
                <span className="text-violet-400 font-bold">5.</span>
                <span><strong>Post about it</strong> on LinkedIn</span>
              </li>
            </ol>
            <p className="text-white font-semibold mt-6">
              Your first client is closer than you think.
            </p>
          </section>

          {/* Quick Reference */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Quick Reference: Service by Difficulty</h2>
            
            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-emerald-400 font-semibold mb-2">🟢 Beginner-Friendly (Start Here)</p>
                <p className="text-gray-400 text-sm">Custom GPT Creation, AI-Enhanced Copywriting, AI Meeting Assistant, AI Image Generation</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-yellow-400 font-semibold mb-2">🟡 Intermediate (Some Experience Needed)</p>
                <p className="text-gray-400 text-sm">AI Content Systems, AI-Powered Lead Research, AI Customer Support, AI Training & Workshops</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-violet-400 font-semibold mb-2">🟣 Highest Income Potential</p>
                <p className="text-gray-400 text-sm">AI Process Audits, AI Customer Support Setup, AI Content Systems (retainer), AI Training</p>
              </div>
            </div>
          </section>

          {/* Related Guides */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Continue Learning</h2>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/guides/start-ai-agency-2026"
                className="text-violet-400 hover:text-violet-300 underline"
              >
                How to Start an AI Agency →
              </Link>
              <Link 
                href="/guides/pricing-ai-services"
                className="text-violet-400 hover:text-violet-300 underline"
              >
                How to Price AI Services →
              </Link>
              <Link 
                href="/guides/first-1000-with-ai"
                className="text-violet-400 hover:text-violet-300 underline"
              >
                Make Your First $1,000 with AI →
              </Link>
            </div>
          </section>

          <RelatedGuides guides={[
            {
              slug: 'start-ai-agency-2026',
              title: 'Start an AI Agency in 2026',
              description: 'Complete playbook from zero to first client.'
            },
            {
              slug: 'sell-chatgpt-services',
              title: 'Sell ChatGPT Services',
              description: 'How to sell ChatGPT services to businesses.'
            },
            {
              slug: 'chatgpt-for-freelancers',
              title: 'ChatGPT for Freelancers',
              description: 'Use ChatGPT to 10x your freelance output.'
            }
          ]} />
        </article>
    </div>
  )
}
