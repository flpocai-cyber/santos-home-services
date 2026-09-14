"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { reviews } from "@/lib/reviews";
import { translations, type Locale } from "@/lib/translations";

interface Props {
  currentLocale: Locale;
}

export function ReviewsCarousel({ currentLocale }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const t = translations[currentLocale].reviews;

  // Autoplay ~5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const activeReview = reviews[currentIndex];

  return (
    <section
      id="reviews"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative bg-[#001D2B] py-24 sm:py-32 overflow-hidden"
    >
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

        {/* Carousel Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mt-16 mx-auto max-w-3xl"
        >
          <div className="relative rounded-3xl bg-white p-8 sm:p-12 text-[#001D2B] shadow-2xl transition-all duration-300">
            {/* 5 Stars */}
            <div className="flex items-center gap-1 text-[#F59E0B]">
              {[...Array(activeReview.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>

            {/* Comment */}
            <p className="mt-6 text-lg sm:text-xl font-medium leading-relaxed italic text-[#001D2B]">
              &ldquo;{activeReview.comment[currentLocale]}&rdquo;
            </p>

            {/* Author details */}
            <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-6">
              <div>
                <div className="flex items-center gap-2">
                  {activeReview.url ? (
                    <a
                      href={activeReview.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-extrabold tracking-tight text-[#001D2B] font-heading hover:text-[#0089D0] transition-colors underline-offset-2 hover:underline"
                    >
                      {activeReview.name}
                    </a>
                  ) : (
                    <h4 className="text-base font-extrabold tracking-tight text-[#001D2B] font-heading">
                      {activeReview.name}
                    </h4>
                  )}
                  <span className="text-xs font-medium text-gray-400">
                    • {activeReview.time[currentLocale]}
                  </span>
                </div>
                {activeReview.service && (
                  <p className="text-xs font-semibold text-[#006A9E] mt-0.5">
                    {activeReview.service[currentLocale]}
                  </p>
                )}
              </div>

              {/* Prev / Next controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-[#001D2B] transition hover:bg-[#0089D0] hover:text-white"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-[#001D2B] transition hover:bg-[#0089D0] hover:text-white"
                  aria-label="Next review"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Indicators */}
          <div className="mt-6 flex justify-center gap-1.5">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === i ? "w-8 bg-[#0089D0]" : "w-2 bg-white/20"
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>

          {/* Developer / Transparent Disclaimer */}
          <p className="mt-6 text-center text-[11px] text-[#DDF3FF]/40">
            {t.disclaimer}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
