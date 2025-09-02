"use client";

import Header from '@/components/Header';
import FloatingCTA from '@/components/FloatingCTA';
import Footer from '@/components/Footer';

export default function WaterConservationPlumbingSystemsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="relative h-[80vh] overflow-visible">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/90">
          <img 
            src="https://ik.imagekit.io/nang9yead/Plumbers%20Installing%20Wall-Mounted%20Water%20Tap?updatedAt=1756066963229" 
            alt="Water conservation plumbing systems services"
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
              Expert Water Conservation Plumbing Systems
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl opacity-95 max-w-5xl mx-auto leading-relaxed mb-8">
              Professional water conservation plumbing systems. Save water and money with eco-friendly solutions!
            </p>
          </div>
        </div>
        <FloatingCTA phone="8334450128" locationName="Your Area" />
      </section>
      
      {/* SEO Intro Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Find the Best Water Conservation Plumbing Systems
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Looking for reliable water conservation plumbing systems? Our team of licensed and certified plumbers provides exceptional service at competitive prices. Whether you need installation, repair, or maintenance of water-saving systems, we're your trusted plumbing experts. Serving residential and commercial properties with 24/7 availability and guaranteed satisfaction.
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
                Are you searching for expert water conservation services?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Look no further! GD Professional Plumbing is your trusted plumbing expert. We provide comprehensive water conservation plumbing system solutions for both residential and commercial properties, with 24/7 emergency service availability.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-blue-700 mb-3">Residential Services</h3>
                  <p className="text-gray-600 text-sm">
                    Professional water conservation systems for homes with eco-friendly solutions.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-blue-700 mb-3">Commercial Services</h3>
                  <p className="text-gray-600 text-sm">
                    Large-scale water conservation solutions for businesses with efficiency.
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
            Water Conservation Plumbing Systems We Offer
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">
            GD Professional Plumbing Helps You with All Your Water Conservation Projects including:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://ik.imagekit.io/nang9yead/Plumbers%20Installing%20Wall-Mounted%20Water%20Tap?updatedAt=1756066963229"
                alt="Low-Flow Fixtures Installation"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-700 mb-3">» Low-Flow Fixtures Installation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Call GD Professional Plumbing at (833) 445-0128. Install water-saving faucets, showerheads, and toilets.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://ik.imagekit.io/nang9yead/Plumber%20Fixing%20Leaking%20Sink%20Pipe%20with%20Wrench.png?updatedAt=1756066955385"
                alt="Leak Detection and Repair"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-700 mb-3">» Leak Detection and Repair</h3>
                <p className="text-gray-600 leading-relaxed">
                  Call GD Professional Plumbing at (833) 445-0128. Find and fix water leaks to prevent waste.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://ik.imagekit.io/nang9yead/Maintenance%20Worker%20Adjusting%20Copper%20Plumbing%20Pipes.png?updatedAt=1756066948233"
                alt="Water Recycling Systems"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-700 mb-3">» Water Recycling Systems</h3>
                <p className="text-gray-600 leading-relaxed">
                  Call GD Professional Plumbing at (833) 445-0128. Install greywater recycling systems.
                </p>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://ik.imagekit.io/nang9yead/Smiling%20Plumber%20Repairing%20Bathroom%20Sink%20Pipe.png?updatedAt=1756066965094"
                alt="Smart Water Meters"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-700 mb-3">» Smart Water Meters</h3>
                <p className="text-gray-600 leading-relaxed">
                  Call GD Professional Plumbing at (833) 445-0128. Install smart meters for water usage monitoring.
                </p>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://ik.imagekit.io/nang9yead/young%20female%20plumber%20fixing%20?updatedAt=1756066968835"
                alt="Rainwater Harvesting"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-700 mb-3">» Rainwater Harvesting</h3>
                <p className="text-gray-600 leading-relaxed">
                  Call GD Professional Plumbing at (833) 445-0128. Install rainwater collection and storage systems.
                </p>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://ik.imagekit.io/nang9yead/Plumber%20Using%20Plunger%20on%20Toilet%20Bowl%20worker%20in%20orange%20uniform%20unclogging%20toilet?updatedAt=1756066962119"
                alt="Emergency Conservation Service"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-700 mb-3">» Emergency Conservation Service</h3>
                <p className="text-gray-600 leading-relaxed">
                  Call GD Professional Plumbing at (833) 445-0128. 24/7 emergency services for water conservation issues.
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
            Why Choose GD Professional Plumbing for Water Conservation Services?
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
              <h3 className="text-xl font-bold text-gray-800 mb-3">Eco-Friendly Solutions</h3>
              <p className="text-gray-600">We provide environmentally conscious water conservation solutions.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">24/7 Emergency Services</h3>
              <p className="text-gray-600">Available round the clock for emergency water conservation system issues.</p>
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
              <h3 className="text-xl font-bold text-gray-800 mb-3">Energy Efficient</h3>
              <p className="text-gray-600">We use energy-efficient components to maximize water and energy savings.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Cost Savings</h3>
              <p className="text-gray-600">Our water conservation systems help you save money on utility bills.</p>
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
                Residential Water Conservation Services
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Save water and money in your home with our comprehensive residential water conservation plumbing systems. We understand that every drop counts, which is why we provide eco-friendly solutions that help you reduce your water consumption and utility bills.
              </p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Single-family home systems
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Low-flow fixture installation
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Rainwater harvesting systems
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Smart water monitoring
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
                Commercial Water Conservation Services
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Optimize your business's water usage with our comprehensive commercial water conservation plumbing systems. We understand that commercial properties have unique water needs, so we provide scalable solutions that maximize efficiency and savings.
              </p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Large-scale commercial systems
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Industrial water recycling
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Automated monitoring systems
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Compliance solutions
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

      <Footer />
    </div>
  );
} 