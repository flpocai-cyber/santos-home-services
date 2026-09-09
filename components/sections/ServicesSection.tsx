"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Hammer, Grid, Shield, Layers, Paintbrush, Square, Disc3 } from "lucide-react";
import { translations, type Locale } from "@/lib/translations";

interface Props {
  currentLocale: Locale;
  onOpenQuote: (service?: string) => void;
}

export function ServicesSection({ currentLocale, onOpenQuote }: Props) {
  const t = translations[currentLocale].services;

  const iconMap: Record<string, React.ReactNode> = {
    Hammer: <Hammer className="h-5 w-5" />,
    Grid: <Grid className="h-5 w-5" />,
    Shield: <Shield className="h-5 w-5" />,
    Layers: <Layers className="h-5 w-5" />,
    Paintbrush: <Paintbrush className="h-5 w-5" />,
    Square: <Square className="h-5 w-5" />,
    Disc3: <Disc3 className="h-5 w-5" />,
  };

  return (
    <section id="services" className="relative bg-[#001D2B] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full bg-[#006A9E]/20 px-3.5 py-1 text-xs font-bold tracking-widest text-[#0089D0] uppercase border border-[#0089D0]/30">
            {t.tag}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl font-heading">
            {t.title}
          </h2>
          <p className="mt-4 text-base text-[#DDF3FF]/80 sm:text-lg">
            {t.subtitle}
          </p>
        </motion.div>

        {/* 6 Premium Cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              data-cursor="VIEW"
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#071820]/90 transition-all duration-300 hover:-translate-y-2 hover:border-[#0089D0]/60 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
            >
              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden bg-[#001D2B]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071820] via-transparent to-transparent opacity-80" />

                {/* Index badge */}
                <div className="absolute top-4 left-4 rounded-lg bg-[#001D2B]/85 px-2.5 py-1 text-xs font-extrabold tracking-wider text-[#0089D0] border border-[#0089D0]/30 backdrop-blur-md">
                  0{index + 1}
                </div>

                {/* Floating Icon */}
                <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#006A9E] text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  {iconMap[item.icon] || <Hammer className="h-5 w-5" />}
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h3 className="text-xl font-bold text-white transition-colors duration-200 group-hover:text-[#0089D0] font-heading">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#DDF3FF]/75">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5">
                  <button
                    onClick={() => onOpenQuote(item.title)}
                    className="group/btn flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0089D0] transition hover:text-white"
                  >
                    <span>{t.learnMore}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-1.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
