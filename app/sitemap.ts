import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gigwithai.com'
  
  // Static pages
  const staticPages = [
    { path: '', priority: 1, changeFrequency: 'weekly' as const },
    { path: '/guides', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/tools', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/toolkit', priority: 0.9, changeFrequency: 'weekly' as const },
  ]
  
  // Dynamically get all guide pages
  const guidesDir = path.join(process.cwd(), 'app/guides')
  let guidePages: { path: string; priority: number; changeFrequency: 'monthly' }[] = []
  
  try {
    const guideFolders = fs.readdirSync(guidesDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name)
    
    guidePages = guideFolders.map(folder => ({
      path: `/guides/${folder}`,
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    }))
  } catch (error) {
    console.error('Error reading guides directory:', error)
  }

  const allPages = [...staticPages, ...guidePages]

  return allPages.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}
