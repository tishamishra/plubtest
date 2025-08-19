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

  // Handle service pages (e.g., /water-heater-repair) - rewrite to location service page
  const serviceSlugs = [
    'water-heater-repair',
    'tankless-water-heater',
    'water-recirculation-pump',
    'faucet-sink-repair',
    'water-conservation-plumbing',
    'custom-bathroom-renovation',
    'water-system-installation',
    'slab-leak-detection',
    'sump-pump-installation',
    'drain-cleaning',
    'expert-drain-repair',
    'sewer-line-inspection',
    'gas-line-installation',
    'leak-detection-repair',
    'toilet-repair-installation'
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