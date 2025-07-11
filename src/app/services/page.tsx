import { headers } from 'next/headers';
import { getLocationBySubdomain } from '@/utils/subdomain';
import Header from '@/components/Header';

export const dynamic = 'force-dynamic';

export default async function ServicesPage() {
  const headersList = await headers();
  const hostname = headersList.get('host') || '';
  
  // Extract subdomain
  let subdomain = '';
  if (hostname.includes('.affinsight.com')) {
    subdomain = hostname.replace('.affinsight.com', '');
  } else if (hostname.includes('localhost')) {
    const parts = hostname.split('.');
    if (parts.length > 1) {
      subdomain = parts[0];
    }
  }

  // If it's main domain, show general services
  if (subdomain === 'www' || subdomain === 'affinsight' || subdomain === 'localhost' || !subdomain) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-700 to-blue-400 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Plumbing Services</h1>
            <p className="text-lg sm:text-xl mb-8">Professional, reliable, and comprehensive plumbing solutions for homes and businesses.</p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 bg-white max-w-6xl mx-auto w-full">
          <h2 className="text-2xl font-bold text-center mb-10 text-gray-800">All Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "Leaky Faucet Repair", icon: "🚰", description: "Expert repair of all types of faucets and fixtures." },
              { title: "Pipe Installation", icon: "🛠️", description: "Professional pipe installation and replacement services." },
              { title: "Drain Cleaning", icon: "🧹", description: "Thorough drain cleaning and unclogging services." },
              { title: "Water Heater Repair", icon: "🔥", description: "Repair and installation of water heaters." },
              { title: "Toilet Fixing", icon: "🚽", description: "Complete toilet repair and installation services." },
              { title: "Emergency Plumbing", icon: "⚡", description: "24/7 emergency plumbing services available." },
            ].map((service) => (
              <div key={service.title} className="bg-gray-100 rounded-lg p-6 flex flex-col items-center shadow hover:shadow-lg transition">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-semibold text-lg mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-700 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Need Plumbing Services?</h2>
            <p className="text-xl mb-8">Call us today for fast, reliable service.</p>
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

  // If it's a subdomain, show location-specific services
  const location = getLocationBySubdomain(subdomain);
  
  if (!location) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Location not found</h1>
          <p className="text-gray-600">No services available for this location.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-400 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Plumbing Services in {location.name}</h1>
          <p className="text-lg sm:text-xl mb-8">Professional, reliable, and comprehensive plumbing solutions for {location.name}, {location.state}.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our Services in {location.name}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {location.services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Why Choose Our Services in {location.name}?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 text-blue-700 rounded-full p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Emergency Service</h3>
              <p className="text-gray-600">Available round the clock for urgent plumbing emergencies in {location.name}.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 text-blue-700 rounded-full p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">All our plumbers are licensed, bonded, and insured for your protection.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 text-blue-700 rounded-full p-4 mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
              <p className="text-gray-600">No hidden fees. Get upfront pricing before we start any work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Call us now for fast, reliable plumbing services in {location.name}.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`tel:${location.phone.replace(/\D/g, '')}`}
              className="bg-white text-blue-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition"
            >
              Call {location.phone}
            </a>
            <button className="bg-blue-600 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-blue-800 transition">
              Get Free Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 