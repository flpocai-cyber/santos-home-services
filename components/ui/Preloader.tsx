"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scale } from "lucide-react";

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B1219]"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-lg bg-[#18232F] border border-[#CBA653]/60 flex items-center justify-center text-[#E0C173] mb-4 shadow-2xl">
              <Scale className="w-8 h-8 text-[#CBA653]" />
            </div>
            <h2 className="font-serif text-xl tracking-[0.2em] font-bold text-white uppercase">
              Valença & Associados
            </h2>
            <span className="text-[10px] tracking-[0.3em] text-[#CBA653] uppercase mt-1">
              Advocacia Estratégica
            </span>

            {/* Linha dourada animada */}
            <div className="w-40 h-[2px] bg-white/10 rounded-full mt-6 overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
                className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#CBA653] to-transparent"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
