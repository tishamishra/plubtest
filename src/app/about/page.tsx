"use client";
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import FloatingCTA from '@/components/FloatingCTA';
import Link from 'next/link';

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('story');
  const [isVisible, setIsVisible] = useState(false);
  const [currentYear, setCurrentYear] = useState(0);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [currentCustomers, setCurrentCustomers] = useState(0);
  const [currentProjects, setCurrentProjects] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Animate counters
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const stepValue = 50 / steps;
      const stepTime = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        setCurrentYear(Math.floor(stepValue * currentStep));
        setCurrentExperience(Math.floor(stepValue * currentStep));
        setCurrentCustomers(Math.floor(stepValue * currentStep * 1000));
        setCurrentProjects(Math.floor(stepValue * currentStep * 100));
        
        if (currentStep >= steps) {
          clearInterval(timer);
          setCurrentYear(50);
          setCurrentExperience(50);
          setCurrentCustomers(50000);
          setCurrentProjects(5000);
        }
      }, stepTime);
    };

    const timeout = setTimeout(animateCounters, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Parallax */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/plumber-hero.jpg" 
            alt="Professional plumber working"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/60"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-6 max-w-6xl mx-auto">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="mb-6">
                <span className="bg-red-600 text-white px-6 py-3 rounded-full text-sm font-semibold animate-pulse">
                  Since 1973
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                About GD Professional Plumbing
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl opacity-95 max-w-4xl mx-auto leading-relaxed mb-8">
                Five decades of trusted service, innovation, and unwavering commitment to excellence
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:8334450128"
                  className="inline-flex items-center bg-[#1c7bc8] hover:bg-[#0f5a9e] text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call (833) 445-0128
                </a>
                <a 
                  href="#our-story"
                  className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-xl text-lg border-2 border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                >
                  Learn Our Story
                </a>
              </div>
            </div>
          </div>
        </div>
        <FloatingCTA />
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#1c7bc8] to-[#0f5a9e] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold mb-2">{currentYear}+</div>
                <div className="text-sm md:text-base opacity-90">Years of Experience</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold mb-2">{currentExperience}+</div>
                <div className="text-sm md:text-base opacity-90">Expert Plumbers</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold mb-2">{currentCustomers.toLocaleString()}+</div>
                <div className="text-sm md:text-base opacity-90">Happy Customers</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold mb-2">{currentProjects.toLocaleString()}+</div>
                <div className="text-sm md:text-base opacity-90">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tabs Section */}
      <section id="our-story" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Story & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the journey that made us the most trusted name in plumbing services
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'story', label: 'Our Story', icon: '📖' },
              { id: 'mission', label: 'Mission & Vision', icon: '🎯' },
              { id: 'values', label: 'Core Values', icon: '💎' },
              { id: 'team', label: 'Our Team', icon: '👥' },
              { id: 'timeline', label: 'Timeline', icon: '📅' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeTab === tab.id
                    ? 'bg-[#1c7bc8] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {activeTab === 'story' && (
              <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">A Legacy of Excellence Since 1973</h3>
                    <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                      <p>
                        Founded in 1973 by George Davidson, GD Professional Plumbing began as a small family business with a simple mission: to provide honest, reliable plumbing services to our community. What started as a one-man operation has grown into one of the most trusted names in professional plumbing services across multiple states.
                      </p>
                      <p>
                        Over the past five decades, we've witnessed the evolution of plumbing technology, from basic pipe systems to sophisticated smart home solutions. Through it all, we've maintained our commitment to quality, integrity, and customer satisfaction.
                      </p>
                      <p>
                        Today, GD Professional Plumbing serves thousands of residential and commercial customers with a team of over 50 licensed professionals, state-of-the-art equipment, and unwavering dedication to excellence.
                      </p>
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src="/images/plumber-working.jpg" 
                      alt="Plumber working professionally"
                      className="rounded-2xl shadow-xl w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'mission' && (
              <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="bg-gradient-to-br from-[#1c7bc8] to-[#0f5a9e] text-white p-8 rounded-2xl">
                    <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
                    <p className="text-lg leading-relaxed">
                      To provide exceptional plumbing services that exceed customer expectations through innovation, reliability, and unwavering commitment to quality. We strive to be the most trusted name in professional plumbing, building lasting relationships with our customers and communities.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-8 rounded-2xl">
                    <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
                    <p className="text-lg leading-relaxed">
                      To lead the plumbing industry through technological advancement, sustainable practices, and exceptional service delivery. We envision a future where every home and business has access to reliable, efficient, and environmentally conscious plumbing solutions.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'values' && (
              <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      icon: '🤝',
                      title: 'Integrity',
                      description: 'We conduct business with honesty, transparency, and ethical practices in everything we do.'
                    },
                    {
                      icon: '⭐',
                      title: 'Excellence',
                      description: 'We strive for excellence in every project, no matter how big or small.'
                    },
                    {
                      icon: '⚡',
                      title: 'Reliability',
                      description: 'Our customers can count on us to be there when they need us, 24/7.'
                    },
                    {
                      icon: '💡',
                      title: 'Innovation',
                      description: 'We embrace new technologies and methods to provide the best solutions.'
                    },
                    {
                      icon: '❤️',
                      title: 'Customer Focus',
                      description: 'Our customers are at the heart of every decision we make.'
                    },
                    {
                      icon: '🌱',
                      title: 'Sustainability',
                      description: 'We promote eco-friendly solutions and responsible resource management.'
                    }
                  ].map((value, index) => (
                    <div key={index} className="group bg-gray-50 hover:bg-white p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      <div className="text-4xl mb-4">{value.icon}</div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'team' && (
              <div className="p-8 md:p-12">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Meet Our Leadership Team</h3>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Our experienced leadership team brings decades of combined expertise to ensure GD Professional Plumbing continues to deliver exceptional service.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      name: 'Michael Davidson',
                      position: 'CEO & Founder',
                      experience: '50+ Years',
                      image: '/images/plumber-hero.jpg',
                      bio: 'Son of the founder, Michael has led the company\'s expansion while maintaining the family values of quality and integrity.'
                    },
                    {
                      name: 'Sarah Rodriguez',
                      position: 'Operations Director',
                      experience: '25+ Years',
                      image: '/images/plumber-working.jpg',
                      bio: 'Sarah oversees all daily operations, ensuring smooth service delivery and customer satisfaction.'
                    },
                    {
                      name: 'David Chen',
                      position: 'Technical Director',
                      experience: '30+ Years',
                      image: '/images/commercial-plumbing.jpg',
                      bio: 'David leads our technical team, implementing the latest plumbing technologies and best practices.'
                    }
                  ].map((member, index) => (
                    <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <div className="text-sm opacity-90">{member.experience} Experience</div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                        <p className="text-[#1c7bc8] font-semibold mb-3">{member.position}</p>
                        <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'timeline' && (
              <div className="p-8 md:p-12">
                <div className="relative">
                  <div className="absolute left-8 top-0 bottom-0 w-1 bg-[#1c7bc8]"></div>
                  {[
                    {
                      year: '1973',
                      title: 'Company Founded',
                      description: 'George Davidson establishes GD Professional Plumbing as a small family business.'
                    },
                    {
                      year: '1985',
                      title: 'First Expansion',
                      description: 'Expanded services to neighboring cities and hired our first team of plumbers.'
                    },
                    {
                      year: '1995',
                      title: 'Commercial Services',
                      description: 'Launched commercial plumbing services to serve businesses and industrial clients.'
                    },
                    {
                      year: '2005',
                      title: 'Technology Integration',
                      description: 'Adopted modern plumbing technologies and computerized scheduling systems.'
                    },
                    {
                      year: '2015',
                      title: 'Multi-State Expansion',
                      description: 'Expanded operations across multiple states with 50+ licensed professionals.'
                    },
                    {
                      year: '2023',
                      title: '50th Anniversary',
                      description: 'Celebrated 50 years of excellence and launched next-generation smart plumbing solutions.'
                    }
                  ].map((event, index) => (
                    <div key={index} className="relative flex items-center mb-12">
                      <div className="absolute left-6 w-4 h-4 bg-[#1c7bc8] rounded-full border-4 border-white shadow-lg"></div>
                      <div className="ml-16 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        <div className="text-2xl font-bold text-[#1c7bc8] mb-2">{event.year}</div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h4>
                        <p className="text-gray-600">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose GD Professional Plumbing?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Five decades of experience have taught us what truly matters to our customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🏆',
                title: '50+ Years of Excellence',
                description: 'Half a century of trusted service and proven expertise in all aspects of plumbing.'
              },
              {
                icon: '🔧',
                title: 'Licensed & Insured',
                description: 'All our plumbers are fully licensed, bonded, and insured for your complete protection.'
              },
              {
                icon: '⚡',
                title: '24/7 Emergency Service',
                description: 'Round-the-clock availability for urgent plumbing emergencies when you need us most.'
              },
              {
                icon: '💰',
                title: 'Transparent Pricing',
                description: 'No hidden fees or surprise charges. Clear, upfront pricing for all our services.'
              },
              {
                icon: '🚀',
                title: 'Fast Response Times',
                description: 'Quick response times with guaranteed same-day service for emergency calls.'
              },
              {
                icon: '✅',
                title: '100% Satisfaction Guarantee',
                description: 'We stand behind every job with our comprehensive satisfaction guarantee.'
              }
            ].map((feature, index) => (
              <div key={index} className="group text-center p-8 bg-gray-50 rounded-2xl hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Serving Communities Across Multiple States</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From residential repairs to commercial installations, we're your trusted plumbing partner
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { state: 'California', cities: 'Los Angeles, San Francisco, San Diego' },
              { state: 'New York', cities: 'New York City, Buffalo, Rochester' },
              { state: 'Texas', cities: 'Houston, Dallas, Austin' },
              { state: 'Florida', cities: 'Miami, Orlando, Tampa' }
            ].map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-3xl mb-4">📍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{area.state}</h3>
                <p className="text-gray-600 text-sm">{area.cities}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/locations"
              className="inline-flex items-center bg-[#1c7bc8] hover:bg-[#0f5a9e] text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View All Service Areas
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1c7bc8] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Experience the GD Professional Plumbing Difference?</h2>
          <p className="text-xl mb-12 opacity-95 max-w-3xl mx-auto">
            Join thousands of satisfied customers who trust us with their plumbing needs. Get in touch today for a free consultation and estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:8334450128"
              className="inline-flex items-center bg-white text-[#1c7bc8] font-bold px-8 py-4 rounded-xl text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (833) 445-0128
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-[#1c7bc8] transition-all duration-300 transform hover:scale-105"
            >
              Get Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 