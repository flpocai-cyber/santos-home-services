"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Calendar, ShieldCheck, Clock, MapPin } from "lucide-react";
import { ButtonPrimary } from "../ui/ButtonPrimary";
import { GoldDivider } from "../ui/GoldDivider";
import { OFFICE_INFO } from "@/lib/data";

interface CTAProps {
  onOpenConsultation: () => void;
}

export function CTA({ onOpenConsultation }: CTAProps) {
  const whatsappUrl = `https://wa.me/${OFFICE_INFO.whatsapp}?text=${encodeURIComponent(
    "Olá! Gostaria de falar com um advogado sobre meu caso."
  )}`;

  return (
    <section id="contato" className="py-24 bg-[#0B1219] relative overflow-hidden subtle-grid-bg border-t border-[#CBA653]/15">
      {/* Luz dourada central */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#CBA653]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#E0C173]">
            Canal Direto & Atendimento Reservado
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-3 leading-tight">
            Precisa de orientação jurídica especializada?
          </h2>

          <GoldDivider align="center" className="my-5" />

          <p className="text-base sm:text-lg text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
            Entre em contato com nossa equipe e receba uma análise aprofundada do seu caso sob sigilo absoluto e padrão de excelência.
          </p>

          {/* Botões de Conversão */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <ButtonPrimary
              size="lg"
              variant="gold"
              onClick={onOpenConsultation}
              icon={<Calendar className="w-4 h-4" />}
            >
              Agendar Consulta
            </ButtonPrimary>

            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <ButtonPrimary
                size="lg"
                variant="outline"
                icon={<MessageSquare className="w-4 h-4 text-emerald-400" />}
              >
                Falar no WhatsApp
              </ButtonPrimary>
            </a>
          </div>

          {/* Selos de Garantia / Confiança */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#CBA653]" />
              <span>Sigilo total garantido por lei</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#CBA653]" />
              <span>Resposta em até 2 horas úteis</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#CBA653]" />
              <span>Atendimento em todo o território nacional</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
