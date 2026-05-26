"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaVideo,
  FaFingerprint,
  FaNetworkWired,
  FaTools,
  FaBolt,
  FaHeadset,
  FaDesktop,
  FaArrowRight,
} from "react-icons/fa";
import { SERVICES } from "@/lib/constants";

const ICONS = {
  FaVideo,
  FaFingerprint,
  FaNetworkWired,
  FaTools,
  FaBolt,
  FaHeadset,
  FaDesktop,
} as const;

export default function ServicesSection() {
  return (
    <section id="servicios" className="section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-accent-cyan">
            {"// Nuestros Servicios"}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-4">
            <span className="gradient-text">Soluciones tecnológicas</span>
            <br />
            <span className="text-white">para tu empresa</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Diseñamos, instalamos y damos soporte a sistemas que protegen y
            conectan tu negocio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = ICONS[service.icon as keyof typeof ICONS];
            return (
              <motion.article
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link
                  href={`/servicios/${service.slug}`}
                  className="group relative glass rounded-2xl p-8 glow-border transition-all duration-300 hover:-translate-y-2 block h-full"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-accent-blue/20 to-transparent rounded-tr-2xl rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-cyan/10 border border-accent-blue/30 mb-5 group-hover:shadow-glow transition-shadow">
                      <Icon className="text-2xl text-accent-cyan" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-cyan transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {service.shortDescription}
                    </p>

                    <div className="mt-6 h-px bg-gradient-to-r from-accent-blue/30 via-accent-cyan/20 to-transparent" />

                    <div className="mt-4 flex items-center gap-2 text-xs font-mono text-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>VER DETALLES</span>
                      <FaArrowRight className="text-[10px]" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link href="/servicios" className="btn-secondary">
            <span>Ver todos los servicios</span>
            <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
