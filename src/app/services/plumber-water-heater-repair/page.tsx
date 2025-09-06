import type { Metadata } from 'next';
import WaterHeaterRepairPageContent from '@/components/WaterHeaterRepairPageContent';

export const metadata: Metadata = {
  title: 'Expert Water Heater Repair & Installation Services in the US | GD Professional Plumbing',
  description: 'Professional water heater repair and installation services across the USA. Fast, reliable service for all water heater types. Licensed, insured, and trusted since 1973. Call (833) 609-0936.',
  keywords: [
    'water heater repair',
    'water heater installation',
    'water heater repair near me',
    'water heater installation near me',
    'water heater repair cost',
    'water heater installation cost',
    'water heater repair company',
    'water heater installation company',
    'water heater repair contractor',
    'water heater installation contractor',
    'water heater repair expert',
    'water heater installation expert',
    'water heater repair professional',
    'water heater installation professional',
    'water heater repair residential',
    'water heater installation residential',
    'water heater repair commercial',
    'water heater installation commercial',
    'water heater repair 24/7',
    'water heater installation emergency'
  ],
  openGraph: {
    title: 'Expert Water Heater Repair & Installation Services in the US | GD Professional Plumbing',
    description: 'Professional water heater repair and installation services across the USA. Fast, reliable service for all water heater types. Licensed, insured, and trusted since 1973.',
    url: 'https://gdprofessionalplumbing.com/services/plumber-water-heater-repair',
    siteName: 'GD Professional Plumbing',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Water Heater Repair & Installation Services in the US | GD Professional Plumbing',
    description: 'Professional water heater repair and installation services across the USA. Fast, reliable service for all water heater types. Licensed, insured, and trusted since 1973.',
  },
  alternates: {
    canonical: 'https://gdprofessionalplumbing.com/services/plumber-water-heater-repair',
  },
};

export default function WaterHeatersRepairAndInstallationPage() {
  return <WaterHeaterRepairPageContent />;
} 