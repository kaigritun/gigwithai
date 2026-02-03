import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gigwithai.com'
  
  const pages = [
    { path: '', priority: 1, changeFrequency: 'weekly' as const },
    { path: '/guides', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/tools', priority: 0.9, changeFrequency: 'weekly' as const },
    // Guides
    { path: '/guides/ai-side-hustles-2026', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/guides/ai-passive-income-2026', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/guides/chatgpt-money-guide', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/guides/ai-freelancing-first-client', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/guides/pricing-ai-services', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/guides/selling-ai-automation-services', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/guides/ai-content-creation-business', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/guides/ai-copywriting-services', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/guides/ai-social-media-management', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/guides/ai-newsletter-business', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/guides/ai-online-course-business', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/guides/ai-youtube-channel', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/guides/ai-consulting-practice', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/guides/ai-virtual-assistant', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/guides/ai-data-automation', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/guides/ai-bookkeeping-services', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/guides/ai-tutoring-side-hustle', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/guides/ai-voice-acting-side-hustle', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/guides/ai-print-on-demand', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/guides/ai-etsy-sellers', priority: 0.8, changeFrequency: 'monthly' as const },
  ]

  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}
