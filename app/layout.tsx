import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/siteConfig";

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
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "Santos Home Services LLC | Licensed Home Improvement Contractor Danbury CT",
    template: "%s | Santos Home Services LLC",
  },
  description:
    "Santos Home Services LLC is a licensed Home Improvement Contractor (HIC.0705313) in Danbury, CT. Expert Finish Carpentry, Decks, Framing, Painting, Drywall, Flooring, Tile & Basement Remodeling.",
  keywords: [
    "Home Improvement Contractor Danbury CT",
    "Licensed Contractor Danbury CT",
    "Carpenter Danbury CT",
    "Deck Contractor Danbury CT",
    "Fence Contractor Danbury CT",
    "Framing Contractor Danbury CT",
    "Painting Contractor Danbury CT",
    "Drywall Contractor Danbury CT",
    "Basement Remodeling Danbury CT",
    "Tile Contractor Fairfield County CT",
    "Home Renovation Danbury Connecticut",
  ],
  authors: [{ name: "Santos Home Services LLC", url: siteConfig.domain }],
  creator: "Santos Home Services LLC",
  publisher: "Santos Home Services LLC",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: siteConfig.domain,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Santos Home Services LLC | Your Home. Our Craft. Built to Last.",
    description:
      "Licensed Home Improvement Contractor (HIC.0705313) serving Danbury, CT and surrounding communities. Quality craftsmanship, reliability and attention to detail.",
    url: siteConfig.domain,
    siteName: siteConfig.name,
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
  twitter: {
    card: "summary_large_image",
    title: "Santos Home Services LLC | Licensed Contractor Danbury CT",
    description:
      "Licensed Home Improvement Contractor serving Danbury, CT and Fairfield County. Expert Carpentry, Decks, Painting & Remodeling.",
    images: ["/hero-sequence/frame-50.jpg"],
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
    "@type": ["HomeAndConstructionBusiness", "LocalBusiness", "GeneralContractor"],
    "@id": `${siteConfig.domain}/#organization`,
    name: siteConfig.name,
    legalName: "Santos Home Services LLC",
    founder: {
      "@type": "Person",
      name: siteConfig.founder,
      jobTitle: "Founder & Lead Craftsman",
    },
    url: siteConfig.domain,
    logo: `${siteConfig.domain}/images/SANTOS%20LOGO.png`,
    image: `${siteConfig.domain}/hero-sequence/frame-50.jpg`,
    telephone: siteConfig.phoneRaw,
    email: siteConfig.email,
    priceRange: "$$",
    license: siteConfig.license,
    taxID: siteConfig.license,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "07:00",
        closes: "19:00",
      },
    ],
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "48",
      bestRating: "5",
      worstRating: "1",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Home Improvement & Renovation Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Finish Carpentry",
            description: "Custom crown molding, baseboards, wainscoting and built-ins.",
            url: `${siteConfig.domain}/services/finish-carpentry/`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Deck Construction & Repair",
            description: "Custom composite and wood outdoor deck building and renovation.",
            url: `${siteConfig.domain}/services/deck-construction/`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Fence Installation",
            description: "Privacy, cedar picket and perimeter security fencing.",
            url: `${siteConfig.domain}/services/fence-installation/`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Structural Framing",
            description: "Timber framing, room additions, and open-concept load bearing wall removal.",
            url: `${siteConfig.domain}/services/framing/`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Interior & Exterior Painting",
            description: "Premium interior and exterior painting, surface preparation and staining.",
            url: `${siteConfig.domain}/services/painting/`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Drywall Hanging & Finishing",
            description: "Level 5 smooth drywall finish, taping, plaster and water damage repair.",
            url: `${siteConfig.domain}/services/drywall/`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hardwood & Vinyl Flooring",
            description: "Hardwood and luxury vinyl plank (LVP) flooring installation.",
            url: `${siteConfig.domain}/services/flooring/`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tile Installation",
            description: "Custom bathroom tiles, kitchen backsplashes and waterproof showers.",
            url: `${siteConfig.domain}/services/tile-installation/`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Basement Remodeling",
            description: "Complete basement finishing, lower-level suites, and living space upgrades.",
            url: `${siteConfig.domain}/services/basement-remodeling/`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bathroom Remodeling",
            description: "Full master and guest bathroom renovations with custom walk-in showers.",
            url: `${siteConfig.domain}/services/bathroom-remodeling/`,
          },
        },
      ],
    },
  };

  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable} scroll-smooth`}>
      <head>
        {/* Preload first hero frame to accelerate Core Web Vitals LCP */}
        <link
          rel="preload"
          as="image"
          href="/hero-sequence/frame-01.jpg"
          // @ts-expect-error fetchpriority attribute
          fetchpriority="high"
        />
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
