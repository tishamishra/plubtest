import locationsData from '@/data/locations.json';

// Force dynamic rendering to prevent caching issues
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const cityData: Record<string, string> = {
  'san-diego': 'San Diego',
  'houston': 'Houston',
  'dallas': 'Dallas',
  'austin': 'Austin',
  'los-angeles': 'Los Angeles',
  'new-york': 'New York',
  'buffalo': 'Buffalo',
  'rochester': 'Rochester',
  'yonkers': 'Yonkers',
  'syracuse': 'Syracuse',
  // Add more cities as needed
};

interface Service {
  icon: string;
  title: string;
  description: string;
}

export default async function LocationPage({ searchParams }: { searchParams: { city?: string } }) {
  const city = searchParams.city?.toLowerCase();
  const cityName = city ? cityData[city] : null;

  if (!cityName) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">City not found</h1>
          <p className="text-gray-600">The requested city &ldquo;{city}&rdquo; is not available.</p>
        </div>
      </div>
    );
  }

  // Find the location data from your JSON
  const location = locationsData.locations.find(loc => 
    loc.id === city || 
    loc.name.toLowerCase().replace(/\s+/g, '-') === city
  );

  if (!location) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Location not found</h1>
          <p className="text-gray-600">No data available for {cityName}.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to {cityName} Plumbing Services
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Serving clients in and around {cityName}, {location.state}
        </p>
        
        {/* Location Info */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">About Our Services in {cityName}</h2>
          <p className="text-gray-700 mb-4">{location.heroSubtitle}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800">Phone</h3>
              <p className="text-blue-600">{location.phone}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800">Service Areas</h3>
              <p className="text-green-600">{location.areas.length} areas served</p>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Our Services in {cityName}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {location.services.slice(0, 6).map((service: Service, index: number) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="text-2xl mb-2">{service.icon}</div>
                <h3 className="font-semibold text-gray-800">{service.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 