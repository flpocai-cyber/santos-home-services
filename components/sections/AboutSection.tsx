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
          {/* Left Visual: Frame 25 team work in progress */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative h-[380px] sm:h-[480px] w-full overflow-hidden rounded-3xl border border-white/15 shadow-2xl">
              <Image
                src="/hero-sequence/frame-25.jpg"
                alt="Santos Home Services LLC - Team at Work"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001D2B] via-transparent to-transparent opacity-60" />

              {/* Floating Badge - Caixa branca com letras pretas para destacar o logo */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-black/10 bg-white/95 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-300 hover:bg-white">
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 flex-shrink-0">
                    <Image
                      src="/images/santos home services llc.png"
                      alt="Santos Home Services LLC Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold text-black tracking-tight font-heading">
                      Santos Home Services LLC
                    </h4>
                    <p className="text-xs font-semibold text-gray-700">
                      95 Main St Apt 2B, Danbury, CT
                    </p>
                  </div>
                </div>
              </div>
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

            <p className="mt-4 text-base leading-relaxed text-[#DDF3FF]/85 sm:text-lg">
              {t.p2}
            </p>

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
