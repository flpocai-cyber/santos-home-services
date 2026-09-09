"use client";

import React from "react";
import { Phone, MessageSquare, MessageCircle } from "lucide-react";
import type { Locale } from "@/lib/translations";

interface Props {
  locale: Locale;
}

export function MobileContactBar({ locale }: Props) {
  const whatsappUrl =
    "https://wa.me/14752516504?text=Hello!%20I%20found%20Santos%20Home%20Services%20LLC%20through%20your%20website%20and%20I%27d%20like%20to%20request%20a%20quote%20for%20my%20project.";

  const labels = {
    en: { call: "CALL", text: "TEXT", wa: "WHATSAPP" },
    pt: { call: "LIGAR", text: "SMS", wa: "WHATSAPP" },
    es: { call: "LLAMAR", text: "TEXTO", wa: "WHATSAPP" },
  }[locale];

  return (
    <nav aria-label="Mobile contact navigation" className="fixed bottom-0 left-0 right-0 z-40 grid grid-cols-3 border-t border-[#0089D0]/20 bg-[#001D2B]/95 backdrop-blur-xl md:hidden">
      <a
        href="tel:+14752516504"
        className="flex flex-col items-center justify-center py-2.5 text-[#DDF3FF] transition hover:bg-[#006A9E]/20 active:scale-95"
      >
        <Phone className="h-5 w-5 text-[#0089D0]" />
        <span className="mt-1 text-[10px] font-bold tracking-wider">{labels.call}</span>
      </a>

      <a
        href="sms:+14752516504?body=Hi,%20I%27d%20like%20to%20request%20a%20quote%20from%20Santos%20Home%20Services%20LLC."
        className="flex flex-col items-center justify-center border-x border-[#0089D0]/20 py-2.5 text-[#DDF3FF] transition hover:bg-[#006A9E]/20 active:scale-95"
      >
        <MessageSquare className="h-5 w-5 text-[#0089D0]" />
        <span className="mt-1 text-[10px] font-bold tracking-wider">{labels.text}</span>
      </a>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center py-2.5 text-[#25D366] transition hover:bg-[#25D366]/10 active:scale-95"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="mt-1 text-[10px] font-bold tracking-wider text-white">{labels.wa}</span>
      </a>
    </nav>
  );
}
