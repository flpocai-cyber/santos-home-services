"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { StatsCounter } from "@/components/ui/StatsCounter";
import { translations, type Locale } from "@/lib/translations";

interface Props {
  currentLocale: Locale;
}

export function AboutSection({ currentLocale }: Props) {
  const t = translations[currentLocale].about;

  return (
    <section id="about" className="relative bg-[#001D2B] py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Visual: About portrait */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            <div className="relative h-[440px] sm:h-[540px] lg:h-[580px] w-full max-w-[480px] overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-white/5 to-[#001D2B]/80 shadow-2xl backdrop-blur-sm flex items-end justify-center">
              <Image
                src="/about-branco.png"
                alt="Santos Home Services LLC"
                fill
                className="object-contain object-bottom drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>

          {/* Right Text & Numbers */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block rounded-full bg-[#006A9E]/20 px-3.5 py-1 text-xs font-bold tracking-widest text-[#0089D0] uppercase border border-[#0089D0]/30">
              {t.tag}
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl font-heading leading-tight whitespace-pre-line">
              {t.title}
            </h2>

            <p className="mt-6 text-base leading-relaxed text-[#DDF3FF]/85 sm:text-lg">
              {t.p1}
            </p>

            {t.p2 && (
              <p className="mt-4 text-base leading-relaxed text-[#DDF3FF]/85 sm:text-lg">
                {t.p2}
              </p>
            )}

            {t.p3 && (
              <p className="mt-4 text-base leading-relaxed text-[#DDF3FF]/85 sm:text-lg">
                {t.p3}
              </p>
            )}

            {t.p4 && (
              <p className="mt-4 text-base leading-relaxed text-[#DDF3FF]/85 sm:text-lg font-medium text-white">
                {t.p4}
              </p>
            )}

            {/* Three Number Counters with Animated Growth */}
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <div>
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0089D0] font-heading block">
                  <StatsCounter value={parseInt(t.stat1Number) || 7} duration={1800} />
                </span>
                <span className="block mt-1 text-xs font-bold uppercase tracking-wider text-white">
                  {t.stat1Label}
                </span>
              </div>

              <div>
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0089D0] font-heading block">
                  <StatsCounter value={91} duration={2000} />
                </span>
                <span className="block mt-1 text-xs font-bold uppercase tracking-wider text-white">
                  {t.stat2Label}
                </span>
              </div>

              <div>
                <span className="text-xl sm:text-2xl font-bold text-[#DDF3FF] font-heading block">
                  {t.stat3Text}
                </span>
                <span className="block mt-1 text-xs font-bold uppercase tracking-wider text-white">
                  {t.stat3Label}
                </span>
              </div>
            </div>

            <p className="mt-4 text-[11px] text-[#DDF3FF]/50 italic">
              {t.footnote}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
