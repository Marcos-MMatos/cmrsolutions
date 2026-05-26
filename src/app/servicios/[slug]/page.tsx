import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaVideo,
  FaFingerprint,
  FaNetworkWired,
  FaTools,
  FaBolt,
  FaHeadset,
  FaDesktop,
  FaWhatsapp,
  FaCheck,
  FaArrowRight,
  FaLightbulb,
  FaChartLine,
  FaBuilding,
} from "react-icons/fa";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { SERVICES, whatsappLinkFor } from "@/lib/constants";

const ICONS = {
  FaVideo,
  FaFingerprint,
  FaNetworkWired,
  FaTools,
  FaBolt,
  FaHeadset,
  FaDesktop,
} as const;

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) return { title: "Servicio no encontrado" };

  return {
    title: service.title,
    description: service.shortDescription,
    alternates: { canonical: `/servicios/${service.slug}` },
    openGraph: {
      title: `${service.title} | CMR Solutions`,
      description: service.shortDescription,
    },
  };
}

export default function ServicioDetallePage({ params }: PageProps) {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const Icon = ICONS[service.icon as keyof typeof ICONS];
  const otherServices = SERVICES.filter((s) => s.slug !== service.slug).slice(
    0,
    3,
  );

  return (
    <>
      <PageHero
        badge="Servicio"
        title={service.title.split(" ").slice(0, -2).join(" ")}
        highlight={service.title.split(" ").slice(-2).join(" ")}
        subtitle={service.shortDescription}
        breadcrumbs={[
          { label: "Servicios", href: "/servicios" },
          { label: service.title },
        ]}
      />

      {/* Icon + Long description */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12 border border-accent-blue/20">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent-blue/30 to-accent-cyan/10 border border-accent-blue/40 flex items-center justify-center shadow-glow">
                  <Icon className="text-4xl text-accent-cyan" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-lg text-slate-300 leading-relaxed">
                  {service.longDescription}
                </p>
                <a
                  href={whatsappLinkFor(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-6 inline-flex"
                >
                  <FaWhatsapp />
                  <span>Cotizar este servicio</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section pt-0">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-accent-cyan">
              {"// Características"}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              <span className="text-white">¿Qué </span>
              <span className="gradient-text">incluye?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.features.map((feature) => (
              <div
                key={feature}
                className="glass rounded-xl p-5 flex items-start gap-3 glow-border transition-all duration-300"
              >
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-accent-cyan/20 border border-accent-cyan/40 flex items-center justify-center mt-0.5">
                  <FaCheck className="text-xs text-accent-cyan" />
                </div>
                <span className="text-sm text-slate-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section pt-0">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-accent-cyan">
              {"// Beneficios"}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              <span className="text-white">¿Por qué te </span>
              <span className="gradient-text">conviene?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {service.benefits.map((benefit, i) => (
              <div
                key={benefit}
                className="glass rounded-2xl p-6 flex items-start gap-4 glow-border"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-cyan/10 border border-accent-blue/30 flex items-center justify-center">
                  {i % 3 === 0 ? (
                    <FaChartLine className="text-xl text-accent-cyan" />
                  ) : i % 3 === 1 ? (
                    <FaLightbulb className="text-xl text-accent-cyan" />
                  ) : (
                    <FaBuilding className="text-xl text-accent-cyan" />
                  )}
                </div>
                <p className="text-slate-300 leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="section pt-0">
        <div className="max-w-5xl mx-auto">
          <div className="glass-strong rounded-3xl p-10 md:p-14 border border-accent-blue/30 text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-accent-cyan">
              {"// Casos de uso"}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-8">
              <span className="text-white">Ideal para</span>
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left max-w-3xl mx-auto">
              {service.useCases.map((useCase) => (
                <li
                  key={useCase}
                  className="flex items-center gap-3 text-slate-300"
                >
                  <FaCheck className="text-accent-cyan flex-shrink-0" />
                  <span>{useCase}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="section pt-0">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">
              <span className="text-white">Otros </span>
              <span className="gradient-text">servicios</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {otherServices.map((s) => {
              const I = ICONS[s.icon as keyof typeof ICONS];
              return (
                <Link
                  key={s.slug}
                  href={`/servicios/${s.slug}`}
                  className="glass rounded-2xl p-6 glow-border transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-cyan/10 border border-accent-blue/30 flex items-center justify-center mb-4">
                    <I className="text-xl text-accent-cyan" />
                  </div>
                  <h3 className="font-bold text-white group-hover:text-accent-cyan transition-colors mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2">
                    {s.shortDescription}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs font-mono text-accent-cyan">
                    <span>VER MÁS</span>
                    <FaArrowRight className="text-[10px]" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
