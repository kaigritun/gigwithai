import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Tutoring Side Hustle: Make $50-150/Hour | GigWithAI',
  description: 'Build an AI-powered tutoring business. Use ChatGPT for lesson prep, custom materials, and 24/7 student support. Earn $50-150/hour.',
  keywords: ['AI tutoring', 'tutoring side hustle', 'ChatGPT tutoring', 'online tutoring business'],
}

export default function AITutoringSideHustlePage() {
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
          <Link 
            href="/guides" 
            className="text-sm text-gray-500 hover:text-white transition mb-8 inline-block"
          >
            ← Back to Guides
          </Link>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs px-2 py-1 bg-violet-500/10 text-violet-400 rounded">Beginner</span>
            <span className="text-xs px-2 py-1 bg-white/5 text-gray-400 rounded">20 min</span>
          </div>

          <h1 className="text-4xl font-bold mb-6">
            AI Tutoring Side Hustle: Make $50-150/Hour Teaching with AI
          </h1>
          
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            Tutoring has always been a solid side hustle. AI makes it better—you can teach more students, prep faster, and deliver better results.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Why AI Tutoring Pays More</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-gray-400 text-sm mb-1">Traditional tutoring</p>
                  <p className="text-2xl font-bold">$25-50/hour</p>
                </div>
                <div className="bg-violet-500/10 border border-violet-500/30 rounded-lg p-4">
                  <p className="text-violet-400 text-sm mb-1">AI-enhanced tutoring</p>
                  <p className="text-2xl font-bold">$50-150/hour</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">The difference? Value delivery. With AI, you offer:</p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-violet-400">→</span>
                  <span>Personalized practice problems generated on-demand</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-violet-400">→</span>
                  <span>Custom study materials for each student</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-violet-400">→</span>
                  <span>Faster grading and feedback</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-violet-400">→</span>
                  <span>Progress tracking with detailed analytics</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-violet-400">→</span>
                  <span>24/7 AI chatbot support between sessions</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The AI Tutoring Stack</h2>
              
              <h3 className="font-bold text-lg mb-3">For Session Prep (5 min instead of 30)</h3>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• <strong className="text-white">ChatGPT/Claude</strong> - Generate practice problems, explain concepts, create quizzes</li>
                <li>• <strong className="text-white">Notion AI</strong> - Build and organize lesson plans</li>
                <li>• <strong className="text-white">Gamma</strong> - Create visual presentations instantly</li>
              </ul>

              <h3 className="font-bold text-lg mb-3">For Live Sessions</h3>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• <strong className="text-white">Zoom/Google Meet</strong> - Video calls</li>
                <li>• <strong className="text-white">Excalidraw/Miro</strong> - Visual whiteboard</li>
                <li>• <strong className="text-white">ChatGPT</strong> - Real-time problem generation</li>
                <li>• <strong className="text-white">Wolfram Alpha</strong> - Math verification</li>
              </ul>

              <h3 className="font-bold text-lg mb-3">For Between Sessions</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• <strong className="text-white">Custom GPT</strong> - 24/7 study assistant for your students</li>
                <li>• <strong className="text-white">Quizlet</strong> - AI-generated flashcard sets</li>
                <li>• <strong className="text-white">Notion</strong> - Shared study hub</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 1: Pick Your Niche</h2>
              <p className="text-gray-400 mb-4">Generalist tutors compete on price. Specialists command premium rates.</p>
              
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-violet-400 font-semibold mb-3">High-demand, high-paying niches:</p>
                <ul className="space-y-2 text-gray-300">
                  <li>• SAT/ACT prep ($75-150/hour)</li>
                  <li>• AP courses ($60-100/hour)</li>
                  <li>• College application essays ($100-200/hour)</li>
                  <li>• Coding for kids ($50-80/hour)</li>
                  <li>• Math (always in demand)</li>
                  <li>• ESL/Language learning</li>
                </ul>
              </div>

              <h3 className="font-bold text-lg mb-3">Use AI to Validate Your Niche</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-sm text-gray-500 mb-2 font-mono">PROMPT</p>
                <p className="text-gray-200 font-mono text-sm whitespace-pre-wrap">{`I'm considering starting an AI tutoring side hustle.
My background: [your expertise]
My location: [city/online]

Research and recommend:
1. Best tutoring niches for my background
2. Average rates in my area
3. Demand signals (where are students looking?)
4. Competitive landscape`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 2: Create Your AI-Powered Curriculum</h2>
              <p className="text-gray-400 mb-4">Don&apos;t reinvent the wheel. Use AI to build a complete curriculum fast.</p>

              <h3 className="font-bold text-lg mb-3">Generate a Course Outline</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-500 mb-2 font-mono">PROMPT</p>
                <p className="text-gray-200 font-mono text-sm whitespace-pre-wrap">{`Create a 12-session tutoring curriculum for [subject/exam].
Student level: [grade/skill level]
Goal: [specific outcome - e.g., improve SAT Math by 100 points]

For each session include:
1. Topic and learning objectives
2. Key concepts to cover
3. Practice problems (5-10)
4. Homework assignment
5. Success metrics`}</p>
              </div>

              <h3 className="font-bold text-lg mb-3">Build Practice Problem Banks</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-500 mb-2 font-mono">PROMPT</p>
                <p className="text-gray-200 font-mono text-sm whitespace-pre-wrap">{`Generate 50 practice problems for [topic].
Difficulty: Mix of easy (20%), medium (50%), hard (30%)
Format: Multiple choice and free response
Include answer key with step-by-step solutions.`}</p>
              </div>

              <h3 className="font-bold text-lg mb-3">Create Personalized Study Guides</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-sm text-gray-500 mb-2 font-mono">PROMPT</p>
                <p className="text-gray-200 font-mono text-sm whitespace-pre-wrap">{`Create a study guide for a student struggling with [specific topic].
Common mistakes to address: [list any you've observed]
Learning style: [visual/reading/practice-based]
Include:
1. Concept explanation in simple terms
2. 3 worked examples
3. 5 practice problems with hints
4. Memory tricks and shortcuts`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 3: Set Up Your 24/7 AI Assistant</h2>
              <p className="text-gray-400 mb-4">This is the game-changer. Give students an AI tutor that sounds like you.</p>

              <div className="bg-violet-500/10 border border-violet-500/30 rounded-lg p-4 mb-4">
                <p className="text-violet-400 font-semibold mb-2">Why This Matters</p>
                <p className="text-gray-300">&ldquo;Unlimited AI tutor access between sessions&rdquo; is worth $50-100/month alone.</p>
              </div>

              <h3 className="font-bold text-lg mb-3">Create a Custom GPT (ChatGPT Plus required)</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-sm text-gray-500 mb-2 font-mono">CUSTOM GPT INSTRUCTIONS</p>
                <p className="text-gray-200 font-mono text-sm whitespace-pre-wrap">{`You are [Your Name]'s AI tutoring assistant for [subject].

Your role:
- Help students understand [subject] concepts
- Generate practice problems when asked
- Explain solutions step-by-step
- Never give direct homework answers - guide students to solve themselves
- Encourage struggling students
- Track what topics students ask about most

Teaching style: [describe your approach]
Student level: [grade/skill level]

When students are frustrated, remind them that struggle is part of learning.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 4: Price Your Services</h2>
              
              <h3 className="font-bold text-lg mb-3">Pricing Tiers</h3>
              <div className="space-y-4 mb-6">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-white font-semibold mb-2">Basic ($50-75/hour)</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• 1-on-1 video sessions</li>
                    <li>• Practice problems from session</li>
                    <li>• Email support</li>
                  </ul>
                </div>
                <div className="bg-violet-500/10 border border-violet-500/30 rounded-lg p-4">
                  <p className="text-white font-semibold mb-2">Premium ($100-150/hour)</p>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Everything in Basic</li>
                    <li>• 24/7 AI tutor access</li>
                    <li>• Weekly progress reports</li>
                    <li>• Custom study materials</li>
                    <li>• Priority scheduling</li>
                  </ul>
                </div>
              </div>

              <h3 className="font-bold text-lg mb-3">Package Deals (higher close rate)</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• 4-session package: 10% discount</li>
                <li>• 8-session package: 15% discount</li>
                <li>• 12-session package: 20% discount</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 5: Find Students</h2>
              
              <h3 className="font-bold text-lg mb-3">Immediate (This Week)</h3>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li className="flex gap-3">
                  <span className="text-violet-400">1.</span>
                  <span><strong className="text-white">Tell everyone you know</strong> - Text friends, post on personal social media</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-violet-400">2.</span>
                  <span><strong className="text-white">Nextdoor</strong> - Local parents always looking for tutors</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-violet-400">3.</span>
                  <span><strong className="text-white">Facebook parent groups</strong> - Goldmine for local tutoring clients</span>
                </li>
              </ul>

              <h3 className="font-bold text-lg mb-3">Short-term (This Month)</h3>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li className="flex gap-3">
                  <span className="text-violet-400">1.</span>
                  <span><strong className="text-white">Wyzant</strong> - Tutoring marketplace (they take 25%, but students find you)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-violet-400">2.</span>
                  <span><strong className="text-white">Varsity Tutors</strong> - More competitive, good for credentials</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-violet-400">3.</span>
                  <span><strong className="text-white">Craigslist</strong> - Still works for local tutoring</span>
                </li>
              </ul>

              <h3 className="font-bold text-lg mb-3">Long-term (Build Your Brand)</h3>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li className="flex gap-3">
                  <span className="text-violet-400">1.</span>
                  <span><strong className="text-white">YouTube</strong> - Post free lessons, funnel to paid tutoring</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-violet-400">2.</span>
                  <span><strong className="text-white">TikTok</strong> - Quick tips, study hacks</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-violet-400">3.</span>
                  <span><strong className="text-white">Your own website</strong> - SEO for &ldquo;[subject] tutor [city]&rdquo;</span>
                </li>
              </ul>

              <h3 className="font-bold text-lg mb-3">AI for Marketing</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-sm text-gray-500 mb-2 font-mono">PROMPT</p>
                <p className="text-gray-200 font-mono text-sm whitespace-pre-wrap">{`Write 5 different posts I can use to find tutoring students.

My service: [subject] tutoring with AI-powered study tools
My differentiator: 24/7 AI assistant access between sessions
Target: [parents/students] in [location/online]
Platform: [Facebook/Nextdoor/Instagram]

Make each post different - some focusing on results, some on convenience, some on the AI angle.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 6: Deliver Amazing Sessions</h2>
              
              <h3 className="font-bold text-lg mb-3">Session Structure (60 min)</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <ul className="space-y-2 text-gray-300">
                  <li><strong className="text-white">0-5 min:</strong> Check-in, review homework, set agenda</li>
                  <li><strong className="text-white">5-15 min:</strong> Concept explanation with AI-generated visuals</li>
                  <li><strong className="text-white">15-45 min:</strong> Guided practice (AI generates problems in real-time)</li>
                  <li><strong className="text-white">45-55 min:</strong> Independent practice</li>
                  <li><strong className="text-white">55-60 min:</strong> Recap, assign homework, preview next session</li>
                </ul>
              </div>

              <h3 className="font-bold text-lg mb-3">Real-Time AI Use During Sessions</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-500 mb-2 font-mono">PROMPT</p>
                <p className="text-gray-200 font-mono text-sm whitespace-pre-wrap">{`My student just got this problem wrong: [problem]
Their answer: [wrong answer]

Generate:
1. Identify their likely misconception
2. A simpler problem that isolates this concept
3. A hint to guide them to the right approach
4. 2 similar problems for practice`}</p>
              </div>

              <h3 className="font-bold text-lg mb-3">After-Session Summary (Send to Parents)</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-sm text-gray-500 mb-2 font-mono">PROMPT</p>
                <p className="text-gray-200 font-mono text-sm whitespace-pre-wrap">{`Write a parent update email for today's tutoring session.

Student: [name]
Subject: [subject]
Topics covered: [list]
What went well: [observation]
Areas for improvement: [specific skill]
Homework assigned: [list]
Next session preview: [topic]

Keep it warm but professional. Under 200 words.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Scaling Beyond 1-on-1</h2>
              <p className="text-gray-400 mb-4">Once you have consistent students, scale:</p>
              
              <h3 className="font-bold text-lg mb-3">Group Sessions</h3>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• 3-5 students, 50% off individual rate</li>
                <li>• Works great for test prep</li>
                <li>• AI generates differentiated problems for each level</li>
              </ul>

              <h3 className="font-bold text-lg mb-3">Asynchronous Products</h3>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>• Pre-recorded video courses</li>
                <li>• AI-generated workbooks</li>
                <li>• Study guide subscriptions</li>
              </ul>

              <h3 className="font-bold text-lg mb-3">The Math</h3>
              <div className="bg-violet-500/10 border border-violet-500/30 rounded-lg p-4">
                <ul className="space-y-2 text-gray-300">
                  <li>• 10 hours/week × $100/hour = <strong className="text-white">$1,000/week</strong></li>
                  <li>• Add 2 group sessions × $200 = <strong className="text-white">$1,400/week</strong></li>
                  <li>• Add course sales = <strong className="text-white">$2,000+/week</strong></li>
                </ul>
                <p className="text-violet-400 mt-4 font-semibold">That&apos;s a real business, not just a side hustle.</p>
              </div>
            </section>

            <section className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold mb-4">Get Started This Week</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-violet-400 font-bold">Today:</span>
                  <span>Pick your niche, set your rate</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-violet-400 font-bold">Tomorrow:</span>
                  <span>Use AI to create your first curriculum outline</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-violet-400 font-bold">This week:</span>
                  <span>Tell 10 people you&apos;re tutoring, post in 3 local groups</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-violet-400 font-bold">First session:</span>
                  <span>Use AI for prep, problem generation, and follow-up</span>
                </li>
              </ul>
              <p className="text-gray-400 mt-6">
                The tutoring market is massive. AI makes you better at it. Start now.
              </p>
            </section>

            <section className="bg-violet-500/10 border border-violet-500/30 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-3">Related Guides</h2>
              <p className="text-gray-400 mb-4">
                Want more AI income ideas?
              </p>
              <div className="flex flex-wrap gap-3">
                <Link 
                  href="/guides/ai-side-hustles-2026"
                  className="text-violet-400 hover:text-violet-300 text-sm"
                >
                  Complete AI Side Hustles Guide →
                </Link>
                <Link 
                  href="/guides/ai-content-creation-business"
                  className="text-violet-400 hover:text-violet-300 text-sm"
                >
                  AI Content Creation Business →
                </Link>
                <Link 
                  href="/guides/selling-ai-automation-services"
                  className="text-violet-400 hover:text-violet-300 text-sm"
                >
                  Selling AI Automation Services →
                </Link>
              </div>
            </section>
          </div>
        </div>
      
          <RelatedGuides guides={[
                    {
                              slug: 'ai-online-course-business',
                              title: 'Online Courses',
                              description: 'Scale tutoring with courses.'
                    },
                    {
                              slug: 'ai-virtual-assistant',
                              title: 'Virtual Assistant',
                              description: 'Education-focused VA work.'
                    },
                    {
                              slug: 'ai-content-creation-business',
                              title: 'Content Creation',
                              description: 'Create educational content.'
                    }
          ]} />
        </article>

      {/* Footer */}
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
