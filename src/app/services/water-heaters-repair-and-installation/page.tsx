"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";

export default function WaterHeaterServices() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="bg-white min-h-screen flex flex-col font-sans">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-visible">
        {/* Background Image */}
        <img 
          src="/hero-bg.jpg" 
          alt="Plumbing background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-6 max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Water Heater Repair & Installation Services
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl opacity-95 max-w-3xl mx-auto leading-relaxed">
              Professional water heater services across California - Fast, reliable, and affordable solutions for homes and businesses
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-4 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#1c7bc8] transition">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#1c7bc8] transition">Services</Link>
            <span>/</span>
            <span className="text-gray-900">Water Heater Services</span>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Tab Navigation */}
              <div className="flex flex-wrap border-b border-gray-200 mb-8">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`px-6 py-3 font-semibold transition ${
                    activeTab === "overview"
                      ? "text-[#1c7bc8] border-b-2 border-[#1c7bc8]"
                      : "text-gray-600 hover:text-[#1c7bc8]"
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab("services")}
                  className={`px-6 py-3 font-semibold transition ${
                    activeTab === "services"
                      ? "text-[#1c7bc8] border-b-2 border-[#1c7bc8]"
                      : "text-gray-600 hover:text-[#1c7bc8]"
                  }`}
                >
                  Our Services
                </button>
                <button
                  onClick={() => setActiveTab("why-choose")}
                  className={`px-6 py-3 font-semibold transition ${
                    activeTab === "why-choose"
                      ? "text-[#1c7bc8] border-b-2 border-[#1c7bc8]"
                      : "text-gray-600 hover:text-[#1c7bc8]"
                  }`}
                >
                  Why Choose Us
                </button>
              </div>

              {/* Tab Content */}
              <div className="space-y-8">
                {activeTab === "overview" && (
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Professional Water Heater Services in California
                    </h2>
                    <div className="prose prose-lg max-w-none">
                      <p className="text-gray-600 mb-6">
                        GD Professional Plumbing provides comprehensive water heater repair and installation services throughout California. 
                        With over 50 years of experience, our licensed plumbers deliver reliable, energy-efficient solutions for both 
                        residential and commercial properties.
                      </p>
                      <p className="text-gray-600 mb-6">
                        Whether you need emergency repairs, routine maintenance, or a complete water heater replacement, our team 
                        ensures fast service, transparent pricing, and lasting results. We work with all major brands and types of 
                        water heaters, including tankless, traditional tank, and hybrid models.
                      </p>
                      <div className="bg-blue-50 border-l-4 border-[#1c7bc8] p-6 my-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Call Now for Immediate Service</h3>
                        <p className="text-gray-700 mb-4">
                          Don't wait for water heater problems to get worse. Contact GD Professional Plumbing at 
                          <strong className="text-[#1c7bc8]"> (833) 445-0128</strong> for fast, reliable service.
                        </p>
                        <a
                          href="tel:+18334450128"
                          className="inline-flex items-center bg-[#1c7bc8] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0f5a9e] transition"
                        >
                          Call Now
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "services" && (
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Water Heater Services We Offer
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white p-6 rounded-lg shadow-md border">
                        <div className="flex items-center mb-4">
                          <div className="bg-[#1c7bc8] text-white rounded-full p-3 mr-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">Water Heater Repair</h3>
                        </div>
                        <p className="text-gray-600">
                          Fast diagnosis and repair of all water heater issues including leaks, no hot water, 
                          temperature problems, and unusual noises. Same-day service available.
                        </p>
                      </div>

                      <div className="bg-white p-6 rounded-lg shadow-md border">
                        <div className="flex items-center mb-4">
                          <div className="bg-[#1c7bc8] text-white rounded-full p-3 mr-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">Water Heater Installation</h3>
                        </div>
                        <p className="text-gray-600">
                          Professional installation of new water heaters including tankless, traditional tank, 
                          and hybrid models. Proper sizing and energy-efficient options available.
                        </p>
                      </div>

                      <div className="bg-white p-6 rounded-lg shadow-md border">
                        <div className="flex items-center mb-4">
                          <div className="bg-[#1c7bc8] text-white rounded-full p-3 mr-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">Maintenance Services</h3>
                        </div>
                        <p className="text-gray-600">
                          Regular maintenance to extend water heater lifespan and prevent costly repairs. 
                          Includes inspection, cleaning, and efficiency optimization.
                        </p>
                      </div>

                      <div className="bg-white p-6 rounded-lg shadow-md border">
                        <div className="flex items-center mb-4">
                          <div className="bg-[#1c7bc8] text-white rounded-full p-3 mr-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">Emergency Services</h3>
                        </div>
                        <p className="text-gray-600">
                          24/7 emergency water heater services for urgent issues like leaks, no hot water, 
                          or complete failures. Fast response guaranteed.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "why-choose" && (
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Why Choose GD Professional Plumbing for Water Heater Services?
                    </h2>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#1c7bc8] text-white rounded-full p-3 mt-1">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">50+ Years of Experience</h3>
                          <p className="text-gray-600">
                            Established in 1973, we have decades of experience with all types of water heaters 
                            and brands. Our expertise ensures the right solution for your specific needs.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#1c7bc8] text-white rounded-full p-3 mt-1">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Response Time</h3>
                          <p className="text-gray-600">
                            We understand water heater issues can't wait. Our team provides same-day service 
                            for most repairs and quick response for emergency situations.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#1c7bc8] text-white rounded-full p-3 mt-1">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">Licensed & Insured</h3>
                          <p className="text-gray-600">
                            All our plumbers are fully licensed, bonded, and insured. We follow all local 
                            codes and regulations for safe, compliant water heater installations.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#1c7bc8] text-white rounded-full p-3 mt-1">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">Transparent Pricing</h3>
                          <p className="text-gray-600">
                            No hidden fees or surprise charges. We provide clear, upfront pricing for all 
                            water heater services with no-pressure estimates.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Get Your Free Estimate</h3>
                <p className="text-gray-600 mb-6">
                  Contact us today for a free, no-obligation estimate on your water heater service needs.
                </p>
                <div className="space-y-4">
                  <a
                    href="tel:+18334450128"
                    className="w-full bg-[#1c7bc8] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0f5a9e] transition flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call (833) 445-0128
                  </a>
                  <button className="w-full border-2 border-[#1c7bc8] text-[#1c7bc8] px-6 py-3 rounded-lg font-semibold hover:bg-[#1c7bc8] hover:text-white transition">
                    Request Estimate
                  </button>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Service Areas</h4>
                  <p className="text-gray-600 text-sm">
                    We provide water heater services throughout California including:
                  </p>
                  <ul className="text-gray-600 text-sm mt-2 space-y-1">
                    <li>• Los Angeles</li>
                    <li>• San Francisco</li>
                    <li>• San Diego</li>
                    <li>• Sacramento</li>
                    <li>• And surrounding areas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#1c7bc8] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Need Water Heater Service Today?</h2>
          <p className="text-xl mb-8 opacity-95">
            Don't wait for water heater problems to get worse. Contact GD Professional Plumbing for fast, reliable service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+18334450128"
              className="bg-white text-[#1c7bc8] font-bold px-8 py-4 rounded-xl text-lg hover:bg-gray-50 transition shadow-lg"
            >
              Call (833) 445-0128
            </a>
            <button className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-[#1c7bc8] transition">
              Get Free Estimate
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 