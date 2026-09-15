import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin, CheckCircle2, ShieldCheck, Phone } from "lucide-react";
import { SubpageHeader } from "@/components/layout/SubpageHeader";
import { SubpageFooter } from "@/components/layout/SubpageFooter";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { seoProjectsList } from "@/lib/projectsMap";
import { siteConfig } from "@/lib/siteConfig";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return seoProjectsList.map((proj) => ({
    slug: proj.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = seoProjectsList.find((p) => p.slug === slug);
  if (!project) return {};

  const title = `${project.title.en} | Connecticut Renovation Project`;
  const description = `${project.description.en} Completed by Santos Home Services LLC, licensed Home Improvement Contractor (HIC.0705313).`;
  const url = `${siteConfig.domain}/projects/${project.slug}/`;

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
      images: [{ url: project.image, width: 1200, height: 675, alt: project.title.en }],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = seoProjectsList.find((p) => p.slug === slug);
  if (!project) notFound();

  const galleryImages =
    project.images && project.images.length > 0
      ? project.images
      : project.beforeImage && project.afterImage
      ? [project.beforeImage, project.afterImage]
      : [project.image];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "VisualArtwork",
        name: project.title.en,
        description: project.description.en,
        creator: {
          "@type": "HomeAndConstructionBusiness",
          name: siteConfig.name,
          url: siteConfig.domain,
        },
        locationCreated: {
          "@type": "Place",
          name: "Connecticut",
        },
        image: galleryImages.map((img) => `${siteConfig.domain}${img}`),
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
            name: "Projects",
            item: `${siteConfig.domain}/projects/`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: project.title.en,
            item: `${siteConfig.domain}/projects/${project.slug}/`,
          },
        ],
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
            <Link href="/projects/" className="hover:text-[#0089D0]">Projects</Link>
            <span>/</span>
            <span className="text-white font-medium">{project.title.en}</span>
          </nav>

          {/* Heading Block */}
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0089D0]">
              <MapPin className="h-4 w-4" />
              <span>Connecticut</span>
              <span>•</span>
              <span>{project.type.en}</span>
            </div>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl font-heading leading-tight">
              {project.title.en}
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[#DDF3FF]/80 leading-relaxed">
              {project.description.en}
            </p>
          </div>

          {/* Project Gallery */}
          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {galleryImages.map((imgUrl, idx) => (
                <div
                  key={imgUrl + idx}
                  className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-[#071820] shadow-xl"
                >
                  <Image
                    src={imgUrl}
                    alt={`${project.title.en} photo ${idx + 1}`}
                    fill
                    className="object-cover"
                    priority={idx === 0}
                  />
                  {project.beforeImage && imgUrl === project.beforeImage && (
                    <div className="absolute top-4 left-4 rounded-md bg-[#001D2B]/90 px-3 py-1 text-xs font-bold text-amber-400 border border-amber-400/30">
                      BEFORE
                    </div>
                  )}
                  {project.afterImage && imgUrl === project.afterImage && (
                    <div className="absolute top-4 left-4 rounded-md bg-[#001D2B]/90 px-3 py-1 text-xs font-bold text-[#00B050] border border-[#00B050]/30">
                      AFTER
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Highlights & Details */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 rounded-3xl border border-white/10 bg-[#071820]/90 p-8">
              <h2 className="text-xl font-bold font-heading text-white">
                Key Project Highlights
              </h2>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-3 text-sm text-[#DDF3FF]/85">
                    <CheckCircle2 className="h-4 w-4 text-[#0089D0] flex-shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <Link
                  href={`/services/${project.serviceSlug}/`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0089D0] hover:text-white transition"
                >
                  <span>Learn more about this service</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <div className="flex items-center gap-2 text-xs text-[#00B050] font-semibold">
                  <ShieldCheck className="h-4 w-4" />
                  <span>CT License HIC.0705313</span>
                </div>
              </div>
            </div>

            {/* Quote Card */}
            <div className="lg:col-span-4 rounded-3xl border border-[#0089D0]/30 bg-[#00283B]/50 p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white font-heading">
                  Want Similar Results?
                </h3>
                <p className="mt-3 text-sm text-[#DDF3FF]/80 leading-relaxed">
                  Santos Home Services LLC provides clear estimates, clean jobsites, and dependable timelines across Connecticut.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                <Link
                  href="/contact/"
                  className="block w-full text-center rounded-full bg-gradient-to-r from-[#006A9E] to-[#0089D0] py-3.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(0,137,208,0.4)] transition hover:brightness-110"
                >
                  Get a Free Estimate
                </Link>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="flex items-center justify-center gap-2 w-full text-center rounded-full border border-white/20 bg-white/5 py-3 text-xs font-bold text-white transition hover:bg-white/10"
                >
                  <Phone className="h-3.5 w-3.5 text-[#0089D0]" />
                  <span>Call (475) 251-6504</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SubpageFooter />
      <FloatingWhatsApp />
    </div>
  );
}