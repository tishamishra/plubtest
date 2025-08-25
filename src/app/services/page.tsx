"use client";
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import FloatingCTA from '@/components/FloatingCTA';
import Link from 'next/link';

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('residential');
  const [isVisible, setIsVisible] = useState(false);
  const [currentServices, setCurrentServices] = useState(0);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [currentResponse, setCurrentResponse] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Animate counters
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const stepValue = 15 / steps;
      const stepTime = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        setCurrentServices(Math.floor(stepValue * currentStep));
        setCurrentExperience(Math.floor(stepValue * currentStep));
        setCurrentResponse(Math.floor(stepValue * currentStep));
        
        if (currentStep >= steps) {
          clearInterval(timer);
          setCurrentServices(15);
          setCurrentExperience(15);
          setCurrentResponse(15);
        }
      }, stepTime);
    };

    const timeout = setTimeout(animateCounters, 500);
    return () => clearTimeout(timeout);
  }, []);

  const serviceCategories: Record<string, {
    title: string;
    description: string;
    services: Array<{
      icon: string;
      title: string;
      description: string;
      features: string[];
    }>;
  }> = {
    residential: {
      title: "Residential Plumbing",
      description: "Complete plumbing solutions for homes and apartments",
      services: [
        {
          icon: "🚰",
          title: "Water Heater Repair & Installation",
          description: "Expert repair and installation of traditional and tankless water heaters",
          features: ["24/7 Emergency Service", "Licensed Technicians", "Warranty Included"]
        },
        {
          icon: "🚽",
          title: "Toilet Repair & Installation",
          description: "Fast and reliable toilet repair, replacement, and installation services",
          features: ["Same Day Service", "Modern Fixtures", "Water Efficiency"]
        },
        {
          icon: "🛁",
          title: "Bathroom Remodeling",
          description: "Complete bathroom renovation and fixture installation services",
          features: ["Custom Design", "Quality Materials", "Project Management"]
        },
        {
          icon: "🧹",
          title: "Drain Cleaning & Repair",
          description: "Professional drain cleaning and repair for all types of clogs",
          features: ["Advanced Equipment", "Root Removal", "Preventive Maintenance"]
        },
        {
          icon: "🔧",
          title: "Faucet & Sink Repair",
          description: "Repair and replacement of kitchen and bathroom faucets and sinks",
          features: ["Leak Detection", "Modern Fixtures", "Water Conservation"]
        },
        {
          icon: "⚡",
          title: "Emergency Plumbing",
          description: "24/7 emergency plumbing services for urgent issues",
          features: ["Fast Response", "Licensed Plumbers", "Emergency Rates"]
        }
      ]
    },
    commercial: {
      title: "Commercial Plumbing",
      description: "Professional plumbing services for businesses and commercial properties",
      services: [
        {
          icon: "🏢",
          title: "Commercial Water Systems",
          description: "Installation and maintenance of large-scale water systems",
          features: ["Industrial Grade", "Energy Efficient", "Compliance Ready"]
        },
        {
          icon: "🔥",
          title: "Commercial Water Heaters",
          description: "Large capacity water heaters for commercial applications",
          features: ["High Capacity", "Energy Efficient", "Quick Recovery"]
        },
        {
          icon: "🚰",
          title: "Restaurant Plumbing",
          description: "Specialized plumbing services for restaurants and food service",
          features: ["Health Code Compliant", "Grease Trap Installation", "Commercial Grade"]
        },
        {
          icon: "🏥",
          title: "Healthcare Facility Plumbing",
          description: "Plumbing services for hospitals, clinics, and medical facilities",
          features: ["Sterile Environment", "Medical Grade", "Emergency Backup"]
        },
        {
          icon: "🏭",
          title: "Industrial Plumbing",
          description: "Heavy-duty plumbing solutions for industrial facilities",
          features: ["Industrial Grade", "High Pressure", "Corrosion Resistant"]
        },
        {
          icon: "🔧",
          title: "Preventive Maintenance",
          description: "Regular maintenance programs to prevent costly repairs",
          features: ["Scheduled Inspections", "Performance Reports", "Cost Savings"]
        }
      ]
    },
    emergency: {
      title: "Emergency Services",
      description: "24/7 emergency plumbing services when you need us most",
      services: [
        {
          icon: "💥",
          title: "Burst Pipe Repair",
          description: "Emergency repair of burst pipes and water line breaks",
          features: ["Immediate Response", "Water Damage Prevention", "Temporary Fixes"]
        },
        {
          icon: "🚨",
          title: "Sewer Line Emergencies",
          description: "Emergency sewer line repair and backup resolution",
          features: ["24/7 Availability", "Advanced Equipment", "Quick Resolution"]
        },
        {
          icon: "🔥",
          title: "Water Heater Emergencies",
          description: "Emergency water heater repair and replacement",
          features: ["Same Day Service", "Temporary Solutions", "Priority Scheduling"]
        },
        {
          icon: "🚽",
          title: "Toilet Emergencies",
          description: "Emergency toilet repair and unclogging services",
          features: ["Fast Response", "Professional Equipment", "Clean Work"]
        },
        {
          icon: "💧",
          title: "Flooding & Water Damage",
          description: "Emergency response to flooding and water damage situations",
          features: ["Water Extraction", "Damage Assessment", "Restoration Services"]
        },
        {
          icon: "⚡",
          title: "Gas Line Emergencies",
          description: "Emergency gas line repair and safety services",
          features: ["Safety First", "Licensed Technicians", "Emergency Shutoff"]
        }
      ]
    },
    specialty: {
      title: "Specialty Services",
      description: "Specialized plumbing solutions for unique needs",
      services: [
        {
          icon: "🔍",
          title: "Leak Detection",
          description: "Advanced leak detection using modern technology",
          features: ["Non-Invasive", "Accurate Results", "Cost Effective"]
        },
        {
          icon: "🌱",
          title: "Green Plumbing",
          description: "Eco-friendly plumbing solutions and water conservation",
          features: ["Water Saving", "Energy Efficient", "Eco-Friendly"]
        },
        {
          icon: "🏠",
          title: "New Construction",
          description: "Complete plumbing installation for new construction projects",
          features: ["Code Compliant", "Quality Materials", "Project Management"]
        },
        {
          icon: "🔄",
          title: "Pipe Relining",
          description: "Trenchless pipe repair and relining services",
          features: ["Minimal Disruption", "Cost Effective", "Long Lasting"]
        },
        {
          icon: "📊",
          title: "Plumbing Inspections",
          description: "Comprehensive plumbing system inspections and reports",
          features: ["Detailed Reports", "Video Inspection", "Maintenance Plans"]
        },
        {
          icon: "🛠️",
          title: "Custom Fabrication",
          description: "Custom plumbing fabrication for unique requirements",
          features: ["Custom Design", "Precision Work", "Quality Materials"]
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Parallax */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/plumber-working.jpg" 
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
                  24/7 Emergency Service
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Professional Plumbing Services
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl opacity-95 max-w-4xl mx-auto leading-relaxed mb-8">
                Comprehensive plumbing solutions for residential, commercial, and emergency needs
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
                  href="#services"
                  className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-xl text-lg border-2 border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                >
                  View All Services
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold mb-2">{currentServices}+</div>
                <div className="text-sm md:text-base opacity-90">Plumbing Services</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold mb-2">{currentExperience}+</div>
                <div className="text-sm md:text-base opacity-90">Years Experience</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold mb-2">{currentResponse}min</div>
                <div className="text-sm md:text-base opacity-90">Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Categories Section */}
      <section id="services" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Comprehensive Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From routine maintenance to emergency repairs, we provide complete plumbing solutions
            </p>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(serviceCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === key
                    ? 'bg-[#1c7bc8] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                <span className="text-lg">
                  {key === 'residential' && '🏠'}
                  {key === 'commercial' && '🏢'}
                  {key === 'emergency' && '🚨'}
                  {key === 'specialty' && '🔧'}
                </span>
                <span>{category.title}</span>
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{serviceCategories[activeCategory].title}</h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">{serviceCategories[activeCategory].description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {serviceCategories[activeCategory].services.map((service, index) => (
                  <div key={index} className="group bg-gray-50 hover:bg-white p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                          <svg className="w-4 h-4 mr-2 text-[#1c7bc8]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Our Services?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference that 50+ years of expertise makes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🏆',
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
              },
              {
                icon: '🔧',
                title: 'Advanced Equipment',
                description: 'State-of-the-art tools and technology for efficient, accurate service delivery.'
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

      {/* Service Process */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Service Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, efficient, and transparent - that's how we work
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Contact Us',
                description: 'Call or request a quote online for your plumbing needs'
              },
              {
                step: '02',
                title: 'Assessment',
                description: 'Our expert plumber assesses the issue and provides a detailed quote'
              },
              {
                step: '03',
                title: 'Service',
                description: 'We complete the work efficiently with minimal disruption'
              },
              {
                step: '04',
                title: 'Follow-up',
                description: 'We ensure everything is working perfectly and you are satisfied'
              }
            ].map((process, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1c7bc8] to-[#0f5a9e] rounded-2xl transform rotate-2 group-hover:rotate-4 transition-transform duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="bg-[#1c7bc8] text-white rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <span className="font-bold text-xl">{process.step}</span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{process.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1c7bc8] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl mb-12 opacity-95 max-w-3xl mx-auto">
            Whether you need routine maintenance, emergency repairs, or a complete plumbing overhaul, we're here to help. Get in touch today for a free consultation and estimate.
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