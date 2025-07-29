"use client";

import { useState } from "react";
import Link from "next/link";

export default function SlabLeakDetectionRepairPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1c7bc8] to-[#0f4a75] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Slab Leak Detection & Repair Services</h1>
            <p className="text-xl mb-8 opacity-90">
              Fast and accurate slab leak detection with expert repairs
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
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="text-sm">
            <ol className="flex items-center space-x-2">
              <li><Link href="/" className="text-gray-500 hover:text-[#1c7bc8]">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><Link href="/services" className="text-gray-500 hover:text-[#1c7bc8]">Services</Link></li>
              <li className="text-gray-400">/</li>
              <li className="text-[#1c7bc8]">Slab Leak Detection & Repair</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content - 2/3 width */}
          <div className="lg:col-span-2">
            {/* Tab Navigation */}
            <div className="flex border-b border-gray-200 mb-8">
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors ${
                  activeTab === "overview"
                    ? "border-[#1c7bc8] text-[#1c7bc8]"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("services")}
                className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors ${
                  activeTab === "services"
                    ? "border-[#1c7bc8] text-[#1c7bc8]"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Our Services
              </button>
              <button
                onClick={() => setActiveTab("why-choose")}
                className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors ${
                  activeTab === "why-choose"
                    ? "border-[#1c7bc8] text-[#1c7bc8]"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Why Choose Us
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === "overview" && (
              <div>
                <h2 className="text-3xl font-bold mb-6">Slab Leak Detection & Repair Services</h2>
                <p className="text-lg text-gray-600 mb-6">
                  GD Professional Plumbing specializes in fast and accurate slab leak detection with expert repairs across the US. Our licensed technicians protect your foundation, prevent costly water damage, and preserve your property's structural integrity.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  With years of experience in slab leak detection and repair, we provide comprehensive services that include advanced detection technology, precise location identification, and professional repair solutions to ensure your property remains safe and secure.
                </p>
                
                {/* Call to Action Box */}
                <div className="bg-[#1c7bc8] text-white p-8 rounded-2xl mb-8">
                  <h3 className="text-2xl font-bold mb-4">Need Slab Leak Services?</h3>
                  <p className="text-lg mb-6 opacity-90">
                    Get professional slab leak detection and repair services to protect your foundation.
                  </p>
                  <a
                    href="tel:+18334450128"
                    className="inline-flex items-center bg-white text-[#1c7bc8] font-bold px-8 py-4 rounded-xl text-lg hover:bg-gray-50 transition shadow-lg"
                  >
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Now for Service
                  </a>
                </div>
              </div>
            )}

            {activeTab === "services" && (
              <div>
                <h2 className="text-3xl font-bold mb-8">Our Slab Leak Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-lg border">
                    <div className="flex items-center mb-4">
                      <div className="bg-[#1c7bc8] p-3 rounded-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold ml-4">Leak Detection</h3>
                    </div>
                    <p className="text-gray-600">
                      Advanced technology to accurately detect and locate slab leaks beneath your foundation.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg border">
                    <div className="flex items-center mb-4">
                      <div className="bg-[#1c7bc8] p-3 rounded-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold ml-4">Precise Repair</h3>
                    </div>
                    <p className="text-gray-600">
                      Expert repair services to fix slab leaks and prevent foundation damage.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg border">
                    <div className="flex items-center mb-4">
                      <div className="bg-[#1c7bc8] p-3 rounded-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold ml-4">Foundation Protection</h3>
                    </div>
                    <p className="text-gray-600">
                      Comprehensive solutions to protect your foundation from water damage and structural issues.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg border">
                    <div className="flex items-center mb-4">
                      <div className="bg-[#1c7bc8] p-3 rounded-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold ml-4">Emergency Response</h3>
                    </div>
                    <p className="text-gray-600">
                      Fast emergency response for urgent slab leak situations to minimize damage.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "why-choose" && (
              <div>
                <h2 className="text-3xl font-bold mb-8">Why Choose GD Professional Plumbing</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-lg border">
                    <div className="flex items-center mb-4">
                      <div className="bg-[#1c7bc8] p-3 rounded-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold ml-4">Licensed & Insured</h3>
                    </div>
                    <p className="text-gray-600">
                      Our team is fully licensed and insured, providing you with peace of mind and professional service.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg border">
                    <div className="flex items-center mb-4">
                      <div className="bg-[#1c7bc8] p-3 rounded-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold ml-4">Fast Response</h3>
                    </div>
                    <p className="text-gray-600">
                      Quick response times for all slab leak detection and repair needs.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg border">
                    <div className="flex items-center mb-4">
                      <div className="bg-[#1c7bc8] p-3 rounded-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold ml-4">Warranty Protection</h3>
                    </div>
                    <p className="text-gray-600">
                      All our slab leak detection and repair services come with comprehensive warranty coverage.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-lg border">
                    <div className="flex items-center mb-4">
                      <div className="bg-[#1c7bc8] p-3 rounded-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold ml-4">Transparent Pricing</h3>
                    </div>
                    <p className="text-gray-600">
                      Clear, upfront pricing with no hidden fees for all slab leak services.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar - 1/3 width */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {/* Get Estimate */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border mb-6">
                <h3 className="text-2xl font-bold mb-4 text-[#1c7bc8]">Get Your Free Estimate</h3>
                <p className="text-gray-600 mb-6">
                  Contact us today for a free estimate on your slab leak project.
                </p>
                <div className="space-y-4">
                  <a
                    href="tel:+18334450128"
                    className="w-full bg-[#1c7bc8] text-white font-bold py-3 px-6 rounded-xl text-center block hover:bg-[#0f4a75] transition"
                  >
                    Call (833) 445-0128
                  </a>
                  <button className="w-full border-2 border-[#1c7bc8] text-[#1c7bc8] font-bold py-3 px-6 rounded-xl hover:bg-[#1c7bc8] hover:text-white transition">
                    Request Estimate
                  </button>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border">
                <h3 className="text-xl font-bold mb-4 text-[#1c7bc8]">Service Areas</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• California</li>
                  <li>• Texas</li>
                  <li>• Florida</li>
                  <li>• New York</li>
                  <li>• Illinois</li>
                  <li>• And more...</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-[#1c7bc8] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Slab Leak Services?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get professional slab leak detection and repair services to protect your foundation.
          </p>
          <a
            href="tel:+18334450128"
            className="bg-white text-[#1c7bc8] font-bold px-8 py-4 rounded-xl text-lg hover:bg-gray-50 transition shadow-lg inline-flex items-center"
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now for Service
          </a>
        </div>
      </section>
    </div>
  );
} 