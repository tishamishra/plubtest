import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img 
                src="/logo.png" 
                alt="GD Professional Plumbing" 
                className="h-16 w-auto"
              />
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-[#1c7bc8] px-4 py-2 text-base font-semibold transition-all duration-300 hover:bg-gray-50 rounded-lg relative group">
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1c7bc8]/10 to-[#1c7bc8]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link href="/locations" className="text-gray-700 hover:text-[#1c7bc8] px-4 py-2 text-base font-semibold transition-all duration-300 hover:bg-gray-50 rounded-lg relative group">
              <span className="relative z-10">Locations</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1c7bc8]/10 to-[#1c7bc8]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-[#1c7bc8] px-4 py-2 text-base font-semibold transition-all duration-300 hover:bg-gray-50 rounded-lg relative group">
              <span className="relative z-10">Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1c7bc8]/10 to-[#1c7bc8]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#1c7bc8] px-4 py-2 text-base font-semibold transition-all duration-300 hover:bg-gray-50 rounded-lg relative group">
              <span className="relative z-10">About</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1c7bc8]/10 to-[#1c7bc8]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#1c7bc8] px-4 py-2 text-base font-semibold transition-all duration-300 hover:bg-gray-50 rounded-lg relative group">
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1c7bc8]/10 to-[#1c7bc8]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </nav>

          {/* Phone Number */}
          <div className="hidden md:flex items-center">
            <a href="tel:8334450128" className="bg-[#1c7bc8] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#0f4c75] transition flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              (833) 445-0128
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-700 p-2">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
} 