import Link from 'next/link';
import Header from '@/components/Header';
import locationsData from '@/data/locations.json';

const cityData: Record<string, string> = {
  ny: 'New York',
  delhi: 'Delhi',
  la: 'Los Angeles',
  london: 'London',
};

export default function LocationPage({ searchParams }: { searchParams: { city?: string } }) {
  const city = searchParams.city?.toLowerCase();
  const cityName = city ? cityData[city] : null;

  if (!cityName) {
    return <h1>City not found</h1>;
  }

  return (
    <div>
      <h1>Welcome to {cityName} Plumbing Services</h1>
      <p>Serving clients in and around {cityName}</p>
    </div>
  );
} 