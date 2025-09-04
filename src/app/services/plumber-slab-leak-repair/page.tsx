import type { Metadata } from 'next';
import Header from '@/components/Header';
import FloatingCTA from '@/components/FloatingCTA';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Slab Leak Detection & Repair Services in the US | GD Professional Plumbing',
  description: 'Professional slab leak detection and repair services across the USA. Fast and accurate detection with expert repairs to protect your foundation and prevent costly water damage. Licensed, insured, and trusted since 1973. Call (833) 445-0128.',
  keywords: [
    'slab leak detection',
    'slab leak repair',
    'foundation leak detection',
    'slab leak detection services',
    'slab leak repair services',
    'foundation water damage',
    'slab leak detection technology',
    'slab leak repair cost',
    'slab leak detection near me',
    'slab leak repair near me',
    'slab leak detection company',
    'slab leak repair company',
    'slab leak detection experts',
    'slab leak repair experts',
    'foundation leak repair',
    'slab leak prevention',
    'residential slab leak services',
    'commercial slab leak services',
    'plumbing services USA',
    'licensed plumber'
  ],
  openGraph: {
    title: 'Slab Leak Detection & Repair Services in the US | GD Professional Plumbing',
    description: 'Professional slab leak detection and repair services across the USA. Fast and accurate detection with expert repairs to protect your foundation and prevent costly water damage.',
    url: 'https://gdprofessionalplumbing.com/services/plumber-slab-leak-repair',
    siteName: 'GD Professional Plumbing',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Slab Leak Detection & Repair Services in the US | GD Professional Plumbing',
    description: 'Professional slab leak detection and repair services across the USA. Fast and accurate detection with expert repairs to protect your foundation and prevent costly water damage.',
  },
  alternates: {
    canonical: 'https://gdprofessionalplumbing.com/services/plumber-slab-leak-repair',
  },
};

export default function SlabLeakRepairPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="relative h-[80vh] overflow-visible">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/90">
          <img 
            src="https://ik.imagekit.io/nang9yead/Old%20Rusty%20Pipe%20Dripping%20Water.png?updatedAt=1756066951741" 
            alt="Slab leak detection and repair"
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
              Slab Leak Detection & Repair Services in the US
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl opacity-95 max-w-5xl mx-auto leading-relaxed mb-8">
              Fast and accurate slab leak detection with expert repairs to protect your foundation and prevent costly water damage!
            </p>
          </div>
        </div>
        <FloatingCTA phone="8334450128" locationName="Your Area" />
      </section>

      {/* SEO Intro Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Find the Best Slab Leak Detection Services
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Looking for reliable slab leak detection and repair? Our team of licensed and certified plumbers provides exceptional service at competitive prices. Whether you need leak detection, foundation repair, or preventive services, we're your trusted plumbing experts. Serving residential and commercial properties with 24/7 availability and guaranteed satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:8334450128"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg text-lg transition-colors duration-300"
            >
              Call (833) 445-0128 Now
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
                Are you searching for expert slab leak detection services?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Look no further! GD Professional Plumbing is your trusted plumbing expert. We provide comprehensive slab leak detection and repair solutions for both residential and commercial properties, with 24/7 emergency service availability.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-blue-700 mb-3">Residential Detection</h3>
                  <p className="text-gray-600 text-sm">
                    Professional slab leak detection for homes with advanced technology and expertise.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-blue-700 mb-3">Commercial Detection</h3>
                  <p className="text-gray-600 text-sm">
                    Large-scale slab leak detection for businesses with minimal disruption and maximum accuracy.
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
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-sm text-gray-600">Years Combined Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">1000+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Emergency Service</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Licensed & Insured</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Slab Leak Services We Provide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="text-blue-600 text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-3">Leak Detection</h3>
              <p className="text-gray-600">
                Advanced technology for accurate slab leak detection and location.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="text-green-600 text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold mb-3">Leak Repair</h3>
              <p className="text-gray-600">
                Expert repair services for all types of slab leaks and foundation damage.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="text-orange-600 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">Emergency Service</h3>
              <p className="text-gray-600">
                24/7 emergency slab leak detection and repair services.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="text-purple-600 text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold mb-3">Prevention</h3>
              <p className="text-gray-600">
                Preventive measures and maintenance to avoid future slab leaks.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="text-red-600 text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3">Assessment</h3>
              <p className="text-gray-600">
                Comprehensive damage assessment and repair recommendations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="text-indigo-600 text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-bold mb-3">Foundation Repair</h3>
              <p className="text-gray-600">
                Foundation repair services to restore structural integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Why Choose GD Professional Plumbing?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Licensed & Insured</h3>
                <p className="text-gray-600">
                  All our technicians are fully licensed, bonded, and insured for your protection.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">24/7 Emergency Service</h3>
                <p className="text-gray-600">
                  Available around the clock for urgent plumbing emergencies and repairs.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Advanced Technology</h3>
                <p className="text-gray-600">
                  Using the latest tools and technology for precise diagnostics and repairs.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Customer Satisfaction</h3>
                <p className="text-gray-600">
                  Committed to providing exceptional service and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Professional Slab Leak Services?
          </h2>
          <p className="text-xl mb-8">
            Contact us today for expert detection, repair, and prevention services. 
            Protect your foundation and prevent costly water damage!
          </p>
          <div className="flex justify-center">
            <a 
              href="tel:8334450128"
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors duration-300"
            >
              Call (833) 445-0128 Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 