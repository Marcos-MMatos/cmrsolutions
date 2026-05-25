"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";
import { WHATSAPP_URL, CONTACT } from "@/lib/constants";

export default function CTASection() {
  return (
    <section id="contacto" className="section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto"
      >
        <div className="relative overflow-hidden rounded-3xl glass-strong p-10 md:p-16 text-center border border-accent-blue/30">
          {/* Decorative glows */}
          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-accent-blue/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-accent-cyan/20 blur-3xl" />

          {/* Grid pattern */}
          <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />

          <div className="relative">
            <span className="inline-block font-mono text-xs uppercase tracking-widest text-accent-cyan mb-4">
              {"// Estamos listos para ayudarte"}
            </span>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-white">¿Necesitas una </span>
              <span className="gradient-text">solución tecnológica</span>
              <br />
              <span className="text-white">para tu empresa?</span>
            </h2>

            <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-base md:text-lg">
              Cuéntanos qué necesitas y diseñamos una propuesta a tu medida.
              Respuesta inmediata por WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base md:text-lg px-8 py-4 wpp-pulse"
              >
                <FaWhatsapp className="text-2xl" />
                <span>Escribir por WhatsApp</span>
                <FaArrowRight />
              </a>
              <a
                href={`tel:+${CONTACT.whatsappNumber}`}
                className="btn-secondary"
              >
                <span className="font-mono">{CONTACT.whatsappDisplay}</span>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs text-slate-400 font-mono">
              <span>✓ Cotización sin compromiso</span>
              <span>✓ Asesoría gratuita</span>
              <span>✓ Atendemos toda Colombia</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
