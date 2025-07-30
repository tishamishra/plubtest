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
        <section className="relative h-[60vh] overflow-visible">
          <img 
            src="/hero-bg.jpg" 
            alt="Plumbing background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center text-white px-6 max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                About GD Professional Plumbing
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl opacity-95 max-w-3xl mx-auto leading-relaxed">
                Learn more about our team, our values, and why customers trust us.
              </p>
            </div>
          </div>
        </section>
        {/* About Content */}
        <section className="py-16 px-4 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">About PlumPro</h2>
            <p className="text-lg text-gray-700 mb-6">
              PlumPro is a leading plumbing service provider serving multiple states with professional, reliable, and comprehensive plumbing solutions. 
              We understand that plumbing issues can be stressful, which is why we&apos;re committed to providing fast, efficient, and trustworthy service.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our team of licensed and experienced plumbers is available 24/7 to handle all your plumbing needs, from routine maintenance to emergency repairs.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-8">Why Choose PlumPro?</h3>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li><strong>Licensed & Insured:</strong> All our plumbers are licensed, bonded, and insured for your protection</li>
              <li><strong>24/7 Emergency Service:</strong> Available round the clock for urgent plumbing emergencies</li>
              <li><strong>Fast Response:</strong> Quick response times for all your plumbing needs</li>
              <li><strong>Transparent Pricing:</strong> No hidden fees, upfront pricing before we start any work</li>
              <li><strong>Professional Service:</strong> Clean, courteous, and professional plumbers</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 text-gray-800 mt-8">Our Services</h3>
            <p className="text-lg text-gray-700 mb-4">
              We offer comprehensive plumbing services including:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🚰</span>
                <span className="text-gray-700">Leaky Faucet Repair</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🛠️</span>
                <span className="text-gray-700">Pipe Installation</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🧹</span>
                <span className="text-gray-700">Drain Cleaning</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🔥</span>
                <span className="text-gray-700">Water Heater Repair</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🚽</span>
                <span className="text-gray-700">Toilet Fixing</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">⚡</span>
                <span className="text-gray-700">Emergency Plumbing</span>
              </div>
            </div>
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