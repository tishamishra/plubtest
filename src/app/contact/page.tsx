import type { Metadata } from 'next';
import ContactPageContent from '@/components/ContactPageContent';

export const metadata: Metadata = {
  title: 'Contact Us Today | GD Professional Plumbing',
  description: 'Contact GD Professional Plumbing for 24/7 emergency plumbing services across the USA. Call (833) 445-0128 for immediate assistance with water heater repair, drain cleaning, leak detection, and more.',
  keywords: [
    'contact plumber',
    'emergency plumber contact',
    'plumbing service contact',
    'plumber phone number',
    '24/7 plumbing service',
    'emergency plumbing contact',
    'plumbing company contact',
    'plumber near me contact',
    'water heater repair contact',
    'drain cleaning contact',
    'leak detection contact',
    'sewer line repair contact',
    'toilet repair contact',
    'faucet repair contact',
    'plumbing emergency contact',
    'licensed plumber contact',
    'professional plumber contact',
    'plumbing contractor contact',
    'residential plumbing contact',
    'commercial plumbing contact'
  ],
  openGraph: {
    title: 'Contact Us Today | GD Professional Plumbing',
    description: 'Contact GD Professional Plumbing for 24/7 emergency plumbing services across the USA. Call (833) 445-0128 for immediate assistance with water heater repair, drain cleaning, leak detection, and more.',
    url: 'https://gdprofessionalplumbing.com/contact',
    siteName: 'GD Professional Plumbing',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us Today | GD Professional Plumbing',
    description: 'Contact GD Professional Plumbing for 24/7 emergency plumbing services across the USA. Call (833) 445-0128 for immediate assistance with water heater repair, drain cleaning, leak detection, and more.',
  },
  alternates: {
    canonical: 'https://gdprofessionalplumbing.com/contact',
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
} 