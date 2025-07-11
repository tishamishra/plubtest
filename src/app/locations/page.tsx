import { getLocationBySubdomain } from '@/utils/subdomain';
import LocationPageContent from '@/components/LocationPageContent';

export const dynamic = 'force-dynamic';

export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string>> }) {
  const params = await searchParams;
  const city = params?.city?.toLowerCase();
  const location = city ? getLocationBySubdomain(city) : null;

  if (!location) {
    return <h1>City not found</h1>;
  }

  return <LocationPageContent location={location} />;
} 