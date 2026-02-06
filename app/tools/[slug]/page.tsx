import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { allTools, getToolBySlug } from '@/lib/tools'
import { ScoreCalculator, Quiz, Generator } from '@/components/tools'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return allTools.map((tool) => ({
    slug: tool.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const tool = getToolBySlug(slug)
  
  if (!tool) {
    return { title: 'Tool Not Found' }
  }

  return {
    title: tool.seo.title,
    description: tool.seo.description,
    openGraph: {
      title: tool.seo.title,
      description: tool.seo.description,
      type: 'website',
    },
  }
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params
  const tool = getToolBySlug(slug)

  if (!tool) {
    notFound()
  }

  // Get related tools (same category or type)
  const relatedTools = allTools
    .filter(t => t.slug !== tool.slug && (t.category === tool.category || t.type === tool.type))
    .slice(0, 3)

  return (
    <>
<main className="max-w-4xl mx-auto px-6 py-16">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-white/40 mb-8">
          <Link href="/" className="hover:text-white/60">Home</Link>
          <span>/</span>
          <Link href="/tools" className="hover:text-white/60">Tools</Link>
          <span>/</span>
          <span className="text-white/60">{tool.name}</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono bg-orange-500/20 text-orange-400 px-2 py-1 rounded uppercase">
              {tool.category}
            </span>
            <span className="text-xs font-mono bg-white/10 text-white/60 px-2 py-1 rounded uppercase">
              {tool.type === 'score' ? 'Calculator' : tool.type === 'quiz' ? 'Quiz' : 'Generator'}
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4">{tool.name}</h1>
          <p className="text-xl text-white/60">{tool.description}</p>
        </div>

        {/* Tool Component */}
        <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6 md:p-8">
          {tool.type === 'score' && <ScoreCalculator tool={tool} />}
          {tool.type === 'quiz' && <Quiz tool={tool} />}
          {tool.type === 'generator' && <Generator tool={tool} />}
        </div>

        {/* Related Tools */}
        {relatedTools.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Related Tools</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {relatedTools.map(t => (
                <Link 
                  key={t.slug}
                  href={`/tools/${t.slug}`}
                  className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-orange-500/30 rounded-lg transition-all group"
                >
                  <div className="text-xs text-white/40 mb-1 uppercase">{t.category}</div>
                  <div className="font-medium group-hover:text-orange-400 transition-colors">{t.name}</div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 p-6 bg-orange-500/10 border border-orange-500/20 rounded-xl text-center">
          <h3 className="font-semibold mb-2">Want more side hustle strategies?</h3>
          <p className="text-white/60 mb-4">Get weekly AI income tips delivered to your inbox.</p>
          <Link 
            href="/#signup"
            className="inline-block bg-orange-500 hover:bg-orange-400 text-black font-medium px-6 py-2 rounded-lg transition-colors"
          >
            Get Free Tips →
          </Link>
        </div>
      </main>

      {/* Footer */}
    </>
  )
}