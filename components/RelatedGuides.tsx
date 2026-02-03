import Link from 'next/link'

interface RelatedGuide {
  slug: string
  title: string
  description: string
}

interface RelatedGuidesProps {
  guides: RelatedGuide[]
}

export default function RelatedGuides({ guides }: RelatedGuidesProps) {
  return (
    <section className="mt-16 pt-8 border-t border-white/10">
      <h2 className="text-xl font-bold mb-6">Related Guides</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className="block p-4 bg-white/5 border border-white/10 rounded-lg hover:border-violet-500/50 hover:bg-white/10 transition-all"
          >
            <h3 className="font-semibold mb-2 text-white">{guide.title}</h3>
            <p className="text-sm text-gray-400 line-clamp-2">{guide.description}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
