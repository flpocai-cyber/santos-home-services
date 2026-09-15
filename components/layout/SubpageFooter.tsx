"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Mail, MessageCircle, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export function SubpageFooter() {
  const currentYear = new Date().getFullYear();

  const services = [
    { label: "Finish Carpentry", href: "/services/finish-carpentry/" },
    { label: "Deck Construction & Repair", href: "/services/deck-construction/" },
    { label: "Fence Installation & Repair", href: "/services/fence-installation/" },
    { label: "Structural Framing", href: "/services/framing/" },
    { label: "Interior & Exterior Painting", href: "/services/painting/" },
    { label: "Drywall Hanging & Finishing", href: "/services/drywall/" },
    { label: "Flooring Installation", href: "/services/flooring/" },
    { label: "Custom Tile Installation", href: "/services/tile-installation/" },
    { label: "Basement Remodeling", href: "/services/basement-remodeling/" },
    { label: "Bathroom Remodeling", href: "/services/bathroom-remodeling/" },
  ];

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about/", label: "About Us" },
    { href: "/services/", label: "All Services" },
    { href: "/projects/", label: "Completed Projects" },
    { href: "/contact/", label: "Request a Free Quote" },
  ];

  return (
    <footer className="relative bg-[#001D2B] border-t border-white/10 pt-16 pb-24 text-sm text-[#DDF3FF]/80 md:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block relative h-14 w-64 mb-4">
              <Image
                src="/images/SANTOS LOGO BRANCO.png"
                alt="Santos Home Services LLC"
                fill
                className="object-contain"
              />
            </Link>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#0089D0]">
              YOUR HOME. OUR CRAFT. BUILT TO LAST.
            </p>
            <p className="mt-3 text-xs leading-relaxed text-[#DDF3FF]/70 max-w-sm">
              Licensed Connecticut Home Improvement Contractor ({siteConfig.license}). Delivering high-caliber finish carpentry, decks, fences, framing, painting, drywall and full basement renovations with uncompromising integrity.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={`https://wa.me/14752516504`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#071820] text-[#25D366] transition hover:bg-[#25D366] hover:text-white"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#071820] text-[#0089D0] transition hover:bg-[#0089D0] hover:text-white"
                aria-label="Phone"
              >
                <Phone className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#071820] text-[#0089D0] transition hover:bg-[#0089D0] hover:text-white"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white">
              CORE SERVICES
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="transition hover:text-[#0089D0]">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white">
              NAVIGATION
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition hover:text-[#0089D0]">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white">
              CONTACT INFO
            </h4>
            <div className="mt-4 space-y-2 text-xs">
              <p className="font-bold text-white">{siteConfig.name}</p>
              <p className="flex items-start gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-[#0089D0] flex-shrink-0 mt-0.5" />
                <span>{siteConfig.address.street}<br />{siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 text-[#0089D0] flex-shrink-0" />
                <a href={`tel:${siteConfig.phoneRaw}`} className="font-bold text-white hover:text-[#0089D0]">
                  {siteConfig.phone}
                </a>
              </p>
              <p className="flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5 text-[#0089D0] flex-shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-bold text-white hover:text-[#0089D0] break-all"
                >
                  {siteConfig.email}
                </a>
              </p>
              <p className="flex items-center gap-1.5 pt-2 text-[#00B050] font-semibold">
                <ShieldCheck className="h-4 w-4 flex-shrink-0" />
                <span>CT License: {siteConfig.license}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#DDF3FF]/60 gap-4">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <p>Serving Danbury, Brookfield, Ridgefield & Fairfield County, Connecticut.</p>
        </div>
      </div>
    </footer>
  );
}
