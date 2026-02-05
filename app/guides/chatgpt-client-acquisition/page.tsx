import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ChatGPT Client Acquisition Scripts That Actually Work | GigWithAI',
  description: 'Cold outreach scripts powered by ChatGPT. LinkedIn messages, cold emails, and follow-up sequences that land freelance clients.',
}

export default function ChatGPTClientAcquisitionGuide() {
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
            Client Acquisition
          </p>
          <h1 className="text-4xl font-bold mb-6">
            ChatGPT Client Acquisition Scripts That Actually Work
          </h1>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            Cold outreach sucks. But it works when done right. Here are the scripts that land clients.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Why Most Outreach Fails</h2>
            <ul className="space-y-3 text-gray-300">
              <li>• <strong>Generic templates</strong> everyone uses</li>
              <li>• <strong>No personalization</strong> beyond [FIRST NAME]</li>
              <li>• <strong>Pitching features</strong>, not outcomes</li>
              <li>• <strong>No clear next step</strong></li>
            </ul>
            <p className="text-gray-300 mt-4">
              ChatGPT fixes the personalization problem at scale.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">The Framework</h2>
            <div className="bg-violet-600/10 border border-violet-500/30 rounded-lg p-6">
              <p className="text-lg font-bold text-violet-400 mb-2">
                Research → Personalize → Pitch Outcome → Clear CTA
              </p>
              <p className="text-gray-300">Every message needs all four.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Script 1: LinkedIn Connection Message</h2>
            <div className="border border-white/10 rounded-lg p-6 mb-4">
              <h3 className="font-bold mb-3 text-sm text-gray-400 uppercase">Prompt for ChatGPT:</h3>
              <div className="bg-black/30 rounded p-4 text-sm font-mono text-gray-300">
                I&apos;m reaching out to [NAME] who is [ROLE] at [COMPANY].<br/>
                They recently [SPECIFIC THING - post, article, company news].<br/>
                I offer [YOUR SERVICE].<br/>
                Write a 50-word connection request that:<br/>
                1. References their recent activity<br/>
                2. Offers a specific insight related to their work<br/>
                3. Doesn&apos;t pitch anything yet
              </div>
            </div>
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="font-bold mb-3 text-sm text-gray-400 uppercase">Output Example:</h3>
              <p className="text-gray-300 italic">
                &quot;Hey Sarah - saw your post about the rebrand challenges. The timeline pressure 
                you mentioned is real. We helped a similar B2B SaaS cut their rebrand from 6 
                months to 8 weeks. Happy to share what worked if useful.&quot;
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Script 2: Cold Email That Gets Replies</h2>
            <div className="border border-white/10 rounded-lg p-6 mb-4">
              <h3 className="font-bold mb-3 text-sm text-gray-400 uppercase">Prompt:</h3>
              <div className="bg-black/30 rounded p-4 text-sm font-mono text-gray-300">
                Write a cold email to [PROSPECT] at [COMPANY].<br/>
                They have this problem: [SPECIFIC PROBLEM you can see from their website/social]<br/>
                I solve it by: [YOUR SOLUTION]<br/>
                Result I can promise: [SPECIFIC OUTCOME]<br/>
                Keep it under 100 words. No fluff. One clear question at the end.
              </div>
            </div>
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="font-bold mb-3 text-sm text-gray-400 uppercase">Output Example:</h3>
              <div className="text-gray-300 space-y-3">
                <p><strong>Subject:</strong> Quick question about [Company] blog</p>
                <p>[Name] - noticed your blog hasn&apos;t been updated since October.</p>
                <p>Companies in your space that post weekly see 3x more inbound leads than monthly posters. But who has time to write 4 posts a month?</p>
                <p>I write SEO content for B2B SaaS. 2 clients went from 500 to 5,000 monthly visitors in 6 months.</p>
                <p>Worth a 15-min call to see if it fits?</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Script 3: Follow-Up Sequence</h2>
            <p className="text-gray-300 mb-4">
              Most deals close on follow-up 3-7. ChatGPT generates variations:
            </p>
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="font-bold mb-3 text-sm text-gray-400 uppercase">Prompt:</h3>
              <div className="bg-black/30 rounded p-4 text-sm font-mono text-gray-300">
                Generate 5 follow-up emails for someone who didn&apos;t reply to my initial cold email about [SERVICE].<br/>
                Each email should:<br/>
                - Be shorter than the last<br/>
                - Add new value or angle<br/>
                - Not be annoying or desperate<br/>
                - Space them 3-4 days apart
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">The Numbers Game</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-gray-300">Send personalized messages/week</span>
                <span className="text-violet-400 font-mono">50</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-gray-300">Expected replies (10-20% is good)</span>
                <span className="text-violet-400 font-mono">5-10</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-gray-300">Calls booked from those</span>
                <span className="text-violet-400 font-mono">2-3</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Clients closed</span>
                <span className="text-violet-400 font-mono">1</span>
              </div>
            </div>
            <div className="bg-violet-600/10 border border-violet-500/30 rounded-lg p-4 mt-6">
              <p className="text-sm text-gray-300">
                <strong className="text-violet-400">Result:</strong> $2-5k/month from one hour of 
                ChatGPT-assisted outreach daily.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Don&apos;t Be a Robot</h2>
            <p className="text-gray-300 mb-4">
              AI writes the first draft. You add the human touch:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li>• <strong>Catch anything that sounds generic</strong></li>
              <li>• <strong>Add real details</strong> only you&apos;d know</li>
              <li>• <strong>Make sure it sounds like YOU</strong>, not ChatGPT</li>
            </ul>
            <p className="text-gray-300 mt-4">
              The goal is speed, not replacement. 10 personalized messages in 30 minutes beats 2 in an hour.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-lg p-6 mb-12">
            <h2 className="text-xl font-bold mb-4">The Bottom Line</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Cold outreach is a numbers game. ChatGPT lets you play it at scale without 
                sacrificing personalization.
              </p>
              <p>
                <strong className="text-white">Your move:</strong> Write one prompt. Send 50 messages 
                this week. Track replies. Iterate.
              </p>
            </div>
          </section>

          <div className="flex gap-4 flex-wrap">
            <Link 
              href="/guides/ai-side-hustles-2026"
              className="text-violet-400 hover:text-violet-300"
            >
              ← More AI Side Hustle Ideas
            </Link>
          </div>
        
          <RelatedGuides guides={[
            {
              slug: 'ai-freelancing-first-client',
              title: 'Getting Your First Client',
              description: 'Land your first gig.'
            },
            {
              slug: 'pricing-ai-services',
              title: 'Pricing AI Services',
              description: 'Charge what you\'re worth.'
            },
            {
              slug: 'ai-virtual-assistant',
              title: 'AI Virtual Assistant',
              description: 'Services to offer clients.'
            }
          ]} />
        </article>
    </div>
  )
}
