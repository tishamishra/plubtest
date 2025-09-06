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
  phone: string;
  address: string;
  city: string;
  zip: string;
  lat: number;
  lng: number;
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
      title: 'About Us | GD Professional Plumbing',
      description: 'Learn about our expert plumbing team. We provide reliable, affordable plumbing services, from repairs to installations, with 24/7 emergency support.'
    };
  }

  return {
    title: `About Our Plumbing Services in ${location.name} | Trusted Local Plumbers`,
    description: `Learn about our expert plumbing team in ${location.name}. We provide reliable, affordable plumbing services, from repairs to installations, with 24/7 emergency support.`,
    keywords: [
      `about plumber ${location.name}`,
      `plumbing company ${location.name}`,
      `local plumber ${location.name}`,
      `plumbing team ${location.name}`,
      `plumbing services ${location.name}`,
      `emergency plumber ${location.name}`,
      `licensed plumber ${location.name}`,
      `plumbing contractor ${location.name}`,
      `residential plumbing ${location.name}`,
      `commercial plumbing ${location.name}`,
      `plumbing repair ${location.name}`,
      `plumbing installation ${location.name}`,
      `24/7 plumber ${location.name}`,
      `plumbing maintenance ${location.name}`,
      `plumbing emergency ${location.name}`
    ],
    openGraph: {
      title: `About Our Plumbing Services in ${location.name} | Trusted Local Plumbers`,
      description: `Learn about our expert plumbing team in ${location.name}. We provide reliable, affordable plumbing services, from repairs to installations, with 24/7 emergency support.`,
      type: 'website',
      locale: 'en_US',
      siteName: 'GD Professional Plumbing'
    },
    twitter: {
      card: 'summary_large_image',
      title: `About Our Plumbing Services in ${location.name} | Trusted Local Plumbers`,
      description: `Learn about our expert plumbing team in ${location.name}. We provide reliable, affordable plumbing services, from repairs to installations, with 24/7 emergency support.`
    },
    alternates: {
      canonical: `https://${location.id}.gdprofessionalplumbing.com/about`
    }
  };
}

export default async function AboutPage({ params }: LocationPageProps) {
  const { location: locationId } = await params;
  const location = (locationsData as LocationsData).locations.find((loc: LocationData) => loc.id === locationId);
  
  if (!location) {
    notFound();
  }

  const teamMembers = [
    {
      name: 'Mike Johnson',
      role: 'Lead Plumber',
      experience: '15+ years',
      specialties: ['Emergency Repairs', 'Water Heater Installation', 'Sewer Line Repair']
    },
    {
      name: 'Sarah Williams',
      role: 'Senior Technician',
      experience: '12+ years',
      specialties: ['Drain Cleaning', 'Leak Detection', 'Bathroom Renovation']
    },
    {
      name: 'David Chen',
      role: 'Commercial Specialist',
      experience: '10+ years',
      specialties: ['Commercial Plumbing', 'Gas Line Installation', 'Preventive Maintenance']
    }
  ];

  const values = [
    {
      title: 'Quality Workmanship',
      description: 'We take pride in delivering high-quality plumbing work that stands the test of time.',
      icon: '🔧'
    },
    {
      title: 'Customer Satisfaction',
      description: 'Your satisfaction is our top priority. We go above and beyond to exceed your expectations.',
      icon: '😊'
    },
    {
      title: 'Reliability',
      description: 'Count on us to be there when you need us most, with prompt and dependable service.',
      icon: '⏰'
    },
    {
      title: 'Transparency',
      description: 'We provide honest, upfront pricing with no hidden fees or surprise charges.',
      icon: '💯'
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
              About Our Plumbing Services in {location.name}, {location.state}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Trusted local plumbers serving {location.name} and surrounding areas with expert plumbing solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+18334450128" 
                className="bg-white text-blue-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition inline-block"
              >
                Call (833) 445-0128
              </a>
              <a 
                href="#about" 
                className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-blue-700 transition inline-block"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your Trusted Plumbing Experts in {location.name}
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  For over 50 years, GD Professional Plumbing has been the go-to plumbing company for residents and businesses in {location.name}, {location.state}. Our commitment to excellence, reliability, and customer satisfaction has made us the most trusted name in local plumbing services.
                </p>
                <p>
                  We understand that plumbing issues can be stressful and disruptive to your daily life. That's why we've built our reputation on providing fast, reliable, and affordable plumbing solutions that you can count on. Whether you need emergency repairs, routine maintenance, or new installations, our experienced team is here to help.
                </p>
                <p>
                  Our licensed and insured plumbers use the latest tools and techniques to ensure your plumbing system works efficiently and safely. We're proud to serve {location.name} and surrounding communities with 24/7 emergency service, transparent pricing, and guaranteed workmanship.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://ik.imagekit.io/nang9yead/plumber%20working%20on%20pipes?updatedAt=1756066954284" 
                alt="Professional plumber working in plumbing system"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-blue-900/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Track Record in {location.name}
            </h2>
            <p className="text-xl text-gray-600">
              Numbers that speak to our commitment and expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-blue-700 mb-2">50+</div>
              <div className="text-gray-600">Years in Business</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-blue-700 mb-2">1000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-blue-700 mb-2">24/7</div>
              <div className="text-gray-600">Emergency Service</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-blue-700 mb-2">100%</div>
              <div className="text-gray-600">Satisfaction Guaranteed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600">
              Licensed professionals dedicated to serving {location.name}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👨‍🔧</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-700 font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.experience} Experience</p>
                <div className="space-y-1">
                  {member.specialties.map((specialty, idx) => (
                    <span key={idx} className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mr-2 mb-2">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              What drives us to provide exceptional service in {location.name}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving {location.name} and Surrounding Areas
            </h2>
            <p className="text-xl text-gray-600">
              We're proud to be your local plumbing experts
            </p>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Experience the GD Professional Plumbing Difference?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Join thousands of satisfied customers in {location.name} who trust us with their plumbing needs. From emergency repairs to new installations, we're here to help.
            </p>
            <a 
              href="tel:+18334450128" 
              className="bg-blue-700 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-blue-800 transition inline-block"
            >
              Call (833) 445-0128
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
