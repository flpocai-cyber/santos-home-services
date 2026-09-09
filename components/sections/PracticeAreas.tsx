"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Check, ShieldCheck } from "lucide-react";
import { GoldDivider } from "../ui/GoldDivider";
import { AnimatedIcon } from "../ui/AnimatedIcon";
import { ButtonPrimary } from "../ui/ButtonPrimary";
import { PRACTICE_AREAS, PracticeArea } from "@/lib/data";

interface PracticeAreasProps {
  onSelectAreaForConsultation: (areaTitle: string) => void;
}

export function PracticeAreas({ onSelectAreaForConsultation }: PracticeAreasProps) {
  const [selectedArea, setSelectedArea] = useState<PracticeArea | null>(null);

  return (
    <section id="areas" className="py-24 bg-[#0B1219] relative overflow-hidden subtle-grid-bg">
      {/* Luz ambiente dourada sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#CBA653]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#CBA653]">
            Especialidades Jurídicas
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-2">
            Áreas de Atuação
          </h2>
          <GoldDivider align="center" className="my-4" />
          <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
            Atuação técnica especializada e multidisciplinar para proteger os interesses de clientes corporativos e individuais de alto padrão com soluções sob medida.
          </p>
        </div>

        {/* Grid com os 10 Cards de Áreas */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRACTICE_AREAS.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-xl bg-[#18232F]/80 hover:bg-[#1f2d3d] border border-white/5 hover:border-[#CBA653]/70 p-7 transition-all duration-300 flex flex-col justify-between shadow-xl shadow-black/50 overflow-hidden cursor-pointer"
              onClick={() => setSelectedArea(area)}
            >
              {/* Brilho dourado percorrendo a borda no hover */}
              <div className="absolute inset-0 border border-[#CBA653]/0 group-hover:border-[#CBA653]/50 rounded-xl transition-all duration-500 pointer-events-none" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#CBA653]/10 to-transparent rounded-bl-full pointer-events-none group-hover:from-[#CBA653]/25 transition-all duration-500" />

              <div>
                {/* Ícone com microanimação */}
                <div className="w-14 h-14 rounded-lg bg-[#101923] border border-[#CBA653]/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#CBA653] transition-all duration-300 shadow-md">
                  <AnimatedIcon name={area.iconName} size={26} animateType="tilt" />
                </div>

                <span className="text-[11px] uppercase tracking-wider text-[#E0C173] font-semibold block mb-1">
                  {area.subtitle}
                </span>

                <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#E0C173] transition-colors leading-tight">
                  {area.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-gray-300 leading-relaxed font-light line-clamp-3">
                  {area.shortDesc}
                </p>
              </div>

              {/* Botão Saiba Mais com Seta Animada */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#CBA653] font-semibold">
                <span>Saiba Mais</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL DE DETALHES DA ÁREA SELECIONADA */}
      <AnimatePresence>
        {selectedArea && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArea(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl bg-[#101923] border border-[#CBA653]/40 rounded-2xl shadow-2xl p-6 sm:p-8 z-10"
            >
              <button
                onClick={() => setSelectedArea(null)}
                className="absolute top-5 right-5 text-gray-400 hover:text-white p-1"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-lg bg-[#18232F] border border-[#CBA653]/40 flex items-center justify-center">
                  <AnimatedIcon name={selectedArea.iconName} size={28} animateType="pulse" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#E0C173] font-semibold">
                    {selectedArea.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    {selectedArea.title}
                  </h3>
                </div>
              </div>

              <GoldDivider align="left" className="my-4" />

              <p className="text-sm text-gray-300 leading-relaxed font-light mb-6">
                {selectedArea.fullDesc}
              </p>

              <div className="mb-8">
                <h4 className="text-xs uppercase tracking-wider text-[#CBA653] font-semibold mb-3">
                  Principais Frentes de Atuação:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedArea.keyPoints.map((point, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-2.5 rounded bg-[#18232F] border border-white/5 text-xs text-gray-200"
                    >
                      <Check className="w-4 h-4 text-[#E0C173] flex-shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 items-center justify-between pt-5 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <ShieldCheck className="w-4 h-4 text-[#CBA653]" />
                  <span>Atuação preventiva e contenciosa especializada</span>
                </div>
                <ButtonPrimary
                  size="md"
                  variant="gold"
                  onClick={() => {
                    const areaTitle = selectedArea.title;
                    setSelectedArea(null);
                    onSelectAreaForConsultation(areaTitle);
                  }}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Consultar Especialista
                </ButtonPrimary>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
