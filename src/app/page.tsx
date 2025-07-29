import Header from "@/components/Header";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
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
              {/* Emergency Plumbing */}
              <div className="group relative h-80 w-full cursor-pointer perspective-1000">
                <div className="absolute inset-0 h-full w-full rounded-2xl transition-all duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                  {/* Front */}
                  <div className="absolute inset-0 h-full w-full rounded-2xl backface-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                      alt="Emergency Plumbing"
                      className="size-full rounded-2xl object-cover shadow-2xl shadow-black/40"
                    />
                    <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
                    <div className="absolute bottom-4 left-4 text-xl font-bold text-white">Emergency Plumbing</div>
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br from-red-600 to-red-700 backface-hidden rotate-y-180">
                    <div className="flex min-h-full flex-col gap-2 p-6">
                      <h1 className="text-xl font-bold text-white">Emergency Plumbing</h1>
                      <p className="mt-1 border-t border-t-gray-200 py-4 text-base font-medium leading-normal text-gray-100">
                        24/7 emergency plumbing services for urgent repairs and burst pipes. Fast response guaranteed with our experienced team.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Water Heater Services */}
              <div className="group relative h-80 w-full cursor-pointer perspective-1000">
                <div className="absolute inset-0 h-full w-full rounded-2xl transition-all duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                  {/* Front */}
                  <div className="absolute inset-0 h-full w-full rounded-2xl backface-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                      alt="Water Heater Services"
                      className="size-full rounded-2xl object-cover shadow-2xl shadow-black/40"
                    />
                    <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
                    <div className="absolute bottom-4 left-4 text-xl font-bold text-white">Water Heater Services</div>
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br from-orange-600 to-orange-700 backface-hidden rotate-y-180">
                    <div className="flex min-h-full flex-col gap-2 p-6">
                      <h1 className="text-xl font-bold text-white">Water Heater Services</h1>
                      <p className="mt-1 border-t border-t-gray-200 py-4 text-base font-medium leading-normal text-gray-100">
                        Installation, repair, and maintenance of all types of water heaters for optimal performance and energy efficiency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Drain Cleaning */}
              <div className="group relative h-80 w-full cursor-pointer perspective-1000">
                <div className="absolute inset-0 h-full w-full rounded-2xl transition-all duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                  {/* Front */}
                  <div className="absolute inset-0 h-full w-full rounded-2xl backface-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                      alt="Drain Cleaning"
                      className="size-full rounded-2xl object-cover shadow-2xl shadow-black/40"
                    />
                    <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
                    <div className="absolute bottom-4 left-4 text-xl font-bold text-white">Drain Cleaning</div>
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br from-green-600 to-green-700 backface-hidden rotate-y-180">
                    <div className="flex min-h-full flex-col gap-2 p-6">
                      <h1 className="text-xl font-bold text-white">Drain Cleaning</h1>
                      <p className="mt-1 border-t border-t-gray-200 py-4 text-base font-medium leading-normal text-gray-100">
                        Professional drain cleaning and unclogging services using advanced equipment and techniques for lasting results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pipe Installation */}
              <div className="group relative h-80 w-full cursor-pointer perspective-1000">
                <div className="absolute inset-0 h-full w-full rounded-2xl transition-all duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                  {/* Front */}
                  <div className="absolute inset-0 h-full w-full rounded-2xl backface-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                      alt="Pipe Installation"
                      className="size-full rounded-2xl object-cover shadow-2xl shadow-black/40"
                    />
                    <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
                    <div className="absolute bottom-4 left-4 text-xl font-bold text-white">Pipe Installation</div>
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br from-purple-600 to-purple-700 backface-hidden rotate-y-180">
                    <div className="flex min-h-full flex-col gap-2 p-6">
                      <h1 className="text-xl font-bold text-white">Pipe Installation</h1>
                      <p className="mt-1 border-t border-t-gray-200 py-4 text-base font-medium leading-normal text-gray-100">
                        Complete pipe installation and replacement services for residential and commercial properties with quality materials.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fixture Installation */}
              <div className="group relative h-80 w-full cursor-pointer perspective-1000">
                <div className="absolute inset-0 h-full w-full rounded-2xl transition-all duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                  {/* Front */}
                  <div className="absolute inset-0 h-full w-full rounded-2xl backface-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                      alt="Fixture Installation"
                      className="size-full rounded-2xl object-cover shadow-2xl shadow-black/40"
                    />
                    <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
                    <div className="absolute bottom-4 left-4 text-xl font-bold text-white">Fixture Installation</div>
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br from-teal-600 to-teal-700 backface-hidden rotate-y-180">
                    <div className="flex min-h-full flex-col gap-2 p-6">
                      <h1 className="text-xl font-bold text-white">Fixture Installation</h1>
                      <p className="mt-1 border-t border-t-gray-200 py-4 text-base font-medium leading-normal text-gray-100">
                        Professional installation of sinks, faucets, toilets, and other plumbing fixtures with precision and care.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Commercial Plumbing */}
              <div className="group relative h-80 w-full cursor-pointer perspective-1000">
                <div className="absolute inset-0 h-full w-full rounded-2xl transition-all duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                  {/* Front */}
                  <div className="absolute inset-0 h-full w-full rounded-2xl backface-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                      alt="Commercial Plumbing"
                      className="size-full rounded-2xl object-cover shadow-2xl shadow-black/40"
                    />
                    <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
                    <div className="absolute bottom-4 left-4 text-xl font-bold text-white">Commercial Plumbing</div>
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-700 backface-hidden rotate-y-180">
                    <div className="flex min-h-full flex-col gap-2 p-6">
                      <h1 className="text-xl font-bold text-white">Commercial Plumbing</h1>
                      <p className="mt-1 border-t border-t-gray-200 py-4 text-base font-medium leading-normal text-gray-100">
                        Specialized plumbing services for commercial buildings, offices, and industrial facilities with minimal disruption.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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

        
      

        {/* FAQ Section - SEO Optimized */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Get answers to common questions about our plumbing services</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                question: "What areas do you serve?",
                answer: "We provide plumbing services throughout the region, including residential and commercial properties. Contact us to confirm service availability in your specific area."
              },
              {
                question: "Do you offer emergency plumbing services?",
                answer: "Yes! We provide 24/7 emergency plumbing services. Call us anytime for urgent plumbing issues and we'll respond immediately."
              },
              {
                question: "Are your plumbers licensed and insured?",
                answer: "Absolutely. All our plumbers are fully licensed, bonded, and insured. We maintain all necessary certifications and insurance for your peace of mind."
              },
              {
                question: "What types of plumbing services do you offer?",
                answer: "We offer comprehensive plumbing services including emergency repairs, water heater installation/repair, drain cleaning, pipe installation, fixture installation, and commercial plumbing services."
              },
              {
                question: "Do you provide free estimates?",
                answer: "Yes, we provide free estimates for most plumbing services. Contact us to schedule a consultation and get a detailed quote for your project."
              },
              {
                question: "What is your response time for emergencies?",
                answer: "For emergency plumbing issues, we typically respond within 1-2 hours. We prioritize emergency calls and provide same-day service whenever possible."
              },
              {
                question: "Do you offer warranties on your work?",
                answer: "Yes, we stand behind all our work with comprehensive warranties. Our workmanship is guaranteed, and we use quality materials with manufacturer warranties."
              },
              {
                question: "How long have you been in business?",
                answer: "GD Professional Plumbing has been serving customers since 1973, with over 50 years of experience in residential and commercial plumbing services."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Trusted by thousands of satisfied customers since 1973</p>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
                name: "Sarah Johnson",
                location: "Residential Customer",
                text: "GD Professional Plumbing saved us during a major pipe burst. Their emergency response was incredible - they arrived within 30 minutes and fixed everything professionally.",
                rating: "⭐⭐⭐⭐⭐"
              },
              {
                name: "Michael Chen",
                location: "Commercial Property Owner",
                text: "We've been using GD Professional Plumbing for our office building maintenance for over 10 years. Their reliability and expertise are unmatched.",
                rating: "⭐⭐⭐⭐⭐"
              },
              {
                name: "Lisa Rodriguez",
                location: "Homeowner",
                text: "The team installed our new water heater perfectly. Professional, clean, and reasonably priced. Highly recommend their services!",
                rating: "⭐⭐⭐⭐⭐"
            },
          ].map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
                <div className="text-yellow-400 text-2xl mb-4">{t.rating}</div>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.location}</div>
                </div>
            </div>
          ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#1c7bc8] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Professional Plumbing Service?</h2>
          <p className="text-xl mb-8 opacity-90">Get same-day service with our licensed professionals</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8334450128"
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 mt-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4">GD Professional Plumbing</div>
              <p className="text-gray-300 mb-4">Established in 1973, providing trusted plumbing services for over 50 years.</p>
              <div className="text-sm text-gray-400">Licensed • Bonded • Insured</div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition">Emergency Plumbing</a></li>
                <li><a href="#" className="hover:text-white transition">Water Heater Services</a></li>
                <li><a href="#" className="hover:text-white transition">Drain & Sewer</a></li>
                <li><a href="#" className="hover:text-white transition">Commercial Plumbing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Phone: (833) 445-0128</li>
                <li>Emergency: 24/7 Available</li>
                <li>Email: info@gdplumbing.com</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Service Areas</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Residential Plumbing</li>
                <li>Commercial Plumbing</li>
                <li>Emergency Services</li>
                <li>24/7 Support</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} GD Professional Plumbing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
