import Link from 'next/link'

export const metadata = {
  title: 'AI Prompts for Freelancers & Gig Workers | GigWithAI',
  description: 'Copy-paste AI prompts to win more clients, write better proposals, optimize your gig work, and earn more. Free prompt library for freelancers.',
}

const promptCategories = [
  {
    title: 'Client Outreach',
    prompts: [
      { name: 'Cold Outreach Message', prompt: 'Write a friendly, professional outreach message to a potential client who needs [SERVICE]. Mention my experience in [SKILL] and suggest a quick call. Keep it under 100 words.' },
      { name: 'Follow-Up Email', prompt: "Write a polite follow-up email to a client who hasn't responded in 5 days. Reference my previous message about [PROJECT] and offer additional value without being pushy." },
    ],
  },
  {
    title: 'Proposals & Pitches',
    prompts: [
      { name: 'Upwork Proposal', prompt: 'Write a winning Upwork proposal for this job: [PASTE JOB DESCRIPTION]. Highlight relevant experience, propose a clear approach, and end with a question to start conversation.' },
      { name: 'Project Quote', prompt: 'Help me write a professional project quote for [PROJECT TYPE]. Include scope, timeline, deliverables, and pricing. Client budget is around [AMOUNT].' },
    ],
  },
  {
    title: 'Gig Economy Optimization',
    prompts: [
      { name: 'Route Planning', prompt: "I'm a [UBER/DOORDASH/INSTACART] driver in [CITY]. Analyze the best times and areas to maximize earnings based on typical demand patterns." },
      { name: 'Earnings Analysis', prompt: 'Review my gig work earnings: [PASTE DATA]. Identify patterns, suggest improvements, and calculate my true hourly rate after expenses.' },
    ],
  },
  {
    title: 'Pricing & Negotiation',
    prompts: [
      { name: 'Rate Increase Email', prompt: "Write an email to my long-term client explaining a rate increase from [OLD RATE] to [NEW RATE]. I've been working with them for [TIME] and want to maintain the relationship." },
      { name: 'Scope Creep Response', prompt: 'A client is asking for additional work outside our agreement. Help me write a professional response that addresses the request while protecting my time and suggesting fair compensation.' },
    ],
  },
]

export default function PromptsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link href="/" className="text-purple-600 hover:text-purple-700 mb-8 inline-block">← Back to Home</Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Prompts for Freelancers & Gig Workers</h1>
        <p className="text-xl text-gray-600 mb-12">Copy-paste prompts to win more clients, write better proposals, and earn more.</p>
        {promptCategories.map((category) => (
          <section key={category.title} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.title}</h2>
            <div className="space-y-6">
              {category.prompts.map((item) => (
                <div key={item.name} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-3">{item.name}</h3>
                  <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm text-gray-700">{item.prompt}</div>
                </div>
              ))}
            </div>
          </section>
        ))}
        <section className="bg-purple-100 rounded-xl p-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Get 50+ More Prompts</h2>
          <p className="text-gray-700 mb-6">Join our newsletter for exclusive AI prompts, side hustle ideas, and income strategies.</p>
          <Link href="/guides" className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-block">Browse Guides</Link>
        </section>
      </div>
    </div>
  )
}
