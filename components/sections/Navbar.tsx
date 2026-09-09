"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { translations, type Locale } from "@/lib/translations";

interface Props {
  currentLocale: Locale;
  onSelectLocale: (locale: Locale) => void;
  onOpenQuote: () => void;
}

export function Navbar({ currentLocale, onSelectLocale, onOpenQuote }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[currentLocale].nav;

      useEffect(() => {
    const handleScroll = () => {
      const heroElem = document.getElementById("home");
      if (heroElem) {
        const rect = heroElem.getBoundingClientRect();
        // rect.bottom <= window.innerHeight means the pinned 320vh hero has completely finished its animation
        setScrolled(rect.bottom <= window.innerHeight + 10);
      } else {
        setScrolled(window.scrollY > 800);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Exact menu items matching the image:
  // HOME | SERVICES | BEFORE & AFTER | PROJECTS | ABOUT US | CONTACT
  const navLinks = [
    { href: "#home", label: currentLocale === "pt" ? "INÍCIO" : currentLocale === "es" ? "INICIO" : "HOME" },
    { href: "#services", label: currentLocale === "pt" ? "SERVIÇOS" : currentLocale === "es" ? "SERVICIOS" : "SERVICES" },
    {
      href: "#before-after",
      label:
        currentLocale === "pt"
          ? "ANTES & DEPOIS"
          : currentLocale === "es"
          ? "ANTES & DESPUÉS"
          : "BEFORE & AFTER",
    },
    { href: "#projects", label: currentLocale === "pt" ? "PROJETOS" : currentLocale === "es" ? "PROYECTOS" : "PROJECTS" },
    { href: "#about", label: currentLocale === "pt" ? "SOBRE NÓS" : currentLocale === "es" ? "NOSOTROS" : "ABOUT US" },
    { href: "#contact", label: currentLocale === "pt" ? "CONTATO" : currentLocale === "es" ? "CONTACTO" : "CONTACT" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-[#001D2B]/60 backdrop-blur-md border-b border-[#0089D0]/20 shadow-lg py-2"
          : "bg-transparent border-b border-transparent shadow-none py-3"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* LOGO (LEFT) - Invert colors slightly for clean white text on dark background */}
        <a href="#home" className="flex items-center group focus:outline-none flex-shrink-0 mr-6">
          <div className="relative h-14 w-60 sm:h-16 sm:w-72 lg:h-[70px] lg:w-[360px] transition-transform duration-200 group-hover:scale-[1.02]">
            <Image
              src="/images/SANTOS LOGO BRANCO.png"
              alt="Santos Home Services LLC"
              fill
              className="object-contain"
              priority
            />
          </div>
        </a>

        {/* CENTER / DESKTOP NAV - Exact match to image */}
        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-bold tracking-wider text-[#DDF3FF]/90 uppercase transition-colors duration-150 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* RIGHT CONTROLS: Pill Language Switcher + Cyan/Blue Pill Button */}
        <div className="hidden items-center gap-5 lg:flex flex-shrink-0 ml-6">
          {/* Pill Language Switcher */}
          <div className="flex items-center rounded-lg bg-[#071820] border border-white/10 p-1 text-xs font-extrabold tracking-wider shadow-inner">
            {(["en", "pt", "es"] as Locale[]).map((loc) => (
              <button
                key={loc}
                onClick={() => onSelectLocale(loc)}
                className={`rounded-md px-3 py-1 uppercase transition-all duration-150 ${
                  currentLocale === loc
                    ? "bg-[#0089D0] text-white shadow-md"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {loc}
              </button>
            ))}
          </div>

          {/* Pill CTA Button (GET A FREE QUOTE) */}
          <button
            onClick={onOpenQuote}
            className="rounded-full bg-[#0089D0] hover:bg-[#009bf0] px-6 py-2.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white shadow-lg shadow-[#0089D0]/30 transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            {t.getQuote}
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="flex items-center gap-3 lg:hidden">
          <div className="flex items-center rounded-md bg-[#071820] border border-white/10 p-1 text-[11px] font-bold">
            {(["en", "pt", "es"] as Locale[]).map((loc) => (
              <button
                key={loc}
                onClick={() => onSelectLocale(loc)}
                className={`rounded px-2 py-0.5 uppercase ${
                  currentLocale === loc ? "bg-[#0089D0] text-white" : "text-white/60"
                }`}
              >
                {loc}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg border border-white/10 bg-[#071820] p-2 text-white transition hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="border-b border-[#0089D0]/20 bg-[#001D2B]/98 px-6 py-6 lg:hidden backdrop-blur-2xl">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold tracking-wider text-white hover:text-[#0089D0]"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full rounded-full bg-[#0089D0] py-3.5 text-sm font-extrabold uppercase tracking-wider text-white shadow-xl"
              >
                {t.getQuote}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
