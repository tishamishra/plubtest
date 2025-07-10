import Link from 'next/link';
import Header from '@/components/Header';
import locationsData from '@/data/locations.json';

export default function LocationsPage() {
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
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-400 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Plumbing Services by Location</h1>
          <p className="text-lg sm:text-xl mb-8">Find professional plumbers in your area. We serve multiple cities with fast, reliable service.</p>
          
          {/* Search Box */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search your city..." 
                className="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="absolute right-2 top-2 bg-blue-700 text-white p-2 rounded">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* States and Locations */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="space-y-12">
          {states.map((state) => (
            <div key={state} className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                {state === 'TX' ? 'Texas' : state === 'CA' ? 'California' : state === 'NY' ? 'New York' : state} Locations
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {locationsByState[state].slice(0, 12).map((location) => (
                  <Link 
                    key={location.id} 
                    href={`/locations/${location.id}`}
                    className="bg-gray-50 rounded-lg p-4 hover:bg-blue-50 transition duration-200 group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-800 group-hover:text-blue-700 transition">
                          {location.name}
                        </h3>
                        <p className="text-sm text-gray-500">{location.state}</p>
                      </div>
                      <span className="text-blue-600 text-sm">→</span>
                    </div>
                  </Link>
                ))}
                {locationsByState[state].length > 12 && (
                  <div className="col-span-full text-center py-4">
                    <p className="text-gray-600">
                      And {locationsByState[state].length - 12} more locations in {state === 'TX' ? 'Texas' : state === 'CA' ? 'California' : state === 'NY' ? 'New York' : state}...
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

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
      </section>

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