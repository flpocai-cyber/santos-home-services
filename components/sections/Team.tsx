"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Award, Shield } from "lucide-react";
import { LinkedinIcon } from "../ui/SocialIcons";
import { GoldDivider } from "../ui/GoldDivider";
import { LAWYERS } from "@/lib/data";

interface TeamProps {
  onOpenConsultation: () => void;
}

export function Team({ onOpenConsultation }: TeamProps) {
  return (
    <section id="equipe" className="py-24 bg-[#0B1219] relative overflow-hidden subtle-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#CBA653]">
            Corpo Jurídico
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-2">
            Nossa Equipe
          </h2>
          <GoldDivider align="center" className="my-4" />
          <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
            Advogados sócios com sólida formação acadêmica nos principais centros jurídicos do país e do mundo, aliada a décadas de prática contenciosa e consultiva.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LAWYERS.map((lawyer, index) => (
            <motion.div
              key={lawyer.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="rounded-xl bg-[#18232F] border border-white/5 hover:border-[#CBA653]/60 shadow-xl overflow-hidden group transition-all duration-300 flex flex-col justify-between"
            >
              {/* Foto com Zoom e Overlay no Hover */}
              <div className="relative h-80 w-full overflow-hidden bg-[#101923]">
                <Image
                  src={lawyer.image}
                  alt={lawyer.name}
                  fill
                  className="object-cover object-top filter brightness-95 contrast-105 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#18232F] via-transparent to-transparent opacity-90" />

                {/* Ícones de Contato Flutuantes no Hover */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <a
                    href={`mailto:${lawyer.email}`}
                    className="w-8 h-8 rounded-full bg-[#101923]/90 border border-[#CBA653]/60 text-[#E0C173] hover:bg-[#CBA653] hover:text-[#0B1219] flex items-center justify-center transition-colors shadow-lg"
                    aria-label={`E-mail de ${lawyer.name}`}
                  >
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={lawyer.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-[#101923]/90 border border-[#CBA653]/60 text-[#E0C173] hover:bg-[#CBA653] hover:text-[#0B1219] flex items-center justify-center transition-colors shadow-lg"
                    aria-label={`LinkedIn de ${lawyer.name}`}
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Badge OAB */}
                <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-[#101923]/80 backdrop-blur-sm border border-[#CBA653]/30 text-[10px] text-[#E0C173] font-mono">
                  {lawyer.oab}
                </div>
              </div>

              {/* Informações Textuais */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#E0C173] transition-colors">
                    {lawyer.name}
                  </h3>
                  <p className="text-xs text-[#CBA653] font-medium mt-1 leading-snug">
                    {lawyer.role}
                  </p>
                  <p className="text-xs text-gray-300 font-light mt-3 leading-relaxed line-clamp-4">
                    {lawyer.bio}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/10">
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold block mb-2">
                    Especialidades Chave:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {lawyer.specialties.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] px-2 py-0.5 rounded bg-[#101923] text-gray-300 border border-white/5"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
