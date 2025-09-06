import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import locationsData from '@/data/locations.json';

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

interface LocationPageProps {
  params: Promise<{ location: string }>;
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { location: locationId } = await params;
  const location = (locationsData as LocationsData).locations.find((loc: LocationData) => loc.id === locationId);
  
  if (!location) {
    return {
      title: 'Plumbing Services | GD Professional Plumbing',
      description: 'Professional plumbing services across the USA. Licensed, experienced, and affordable for repairs, installs, or maintenance!'
    };
  }

  return {
    title: `${location.name} Plumbing Services | Repairs, Installation & 24/7 Emergency`,
    description: `Need plumbing help in ${location.name}? Expert plumbers for drain cleaning, leak detection, water heater repair & 24/7 emergency service. Call now!`,
    keywords: [
      `plumbing services ${location.name}`,
      `plumber ${location.name}`,
      `emergency plumber ${location.name}`,
      `local plumber ${location.name}`,
      `plumber near me ${location.name}`,
      `plumbing repair ${location.name}`,
      `24/7 plumber ${location.name}`,
      `licensed plumber ${location.name}`,
      `plumbing contractor ${location.name}`,
      `residential plumbing ${location.name}`,
      `commercial plumbing ${location.name}`,
      `plumbing maintenance ${location.name}`,
      `plumbing emergency ${location.name}`,
      `drain cleaning ${location.name}`,
      `water heater repair ${location.name}`,
      `leak detection ${location.name}`,
      `sewer line repair ${location.name}`,
      `toilet repair ${location.name}`,
      `faucet repair ${location.name}`
    ],
    openGraph: {
      title: `${location.name} Plumbing Services | Repairs, Installation & 24/7 Emergency`,
      description: `Need plumbing help in ${location.name}? Expert plumbers for drain cleaning, leak detection, water heater repair & 24/7 emergency service. Call now!`,
      type: 'website',
      locale: 'en_US',
      siteName: 'GD Professional Plumbing'
    },
    twitter: {
      card: 'summary_large_image',
      title: `${location.name} Plumbing Services | Repairs, Installation & 24/7 Emergency`,
      description: `Need plumbing help in ${location.name}? Expert plumbers for drain cleaning, leak detection, water heater repair & 24/7 emergency service. Call now!`
    },
    alternates: {
      canonical: `https://${location.id}.gdprofessionalplumbing.com/services`
    }
  };
}

export default async function ServicesPage({ params }: LocationPageProps) {
  const { location: locationId } = await params;
  const location = (locationsData as LocationsData).locations.find((loc: LocationData) => loc.id === locationId);
  
  if (!location) {
    notFound();
  }

  const services = [
    {
      title: 'Water Heater Repair & Installation',
      description: 'Professional water heater services including repair, replacement, and installation of tank and tankless systems.',
      icon: '🔥'
    },
    {
      title: 'Drain Cleaning Services',
      description: 'Professional drain cleaning for clogged sinks, tubs, and sewer lines using advanced equipment.',
      icon: '🚰'
    },
    {
      title: 'Leak Detection & Repair',
      description: 'Advanced leak detection technology to quickly locate and repair hidden water leaks.',
      icon: '🔍'
    },
    {
      title: 'Sewer Line Services',
      description: 'Complete sewer line inspection, repair, and replacement services with camera technology.',
      icon: '🔧'
    },
    {
      title: 'Toilet Repair & Installation',
      description: 'Fast and reliable toilet repair, replacement, and installation services for all types.',
      icon: '🚽'
    },
    {
      title: 'Faucet & Sink Repair',
      description: 'Professional repair and installation of kitchen and bathroom faucets and sinks.',
      icon: '💧'
    }
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col font-sans">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/90">
          <img 
            src="/hero-bg.jpg" 
            alt="Professional plumber working"
            className="w-full h-full object-cover mix-blend-multiply"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Plumbing Services in {location.name}, {location.state}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Comprehensive plumbing solutions for residential, commercial, and emergency needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+18334450128" 
                className="bg-white text-blue-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition inline-block"
              >
                Call (833) 445-0128
              </a>
              <a 
                href="#services" 
                className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-blue-700 transition inline-block"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-700 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-700 mb-2">1000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-700 mb-2">24/7</div>
              <div className="text-gray-600">Emergency Service</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-700 mb-2">100%</div>
              <div className="text-gray-600">Satisfaction Guaranteed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Complete Plumbing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From emergency repairs to routine maintenance, we provide comprehensive plumbing solutions for all your needs in {location.name}, {location.state}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                <a 
                  href="tel:+18334450128" 
                  className="text-blue-700 font-semibold hover:text-blue-800 transition"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose GD Professional Plumbing in {location.name}?
            </h2>
            <p className="text-xl text-gray-600">
              50+ years of trusted service with licensed professionals and guaranteed workmanship
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Experienced Professionals</h3>
              <p className="text-gray-600">We have decades of experience solving all plumbing challenges, big or small.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Emergency Services</h3>
              <p className="text-gray-600">No hidden fees or surprise charges. Our pricing is transparent and budget-friendly.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Licensed and Insured</h3>
              <p className="text-gray-600">Our dedicated team of plumbers are fully licensed and insured for your peace of mind.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Reliable and Trustworthy</h3>
              <p className="text-gray-600">We pride ourselves on honest, dependable service you can rely on every time.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Affordable Pricing</h3>
              <p className="text-gray-600">Our quality plumbing solutions are fairly priced to give you the best value.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Satisfaction Guaranteed</h3>
              <p className="text-gray-600">We're committed to top-notch service and complete customer satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1c7bc8] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Professional Plumbing Service?
          </h2>
          <p className="text-xl mb-8">
            Contact us today for reliable, professional plumbing services in {location.name}, {location.state}. We're available 24/7 for emergency calls and scheduled appointments.
          </p>
          <a 
            href="tel:+18334450128" 
            className="bg-white text-[#1c7bc8] font-bold px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition inline-block"
          >
            Call (833) 445-0128
          </a>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
