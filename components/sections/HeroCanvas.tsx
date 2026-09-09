"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Award, MapPin, ArrowRight } from "lucide-react";
import { translations, type Locale } from "@/lib/translations";

interface Props {
  currentLocale: Locale;
  onOpenQuote: () => void;
}

const TOTAL_FRAMES = 50;

export function HeroCanvas({ currentLocale, onOpenQuote }: Props) {
  const pinSectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Animation lerp state
  const currentFrameRef = useRef(1);
  const targetFrameRef = useRef(1);
  const animFrameIdRef = useRef<number | null>(null);

  const t = translations[currentLocale].hero;

  // Render a specific frame onto canvas with cover fit
  const renderFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[frameIndex - 1];
    if (!img || !img.complete) return;

    const w = canvas.width;
    const h = canvas.height;

    // Object fit cover math
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = w / h;

    let dw = w;
    let dh = h;
    let dx = 0;
    let dy = 0;

    if (canvasRatio > imgRatio) {
      dh = w / imgRatio;
      dy = (h - dh) / 2;
    } else {
      dw = h * imgRatio;
      dx = (w - dw) / 2;
    }

    ctx.clearRect(0, 0, w, h);
    ctx.drawImage(img, dx, dy, dw, dh);
  }, []);

  // Smooth lerp loop using requestAnimationFrame
  const updateLoop = useCallback(() => {
    const diff = targetFrameRef.current - currentFrameRef.current;
    if (Math.abs(diff) > 0.04) {
      currentFrameRef.current += diff * 0.16; // high-refresh cinematic interpolation
      const frameToDraw = Math.min(
        TOTAL_FRAMES,
        Math.max(1, Math.round(currentFrameRef.current))
      );
      renderFrame(frameToDraw);
    }
    animFrameIdRef.current = requestAnimationFrame(updateLoop);
  }, [renderFrame]);

  // Preload all 50 frames
  useEffect(() => {
    let count = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new window.Image();
      const numStr = i < 10 ? `0${i}` : `${i}`;
      img.src = `/hero-sequence/frame-${numStr}.jpg`;

      img.onload = () => {
        count++;
        setLoadedCount(count);
        if (count === 1) {
          renderFrame(1);
        }
        if (count >= 10) {
          setIsLoading(false);
        }
      };
      img.onerror = () => {
        count++;
        setLoadedCount(count);
      };
      images.push(img);
    }

    imagesRef.current = images;
    animFrameIdRef.current = requestAnimationFrame(updateLoop);

    return () => {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, [renderFrame, updateLoop]);

  // Handle Canvas Resize for High-DPI screens
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;

      const ctx = canvas.getContext("2d");
      if (ctx) ctx.imageSmoothingEnabled = true;

      renderFrame(Math.round(currentFrameRef.current));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [renderFrame]);

  // PINNED SCROLL LISTENER: Pin the hero until scroll reaches end of 50 frames
  useEffect(() => {
    const handleScroll = () => {
      if (!pinSectionRef.current) return;

      const rect = pinSectionRef.current.getBoundingClientRect();
      const scrollableDistance = pinSectionRef.current.offsetHeight - window.innerHeight;

      if (scrollableDistance <= 0) return;

      // Distance scrolled inside this pinned container
      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / scrollableDistance));
      setScrollProgress(progress);

      // Map progress 0 -> 1 exactly to frame 1 -> 50
      const target = Math.round(progress * (TOTAL_FRAMES - 1)) + 1;
      targetFrameRef.current = target;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const progressPercent = Math.min(100, Math.round((loadedCount / TOTAL_FRAMES) * 100));

  return (
    // Outer scroll container: 320vh height gives ample smooth scroll travel for 50 frames
    <div
      id="home"
      ref={pinSectionRef}
      className="relative w-full h-[320vh] bg-[#001D2B]"
    >
      {/* Sticky Hero Viewport: fixed to screen while scrolling through the 320vh */}
      <section
        className="sticky top-0 left-0 h-screen w-full overflow-hidden bg-[#001D2B] select-none"
      >
        {/* 50-Frame Interactive Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
          style={{ opacity: isLoading ? 0.4 : 1 }}
        />

        {/* Dark / Navy Sophisticated Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001D2B]/95 via-[#001D2B]/70 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001D2B] via-transparent to-[#001D2B]/50 pointer-events-none" />

        {/* Preloader Overlay */}
        {isLoading && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-[#001D2B] transition-opacity duration-500">
            <div className="relative h-20 w-52 animate-pulse mb-6">
              <img
                src="/images/SANTOS LOGO.png"
                alt="Loading Santos Home Services"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="w-48 h-1.5 bg-[#071820] rounded-full overflow-hidden border border-[#006A9E]/30">
              <div
                className="h-full bg-gradient-to-r from-[#006A9E] to-[#0089D0] transition-all duration-200"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="mt-3 text-xs font-semibold tracking-wider text-[#DDF3FF]/70">
              Loading High-Res Renovation Sequence: {progressPercent}%
            </span>
          </div>
        )}

        {/* HERO CONTENT: Content smoothly eases slightly back to put full spotlight on the finished home as scroll reaches frame 50 */}
        <div
          className="relative z-20 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 pt-24 pb-16 sm:px-8 lg:px-12 transition-opacity duration-300"
          style={{
            opacity: Math.max(0.2, 1 - scrollProgress * 0.75),
            transform: `translateY(-${scrollProgress * 40}px)`,
          }}
        >
          <div className="max-w-xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#0089D0]/40 bg-[#001D2B]/85 px-3.5 py-1.5 backdrop-blur-md"
            >
              <span className="h-2 w-2 rounded-full bg-[#0089D0] animate-pulse" />
              <span className="text-xs font-bold tracking-widest text-[#DDF3FF] uppercase">
                {t.badge}
              </span>
            </motion.div>

            {/* Large Title with Line Entrances */}
            <div className="mt-5 space-y-1">
              <motion.h1
                key={currentLocale}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl font-heading leading-[1.08]"
              >
                {currentLocale === "pt" ? (
                  <>
                    SUA CASA. <br />
                    NOSSA ARTE. <br />
                    <span className="text-[#0089D0] bg-gradient-to-r from-[#0089D0] to-[#DDF3FF] bg-clip-text text-transparent">
                      FEITO PARA DURAR.
                    </span>
                  </>
                ) : currentLocale === "es" ? (
                  <>
                    SU HOGAR. <br />
                    NUESTRO ARTE. <br />
                    <span className="text-[#0089D0] bg-gradient-to-r from-[#0089D0] to-[#DDF3FF] bg-clip-text text-transparent">
                      HECHO PARA DURAR.
                    </span>
                  </>
                ) : (
                  <>
                    YOUR HOME. <br />
                    OUR CRAFT. <br />
                    <span className="text-[#0089D0] bg-gradient-to-r from-[#0089D0] to-[#DDF3FF] bg-clip-text text-transparent">
                      BUILT TO LAST.
                    </span>
                  </>
                )}
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              key={`sub-${currentLocale}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-6 text-base font-normal text-[#DDF3FF]/85 sm:text-lg lg:text-xl leading-relaxed max-w-xl"
            >
              {t.subheadline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={onOpenQuote}
                className="group flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#006A9E] to-[#0089D0] px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-xl shadow-[#006A9E]/30 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,137,208,0.6)] active:scale-95"
              >
                <span>{t.btnQuote}</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <a
                href="#services"
                className="rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold tracking-wider text-white backdrop-blur-md transition-all duration-300 hover:bg-white/15 hover:border-white/50"
              >
                {t.btnServices}
              </a>
            </motion.div>

            {/* Trust Checkmarks */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-10 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm font-medium text-[#DDF3FF]/90 border-t border-white/10 pt-6"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-[#0089D0]" />
                <span>{t.trust1}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="h-4 w-4 text-[#0089D0]" />
                <span>{t.trust2}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-[#0089D0]" />
                <span>{t.trust3}</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Interactive Scroll Frame Progress Bar Indicator */}
        <div className="pointer-events-none absolute bottom-8 right-8 z-20 flex flex-col items-end">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[10px] font-bold tracking-widest text-[#0089D0] uppercase">
              RENOVATION PROGRESS
            </span>
            <span className="text-xs font-bold text-white">
              {Math.min(TOTAL_FRAMES, Math.max(1, Math.round(scrollProgress * (TOTAL_FRAMES - 1) + 1)))} / {TOTAL_FRAMES}
            </span>
          </div>

          <div className="w-44 h-1.5 rounded-full bg-white/20 overflow-hidden border border-white/10">
            <div
              className="h-full bg-gradient-to-r from-[#006A9E] to-[#0089D0] transition-all duration-100"
              style={{ width: `${Math.round(scrollProgress * 100)}%` }}
            />
          </div>

          <span className="mt-1.5 text-[11px] font-semibold text-[#DDF3FF]/70">
            {scrollProgress >= 0.98
              ? "✓ Renovation Complete • Keep Scrolling"
              : "↓ Scroll down to advance construction"}
          </span>
        </div>
      </section>
    </div>
  );
}
