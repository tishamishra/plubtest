import { headers } from 'next/headers';
import { getLocationBySubdomain } from '@/utils/subdomain';
import Header from '@/components/Header';

export const dynamic = 'force-dynamic';

export default async function AboutPage() {
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

  // If it's main domain, show general about
  if (subdomain === 'www' || subdomain === 'affinsight' || subdomain === 'localhost' || !subdomain) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 min-h-[600px] flex items-center bg-gradient-to-br from-blue-700 to-blue-400">
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
            style={{
              backgroundImage: `url('/hero-bg.png')`,
            }}
          />
          {/* Dark Overlay for Better Text Readability */}
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          
          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">About PlumPro</h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 drop-shadow-md">Your trusted partner for all plumbing needs across multiple states.</p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16 px-4 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6">
              PlumPro has been serving communities across multiple states with professional plumbing services for over a decade. 
              We started with a simple mission: to provide reliable, honest, and professional plumbing services to homeowners and businesses.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Today, we serve hundreds of cities across Texas, California, and New York, with a team of licensed and experienced plumbers 
              who are committed to delivering exceptional service every time.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-8">Our Mission</h3>
            <p className="text-lg text-gray-700 mb-6">
              To provide fast, reliable, and professional plumbing services that exceed customer expectations while maintaining the highest 
              standards of quality and safety.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-8">Our Values</h3>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li><strong>Reliability:</strong> We show up on time and get the job done right the first time</li>
              <li><strong>Honesty:</strong> Transparent pricing and honest communication with every customer</li>
              <li><strong>Quality:</strong> We use the best materials and techniques for lasting results</li>
              <li><strong>Safety:</strong> Licensed, bonded, and insured for your protection</li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-700 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
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

  // If it's a subdomain, show location-specific about
  const location = getLocationBySubdomain(subdomain);
  
  if (!location) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Location not found</h1>
          <p className="text-gray-600">No information available for this location.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 min-h-[600px] flex items-center bg-gradient-to-br from-blue-700 to-blue-400">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
          style={{
            backgroundImage: `url('/hero-bg.png')`,
          }}
        />
        {/* Dark Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">About PlumPro in {location.name}</h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 drop-shadow-md">Your trusted local plumbing partner in {location.name}, {location.state}.</p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Serving {location.name}</h2>
          <p className="text-lg text-gray-700 mb-6">
            PlumPro has been proudly serving {location.name} and the surrounding areas with professional plumbing services. 
            Our local team understands the unique plumbing needs of {location.name} residents and businesses.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            We serve {location.areas.length} areas in and around {location.name}, ensuring that no matter where you are in the region, 
            you have access to fast, reliable plumbing services when you need them most.
          </p>
          
          <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-8">Why Choose PlumPro in {location.name}?</h3>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li><strong>Local Expertise:</strong> We know {location.name} and understand local plumbing codes and requirements</li>
            <li><strong>Fast Response:</strong> Quick response times for emergency plumbing needs in {location.name}</li>
            <li><strong>Licensed & Insured:</strong> All our plumbers are licensed, bonded, and insured for your protection</li>
            <li><strong>24/7 Emergency Service:</strong> Available round the clock for urgent plumbing emergencies</li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-8">Our Services in {location.name}</h3>
          <p className="text-lg text-gray-700 mb-4">
            We offer comprehensive plumbing services in {location.name}, including:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {location.services.slice(0, 6).map((service, index) => (
              <div key={index} className="flex items-center space-x-3">
                <span className="text-2xl">{service.icon}</span>
                <span className="text-gray-700">{service.title}</span>
              </div>
            ))}
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