"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GoldDivider } from "../ui/GoldDivider";
import { StatsCounter } from "../ui/StatsCounter";
import { Award, CheckCircle2, FileCheck2 } from "lucide-react";

export function About() {
  return (
    <section id="sobre" className="py-24 bg-[#101923] relative overflow-hidden">
      {/* Detalhe de iluminação sutil de fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#CBA653]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LADO ESQUERDO: COMPOSIÇÃO EDITORIAL DE IMAGENS (REFERÊNCIA VISUAL) */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4 relative">
              {/* Imagem Superior 1: Biblioteca Jurídica Clássica */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-2xl border border-[#CBA653]/30 group"
              >
                <Image
                  src="/images/about-library.jpg"
                  alt="Biblioteca Jurídica Valença"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1219]/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-xs text-white/90 font-serif italic">
                  Acervo doutrinário próprio
                </div>
              </motion.div>

              {/* Imagem Superior 2: Martelo da Justiça */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="relative h-64 sm:h-72 rounded-xl overflow-hidden shadow-2xl border border-[#CBA653]/30 group mt-6"
              >
                <Image
                  src="/images/about-gavel.jpg"
                  alt="Martelo da Justiça - Símbolo de Autoridade"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1219]/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-xs text-white/90 font-serif italic">
                  Rigor processual
                </div>
              </motion.div>

              {/* Imagem Inferior Larga: Escritório Corporativo */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="col-span-2 relative h-52 sm:h-60 rounded-xl overflow-hidden shadow-2xl border border-[#CBA653]/30 group"
              >
                <Image
                  src="/images/about-firm.jpg"
                  alt="Sede Valença & Associados em São Paulo"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B1219]/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <span className="text-xs uppercase tracking-widest text-[#E0C173] font-semibold">
                    Infraestrutura de Alto Padrão
                  </span>
                  <p className="text-sm font-serif text-white">
                    Sede Executiva • Faria Lima, São Paulo
                  </p>
                </div>
              </motion.div>

              {/* Selo Central Dourado */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-[#18232F] border-2 border-[#CBA653] shadow-2xl flex flex-col items-center justify-center text-center p-1 z-20">
                <span className="text-[9px] uppercase tracking-wider text-gray-300">Tradição</span>
                <span className="text-xs font-serif font-bold text-[#E0C173]">DESDE</span>
                <span className="text-xs font-bold text-white">2004</span>
              </div>
            </div>
          </div>

          {/* LADO DIREITO: TEXTO INSTITUCIONAL & CONTADORES */}
          <div className="lg:col-span-6 flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#CBA653]">
                Institucional & Filosofia
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-2 leading-snug">
                Experiência, estratégia e compromisso com cada cliente.
              </h2>

              <GoldDivider align="left" className="my-5" />

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
                Fundado sob a premissa de que grandes causas exigem soluções individualizadas e inteligência estratégica profunda, a <strong>Valença & Associados</strong> consolidou-se como referência na proteção de patrimônio, gestão de riscos corporativos e defesa incisiva perante as Cortes Superiores de Justiça.
              </p>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light mt-4">
                Compreendemos que o cenário jurídico contemporâneo demanda mais do que conhecimento da lei: exige visão de negócios, antecipação analítica de cenários e postura ética irretocável para salvaguardar o que há de mais valioso para você e sua organização.
              </p>

              {/* Assinatura do Advogado Fundador */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-lg font-semibold text-white">Dr. Eduardo Valença</h4>
                  <p className="text-xs text-[#E0C173] uppercase tracking-wider">Sócio Fundador & Diretor Geral</p>
                </div>
                <div className="font-serif text-2xl italic text-[#CBA653]/60 select-none">
                  E. Valença
                </div>
              </div>

              {/* CARDS COM ANIMAÇÃO NUMÉRICA (0 -> 95% e 0 -> 20+) */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-lg bg-[#18232F] border border-[#CBA653]/30 flex items-center gap-4 shadow-lg hover:border-[#CBA653] transition-all">
                  <div className="w-12 h-12 rounded-md bg-[#101923] border border-[#CBA653]/40 flex items-center justify-center text-[#E0C173]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#E0C173]">
                      <StatsCounter value={95} suffix="%" />
                    </div>
                    <span className="text-xs text-gray-300 uppercase tracking-wider">
                      Casos Bem-Sucedidos
                    </span>
                  </div>
                </div>

                <div className="p-5 rounded-lg bg-[#18232F] border border-[#CBA653]/30 flex items-center gap-4 shadow-lg hover:border-[#CBA653] transition-all">
                  <div className="w-12 h-12 rounded-md bg-[#101923] border border-[#CBA653]/40 flex items-center justify-center text-[#E0C173]">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#E0C173]">
                      <StatsCounter value={20} suffix="+" />
                    </div>
                    <span className="text-xs text-gray-300 uppercase tracking-wider">
                      Anos de Experiência
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
