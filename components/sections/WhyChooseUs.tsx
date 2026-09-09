"use client";

import React from "react";
import { Award, Clock, CheckCircle, Sliders, MapPin, HeartHandshake } from "lucide-react";
import { translations, type Locale } from "@/lib/translations";

interface Props {
  currentLocale: Locale;
}

export function WhyChooseUs({ currentLocale }: Props) {
  const t = translations[currentLocale].whyChoose;

  const iconMap: Record<string, React.ReactNode> = {
    Award: <Award className="h-6 w-6 text-[#0089D0]" />,
    Clock: <Clock className="h-6 w-6 text-[#0089D0]" />,
    CheckCircle: <CheckCircle className="h-6 w-6 text-[#0089D0]" />,
    Sliders: <Sliders className="h-6 w-6 text-[#0089D0]" />,
    MapPin: <MapPin className="h-6 w-6 text-[#0089D0]" />,
    HeartHandshake: <HeartHandshake className="h-6 w-6 text-[#0089D0]" />,
  };

  return (
    <section className="relative bg-[#001D2B] py-24 sm:py-32">
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

        {/* 6 Minimalist Luxury Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-white/10 bg-[#071820]/70 p-8 transition-all duration-300 hover:border-[#0089D0]/50 hover:bg-[#071820] hover:-translate-y-1.5 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#001D2B] border border-[#0089D0]/30 transition-colors group-hover:border-[#0089D0]">
                {iconMap[item.icon]}
              </div>

              <h3 className="mt-6 text-lg font-bold uppercase tracking-wider text-white font-heading">
                {item.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[#DDF3FF]/75">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
