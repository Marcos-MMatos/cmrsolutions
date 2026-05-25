"use client";

import { motion } from "framer-motion";
import {
  FaUserShield,
  FaMicrochip,
  FaClock,
  FaCertificate,
  FaLock,
  FaServer,
} from "react-icons/fa";
import { ADVANTAGES } from "@/lib/constants";

const ICONS = {
  FaUserShield,
  FaMicrochip,
  FaClock,
  FaCertificate,
  FaLock,
  FaServer,
} as const;

export default function WhyChooseUs() {
  return (
    <section id="ventajas" className="section relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-accent-cyan">
            {"// Por qué elegirnos"}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-4">
            <span className="text-white">Una empresa que </span>
            <span className="gradient-text">entiende tu negocio</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Más que un proveedor, somos un socio tecnológico comprometido con
            tu tranquilidad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {/* Circuit decorative lines (desktop only) */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" preserveAspectRatio="none">
              <line
                x1="33%"
                y1="50%"
                x2="67%"
                y2="50%"
                stroke="rgba(14, 165, 233, 0.2)"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
            </svg>
          </div>

          {ADVANTAGES.map((adv, index) => {
            const Icon = ICONS[adv.icon as keyof typeof ICONS];
            return (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative glass rounded-2xl p-7 glow-border transition-all duration-300 group hover:-translate-y-1"
              >
                {/* Number badge */}
                <div className="absolute -top-3 -left-3 w-9 h-9 rounded-full bg-gradient-to-br from-accent-blue to-accent-cyan flex items-center justify-center text-white text-sm font-bold font-mono shadow-glow">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent-blue/10 border border-accent-blue/30 flex items-center justify-center group-hover:bg-accent-blue/20 transition-colors">
                    <Icon className="text-xl text-accent-cyan" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">
                      {adv.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {adv.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
