"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonPrimaryProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "gold" | "outline" | "navy";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

export function ButtonPrimary({
  children,
  icon,
  variant = "gold",
  size = "md",
  className = "",
  onClick,
  ...props
}: ButtonPrimaryProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3.5 text-sm",
    lg: "px-8 py-4 text-base"
  }[size];

  const variantClasses = {
    gold: "gold-shimmer-btn text-[#0B1219] shadow-lg shadow-[#CBA653]/15 hover:shadow-[#CBA653]/30 hover:brightness-105 active:scale-[0.98]",
    outline:
      "bg-transparent border border-[#CBA653]/50 text-[#E0C173] hover:bg-[#CBA653]/10 hover:border-[#CBA653] shadow-sm active:scale-[0.98]",
    navy: "bg-[#18232F] text-[#FFFFFF] border border-white/10 hover:border-[#CBA653]/40 hover:bg-[#1f2d3d] active:scale-[0.98]"
  }[variant];

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center gap-2.5 rounded font-medium tracking-wider uppercase transition-all duration-300 select-none ${sizeClasses} ${variantClasses} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <span className="transition-transform group-hover:translate-x-1">{icon}</span>}
      </span>
    </motion.button>
  );
}
