import { headers } from 'next/headers';
import locationsData from '@/data/locations.json';
import LocationPageContent from '@/components/LocationPageContent';
import HomePageContent from '@/components/HomePageContent';

export default async function Page() {
  const headersList = await headers();
  const host = headersList.get('host') || '';
  const subdomain = host.split('.')[0];

  // Ignore main domain and dev environments
  const isMainDomain = host === 'affinsight.com' || host === 'www.affinsight.com' || host.includes('localhost') || host.includes('vercel.app');
  if (!isMainDomain) {
    // Try to find a matching location
    const location = locationsData.locations.find(
      loc =>
        loc.id === subdomain.toLowerCase() ||
        loc.name.toLowerCase().replace(/\s+/g, '-') === subdomain.toLowerCase()
    );
    if (location) {
      // Render the location page content as the homepage
      return <LocationPageContent location={location} />;
    }
  }

  // Default: render the main homepage
  return <HomePageContent />;
}
