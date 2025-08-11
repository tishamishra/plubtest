import { NextRequest, NextResponse } from 'next/server';
import locationsData from '@/data/locations.json';

interface Location {
  id: string;
  name: string;
  state: string;
  fullName: string;
  description: string;
  phone: string;
  heroTitle: string;
  heroSubtitle: string;
  services: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  areas: string[];
  zipCodes: string[];
  image: string;
  meta: {
    title: string;
    description: string;
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  testimonials: Array<{
    name: string;
    text: string;
    location: string;
  }>;
}

interface LocationsData {
  locations: Location[];
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ location: string }> }
) {
  try {
    const { location } = await params;
    const typedLocationsData = locationsData as LocationsData;
    
    // Find the location by ID
    // For cities that might exist in multiple states, prefer CA (California), NY (New York), MD (Maryland), MA (Massachusetts), CT (Connecticut), CO (Colorado), PA (Pennsylvania), AZ (Arizona), or IN (Indiana) if available
    let locationData = typedLocationsData.locations.find(
      (loc: Location) => loc.id === location && (loc.state === 'CA' || loc.state === 'NY' || loc.state === 'MD' || loc.state === 'MA' || loc.state === 'CT' || loc.state === 'CO' || loc.state === 'PA' || loc.state === 'AZ' || loc.state === 'IN')
    );
    
    // If no CA, NY, MD, MA, CT, CO, PA, AZ, or IN version found, fall back to any version
    if (!locationData) {
      locationData = typedLocationsData.locations.find(
        (loc: Location) => loc.id === location
      );
    }

    if (!locationData) {
      return NextResponse.json(
        { error: 'Location not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ location: locationData });
  } catch (error) {
    console.error('Error fetching location:', error);
    return NextResponse.json(
      { error: 'Failed to fetch location' },
      { status: 500 }
    );
  }
} 