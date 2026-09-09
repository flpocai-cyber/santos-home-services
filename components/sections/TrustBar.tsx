"use client";

import React from "react";
import { ShieldCheck, MapPin, Phone, Award } from "lucide-react";
import { translations, type Locale } from "@/lib/translations";

interface Props {
  currentLocale: Locale;
}

export function TrustBar({ currentLocale }: Props) {
  const t = translations[currentLocale].trustBar;

  return (
    <section className="relative z-30 border-y border-[#0089D0]/20 bg-[#071820] py-4 text-xs font-semibold text-[#DDF3FF]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-[#0089D0]" />
          <span>{t.licensed}</span>
        </div>

        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-[#0089D0]" />
          <span>{t.location}</span>
        </div>

        <div className="flex items-center gap-2">
          <Award className="h-4 w-4 text-[#0089D0]" />
          <span className="text-white font-bold">{t.score}</span>
        </div>

        <a
          href="tel:+14752516504"
          className="flex items-center gap-2 text-[#0089D0] transition hover:text-white"
        >
          <Phone className="h-4 w-4" />
          <span className="font-bold text-white">{t.phone}</span>
        </a>
      </div>
    </section>
  );
}
