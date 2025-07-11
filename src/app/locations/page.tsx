import LocationPageContent from '@/components/LocationPageContent';
import { getLocationBySubdomain } from '@/utils/subdomain';

// Force dynamic rendering to prevent caching issues
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function LocationPage({ searchParams }: { searchParams: { city?: string } }) {
  const city = searchParams.city?.toLowerCase();
  
  if (!city) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">City not found</h1>
          <p className="text-gray-600">No city parameter provided.</p>
        </div>
      </div>
    );
  }

  const location = getLocationBySubdomain(city);

  if (!location) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">City not found</h1>
          <p className="text-gray-600">The requested city &ldquo;{city}&rdquo; is not available.</p>
        </div>
      </div>
    );
  }

  return <LocationPageContent location={location} />;
} 