import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | GigWithAI',
  description: 'Terms of service for GigWithAI.',
}

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
      <div className="space-y-6 text-white/70 text-sm">
        <p><strong className="text-white">Last updated:</strong> February 2026</p>
        <h2 className="text-xl font-semibold text-white mt-8">Use of Service</h2>
        <p>By using GigWithAI, you agree to these terms. Our content is for informational purposes only.</p>
        <h2 className="text-xl font-semibold text-white mt-8">Disclaimer</h2>
        <p>Income results vary. We share strategies and tools, but cannot guarantee specific earnings.</p>
        <h2 className="text-xl font-semibold text-white mt-8">Contact</h2>
        <p>Questions? Email <a href="mailto:hello@gigwithai.com" className="text-violet-400">hello@gigwithai.com</a></p>
      </div>
    </div>
  )
}
