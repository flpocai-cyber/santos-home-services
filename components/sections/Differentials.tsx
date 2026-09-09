"use client";

import React from "react";
import { motion } from "framer-motion";
import { GoldDivider } from "../ui/GoldDivider";
import { AnimatedIcon } from "../ui/AnimatedIcon";
import { DIFFERENTIALS } from "@/lib/data";

export function Differentials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 bg-[#101923] relative overflow-hidden">
      {/* Luz ambiente dourada sutil */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#CBA653]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#CBA653]">
            Nossos Valores & Pilares
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-2">
            Por que escolher nosso escritório?
          </h2>
          <GoldDivider align="center" className="my-4" />
          <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
            Combinamos tradição jurídica e pensamento inovador para proporcionar segurança absoluta em decisões de alta complexidade.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {DIFFERENTIALS.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="p-8 rounded-xl bg-[#18232F]/70 hover:bg-[#1f2d3d] border border-white/5 hover:border-[#CBA653]/40 transition-all duration-300 shadow-lg shadow-black/40 group relative overflow-hidden"
            >
              {/* Linha dourada decorativa superior */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#CBA653]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="w-12 h-12 rounded-lg bg-[#101923] border border-[#CBA653]/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#CBA653] transition-all duration-300">
                <AnimatedIcon name={item.iconName} size={24} animateType="pulse" />
              </div>

              <h3 className="font-serif text-lg font-semibold text-white group-hover:text-[#E0C173] transition-colors mb-3">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
