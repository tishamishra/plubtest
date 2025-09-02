"use client";
import Header from '@/components/Header';
import FloatingCTA from '@/components/FloatingCTA';
import Footer from '@/components/Footer';

export default function EmergencyServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="relative h-[80vh] overflow-visible">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-red-700/90">
          <img 
            src="https://ik.imagekit.io/nang9yead/Plumber%20Fixing%20Leaking%20Sink%20Pipe%20with%20Wrench.png?updatedAt=1756066955385" 
            alt="Emergency plumbing service"
            className="w-full h-full object-cover mix-blend-multiply"
          />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-6 max-w-6xl mx-auto">
            <div className="mb-6">
              <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                24/7 Emergency Service
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Emergency Plumbing Services in the US
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl opacity-95 max-w-5xl mx-auto leading-relaxed mb-8">
              Available 24/7 for urgent plumbing emergencies throughout the USA. Fast response times, expert repairs, and peace of mind when you need it most!
            </p>
          </div>
        </div>
        <FloatingCTA phone="8334450128" locationName="Your Area" />
      </section>

      {/* SEO Intro Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Emergency Plumbing Services Available 24/7
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              When plumbing emergencies strike, you need immediate help from experienced professionals. 
              Our emergency plumbing service is available around the clock to handle urgent repairs, 
              burst pipes, overflowing toilets, and other critical plumbing issues that can't wait.
            </p>
          </div>
        </div>
      </section>

      {/* Search Block */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Emergency Plumbing Help?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Call us immediately for fast, reliable emergency plumbing services. 
            We respond quickly to prevent further damage to your property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:8334450128" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-xl font-semibold transition-colors"
            >
              Call Now: (833) 445-0128
            </a>
            <span className="text-lg opacity-90">
              Available 24/7 • Fast Response
            </span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">15</div>
              <div className="text-lg text-gray-700">Minutes Average Response Time</div>
            </div>
            <div className="bg-green-50 p-8 rounded-xl">
              <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-lg text-gray-700">Emergency Availability</div>
            </div>
            <div className="bg-orange-50 p-8 rounded-xl">
              <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-lg text-gray-700">Licensed & Insured</div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Emergency Services We Provide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-red-600 text-4xl mb-4">🚰</div>
              <h3 className="text-xl font-bold mb-3">Burst Pipe Repair</h3>
              <p className="text-gray-600">
                Immediate repair of burst pipes to prevent water damage and restore water flow.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-red-600 text-4xl mb-4">🚽</div>
              <h3 className="text-xl font-bold mb-3">Overflowing Toilet</h3>
              <p className="text-gray-600">
                Quick resolution of toilet clogs and overflows to prevent property damage.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-red-600 text-4xl mb-4">💧</div>
              <h3 className="text-xl font-bold mb-3">Water Heater Failure</h3>
              <p className="text-gray-600">
                Emergency water heater repair or replacement to restore hot water.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-red-600 text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold mb-3">Gas Line Leaks</h3>
              <p className="text-gray-600">
                Critical gas line leak detection and repair for safety.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-red-600 text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-bold mb-3">Sewer Backups</h3>
              <p className="text-gray-600">
                Emergency sewer line clearing and repair to prevent health hazards.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-red-600 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">No Water Pressure</h3>
              <p className="text-gray-600">
                Rapid diagnosis and repair of water pressure issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Emergencies */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Us for Emergency Plumbing?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">24/7 Availability</h3>
                <p className="text-gray-600">
                  We're available around the clock, including holidays and weekends, 
                  to handle your plumbing emergencies.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Fast Response Time</h3>
                <p className="text-gray-600">
                  Our emergency team responds within 15-30 minutes to prevent 
                  further damage to your property.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Licensed & Insured</h3>
                <p className="text-gray-600">
                  All our emergency technicians are licensed, bonded, and insured 
                  for your protection and peace of mind.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Advanced Equipment</h3>
                <p className="text-gray-600">
                  We use state-of-the-art diagnostic tools and equipment to quickly 
                  identify and resolve emergency plumbing issues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Emergency Response Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-gray-600">
                Call our 24/7 emergency hotline and describe your plumbing emergency.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">Quick Dispatch</h3>
              <p className="text-gray-600">
                We immediately dispatch our nearest emergency technician to your location.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Assessment</h3>
              <p className="text-gray-600">
                Our technician arrives and quickly assesses the situation and damage.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold mb-2">Immediate Repair</h3>
              <p className="text-gray-600">
                We provide immediate emergency repairs to stop the problem and prevent further damage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
