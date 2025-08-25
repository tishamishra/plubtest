"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  // Updated homepage with new service card design
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Auto-slide testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3); // 3 slides total
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-white min-h-screen flex flex-col font-sans">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        {/* Background Image */}
        <img 
          src="/hero-bg.jpg" 
          alt="Plumbing background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-700/60"></div>
        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-6 max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Top-Rated Plumbing Services in Your Area
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl opacity-95 max-w-3xl mx-auto leading-relaxed">
              Fast, Reliable, and Affordable Plumbing Solutions for Your Home and Business
            </p>
          </div>
        </div>
        
                <FloatingCTA />
      </section>
      

      
      {/* About Company Section - SEO Optimized */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Trusted Residential & Commercial Plumbing Services Throughout California</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  At GD Professional Plumbing, we&apos;ve been helping Californians keep their pipes in check with real, no-nonsense plumbing services. Whether it&apos;s a busted water heater, a stubborn drain, or a full remodel, our team shows up ready to fix it—without the upsell or drama.
                </p>
                <p>
                  We&apos;re a small crew of licensed and insured professionals who take pride in our work. If we say we&apos;ll be there at 9, we show up at 8:55. No shortcuts. No guessing games. Just solid plumbing done right the first time.
                </p>
                <p>
                  Need something fixed or upgraded? Give GD Professional Plumbing a ring. We&apos;ll take care of it like pros—because that&apos;s exactly what we are.
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-[#1c7bc8] text-white rounded-full p-2 mt-1">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Licensed & Insured</h3>
                    <p className="text-gray-600 text-sm">All our plumbers are fully licensed, bonded, and insured for your complete peace of mind.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#1c7bc8] text-white rounded-full p-2 mt-1">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">50+ Years Experience</h3>
                    <p className="text-gray-600 text-sm">Established in 1973, we bring decades of expertise to every plumbing project.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#1c7bc8] text-white rounded-full p-2 mt-1">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">24/7 Emergency Service</h3>
                    <p className="text-gray-600 text-sm">Round-the-clock emergency plumbing services with guaranteed same-day response.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#1c7bc8] text-white rounded-full p-2 mt-1">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Guaranteed Workmanship</h3>
                    <p className="text-gray-600 text-sm">We stand behind every job with our comprehensive workmanship guarantee.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                alt="Professional plumbing services"
                className="rounded-2xl shadow-lg w-full h-96 object-cover mb-6"
              />
              

              
              {/* Contact Card */}
              <div className="bg-[#1c7bc8] text-white p-6 rounded-xl w-full">
                <h4 className="font-bold mb-4 text-lg">Ready to Get Started?</h4>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="font-semibold">(833) 445-0128</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>info@gdprofessionalplumbing.com</span>
          </div>
            </div>
                <a href="tel:8334450128" className="inline-flex items-center bg-white text-[#1c7bc8] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition text-sm">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </a>
          </div>
            </div>
          </div>
        </div>
      </section>

        {/* Our Professional Services */}
        <section className="pt-2 pb-12 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Plumbing Services We Offer in California</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">GD Professional Plumbing Helps You with All Your Plumbing Projects including:</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Water Heater Repair and Installation */}
              <Link href="/services/water-heater" className="block">
                <div className="bg-white rounded-xl shadow-lg border hover:shadow-xl transition-shadow overflow-hidden">
                  <img
                    src="/images/water-heater.jpg"
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
              <Link href="/services/tankless-water-heater-installation" className="block">
                <div className="bg-white rounded-xl shadow-lg border hover:shadow-xl transition-shadow overflow-hidden">
                  <img
                    src="/images/tankless-heater.jpg"
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
              <Link href="/services/water-recirculation-pump-repair-installation" className="block">
                <div className="bg-white rounded-xl shadow-lg border hover:shadow-xl transition-shadow overflow-hidden">
                  <img
                    src="/images/plumber-working.jpg"
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
              <Link href="/services/faucets-sinks-repair-replacement" className="block">
                <div className="bg-white rounded-xl shadow-lg border hover:shadow-xl transition-shadow overflow-hidden">
                  <img
                    src="/images/faucet-sink.jpg"
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
              <Link href="/services/water-conservation-plumbing-systems" className="block">
                <div className="bg-white rounded-xl shadow-lg border hover:shadow-xl transition-shadow overflow-hidden">
                  <img
                    src="/images/residential-plumbing.jpg"
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
              <Link href="/services/custom-bathroom-renovation" className="block">
                <div className="bg-white rounded-xl shadow-lg border hover:shadow-xl transition-shadow overflow-hidden">
                  <img
                    src="/images/residential-plumbing.jpg"
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
              <Link href="/services/water-system-installation-repair" className="block">
                <div className="bg-white rounded-xl shadow-lg border hover:shadow-xl transition-shadow overflow-hidden">
                  <img
                    src="/images/residential-plumbing.jpg"
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
              <Link href="/services/slab-leak-detection-repair" className="block">
                <div className="bg-white rounded-xl shadow-lg border hover:shadow-xl transition-shadow overflow-hidden">
                  <img
                    src="/images/leak-detection.jpg"
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
              <Link href="/services/sump-pump-installation-repair" className="block">
                <div className="bg-white rounded-xl shadow-lg border hover:shadow-xl transition-shadow overflow-hidden">
                  <img
                    src="/images/plumber-working.jpg"
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
              <Link href="/services/professional-drain-cleaning" className="block">
                <div className="bg-white rounded-xl shadow-lg border hover:shadow-xl transition-shadow overflow-hidden">
                  <img
                    src="/images/drain-cleaning.jpg"
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
              <Link href="/services/expert-drain-repair" className="block">
                <div className="bg-white rounded-xl shadow-lg border hover:shadow-xl transition-shadow overflow-hidden">
                  <img
                    src="/images/drain-cleaning.jpg"
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
              <Link href="/services/sewer-line-inspection-replacement" className="block">
                <div className="bg-white rounded-xl shadow-lg border hover:shadow-xl transition-shadow overflow-hidden">
                  <img
                    src="/images/sewer-line.jpg"
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
              <Link href="/services/gas-line-installation-repair" className="block">
                <div className="bg-white rounded-xl shadow-lg border hover:shadow-xl transition-shadow overflow-hidden">
                  <img
                    src="/images/gas-line.jpg"
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
              <Link href="/services/leak-detection-repair" className="block">
                <div className="bg-white rounded-xl shadow-lg border hover:shadow-xl transition-shadow overflow-hidden">
                  <img
                    src="/images/leak-detection.jpg"
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
              <Link href="/services/toilet-repair-installation" className="block">
                <div className="bg-white rounded-xl shadow-lg border hover:shadow-xl transition-shadow overflow-hidden">
                  <img
                    src="/images/toilet-repair.jpg"
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

        {/* CTA Section - Above FAQ */}
        <section className="py-4 px-4 bg-gradient-to-r from-[#1c7bc8] to-[#0f5a9e] text-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-3">
              {/* Left Side - Phone Number */}
              <div className="text-center md:text-left">
                <div className="text-sm opacity-90 mb-1">Call us for a Cost estimate over free phone</div>
                <div className="text-3xl md:text-4xl font-bold">(833) 445-0128</div>
              </div>
              
              {/* Right Side - Order Service Button */}
              <div>
                <a
                  href="tel:8334450128"
                  className="inline-flex items-center bg-[#0d4a8a] hover:bg-[#0a3d75] text-white px-8 py-4 rounded-full font-bold text-lg transition shadow-lg"
                >
                  Order Service now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Our Seamless Plumbing Process - Block Style with Arrows */}
        {/* Our Seamless Plumbing Process - Modern Design */}
        <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1c7bc8] rounded-full mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Seamless Plumbing Process</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Experience our streamlined approach to plumbing excellence</p>
            </div>
            
            {/* Modern Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1c7bc8] to-[#0f5a9e] rounded-2xl transform rotate-2 group-hover:rotate-4 transition-transform duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="bg-[#1c7bc8] text-white rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold text-[#1c7bc8] mb-2">STEP 1</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Personalized Consultation</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We begin with a detailed call to understand your issue and offer a clear, honest estimate.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1c7bc8] to-[#0f5a9e] rounded-2xl transform -rotate-1 group-hover:-rotate-3 transition-transform duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="bg-[#1c7bc8] text-white rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold text-[#1c7bc8] mb-2">STEP 2</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Accurate Diagnosis</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our expert team inspects thoroughly to find the real issue using modern tools.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1c7bc8] to-[#0f5a9e] rounded-2xl transform rotate-1 group-hover:rotate-3 transition-transform duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="bg-[#1c7bc8] text-white rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold text-[#1c7bc8] mb-2">STEP 3</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Workmanship</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We fix the problem with care, professionalism, and attention to detail.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1c7bc8] to-[#0f5a9e] rounded-2xl transform -rotate-2 group-hover:-rotate-4 transition-transform duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="bg-[#1c7bc8] text-white rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold text-[#1c7bc8] mb-2">STEP 4</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">After-Service Care</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We follow up to ensure everything runs perfectly and offer ongoing support.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Flow Line */}
            <div className="hidden lg:block mt-12">
              <div className="flex items-center justify-center space-x-4">
                <div className="w-8 h-8 bg-[#1c7bc8] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div className="flex-1 h-1 bg-gradient-to-r from-[#1c7bc8] to-gray-300 rounded-full"></div>
                <div className="w-8 h-8 bg-[#1c7bc8] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div className="flex-1 h-1 bg-gradient-to-r from-gray-300 to-[#1c7bc8] rounded-full"></div>
                <div className="w-8 h-8 bg-[#1c7bc8] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div className="flex-1 h-1 bg-gradient-to-r from-[#1c7bc8] to-gray-300 rounded-full"></div>
                <div className="w-8 h-8 bg-[#1c7bc8] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
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

        {/* Professional Plumber Section - Two Column Layout */}
        <section className="py-16 px-0 bg-white">
          <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
              {/* Left Column - Text Content */}
              <div className="bg-[#1c7bc8] text-white p-10 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6 leading-tight">
                  Need Professional Plumber for All Your Plumbing Needs
                </h2>
                <p className="text-base mb-8 leading-relaxed opacity-95">
                  When it comes to reliable plumbing services in the USA, GD Professional Plumbing is the name you can trust. We're proud to serve our community with top-quality plumbing solutions that keep your home or business running smoothly. Whether you're looking for routine maintenance, emergency repairs, or a complete plumbing overhaul, our team is ready to provide the expert service you deserve.
                </p>
                <a
                  href="tel:+18334450128"
                  className="inline-flex items-center bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-[#1c7bc8] transition-all duration-300 self-start"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </a>
              </div>
              
              {/* Right Column - Plumber Image */}
              <div className="relative h-full">
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Professional Plumber at Work" 
                  className="w-full h-full object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Expandable and Optimized */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>
              <p className="text-base text-gray-600 max-w-3xl mx-auto">Get answers to common questions about our plumbing services</p>
            </div>
            
            <div className="space-y-2">
              {[
                {
                  question: "What areas do you serve?",
                  answer: "We provide comprehensive plumbing services throughout California, including residential and commercial properties. Our team is available for emergency calls and scheduled appointments across the state."
                },
                {
                  question: "Do you offer emergency plumbing services?",
                  answer: "Yes, we provide 24/7 emergency plumbing services. Our team is always ready to respond to urgent plumbing issues like burst pipes, water heater failures, and severe leaks. We guarantee same-day response for emergency calls."
                },
                {
                  question: "Are your plumbers licensed and insured?",
                  answer: "Absolutely. All our plumbers are fully licensed, bonded, and insured. We maintain the highest standards of professionalism and safety. You can trust that our work meets all local building codes and regulations."
                },
                {
                  question: "What types of plumbing services do you offer?",
                  answer: "We offer a complete range of plumbing services including emergency repairs, water heater installation and repair, drain cleaning, sewer line services, pipe installation, fixture installation, and commercial plumbing solutions."
                },
                {
                  question: "Do you provide free estimates?",
                  answer: "Yes, we provide free, no-obligation estimates for all plumbing projects. We believe in transparent pricing and will clearly explain all costs before starting any work. There are no hidden fees or surprises."
                },
                {
                  question: "What is your warranty policy?",
                  answer: "We stand behind all our work with comprehensive warranties. Our workmanship is guaranteed, and we also provide warranties on parts and materials. We're committed to your complete satisfaction."
                },
                {
                  question: "What is your response time for emergencies?",
                  answer: "For emergency plumbing issues, we typically respond within 1-2 hours. We prioritize emergency calls and provide same-day service whenever possible."
                },
                {
                  question: "How long have you been in business?",
                  answer: "GD Professional Plumbing has been serving customers since 1973, with over 50 years of experience in residential and commercial plumbing services."
                }
              ].map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button 
                    className="w-full px-4 py-3 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-base font-semibold text-gray-900">{faq.question}</h3>
                    <svg 
                      className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${openFAQ === index ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`px-4 transition-all duration-300 ease-in-out ${openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="pb-3">
                      <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
                              ))}
              </div>
            </div>
          </section>


      {/* Testimonials - Stylish Design */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1c7bc8] rounded-full mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Trusted by thousands of satisfied customers since 1973</p>
          </div>
          
          {/* Testimonials Slider */}
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {/* Slide 1 */}
              <div className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      name: "Sarah Johnson",
                      text: "GD Professional Plumbing saved us during a major pipe burst. Their emergency response was incredible - they arrived within 30 minutes and fixed everything professionally.",
                      rating: 5
                    },
                    {
                      name: "Michael Chen",
                      text: "We've been using GD Professional Plumbing for our office building maintenance for over 10 years. Their reliability and expertise are unmatched.",
                      rating: 5
                    },
                    {
                      name: "Lisa Rodriguez",
                      text: "The team installed our new water heater perfectly. Professional, clean, and reasonably priced. Highly recommend their services!",
                      rating: 5
                    },
                  ].map((t, index) => (
                    <div key={`slide1-${index}`} className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#1c7bc8] to-[#0f5a9e] rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                      <div className="relative bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="flex items-center mb-6">
                          {[...Array(t.rating)].map((_, i) => (
                            <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                          ))}
                        </div>
                        <div className="text-[#1c7bc8] text-4xl mb-4">"</div>
                        <p className="text-gray-700 mb-6 text-lg leading-relaxed italic">{t.text}</p>
                        <div className="flex items-center">
                          <div>
                            <div className="font-bold text-gray-900 text-lg">{t.name}</div>
                          </div>
                        </div>
                        <div className="absolute top-4 right-4 text-[#1c7bc8] opacity-20">
                          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slide 2 */}
              <div className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      name: "David Martinez",
                      text: "Outstanding service! They fixed our complex drainage issue in record time. Professional, punctual, and reasonably priced. Highly recommended!",
                      rating: 5
                    },
                    {
                      name: "Jennifer Wilson",
                      text: "GD Professional Plumbing has been maintaining our restaurant's plumbing for 5 years. They're reliable, fast, and always professional.",
                      rating: 5
                    },
                    {
                      name: "Robert Thompson",
                      text: "They handle all our emergency calls efficiently. Their team is skilled, professional, and always available when we need them.",
                      rating: 5
                    },
                  ].map((t, index) => (
                    <div key={`slide2-${index}`} className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#1c7bc8] to-[#0f5a9e] rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                      <div className="relative bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="flex items-center mb-6">
                          {[...Array(t.rating)].map((_, i) => (
                            <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                          ))}
                        </div>
                        <div className="text-[#1c7bc8] text-4xl mb-4">"</div>
                        <p className="text-gray-700 mb-6 text-lg leading-relaxed italic">{t.text}</p>
                        <div className="flex items-center">
                          <div>
                            <div className="font-bold text-gray-900 text-lg">{t.name}</div>
                          </div>
                        </div>
                        <div className="absolute top-4 right-4 text-[#1c7bc8] opacity-20">
                          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slide 3 */}
              <div className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      name: "Amanda Foster",
                      text: "Excellent work on our bathroom remodel. The team was professional, clean, and completed the job on time. Highly satisfied!",
                      rating: 5
                    },
                    {
                      name: "Carlos Rodriguez",
                      text: "Fast response time and excellent work quality. They fixed our plumbing emergency within hours. Very reliable service!",
                      rating: 5
                    },
                    {
                      name: "Emily Davis",
                      text: "GD Professional Plumbing has been our go-to for all properties. Consistent quality, fair pricing, and exceptional service.",
                      rating: 5
                    },
                  ].map((t, index) => (
                    <div key={`slide3-${index}`} className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#1c7bc8] to-[#0f5a9e] rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                      <div className="relative bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="flex items-center mb-6">
                          {[...Array(t.rating)].map((_, i) => (
                            <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                          ))}
                        </div>
                        <div className="text-[#1c7bc8] text-4xl mb-4">"</div>
                        <p className="text-gray-700 mb-6 text-lg leading-relaxed italic">{t.text}</p>
                        <div className="flex items-center">
                          <div>
                            <div className="font-bold text-gray-900 text-lg">{t.name}</div>
                          </div>
                        </div>
                        <div className="absolute top-4 right-4 text-[#1c7bc8] opacity-20">
                          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {[0, 1, 2].map((slide) => (
                <button
                  key={slide}
                  onClick={() => setCurrentSlide(slide)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === slide ? 'bg-[#1c7bc8] scale-125' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <iframe 
              title="Google Map" 
              height="350" 
              width="100%" 
              src="https://maps.google.com/maps?q=+usa&amp;t=&amp;z=4&amp;ie=UTF8&amp;iwloc=&amp;output=embed" 
              loading="lazy"
              className="w-full"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>
      </section>



      {/* Big CTA Banner */}
      <section className="bg-[#1c7bc8] text-white py-16 px-4 mt-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 animate-bounce">Need a Plumber Today? Get a Free Quote Now</h2>
          <div className="mb-8">
            <a
              href="tel:+18334450128"
              className="bg-white text-[#1c7bc8] font-bold px-12 py-6 rounded-xl text-3xl hover:bg-gray-50 transition shadow-lg inline-block animate-pulse"
            >
              +1 (833) 445-0128
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
