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
      title: 'Faucet & Sink Repair Services | GD Professional Plumbing',
      description: 'Professional faucet and sink repair services. Expert plumbers for all your faucet and sink needs.',
    };
  }

  return {
    title: `Faucet & Sink Repair Services in ${location.name}, ${location.state} | GD Professional Plumbing`,
    description: `Expert faucet and sink repair services in ${location.name}, ${location.state}. Professional repair and installation of kitchen and bathroom faucets and sinks. 24/7 emergency service. Call ${location.phone}.`,
    keywords: [
      'faucet repair',
      'sink repair',
      'faucet installation',
      'sink installation',
      'plumber near me',
      location.name,
      location.state,
      'emergency plumber',
      'faucet services',
      'sink services'
    ],
    openGraph: {
      title: `Faucet & Sink Repair Services in ${location.name}, ${location.state} | GD Professional Plumbing`,
      description: `Expert faucet and sink repair services in ${location.name}, ${location.state}. Professional repair and installation of kitchen and bathroom faucets and sinks. 24/7 emergency service.`,
      url: `https://${location.id}.gdprofessionalplumbing.com/plumber-faucet-sink-repair`,
      siteName: 'GD Professional Plumbing',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Faucet & Sink Repair Services in ${location.name}, ${location.state} | GD Professional Plumbing`,
      description: `Expert faucet and sink repair services in ${location.name}, ${location.state}. Professional repair and installation of kitchen and bathroom faucets and sinks. 24/7 emergency service.`,
    },
    alternates: {
      canonical: `https://${location.id}.gdprofessionalplumbing.com/plumber-faucet-sink-repair`,
    },
  };
}

export default async function FaucetSinkRepairPage({ params }: ServicePageProps) {
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
            src="https://ik.imagekit.io/nang9yead/Smiling%20Plumber%20Repairing%20Bathroom%20Sink%20Pipe.png?updatedAt=1756066965094" 
            alt={`Faucet and sink repair in ${location.name}`}
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
              Expert Faucet & Sink Repair in {location.name}, {location.state}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl opacity-95 max-w-5xl mx-auto leading-relaxed mb-8">
              Professional repair and installation of kitchen and bathroom faucets and sinks in {location.name}.
            </p>
          </div>
        </div>
        <FloatingCTA phone="8334450128" locationName={location.name} />
      </section>

      {/* SEO Intro Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Find the Best Faucet & Sink Repair Services in {location.name}
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Looking for reliable faucet and sink repair services? Our team of licensed and certified plumbers provides exceptional service at competitive prices. Whether you need emergency faucet repair, routine maintenance, or complete replacement, we're your trusted plumbing experts. Serving {location.name} and surrounding areas with 24/7 availability and guaranteed satisfaction.
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
                Are you searching for expert faucet and sink repair?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Look no further! GD Professional Plumbing is your trusted plumbing expert in {location.name}. We provide comprehensive faucet and sink solutions for both residential and commercial properties, with 24/7 emergency service availability.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-blue-700 mb-3">Residential Services</h3>
                  <p className="text-gray-600 text-sm">
                    Professional faucet and sink repair for homes with quality fixtures and expert installation.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-blue-700 mb-3">Commercial Services</h3>
                  <p className="text-gray-600 text-sm">
                    Large-scale faucet and sink systems for businesses with minimal downtime and maximum efficiency.
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
              Why Choose Our Faucet & Sink Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the advantages of professional faucet and sink services and why we're the preferred choice for homes and businesses in {location.name}.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">💧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Repair</h3>
              <p className="text-gray-600">
                Professional faucet and sink repair services for all types of fixtures with quality parts and expert installation.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Service</h3>
              <p className="text-gray-600">
                Quick response times and efficient repairs to get your faucets and sinks back to working condition as soon as possible.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Installation</h3>
              <p className="text-gray-600">
                Professional faucet and sink installation with proper sealing and connections for long-lasting performance.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cost Effective</h3>
              <p className="text-gray-600">
                Affordable faucet and sink services that save you money with quality repairs and installations.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Warranty Coverage</h3>
              <p className="text-gray-600">
                All our faucet and sink repairs and installations come with comprehensive warranty coverage for your peace of mind.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Water Efficient</h3>
              <p className="text-gray-600">
                Water-efficient faucet options that help you save money on water bills and protect the environment.
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
              Comprehensive Faucet & Sink Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From emergency repair to routine maintenance, we provide complete faucet and sink solutions for all your needs in {location.name}.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="text-4xl mb-6">🔧</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Repair & Maintenance</h3>
              <p className="text-gray-600 mb-6">
                Professional faucet and sink repair and maintenance services for all types of fixtures.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Faucet cartridge replacement</li>
                <li>• Sink leak repair</li>
                <li>• Drain cleaning</li>
                <li>• Routine maintenance</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="text-4xl mb-6">💧</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Installation & Replacement</h3>
              <p className="text-gray-600 mb-6">
                Complete faucet and sink installation and replacement services with quality fixtures.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• New faucet installation</li>
                <li>• Sink replacement</li>
                <li>• Proper sealing</li>
                <li>• Quality fixtures</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="text-4xl mb-6">🚨</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Emergency Services</h3>
              <p className="text-gray-600 mb-6">
                Fast emergency faucet and sink repair services for urgent problems and leaks.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 24/7 emergency response</li>
                <li>• Same-day service</li>
                <li>• Leak repair</li>
                <li>• Immediate relief</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Repair Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Fix Your Faucets & Sinks?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today for a free consultation and estimate. Our experts will help you choose the perfect faucet and sink solution for your needs in {location.name}.
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
            Need Faucet & Sink Services in {location.name}?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Call us today for professional faucet and sink repair and installation services
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
