import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Award, CheckCircle2, Phone, MapPin, Mail } from "lucide-react";
import { SubpageHeader } from "@/components/layout/SubpageHeader";
import { SubpageFooter } from "@/components/layout/SubpageFooter";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "About Santos Home Services LLC | Licensed Contractor Danbury CT",
  description:
    "Learn about Claudinei Santos and Santos Home Services LLC. Over 15 years of dedicated finish carpentry, deck construction, and remodeling in Danbury, CT. License HIC.0705313.",
  alternates: {
    canonical: `${siteConfig.domain}/about/`,
  },
  openGraph: {
    title: "About Santos Home Services LLC | Danbury CT Home Contractor",
    description:
      "Licensed CT Home Improvement Contractor (HIC.0705313) with a 91 BuildZoom score. Integrity, precision, and enduring New England craftsmanship.",
    url: `${siteConfig.domain}/about/`,
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Santos Home Services LLC",
    description: "Company background, founder history, and credentials of Santos Home Services LLC.",
    url: `${siteConfig.domain}/about/`,
    mainEntity: {
      "@type": "HomeAndConstructionBusiness",
      name: siteConfig.name,
      founder: {
        "@type": "Person",
        name: siteConfig.founder,
      },
      license: siteConfig.license,
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

      <main className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="text-xs text-[#DDF3FF]/60 mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-[#0089D0]">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">About Us</span>
          </nav>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block rounded-full bg-[#006A9E]/20 px-3.5 py-1 text-xs font-bold tracking-widest text-[#0089D0] uppercase border border-[#0089D0]/30">
                MEET THE FOUNDER & CRAFTSMAN
              </span>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl font-heading leading-tight">
                Built on Integrity. Driven by Precision.
              </h1>
              <h2 className="mt-2 text-xl sm:text-2xl font-bold text-[#0089D0] font-heading">
                Claudinei Santos — Founder & Lead Builder
              </h2>
              <div className="mt-6 space-y-4 text-sm sm:text-base text-[#DDF3FF]/80 leading-relaxed">
                <p>
                  Santos Home Services LLC was founded on a simple, enduring standard: deliver exceptional construction and home improvement without cutting corners, and treat every homeowner’s property as if it were our own.
                </p>
                <p>
                  With more than 15 years of hands-on experience in finish carpentry, structural framing, deck construction, and comprehensive home renovations, Claudinei Santos brings old-world craftsmanship combined with modern engineering standards to Danbury, CT and surrounding communities.
                </p>
                <p>
                  Every project is supervised directly on-site, ensuring clear communication, transparent pricing, immaculate clean-up, and flawless execution from the first layout chalk line to the final coat of finish.
                </p>
              </div>

              {/* Badges Grid */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#071820] p-4">
                  <ShieldCheck className="h-6 w-6 text-[#00B050] flex-shrink-0" />
                  <div>
                    <div className="text-xs font-bold uppercase text-white">CT State License</div>
                    <div className="text-xs text-[#DDF3FF]/70">HIC.0705313 (Active & Insured)</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#071820] p-4">
                  <Award className="h-6 w-6 text-[#0089D0] flex-shrink-0" />
                  <div>
                    <div className="text-xs font-bold uppercase text-white">BuildZoom Score 91</div>
                    <div className="text-xs text-[#DDF3FF]/70">Top 37% of 93,424 CT Contractors</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact/"
                  className="rounded-full bg-gradient-to-r from-[#006A9E] to-[#0089D0] px-8 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(0,137,208,0.4)] transition hover:brightness-110"
                >
                  Contact Claudinei Santos
                </Link>
                <Link
                  href="/projects/"
                  className="rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-xs font-bold text-white transition hover:bg-white/10"
                >
                  View Completed Work
                </Link>
              </div>
            </div>

            {/* Founder Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative h-[480px] sm:h-[580px] w-full max-w-[450px]">
                <Image
                  src="/about-branco.png"
                  alt="Santos Home Services LLC - Claudinei Santos"
                  fill
                  className="object-contain object-bottom drop-shadow-[0_25px_50px_rgba(0,0,0,0.7)]"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Service Area Matrix */}
          <div className="mt-24 rounded-3xl border border-white/10 bg-[#071820]/90 p-8 sm:p-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0089D0]">
              COMMUNITY COVERAGE
            </span>
            <h3 className="mt-2 text-2xl font-bold font-heading text-white">
              Proudly Serving Danbury & Fairfield County, Connecticut
            </h3>
            <p className="mt-2 text-sm text-[#DDF3FF]/80 max-w-2xl">
              We provide prompt, licensed home improvement and remodeling services across Northern and Central Fairfield County:
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {siteConfig.serviceAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-xl border border-white/10 bg-[#001D2B] px-4 py-2 text-xs font-bold text-white"
                >
                  {area}, CT
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>

      <SubpageFooter />
      <FloatingWhatsApp />
    </div>
  );
}