import { MetadataRoute } from 'next'
import locationsData from '@/data/locations.json'

// Define proper types for location data based on actual JSON structure
interface LocationData {
  id: string;
  name: string;
  state: string;
  fullName: string;
  description: string;
  phone: string;
  heroTitle: string;
  heroSubtitle: string;
  services: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  areas: string[];
  zipCodes: string[];
  image: string;
  meta: {
    title: string;
    description: string;
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  testimonials: Array<{
    name: string;
    text: string;
    location: string;
  }>;
}

interface LocationsData {
  locations: LocationData[];
}

export default function sitemap(): MetadataRoute.Sitemap {
  // HARDCODE the correct domain - NO environment variables, NO affinsight.com
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
  const locationPages = (locationsData as LocationsData).locations.map((location: LocationData) => ({
    url: `https://${location.id}.gdprofessionalplumbing.com`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Location-specific service pages - HARDCODED gdprofessionalplumbing.com
  const locationServicePages = (locationsData as LocationsData).locations.flatMap((location: LocationData) =>
    servicePages.map(service => ({
      url: `https://${location.id}.gdprofessionalplumbing.com/services/${service.url.split('/').pop()}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  )

  // Location-specific about, contact, and services pages - HARDCODED gdprofessionalplumbing.com
  const locationSpecificPages = (locationsData as LocationsData).locations.flatMap((location: LocationData) => [
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