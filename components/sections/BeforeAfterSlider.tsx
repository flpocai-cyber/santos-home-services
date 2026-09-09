"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MoveHorizontal } from "lucide-react";
import { translations, type Locale } from "@/lib/translations";

interface Props {
  currentLocale: Locale;
}

export function BeforeAfterSlider({ currentLocale }: Props) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const t = translations[currentLocale].beforeAfter;

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="before-after" className="relative bg-[#071820] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full bg-[#006A9E]/20 px-3.5 py-1 text-xs font-bold tracking-widest text-[#0089D0] uppercase border border-[#0089D0]/30">
            {t.tag}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl font-heading">
            {t.title}
          </h2>
          <p className="mt-4 text-base text-[#DDF3FF]/80 sm:text-lg">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Interactive Slider Container */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="mt-16 mx-auto max-w-5xl"
        >
          <div
            ref={containerRef}
            data-cursor="DRAG"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative h-[340px] sm:h-[480px] lg:h-[580px] w-full select-none overflow-hidden rounded-3xl border border-white/15 shadow-2xl cursor-ew-resize bg-[#001D2B]"
          >
            {/* RIGHT / AFTER IMAGE (Base) */}
            <div className="absolute inset-0">
              <Image
                src="/images/services/depois.jpg"
                alt="Santos Home Services - After Renovation"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-6 right-6 rounded-lg bg-[#006A9E]/90 px-3.5 py-1.5 text-xs font-extrabold tracking-wider text-white shadow-lg backdrop-blur-md">
                {t.afterLabel}
              </div>
            </div>

            {/* LEFT / BEFORE IMAGE (Clipped overlay) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="relative h-full w-[100vw] max-w-5xl">
                <Image
                  src="/images/services/antes.jpg"
                  alt="Santos Home Services - Before Renovation"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute top-6 left-6 rounded-lg bg-[#B91C1C]/90 px-3.5 py-1.5 text-xs font-extrabold tracking-wider text-white shadow-lg backdrop-blur-md">
                  {t.beforeLabel}
                </div>
              </div>
            </div>

            {/* VERTICAL DIVIDER BAR */}
            <div
              className="absolute top-0 bottom-0 z-20 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.7)]"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Central handle button */}
              <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-[#0089D0] text-white shadow-xl border-2 border-white transition-transform hover:scale-110 active:scale-95">
                <MoveHorizontal className="h-5 w-5" />
              </div>
            </div>

            {/* Instruction badge */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 rounded-full bg-[#001D2B]/85 px-4 py-1.5 text-xs font-bold tracking-wider text-[#DDF3FF] border border-[#0089D0]/30 shadow-lg backdrop-blur-md">
              ↔ {t.dragLabel}
            </div>
          </div>

          {/* Description footnotes */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 text-xs sm:text-sm text-[#DDF3FF]/80">
            <div className="rounded-xl border border-white/10 bg-[#001D2B]/60 p-4">
              <span className="font-bold text-[#f87171] uppercase">{t.beforeLabel}:</span> {t.beforeDesc}
            </div>
            <div className="rounded-xl border border-[#0089D0]/30 bg-[#001D2B]/60 p-4">
              <span className="font-bold text-[#0089D0] uppercase">{t.afterLabel}:</span> {t.afterDesc}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
