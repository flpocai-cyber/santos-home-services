"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export function SubpageHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/services/", label: "SERVICES" },
    { href: "/projects/", label: "PROJECTS" },
    { href: "/about/", label: "ABOUT US" },
    { href: "/contact/", label: "CONTACT" },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-40 bg-[#001D2B]/90 backdrop-blur-md border-b border-[#0089D0]/20 shadow-lg py-3">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* LOGO */}
        <Link href="/" className="flex items-center group focus:outline-none flex-shrink-0 mr-6">
          <div className="relative h-12 w-52 sm:h-14 sm:w-64 lg:h-16 lg:w-72 transition-transform duration-200 group-hover:scale-[1.02]">
            <Image
              src="/images/SANTOS LOGO BRANCO.png"
              alt="Santos Home Services LLC"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3.5 py-2 text-[13px] font-bold uppercase tracking-wider text-white transition-all duration-150 hover:text-[#0089D0]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA & PHONE */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="flex items-center gap-2 text-xs font-bold text-white hover:text-[#0089D0] transition"
          >
            <Phone className="h-3.5 w-3.5 text-[#0089D0]" />
            <span>{siteConfig.phone}</span>
          </a>
          <Link
            href="/contact/"
            className="rounded-full bg-gradient-to-r from-[#006A9E] to-[#0089D0] px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(0,137,208,0.4)] transition hover:brightness-110"
          >
            Get a Quote
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex lg:hidden h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#001D2B]/98 px-6 py-5 backdrop-blur-xl animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-bold uppercase tracking-wider text-white hover:text-[#0089D0]"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-3">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-center gap-2 text-sm font-bold text-[#0089D0]"
              >
                <Phone className="h-4 w-4" />
                <span>{siteConfig.phone}</span>
              </a>
              <Link
                href="/contact/"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center rounded-xl bg-[#0089D0] py-3 text-xs font-extrabold uppercase tracking-wider text-white"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
