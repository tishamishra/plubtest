import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const url = request.nextUrl;

  // Redirect to www version for main domain (SEO best practice)
  if (hostname === 'gdprofessionalplumbing.com') {
    url.hostname = 'www.gdprofessionalplumbing.com';
    return NextResponse.redirect(url, 301); // Permanent redirect
  }

  // Handle different domain patterns
  let subdomain = '';
  
  // Handle gdprofessionalplumbing.com domain
  if (hostname.includes('.gdprofessionalplumbing.com')) {
    subdomain = hostname.replace('.gdprofessionalplumbing.com', '');
  } else if (hostname.includes('localhost')) {
    // For local development, extract subdomain from localhost
    const parts = hostname.split('.');
    if (parts.length > 1) {
      subdomain = parts[0];
    }
  }

  // If it's www or the root domain, let it go normally
  if (subdomain === 'www' || subdomain === 'gdprofessionalplumbing' || subdomain === 'localhost') {
    return NextResponse.next();
  }

  // If no subdomain found, continue normally
  if (!subdomain) {
    return NextResponse.next();
  }

  // Handle homepage (/) - rewrite to location page
  if (url.pathname === '/') {
    url.pathname = `/locations/${subdomain}`;
    return NextResponse.rewrite(url);
  }

  // Handle services page (/services) - rewrite to location services page
  if (url.pathname === '/services') {
    url.pathname = `/locations/${subdomain}/services`;
    return NextResponse.rewrite(url);
  }

  // Handle about page (/about) - rewrite to location about page
  if (url.pathname === '/about') {
    url.pathname = `/locations/${subdomain}/about`;
    return NextResponse.rewrite(url);
  }

  // Handle contact page (/contact) - rewrite to location contact page
  if (url.pathname === '/contact') {
    url.pathname = `/locations/${subdomain}/contact`;
    return NextResponse.rewrite(url);
  }

  // Block access to main domain service pages on sub-domains to prevent duplicate content
  const pathSegments = url.pathname.split('/').filter(Boolean);
  
  // If trying to access /services/* on sub-domain, redirect to city-specific services page
  if (pathSegments[0] === 'services' && pathSegments.length === 1) {
    url.pathname = `/locations/${subdomain}/services`;
    return NextResponse.rewrite(url);
  }
  
  // If trying to access /services/plumber-* on sub-domain, redirect to city-specific service page
  if (pathSegments[0] === 'services' && pathSegments.length === 2 && pathSegments[1].startsWith('plumber-')) {
    url.pathname = `/locations/${subdomain}/${pathSegments[1]}`;
    return NextResponse.rewrite(url);
  }
  
  // Block direct access to main domain service pages on sub-domains
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
  ];

  // If trying to access main domain service page directly on sub-domain, redirect to city-specific version
  if (pathSegments.length === 1 && serviceSlugs.includes(pathSegments[0])) {
    url.pathname = `/locations/${subdomain}/${pathSegments[0]}`;
    return NextResponse.rewrite(url);
  }

  // Block access to other main domain pages on sub-domains to prevent duplicate content
  const blockedPaths = [
    'states',
    'api',
    'robots.txt',
    'sitemap.xml'
  ];
  
  if (pathSegments.length > 0 && blockedPaths.includes(pathSegments[0])) {
    // Return 404 for blocked paths on sub-domains
    return new NextResponse('Not Found', { status: 404 });
  }

  // For all other routes, let them go through normally
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 