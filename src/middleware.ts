import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const url = request.nextUrl;

  // Handle different domain patterns
  let subdomain = '';
  
  // Handle gdprofessionalplumbing.com domain
  if (hostname.includes('.gdprofessionalplumbing.com')) {
    subdomain = hostname.replace('.gdprofessionalplumbing.com', '');
  } else if (hostname.includes('.affinsight.com')) {
    subdomain = hostname.replace('.affinsight.com', '');
  } else if (hostname.includes('localhost')) {
    // For local development, extract subdomain from localhost
    const parts = hostname.split('.');
    if (parts.length > 1) {
      subdomain = parts[0];
    }
  }

  // If it's www or the root domain, let it go normally
  if (subdomain === 'www' || subdomain === 'gdprofessionalplumbing' || subdomain === 'affinsight' || subdomain === 'localhost') {
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

  // Handle service pages (e.g., /plumber-water-heater-repair) - rewrite to location service page
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

  const pathSegments = url.pathname.split('/').filter(Boolean);
  if (pathSegments.length === 1 && serviceSlugs.includes(pathSegments[0])) {
    url.pathname = `/locations/${subdomain}/${pathSegments[0]}`;
    return NextResponse.rewrite(url);
  }

  // For all other routes, let them go through normally
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 