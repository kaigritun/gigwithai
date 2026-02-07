import SideHustleScorer from '@/components/tools/SideHustleScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Discovery Call Script Score | GigWithAI',
  description: 'Score your discovery call script. Convert more leads to clients.',
  keywords: ['discovery call', 'sales call', 'client call', 'freelance sales'],
}

export default function DiscoveryCallScriptScorePage() {
  return (
    <div className="py-16 px-6">
      <SideHustleScorer
        title="Discovery Call Script Score"
        subtitle="Optimize your discovery call script for conversions"
        placeholder="Paste your discovery call script or talking points here..."
        ctaHref="/guides/freelance-discovery-calls"
        variant="freelance"
      />
    </div>
  )
}
