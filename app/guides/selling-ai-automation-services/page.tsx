import Link from 'next/link'

export const metadata = {
  title: 'How to Sell AI Automation Services (Beginner\'s Guide) | GigWithAI',
  description: 'You don\'t need to be a developer to sell AI automation. Learn the tools, find clients, and price your services.',
  keywords: ['sell ai automation services', 'ai automation business', 'zapier freelance', 'ai automation agency', 'no code automation'],
}

export default function SellingAIAutomationServicesPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
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
          <Link 
            href="/guides" 
            className="text-sm text-gray-500 hover:text-white transition mb-8 inline-block"
          >
            ← Back to Guides
          </Link>

          <div className="mb-4 flex gap-2">
            <span className="text-xs px-2 py-1 bg-amber-500/10 text-amber-400 rounded">Intermediate</span>
            <span className="text-xs px-2 py-1 bg-white/5 text-gray-400 rounded">22 min read</span>
          </div>

          <h1 className="text-4xl font-bold mb-4">
            How to Sell AI Automation Services (Beginner&apos;s Guide)
          </h1>
          
          <p className="text-xl text-gray-400 mb-12">
            You don&apos;t need to be a developer to sell AI automation. You need to understand what 
            businesses want automated and know the tools to deliver it.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">What Businesses Actually Pay For</h2>
              <p className="text-gray-300 mb-4">
                Nobody cares about &ldquo;AI.&rdquo; They care about:
              </p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• Spending less time on repetitive tasks</li>
                <li>• Reducing errors</li>
                <li>• Getting more done with same headcount</li>
              </ul>
              <p className="text-gray-400 mb-4">
                Your job is translating AI capabilities into those outcomes.
              </p>
              <div className="bg-violet-500/10 border border-violet-500/30 rounded-lg p-4">
                <p className="text-violet-400 font-semibold mb-2">High-demand automations:</p>
                <ul className="text-gray-300 space-y-1">
                  <li>• Email/lead response automation</li>
                  <li>• Data entry and extraction</li>
                  <li>• Report generation</li>
                  <li>• Customer support (basic)</li>
                  <li>• Social media scheduling</li>
                  <li>• Invoice processing</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Tools You Need</h2>
              <p className="text-gray-300 mb-6">
                You don&apos;t need to code. These tools do the heavy lifting:
              </p>

              <div className="space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold mb-2 text-violet-400">No-code automation:</h3>
                  <ul className="text-gray-300 space-y-1">
                    <li>• <strong>Zapier</strong> — connects apps together</li>
                    <li>• <strong>Make (Integromat)</strong> — more complex workflows</li>
                    <li>• <strong>n8n</strong> — self-hosted, no per-task limits</li>
                  </ul>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold mb-2 text-violet-400">AI integration:</h3>
                  <ul className="text-gray-300 space-y-1">
                    <li>• <strong>ChatGPT API</strong> — for text generation/processing</li>
                    <li>• <strong>Claude API</strong> — alternative to ChatGPT</li>
                    <li>• <strong>OpenAI Assistants</strong> — for more complex AI tasks</li>
                  </ul>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold mb-2 text-violet-400">Simple databases:</h3>
                  <ul className="text-gray-300 space-y-1">
                    <li>• <strong>Airtable</strong> — spreadsheet + database hybrid</li>
                    <li>• <strong>Notion</strong> — docs + database</li>
                  </ul>
                </div>
              </div>

              <p className="text-violet-400 mt-4 font-medium">
                Learn Zapier + ChatGPT API and you can build 80% of what small businesses need.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">How to Find Clients</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold mb-3">Method 1: Local Businesses</h3>
                  <p className="text-gray-300 mb-3">
                    Walk into businesses in your area. Look for:
                  </p>
                  <ul className="text-gray-400 space-y-1 mb-3">
                    <li>• Stacks of paper</li>
                    <li>• Manual data entry</li>
                    <li>• Repetitive customer questions</li>
                  </ul>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-gray-300">
                      Say: &ldquo;I help businesses automate repetitive work with AI. What tasks take up most of your team&apos;s time?&rdquo;
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-3">Method 2: Online (Freelance Platforms)</h3>
                  <p className="text-gray-300 mb-3">
                    Search Upwork/Fiverr for:
                  </p>
                  <ul className="text-gray-400 space-y-1 mb-3">
                    <li>• &ldquo;Zapier automation&rdquo;</li>
                    <li>• &ldquo;ChatGPT integration&rdquo;</li>
                    <li>• &ldquo;workflow automation&rdquo;</li>
                  </ul>
                  <p className="text-gray-400">
                    Study what successful freelancers offer. Copy the positioning, undercut on price to start.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-3">Method 3: Your Network</h3>
                  <div className="bg-violet-500/10 border border-violet-500/30 rounded-lg p-4">
                    <p className="text-gray-300">
                      Post on LinkedIn: &ldquo;I&apos;m building AI automations for small businesses. First 3 projects are free/discounted 
                      while I build my portfolio. What&apos;s a task you wish happened automatically?&rdquo;
                    </p>
                  </div>
                  <p className="text-gray-400 mt-3">
                    You&apos;ll get responses. Free work builds testimonials.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Pricing Your Services</h2>
              
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <h3 className="font-bold mb-3">Starting out:</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>• Simple automations: <span className="text-violet-400">$200-500</span></li>
                  <li>• Medium complexity: <span className="text-violet-400">$500-1,500</span></li>
                  <li>• Complex systems: <span className="text-violet-400">$1,500-5,000+</span></li>
                </ul>
              </div>

              <div className="bg-violet-500/10 border border-violet-500/30 rounded-lg p-4">
                <h3 className="font-bold mb-2 text-violet-400">Value-based pricing:</h3>
                <p className="text-gray-300">
                  If your automation saves 10 hours/month at $50/hour = $500/month value. 
                  Charge $1,000-2,000 one-time. Pays for itself in 2-4 months.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Your First Project (Step by Step)</h2>
              <ol className="space-y-3 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-violet-400 font-mono">1.</span>
                  <span><strong className="text-white">Find the pain:</strong> What takes hours that shouldn&apos;t?</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-violet-400 font-mono">2.</span>
                  <span><strong className="text-white">Map the workflow:</strong> Inputs → Process → Outputs</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-violet-400 font-mono">3.</span>
                  <span><strong className="text-white">Build in stages:</strong> Start simple, add complexity</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-violet-400 font-mono">4.</span>
                  <span><strong className="text-white">Document everything:</strong> Client needs to maintain it</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-violet-400 font-mono">5.</span>
                  <span><strong className="text-white">Get testimonial:</strong> Written + permission to share</span>
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Example: Email Lead Response</h2>
              
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-violet-400 font-semibold mb-2">Client problem:</p>
                <p className="text-gray-300">Gets 50 leads/day via email, responds manually, takes 2 hours.</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-violet-400 font-semibold mb-2">Solution:</p>
                <ol className="text-gray-300 space-y-1">
                  <li>1. Email arrives in Gmail</li>
                  <li>2. Zapier catches it, sends to ChatGPT</li>
                  <li>3. ChatGPT drafts personalized response</li>
                  <li>4. Response goes to Slack for human approval</li>
                  <li>5. Approved = auto-sent</li>
                </ol>
              </div>

              <div className="bg-violet-500/10 border border-violet-500/30 rounded-lg p-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-gray-400 text-sm">Build time</p>
                    <p className="text-violet-400 font-bold">3-4 hours</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Price</p>
                    <p className="text-violet-400 font-bold">$800</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Client saves</p>
                    <p className="text-violet-400 font-bold">$25K/year</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Mistakes to Avoid</h2>
              <div className="space-y-3">
                <div className="flex gap-3 text-gray-300">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">Over-engineering</strong> — Simple usually wins</span>
                </div>
                <div className="flex gap-3 text-gray-300">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">No documentation</strong> — Client can&apos;t maintain = you&apos;re on call forever</span>
                </div>
                <div className="flex gap-3 text-gray-300">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">Promising too much</strong> — Under-promise, over-deliver</span>
                </div>
                <div className="flex gap-3 text-gray-300">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">Ignoring edge cases</strong> — What happens when it breaks?</span>
                </div>
              </div>
            </section>

            <section className="bg-violet-500/10 border border-violet-500/30 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Getting Started This Week</h2>
              <ol className="space-y-2 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-violet-400">☐</span>
                  <span>Pick one tool (Zapier recommended)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-violet-400">☐</span>
                  <span>Build 3 automations for yourself or friends</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-violet-400">☐</span>
                  <span>Document them as case studies</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-violet-400">☐</span>
                  <span>Post about it on LinkedIn</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-violet-400">☐</span>
                  <span>Reach out to 5 local businesses</span>
                </li>
              </ol>
              <p className="text-violet-400 mt-4 font-medium">
                You&apos;ll have your first paid client within a month if you actually do the outreach.
              </p>
            </section>

            <section className="border-t border-white/10 pt-8">
              <h2 className="text-xl font-bold mb-3">Related Guides</h2>
              <div className="flex flex-wrap gap-3">
                <Link 
                  href="/guides/ai-content-creation-business"
                  className="text-violet-400 hover:text-violet-300 text-sm"
                >
                  AI Content Creation Business →
                </Link>
                <Link 
                  href="/guides/ai-freelancing-first-client"
                  className="text-violet-400 hover:text-violet-300 text-sm"
                >
                  Getting Your First AI Client →
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>

      <footer className="border-t border-white/10 px-6 py-8 mt-auto">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© 2026 GigWithAI</p>
          <div className="flex gap-6">
            <Link href="/guides" className="hover:text-white transition">Guides</Link>
            <Link href="/tools" className="hover:text-white transition">Tools</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
