'use client';

import { generateSubdomain } from '../utils/subdomain';

interface SubdomainInfoProps {
  locationName: string;
}

export default function SubdomainInfo({ locationName }: SubdomainInfoProps) {
  const subdomain = generateSubdomain(locationName);
  
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
      <div className="flex items-center space-x-2">
        <div className="flex-shrink-0">
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <h3 className="text-sm font-medium text-blue-900">
            Direct Access
          </h3>
          <p className="text-sm text-blue-700 mt-1">
            Access this location directly at:{' '}
            <code className="bg-blue-100 px-2 py-1 rounded text-blue-800 font-mono text-xs">
              {subdomain}.plumpro.com
            </code>
          </p>
        </div>
      </div>
    </div>
  );
} 