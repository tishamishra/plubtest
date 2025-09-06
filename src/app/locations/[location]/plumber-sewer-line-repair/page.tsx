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
      title: 'Sewer Line Repair & Replacement Services | GD Professional Plumbing',
      description: 'Professional sewer line repair and replacement services. Expert plumbers for all your sewer line needs.',
    };
  }

  return {
    title: `Sewer Line Repair & Replacement Services in ${location.name}, ${location.state} | GD Professional Plumbing`,
    description: `Expert sewer line repair and replacement services in ${location.name}, ${location.state}. Complete sewer line inspection, repair, and replacement services with camera technology. 24/7 emergency service. Call ${location.phone}.`,
    keywords: [
      'sewer line repair',
      'sewer line replacement',
      'sewer line cleaning',
      'sewer camera inspection',
      'plumber near me',
      location.name,
      location.state,
      'emergency plumber',
      'sewer line services',
      'sewer line maintenance'
    ],
    openGraph: {
      title: `Sewer Line Repair & Replacement Services in ${location.name}, ${location.state} | GD Professional Plumbing`,
      description: `Expert sewer line repair and replacement services in ${location.name}, ${location.state}. Complete sewer line inspection, repair, and replacement services with camera technology. 24/7 emergency service.`,
      url: `https://${location.id}.gdprofessionalplumbing.com/plumber-sewer-line-repair`,
      siteName: 'GD Professional Plumbing',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Sewer Line Repair & Replacement Services in ${location.name}, ${location.state} | GD Professional Plumbing`,
      description: `Expert sewer line repair and replacement services in ${location.name}, ${location.state}. Complete sewer line inspection, repair, and replacement services with camera technology. 24/7 emergency service.`,
    },
    alternates: {
      canonical: `https://${location.id}.gdprofessionalplumbing.com/plumber-sewer-line-repair`,
    },
  };
}

export default async function SewerLineRepairPage({ params }: ServicePageProps) {
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
            src="https://ik.imagekit.io/nang9yead/Old%20Rusty%20Underground%20Pipeline.png?updatedAt=1756066953091" 
            alt={`Sewer line repair in ${location.name}`}
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
              Expert Sewer Line Repair & Replacement in {location.name}, {location.state}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl opacity-95 max-w-5xl mx-auto leading-relaxed mb-8">
              Complete sewer line inspection, repair, and replacement services with camera technology in {location.name}.
            </p>
          </div>
        </div>
        <FloatingCTA phone="8334450128" locationName={location.name} />
      </section>

      {/* SEO Intro Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Find the Best Sewer Line Services in {location.name}
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Looking for reliable sewer line repair and replacement services? Our team of licensed and certified plumbers provides exceptional service at competitive prices. Whether you need emergency sewer line repair, routine maintenance, or complete replacement, we're your trusted plumbing experts. Serving {location.name} and surrounding areas with 24/7 availability and guaranteed satisfaction.
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
                Are you searching for expert sewer line services?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Look no further! GD Professional Plumbing is your trusted plumbing expert in {location.name}. We provide comprehensive sewer line solutions for both residential and commercial properties, with 24/7 emergency service availability.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-blue-700 mb-3">Residential Services</h3>
                  <p className="text-gray-600 text-sm">
                    Professional sewer line repair and replacement for homes with minimal disruption and maximum efficiency.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-blue-700 mb-3">Commercial Services</h3>
                  <p className="text-gray-600 text-sm">
                    Large-scale sewer line systems for businesses with advanced technology and expert installation.
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
              Why Choose Our Sewer Line Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the advantages of professional sewer line services and why we're the preferred choice for homes and businesses in {location.name}.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Camera Inspection</h3>
              <p className="text-gray-600">
                Advanced camera technology to inspect sewer lines and identify problems without excavation.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Repair</h3>
              <p className="text-gray-600">
                Professional sewer line repair and replacement services by licensed and experienced plumbers.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Minimal Disruption</h3>
              <p className="text-gray-600">
                Trenchless repair methods that minimize damage to your property and landscaping.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cost Effective</h3>
              <p className="text-gray-600">
                Affordable sewer line services that save you money with long-lasting solutions.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Warranty Coverage</h3>
              <p className="text-gray-600">
                All our sewer line repairs and replacements come with comprehensive warranty coverage.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Service</h3>
              <p className="text-gray-600">
                Quick response times and efficient repairs to get your sewer system back to normal.
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
              Comprehensive Sewer Line Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From emergency repair to routine maintenance, we provide complete sewer line solutions for all your needs in {location.name}.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="text-4xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Camera Inspection</h3>
              <p className="text-gray-600 mb-6">
                Complete sewer line inspection using advanced camera technology to identify all issues.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• High-definition cameras</li>
                <li>• Detailed video reports</li>
                <li>• Accurate diagnosis</li>
                <li>• Expert recommendations</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="text-4xl mb-6">🔧</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Repair & Replacement</h3>
              <p className="text-gray-600 mb-6">
                Professional sewer line repair and replacement services using the latest techniques and materials.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Trenchless methods</li>
                <li>• Quality materials</li>
                <li>• Expert installation</li>
                <li>• Long-lasting results</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="text-4xl mb-6">🚰</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cleaning & Maintenance</h3>
              <p className="text-gray-600 mb-6">
                Regular sewer line cleaning and maintenance to prevent clogs and extend system life.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Hydro-jetting</li>
                <li>• Preventive care</li>
                <li>• Cost savings</li>
                <li>• System longevity</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Repair Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Repair Your Sewer Line?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today for a free consultation and estimate. Our experts will help you choose the perfect sewer line solution for your needs in {location.name}.
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
            Need Sewer Line Services in {location.name}?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Call us today for professional sewer line repair and replacement services
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
