import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, ShieldCheck, Phone, HelpCircle } from "lucide-react";
import { SubpageHeader } from "@/components/layout/SubpageHeader";
import { SubpageFooter } from "@/components/layout/SubpageFooter";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { servicesData } from "@/lib/servicesData";
import { seoProjectsList } from "@/lib/projectsMap";
import { siteConfig } from "@/lib/siteConfig";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((svc) => ({
    slug: svc.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return {};

  const title = `${service.name} Danbury CT | Santos Home Services LLC`;
  const description = `${service.shortDesc} Licensed Home Improvement Contractor (HIC.0705313) serving Danbury, Brookfield, Ridgefield and Fairfield County, CT.`;
  const url = `${siteConfig.domain}/services/${service.slug}/`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: service.image, width: 1200, height: 675, alt: service.name }],
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) notFound();

  const relatedProjects = seoProjectsList.filter(
    (p) => p.category === service.relatedProjectCategory || p.serviceSlug === service.slug
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteConfig.domain}/services/${service.slug}/#service`,
        name: service.name,
        serviceType: service.name,
        description: service.longDesc,
        provider: {
          "@type": "HomeAndConstructionBusiness",
          name: siteConfig.name,
          telephone: siteConfig.phoneRaw,
          url: siteConfig.domain,
          address: {
            "@type": "PostalAddress",
            streetAddress: siteConfig.address.street,
            addressLocality: siteConfig.address.city,
            addressRegion: siteConfig.address.state,
            postalCode: siteConfig.address.zip,
            addressCountry: siteConfig.address.country,
          },
        },
        areaServed: siteConfig.serviceAreas.map((area) => ({
          "@type": "AdministrativeArea",
          name: area,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.domain,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${siteConfig.domain}/services/`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.name,
            item: `${siteConfig.domain}/services/${service.slug}/`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
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
            <Link href="/services/" className="hover:text-[#0089D0]">Services</Link>
            <span>/</span>
            <span className="text-white font-medium">{service.name}</span>
          </nav>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block rounded-full bg-[#006A9E]/20 px-3.5 py-1 text-xs font-bold tracking-widest text-[#0089D0] uppercase border border-[#0089D0]/30">
                DANBURY & FAIRFIELD COUNTY, CT
              </span>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl font-heading leading-tight">
                {service.name} in Danbury, CT
              </h1>
              <p className="mt-5 text-base sm:text-lg text-[#DDF3FF]/80 leading-relaxed">
                {service.longDesc}
              </p>

              {/* CT License & Trust strip */}
              <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-semibold text-[#DDF3FF]/80">
                <div className="flex items-center gap-2 rounded-lg bg-[#071820] px-3.5 py-2 border border-white/10">
                  <ShieldCheck className="h-4 w-4 text-[#00B050]" />
                  <span>CT License: {siteConfig.license}</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-[#071820] px-3.5 py-2 border border-white/10">
                  <CheckCircle2 className="h-4 w-4 text-[#0089D0]" />
                  <span>BuildZoom Score 91 (Top 37% in CT)</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact/"
                  className="rounded-full bg-gradient-to-r from-[#006A9E] to-[#0089D0] px-7 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(0,137,208,0.4)] transition hover:brightness-110"
                >
                  Request a Free Quote
                </Link>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-xs font-bold text-white transition hover:bg-white/10"
                >
                  <Phone className="h-3.5 w-3.5 text-[#0089D0]" />
                  <span>Call {siteConfig.phone}</span>
                </a>
              </div>
            </div>

            {/* Service Main Image */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 shadow-[0_25px_50px_rgba(0,0,0,0.7)]">
                <Image
                  src={service.image}
                  alt={`${service.name} Danbury CT`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Scope of Work & Features */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="rounded-3xl border border-white/10 bg-[#071820]/90 p-8">
              <h2 className="text-xl font-bold font-heading text-white">
                What We Deliver
              </h2>
              <ul className="mt-6 space-y-3.5">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-[#DDF3FF]/85">
                    <CheckCircle2 className="h-4 w-4 text-[#0089D0] flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#071820]/90 p-8">
              <h2 className="text-xl font-bold font-heading text-white">
                Why Choose Santos Home Services
              </h2>
              <ul className="mt-6 space-y-3.5">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-sm text-[#DDF3FF]/85">
                    <CheckCircle2 className="h-4 w-4 text-[#00B050] flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <div className="mt-24">
              <div className="flex items-end justify-between mb-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#0089D0]">
                    PORTFOLIO SHOWCASE
                  </span>
                  <h2 className="mt-2 text-2xl sm:text-3xl font-bold font-heading text-white">
                    Related Projects in Connecticut
                  </h2>
                </div>
                <Link
                  href="/projects/"
                  className="hidden sm:inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0089D0] hover:text-white transition"
                >
                  <span>View All Projects</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedProjects.slice(0, 3).map((proj) => (
                  <Link
                    key={proj.slug}
                    href={`/projects/${proj.slug}/`}
                    className="group overflow-hidden rounded-2xl border border-white/10 bg-[#071820] transition hover:-translate-y-1.5 hover:border-[#0089D0]/60"
                  >
                    <div className="relative h-48 w-full">
                      <Image
                        src={proj.image}
                        alt={proj.title.en}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-[11px] font-bold uppercase text-[#0089D0]">
                        Connecticut
                      </span>
                      <h3 className="mt-1 text-base font-bold text-white font-heading">
                        {proj.title.en}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Frequently Asked Questions */}
          {service.faqs.length > 0 && (
            <div className="mt-24 max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0089D0]">
                  FREQUENTLY ASKED QUESTIONS
                </span>
                <h2 className="mt-2 text-2xl sm:text-3xl font-bold font-heading text-white">
                  Common Questions About {service.name}
                </h2>
              </div>

              <div className="space-y-4">
                {service.faqs.map((faq) => (
                  <div
                    key={faq.question}
                    className="rounded-2xl border border-white/10 bg-[#071820]/80 p-6"
                  >
                    <h3 className="flex items-start gap-3 text-base font-bold text-white">
                      <HelpCircle className="h-5 w-5 text-[#0089D0] flex-shrink-0 mt-0.5" />
                      <span>{faq.question}</span>
                    </h3>
                    <p className="mt-3 text-sm text-[#DDF3FF]/80 leading-relaxed pl-8">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom CTA */}
          <div className="mt-24 rounded-3xl border border-[#0089D0]/30 bg-gradient-to-r from-[#071820] to-[#00283B] p-8 sm:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Ready to Start Your {service.name} Project?
            </h2>
            <p className="mt-3 text-sm text-[#DDF3FF]/80 max-w-xl mx-auto">
              Speak directly with Claudinei Santos for professional guidance, straightforward pricing, and reliable execution.
            </p>
            <div className="mt-6 flex flex-wrap justify-center items-center gap-4">
              <Link
                href="/contact/"
                className="rounded-full bg-gradient-to-r from-[#006A9E] to-[#0089D0] px-8 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(0,137,208,0.4)] transition hover:brightness-110"
              >
                Schedule an Estimate
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