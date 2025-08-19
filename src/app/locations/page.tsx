import { getLocationBySubdomain } from '@/utils/subdomain';
import LocationPageContent from '@/components/LocationPageContent';
import Header from '@/components/Header';
import locationsData from '@/data/locations.json';

export const dynamic = 'force-dynamic';

type BasicLocation = { id: string; name: string; state: string };

export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string>> }) {
  const params = await searchParams;
  const city = params?.city?.toLowerCase();
  
  // If no city parameter, show locations listing
  if (!city) {
    const typedLocations = (locationsData as { locations: BasicLocation[] }).locations;
    
    // Group locations by state
    const locationsByState = typedLocations.reduce(
      (acc: Record<string, BasicLocation[]>, location: BasicLocation) => {
        if (!acc[location.state]) {
          acc[location.state] = [];
        }
        acc[location.state].push(location);
        return acc;
      },
      {} as Record<string, BasicLocation[]>
    );

    // Deduplicate by id within each state and sort by name for stable render
    const dedupedLocationsByState: Record<string, BasicLocation[]> = Object.fromEntries(
      Object.entries(locationsByState).map(([state, list]) => {
        const seenIds = new Set<string>();
        const unique = (list as BasicLocation[])
          .filter((loc: BasicLocation) => {
            if (seenIds.has(loc.id)) return false;
            seenIds.add(loc.id);
            return true;
          })
          .sort((a: BasicLocation, b: BasicLocation) => a.name.localeCompare(b.name));
        return [state, unique];
      })
    ) as Record<string, BasicLocation[]>;

    const states = Object.keys(dedupedLocationsByState).sort();

    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-visible">
          <img 
            src="/hero-bg.jpg" 
            alt="Plumbing background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center text-white px-6 max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Plumbing Services by Location
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl opacity-95 max-w-3xl mx-auto leading-relaxed">
                Find professional plumbers in your area. We serve multiple cities with fast, reliable service.
              </p>
            </div>
          </div>
        </section>
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
                  {dedupedLocationsByState[state].map((location: BasicLocation) => (
                    <a
                      key={`${location.id}-${location.state}`}
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
              <div className="text-3xl font-bold text-blue-700">{typedLocations.length}</div>
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