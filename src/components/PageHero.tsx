"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaChevronRight, FaHome } from "react-icons/fa";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
}

export default function PageHero({
  badge,
  title,
  highlight,
  subtitle,
  breadcrumbs = [],
}: PageHeroProps) {
  return (
    <section className="relative pt-36 pb-20 px-6 overflow-hidden">
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-radial-glow opacity-50 blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-5xl mx-auto text-center"
      >
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center justify-center gap-2 text-xs font-mono text-slate-500 mb-6">
            <Link
              href="/"
              className="hover:text-accent-cyan transition-colors flex items-center gap-1"
            >
              <FaHome />
              <span>Inicio</span>
            </Link>
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                <FaChevronRight className="text-[8px]" />
                {b.href ? (
                  <Link
                    href={b.href}
                    className="hover:text-accent-cyan transition-colors"
                  >
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-accent-cyan">{b.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {badge && (
          <span className="inline-block font-mono text-xs uppercase tracking-widest text-accent-cyan mb-4">
            {`// ${badge}`}
          </span>
        )}

        <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6">
          <span className="text-white">{title}</span>
          {highlight && (
            <>
              {" "}
              <span className="gradient-text">{highlight}</span>
            </>
          )}
        </h1>

        {subtitle && (
          <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </motion.div>
    </section>
  );
}
