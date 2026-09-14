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
          {/* Left Visual: About portrait without card frame */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[580px] flex items-end justify-center">
              <div className="relative h-[520px] sm:h-[620px] lg:h-[680px] xl:h-[720px] w-full flex items-end justify-center">
                <Image
                  src="/about-branco.png"
                  alt="Santos Home Services LLC - Claudinei Santos"
                  fill
                  className="object-contain object-bottom drop-shadow-[0_25px_50px_rgba(0,0,0,0.7)]"
                  priority
                />
              </div>

              {/* Verified License Badge - Canto inferior direito */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-2 right-2 sm:bottom-6 sm:right-2 lg:bottom-4 lg:-right-4 z-20 flex items-center gap-3 rounded-2xl border border-[#00B050]/40 bg-[#001D2B]/95 px-4 py-3 shadow-[0_20px_45px_rgba(0,0,0,0.7)] backdrop-blur-md"
              >
                {/* Ícone Estilo Selo / Roseta Verde */}
                <div className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center">
                  <svg
                    viewBox="0 0 100 100"
                    className="absolute inset-0 h-full w-full text-[#00B050] drop-shadow-[0_2px_8px_rgba(0,176,80,0.4)]"
                    fill="currentColor"
                  >
                    {/* SVG Roseta Estrela de Selo Notarial / Certificado */}
                    <path d="M50 0 L58.7 8.3 L70.7 7.6 L76.9 17.9 L88.7 20.3 L91.4 32.1 L100 37.5 L98.7 49.5 L104 59.8 L98.7 70.1 L100 82.1 L91.4 87.5 L88.7 99.3 L76.9 101.7 L70.7 112 L58.7 111.3 L50 119.6 L41.3 111.3 L29.3 112 L23.1 101.7 L11.3 99.3 L8.6 87.5 L0 82.1 L1.3 70.1 L-4 59.8 L1.3 49.5 L0 37.5 L8.6 32.1 L11.3 20.3 L23.1 17.9 L29.3 7.6 L41.3 8.3 Z" transform="scale(0.8) translate(12, 10)" />
                    <circle cx="50" cy="50" r="38" fill="#001D2B" />
                    <circle cx="50" cy="50" r="35" fill="#00B050" />
                    <circle cx="50" cy="50" r="32" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="3,3" />
                  </svg>
                  {/* Escudo com Checkmark no centro */}
                  <svg
                    viewBox="0 0 24 24"
                    className="relative z-10 h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="#00B050" stroke="#ffffff" />
                    <polyline points="9 12 11 14 15 10" stroke="#ffffff" strokeWidth="2.5" />
                  </svg>
                </div>

                <div className="flex flex-col text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-black uppercase tracking-wider text-[#00D060]">
                      {currentLocale === "pt"
                        ? "Licença Verificada"
                        : currentLocale === "es"
                        ? "Licencia Verificada"
                        : "Verified License"}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-white tracking-tight">
                    HIC.0705313 • CT
                  </span>
                  <span className="text-[10px] font-medium text-[#DDF3FF]/70">
                    {currentLocale === "pt"
                      ? "Confirmado no BuildZoom"
                      : currentLocale === "es"
                      ? "Confirmado en BuildZoom"
                      : "BuildZoom Confirmed"}
                  </span>
                </div>
              </motion.div>
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
