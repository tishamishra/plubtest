import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const url = request.nextUrl;

  // Handle different domain patterns
  let subdomain = '';
  
  if (hostname.includes('.affinsight.com')) {
    subdomain = hostname.replace('.affinsight.com', '');
  } else if (hostname.includes('localhost')) {
    // For local development, extract subdomain from localhost
    const parts = hostname.split('.');
    if (parts.length > 1) {
      subdomain = parts[0];
    }
  }

  // If it's www or the root domain, let it go normally
  if (subdomain === 'www' || subdomain === 'affinsight' || subdomain === 'localhost') {
    return NextResponse.next();
  }

  // If no subdomain found, continue normally
  if (!subdomain) {
    return NextResponse.next();
  }

  // Only rewrite the homepage (/) to location page
  if (url.pathname === '/') {
    url.pathname = `/locations/${subdomain}`;
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