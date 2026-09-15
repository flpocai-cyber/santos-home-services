import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Hammer } from "lucide-react";
import { SubpageHeader } from "@/components/layout/SubpageHeader";
import { SubpageFooter } from "@/components/layout/SubpageFooter";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { servicesData } from "@/lib/servicesData";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Professional Home Improvement Services | Danbury, CT",
  description:
    "Explore our complete home improvement and remodeling services in Danbury, CT. Finish carpentry, deck construction, fences, framing, painting, drywall, flooring, tile, and basement finishes.",
  alternates: {
    canonical: `${siteConfig.domain}/services/`,
  },
  openGraph: {
    title: "Home Improvement Services in Danbury, CT | Santos Home Services LLC",
    description:
      "Licensed CT contractor offering finish carpentry, decks, fences, framing, painting, drywall, and basement renovations.",
    url: `${siteConfig.domain}/services/`,
  },
};

export default function ServicesIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Santos Home Services LLC Home Improvement Services",
    itemListElement: servicesData.map((svc, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: svc.name,
      url: `${siteConfig.domain}/services/${svc.slug}/`,
      description: svc.shortDesc,
    })),
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
            <span className="text-white font-medium">Services</span>
          </nav>

          {/* Heading */}
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-[#006A9E]/20 px-3.5 py-1 text-xs font-bold tracking-widest text-[#0089D0] uppercase border border-[#0089D0]/30">
              OUR EXPERTISE
            </span>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl font-heading">
              Complete Home Improvement & Renovation Services in Danbury, CT
            </h1>
            <p className="mt-4 text-base text-[#DDF3FF]/80 sm:text-lg">
              Licensed New England craftsmanship built to last. From structural timber framing to fine architectural finish carpentry and basement transformations across Fairfield County.
            </p>
          </div>

          {/* Grid of 10 Services */}
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((svc, index) => (
              <div
                key={svc.slug}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#071820]/90 transition-all duration-300 hover:-translate-y-2 hover:border-[#0089D0]/60 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
              >
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden bg-[#001D2B]">
                  <Image
                    src={svc.image}
                    alt={svc.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071820] via-transparent to-transparent opacity-80" />
                  <div className="absolute top-4 left-4 rounded-lg bg-[#001D2B]/85 px-2.5 py-1 text-xs font-extrabold tracking-wider text-[#0089D0] border border-[#0089D0]/30 backdrop-blur-md">
                    0{index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h2 className="text-xl font-bold text-white transition-colors duration-200 group-hover:text-[#0089D0] font-heading">
                      {svc.name}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-[#DDF3FF]/75">
                      {svc.shortDesc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                    <Link
                      href={`/services/${svc.slug}/`}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0089D0] transition hover:text-white"
                    >
                      <span>Explore Service Details</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Trust CTA */}
          <div className="mt-20 rounded-3xl border border-[#0089D0]/30 bg-gradient-to-r from-[#071820] to-[#00283B] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-2 text-[#00B050] text-sm font-bold">
                <ShieldCheck className="h-5 w-5" />
                <span>Licensed Contractor HIC.0705313 • Insured in Connecticut</span>
              </div>
              <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-white font-heading">
                Need a Custom Home Improvement Estimate?
              </h3>
              <p className="mt-2 text-sm text-[#DDF3FF]/80 max-w-xl">
                Contact Claudinei Santos today for a free on-site consultation in Danbury, Brookfield, Ridgefield, and surrounding towns.
              </p>
            </div>
            <Link
              href="/contact/"
              className="flex-shrink-0 rounded-full bg-gradient-to-r from-[#006A9E] to-[#0089D0] px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-white shadow-[0_0_25px_rgba(0,137,208,0.5)] transition hover:brightness-110"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </main>

      <SubpageFooter />
      <FloatingWhatsApp />
    </div>
  );
}
