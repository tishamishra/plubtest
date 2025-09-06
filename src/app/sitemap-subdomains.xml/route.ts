import { NextResponse } from 'next/server'
import locationsData from '@/data/locations.json'

// Define proper types for location data
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

export async function GET() {
  const currentDate = new Date().toISOString()
  
  // Generate location pages (sub-domains only)
  const locationPages = (locationsData as LocationsData).locations.map((location: LocationData) => 
    `  <url>
    <loc>https://${location.id}.gdprofessionalplumbing.com</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`
  ).join('\n')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${locationPages}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
