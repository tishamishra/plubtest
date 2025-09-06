import { notFound } from 'next/navigation';
import Link from 'next/link';
import locationsData from '@/data/locations.json';
import { Metadata } from 'next';

interface StateServicesPageProps {
  params: Promise<{ state: string }>;
}

export async function generateMetadata({ params }: StateServicesPageProps): Promise<Metadata> {
  const { state } = await params;
  const typedLocationsData = locationsData as { locations: Array<{ id: string; name: string; state: string }> };
  
  const stateLocations = typedLocationsData.locations.filter(
    (loc) => loc.state.toLowerCase() === state.toLowerCase()
  );

  if (stateLocations.length === 0) {
    return {
      title: 'State Not Found',
      description: 'The requested state was not found.',
    };
  }

  const stateName = stateLocations[0].state;
  const stateFullName = getStateFullName(stateName);

  return {
    title: `Plumbing Services in ${stateFullName} | GD Professional Plumbing`,
    description: `Professional plumbing services in ${stateFullName}. Expert plumbers for drain cleaning, water heater repair, leak detection & 24/7 emergency services. Call (833) 609-0936!`,
    keywords: [
      `plumbing services ${stateFullName}`,
      `plumber ${stateFullName}`,
      `drain cleaning ${stateFullName}`,
      `water heater repair ${stateFullName}`,
      `leak detection ${stateFullName}`,
      `emergency plumber ${stateFullName}`,
      `sewer line repair ${stateFullName}`,
      `toilet repair ${stateFullName}`,
      `faucet repair ${stateFullName}`,
      `plumbing contractor ${stateFullName}`,
      `residential plumber ${stateFullName}`,
      `commercial plumber ${stateFullName}`,
      `plumbing company ${stateFullName}`,
      `plumbing repair ${stateFullName}`,
      `plumbing installation ${stateFullName}`
    ],
    openGraph: {
      title: `Plumbing Services in ${stateFullName} | GD Professional Plumbing`,
      description: `Professional plumbing services in ${stateFullName}. Expert plumbers for drain cleaning, water heater repair, leak detection & 24/7 emergency services.`,
      url: `https://www.gdprofessionalplumbing.com/states/${state.toLowerCase()}/services`,
      siteName: 'GD Professional Plumbing',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Plumbing Services in ${stateFullName} | GD Professional Plumbing`,
      description: `Professional plumbing services in ${stateFullName}. Expert plumbers for drain cleaning, water heater repair, leak detection & 24/7 emergency services.`,
    },
    alternates: {
      canonical: `https://www.gdprofessionalplumbing.com/states/${state.toLowerCase()}/services`,
    },
  };
}

export default async function StateServicesPage({ params }: StateServicesPageProps) {
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

  const services = [
    {
      title: 'Drain Cleaning',
      description: 'Professional drain cleaning services to clear clogs and prevent future blockages.',
      icon: '🚰',
      slug: 'plumber-drain-cleaning'
    },
    {
      title: 'Water Heater Repair',
      description: 'Expert water heater repair and installation services for all types of water heaters.',
      icon: '🔥',
      slug: 'plumber-water-heater-repair'
    },
    {
      title: 'Leak Detection',
      description: 'Advanced leak detection technology to find and repair water leaks quickly.',
      icon: '🔍',
      slug: 'plumber-leak-detection'
    },
    {
      title: 'Sewer Line Repair',
      description: 'Complete sewer line repair and replacement services for residential and commercial properties.',
      icon: '🏠',
      slug: 'plumber-sewer-line-repair'
    },
    {
      title: 'Toilet Repair',
      description: 'Fast and reliable toilet repair services for all toilet problems.',
      icon: '🚽',
      slug: 'plumber-toilet-repair'
    },
    {
      title: 'Faucet & Sink Repair',
      description: 'Professional faucet and sink repair services for kitchens and bathrooms.',
      icon: '🚿',
      slug: 'plumber-faucet-sink-repair'
    },
    {
      title: 'Gas Line Repair',
      description: 'Licensed gas line repair and installation services for safety and efficiency.',
      icon: '⛽',
      slug: 'plumber-gas-line-repair'
    },
    {
      title: 'Emergency Service',
      description: '24/7 emergency plumbing services available throughout the state.',
      icon: '🚨',
      slug: 'plumber-emergency-service'
    }
  ];

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
              href="#services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Plumbing Services in {stateFullName}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional plumbing services available in {stateLocations.length} cities across {stateFullName}. 
              Click on any service to learn more about our expertise in that area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.slug}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center group"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <a
                  href={`/states/${state.toLowerCase()}/${service.slug}`}
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="bg-gray-100 py-16">
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
            {stateLocations.slice(0, 20).map((location) => (
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
          
          {stateLocations.length > 20 && (
            <div className="text-center mt-8">
              <Link
                href={`/states/${state.toLowerCase()}`}
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View All {stateLocations.length} Cities
              </Link>
            </div>
          )}
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
