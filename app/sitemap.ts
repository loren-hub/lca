import type { MetadataRoute } from 'next'
import { locations } from '@/lib/locations'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lcatechnologysolutions.com'

  const locationUrls: MetadataRoute.Sitemap = locations.map((loc) => ({
    url: `${baseUrl}/ciberseguridad-en/${loc.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/aviso-legal`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacidad`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]

  return [...staticPages, ...locationUrls]
}

