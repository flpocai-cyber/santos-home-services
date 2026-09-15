import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, CheckCircle2 } from "lucide-react";
import { SubpageHeader } from "@/components/layout/SubpageHeader";
import { SubpageFooter } from "@/components/layout/SubpageFooter";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { seoProjectsList } from "@/lib/projectsMap";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Completed Home Improvement & Remodeling Projects | Danbury, CT",
  description:
    "Browse real before and after transformations completed by Santos Home Services LLC across Danbury, Brookfield, Ridgefield and Fairfield County, CT.",
  alternates: {
    canonical: `${siteConfig.domain}/projects/`,
  },
  openGraph: {
    title: "Completed Renovation Projects | Santos Home Services LLC",
    description:
      "Real finished basements, custom composite decks, interior painting, retaining walls and bathroom renovations in Connecticut.",
    url: `${siteConfig.domain}/projects/`,
  },
};

export default function ProjectsIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Santos Home Services LLC - Completed Renovation Projects",
    description: "Portfolio of real finished projects in Connecticut.",
    url: `${siteConfig.domain}/projects/`,
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
            <span className="text-white font-medium">Projects</span>
          </nav>

          {/* Heading */}
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-[#006A9E]/20 px-3.5 py-1 text-xs font-bold tracking-widest text-[#0089D0] uppercase border border-[#0089D0]/30">
              REAL TRANSFORMATIONS
            </span>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl font-heading">
              Our Completed Renovation Projects in Connecticut
            </h1>
            <p className="mt-4 text-base text-[#DDF3FF]/80 sm:text-lg">
              Explore authentic craftsmanship delivered across Danbury, Brookfield, Ridgefield, and Fairfield County. Every project represents enduring structural quality and finish refinement.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {seoProjectsList.map((proj) => (
              <div
                key={proj.slug}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#071820]/90 transition-all duration-300 hover:-translate-y-2 hover:border-[#0089D0]/60 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
              >
                {/* Image */}
                <div className="relative h-64 w-full overflow-hidden bg-[#001D2B]">
                  <Image
                    src={proj.image}
                    alt={proj.title.en}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071820] via-transparent to-transparent opacity-80" />
                  
                  {proj.beforeImage && (
                    <div className="absolute top-4 right-4 rounded-full bg-[#001D2B]/90 px-3 py-1 text-[11px] font-bold tracking-wide text-[#0089D0] border border-[#0089D0]/30 backdrop-blur-md">
                      Before / After
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0089D0]">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{proj.location}</span>
                    </div>
                    <h2 className="mt-2 text-lg font-bold text-white transition-colors duration-200 group-hover:text-[#0089D0] font-heading">
                      {proj.title.en}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-[#DDF3FF]/75 line-clamp-2">
                      {proj.description.en}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                    <Link
                      href={`/projects/${proj.slug}/`}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0089D0] transition hover:text-white"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 rounded-3xl border border-[#0089D0]/30 bg-gradient-to-r from-[#071820] to-[#00283B] p-8 sm:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Have a Similar Project in Mind?
            </h2>
            <p className="mt-3 text-sm text-[#DDF3FF]/80 max-w-xl mx-auto">
              Contact licensed contractor Claudinei Santos for a personalized estimate and dependable service.
            </p>
            <div className="mt-6 flex flex-wrap justify-center items-center gap-4">
              <Link
                href="/contact/"
                className="rounded-full bg-gradient-to-r from-[#006A9E] to-[#0089D0] px-8 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(0,137,208,0.4)] transition hover:brightness-110"
              >
                Request an Estimate
              </Link>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-xs font-bold text-white transition hover:bg-white/10"
              >
                Call (475) 251-6504
              </a>
            </div>
          </div>
        </div>
      </main>

      <SubpageFooter />
      <FloatingWhatsApp />
    </div>
  );
}