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
      title: 'Leak Detection & Repair Services | GD Professional Plumbing',
      description: 'Professional leak detection and repair services. Expert plumbers for all your leak detection needs.',
    };
  }

  return {
    title: `Leak Detection & Repair Services in ${location.name}, ${location.state} | GD Professional Plumbing`,
    description: `Expert leak detection and repair services in ${location.name}, ${location.state}. Advanced leak detection technology to quickly locate and repair hidden water leaks. 24/7 emergency service. Call ${location.phone}.`,
    keywords: [
      'leak detection',
      'leak repair',
      'water leak detection',
      'hidden leak detection',
      'plumber near me',
      location.name,
      location.state,
      'emergency plumber',
      'leak detection technology',
      'water leak repair'
    ],
    openGraph: {
      title: `Leak Detection & Repair Services in ${location.name}, ${location.state} | GD Professional Plumbing`,
      description: `Expert leak detection and repair services in ${location.name}, ${location.state}. Advanced leak detection technology to quickly locate and repair hidden water leaks. 24/7 emergency service.`,
      url: `https://${location.id}.gdprofessionalplumbing.com/plumber-leak-detection`,
      siteName: 'GD Professional Plumbing',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Leak Detection & Repair Services in ${location.name}, ${location.state} | GD Professional Plumbing`,
      description: `Expert leak detection and repair services in ${location.name}, ${location.state}. Advanced leak detection technology to quickly locate and repair hidden water leaks. 24/7 emergency service.`,
    },
    alternates: {
      canonical: `https://${location.id}.gdprofessionalplumbing.com/plumber-leak-detection`,
    },
  };
}

export default async function LeakDetectionPage({ params }: ServicePageProps) {
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
            src="https://ik.imagekit.io/nang9yead/PVC%20Pipe%20Installation%20in%20Soil.png?updatedAt=1756066962271" 
            alt={`Leak detection in ${location.name}`}
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
              Expert Leak Detection & Repair in {location.name}, {location.state}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl opacity-95 max-w-5xl mx-auto leading-relaxed mb-8">
              Advanced leak detection technology to quickly locate and repair hidden water leaks in {location.name}.
            </p>
          </div>
        </div>
        <FloatingCTA phone="8334450128" locationName={location.name} />
      </section>

      {/* SEO Intro Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Find the Best Leak Detection Services in {location.name}
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Looking for reliable leak detection and repair services? Our team of licensed and certified plumbers provides exceptional service at competitive prices. Whether you need emergency leak detection, routine inspection, or hidden leak repair, we're your trusted plumbing experts. Serving {location.name} and surrounding areas with 24/7 availability and guaranteed satisfaction.
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
                Are you searching for expert leak detection?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Look no further! GD Professional Plumbing is your trusted plumbing expert in {location.name}. We provide comprehensive leak detection solutions for both residential and commercial properties, with 24/7 emergency service availability.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-blue-700 mb-3">Residential Services</h3>
                  <p className="text-gray-600 text-sm">
                    Professional leak detection for homes with advanced technology and non-invasive methods.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-blue-700 mb-3">Commercial Services</h3>
                  <p className="text-gray-600 text-sm">
                    Large-scale leak detection systems for businesses with minimal disruption and maximum accuracy.
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
              Why Choose Our Leak Detection Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the advantages of professional leak detection services and why we're the preferred choice for homes and businesses in {location.name}.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Technology</h3>
              <p className="text-gray-600">
                State-of-the-art leak detection equipment including thermal imaging and acoustic detection technology.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Detection</h3>
              <p className="text-gray-600">
                Quick and accurate leak detection to minimize water damage and repair costs.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Non-Invasive</h3>
              <p className="text-gray-600">
                Advanced detection methods that locate leaks without damaging your property or landscaping.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cost Savings</h3>
              <p className="text-gray-600">
                Early leak detection saves thousands in water damage repairs and high water bills.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Preventive Care</h3>
              <p className="text-gray-600">
                Regular leak detection services to prevent costly water damage and maintain your property value.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Water Conservation</h3>
              <p className="text-gray-600">
                Help conserve water and reduce your environmental impact by fixing leaks quickly.
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
              Comprehensive Leak Detection Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From emergency detection to routine inspection, we provide complete leak detection solutions for all your needs in {location.name}.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="text-4xl mb-6">🚨</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Emergency Detection</h3>
              <p className="text-gray-600 mb-6">
                Fast emergency leak detection services for urgent water leaks and flooding situations.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 24/7 emergency response</li>
                <li>• Same-day service</li>
                <li>• Advanced equipment</li>
                <li>• Immediate results</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="text-4xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Routine Inspection</h3>
              <p className="text-gray-600 mb-6">
                Regular leak detection and inspection to prevent water damage and maintain your plumbing system.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Scheduled inspections</li>
                <li>• Preventive care</li>
                <li>• Cost savings</li>
                <li>• Peace of mind</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="text-4xl mb-6">🔧</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Repair & Restoration</h3>
              <p className="text-gray-600 mb-6">
                Complete leak repair and water damage restoration services to restore your property.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Expert repairs</li>
                <li>• Damage restoration</li>
                <li>• Quality materials</li>
                <li>• Warranty coverage</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Detect Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Detect Your Leaks?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today for a free consultation and estimate. Our experts will help you choose the perfect leak detection solution for your needs in {location.name}.
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
            Need Leak Detection in {location.name}?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Call us today for professional leak detection and repair services
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
