"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaWhatsapp, FaArrowRight, FaShieldAlt } from "react-icons/fa";
import Logo from "./Logo";
import { SITE, WHATSAPP_URL } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border border-accent-blue/10 animate-spin-slow" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full border border-accent-cyan/10 animate-spin-slow"
        style={{ animationDirection: "reverse" }}
      />

      <motion.div
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
        className="relative z-10 max-w-5xl w-full text-center"
      >
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-accent-blue/20 rounded-full blur-3xl" />
            <div className="relative">
              <Logo size={88} showText={false} />
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full glass border border-accent-blue/30"
        >
          <FaShieldAlt className="text-accent-cyan text-sm" />
          <span className="text-xs md:text-sm font-mono text-slate-300 tracking-wide">
            {SITE.tagline}
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
        >
          <span className="gradient-text">Soluciones Inteligentes</span>
          <br />
          <span className="text-white">en Seguridad & IT</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="text-base md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Protegemos y conectamos tu empresa con tecnología de última
          generación. CCTV, control de acceso, redes e infraestructura IT
          desde Santa Marta para toda Colombia.
        </motion.p>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <FaWhatsapp className="text-xl" />
            <span>Contáctanos por WhatsApp</span>
          </a>
          <Link href="/servicios" className="btn-secondary">
            <span>Ver Servicios</span>
            <FaArrowRight />
          </Link>
        </motion.div>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto"
        >
          {[
            { value: "24/7", label: "Soporte" },
            { value: "100%", label: "Profesional" },
            { value: "Santa Marta", label: "Local" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center border-l border-accent-blue/20 first:border-l-0 px-2"
            >
              <div className="text-xl md:text-2xl font-bold text-accent-cyan glow-text">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-slate-400 uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-500 uppercase tracking-widest">
          Desliza
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-accent-blue to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
