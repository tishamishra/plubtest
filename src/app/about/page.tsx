import type { Metadata } from 'next';
import AboutPageContent from '@/components/AboutPageContent';

export const metadata: Metadata = {
  title: 'About GD Professional Plumbing | 50+ Years of Trusted Service in the US',
  description: 'Learn about GD Professional Plumbing - 50+ years of trusted service across the USA. Licensed, insured, and committed to excellence in residential and commercial plumbing since 1973.',
  keywords: [
    'about GD Professional Plumbing',
    'plumbing company history',
    'trusted plumber',
    'licensed plumber',
    'insured plumber',
    'professional plumbing service',
    'plumbing company USA',
    'residential plumbing',
    'commercial plumbing',
    'plumbing contractor',
    'plumbing business',
    'plumbing experience',
    'plumbing expertise',
    'plumbing team',
    'plumbing professionals',
    'plumbing service provider',
    'reliable plumber',
    'experienced plumber',
    'plumbing company about',
    'plumbing service history'
  ],
  openGraph: {
    title: 'About GD Professional Plumbing | 50+ Years of Trusted Service in the US',
    description: 'Learn about GD Professional Plumbing - 50+ years of trusted service across the USA. Licensed, insured, and committed to excellence in residential and commercial plumbing since 1973.',
    url: 'https://gdprofessionalplumbing.com/about',
    siteName: 'GD Professional Plumbing',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About GD Professional Plumbing | 50+ Years of Trusted Service in the US',
    description: 'Learn about GD Professional Plumbing - 50+ years of trusted service across the USA. Licensed, insured, and committed to excellence in residential and commercial plumbing since 1973.',
  },
  alternates: {
    canonical: 'https://gdprofessionalplumbing.com/about',
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
} 