"use client";

import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { OFFICE_INFO } from "@/lib/data";

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${OFFICE_INFO.whatsapp}?text=${encodeURIComponent(
    "Olá! Gostaria de agendar uma consulta e falar com um advogado especialista da Valença & Associados."
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip elegante */}
      <motion.div
        initial={{ opacity: 0, x: 10, scale: 0.95 }}
        whileHover={{ opacity: 1, x: 0, scale: 1 }}
        className="hidden md:flex items-center gap-2 mr-3 px-3.5 py-2 rounded-md bg-[#101923] border border-[#CBA653]/40 text-xs font-medium text-white shadow-xl shadow-black/60 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>Fale com um Advogado no WhatsApp</span>
      </motion.div>

      {/* Botão circular verde nobre/escuro com detalhes dourados */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar conosco via WhatsApp"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white shadow-2xl shadow-emerald-950/80 border border-[#CBA653]/50 transition-colors duration-300"
      >
        {/* Pulse discreto */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/20 animate-pulse pointer-events-none" />
        <MessageSquare className="w-6 h-6 fill-white/10 text-white relative z-10" />
      </motion.a>
    </div>
  );
}
