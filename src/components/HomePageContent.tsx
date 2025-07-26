import Header from '@/components/Header';

export default function HomePageContent() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <section className="relative py-20 px-4 min-h-[600px] flex items-center">
        {/* Background Image */}
        <img 
          src="/hero-bg.png"
          alt="Plumbing background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
            Welcome to PlumPro
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md">
            Professional, licensed, and trusted plumbers for all your needs. Serving Texas, California, and New York with 24/7 emergency service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:8334450128"
              className="bg-white text-blue-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition shadow-lg hover:shadow-xl"
            >
              Call (833) 445-0128
            </a>
            <button className="bg-blue-600 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-blue-700 transition shadow-lg hover:shadow-xl">
              Get Free Quote
            </button>
          </div>
        </div>
      </section>
      {/* Add more homepage sections as needed */}
    </div>
  );
} 