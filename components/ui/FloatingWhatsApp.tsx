"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  const whatsappUrl =
    "https://wa.me/14752516504?text=Hello!%20I%20found%20Santos%20Home%20Services%20LLC%20through%20your%20website%20and%20I%27d%20like%20to%20request%20a%20quote%20for%20my%20project.";

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-24 right-5 z-40 md:bottom-8 md:right-8">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Santos Home Services LLC"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#20ba59] hover:shadow-[0_0_25px_rgba(37,211,102,0.6)] focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75"></span>
          <span className="relative inline-flex h-4 w-4 rounded-full bg-white"></span>
        </span>
        <MessageCircle className="h-7 w-7 transition-transform duration-300 group-hover:rotate-12" />
        <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-[#071820] px-3 py-1.5 text-xs font-semibold text-white shadow-xl border border-[#006A9E]/30 md:group-hover:block">
          Chat on WhatsApp • (475) 251-6504
        </span>
      </a>
    </aside>
  );
}
