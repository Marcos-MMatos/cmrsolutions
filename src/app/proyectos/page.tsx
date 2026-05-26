"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { PROJECTS } from "@/lib/constants";

const CATEGORIES = [
  "Todos",
  ...Array.from(new Set(PROJECTS.map((p) => p.category))),
];

export default function ProyectosPage() {
  const [filter, setFilter] = useState<string>("Todos");

  const filtered =
    filter === "Todos"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  return (
    <>
      <PageHero
        badge="Galería de proyectos"
        title="Nuestro trabajo"
        highlight="en acción"
        subtitle="Ejemplos representativos de las instalaciones y proyectos que ejecutamos para empresas y particulares."
        breadcrumbs={[{ label: "Proyectos" }]}
      />

      {/* Filters */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-mono transition-all ${
                filter === cat
                  ? "bg-gradient-to-r from-accent-blue to-accent-cyan text-white shadow-glow"
                  : "glass text-slate-300 hover:text-accent-cyan"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((project, index) => (
              <motion.div
                key={`${project.title}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <ProjectCard
                  title={project.title}
                  category={project.category}
                  accent={project.accent}
                  iconType={project.iconType}
                />
              </motion.div>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-center text-slate-500 py-12">
              No hay proyectos en esta categoría aún.
            </p>
          )}

          <p className="text-center text-xs font-mono text-slate-500 mt-12">
            Las imágenes son ilustrativas — solicita ver casos reales por
            WhatsApp.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
