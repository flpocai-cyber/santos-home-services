"use client";

import React from "react";
import Image from "next/image";
import { Phone, MapPin, Mail, MessageCircle } from "lucide-react";
import { translations, type Locale } from "@/lib/translations";

interface Props {
  currentLocale: Locale;
  onSelectLocale: (locale: Locale) => void;
}

export function Footer({ currentLocale, onSelectLocale }: Props) {
  const t = translations[currentLocale].footer;
  const currentYear = new Date().getFullYear();

  const services = [
    { label: "Finish Carpentry", href: "/services/finish-carpentry/" },
    { label: "Deck Construction & Repair", href: "/services/deck-construction/" },
    { label: "Fence Installation & Repair", href: "/services/fence-installation/" },
    { label: "Framing", href: "/services/framing/" },
    { label: "Interior & Exterior Painting", href: "/services/painting/" },
    { label: "Drywall Installation & Repair", href: "/services/drywall/" },
    { label: "Hardwood & Vinyl Flooring", href: "/services/flooring/" },
    { label: "Custom Tile Installation", href: "/services/tile-installation/" },
    { label: "Basement Remodeling", href: "/services/basement-remodeling/" },
    { label: "Bathroom Remodeling", href: "/services/bathroom-remodeling/" },
  ];

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#reviews", label: "Reviews" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="relative bg-[#001D2B] border-t border-white/10 pt-16 pb-24 text-sm text-[#DDF3FF]/80 md:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2">
            <div className="relative h-14 w-64 mb-4">
              <Image
                src="/images/SANTOS LOGO BRANCO.png"
                alt="Santos Home Services LLC"
                fill
                className="object-contain"
              />
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#0089D0]">
              {t.slogan}
            </p>
            <p className="mt-3 text-xs leading-relaxed text-[#DDF3FF]/70 max-w-sm">
              Delivering high-caliber finish carpentry, deck construction, sturdy fences, framing, painting and drywall solutions with uncompromising integrity.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://wa.me/14752516504"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#071820] text-[#25D366] transition hover:bg-[#25D366] hover:text-white"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href="tel:+14752516504"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#071820] text-[#0089D0] transition hover:bg-[#0089D0] hover:text-white"
                aria-label="Phone"
              >
                <Phone className="h-4 w-4" />
              </a>
              <a
                href="mailto:Santoshomeservices2026@gmail.com"
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
              {t.servicesTitle}
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              {services.map((s) => (
                <li key={s.href}>
                  <a href={s.href} className="transition hover:text-[#0089D0]">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white">
              {t.linksTitle}
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition hover:text-[#0089D0]">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Language */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white">
              {t.contactTitle}
            </h4>
            <div className="mt-4 space-y-2 text-xs">
              <p className="font-bold text-white">Santos Home Services LLC</p>
              <p className="flex items-start gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-[#0089D0] flex-shrink-0 mt-0.5" />
                <span>95 Main St Apt 2B<br />Danbury, CT 06810</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 text-[#0089D0] flex-shrink-0" />
                <a href="tel:+14752516504" className="font-bold text-white hover:text-[#0089D0]">
                  (475) 251-6504
                </a>
              </p>
              <p className="flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5 text-[#0089D0] flex-shrink-0" />
                <a
                  href="mailto:Santoshomeservices2026@gmail.com"
                  className="font-bold text-white hover:text-[#0089D0] break-all"
                >
                  Santoshomeservices2026@gmail.com
                </a>
              </p>
            </div>

            <h4 className="mt-6 text-xs font-extrabold uppercase tracking-widest text-white">
              {t.languageTitle}
            </h4>
            <div className="mt-3 flex items-center gap-2 text-xs">
              {(["en", "pt", "es"] as Locale[]).map((loc) => (
                <button
                  key={loc}
                  onClick={() => onSelectLocale(loc)}
                  className={`rounded px-2.5 py-1 font-bold uppercase transition ${
                    currentLocale === loc
                      ? "bg-[#0089D0] text-white"
                      : "bg-[#071820] text-[#DDF3FF]/60 hover:text-white"
                  }`}
                >
                  {loc === "en" ? "English" : loc === "pt" ? "Português" : "Español"}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="mt-14 border-t border-white/5 pt-8 text-center text-xs text-[#DDF3FF]/50 space-y-2">
          <p>© {currentYear} {t.rights}</p>
          <p className="max-w-3xl mx-auto text-[11px] leading-relaxed">
            {t.licenseDisclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
