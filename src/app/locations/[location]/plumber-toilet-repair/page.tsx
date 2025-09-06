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
      title: 'Toilet Repair & Installation Services | GD Professional Plumbing',
      description: 'Professional toilet repair and installation services. Expert plumbers for all your toilet needs.',
    };
  }

  return {
    title: `Toilet Repair & Installation Services in ${location.name}, ${location.state} | GD Professional Plumbing`,
    description: `Expert toilet repair and installation services in ${location.name}, ${location.state}. Fast and reliable toilet repair, replacement, and installation services for all types. 24/7 emergency service. Call ${location.phone}.`,
    keywords: [
      'toilet repair',
      'toilet installation',
      'toilet replacement',
      'toilet unclogging',
      'plumber near me',
      location.name,
      location.state,
      'emergency plumber',
      'toilet services',
      'toilet maintenance'
    ],
    openGraph: {
      title: `Toilet Repair & Installation Services in ${location.name}, ${location.state} | GD Professional Plumbing`,
      description: `Expert toilet repair and installation services in ${location.name}, ${location.state}. Fast and reliable toilet repair, replacement, and installation services for all types. 24/7 emergency service.`,
      url: `https://${location.id}.gdprofessionalplumbing.com/plumber-toilet-repair`,
      siteName: 'GD Professional Plumbing',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Toilet Repair & Installation Services in ${location.name}, ${location.state} | GD Professional Plumbing`,
      description: `Expert toilet repair and installation services in ${location.name}, ${location.state}. Fast and reliable toilet repair, replacement, and installation services for all types. 24/7 emergency service.`,
    },
    alternates: {
      canonical: `https://${location.id}.gdprofessionalplumbing.com/plumber-toilet-repair`,
    },
  };
}

export default async function ToiletRepairPage({ params }: ServicePageProps) {
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
            src="https://ik.imagekit.io/nang9yead/Plumber%20Using%20Plunger%20on%20Toilet%20Bowl%20worker%20in%20orange%20uniform%20unclogging%20toilet?updatedAt=1756066962119" 
            alt={`Toilet repair in ${location.name}`}
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
              Expert Toilet Repair & Installation in {location.name}, {location.state}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl opacity-95 max-w-5xl mx-auto leading-relaxed mb-8">
              Fast and reliable toilet repair, replacement, and installation services for all types in {location.name}.
            </p>
          </div>
        </div>
        <FloatingCTA phone="8334450128" locationName={location.name} />
      </section>

      {/* SEO Intro Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Find the Best Toilet Repair Services in {location.name}
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Looking for reliable toilet repair and installation services? Our team of licensed and certified plumbers provides exceptional service at competitive prices. Whether you need emergency toilet repair, routine maintenance, or complete replacement, we're your trusted plumbing experts. Serving {location.name} and surrounding areas with 24/7 availability and guaranteed satisfaction.
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
                Are you searching for expert toilet repair?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Look no further! GD Professional Plumbing is your trusted plumbing expert in {location.name}. We provide comprehensive toilet solutions for both residential and commercial properties, with 24/7 emergency service availability.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-blue-700 mb-3">Residential Services</h3>
                  <p className="text-gray-600 text-sm">
                    Professional toilet repair and installation for homes with quality fixtures and expert installation.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-blue-700 mb-3">Commercial Services</h3>
                  <p className="text-gray-600 text-sm">
                    Large-scale toilet systems for businesses with minimal downtime and maximum efficiency.
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
              Why Choose Our Toilet Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the advantages of professional toilet services and why we're the preferred choice for homes and businesses in {location.name}.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🚽</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Repair</h3>
              <p className="text-gray-600">
                Professional toilet repair services for all types of toilets with quality parts and expert installation.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Service</h3>
              <p className="text-gray-600">
                Quick response times and efficient repairs to get your toilet back to working condition as soon as possible.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Installation</h3>
              <p className="text-gray-600">
                Professional toilet installation with proper sealing and connections for long-lasting performance.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cost Effective</h3>
              <p className="text-gray-600">
                Affordable toilet services that save you money with quality repairs and installations.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Warranty Coverage</h3>
              <p className="text-gray-600">
                All our toilet repairs and installations come with comprehensive warranty coverage for your peace of mind.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Water Efficient</h3>
              <p className="text-gray-600">
                Water-efficient toilet options that help you save money on water bills and protect the environment.
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
              Comprehensive Toilet Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From emergency repair to routine maintenance, we provide complete toilet solutions for all your needs in {location.name}.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="text-4xl mb-6">🔧</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Repair & Maintenance</h3>
              <p className="text-gray-600 mb-6">
                Professional toilet repair and maintenance services for all types of toilets.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Flapper replacement</li>
                <li>• Fill valve repair</li>
                <li>• Leak detection</li>
                <li>• Routine maintenance</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="text-4xl mb-6">🚽</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Installation & Replacement</h3>
              <p className="text-gray-600 mb-6">
                Complete toilet installation and replacement services with quality fixtures.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• New toilet installation</li>
                <li>• Toilet replacement</li>
                <li>• Proper sealing</li>
                <li>• Quality fixtures</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="text-4xl mb-6">🚨</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Emergency Services</h3>
              <p className="text-gray-600 mb-6">
                Fast emergency toilet repair services for urgent problems and backups.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 24/7 emergency response</li>
                <li>• Same-day service</li>
                <li>• Unclogging services</li>
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
            Ready to Fix Your Toilet?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today for a free consultation and estimate. Our experts will help you choose the perfect toilet solution for your needs in {location.name}.
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
            Need Toilet Services in {location.name}?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Call us today for professional toilet repair and installation services
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
