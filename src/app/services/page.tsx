import type { Metadata } from 'next';
import ServicesPageContent from '@/components/ServicesPageContent';

export const metadata: Metadata = {
  title: 'Professional Plumbing Services in the US | GD Professional Plumbing',
  description: 'Comprehensive plumbing services across the USA including water heater repair, drain cleaning, leak detection, sewer line repair, and emergency plumbing. Licensed, insured, and trusted since 1973.',
  keywords: [
    'plumbing services',
    'water heater repair',
    'drain cleaning',
    'leak detection',
    'sewer line repair',
    'emergency plumbing',
    'residential plumbing',
    'commercial plumbing',
    'plumber services',
    'plumbing repair',
    'plumbing installation',
    'gas line repair',
    'toilet repair',
    'faucet repair',
    'sink repair',
    'pipe repair',
    'plumbing maintenance',
    'professional plumber',
    'licensed plumber',
    'plumbing contractor'
  ],
  openGraph: {
    title: 'Professional Plumbing Services in the US | GD Professional Plumbing',
    description: 'Comprehensive plumbing services across the USA including water heater repair, drain cleaning, leak detection, sewer line repair, and emergency plumbing.',
    url: 'https://gdprofessionalplumbing.com/services',
    siteName: 'GD Professional Plumbing',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Plumbing Services in the US | GD Professional Plumbing',
    description: 'Comprehensive plumbing services across the USA including water heater repair, drain cleaning, leak detection, sewer line repair, and emergency plumbing.',
  },
  alternates: {
    canonical: 'https://gdprofessionalplumbing.com/services',
  },
};

export default function ServicesPage() {
  return <ServicesPageContent />;
} 