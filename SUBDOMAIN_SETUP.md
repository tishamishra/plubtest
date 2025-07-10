# Subdomain Routing Feature

This Next.js application includes a middleware-based subdomain routing system that allows users to access location pages directly via subdomains.

## How It Works

The middleware (`src/middleware.ts`) intercepts all requests and checks if the hostname contains a subdomain that matches a location. If a match is found, it redirects to the appropriate location page.

## Examples

- `houston.plumpro.com` → `/locations/houston`
- `dallas.plumpro.com` → `/locations/dallas`
- `austin.plumpro.com` → `/locations/austin`

## Features

### 1. Middleware Routing
- Automatically redirects subdomain requests to location pages
- Handles 363+ locations across Texas, California, and New York
- Skips localhost and deployment domains (vercel.app, netlify.app)

### 2. Utility Functions
- `generateSubdomain()`: Converts location names to URL-friendly subdomains
- `getLocationBySubdomain()`: Finds location data by subdomain
- `getAllSubdomains()`: Returns all available subdomains
- `isValidSubdomain()`: Validates subdomain existence

### 3. SEO Optimization
- Sitemap includes all subdomain URLs
- Robots.txt configured for subdomain crawling
- Each location page shows its subdomain for direct access

### 4. User Interface
- Subdomain info displayed on each location page
- `/subdomains` page lists all available subdomains
- API endpoint `/api/subdomains` for programmatic access

## DNS Configuration

To enable subdomain routing in production, you'll need to configure your DNS provider:

### Option 1: Wildcard DNS Record
```
*.plumpro.com  CNAME  plumpro.com
```

### Option 2: Individual A Records
```
houston.plumpro.com  A  [your-server-ip]
dallas.plumpro.com   A  [your-server-ip]
austin.plumpro.com   A  [your-server-ip]
# ... repeat for all locations
```

## Deployment Considerations

### Vercel
- Wildcard subdomains are supported
- Configure in Vercel dashboard under Domain settings
- Add `*.plumpro.com` as a wildcard domain

### Netlify
- Supports wildcard subdomains
- Configure in Netlify dashboard
- Add `*.plumpro.com` as a custom domain

### Other Hosting Providers
- Ensure your hosting provider supports wildcard subdomains
- Configure DNS records accordingly
- Some providers may require individual subdomain setup

## Environment Variables

Add to your `.env.local`:
```
NEXT_PUBLIC_BASE_URL=https://plumpro.com
```

## Testing Locally

To test subdomain routing locally, you can:

1. Edit your `/etc/hosts` file (macOS/Linux):
```
127.0.0.1 houston.plumpro.local
127.0.0.1 dallas.plumpro.local
```

2. Access via browser:
- `http://houston.plumpro.local:3000`
- `http://dallas.plumpro.local:3000`

## Available Subdomains

The system currently supports 363+ locations:

### Texas (Major Cities)
- houston.plumpro.com
- dallas.plumpro.com
- austin.plumpro.com
- san-antonio.plumpro.com
- fort-worth.plumpro.com
- el-paso.plumpro.com
- arlington.plumpro.com
- corpus-christi.plumpro.com
- plano.plumpro.com
- laredo.plumpro.com

### California (Major Cities)
- los-angeles.plumpro.com
- san-diego.plumpro.com
- san-jose.plumpro.com
- san-francisco.plumpro.com
- fresno.plumpro.com
- sacramento.plumpro.com
- long-beach.plumpro.com
- oakland.plumpro.com
- bakersfield.plumpro.com
- anaheim.plumpro.com

### New York
- new-york.plumpro.com
- buffalo.plumpro.com
- rochester.plumpro.com
- yonkers.plumpro.com
- syracuse.plumpro.com

## API Endpoints

### GET /api/subdomains
Returns all available subdomains:
```json
{
  "success": true,
  "data": [
    {
      "id": "houston",
      "name": "Houston",
      "subdomain": "houston",
      "state": "Texas"
    }
  ],
  "total": 363
}
```

## Maintenance

### Adding New Locations
1. Add location data to `src/data/locations.json`
2. The subdomain will be automatically generated
3. Update DNS records if using individual A records

### Updating Subdomains
- Subdomains are generated automatically from location names
- Special characters are removed and spaces become hyphens
- Duplicate subdomains are handled by using location IDs as fallback

## Performance Considerations

- Middleware runs on every request
- Location data is loaded from JSON file
- Consider caching for large datasets
- Monitor performance with many subdomains

## Security

- Subdomain validation prevents malicious redirects
- Only valid location subdomains are processed
- Localhost and deployment domains are excluded
- No sensitive data exposed in subdomain generation 