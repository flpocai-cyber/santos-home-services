"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on non-touch desktop screens
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest("[data-cursor]");
      if (cursorTarget) {
        const text = cursorTarget.getAttribute("data-cursor") || "";
        setCursorText(text);
        setIsHovered(true);
      } else {
        setCursorText("");
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full text-center text-[10px] font-bold tracking-wider text-white"
        animate={{
          x: position.x - (isHovered ? 36 : 8),
          y: position.y - (isHovered ? 36 : 8),
          width: isHovered ? 72 : 16,
          height: isHovered ? 72 : 16,
          backgroundColor: isHovered ? "rgba(0, 137, 208, 0.85)" : "rgba(0, 137, 208, 0.5)",
          backdropFilter: isHovered ? "blur(4px)" : "none",
          border: isHovered ? "1px solid rgba(221, 243, 255, 0.8)" : "1px solid rgba(0, 137, 208, 0.3)",
        }}
        transition={{
          type: "spring",
          damping: 28,
          stiffness: 350,
          mass: 0.5,
        }}
      >
        {isHovered && cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="select-none font-bold text-white tracking-widest uppercase text-[11px]"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
}
