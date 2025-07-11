import { NextRequest, NextResponse } from 'next/server';
import { getLocationBySubdomain } from './utils/subdomain';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';
  const pathname = url.pathname;

  // Extract subdomain from hostname
  const subdomain = hostname.split('.')[0];

  // Skip if it's localhost or main domain
  if (
    hostname.includes('localhost') ||
    hostname.includes('vercel.app') ||
    hostname.includes('netlify.app') ||
    hostname === 'affinsight.com' ||
    hostname === 'www.affinsight.com'
  ) {
    return NextResponse.next();
  }

  // Check if subdomain matches a location
  const location = getLocationBySubdomain(subdomain);

  // If the request is to / (homepage) on a subdomain, redirect to the location page
  if (location && pathname === '/') {
    const locationUrl = new URL(`/locations/${location.id}`, request.url);
    return NextResponse.redirect(locationUrl);
  }

  // For all other requests, keep existing logic (optional: redirect other subdomain routes to location page or 404)
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 