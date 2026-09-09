"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, ShieldCheck, Clock } from "lucide-react";
import { ButtonPrimary } from "./ButtonPrimary";
import { PRACTICE_AREAS, OFFICE_INFO } from "@/lib/data";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultArea?: string;
}

export function ConsultationModal({
  isOpen,
  onClose,
  defaultArea = ""
}: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    area: defaultArea,
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Abre o WhatsApp com os dados preenchidos ou simula confirmação
      const text = `*Solicitação de Consulta - Site*\n\n*Nome:* ${formData.name}\n*E-mail:* ${formData.email}\n*Telefone:* ${formData.phone}\n*Área:* ${formData.area || "Geral"}\n*Mensagem:* ${formData.message}`;
      window.open(`https://wa.me/${OFFICE_INFO.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-lg overflow-hidden rounded-xl bg-[#101923] border border-[#CBA653]/30 shadow-2xl shadow-black p-6 sm:p-8 z-10"
          >
            {/* Fechar */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-gray-400 hover:text-[#E0C173] transition-colors p-1"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-16 h-16 rounded-full bg-[#CBA653]/20 flex items-center justify-center mb-4 text-[#E0C173]"
                >
                  <CheckCircle2 className="w-10 h-10" />
                </motion.div>
                <h3 className="text-2xl font-serif text-white mb-2">
                  Solicitação Recebida com Sucesso
                </h3>
                <p className="text-sm text-gray-300 max-w-xs mb-6">
                  Nossa equipe de advogados analisará o seu caso sob sigilo absoluto e entrará em contato em instantes.
                </p>
                <ButtonPrimary
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  variant="gold"
                >
                  Concluir
                </ButtonPrimary>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="text-xs uppercase tracking-widest text-[#CBA653] font-semibold">
                    Atendimento Exclusivo
                  </span>
                  <h3 className="text-2xl font-serif text-white mt-1">
                    Agende sua Consulta Jurídica
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1.5">
                    Preencha o formulário abaixo para uma análise personalizada de nossa equipe especializada.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-300 mb-1">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex.: Rodrigo Salles"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded bg-[#18232F] border border-white/10 text-white text-sm focus:border-[#CBA653] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-gray-300 mb-1">
                        E-mail Corporativo / Pessoal
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="nome@empresa.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded bg-[#18232F] border border-white/10 text-white text-sm focus:border-[#CBA653] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-gray-300 mb-1">
                        Telefone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(11) 99999-9999"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded bg-[#18232F] border border-white/10 text-white text-sm focus:border-[#CBA653] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-300 mb-1">
                      Área de Interesse
                    </label>
                    <select
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      className="w-full px-4 py-2.5 rounded bg-[#18232F] border border-white/10 text-white text-sm focus:border-[#CBA653] focus:outline-none transition-colors"
                    >
                      <option value="">Selecione uma especialidade...</option>
                      {PRACTICE_AREAS.map((area) => (
                        <option key={area.id} value={area.title}>
                          {area.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-300 mb-1">
                      Resumo do Caso ou Necessidade
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Descreva brevemente a situação ou o interesse jurídico..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2 rounded bg-[#18232F] border border-white/10 text-white text-sm focus:border-[#CBA653] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <ButtonPrimary type="submit" variant="gold" className="w-full" icon={<Send className="w-4 h-4" />}>
                      Enviar Solicitação Segura
                    </ButtonPrimary>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-gray-400 pt-2 border-t border-white/5">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#CBA653]" />
                      Sigilo garantido pelo Código de Ética da OAB
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#CBA653]" />
                      Retorno prioritário
                    </span>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
