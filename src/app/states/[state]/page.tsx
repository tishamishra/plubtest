import { notFound } from 'next/navigation';
import Link from 'next/link';
import locationsData from '@/data/locations.json';

interface StatePageProps {
  params: Promise<{ state: string }>;
}

export default async function StatePage({ params }: StatePageProps) {
  const { state } = await params;
  const typedLocationsData = locationsData as { locations: Array<{ id: string; name: string; state: string }> };
  
  // Get all locations for this state
  const stateLocations = typedLocationsData.locations.filter(
    (loc) => loc.state.toLowerCase() === state.toLowerCase()
  );

  if (stateLocations.length === 0) {
    notFound();
  }

  // Get state name from first location
  const stateName = stateLocations[0].state;
  const stateFullName = getStateFullName(stateName);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Plumbing Services in {stateFullName}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Professional plumbing services available throughout {stateFullName}. 
            Licensed, experienced, and affordable for repairs, installs, or maintenance!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:(833) 609-0936" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Call (833) 609-0936
            </a>
            <a 
              href="#cities" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              View All Cities
            </a>
          </div>
        </div>
      </section>

      {/* Cities Grid Section */}
      <section id="cities" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cities We Serve in {stateFullName}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional plumbing services available in {stateLocations.length} cities across {stateFullName}. 
              Click on any city to learn more about our services in that area.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {stateLocations.map((location) => (
              <Link
                key={location.id}
                                      href={`https://${location.id.toLowerCase()}.gdprofessionalplumbing.com`}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 text-center group"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {location.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {location.name}, {location.state}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Plumbing Services in {stateFullName}?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our licensed and experienced plumbers are available 24/7 for emergency services 
            and scheduled appointments throughout {stateFullName}.
          </p>
          <div className="flex justify-center">
            <a 
              href="tel:(833) 609-0936" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Call (833) 609-0936
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function getStateFullName(stateCode: string): string {
  const stateNames: { [key: string]: string } = {
    'CA': 'California',
    'NY': 'New York',
    'TX': 'Texas',
    'FL': 'Florida',
    'IL': 'Illinois',
    'PA': 'Pennsylvania',
    'OH': 'Ohio',
    'GA': 'Georgia',
    'NC': 'North Carolina',
    'MI': 'Michigan',
    'NJ': 'New Jersey',
    'VA': 'Virginia',
    'WA': 'Washington',
    'AZ': 'Arizona',
    'MA': 'Massachusetts',
    'TN': 'Tennessee',
    'IN': 'Indiana',
    'MO': 'Missouri',
    'MD': 'Maryland',
    'CO': 'Colorado',
    'MN': 'Minnesota',
    'WI': 'Wisconsin',
    'SC': 'South Carolina',
    'AL': 'Alabama',
    'LA': 'Louisiana',
    'KY': 'Kentucky',
    'OR': 'Oregon',
    'OK': 'Oklahoma',
    'CT': 'Connecticut',
    'UT': 'Utah',
    'IA': 'Iowa',
    'NV': 'Nevada',
    'AR': 'Arkansas',
    'MS': 'Mississippi',
    'KS': 'Kansas',
    'NE': 'Nebraska',
    'ID': 'Idaho',
    'NH': 'New Hampshire',
    'ME': 'Maine',
    'NM': 'New Mexico',
    'RI': 'Rhode Island',
    'HI': 'Hawaii',
    'MT': 'Montana',
    'DE': 'Delaware',
    'SD': 'South Dakota',
    'ND': 'North Dakota',
    'AK': 'Alaska',
    'VT': 'Vermont',
    'WY': 'Wyoming',
    'WV': 'West Virginia'
  };
  
  return stateNames[stateCode] || stateCode;
} 