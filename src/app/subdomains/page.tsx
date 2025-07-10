import Header from '@/components/Header';
import { getAllSubdomains } from '@/utils/subdomain';

export default function SubdomainsPage() {
  const subdomains = getAllSubdomains();
  
  // Group by state
  const groupedSubdomains = subdomains.reduce((acc, location) => {
    if (!acc[location.state]) {
      acc[location.state] = [];
    }
    acc[location.state].push(location);
    return acc;
  }, {} as Record<string, typeof subdomains>);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            All Location Subdomains
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access any of our service locations directly via subdomain. 
            Simply add the subdomain to plumpro.com to visit that location's page.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              How to Use Subdomains
            </h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800">
                <strong>Example:</strong> To visit Houston, TX, go to{' '}
                <code className="bg-blue-100 px-2 py-1 rounded text-blue-900 font-mono">
                  houston.plumpro.com
                </code>
              </p>
            </div>
          </div>

          {Object.entries(groupedSubdomains).map(([state, locations]) => (
            <div key={state} className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                {state}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {locations.map((location) => (
                  <div key={location.id} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-800">{location.name}</h4>
                        <p className="text-sm text-gray-500">{location.state}</p>
                      </div>
                      <div className="text-right">
                        <code className="bg-white px-2 py-1 rounded text-sm font-mono text-blue-600 border">
                          {location.subdomain}
                        </code>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Total Locations Available
              </h3>
              <p className="text-3xl font-bold text-blue-600">{subdomains.length}</p>
              <p className="text-gray-600 mt-2">
                Across {Object.keys(groupedSubdomains).length} states
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 