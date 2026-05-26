import type { Metadata } from "next";
import {
  FaShieldAlt,
  FaLightbulb,
  FaHandshake,
  FaAward,
  FaBullseye,
  FaEye,
} from "react-icons/fa";
import PageHero from "@/components/PageHero";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASection from "@/components/CTASection";
import { COMPANY, SITE } from "@/lib/constants";

const ICONS = {
  FaShieldAlt,
  FaLightbulb,
  FaHandshake,
  FaAward,
} as const;

export const metadata: Metadata = {
  title: "Nosotros — Quiénes somos",
  description:
    "Conoce a CMR Solutions, empresa especializada en seguridad electrónica e infraestructura IT en Santa Marta, Colombia.",
  alternates: { canonical: "/nosotros" },
};

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        badge="Sobre nosotros"
        title="Tecnología al servicio de"
        highlight="tu tranquilidad"
        subtitle="Somos un equipo apasionado por la tecnología que protege y conecta a empresas y personas en la Costa Caribe colombiana."
        breadcrumbs={[{ label: "Nosotros" }]}
      />

      {/* Intro */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12 border border-accent-blue/20">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              <span className="text-white">¿Quiénes somos en </span>
              <span className="gradient-text">{SITE.name}?</span>
            </h2>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-4">
              CMR Solutions es una empresa colombiana ubicada en {SITE.location}{" "}
              especializada en{" "}
              <strong className="text-accent-cyan">
                seguridad electrónica e infraestructura IT
              </strong>
              . Diseñamos, instalamos y damos soporte a sistemas que ayudan a
              empresas y particulares a operar de forma más segura, conectada y
              eficiente.
            </p>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed">
              Nuestra propuesta combina <strong>tecnología de punta</strong>{" "}
              (cámaras Dahua, Hikvision, equipos Ubiquiti, controles
              biométricos) con un servicio cercano, personalizado y comprometido
              con la realidad de cada cliente.
            </p>
          </div>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="section pt-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-strong rounded-3xl p-10 border border-accent-blue/30 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-accent-blue/20 blur-3xl" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-accent-blue/20 border border-accent-blue/40 flex items-center justify-center mb-5">
                  <FaBullseye className="text-2xl text-accent-cyan" />
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-accent-cyan">
                  {"// Misión"}
                </span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-4">
                  Nuestra Misión
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {COMPANY.mission}
                </p>
              </div>
            </div>

            <div className="glass-strong rounded-3xl p-10 border border-accent-blue/30 relative overflow-hidden">
              <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-accent-cyan/20 blur-3xl" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-accent-cyan/20 border border-accent-cyan/40 flex items-center justify-center mb-5">
                  <FaEye className="text-2xl text-accent-cyan" />
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-accent-cyan">
                  {"// Visión"}
                </span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-4">
                  Nuestra Visión
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {COMPANY.vision}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section pt-0">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-accent-cyan">
              {"// Nuestros valores"}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-4">
              <span className="text-white">Lo que nos </span>
              <span className="gradient-text">define</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Cuatro principios que guían nuestra forma de trabajar todos los
              días.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {COMPANY.values.map((v) => {
              const Icon = ICONS[v.icon as keyof typeof ICONS];
              return (
                <div
                  key={v.title}
                  className="glass rounded-2xl p-7 text-center glow-border transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-cyan/10 border border-accent-blue/30 flex items-center justify-center mb-5">
                    <Icon className="text-2xl text-accent-cyan" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <WhyChooseUs />

      {/* Stats */}
      <section className="section pt-0">
        <div className="max-w-5xl mx-auto">
          <div className="glass-strong rounded-3xl p-10 md:p-16 border border-accent-blue/30 relative overflow-hidden">
            <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "100%", label: "Profesionales" },
                { value: "24/7", label: "Soporte" },
                { value: "+50", label: "Proyectos" },
                { value: "5★", label: "Clientes felices" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl md:text-5xl font-bold gradient-text glow-text">
                    {s.value}
                  </div>
                  <div className="text-xs md:text-sm text-slate-400 uppercase tracking-wider mt-2">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
