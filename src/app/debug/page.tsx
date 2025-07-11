import { headers } from 'next/headers';

export const dynamic = 'force-dynamic';

export default async function DebugPage() {
  const headersList = await headers();
  const hostname = headersList.get('host') || '';
  const userAgent = headersList.get('user-agent') || '';

  // Extract subdomain
  let subdomain = '';
  if (hostname.includes('.affinsight.com')) {
    subdomain = hostname.replace('.affinsight.com', '');
  } else if (hostname.includes('.plumpro.com')) {
    subdomain = hostname.replace('.plumpro.com', '');
  } else if (hostname.includes('localhost')) {
    const parts = hostname.split('.');
    if (parts.length > 1) {
      subdomain = parts[0];
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Subdomain Debug Information</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Request Information</h2>
          <div className="space-y-2">
            <p><strong>Hostname:</strong> {hostname}</p>
            <p><strong>Extracted Subdomain:</strong> {subdomain || 'None'}</p>
            <p><strong>User Agent:</strong> {userAgent}</p>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Testing Instructions</h2>
          <p className="mb-4">To test subdomain routing locally:</p>
          <ol className="list-decimal list-inside space-y-2">
            <li>Add to your <code>/etc/hosts</code> file:</li>
            <li><code>127.0.0.1 houston.localhost</code></li>
            <li><code>127.0.0.1 dallas.localhost</code></li>
            <li>Visit <code>http://houston.localhost:3000</code></li>
          </ol>
        </div>

        <div className="bg-green-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Expected Behavior</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><code>houston.localhost:3000</code> → Should show Houston location page</li>
            <li><code>dallas.localhost:3000</code> → Should show Dallas location page</li>
            <li><code>localhost:3000</code> → Should show main homepage</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 