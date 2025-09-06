import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

export async function GET() {
  const headersList = await headers()
  const host = headersList.get('host') || ''
  const currentDate = new Date().toISOString()
  
  // Extract subdomain from host
  let subdomain = ''
  if (host.includes('.gdprofessionalplumbing.com')) {
    subdomain = host.replace('.gdprofessionalplumbing.com', '')
  }
  
  // If it's the main domain, redirect to sitemap-main.xml
  if (subdomain === 'www' || subdomain === 'gdprofessionalplumbing' || !subdomain) {
    return NextResponse.redirect('https://www.gdprofessionalplumbing.com/sitemap-main.xml', 301)
  }

  // Check if this is a state subdomain (2-letter state codes)
  const stateCodes = ['ca', 'ny', 'tx', 'fl', 'il', 'pa', 'oh', 'ga', 'nc', 'mi', 'nj', 'va', 'wa', 'az', 'ma', 'tn', 'in', 'mo', 'md', 'co', 'mn', 'wi', 'sc', 'al', 'la', 'ky', 'or', 'ok', 'ct', 'ut', 'ia', 'nv', 'ar', 'ms', 'ks', 'ne', 'id', 'nh', 'me', 'nm', 'ri', 'hi', 'mt', 'de', 'sd', 'nd', 'ak', 'vt', 'wy', 'wv'];
  // const isStateSubdomain = stateCodes.includes(subdomain.toLowerCase()); // Currently not used in sitemap generation
  
  const serviceSlugs = [
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
  ]
  
  const baseUrl = `https://${subdomain}.gdprofessionalplumbing.com`
  
  // Main pages for this subdomain
  const mainPages = [
    `  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`,
    `  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`,
    `  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`,
    `  <url>
    <loc>${baseUrl}/services</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`
  ].join('\n')
  
  // Service pages for this subdomain
  const servicePages = serviceSlugs.map(service => 
    `  <url>
    <loc>${baseUrl}/${service}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`
  ).join('\n')
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${mainPages}
${servicePages}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
