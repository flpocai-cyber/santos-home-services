"use client";

import React from "react";
import { translations, type Locale } from "@/lib/translations";

interface Props {
  currentLocale: Locale;
}

export function ProcessSection({ currentLocale }: Props) {
  const t = translations[currentLocale].process;

  return (
    <section className="relative bg-[#071820] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-[#006A9E]/20 px-3.5 py-1 text-xs font-bold tracking-widest text-[#0089D0] uppercase border border-[#0089D0]/30">
            {t.tag}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl font-heading">
            {t.title}
          </h2>
          <p className="mt-4 text-base text-[#DDF3FF]/80 sm:text-lg">
            {t.subtitle}
          </p>
        </div>

        {/* 4 Steps with connecting line */}
        <div className="relative mt-20">
          {/* Desktop Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 hidden h-0.5 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#0089D0]/40 to-transparent lg:block" />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {t.steps.map((step) => (
              <div
                key={step.number}
                className="group relative rounded-2xl border border-white/10 bg-[#001D2B] p-8 text-center transition-all duration-300 hover:border-[#0089D0] hover:-translate-y-2 hover:shadow-2xl z-10"
              >
                {/* Step Circle */}
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#006A9E] text-white font-extrabold text-lg shadow-lg border border-[#0089D0] transition-transform duration-300 group-hover:scale-110">
                  {step.number}
                </div>

                <h3 className="mt-6 text-sm font-bold uppercase tracking-wider text-white font-heading">
                  {step.title}
                </h3>

                <p className="mt-3 text-xs leading-relaxed text-[#DDF3FF]/75">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
