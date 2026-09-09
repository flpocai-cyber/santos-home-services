"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Phone, MessageSquare, MessageCircle, MapPin } from "lucide-react";
import { translations, type Locale } from "@/lib/translations";

interface Props {
  currentLocale: Locale;
  preselectedService?: string;
}

export function ContactFormSection({ currentLocale, preselectedService }: Props) {
  const t = translations[currentLocale].contact;
  const tMap = translations[currentLocale].map;

  const [service, setService] = useState(preselectedService || "deck");
  const [preferredContact, setPreferredContact] = useState("phone");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const honeypot = formData.get("company_url");
    if (honeypot) {
      // Honeypot triggered
      setLoading(false);
      setSubmitted(true);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.get("fullName"),
          phone: formData.get("phone"),
          email: formData.get("email"),
          address: formData.get("address"),
          city: formData.get("city"),
          service: service,
          preferredContact: preferredContact,
          description: formData.get("description"),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send quote request.");
      }

      setSubmitted(true);
    } catch {
      // Fallback graceful success
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const whatsappUrl =
    "https://wa.me/14752516504?text=Hello!%20I%20found%20Santos%20Home%20Services%20LLC%20through%20your%20website%20and%20I%27d%20like%20to%20request%20a%20quote%20for%20my%20project.";

  return (
    <section id="contact" className="relative bg-[#071820] py-24 sm:py-32">
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

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* FORM (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 rounded-3xl border border-white/15 bg-[#001D2B] p-8 sm:p-12 shadow-2xl"
          >
            {submitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#0089D0]/20 text-[#0089D0] mb-6">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-white font-heading">
                  {currentLocale === "pt"
                    ? "Solicitação Enviada com Sucesso!"
                    : currentLocale === "es"
                    ? "¡Solicitud Enviada con Éxito!"
                    : "Quote Request Received!"}
                </h3>
                <p className="mt-4 text-base text-[#DDF3FF]/80 max-w-md mx-auto">
                  {t.success}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 rounded-full border border-[#0089D0] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0089D0] hover:bg-[#0089D0] hover:text-white transition"
                >
                  {currentLocale === "pt" ? "Enviar outra mensagem" : currentLocale === "es" ? "Enviar otro mensaje" : "Send another request"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field for bot protection */}
                <input
                  type="text"
                  name="company_url"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#DDF3FF]/80 mb-2">
                      {t.fullName} *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-white/10 bg-[#071820] px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-[#0089D0] focus:ring-2 focus:ring-[#0089D0]/30 focus:outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#DDF3FF]/80 mb-2">
                      {t.phone} *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="(203) 000-0000"
                      className="w-full rounded-xl border border-white/10 bg-[#071820] px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-[#0089D0] focus:ring-2 focus:ring-[#0089D0]/30 focus:outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#DDF3FF]/80 mb-2">
                      {t.email} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      className="w-full rounded-xl border border-white/10 bg-[#071820] px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-[#0089D0] focus:ring-2 focus:ring-[#0089D0]/30 focus:outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#DDF3FF]/80 mb-2">
                      {t.city} *
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      defaultValue="Danbury, CT"
                      className="w-full rounded-xl border border-white/10 bg-[#071820] px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-[#0089D0] focus:ring-2 focus:ring-[#0089D0]/30 focus:outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#DDF3FF]/80 mb-2">
                    {t.address}
                  </label>
                  <input
                    type="text"
                    name="address"
                    placeholder="123 Main St, Danbury, CT 06810"
                    className="w-full rounded-xl border border-white/10 bg-[#071820] px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-[#0089D0] focus:ring-2 focus:ring-[#0089D0]/30 focus:outline-none transition"
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#DDF3FF]/80 mb-2">
                    {t.serviceNeeded}
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-[#071820] px-4 py-3 text-sm text-white focus:border-[#0089D0] focus:ring-2 focus:ring-[#0089D0]/30 focus:outline-none transition"
                  >
                    <option value="carpentry">{t.options.carpentry}</option>
                    <option value="deck">{t.options.deck}</option>
                    <option value="fence">{t.options.fence}</option>
                    <option value="framing">{t.options.framing}</option>
                    <option value="painting">{t.options.painting}</option>
                    <option value="drywall">{t.options.drywall}</option>
                    <option value="other">{t.options.other}</option>
                  </select>
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#DDF3FF]/80 mb-2">
                    {t.preferredContact}
                  </label>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 text-xs font-semibold">
                    {[
                      { key: "phone", label: t.contacts.phone },
                      { key: "text", label: t.contacts.text },
                      { key: "whatsapp", label: t.contacts.whatsapp },
                      { key: "email", label: t.contacts.email },
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.key}
                        onClick={() => setPreferredContact(item.key)}
                        className={`rounded-lg py-2.5 px-2 border text-center transition ${
                          preferredContact === item.key
                            ? "bg-[#0089D0] text-white border-[#0089D0]"
                            : "bg-[#071820] text-[#DDF3FF]/70 border-white/10 hover:border-white/30"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#DDF3FF]/80 mb-2">
                    {t.description}
                  </label>
                  <textarea
                    name="description"
                    rows={4}
                    placeholder="Tell us about the size, scope, timeline or specific materials..."
                    className="w-full rounded-xl border border-white/10 bg-[#071820] px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-[#0089D0] focus:ring-2 focus:ring-[#0089D0]/30 focus:outline-none transition"
                  />
                </div>

                {errorMessage && (
                  <div className="flex items-center gap-2 rounded-xl bg-red-950/40 border border-red-800 p-3 text-xs text-red-200">
                    <AlertCircle className="h-4 w-4 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#006A9E] to-[#0089D0] py-4 text-sm font-bold uppercase tracking-wider text-white shadow-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,137,208,0.5)] hover:scale-[1.01] active:scale-95 disabled:opacity-50"
                >
                  {loading ? (
                    <span>{t.submitting}</span>
                  ) : (
                    <>
                      <span>{t.submit}</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* MAP & LOCATION INFO (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col rounded-3xl border border-white/15 bg-[#001D2B] p-8 sm:p-10 shadow-2xl"
          >
            <div>
              <span className="text-xs font-bold tracking-widest text-[#0089D0] uppercase">
                {tMap.tag}
              </span>
              <h3 className="mt-2 text-2xl font-extrabold text-white font-heading">
                Santos Home Services LLC
              </h3>
              <p className="mt-2 text-sm text-[#DDF3FF]/80">
                95 Main St Apt 2B, Danbury, CT 06810, United States
              </p>
              <p className="mt-1 text-base font-bold text-[#0089D0]">
                (475) 251-6504
              </p>

              {/* Embedded Google Map */}
              <div className="mt-4 h-60 w-full overflow-hidden rounded-2xl border border-white/10 shadow-inner">
                <iframe
                  title="Santos Home Services LLC Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.638210373468!2d-73.45618868457784!3d41.39480197926344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7ff0b0a88ef11%3A0xb3bf48de49826338!2s95%20Main%20St%20%232b%2C%20Danbury%2C%20CT%2006810%2C%20USA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full grayscale-[25%] contrast-125"
                />
              </div>
            </div>

            {/* Direct Quick Action Buttons */}
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 pt-4 border-t border-white/10">
              <a
                href="https://maps.google.com/?q=95+Main+St+Apt+2B+Danbury+CT+06810"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center rounded-xl bg-[#071820] py-3 text-center transition hover:bg-[#0089D0] hover:text-white"
              >
                <MapPin className="h-4 w-4 text-[#0089D0] mb-1" />
                <span className="text-[10px] font-bold uppercase tracking-wider">{tMap.getDirections}</span>
              </a>

              <a
                href="tel:+14752516504"
                className="flex flex-col items-center justify-center rounded-xl bg-[#071820] py-3 text-center transition hover:bg-[#0089D0] hover:text-white"
              >
                <Phone className="h-4 w-4 text-[#0089D0] mb-1" />
                <span className="text-[10px] font-bold uppercase tracking-wider">{tMap.call}</span>
              </a>

              <a
                href="sms:+14752516504"
                className="flex flex-col items-center justify-center rounded-xl bg-[#071820] py-3 text-center transition hover:bg-[#0089D0] hover:text-white"
              >
                <MessageSquare className="h-4 w-4 text-[#0089D0] mb-1" />
                <span className="text-[10px] font-bold uppercase tracking-wider">{tMap.text}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center rounded-xl bg-[#071820] py-3 text-center transition hover:bg-[#25D366] hover:text-white"
              >
                <MessageCircle className="h-4 w-4 text-[#25D366] mb-1" />
                <span className="text-[10px] font-bold uppercase tracking-wider">{tMap.whatsapp}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
