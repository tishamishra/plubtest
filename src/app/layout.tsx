import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "24/7 Emergency Plumbing & Repairs Services | GD Professional Plumbing",
  description: "Professional 24/7 emergency plumbing services across the USA. Water heater repair, drain cleaning, leak detection, and more. Licensed, insured, and trusted since 1973. Call (833) 609-0936 for immediate service.",
  keywords: [
    "24/7 emergency plumbing",
    "emergency plumber",
    "plumbing services",
    "water heater repair",
    "drain cleaning",
    "leak detection",
    "plumber near me",
    "24/7 plumbing",
    "licensed plumber",
    "residential plumbing",
    "commercial plumbing",
    "plumbing repair",
    "plumbing installation",
    "sewer line repair",
    "gas line repair",
    "toilet repair",
    "faucet repair",
    "sink repair",
    "pipe repair",
    "plumbing maintenance"
  ],
  icons: {
    icon: "https://ik.imagekit.io/nang9yead/8f7118ab-ec26-4a6f-88c3-dc61ebb150c3.png?updatedAt=1757159395174",
    shortcut: "https://ik.imagekit.io/nang9yead/8f7118ab-ec26-4a6f-88c3-dc61ebb150c3.png?updatedAt=1757159395174",
    apple: "https://ik.imagekit.io/nang9yead/8f7118ab-ec26-4a6f-88c3-dc61ebb150c3.png?updatedAt=1757159395174",
  },
  openGraph: {
    title: "24/7 Emergency Plumbing & Repairs Services | GD Professional Plumbing",
    description: "Professional 24/7 emergency plumbing services across the USA. Water heater repair, drain cleaning, leak detection, and more. Licensed, insured, and trusted since 1973.",
    url: "https://gdprofessionalplumbing.com",
    siteName: "GD Professional Plumbing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 Emergency Plumbing & Repairs Services | GD Professional Plumbing",
    description: "Professional 24/7 emergency plumbing services across the USA. Water heater repair, drain cleaning, leak detection, and more.",
  },
  alternates: {
    canonical: "https://gdprofessionalplumbing.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CTZ6N4SPQP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CTZ6N4SPQP');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
