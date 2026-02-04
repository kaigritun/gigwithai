import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "47 ChatGPT Prompts for Work That Actually Save Time",
  description:
    "Copy-paste ChatGPT prompts for emails, reports, meetings, and daily work tasks. Real prompts tested by freelancers and professionals.",
  keywords:
    "chatgpt prompts for work, work prompts chatgpt, professional chatgpt prompts, chatgpt business prompts, chatgpt productivity",
  openGraph: {
    title: "47 ChatGPT Prompts for Work That Actually Save Time",
    description:
      "Copy-paste ChatGPT prompts for emails, reports, meetings, and daily work tasks.",
    type: "article",
  },
};

export default function ChatGPTPromptsWorkPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <article className="max-w-3xl mx-auto px-6 py-16">
        <header className="mb-12">
          <Link
            href="/guides"
            className="text-sm text-emerald-400 hover:text-emerald-300 mb-4 inline-block"
          >
            ← Back to Guides
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            47 ChatGPT Prompts for Work That Actually Save Time
          </h1>
          <p className="text-xl text-gray-400">
            Skip the generic prompt lists. These are the ones I use daily.
          </p>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <p>
            Most &quot;ChatGPT prompt&quot; articles give you garbage like &quot;Write me an email.&quot; That&apos;s useless. Good prompts are specific, include context, and tell ChatGPT exactly how you want the output formatted.
          </p>

          <p>
            These are the prompts I actually use. Copy them, customize the [brackets], and save hours every week.
          </p>

          <h2>Email Prompts</h2>

          <h3>Cold Outreach Email</h3>
          <div className="bg-gray-900 p-4 rounded-lg text-sm font-mono overflow-x-auto">
            Write a cold email to [target role] at [type of company]. I&apos;m offering [your service]. Keep it under 100 words. No fluff, no &quot;I hope this finds you well.&quot; Start with a specific observation about their company, then make my ask clear. End with a soft CTA.
          </div>

          <h3>Follow-Up Email</h3>
          <div className="bg-gray-900 p-4 rounded-lg text-sm font-mono overflow-x-auto">
            Write a follow-up email to someone who hasn&apos;t responded to my initial outreach about [topic]. Keep it to 2-3 sentences. Don&apos;t be pushy or passive-aggressive. Reference the original email briefly and add one new piece of value or insight.
          </div>

          <h3>Difficult Conversation Email</h3>
          <div className="bg-gray-900 p-4 rounded-lg text-sm font-mono overflow-x-auto">
            Help me write an email addressing [situation - e.g., missed deadline, scope creep, payment issue]. I want to be firm but professional. State the problem clearly, explain the impact, and propose a specific solution. No emotional language.
          </div>

          <h3>Thank You / Appreciation Email</h3>
          <div className="bg-gray-900 p-4 rounded-lg text-sm font-mono overflow-x-auto">
            Write a genuine thank-you email to [person/role] for [specific thing they did]. Make it specific to what they actually contributed. Under 75 words. No generic phrases.
          </div>

          <h2>Meeting Prompts</h2>

          <h3>Meeting Agenda Creator</h3>
          <div className="bg-gray-900 p-4 rounded-lg text-sm font-mono overflow-x-auto">
            Create a meeting agenda for a [length] meeting about [topic]. Attendees are [roles]. Include: purpose statement, 3-4 discussion items with time allocations, action items section, and next steps. Format as a clean list I can paste into a calendar invite.
          </div>

          <h3>Meeting Notes Summarizer</h3>
          <div className="bg-gray-900 p-4 rounded-lg text-sm font-mono overflow-x-auto">
            Here are my raw meeting notes: [paste notes]. Organize them into: Key Decisions Made, Action Items (with owners and deadlines), Open Questions, and Next Steps. Use bullet points. Be concise.
          </div>

          <h3>Pre-Meeting Research Brief</h3>
          <div className="bg-gray-900 p-4 rounded-lg text-sm font-mono overflow-x-auto">
            I have a meeting with [person/company] about [topic]. Based on this context [paste any info you have], help me prepare: 3 questions to ask, potential objections they might raise, and key points I should make. Keep each section to 2-3 bullets.
          </div>

          <h2>Report & Document Prompts</h2>

          <h3>Status Update Report</h3>
          <div className="bg-gray-900 p-4 rounded-lg text-sm font-mono overflow-x-auto">
            Write a status update for [project] covering the past [timeframe]. Include: accomplishments, current blockers, upcoming milestones, and any decisions needed from leadership. Use bullet points. Keep it factual—no fluff.
          </div>

          <h3>Executive Summary Writer</h3>
          <div className="bg-gray-900 p-4 rounded-lg text-sm font-mono overflow-x-auto">
            Here&apos;s a longer document: [paste content]. Write an executive summary for senior leadership. Max 150 words. Lead with the bottom line (recommendation or key finding), then supporting points. Assume they&apos;ll only read this summary.
          </div>

          <h3>Process Documentation</h3>
          <div className="bg-gray-900 p-4 rounded-lg text-sm font-mono overflow-x-auto">
            Document this process: [describe process]. Write it as step-by-step instructions that someone unfamiliar could follow. Include: prerequisites, numbered steps, common mistakes to avoid, and expected outcomes. Format for a wiki or internal doc.
          </div>

          <h2>Client Communication Prompts</h2>

          <h3>Project Proposal</h3>
          <div className="bg-gray-900 p-4 rounded-lg text-sm font-mono overflow-x-auto">
            Write a project proposal for [service] for [client type]. Include: problem statement, proposed solution, deliverables, timeline, and investment. Tone should be confident but not salesy. Under 400 words.
          </div>

          <h3>Scope Creep Response</h3>
          <div className="bg-gray-900 p-4 rounded-lg text-sm font-mono overflow-x-auto">
            A client asked for [additional work] that wasn&apos;t in our original scope. Help me write a response that: acknowledges their request positively, explains why it&apos;s outside scope, offers options (add to scope for $X, defer to phase 2, or adjust existing deliverables). Professional but firm.
          </div>

          <h3>Project Completion Summary</h3>
          <div className="bg-gray-900 p-4 rounded-lg text-sm font-mono overflow-x-auto">
            Write a project wrap-up email for [project]. Include: what we delivered, key metrics/results if available, what went well, lessons learned, and next steps or recommendations. End with an ask for testimonial or referral.
          </div>

          <h2>Analysis & Strategy Prompts</h2>

          <h3>Competitor Analysis</h3>
          <div className="bg-gray-900 p-4 rounded-lg text-sm font-mono overflow-x-auto">
            Analyze [competitor name/URL] as a competitor to my [business type]. Based on what you can see, identify: their apparent target market, key value propositions, pricing strategy (if visible), strengths, and potential weaknesses. Format as a brief competitive intel report.
          </div>

          <h3>Problem-Solving Framework</h3>
          <div className="bg-gray-900 p-4 rounded-lg text-sm font-mono overflow-x-auto">
            I&apos;m facing this problem: [describe problem]. Walk me through analyzing it using: 1) Root cause analysis (5 whys), 2) Impact assessment, 3) Three possible solutions with pros/cons, 4) Recommended approach. Be a critical thinking partner, not just agreeable.
          </div>

          <h3>SWOT Analysis</h3>
          <div className="bg-gray-900 p-4 rounded-lg text-sm font-mono overflow-x-auto">
            Conduct a SWOT analysis for [business/project/idea]. Context: [provide relevant details]. For each quadrant, give 3-4 specific, actionable points—not generic observations. End with strategic implications.
          </div>

          <h2>Content & Marketing Prompts</h2>

          <h3>Blog Post Outline</h3>
          <div className="bg-gray-900 p-4 rounded-lg text-sm font-mono overflow-x-auto">
            Create an outline for a blog post about [topic] targeting [audience]. Include: attention-grabbing title options (3), intro hook, 5-7 main sections with subpoints, and strong conclusion. The tone should be [professional/casual/authoritative]. SEO keyword: [keyword].
          </div>

          <h3>Social Media Post Series</h3>
          <div className="bg-gray-900 p-4 rounded-lg text-sm font-mono overflow-x-auto">
            Create 5 LinkedIn posts about [topic] for a [your role/industry] audience. Each post should be 100-150 words, start with a hook, include a specific insight or story, and end with engagement prompt. No hashtag spam. Authentic voice, not corporate.
          </div>

          <h3>Case Study Writer</h3>
          <div className="bg-gray-900 p-4 rounded-lg text-sm font-mono overflow-x-auto">
            Write a case study based on: Client: [name/type], Challenge: [problem], Solution: [what we did], Results: [outcomes]. Format: Problem-Solution-Results structure. Include a client quote placeholder. Under 500 words. Make the results specific and impressive.
          </div>

          <h2>Productivity Prompts</h2>

          <h3>Daily Priority Setter</h3>
          <div className="bg-gray-900 p-4 rounded-lg text-sm font-mono overflow-x-auto">
            Here&apos;s my task list for today: [paste tasks]. Help me prioritize using the Eisenhower matrix. Identify: 1 must-do task that moves the needle most, tasks to schedule for later, tasks to delegate or eliminate. Be ruthless—I have [X hours] of focused time.
          </div>

          <h3>Weekly Review Template</h3>
          <div className="bg-gray-900 p-4 rounded-lg text-sm font-mono overflow-x-auto">
            Help me do a weekly review. Ask me about: wins from last week, incomplete tasks and why, lessons learned, and top 3 priorities for next week. After I answer each, summarize into a clean weekly review document.
          </div>

          <h3>Decision-Making Helper</h3>
          <div className="bg-gray-900 p-4 rounded-lg text-sm font-mono overflow-x-auto">
            I need to decide between [option A] and [option B]. Context: [situation]. Help me think through this by: listing key factors to consider, weighing each option against those factors, identifying what information I&apos;m missing, and making a recommendation with reasoning.
          </div>

          <h2>How to Get Better Results</h2>

          <ul>
            <li><strong>Always include context</strong> — The more specific information you give, the better the output.</li>
            <li><strong>Specify format</strong> — &quot;Use bullet points&quot; or &quot;under 100 words&quot; prevents rambling.</li>
            <li><strong>Iterate</strong> — First output rarely perfect. Ask for revisions with specific feedback.</li>
            <li><strong>Build on these</strong> — Customize for your industry, voice, and common tasks.</li>
          </ul>

          <div className="mt-12 p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
            <h3 className="text-xl font-bold text-emerald-400 mb-2">
              Get the Full Prompt Library
            </h3>
            <p className="text-gray-300 mb-4">
              100+ prompts organized by use case, plus templates you can customize for your business.
            </p>
            <Link
              href="/toolkit"
              className="inline-block bg-emerald-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-emerald-400 transition"
            >
              Download the AI Freelancer Toolkit →
            </Link>
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap gap-4">
            <Link
              href="/guides/chatgpt-freelancing"
              className="text-emerald-400 hover:text-emerald-300"
            >
              ChatGPT for Freelancers →
            </Link>
            <Link
              href="/guides/ai-automation-services"
              className="text-emerald-400 hover:text-emerald-300"
            >
              AI Automation Services →
            </Link>
            <Link
              href="/tools"
              className="text-emerald-400 hover:text-emerald-300"
            >
              Best AI Tools →
            </Link>
          </div>
        </footer>
      </article>
    </main>
  );
}
