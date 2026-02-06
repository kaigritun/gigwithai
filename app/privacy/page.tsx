import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | GigWithAI',
  description: 'Privacy policy for GigWithAI.',
}

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <div className="space-y-6 text-white/70 text-sm">
        <p><strong className="text-white">Last updated:</strong> February 2026</p>
        <h2 className="text-xl font-semibold text-white mt-8">Information We Collect</h2>
        <p>We collect minimal information: email (if you subscribe) and usage analytics.</p>
        <h2 className="text-xl font-semibold text-white mt-8">How We Use Your Information</h2>
        <p>To send updates, improve our content, and analyze usage patterns.</p>
        <h2 className="text-xl font-semibold text-white mt-8">Contact</h2>
        <p>Questions? Email <a href="mailto:hello@gigwithai.com" className="text-violet-400">hello@gigwithai.com</a></p>
      </div>
    </div>
  )
}
