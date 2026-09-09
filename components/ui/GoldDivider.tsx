"use client";

import { motion } from "framer-motion";

interface GoldDividerProps {
  align?: "left" | "center" | "right";
  className?: string;
}

export function GoldDivider({ align = "center", className = "" }: GoldDividerProps) {
  const alignmentClass =
    align === "left"
      ? "justify-start"
      : align === "right"
      ? "justify-end"
      : "justify-center";

  return (
    <div className={`flex items-center gap-3 my-4 ${alignmentClass} ${className}`}>
      <motion.span
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 48, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-[1px] bg-gradient-to-r from-transparent to-[#CBA653]"
      />
      <motion.div
        initial={{ scale: 0, rotate: -45 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-[#E0C173] text-sm select-none"
      >
        ✦
      </motion.div>
      <motion.span
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 48, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-[1px] bg-gradient-to-l from-transparent to-[#CBA653]"
      />
    </div>
  );
}
