import locationsData from '../data/locations.json';

export function generateSubdomain(locationName: string): string {
  return locationName
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
}

export function getLocationBySubdomain(subdomain: string) {
  return locationsData.locations.find(loc => 
    loc.id === subdomain.toLowerCase() || 
    generateSubdomain(loc.name) === subdomain.toLowerCase()
  );
}

export function getAllSubdomains() {
  return locationsData.locations.map(loc => ({
    id: loc.id,
    name: loc.name,
    subdomain: generateSubdomain(loc.name),
    state: loc.state
  }));
}

export function isValidSubdomain(subdomain: string): boolean {
  return getLocationBySubdomain(subdomain) !== undefined;
} 