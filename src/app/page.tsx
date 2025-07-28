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
      

      
      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose GD Professional Plumbing?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">50+ years of trusted service with licensed professionals and guaranteed workmanship</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="bg-[#1c7bc8] text-white rounded-full p-4 mb-6 w-16 h-16 flex items-center justify-center">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Licensed & Insured</h3>
              <p className="text-gray-600">All our plumbers are fully licensed, bonded, and insured for your peace of mind.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="bg-[#1c7bc8] text-white rounded-full p-4 mb-6 w-16 h-16 flex items-center justify-center">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Emergency Service</h3>
              <p className="text-gray-600">Round-the-clock emergency plumbing services with same-day response guaranteed.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="bg-[#1c7bc8] text-white rounded-full p-4 mb-6 w-16 h-16 flex items-center justify-center">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">50+ Years Experience</h3>
              <p className="text-gray-600">Established in 1973, we bring decades of expertise to every plumbing project.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Professional Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive plumbing solutions for residential and commercial properties</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Emergency Plumbing", icon: "⚡", desc: "24/7 emergency response for urgent plumbing issues" },
              { title: "Water Heater Services", icon: "🔥", desc: "Installation, repair, and maintenance of all water heater types" },
              { title: "Drain & Sewer Services", icon: "🧹", desc: "Professional drain cleaning and sewer line repair" },
              { title: "Pipe Installation", icon: "🛠️", desc: "New pipe installation and replacement services" },
              { title: "Fixture Installation", icon: "🚰", desc: "Faucets, sinks, toilets, and fixture installation" },
              { title: "Commercial Plumbing", icon: "🏢", desc: "Specialized plumbing services for commercial properties" },
            ].map((service) => (
              <div key={service.title} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition border border-gray-100">
                <div className="text-5xl mb-6 text-center">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{service.desc}</p>
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
