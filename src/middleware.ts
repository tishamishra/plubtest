import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const url = request.nextUrl;

  // Remove .affinsight.com from hostname
  const subdomain = hostname.replace('.affinsight.com', '');

  // If it's www or the root domain, let it go normally
  if (subdomain === 'www' || subdomain === 'affinsight') {
    return NextResponse.next();
  }

  // Optionally, handle allowed cities only
  // const allowedCities = ['ny', 'delhi', 'la', 'london'];
  // if (!allowedCities.includes(subdomain)) {
  //   url.pathname = '/404';
  //   return NextResponse.rewrite(url);
  // }

  // Rewrite to /locations with the subdomain as query
  url.pathname = `/locations`;
  url.searchParams.set('city', subdomain);

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 