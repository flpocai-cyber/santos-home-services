"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Award, CheckCircle, ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { ButtonPrimary } from "../ui/ButtonPrimary";
import { OFFICE_INFO } from "@/lib/data";

interface HeroProps {
  onOpenConsultation: () => void;
}

export function Hero({ onOpenConsultation }: HeroProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 15;
    const y = (clientY / window.innerHeight - 0.5) * 15;
    setMousePos({ x, y });
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0B1219] subtle-grid-bg"
    >
      {/* Luz ambiente radial sutil */}
      <div className="absolute inset-0 radial-gold-glow pointer-events-none" />

      {/* Grid arquitetônico decorativo sutil com parallax de mouse */}
      <motion.div
        animate={{ x: mousePos.x * 0.5, y: mousePos.y * 0.5 }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.5 }}
        className="absolute inset-0 pointer-events-none opacity-20"
      >
        <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-[#18232F]/50 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] rounded-full bg-[#CBA653]/10 blur-[120px]" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LADO ESQUERDO: CONTEÚDO EDITORIAL */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Ornamento dourado superior */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-5"
            >
              <span className="w-8 h-[1px] bg-[#CBA653]" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#E0C173]">
                Advocacia de Alta Performance
              </span>
              <span className="text-[#CBA653] text-xs">✦</span>
            </motion.div>

            {/* Título Principal Tipografia Editorial */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]"
            >
              Excelência Jurídica. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F0DFB4] to-[#CBA653]">
                Estratégia.
              </span>{" "}
              Resultados.
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 text-base sm:text-lg text-gray-300 font-light max-w-2xl leading-relaxed"
            >
              Atuação jurídica estratégica para proteger seus direitos, seu patrimônio e seus negócios com rigor técnico, discrição e experiência perante as mais altas cortes.
            </motion.p>

            {/* Botões de Ação */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <ButtonPrimary
                size="lg"
                variant="gold"
                onClick={onOpenConsultation}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Agende uma Consulta
              </ButtonPrimary>

              <a href="#areas">
                <ButtonPrimary size="lg" variant="outline">
                  Conheça Nossa Atuação
                </ButtonPrimary>
              </a>
            </motion.div>

            {/* Informações menores em linha */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-gray-400"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded bg-[#18232F] border border-[#CBA653]/30 flex items-center justify-center text-[#E0C173]">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block text-gray-400 text-[10px] uppercase">Central Telefônica</span>
                  <span className="text-white font-medium">{OFFICE_INFO.phone}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded bg-[#18232F] border border-[#CBA653]/30 flex items-center justify-center text-[#E0C173]">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block text-gray-400 text-[10px] uppercase">E-mail Institucional</span>
                  <span className="text-white font-medium truncate max-w-[140px] block">
                    {OFFICE_INFO.email}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded bg-[#18232F] border border-[#CBA653]/30 flex items-center justify-center text-[#E0C173]">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block text-gray-400 text-[10px] uppercase">Localização</span>
                  <span className="text-white font-medium">Itaim Bibi, SP</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* LADO DIREITO: IMAGEM CINEMATOGRÁFICA DO ADVOGADO COM GRADIENT MASK */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            {/* Moldura de fundo dourada sutil com rotação suave */}
            <motion.div
              animate={{
                x: -mousePos.x * 0.8,
                y: -mousePos.y * 0.8
              }}
              transition={{ type: "tween", ease: "easeOut", duration: 0.6 }}
              className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-black/90 border border-[#CBA653]/30"
            >
              {/* Imagem do Advogado Principal */}
              <Image
                src="/images/lawyer-hero.jpg"
                alt="Dr. Eduardo Valença - Advogado Fundador"
                fill
                priority
                className="object-cover object-top filter brightness-95 contrast-105"
              />

              {/* Gradient masks para fusão harmônica com o background escuro */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1219] via-transparent to-transparent opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B1219]/70 via-transparent to-transparent" />
              <div className="absolute inset-0 border border-[#CBA653]/20 rounded-2xl pointer-events-none" />

              {/* Etiqueta elegante no rodapé da foto */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-lg bg-[#101923]/80 backdrop-blur-md border border-white/10 shadow-lg flex items-center justify-between">
                <div>
                  <h4 className="text-white font-serif font-semibold text-sm">Dr. Eduardo Valença</h4>
                  <p className="text-[11px] text-[#E0C173]">Sócio Fundador • OAB/SP 134.821</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#CBA653]/10 border border-[#CBA653]/40 flex items-center justify-center text-[#CBA653]">
                  <Shield className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 7. ELEMENTOS DE DESTAQUE FLUTUANTES NO RODAPÉ DO HERO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          <div className="glass-panel glass-panel-hover p-5 rounded-xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#101923] border border-[#CBA653]/40 flex items-center justify-center text-[#E0C173] flex-shrink-0 shadow-md">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-lg font-serif font-bold text-white block">
                20+ Anos de Experiência
              </span>
              <span className="text-xs text-gray-400">
                Solidez jurídica e atuação combativa em tribunais.
              </span>
            </div>
          </div>

          <div className="glass-panel glass-panel-hover p-5 rounded-xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#101923] border border-[#CBA653]/40 flex items-center justify-center text-[#E0C173] flex-shrink-0 shadow-md">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-lg font-serif font-bold text-white block">
                95% de Casos Solucionados
              </span>
              <span className="text-xs text-gray-400">
                Histórico exemplar de decisões e acordos vantajosos.
              </span>
            </div>
          </div>

          <div className="glass-panel glass-panel-hover p-5 rounded-xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#101923] border border-[#CBA653]/40 flex items-center justify-center text-[#E0C173] flex-shrink-0 shadow-md">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <span className="text-lg font-serif font-bold text-white block">
                Atendimento Personalizado
              </span>
              <span className="text-xs text-gray-400">
                Acompanhamento direto e exclusivo por sócios titulares.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
