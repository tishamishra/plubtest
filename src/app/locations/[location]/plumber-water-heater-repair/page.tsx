import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import locationsData from '@/data/locations.json';
import type { Metadata } from 'next';

// Type definitions for location data
interface LocationData {
  id: string;
  name: string;
  state: string;
  fullName: string;
  description: string;
  phone: string;
  heroTitle: string;
  heroSubtitle: string;
  services: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  areas: string[];
  zipCodes: string[];
  image: string;
  meta: {
    title: string;
    description: string;
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  testimonials: Array<{
    name: string;
    text: string;
    location: string;
  }>;
}

interface LocationsData {
  locations: LocationData[];
}

interface ServicePageProps {
  params: Promise<{
    location: string;
  }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { location: locationSlug } = await params;
  const locationsDataTyped = locationsData as LocationsData;
  const location = locationsDataTyped.locations.find((loc: LocationData) => loc.id === locationSlug);

  if (!location) {
    return {
      title: 'Water Heater Repair & Installation Services | GD Professional Plumbing',
      description: 'Professional water heater repair and installation services. Expert plumbers for all your water heater needs.',
    };
  }

  return {
    title: `Water Heater Repair & Installation in ${location.name}, ${location.state} | GD Professional Plumbing`,
    description: `Expert water heater repair and installation services in ${location.name}, ${location.state}. Professional plumbers for tank and tankless water heaters. 24/7 emergency service. Call ${location.phone}.`,
    keywords: [
      'water heater repair',
      'water heater installation',
      'tankless water heater',
      'water heater replacement',
      'plumber near me',
      location.name,
      location.state,
      'emergency plumber',
      'water heater maintenance',
      'hot water heater repair'
    ],
    openGraph: {
      title: `Water Heater Repair & Installation in ${location.name}, ${location.state} | GD Professional Plumbing`,
      description: `Expert water heater repair and installation services in ${location.name}, ${location.state}. Professional plumbers for tank and tankless water heaters. 24/7 emergency service.`,
      url: `https://${location.id}.gdprofessionalplumbing.com/plumber-water-heater-repair`,
      siteName: 'GD Professional Plumbing',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Water Heater Repair & Installation in ${location.name}, ${location.state} | GD Professional Plumbing`,
      description: `Expert water heater repair and installation services in ${location.name}, ${location.state}. Professional plumbers for tank and tankless water heaters. 24/7 emergency service.`,
    },
    alternates: {
      canonical: `https://${location.id}.gdprofessionalplumbing.com/plumber-water-heater-repair`,
    },
  };
}

export default async function WaterHeaterRepairPage({ params }: ServicePageProps) {
  const { location: locationSlug } = await params;
  const locationsDataTyped = locationsData as LocationsData;
  const location = locationsDataTyped.locations.find((loc: LocationData) => loc.id === locationSlug);

  if (!location) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="relative h-[80vh] overflow-visible">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/90">
          <img 
            src="https://ik.imagekit.io/nang9yead/Worker%20Adjusting%20Water%20Filtration%20System%20Valves?updatedAt=1756066968225" 
            alt={`Water heater repair in ${location.name}`}
            className="w-full h-full object-cover mix-blend-multiply"
          />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-6 max-w-6xl mx-auto">
            <div className="mb-6">
              <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Licensed & Insured
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Expert Water Heater Repair & Installation in {location.name}, {location.state}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl opacity-95 max-w-5xl mx-auto leading-relaxed mb-8">
              Professional water heater services including repair, replacement, and installation of tank and tankless systems in {location.name}.
            </p>
          </div>
        </div>
        <FloatingCTA phone="8336090936" locationName={location.name} />
      </section>

      {/* SEO Intro Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Find the Best Water Heater Repair Services in {location.name}
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Looking for reliable water heater repair and installation? Our team of licensed and certified plumbers provides exceptional service at competitive prices. Whether you need new installation, replacement, or maintenance, we're your trusted plumbing experts. Serving {location.name} and surrounding areas with 24/7 availability and guaranteed satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`tel:${location.phone.replace(/\D/g, '')}`}
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg text-lg transition-colors duration-300"
            >
              Call {location.phone} Now
            </a>
          </div>
        </div>
      </section>

      {/* Search Block */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Are you searching for expert water heater repair?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Look no further! GD Professional Plumbing is your trusted plumbing expert in {location.name}. We provide comprehensive water heater solutions for both residential and commercial properties, with 24/7 emergency service availability.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-blue-700 mb-3">Residential Services</h3>
                  <p className="text-gray-600 text-sm">
                    Professional water heater repair and installation for homes with proper sizing and energy efficiency.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-blue-700 mb-3">Commercial Services</h3>
                  <p className="text-gray-600 text-sm">
                    Large-scale water heater systems for businesses with minimal downtime and maximum efficiency.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://ik.imagekit.io/nang9yead/Smiling%20Plumber%20Holding%20Wrench%20in%20Kitchen.png?updatedAt=1756066963942" 
                alt="Professional plumber working"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-700 mb-2">50+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-700 mb-2">24/7</div>
              <div className="text-gray-600">Emergency Service</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-700 mb-2">100%</div>
              <div className="text-gray-600">Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-700 mb-2">15 Min</div>
              <div className="text-gray-600">Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Water Heater Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the advantages of professional water heater services and why we're the preferred choice for homes and businesses in {location.name}.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Reliable Hot Water</h3>
              <p className="text-gray-600">
                Never run out of hot water again. Our water heater services ensure consistent, reliable hot water for your home or business.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Energy Savings</h3>
              <p className="text-gray-600">
                Save up to 30% on energy bills with our energy-efficient water heater installations and maintenance services.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Installation</h3>
              <p className="text-gray-600">
                Professional installation and repair services by licensed plumbers with years of experience in water heater systems.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Service</h3>
              <p className="text-gray-600">
                Quick response times and efficient repairs to get your hot water back on as soon as possible.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Warranty Coverage</h3>
              <p className="text-gray-600">
                All our water heater installations and repairs come with comprehensive warranty coverage for your peace of mind.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Eco-Friendly</h3>
              <p className="text-gray-600">
                Environmentally conscious water heater solutions that reduce your carbon footprint while saving money.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Water Heater Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From installation to maintenance, we provide complete water heater solutions for all your needs in {location.name}.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="text-4xl mb-6">🔧</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">New Installation</h3>
              <p className="text-gray-600 mb-6">
                Professional installation of new water heater systems with proper sizing and configuration.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Proper sizing for your needs</li>
                <li>• Professional installation</li>
                <li>• Code compliance</li>
                <li>• Warranty coverage</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="text-4xl mb-6">🔄</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Replacement</h3>
              <p className="text-gray-600 mb-6">
                Upgrade your existing water heater to an energy-efficient system.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• System evaluation</li>
                <li>• Seamless replacement</li>
                <li>• Minimal disruption</li>
                <li>• Performance optimization</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="text-4xl mb-6">🔧</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Repair & Maintenance</h3>
              <p className="text-gray-600 mb-6">
                Expert repair and maintenance services to keep your water heater running efficiently.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Diagnostic services</li>
                <li>• Component replacement</li>
                <li>• Preventive maintenance</li>
                <li>• Performance tuning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Upgrade Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Fix Your Water Heater?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today for a free consultation and estimate. Our experts will help you choose the perfect water heater solution for your needs in {location.name}.
          </p>
          <a
            href={`tel:${location.phone.replace(/\D/g, '')}`}
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg text-xl transition-colors duration-300"
          >
            Call {location.phone}
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1c7bc8] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Need Water Heater Services in {location.name}?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Call us today for professional water heater repair and installation services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${location.phone.replace(/\D/g, '')}`}
              className="bg-white text-[#1c7bc8] font-bold px-8 py-4 rounded-lg text-xl hover:bg-gray-50 transition-colors duration-300"
            >
              Call {location.phone}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
