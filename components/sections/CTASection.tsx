"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, MessageSquare, Phone, ArrowRight } from "lucide-react";
import { translations, type Locale } from "@/lib/translations";

interface Props {
  currentLocale: Locale;
  onOpenQuote: () => void;
}

export function CTASection({ currentLocale, onOpenQuote }: Props) {
  const t = translations[currentLocale].cta;
  const whatsappUrl =
    "https://wa.me/14752516504?text=Hello!%20I%20found%20Santos%20Home%20Services%20LLC%20through%20your%20website%20and%20I%27d%20like%20to%20request%20a%20quote%20for%20my%20project.";

  return (
    <section className="relative bg-[#001D2B] py-24 sm:py-32 overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,137,208,0.15),transparent_70%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl font-heading leading-tight">
          {t.title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-[#DDF3FF]/85 leading-relaxed">
          {t.subtitle}
        </p>

        {/* Buttons Grid */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenQuote}
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#006A9E] to-[#0089D0] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-xl shadow-[#006A9E]/40 transition-all hover:scale-105 active:scale-95"
          >
            <span>{t.btnQuote}</span>
            <ArrowRight className="h-4 w-4" />
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-xl transition-all hover:scale-105 active:scale-95 hover:bg-[#20ba59]"
          >
            <MessageCircle className="h-4 w-4" />
            <span>{t.btnWhatsApp}</span>
          </a>

          <a
            href="sms:+14752516504"
            className="flex items-center gap-2 rounded-full border border-[#0089D0] bg-[#0089D0]/20 px-6 py-4 text-sm font-bold uppercase tracking-wider text-[#DDF3FF] transition-all hover:bg-[#0089D0] hover:text-white"
          >
            <MessageSquare className="h-4 w-4" />
            <span>{t.btnText}</span>
          </a>

          <a
            href="tel:+14752516504"
            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-white/15"
          >
            <Phone className="h-4 w-4 text-[#0089D0]" />
            <span>{t.btnCall}</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
