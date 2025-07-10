import { NextRequest, NextResponse } from 'next/server';
import { getLocationBySubdomain } from './utils/subdomain';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';
  
  // Extract subdomain from hostname
  const subdomain = hostname.split('.')[0];
  
  // Skip if it's localhost or main domain
  if (hostname.includes('localhost') || hostname.includes('vercel.app') || hostname.includes('netlify.app')) {
    return NextResponse.next();
  }
  
  // Check if subdomain matches a location
  const location = getLocationBySubdomain(subdomain);
  
  if (location) {
    // Redirect to the location page
    const locationUrl = new URL(`/locations/${location.id}`, request.url);
    return NextResponse.redirect(locationUrl);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 