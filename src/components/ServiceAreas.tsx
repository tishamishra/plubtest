'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Location {
  id: string;
  name: string;
  state: string;
  fullName: string;
}

interface ServiceAreasProps {
  currentLocation: {
    name: string;
    state: string;
    areas: string[];
    zipCodes?: string[];
    phone: string;
  };
}

export default function ServiceAreas({ currentLocation }: ServiceAreasProps) {
  const [allLocations, setAllLocations] = useState<Location[]>([]);
  const [visibleCities, setVisibleCities] = useState(30);
  const [isLoading, setIsLoading] = useState(false);

  // Use the same color as "Need a Plumber Today" section
  const buttonColor = 'bg-[#1c7bc8]';

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch('/api/locations');
        const data = await response.json();
        setAllLocations(data.locations || []);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    fetchLocations();
  }, []);

  const loadMoreCities = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCities(prev => prev + 20);
      setIsLoading(false);
    }, 500);
  };

  // Shuffle the cities to randomize their positions
  const shuffleArray = (array: Location[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const displayedCities = shuffleArray(allLocations).slice(0, visibleCities);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Areas We Serve
        </h2>
        
        {/* Cities We Serve */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
            Cities We Serve Near {currentLocation.name}, {currentLocation.state}
          </h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
                        {displayedCities.map((location) => (
                          <div key={location.id} className="flex flex-col">
                            <Link 
                              href={`/locations/${location.id}`}
                              className={`${buttonColor} rounded-md px-2 py-1.5 text-center hover:opacity-80 transition-all duration-300 cursor-pointer border border-transparent hover:shadow-sm`}
                            >
                              <span className="text-white font-medium text-sm leading-tight block">
                                {location.name}
                              </span>
                            </Link>
                            <Link 
                              href={`/states/${location.state.toLowerCase()}`}
                              className="text-blue-600 hover:text-blue-800 text-xs text-center mt-1 font-medium hover:underline transition-colors"
                            >
                              {location.state}
                            </Link>
                          </div>
                        ))}
                      </div>
          
          {/* Load More Button */}
          {visibleCities < allLocations.length && (
            <div className="text-center mt-8">
              <button
                onClick={loadMoreCities}
                disabled={isLoading}
                className="inline-flex items-center bg-[#1c7bc8] hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold px-6 py-3 rounded-lg transition-colors duration-300"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Loading...
                  </>
                ) : (
                  `View ${Math.min(20, allLocations.length - visibleCities)} More Cities`
                )}
              </button>
            </div>
          )}
        </div>


      </div>
    </section>
  );
} 