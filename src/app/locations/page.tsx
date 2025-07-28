import { getLocationBySubdomain } from '@/utils/subdomain';
import LocationPageContent from '@/components/LocationPageContent';
import Header from '@/components/Header';
import locationsData from '@/data/locations.json';

export const dynamic = 'force-dynamic';

export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string>> }) {
  const params = await searchParams;
  const city = params?.city?.toLowerCase();
  
  // If no city parameter, show locations listing
  if (!city) {
    const { locations } = locationsData;
    
    // Group locations by state
    const locationsByState = locations.reduce((acc, location) => {
      if (!acc[location.state]) {
        acc[location.state] = [];
      }
      acc[location.state].push(location);
      return acc;
    }, {} as Record<string, typeof locations>);

    const states = Object.keys(locationsByState).sort();

    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* States and Locations */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Plumbing Services by Location</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Find professional plumbers in your area. We serve multiple cities with fast, reliable service.
          </p>
          
          <div className="space-y-8">
            {states.map((state) => (
              <div key={state} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{state}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {locationsByState[state].map((location) => (
                    <a
                      key={location.id}
                      href={`/locations/${location.id}`}
                      className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition text-center"
                    >
                      <h4 className="font-semibold text-gray-800 mb-1">{location.name}</h4>
                      <p className="text-sm text-gray-600">{location.state}</p>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Coverage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-700">{locations.length}</div>
              <div className="text-gray-600">Cities Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-700">{states.length}</div>
              <div className="text-gray-600">States Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-700">24/7</div>
              <div className="text-gray-600">Emergency Service</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="bg-blue-700 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Need Plumbing Services?</h2>
            <p className="text-xl mb-8">Call us today for fast, reliable service in your area.</p>
            <a 
              href="tel:+18334450128" 
              className="bg-white text-blue-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition inline-block"
            >
              Call (833) 445-0128
            </a>
          </div>
        </section>
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