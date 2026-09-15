import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle, Clock, ShieldCheck } from "lucide-react";
import { SubpageHeader } from "@/components/layout/SubpageHeader";
import { SubpageFooter } from "@/components/layout/SubpageFooter";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Contact Santos Home Services LLC | Free Home Renovation Estimates",
  description:
    "Request a free estimate for your home improvement or remodeling project in Danbury, CT. Call (475) 251-6504 or message licensed contractor Claudinei Santos.",
  alternates: {
    canonical: `${siteConfig.domain}/contact/`,
  },
  openGraph: {
    title: "Contact Santos Home Services LLC | Danbury CT",
    description:
      "Schedule a consultation for decks, finish carpentry, painting, framing, and basement finishing in Fairfield County, CT.",
    url: `${siteConfig.domain}/contact/`,
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Santos Home Services LLC",
    description: "Contact information and quote request form for Santos Home Services LLC.",
    url: `${siteConfig.domain}/contact/`,
    mainEntity: {
      "@type": "HomeAndConstructionBusiness",
      name: siteConfig.name,
      telephone: siteConfig.phoneRaw,
      email: siteConfig.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.zip,
        addressCountry: siteConfig.address.country,
      },
    },
  };

  return (
    <div className="relative min-h-screen bg-[#001D2B] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SubpageHeader />

      <main className="py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="text-xs text-[#DDF3FF]/60 mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-[#0089D0]">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">Contact</span>
          </nav>

          {/* Quick Info Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="rounded-2xl border border-white/10 bg-[#071820]/90 p-6">
              <Phone className="h-6 w-6 text-[#0089D0] mb-3" />
              <div className="text-xs font-bold uppercase tracking-wider text-[#DDF3FF]/60">Call / Text</div>
              <a href={`tel:${siteConfig.phoneRaw}`} className="text-lg font-bold text-white hover:text-[#0089D0] transition">
                {siteConfig.phone}
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#071820]/90 p-6">
              <Mail className="h-6 w-6 text-[#0089D0] mb-3" />
              <div className="text-xs font-bold uppercase tracking-wider text-[#DDF3FF]/60">Email</div>
              <a href={`mailto:${siteConfig.email}`} className="text-sm font-bold text-white hover:text-[#0089D0] transition break-all">
                {siteConfig.email}
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#071820]/90 p-6">
              <MapPin className="h-6 w-6 text-[#0089D0] mb-3" />
              <div className="text-xs font-bold uppercase tracking-wider text-[#DDF3FF]/60">Location</div>
              <div className="text-sm font-bold text-white">
                {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.state}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#071820]/90 p-6">
              <Clock className="h-6 w-6 text-[#00B050] mb-3" />
              <div className="text-xs font-bold uppercase tracking-wider text-[#DDF3FF]/60">Working Hours</div>
              <div className="text-sm font-bold text-white">
                Mon – Sat: 7AM – 7PM
              </div>
            </div>
          </div>
        </div>

        {/* Existing High-Converting Contact Form Section */}
        <ContactFormSection currentLocale="en" />
      </main>

      <SubpageFooter />
      <FloatingWhatsApp />
    </div>
  );
}