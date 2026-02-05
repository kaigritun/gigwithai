import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold text-white mb-4">Guides</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li>
                <Link href="/guides/ai-side-hustles-2026" className="hover:text-white transition-colors">
                  AI Side Hustles
                </Link>
              </li>
              <li>
                <Link href="/guides/ai-content-creation-business" className="hover:text-white transition-colors">
                  Content Business
                </Link>
              </li>
              <li>
                <Link href="/guides/ai-freelancing-first-client" className="hover:text-white transition-colors">
                  First Client
                </Link>
              </li>
              <li>
                <Link href="/guides" className="hover:text-white transition-colors">
                  View All →
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li>
                <Link href="/tools" className="hover:text-white transition-colors">
                  AI Tools
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            © 2026 GigWithAI. Real guides for real income.
          </p>
          <p className="text-sm text-white/40">
            Made with AI, for hustlers.
          </p>
        </div>
      </div>
    </footer>
  )
}
