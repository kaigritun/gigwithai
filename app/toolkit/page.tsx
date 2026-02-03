'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ToolkitPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [showContent, setShowContent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('https://buttondown.com/api/emails/embed-subscribe/gigwithai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `email=${encodeURIComponent(email)}`,
      });
      
      if (response.ok) {
        setStatus('success');
        setShowContent(true);
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Nav */}
      <nav className="border-b border-white/10 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-violet-400">
            GigWithAI
          </Link>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/guides" className="hover:text-white transition">Guides</Link>
            <Link href="/tools" className="hover:text-white transition">Tools</Link>
          </div>
        </div>
      </nav>

      <article className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <p className="text-violet-400 text-sm font-mono uppercase tracking-wider mb-4">
            Free Download
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            The AI Freelancer Toolkit
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Everything you need to start earning with AI skills—service packages, pricing guides, client scripts, contracts, and more.
          </p>

          {!showContent ? (
            <>
              {/* What's Inside */}
              <div className="border border-white/10 rounded-lg p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">What's Inside</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex gap-3">
                    <span className="text-violet-400 text-xl">📦</span>
                    <div>
                      <h3 className="font-semibold mb-1">5 Service Packages</h3>
                      <p className="text-gray-400 text-sm">Ready-to-offer AI services with pricing and pitches</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-violet-400 text-xl">👥</span>
                    <div>
                      <h3 className="font-semibold mb-1">Client Finding Guide</h3>
                      <p className="text-gray-400 text-sm">Where to find clients + outreach scripts</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-violet-400 text-xl">💬</span>
                    <div>
                      <h3 className="font-semibold mb-1">Essential Prompts</h3>
                      <p className="text-gray-400 text-sm">Templates for proposals, follow-ups, delivery</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-violet-400 text-xl">🛠️</span>
                    <div>
                      <h3 className="font-semibold mb-1">Tools Stack</h3>
                      <p className="text-gray-400 text-sm">Best tools organized by cost and purpose</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-violet-400 text-xl">📝</span>
                    <div>
                      <h3 className="font-semibold mb-1">Contract Template</h3>
                      <p className="text-gray-400 text-sm">Protect yourself with a simple agreement</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-violet-400 text-xl">📈</span>
                    <div>
                      <h3 className="font-semibold mb-1">Scaling Roadmap</h3>
                      <p className="text-gray-400 text-sm">Path to $5K/month with retainer model</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email Capture */}
              <div className="bg-violet-900/20 border border-violet-800 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-2">Get the Toolkit Free</h2>
                <p className="text-gray-400 mb-6">Enter your email and get instant access. Plus weekly AI income tips.</p>
                
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="flex-1 px-4 py-3 border border-violet-700 rounded-lg bg-violet-900/30 text-white placeholder-violet-300/50 focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="px-8 py-3 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-lg transition-colors disabled:opacity-50"
                  >
                    {status === 'loading' ? 'Sending...' : 'Get Free Access →'}
                  </button>
                </form>
                
                {status === 'error' && (
                  <p className="text-red-400 text-sm mt-3">Something went wrong. Try again.</p>
                )}
                
                <p className="text-violet-300/50 text-sm mt-4">No spam. Unsubscribe anytime.</p>
              </div>
            </>
          ) : (
            <>
              {/* Success - Show Content */}
              <div className="bg-green-900/20 border border-green-800 rounded-lg p-6 mb-8">
                <p className="text-green-400 font-semibold">✓ You're in! Here's your toolkit.</p>
              </div>

              {/* Full Toolkit Content */}
              <div className="prose prose-invert prose-violet max-w-none">
                <h2>Part 1: Service Packages You Can Offer Today</h2>
                
                <h3>Package 1: AI Content Writing</h3>
                <ul>
                  <li><strong>What you deliver:</strong> Blog posts, articles, social media content</li>
                  <li><strong>Tools:</strong> ChatGPT, Claude, Jasper</li>
                  <li><strong>Pricing:</strong> $50-150 per article (1000-2000 words)</li>
                  <li><strong>Time investment:</strong> 1-2 hours per piece</li>
                </ul>
                <p><strong>How to pitch:</strong></p>
                <pre className="bg-neutral-900 p-4 rounded-lg text-sm overflow-x-auto">
{`Subject: Cut your content costs 60% without sacrificing quality

I help [businesses/coaches/agencies] produce professional blog content 
using AI-assisted workflows. You get:

- SEO-optimized articles in 24-48 hours
- Unlimited revisions
- Your voice, amplified by AI efficiency

Would a quick call this week work to discuss your content needs?`}
                </pre>

                <h3>Package 2: AI Automation Setup</h3>
                <ul>
                  <li><strong>What you deliver:</strong> Zapier/Make workflows, ChatGPT integrations</li>
                  <li><strong>Tools:</strong> Zapier, Make, OpenAI API, Airtable</li>
                  <li><strong>Pricing:</strong> $200-500 per automation</li>
                  <li><strong>Time investment:</strong> 2-4 hours</li>
                </ul>
                <p><strong>Automation ideas to offer:</strong></p>
                <ul>
                  <li>Lead capture → CRM → Email sequence</li>
                  <li>Social mentions → Slack notifications</li>
                  <li>Form submissions → AI-generated responses</li>
                  <li>Invoice creation → Email → Payment tracking</li>
                  <li>Customer feedback → Sentiment analysis → Alerts</li>
                </ul>

                <h3>Package 3: AI-Powered Research</h3>
                <ul>
                  <li><strong>What you deliver:</strong> Market research, competitor analysis, report compilation</li>
                  <li><strong>Tools:</strong> ChatGPT, Perplexity, Claude</li>
                  <li><strong>Pricing:</strong> $100-300 per report</li>
                  <li><strong>Time investment:</strong> 2-3 hours</li>
                </ul>

                <h3>Package 4: AI Chatbot Setup</h3>
                <ul>
                  <li><strong>What you deliver:</strong> Custom GPT or simple chatbot for websites</li>
                  <li><strong>Tools:</strong> ChatGPT Custom GPTs, Botpress, Voiceflow</li>
                  <li><strong>Pricing:</strong> $300-1000 per bot</li>
                  <li><strong>Time investment:</strong> 4-8 hours</li>
                </ul>

                <h3>Package 5: AI Image Generation</h3>
                <ul>
                  <li><strong>What you deliver:</strong> Social media graphics, product mockups, illustrations</li>
                  <li><strong>Tools:</strong> Midjourney, DALL-E, Leonardo.ai</li>
                  <li><strong>Pricing:</strong> $25-100 per image set</li>
                  <li><strong>Time investment:</strong> 30 min - 2 hours</li>
                </ul>

                <hr />

                <h2>Part 2: Finding Your First Clients</h2>
                
                <h3>Where to Find Clients</h3>
                <p><strong>Freelance Platforms:</strong></p>
                <ul>
                  <li>Upwork (create "AI Services" profile)</li>
                  <li>Fiverr (list specific AI gigs)</li>
                  <li>Toptal (for premium rates)</li>
                  <li>Contra (no fees)</li>
                </ul>
                
                <p><strong>Direct Outreach:</strong></p>
                <ul>
                  <li>Small business owners on LinkedIn</li>
                  <li>Marketing agencies (they need AI help)</li>
                  <li>Content creators overwhelmed with work</li>
                  <li>E-commerce store owners</li>
                  <li>Local businesses going digital</li>
                </ul>

                <h3>First Client Script</h3>
                <pre className="bg-neutral-900 p-4 rounded-lg text-sm overflow-x-auto">
{`Hi [Name],

I noticed [something specific about their business/content]. 

I help [their type of business] with [specific service] using AI tools - 
it usually saves my clients [time/money benefit].

For example, I recently helped a [similar business] 
[specific result with numbers if possible].

Would you be open to a 15-minute call to see if I could help? 
No pressure - happy to share some quick wins either way.

[Your name]`}
                </pre>

                <hr />

                <h2>Part 3: Essential Prompts for Freelancers</h2>
                
                <h3>Proposal Writing</h3>
                <pre className="bg-neutral-900 p-4 rounded-lg text-sm overflow-x-auto">
{`Write a project proposal for [SERVICE] for [CLIENT TYPE]. 
Project scope: [DETAILS]
Budget range: [AMOUNT]
Include: executive summary, approach, timeline, pricing, next steps.
Tone: professional but personable.`}
                </pre>

                <h3>Scope Creep Response</h3>
                <pre className="bg-neutral-900 p-4 rounded-lg text-sm overflow-x-auto">
{`A client is asking for [ADDITIONAL WORK] beyond our agreed scope. 
Write a polite response that:
1. Acknowledges their request positively
2. Explains it's outside current scope
3. Offers to quote it as additional work
4. Maintains the relationship`}
                </pre>

                <hr />

                <h2>Part 4: Tools Stack</h2>
                
                <h3>Essential (Free/Low-Cost)</h3>
                <table className="w-full">
                  <thead>
                    <tr><th>Tool</th><th>Purpose</th><th>Cost</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>ChatGPT</td><td>Writing, research, coding</td><td>Free - $20/mo</td></tr>
                    <tr><td>Claude</td><td>Long documents, analysis</td><td>Free - $20/mo</td></tr>
                    <tr><td>Canva</td><td>Graphics, presentations</td><td>Free - $15/mo</td></tr>
                    <tr><td>Notion</td><td>Project management</td><td>Free - $10/mo</td></tr>
                    <tr><td>Calendly</td><td>Scheduling</td><td>Free - $12/mo</td></tr>
                  </tbody>
                </table>

                <hr />

                <h2>Part 5: Contract Template</h2>
                <pre className="bg-neutral-900 p-4 rounded-lg text-sm overflow-x-auto">
{`FREELANCE SERVICE AGREEMENT

Between: [Your Name] ("Provider")
And: [Client Name] ("Client")
Date: [Date]

1. SERVICES
Provider will deliver: [Specific deliverables]
Timeline: [Dates]
Revisions included: [Number]

2. PAYMENT
Total fee: $[Amount]
Payment schedule: [50% upfront, 50% on completion]
Payment method: [PayPal/Stripe/etc.]

3. OWNERSHIP
Upon full payment, Client owns all deliverables.
Provider may use work in portfolio unless otherwise agreed.

4. AI DISCLOSURE
Services utilize AI tools for efficiency.
All work is human-reviewed and edited.
Final deliverables meet professional standards.

5. CHANGES
Scope changes require written agreement.
Additional work billed at $[rate]/hour.

6. CANCELLATION
Either party may cancel with [X] days notice.
Client pays for work completed.`}
                </pre>

                <hr />

                <h2>Part 6: Scaling to $5K/Month</h2>
                
                <h3>The Math</h3>
                <ul>
                  <li><strong>Option A:</strong> 50 small projects at $100 = $5,000</li>
                  <li><strong>Option B:</strong> 10 medium projects at $500 = $5,000</li>
                  <li><strong>Option C:</strong> 2-3 large projects at $2,000 = $5,000-6,000</li>
                </ul>

                <h3>Retainer Pitch Script</h3>
                <pre className="bg-neutral-900 p-4 rounded-lg text-sm overflow-x-auto">
{`"I've enjoyed working on [PROJECT]. Many of my clients find ongoing 
support valuable for [SPECIFIC NEED].

I offer a monthly retainer that includes:
- [X] hours of dedicated support
- Priority response times
- [Specific recurring deliverable]

At $[AMOUNT]/month, it's actually more cost-effective than 
project-based work. Would this be helpful for you?"`}
                </pre>

                <hr />

                <h2>Quick Start Checklist</h2>
                <ul>
                  <li>☐ Choose 1-2 services to offer</li>
                  <li>☐ Set up profiles on 2 platforms</li>
                  <li>☐ Create service description template</li>
                  <li>☐ Prepare simple contract</li>
                  <li>☐ Make portfolio/samples (even self-created)</li>
                  <li>☐ Send 5 outreach messages this week</li>
                  <li>☐ Book first discovery call</li>
                </ul>

                <div className="bg-violet-900/20 border border-violet-800 rounded-lg p-6 mt-8">
                  <p className="text-violet-400 font-semibold mb-2">Want more?</p>
                  <p className="text-gray-400">Check out our <Link href="/guides" className="text-violet-400 underline">full guides</Link> for deep dives on each topic.</p>
                </div>
              </div>
            </>
          )}
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-gray-500 text-sm">
        <p>© 2026 GigWithAI. Making money with AI tools.</p>
      </footer>
    </main>
  );
}
