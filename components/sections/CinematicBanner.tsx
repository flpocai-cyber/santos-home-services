"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ButtonPrimary } from "../ui/ButtonPrimary";
import { GoldDivider } from "../ui/GoldDivider";
import { MessageSquareQuote } from "lucide-react";

interface CinematicBannerProps {
  onOpenConsultation: () => void;
}

export function CinematicBanner({ onOpenConsultation }: CinematicBannerProps) {
  return (
    <section className="relative py-28 overflow-hidden flex items-center justify-center">
      {/* Imagem de Fundo Cinematográfica (Tribunal / Arquitetura Nobre) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cinematic-court.jpg"
          alt="Tribunal de Justiça e Advocacia de Excelência"
          fill
          className="object-cover object-center filter brightness-40 contrast-110"
        />
        {/* Overlay escuro em degradê sofisticado */}
        <div className="absolute inset-0 bg-[#0B1219]/85 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1219] via-transparent to-[#0B1219]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#18232F] border border-[#CBA653]/40 text-[#E0C173] mb-6 shadow-xl">
            <MessageSquareQuote className="w-6 h-6 text-[#CBA653]" />
          </div>

          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#E0C173] block mb-3">
            Compromisso Inegociável
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
            “Defender seus direitos exige conhecimento, estratégia e experiência.”
          </h2>

          <GoldDivider align="center" className="my-6" />

          <p className="text-sm sm:text-base text-gray-300 font-light max-w-2xl mx-auto mb-8">
            Em momentos decisivos, a escolha do corpo jurídico determina o destino do seu patrimônio e a continuidade dos seus negócios.
          </p>

          <ButtonPrimary
            size="lg"
            variant="gold"
            onClick={onOpenConsultation}
          >
            Fale com um Advogado
          </ButtonPrimary>
        </motion.div>
      </div>
    </section>
  );
}
