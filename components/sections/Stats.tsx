"use client";

import React from "react";
import { motion } from "framer-motion";
import { StatsCounter } from "../ui/StatsCounter";
import { STATS } from "@/lib/data";

export function Stats() {
  return (
    <section id="resultados" className="py-20 bg-[#101923] border-y border-[#CBA653]/15 relative overflow-hidden">
      {/* Luz dourada central suave */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-32 bg-[#CBA653]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-xl bg-[#18232F]/50 border border-white/5 hover:border-[#CBA653]/40 transition-all group"
            >
              <div className="text-4xl sm:text-5xl font-serif font-bold text-white group-hover:text-[#E0C173] transition-colors">
                <StatsCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <h3 className="font-serif text-base font-semibold text-[#CBA653] mt-2">
                {stat.label}
              </h3>
              <p className="text-xs text-gray-400 font-light mt-1.5 leading-relaxed">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
