import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-400 text-white py-20 px-4 flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center max-w-2xl">Find Trusted Plumbers in Your City</h1>
        <p className="text-lg sm:text-xl mb-8 text-center max-w-xl">Professional, reliable, and fast plumbing services for homes and businesses. Book a plumber in minutes.</p>
        <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
          <input type="text" placeholder="Enter your city" className="rounded px-4 py-3 text-gray-800 w-full focus:outline-none" />
          <button type="submit" className="bg-white text-blue-700 font-semibold px-6 py-3 rounded shadow hover:bg-blue-100 transition">Find Plumber</button>
        </form>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10 text-gray-800">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 text-blue-700 rounded-full p-4 mb-4">
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4"/></svg>
            </div>
            <h3 className="font-semibold mb-2">1. Choose Your City</h3>
            <p className="text-center text-gray-600">Select your location to see available plumbers near you.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 text-blue-700 rounded-full p-4 mb-4">
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 17l4 4 4-4m0-5V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v9"/></svg>
            </div>
            <h3 className="font-semibold mb-2">2. Book Instantly</h3>
            <p className="text-center text-gray-600">Pick a service and time that works for you. Booking is quick and easy.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 text-blue-700 rounded-full p-4 mb-4">
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
            </div>
            <h3 className="font-semibold mb-2">3. Get the Job Done</h3>
            <p className="text-center text-gray-600">A professional plumber arrives at your doorstep and solves your problem.</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-white max-w-6xl mx-auto w-full">
        <h2 className="text-2xl font-bold text-center mb-10 text-gray-800">Our Plumbing Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { title: "Leaky Faucet Repair", icon: "🚰" },
            { title: "Pipe Installation", icon: "🛠️" },
            { title: "Drain Cleaning", icon: "🧹" },
            { title: "Water Heater Repair", icon: "🔥" },
            { title: "Toilet Fixing", icon: "🚽" },
            { title: "Emergency Plumbing", icon: "⚡" },
          ].map((service) => (
            <div key={service.title} className="bg-gray-100 rounded-lg p-6 flex flex-col items-center shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 text-center">Professional, fast, and reliable service for all your plumbing needs.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10 text-gray-800">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Priya S.",
              text: "Booked a plumber in 2 minutes. The service was quick and professional! Highly recommend.",
            },
            {
              name: "Rahul M.",
              text: "Solved my leaking pipe the same day. Transparent pricing and friendly staff.",
            },
            {
              name: "Amit K.",
              text: "Best plumbing service in the city. Will use again for sure!",
            },
          ].map((t) => (
            <div key={t.name} className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xl font-bold mb-4">{t.name[0]}</div>
              <p className="text-gray-700 italic mb-2 text-center">"{t.text}"</p>
              <span className="text-gray-500 text-sm">- {t.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8 px-4 mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-lg font-bold">PlumPro</div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Services</a>
            <a href="#" className="hover:underline">Contact</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
          <div className="text-xs text-blue-200">&copy; {new Date().getFullYear()} PlumPro. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
