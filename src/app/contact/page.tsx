import { headers } from 'next/headers';
import { getLocationBySubdomain } from '@/utils/subdomain';
import Header from '@/components/Header';

export const dynamic = 'force-dynamic';

export default async function ContactPage() {
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

  // If it's main domain, show general contact
  if (subdomain === 'www' || subdomain === 'affinsight' || subdomain === 'localhost' || !subdomain) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 min-h-[600px] flex items-center">
          {/* Background Image */}
          <img 
            src="/hero-bg.png"
            alt="Plumbing background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark Overlay for Better Text Readability */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          
          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">Contact Us</h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 drop-shadow-md">Get in touch with us for all your plumbing needs.</p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 px-4 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Get In Touch</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 text-blue-700 rounded-full p-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Phone</p>
                    <p className="text-gray-600">(833) 445-0128</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 text-blue-700 rounded-full p-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-gray-600">info@affinsight.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 text-blue-700 rounded-full p-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Service Areas</p>
                    <p className="text-gray-600">Texas, California, New York</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Emergency Service</h2>
              <p className="text-gray-700 mb-4">
                Need immediate plumbing assistance? We offer 24/7 emergency services across all our locations.
              </p>
              <a 
                href="tel:+18334450128" 
                className="bg-red-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-red-700 transition inline-block"
              >
                Emergency: (833) 445-0128
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-700 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
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

  // If it's a subdomain, show location-specific contact
  const location = getLocationBySubdomain(subdomain);
  
  if (!location) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Location not found</h1>
          <p className="text-gray-600">No contact information available for this location.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 min-h-[600px] flex items-center">
        {/* Background Image */}
        <img 
          src="/hero-bg.png"
          alt="Plumbing background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">Contact Us in {location.name}</h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 drop-shadow-md">Get in touch with our local team in {location.name}, {location.state}.</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact {location.name} Office</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 text-blue-700 rounded-full p-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Phone</p>
                  <p className="text-gray-600">{location.phone}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 text-blue-700 rounded-full p-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Service Areas</p>
                  <p className="text-gray-600">{location.areas.length} areas in {location.name}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 text-blue-700 rounded-full p-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Response Time</p>
                  <p className="text-gray-600">Same day service available</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Emergency Service in {location.name}</h2>
            <p className="text-gray-700 mb-4">
              Need immediate plumbing assistance in {location.name}? We offer 24/7 emergency services with fast response times.
            </p>
            <a 
              href={`tel:${location.phone.replace(/\D/g, '')}`}
              className="bg-red-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-red-700 transition inline-block"
            >
              Emergency: {location.phone}
            </a>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">We Serve These Areas in {location.name}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {location.areas.slice(0, 12).map((area, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
                <span className="text-gray-800 font-medium text-sm">{area}</span>
              </div>
            ))}
          </div>
          {location.areas.length > 12 && (
            <p className="text-gray-600 text-center mt-4">
              And {location.areas.length - 12} more areas in {location.name}...
            </p>
          )}
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