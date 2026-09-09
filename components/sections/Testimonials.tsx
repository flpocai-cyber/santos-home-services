"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { GoldDivider } from "../ui/GoldDivider";
import { TESTIMONIALS } from "@/lib/data";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play suave a cada 7 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 bg-[#0B1219] relative overflow-hidden subtle-grid-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#CBA653]">
            Reconhecimento & Confiança
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-2">
            O que dizem nossos clientes
          </h2>
          <GoldDivider align="center" className="my-4" />
        </div>

        {/* Carrossel de Depoimento */}
        <div className="relative">
          <div className="min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full rounded-2xl bg-[#18232F]/80 border border-[#CBA653]/30 p-8 sm:p-12 shadow-2xl relative"
              >
                <Quote className="absolute top-6 right-8 w-12 h-12 text-[#CBA653]/15 pointer-events-none" />

                {/* Estrelas Douradas */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#E0C173] text-[#E0C173]" />
                  ))}
                  <span className="text-xs text-gray-400 ml-2">5.0 / 5.0</span>
                </div>

                {/* Conteúdo */}
                <p className="font-serif text-lg sm:text-2xl text-white font-light italic leading-relaxed mb-8">
                  “{current.content}”
                </p>

                {/* Autor */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-white/10 pt-6 gap-2">
                  <div>
                    <h4 className="font-serif text-base font-bold text-white">
                      {current.name}
                    </h4>
                    <p className="text-xs text-gray-400">
                      {current.role} • <span className="text-[#E0C173]">{current.company}</span>
                    </p>
                  </div>
                  <div className="text-[11px] px-3 py-1 rounded bg-[#101923] text-gray-300 border border-white/10 self-start sm:self-auto">
                    {current.area}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controles de Navegação */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-[#18232F] border border-[#CBA653]/40 text-[#E0C173] hover:bg-[#CBA653] hover:text-[#0B1219] flex items-center justify-center transition-colors shadow-md"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentIndex ? "w-8 bg-[#CBA653]" : "w-2 bg-white/20"
                  }`}
                  aria-label={`Ir para depoimento ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-[#18232F] border border-[#CBA653]/40 text-[#E0C173] hover:bg-[#CBA653] hover:text-[#0B1219] flex items-center justify-center transition-colors shadow-md"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
