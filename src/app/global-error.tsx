'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global error:', error);
  }, [error]);

  // For 404 errors, redirect to main domain
  useEffect(() => {
    if (error.message.includes('404') || error.message.includes('Not Found')) {
      window.location.href = 'https://www.gdprofessionalplumbing.com';
    }
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <h1 className="text-6xl font-bold text-red-600 mb-2">Error</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Something went wrong</h2>
          <p className="text-gray-600 mb-6">
            We're sorry, but something went wrong. You'll be redirected to our main website.
          </p>
        </div>
        
        <div className="space-y-4">
          <button
            onClick={() => window.location.href = 'https://www.gdprofessionalplumbing.com'}
            className="inline-block w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Go to Main Website
          </button>
          
          <button
            onClick={reset}
            className="inline-block w-full bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}
