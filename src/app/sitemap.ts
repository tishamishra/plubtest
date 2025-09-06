import { MetadataRoute } from 'next'
import locationsData from '@/data/locations.json'

export default function sitemap(): MetadataRoute.Sitemap {
  // HARDCODE the correct domain - NO environment variables, NO affinsight.com
  const baseUrl = 'https://www.gdprofessionalplumbing.com'
  const currentDate = new Date().toISOString()

  // Main domain pages - HARDCODED URLs
  const mainPages = [
    {
      url: 'https://www.gdprofessionalplumbing.com',
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: 'https://www.gdprofessionalplumbing.com/services',
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: 'https://www.gdprofessionalplumbing.com/about',
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://www.gdprofessionalplumbing.com/contact',
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://www.gdprofessionalplumbing.com/locations',
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]

  // Main domain service pages - HARDCODED URLs
  const servicePages = [
    'plumber-water-heater-repair',
    'plumber-tankless-water-heater',
    'plumber-water-recirculation-pump',
    'plumber-faucet-sink-repair',
    'plumber-water-conservation',
    'plumber-bathroom-renovation',
    'plumber-water-system-repair',
    'plumber-slab-leak-repair',
    'plumber-sump-pump-repair',
    'plumber-drain-cleaning',
    'plumber-sewer-line-repair',
    'plumber-gas-line-repair',
    'plumber-leak-detection',
    'plumber-toilet-repair',
    'plumber-emergency-service'
  ].map(service => ({
    url: `https://www.gdprofessionalplumbing.com/services/${service}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Location pages (sub-domains) - HARDCODED gdprofessionalplumbing.com
  const locationPages = (locationsData as any).locations.map((location: any) => ({
    url: `https://${location.id}.gdprofessionalplumbing.com`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Location-specific service pages - HARDCODED gdprofessionalplumbing.com
  const locationServicePages = (locationsData as any).locations.flatMap((location: any) =>
    servicePages.map(service => ({
      url: `https://${location.id}.gdprofessionalplumbing.com/services/${service.url.split('/').pop()}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  )

  // Location-specific about, contact, and services pages - HARDCODED gdprofessionalplumbing.com
  const locationSpecificPages = (locationsData as any).locations.flatMap((location: any) => [
    {
      url: `https://${location.id}.gdprofessionalplumbing.com/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `https://${location.id}.gdprofessionalplumbing.com/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `https://${location.id}.gdprofessionalplumbing.com/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
  ])

  return [
    ...mainPages,
    ...servicePages,
    ...locationPages,
    ...locationServicePages,
    ...locationSpecificPages,
  ]
}