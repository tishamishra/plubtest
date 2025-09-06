import { MetadataRoute } from 'next'

// Optimized sitemap - only essential pages for fast loading
export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString()

  // Only main domain pages - fast loading
  return [
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
    // Main domain service pages
    {
      url: 'https://www.gdprofessionalplumbing.com/services/plumber-water-heater-repair',
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: 'https://www.gdprofessionalplumbing.com/services/plumber-tankless-water-heater',
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: 'https://www.gdprofessionalplumbing.com/services/plumber-water-recirculation-pump',
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: 'https://www.gdprofessionalplumbing.com/services/plumber-faucet-sink-repair',
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: 'https://www.gdprofessionalplumbing.com/services/plumber-water-conservation',
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: 'https://www.gdprofessionalplumbing.com/services/plumber-bathroom-renovation',
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: 'https://www.gdprofessionalplumbing.com/services/plumber-water-system-repair',
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: 'https://www.gdprofessionalplumbing.com/services/plumber-slab-leak-repair',
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: 'https://www.gdprofessionalplumbing.com/services/plumber-sump-pump-repair',
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: 'https://www.gdprofessionalplumbing.com/services/plumber-drain-cleaning',
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: 'https://www.gdprofessionalplumbing.com/services/plumber-sewer-line-repair',
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: 'https://www.gdprofessionalplumbing.com/services/plumber-gas-line-repair',
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: 'https://www.gdprofessionalplumbing.com/services/plumber-leak-detection',
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: 'https://www.gdprofessionalplumbing.com/services/plumber-toilet-repair',
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: 'https://www.gdprofessionalplumbing.com/services/plumber-emergency-service',
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]
}