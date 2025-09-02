"use client";
import { useState, useEffect } from 'react';
import Header from '@/components/Header';

import Link from 'next/link';

export default function ServicesPage() {

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



  return (
    <div className="min-h-screen bg-white">
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
              <div className="flex justify-center">
                <a 
                  href="tel:+18334450128" 
                  className="group relative bg-white text-blue-700 font-bold px-8 py-4 rounded-xl text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3 animate-pulse"
                >
                  <div className="relative">
                    <svg className="w-6 h-6 animate-bounce text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"/>
                    </svg>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                  </div>
                  <span className="font-bold tracking-wide">(833) 445-0128</span>
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

      {/* Our Professional Services */}
      <section id="services" className="pt-2 pb-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Plumbing Services We Offer in California</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">GD Professional Plumbing Helps You with All Your Plumbing Projects including:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Water Heater Repair and Installation */}
            <Link href="/services/plumber-water-heater-repair" className="block">
              <div className="bg-white rounded-xl shadow-lg border hover:shadow-xl transition-shadow overflow-hidden">
                                  <img
                    src="https://ik.imagekit.io/nang9yead/Plumber%20Fixing%20Leaking%20Sink%20Pipe%20with%20Wrench.png?updatedAt=1756066955385"
                    alt="Water Heater Repair and Installation"
                    className="w-full h-48 object-cover"
                  />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-black">Water Heater Repair & Installation</h3>
                  <p className="text-gray-600">
                    Affordable water heater repair and professional installation for homes and commercial buildings across the US—fast service, licensed plumbers, and energy-efficient systems.
                  </p>
                </div>
              </div>
            </Link>

            {/* Tankless Water Heater Installation */}
            <Link href="/services/plumber-tankless-water-heater" className="block">
              <div className="bg-white rounded-xl shadow-lg border hover:shadow-xl transition-shadow overflow-hidden">
                                  <img
                    src="https://ik.imagekit.io/nang9yead/Worker%20Adjusting%20Water%20Filtration%20System%20Valves?updatedAt=1756066968225"
                    alt="Tankless Water Heater Installation"
                    className="w-full h-48 object-cover"
                  />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-black">Tankless Water Heater Installation</h3>
                  <p className="text-gray-600">
                    Expert installation of energy-efficient tankless water heaters for homes and businesses—endless hot water, lower utility bills, and space-saving design.
                  </p>
                </div>
              </div>
            </Link>

            {/* Water Recirculation Pump */}
            <Link href="/services/plumber-water-recirculation-pump" className="block">
              <div className="bg-white rounded-xl shadow-lg border hover:shadow-xl transition-shadow overflow-hidden">
                <img
                  src="https://ik.imagekit.io/nang9yead/Maintenance%20Worker%20Adjusting%20Copper%20Plumbing%20Pipes.png?updatedAt=1756066948233"
                  alt="Water Recirculation Pump"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-black">Water Recirculation Pump</h3>
                  <p className="text-gray-600">
                    Professional repair and installation of hot water recirculation pumps for homes and businesses—get instant hot water, save water, and boost plumbing efficiency.
                  </p>
                </div>
              </div>
            </Link>

            {/* Faucets & Sinks */}
            <Link href="/services/plumber-faucet-sink-repair" className="block">
              <div className="bg-white rounded-xl shadow-lg border hover:shadow-xl transition-shadow overflow-hidden">
                <img
                  src="https://ik.imagekit.io/nang9yead/Smiling%20Plumber%20Repairing%20Bathroom%20Sink%20Pipe.png?updatedAt=1756066965094"
                  alt="Faucets & Sinks"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-black">Faucets & Sinks</h3>
                  <p className="text-gray-600">
                    Expert installation and repair of kitchen and bathroom faucets and sinks—leak-free performance, upgraded fixtures, and improved space functionality.
                  </p>
                </div>
              </div>
            </Link>

            {/* Water Conservation Plumbing Systems */}
            <Link href="/services/plumber-water-conservation" className="block">
              <div className="bg-white rounded-xl shadow-lg border hover:shadow-xl transition-shadow overflow-hidden">
                <img
                  src="https://ik.imagekit.io/nang9yead/Plumbers%20Installing%20Wall-Mounted%20Water%20Tap?updatedAt=1756066963229"
                  alt="Water Conservation Plumbing Systems"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-black">Water Conservation Plumbing</h3>
                  <p className="text-gray-600">
                    Eco-friendly water-saving plumbing solutions for homes and businesses—reduce water waste, cut utility bills, and support sustainable living.
                  </p>
                </div>
              </div>
            </Link>

            {/* Custom Bathroom Renovation */}
            <Link href="/services/plumber-bathroom-renovation" className="block">
              <div className="bg-white rounded-xl shadow-lg border hover:shadow-xl transition-shadow overflow-hidden">
                <img
                  src="https://ik.imagekit.io/nang9yead/young%20female%20plumber%20fixing%20?updatedAt=1756066968835"
                  alt="Custom Bathroom Renovation"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-black">Custom Bathroom Renovation</h3>
                  <p className="text-gray-600">
                    From outdated to outstanding—our expert team designs and renovates bathrooms with modern fixtures, efficient layouts, and timeless appeal for residential properties.
                  </p>
                </div>
              </div>
            </Link>

            {/* Water System Installation & Repair */}
            <Link href="/services/plumber-water-system-repair" className="block">
              <div className="bg-white rounded-xl shadow-lg border hover:shadow-xl transition-shadow overflow-hidden">
                <img
                  src="https://ik.imagekit.io/nang9yead/Industrial%20HVAC%20Technician%20Inspection.png?updatedAt=1756066941834"
                  alt="Water System Installation & Repair"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-black">Water System Installation & Repair</h3>
                  <p className="text-gray-600">
                    We install, repair, and maintain residential and commercial water systems—delivering clean, safe, and uninterrupted water flow for your property.
                  </p>
                </div>
              </div>
            </Link>

            {/* Slab Leak Detection & Repair */}
            <Link href="/services/plumber-slab-leak-repair" className="block">
              <div className="bg-white rounded-xl shadow-lg border hover:shadow-xl transition-shadow overflow-hidden">
                <img
                  src="https://ik.imagekit.io/nang9yead/Old%20Rusty%20Pipe%20Dripping%20Water.png?updatedAt=1756066951741"
                  alt="Slab Leak Detection & Repair"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-black">Slab Leak Detection & Repair</h3>
                  <p className="text-gray-600">
                    Fast and accurate slab leak detection with expert repairs—protect your foundation, prevent costly water damage, and preserve your property's structural integrity.
                  </p>
                </div>
              </div>
            </Link>

            {/* Sump Pump Installation & Repair */}
            <Link href="/services/plumber-sump-pump-repair" className="block">
              <div className="bg-white rounded-xl shadow-lg border hover:shadow-xl transition-shadow overflow-hidden">
                <img
                  src="https://ik.imagekit.io/nang9yead/Electrician%20Working%20on%20Outdoor%20Wiring%20in%20Lawn.png?updatedAt=1756066952425"
                  alt="Sump Pump Installation & Repair"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-black">Sump Pump Installation & Repair</h3>
                  <p className="text-gray-600">
                    Keep your basement dry and protected with professional sump pump repair, installation, and maintenance—flood prevention solutions built for long-term reliability.
                  </p>
                </div>
              </div>
            </Link>

            {/* Professional Drain Cleaning */}
            <Link href="/services/plumber-drain-cleaning" className="block">
              <div className="bg-white rounded-xl shadow-lg border hover:shadow-xl transition-shadow overflow-hidden">
                <img
                  src="https://ik.imagekit.io/nang9yead/plumber%20clearing%20blocked%20sink%20with%20water?updatedAt=1756066954284"
                  alt="Professional Drain Cleaning"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-black">Professional Drain Cleaning</h3>
                  <p className="text-gray-600">
                    Fast and effective drain cleaning for clogged sinks, tubs, and sewer lines—restore smooth drainage, eliminate blockages, and prevent future plumbing issues.
                  </p>
                </div>
              </div>
            </Link>

            {/* Expert Drain Repair */}
            <Link href="/services/plumber-drain-cleaning" className="block">
              <div className="bg-white rounded-xl shadow-lg border hover:shadow-xl transition-shadow overflow-hidden">
                <img
                  src="https://ik.imagekit.io/nang9yead/Plumber%20Repairing%20Kitchen%20Sink%20Drainage%20Pipes?updatedAt=1756066959177"
                  alt="Expert Drain Repair"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-black">Expert Drain Repair</h3>
                  <p className="text-gray-600">
                    We fix damaged or leaking drains with precision—prevent backups, water damage, and ensure a smooth-flowing, reliable plumbing system in your home or business.
                  </p>
                </div>
              </div>
            </Link>

            {/* Sewer Line Inspection & Replacement */}
            <Link href="/services/plumber-sewer-line-repair" className="block">
              <div className="bg-white rounded-xl shadow-lg border hover:shadow-xl transition-shadow overflow-hidden">
                <img
                  src="https://ik.imagekit.io/nang9yead/Old%20Rusty%20Underground%20Pipeline.png?updatedAt=1756066953091"
                  alt="Sewer Line Inspection & Replacement"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-black">Sewer Line Inspection & Replacement</h3>
                  <p className="text-gray-600">
                    Thorough sewer camera inspections, repairs, and full replacements—ensure proper waste flow, avoid costly backups, and keep your sewer system running smoothly.
                  </p>
                </div>
              </div>
            </Link>

            {/* Gas Line Installation & Repair */}
            <Link href="/services/plumber-gas-line-repair" className="block">
              <div className="bg-white rounded-xl shadow-lg border hover:shadow-xl transition-shadow overflow-hidden">
                <img
                  src="https://ik.imagekit.io/nang9yead/Industrial%20Green%20and%20Orange%20Water%20Pipelines?updatedAt=1756066950649"
                  alt="Gas Line Installation & Repair"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-black">Gas Line Installation & Repair</h3>
                  <p className="text-gray-600">
                    Safe and code-compliant gas line installations, repairs, and replacements—power your appliances with confidence and protect your property from gas hazards.
                  </p>
                </div>
              </div>
            </Link>

            {/* Leak Detection & Repair */}
            <Link href="/services/plumber-leak-detection" className="block">
              <div className="bg-white rounded-xl shadow-lg border hover:shadow-xl transition-shadow overflow-hidden">
                <img
                  src="https://ik.imagekit.io/nang9yead/PVC%20Pipe%20Installation%20in%20Soil.png?updatedAt=1756066962271"
                  alt="Leak Detection & Repair"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-black">Leak Detection & Repair</h3>
                  <p className="text-gray-600">
                    We use advanced leak detection tools to quickly locate and repair hidden water leaks—minimize damage, lower water bills, and keep your plumbing system efficient.
                  </p>
                </div>
              </div>
            </Link>

            {/* Toilet Repair & Installation */}
            <Link href="/services/plumber-toilet-repair" className="block">
              <div className="bg-white rounded-xl shadow-lg border hover:shadow-xl transition-shadow overflow-hidden">
                <img
                  src="https://ik.imagekit.io/nang9yead/Plumber%20Using%20Plunger%20on%20Toilet%20Bowl%20worker%20in%20orange%20uniform%20unclogging%20toilet?updatedAt=1756066962119"
                  alt="Toilet Repair & Installation"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-black">Toilet Repair & Installation</h3>
                  <p className="text-gray-600">
                    Fast and reliable toilet plumbing services for clogs, leaks, and replacements—restore full function, improve efficiency, and prevent costly water waste.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose GD Professional Plumbing? */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose GD Professional Plumbing?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">50+ years of trusted service with licensed professionals and guaranteed workmanship</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                             {/* Experienced Professionals */}
               <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
                 <div className="flex justify-center mb-4">
                   <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                                 <h3 className="text-black font-semibold text-lg mb-3 text-center">Experienced Professionals</h3>
                <p className="text-gray-600 text-center">We have decades of experience solving all plumbing challenges, big or small.</p>
              </div>

                             {/* 24/7 Emergency Services */}
               <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
                 <div className="flex justify-center mb-4">
                   <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                                 <h3 className="text-black font-semibold text-lg mb-3 text-center">24/7 Emergency Services</h3>
                <p className="text-gray-600 text-center">No hidden fees or surprise charges. Our pricing is transparent and budget-friendly.</p>
              </div>

                             {/* Licensed and Insured */}
               <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
                 <div className="flex justify-center mb-4">
                   <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                                 <h3 className="text-black font-semibold text-lg mb-3 text-center">Licensed and Insured</h3>
                <p className="text-gray-600 text-center">Our dedicated team of plumbers are fully licensed and insured for your peace of mind.</p>
              </div>

                             {/* Reliable and Trustworthy */}
               <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
                 <div className="flex justify-center mb-4">
                   <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                                 <h3 className="text-black font-semibold text-lg mb-3 text-center">Reliable and Trustworthy</h3>
                <p className="text-gray-600 text-center">We pride ourselves on honest, dependable service you can rely on every time.</p>
              </div>

                             {/* Affordable Pricing */}
               <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
                 <div className="flex justify-center mb-4">
                   <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                                 <h3 className="text-black font-semibold text-lg mb-3 text-center">Affordable Pricing</h3>
                <p className="text-gray-600 text-center">Our quality plumbing solutions are fairly priced to give you the best value.</p>
              </div>

                             {/* Customer Satisfaction Guaranteed */}
               <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
                 <div className="flex justify-center mb-4">
                   <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                                 <h3 className="text-black font-semibold text-lg mb-3 text-center">Customer Satisfaction Guaranteed</h3>
                <p className="text-gray-600 text-center">We&apos;re committed to top-notch service and complete customer satisfaction.</p>
              </div>
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
          <div className="flex justify-center">
            <a
              href="tel:8334450128"
              className="inline-flex items-center bg-white text-[#1c7bc8] font-bold px-8 py-4 rounded-xl text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (833) 445-0128
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 