"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Award, AlertCircle, ExternalLink } from "lucide-react";
import { translations, type Locale } from "@/lib/translations";

interface Props {
  currentLocale: Locale;
}

export function LicenseSection({ currentLocale }: Props) {
  const t = translations[currentLocale].license;

  return (
    <section className="relative bg-[#071820] py-20 sm:py-28 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* License Block */}
          <div className="rounded-3xl border border-[#0089D0]/30 bg-[#001D2B]/90 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#006A9E] text-white">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold tracking-widest text-[#0089D0] uppercase">
                  {t.tag}
                </span>
                <h3 className="text-xl font-extrabold text-white font-heading">
                  {t.title}
                </h3>
              </div>
            </div>

            <div className="mt-6 space-y-2 border-y border-white/10 py-5 text-sm">
              <p className="text-white font-bold">{t.company}</p>
              <p className="text-[#DDF3FF]/80">{t.address}</p>
              <p className="text-[#0089D0] font-semibold">{t.status}</p>
            </div>

            <div className="mt-5 flex items-start gap-2 text-xs text-[#DDF3FF]/60">
              <AlertCircle className="h-4 w-4 text-[#0089D0] flex-shrink-0 mt-0.5" />
              <p>{t.note}</p>
            </div>
          </div>

          {/* BuildZoom Block */}
          <div className="rounded-3xl border border-[#0089D0]/30 bg-[#001D2B]/90 p-8 sm:p-10 shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0089D0] text-white">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold tracking-widest text-[#0089D0] uppercase">
                    BuildZoom
                  </span>
                  <h3 className="text-xl font-extrabold text-white font-heading">
                    {t.buildzoomTitle}
                  </h3>
                </div>
              </div>

              {/* BuildZoom Score Pill */}
              <div className="text-center rounded-2xl bg-[#006A9E]/30 border border-[#0089D0] px-4 py-2">
                <span className="text-3xl font-black text-white font-heading">{t.scoreValue}</span>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-[#0089D0]">SCORE</span>
              </div>
            </div>

            <div className="mt-6 border-y border-white/10 py-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#DDF3FF]/70">
                {t.rankTitle}
              </span>
              <p className="mt-1 text-base font-bold text-white">
                {t.rankValue}
              </p>
            </div>

            <div className="mt-5 flex items-start gap-2 text-xs text-[#DDF3FF]/60">
              <AlertCircle className="h-4 w-4 text-[#0089D0] flex-shrink-0 mt-0.5" />
              <p>{t.bzDisclaimer}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
