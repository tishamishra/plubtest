import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-700">
              PlumPro
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition">
              Home
            </Link>
            <Link href="/locations" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition">
              Locations
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition">
              Services
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition">
              Contact
            </Link>
          </nav>

          {/* Phone Number */}
          <div className="hidden md:flex items-center">
            <a href="tel:+18334450128" className="bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition">
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