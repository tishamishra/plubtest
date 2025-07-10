import { NextResponse } from 'next/server';
import { getAllSubdomains } from '../../../utils/subdomain';

export async function GET() {
  try {
    const subdomains = getAllSubdomains();
    
    return NextResponse.json({
      success: true,
      data: subdomains,
      total: subdomains.length
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch subdomains' },
      { status: 500 }
    );
  }
} 