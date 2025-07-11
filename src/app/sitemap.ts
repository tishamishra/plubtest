import { MetadataRoute } from 'next';
import { getAllSubdomains } from '../utils/subdomain';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://affinsight.com';
  const locations = await getAllSubdomains();
  
  const locationUrls = locations.map((location) => ({
    url: `${baseUrl}/locations/${location.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const subdomainUrls = locations.map((location) => ({
    url: `https://${location.subdomain}.${baseUrl.replace('https://', '')}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...locationUrls,
    ...subdomainUrls,
  ];
} 