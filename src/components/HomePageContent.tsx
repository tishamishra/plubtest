import Header from '@/components/Header';

export default function HomePageContent() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-400 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Welcome to PlumPro
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto">
            Professional, licensed, and trusted plumbers for all your needs. Serving Texas, California, and New York with 24/7 emergency service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:8334450128"
              className="bg-white text-blue-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition"
            >
              Call (833) 445-0128
            </a>
            <button className="bg-blue-600 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-blue-700 transition">
              Get Free Quote
            </button>
          </div>
        </div>
      </section>
      {/* Add more homepage sections as needed */}
    </div>
  );
} 