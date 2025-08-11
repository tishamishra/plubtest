import { NextResponse } from 'next/server';
import locationsData from '@/data/locations.json';

export async function GET() {
  try {
    // Extract only the necessary fields for the service areas component
    const locations = locationsData.locations.map(location => ({
      id: location.id,
      name: location.name,
      state: location.state,
      fullName: location.fullName
    }));

    return NextResponse.json({ locations });
  } catch (error) {
    console.error('Error fetching locations:', error);
    return NextResponse.json({ error: 'Failed to fetch locations' }, { status: 500 });
  }
} 