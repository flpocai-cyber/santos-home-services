"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, ArrowRight, X } from "lucide-react";
import { GoldDivider } from "../ui/GoldDivider";
import { BLOG_POSTS, BlogPost } from "@/lib/data";

export function Blog() {
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  return (
    <section id="conteudos" className="py-24 bg-[#101923] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#CBA653]">
            Inteligência Jurídica & Doutrina
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-2">
            Conteúdo Jurídico
          </h2>
          <GoldDivider align="center" className="my-4" />
          <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
            Análises e pareceres de nossa equipe sobre reformas legislativas, jurisprudências recentes e estratégias para a proteção patrimonial e empresarial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="rounded-xl bg-[#18232F] border border-white/5 hover:border-[#CBA653]/50 shadow-xl overflow-hidden group flex flex-col justify-between transition-all duration-300 cursor-pointer"
              onClick={() => setActiveArticle(post)}
            >
              <div>
                {/* Imagem do Artigo */}
                <div className="relative h-52 w-full overflow-hidden bg-[#0B1219]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover filter brightness-95 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] uppercase font-semibold px-2.5 py-1 rounded bg-[#101923]/90 text-[#E0C173] border border-[#CBA653]/40">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#CBA653]" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#CBA653]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#E0C173] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-gray-300 font-light leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-white/5 flex items-center justify-between text-xs text-[#CBA653] font-semibold">
                <span>Leia Mais</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Modal Leitor de Artigo Completo */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArticle(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl bg-[#101923] border border-[#CBA653]/40 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-5 right-5 text-gray-400 hover:text-white p-1"
                aria-label="Fechar artigo"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-xs uppercase tracking-widest text-[#E0C173] font-semibold">
                {activeArticle.category} • {activeArticle.date}
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-2 mb-4 leading-tight">
                {activeArticle.title}
              </h3>

              <div className="relative h-60 w-full rounded-xl overflow-hidden mb-6 border border-white/10">
                <Image
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-4 text-sm text-gray-300 font-light leading-relaxed">
                <p>
                  {activeArticle.excerpt}
                </p>
                <p>
                  As mudanças recentes na jurisprudência brasileira exigem atenção redobrada dos gestores e indivíduos detentores de patrimônio relevante. A aplicação de instrumentos jurídicos modernos permite mitigar riscos futuros, garantindo solidez e previsibilidade financeira.
                </p>
                <p>
                  Nossa equipe de consultoria está à disposição para analisar a aplicação destas ferramentas de forma sob medida para o seu contexto empresarial ou familiar.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-6 py-2.5 rounded bg-[#18232F] text-[#E0C173] border border-[#CBA653]/40 hover:bg-[#CBA653] hover:text-[#0B1219] transition-all text-xs uppercase tracking-wider font-semibold"
                >
                  Fechar Artigo
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
