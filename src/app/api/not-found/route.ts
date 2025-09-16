import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  
  // If it's a subdomain, redirect to the subdomain's main page
  if (hostname.includes('.gdprofessionalplumbing.com')) {
    const subdomain = hostname.replace('.gdprofessionalplumbing.com', '');
    return NextResponse.redirect(`https://${subdomain}.gdprofessionalplumbing.com`, 301);
  }
  
  // Otherwise redirect to main domain
  return NextResponse.redirect('https://www.gdprofessionalplumbing.com', 301);
}

export async function POST(request: NextRequest) {
  return GET(request);
}

export async function PUT(request: NextRequest) {
  return GET(request);
}

export async function DELETE(request: NextRequest) {
  return GET(request);
}
