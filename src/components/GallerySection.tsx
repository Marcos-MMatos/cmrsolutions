"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "@/lib/constants";

const SIZE_PATTERN = ["wide", "small", "small", "small", "small", "wide"] as const;

export default function GallerySection() {
  // Home only shows first 6
  const projectsToShow = PROJECTS.slice(0, 6);

  return (
    <section id="proyectos" className="section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-accent-cyan">
            {"// Proyectos"}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-4">
            <span className="text-white">Soluciones en </span>
            <span className="gradient-text">acción</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Ejemplos del tipo de instalaciones y proyectos que ejecutamos para
            empresas y particulares.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projectsToShow.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <ProjectCard
                title={project.title}
                category={project.category}
                accent={project.accent}
                iconType={project.iconType}
                size={SIZE_PATTERN[index]}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link href="/proyectos" className="btn-secondary">
            <span>Ver galería completa</span>
            <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
