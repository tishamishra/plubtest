"use client";

import Header from '@/components/Header';
import FloatingCTA from '@/components/FloatingCTA';
import Footer from '@/components/Footer';

export default function SewerLineInspectionReplacementPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="relative h-[80vh] overflow-visible">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/90">
          <img 
            src="https://ik.imagekit.io/nang9yead/Old%20Rusty%20Underground%20Pipeline.png?updatedAt=1756066953091" 
            alt="Sewer line inspection and replacement services"
            className="w-full h-full object-cover mix-blend-multiply"
          />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-6 max-w-6xl mx-auto">
            <div className="mb-6">
              <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Licensed & Insured
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Expert Sewer Line Inspection & Replacement Services
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl opacity-95 max-w-5xl mx-auto leading-relaxed mb-8">
              Professional sewer line inspection and replacement services. Keep your sewer system flowing properly!
            </p>
          </div>
        </div>
        <FloatingCTA phone="8334450128" locationName="Your Area" />
      </section>
      
      {/* SEO Intro Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Find the Best Sewer Line Inspection & Replacement Services
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Looking for reliable sewer line inspection and replacement services? Our team of licensed and certified plumbers provides exceptional service at competitive prices. Whether you need inspection, repair, or complete replacement, we're your trusted plumbing experts. Serving residential and commercial properties with 24/7 availability and guaranteed satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:8334450128"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg text-lg transition-colors duration-300"
            >
              Call (833) 445-0128 Now
            </a>
          </div>
        </div>
      </section>

      {/* Search Block */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Are you searching for expert sewer line services?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Look no further! GD Professional Plumbing is your trusted plumbing expert. We provide comprehensive sewer line inspection and replacement solutions for both residential and commercial properties, with 24/7 emergency service availability.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-blue-700 mb-3">Residential Services</h3>
                  <p className="text-gray-600 text-sm">
                    Professional sewer line services for homes with camera inspection technology.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-blue-700 mb-3">Commercial Services</h3>
                  <p className="text-gray-600 text-sm">
                    Large-scale sewer line solutions for businesses with minimal disruption.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://ik.imagekit.io/nang9yead/Smiling%20Plumber%20Holding%20Wrench%20in%20Kitchen.png?updatedAt=1756066963942" 
                alt="Professional plumber working"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Emergency Service</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Satisfaction Guaranteed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Sewer Line Services We Offer
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">
            GD Professional Plumbing Helps You with All Your Sewer Line Projects including:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://ik.imagekit.io/nang9yead/Old%20Rusty%20Underground%20Pipeline.png?updatedAt=1756066953091"
                alt="Camera Inspection"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-700 mb-3">» Camera Inspection</h3>
                <p className="text-gray-600 leading-relaxed">
                  Call GD Professional Plumbing at (833) 445-0128. Advanced camera technology to inspect sewer lines thoroughly.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://ik.imagekit.io/nang9yead/Plumber%20Repairing%20Kitchen%20Sink%20Drainage%20Pipes?updatedAt=1756066959177"
                alt="Sewer Line Repair"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-700 mb-3">» Sewer Line Repair</h3>
                <p className="text-gray-600 leading-relaxed">
                  Call GD Professional Plumbing at (833) 445-0128. Professional repair services to fix sewer line issues.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://ik.imagekit.io/nang9yead/PVC%20Pipe%20Installation%20in%20Soil.png?updatedAt=1756066962271"
                alt="Sewer Line Replacement"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-700 mb-3">» Sewer Line Replacement</h3>
                <p className="text-gray-600 leading-relaxed">
                  Call GD Professional Plumbing at (833) 445-0128. Complete replacement services for damaged sewer lines.
                </p>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://ik.imagekit.io/nang9yead/plumber%20clearing%20blocked%20sink%20with%20water?updatedAt=1756066954284"
                alt="Drain Cleaning"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-700 mb-3">» Drain Cleaning</h3>
                <p className="text-gray-600 leading-relaxed">
                  Call GD Professional Plumbing at (833) 445-0128. Professional drain cleaning to prevent sewer backups.
                </p>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://ik.imagekit.io/nang9yead/Industrial%20Green%20and%20Orange%20Water%20Pipelines?updatedAt=1756066950649"
                alt="Trenchless Technology"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-700 mb-3">» Trenchless Technology</h3>
                <p className="text-gray-600 leading-relaxed">
                  Call GD Professional Plumbing at (833) 445-0128. Modern trenchless methods for minimal disruption.
                </p>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://ik.imagekit.io/nang9yead/young%20female%20plumber%20fixing%20?updatedAt=1756066968835"
                alt="Emergency Sewer Service"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-700 mb-3">» Emergency Sewer Service</h3>
                <p className="text-gray-600 leading-relaxed">
                  Call GD Professional Plumbing at (833) 445-0128. 24/7 emergency services for urgent sewer issues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Why Choose GD Professional Plumbing for Sewer Line Services?
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">
            50+ years of trusted service with licensed professionals and guaranteed workmanship
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Advanced Camera Technology</h3>
              <p className="text-gray-600">We use state-of-the-art camera equipment to inspect sewer lines thoroughly.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">24/7 Emergency Services</h3>
              <p className="text-gray-600">Available round the clock for emergency sewer line inspection and repair.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Licensed and Insured</h3>
              <p className="text-gray-600">Our dedicated team of plumbers are fully licensed and insured for your peace of mind.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Trenchless Technology</h3>
              <p className="text-gray-600">We use modern trenchless methods to minimize damage to your property.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Affordable Pricing</h3>
              <p className="text-gray-600">Our quality sewer line solutions are fairly priced to give you the best value.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Customer Satisfaction Guaranteed</h3>
              <p className="text-gray-600">We're committed to top-notch service and complete customer satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Residential vs Commercial Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Residential Sewer Line Services
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Keep your home's sewer system flowing properly with our comprehensive residential sewer line inspection and replacement services. We understand that sewer issues can cause serious problems, which is why we provide prompt, professional service with advanced camera technology.
              </p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Single-family home inspection
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Camera inspection services
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Trenchless replacement options
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Emergency repair services
                </li>
              </ul>
              <a 
                href="tel:8334450128"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg transition-colors duration-300"
              >
                Call for Residential Service
              </a>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Commercial Sewer Line Services
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Keep your business running smoothly with our comprehensive commercial sewer line inspection and replacement services. We understand that downtime costs money, so we provide fast, reliable service to minimize disruption to your operations.
              </p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Large-scale commercial inspection
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Industrial sewer solutions
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Preventive maintenance programs
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Emergency repair services
                </li>
              </ul>
              <a 
                href="tel:8334450128"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg transition-colors duration-300"
              >
                Call for Commercial Service
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 24/7 CTA Banner */}
      <section className="py-4 px-4 bg-[#1c7bc8] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Side - Text Content */}
            <div className="text-center lg:text-left flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                We&apos;re Available 24*7 Hrs At<br />
                Your Service. Reach Us Today!
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <div className="bg-white/20 rounded-lg p-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm opacity-90 mb-1">CALL TODAY</div>
                  <div className="text-2xl md:text-3xl font-bold">(833) 445-0128</div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Van Image */}
            <div className="flex-1 flex justify-center lg:justify-end items-end">
              <img 
                src="/van.png" 
                alt="Plumbing service van"
                className="w-80 h-80 object-contain scale-150 -mb-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Big CTA Banner */}
      <section className="bg-[#1c7bc8] text-white py-16 px-4 mt-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 animate-bounce">Need Sewer Line Services Today? Get a Free Quote Now</h2>
          <div className="mb-8">
            <a 
              href="tel:8334450128"
              className="bg-white text-[#1c7bc8] font-bold px-12 py-6 rounded-xl text-3xl hover:bg-gray-50 transition shadow-lg inline-block animate-pulse"
            >
              (833) 445-0128
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 