import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
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


  return (
    <div className="bg-white min-h-screen flex flex-col font-sans">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://ik.imagekit.io/nang9yead/Plumber%20Fixing%20Leaking%20Sink%20Pipe%20with%20Wrench.png?updatedAt=1756066955385"
            alt="Professional plumber working"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-700/60"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-6 max-w-6xl mx-auto">
            <div className="transition-all duration-1000 opacity-100 translate-y-0">
              <div className="mb-6">
                <span className="bg-red-600 text-white px-6 py-3 rounded-full text-sm font-semibold animate-pulse">
                  24/7 Emergency Service
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Professional Plumbing Services in {location.name}, {location.state}
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl opacity-95 max-w-4xl mx-auto leading-relaxed mb-8">
                Comprehensive plumbing solutions for residential, commercial, and emergency needs
              </p>
              <div className="flex justify-center">
                <a 
                  href="tel:+18336090936" 
                  className="group relative bg-white text-blue-700 font-bold px-8 py-4 rounded-xl text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3 animate-pulse"
                >
                  <div className="relative">
                    <svg className="w-6 h-6 animate-bounce text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"/>
                    </svg>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                  </div>
                  <span className="font-bold tracking-wide">(833) 609-0936</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#1c7bc8] to-[#0f5a9e] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
                <div className="text-lg opacity-90">Plumbing Services</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
                <div className="text-lg opacity-90">Years Experience</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold mb-2">15</div>
                <div className="text-lg opacity-90">Minute Response</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Complete Plumbing Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From emergency repairs to routine maintenance, we provide comprehensive plumbing solutions for all your needs in {location.name}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Cards */}
            <Link href={`/plumber-water-heater-repair`} className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <img 
                  src="https://ik.imagekit.io/nang9yead/Plumber%20Fixing%20Leaking%20Sink%20Pipe%20with%20Wrench.png?updatedAt=1756066955385"
                  alt="Water Heater Repair"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Water Heater Repair & Installation</h3>
                  <p className="text-gray-600 mb-4">Professional water heater services including repair, replacement, and installation of tank and tankless systems.</p>
                  <div className="flex items-center text-[#1c7bc8] font-semibold">
                    Learn More
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            <Link href={`/plumber-drain-cleaning`} className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <img 
                  src="https://ik.imagekit.io/nang9yead/plumber%20clearing%20blocked%20sink%20with%20water?updatedAt=1756066954284"
                  alt="Drain Cleaning"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Drain Cleaning Services</h3>
                  <p className="text-gray-600 mb-4">Professional drain cleaning for clogged sinks, tubs, and sewer lines using advanced equipment.</p>
                  <div className="flex items-center text-[#1c7bc8] font-semibold">
                    Learn More
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            <Link href={`/plumber-leak-detection`} className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <img 
                  src="https://ik.imagekit.io/nang9yead/PVC%20Pipe%20Installation%20in%20Soil.png?updatedAt=1756066962271"
                  alt="Leak Detection"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Leak Detection & Repair</h3>
                  <p className="text-gray-600 mb-4">Advanced leak detection technology to quickly locate and repair hidden water leaks.</p>
                  <div className="flex items-center text-[#1c7bc8] font-semibold">
                    Learn More
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            <Link href={`/plumber-sewer-line-repair`} className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <img 
                  src="https://ik.imagekit.io/nang9yead/Old%20Rusty%20Underground%20Pipeline.png?updatedAt=1756066953091"
                  alt="Sewer Line Repair"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Sewer Line Services</h3>
                  <p className="text-gray-600 mb-4">Complete sewer line inspection, repair, and replacement services with camera technology.</p>
                  <div className="flex items-center text-[#1c7bc8] font-semibold">
                    Learn More
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            <Link href={`/plumber-toilet-repair`} className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <img 
                  src="https://ik.imagekit.io/nang9yead/Plumber%20Using%20Plunger%20on%20Toilet%20Bowl%20worker%20in%20orange%20uniform%20unclogging%20toilet?updatedAt=1756066962119"
                  alt="Toilet Repair"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Toilet Repair & Installation</h3>
                  <p className="text-gray-600 mb-4">Fast and reliable toilet repair, replacement, and installation services for all types.</p>
                  <div className="flex items-center text-[#1c7bc8] font-semibold">
                    Learn More
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            <Link href={`/plumber-faucet-sink-repair`} className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <img 
                  src="https://ik.imagekit.io/nang9yead/Smiling%20Plumber%20Repairing%20Bathroom%20Sink%20Pipe.png?updatedAt=1756066965094"
                  alt="Faucet & Sink Repair"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Faucet & Sink Repair</h3>
                  <p className="text-gray-600 mb-4">Professional repair and installation of kitchen and bathroom faucets and sinks.</p>
                  <div className="flex items-center text-[#1c7bc8] font-semibold">
                    Learn More
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#1c7bc8] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Get Professional Plumbing Service?</h2>
          <p className="text-xl mb-12 opacity-95">
            Contact us today for reliable, professional plumbing services in {location.name}. We're available 24/7 for emergency calls and scheduled appointments.
          </p>
          <div className="flex justify-center">
            <a
              href="tel:+18336090936"
              className="inline-flex items-center bg-white text-[#1c7bc8] font-bold px-8 py-4 rounded-xl text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (833) 609-0936
            </a>
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
            href="tel:+18336090936" 
            className="bg-white text-[#1c7bc8] font-bold px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition inline-block"
          >
            Call (833) 609-0936
          </a>
        </div>
      </section>

      <Footer location={{ name: location.name, state: location.state }} />
      <FloatingCTA />
    </div>
  );
}
