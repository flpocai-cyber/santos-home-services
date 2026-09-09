"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, X, CheckCircle2, ShieldCheck } from "lucide-react";
import { projectsData, type ProjectItem } from "@/lib/projects";
import { translations, type Locale } from "@/lib/translations";

interface Props {
  currentLocale: Locale;
  onOpenQuote: (service?: string) => void;
}

export function ProjectsGallery({ currentLocale, onOpenQuote }: Props) {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const t = translations[currentLocale].projects;

  const categories = [
    { key: "all", label: t.filters.all },
    { key: "deck", label: t.filters.deck },
    { key: "fence", label: t.filters.fence },
    { key: "framing", label: t.filters.framing },
    { key: "paint", label: t.filters.paint },
    { key: "drywall", label: t.filters.drywall },
    { key: "carpentry", label: t.filters.carpentry },
    { key: "flooring", label: (t.filters as any).flooring || "FLOORING & TILES" },
  ];

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative bg-[#071820] py-24 sm:py-32">
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

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                filter === cat.key
                  ? "bg-[#0089D0] text-white shadow-lg shadow-[#0089D0]/30 scale-105"
                  : "bg-[#001D2B] text-[#DDF3FF]/70 border border-white/10 hover:text-white hover:border-white/30"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              data-cursor="VIEW"
              onClick={() => setSelectedProject(proj)}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#001D2B] shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#0089D0]/60 cursor-pointer"
            >
              <div className="relative h-64 w-full overflow-hidden bg-[#071820]">
                <Image
                  src={proj.image}
                  alt={proj.title[currentLocale]}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001D2B] via-[#001D2B]/30 to-transparent" />

                {/* Location Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-md bg-[#001D2B]/85 px-3 py-1 text-xs font-bold text-[#DDF3FF] border border-white/10 backdrop-blur-md">
                  <MapPin className="h-3.5 w-3.5 text-[#0089D0]" />
                  <span>{proj.location}</span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0089D0]">
                  {proj.type[currentLocale]}
                </span>
                <h3 className="mt-1 text-lg font-bold text-white font-heading">
                  {proj.title[currentLocale]}
                </h3>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(proj);
                    }}
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white transition hover:text-[#0089D0]"
                  >
                    <span>{t.viewProject}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-[#0089D0]" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* POPUP MODAL COM GLASSMORFISMO REAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
          {/* Backdrop Blur */}
          <div
            onClick={() => setSelectedProject(null)}
            className="absolute inset-0 bg-[#001D2B]/85 backdrop-blur-xl transition-opacity animate-in fade-in duration-300"
          />

          {/* Modal Card */}
          <div className="relative z-10 w-full max-w-3xl overflow-hidden rounded-3xl border border-[#0089D0]/30 bg-[#071820]/95 shadow-[0_25px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl animate-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#001D2B]/80 text-white border border-white/15 backdrop-blur-md transition hover:bg-[#0089D0] hover:scale-110"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Image */}
            <div className="relative h-72 sm:h-88 w-full overflow-hidden bg-[#001D2B]">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title[currentLocale]}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071820] via-transparent to-transparent" />

              {/* Tag & Location on Image */}
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <span className="rounded-full bg-[#0089D0] px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg">
                  {selectedProject.type[currentLocale]}
                </span>
                <span className="flex items-center gap-1.5 rounded-full bg-[#001D2B]/85 px-3 py-1 text-xs font-semibold text-[#DDF3FF] border border-white/10 backdrop-blur-md">
                  <MapPin className="h-3.5 w-3.5 text-[#0089D0]" />
                  {selectedProject.location}
                </span>
              </div>
            </div>

            {/* Modal Details */}
            <div className="p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                {selectedProject.title[currentLocale]}
              </h3>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#DDF3FF]/85">
                {selectedProject.description[currentLocale]}
              </p>

              {/* Highlights Pill Badges */}
              <div className="mt-6 flex flex-wrap items-center gap-2">
                {selectedProject.highlights.map((h, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-[#001D2B] px-3 py-1.5 text-xs font-semibold text-[#DDF3FF]"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#0089D0]" />
                    {h}
                  </span>
                ))}
              </div>

              {/* Action Buttons: Get a Quote */}
              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#DDF3FF]/70">
                  <ShieldCheck className="h-4 w-4 text-[#0089D0]" />
                  <span>Licensed Home Improvement Contractor</span>
                </div>

                <button
                  onClick={() => {
                    const projectType = selectedProject.type[currentLocale];
                    setSelectedProject(null);
                    onOpenQuote(projectType);
                  }}
                  className="rounded-full bg-gradient-to-r from-[#006A9E] to-[#0089D0] px-7 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white shadow-xl shadow-[#0089D0]/30 transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
                >
                  Get a Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
