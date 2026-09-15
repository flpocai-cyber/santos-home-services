import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://santoshomeimprovement.com"),
  title: "Santos Home Services LLC | Licensed Home Improvement Contractor Danbury CT",
  description:
    "Professional home improvement services in Danbury, CT. Expert Finish Carpentry, Deck Construction & Repair, Fence Installation, Structural Framing, Interior & Exterior Painting, and Drywall.",
  keywords: [
    "Home Improvement Contractor Danbury CT",
    "Carpenter Danbury CT",
    "Deck Contractor Danbury CT",
    "Fence Contractor Danbury CT",
    "Framing Contractor Danbury CT",
    "Painting Contractor Danbury CT",
    "Drywall Contractor Danbury CT",
    "Finish Carpentry Danbury CT",
    "Home Renovation Danbury Connecticut",
  ],
  authors: [{ name: "Santos Home Services LLC" }],
  openGraph: {
    title: "Santos Home Services LLC | Your Home. Our Craft. Built to Last.",
    description:
      "Licensed Home Improvement Contractor serving Danbury, CT and surrounding communities. Quality craftsmanship, reliability and attention to detail.",
    url: "https://santoshomeimprovement.com",
    siteName: "Santos Home Services LLC",
    images: [
      {
        url: "/hero-sequence/frame-50.jpg",
        width: 1200,
        height: 675,
        alt: "Santos Home Services LLC Project in Danbury CT",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/images/icone pagina.png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/images/icone pagina.png",
    apple: "/images/icone pagina.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
    name: "Santos Home Services LLC",
    image: "https://santoshomeimprovement.com/images/SANTOS LOGO.png",
    telephone: "+14752516504",
    email: "Santoshomeservices2026@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "95 Main St Apt 2B",
      addressLocality: "Danbury",
      addressRegion: "CT",
      postalCode: "06810",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.3948,
      longitude: -73.454,
    },
    areaServed: [
      "Danbury",
      "Bethel",
      "Brookfield",
      "New Fairfield",
      "Ridgefield",
      "Fairfield County",
    ],
    priceRange: "$$",
  };

  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#001D2B] text-white font-sans antialiased selection:bg-[#0089D0] selection:text-white">
        {children}
      </body>
    </html>
  );
}
