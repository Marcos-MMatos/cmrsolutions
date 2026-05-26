import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Servicios — Seguridad Electrónica & IT",
  description:
    "Conoce todos nuestros servicios: CCTV, control de acceso, redes, automatización, soporte tecnológico y más.",
  alternates: { canonical: "/servicios" },
};

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        badge="Nuestros servicios"
        title="Soluciones completas en"
        highlight="seguridad e IT"
        subtitle="Diseñamos, instalamos y mantenemos sistemas que protegen y conectan tu empresa. Conoce el detalle de cada servicio que ofrecemos."
        breadcrumbs={[{ label: "Servicios" }]}
      />

      <ServicesSection />

      <section className="section pt-0">
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-3xl p-10 md:p-16 text-center border border-accent-blue/20">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              <span className="text-white">¿No estás seguro qué </span>
              <span className="gradient-text">servicio necesitas?</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8">
              Cuéntanos sobre tu proyecto y te recomendamos la mejor combinación
              de soluciones para tu caso específico.
            </p>
            <Link href="/contacto" className="btn-primary inline-flex">
              Solicita asesoría gratuita
            </Link>
          </div>
        </div>
      </section>

      <CTASection />

      {/* JSON-LD for services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: SERVICES.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "Service",
                name: s.title,
                description: s.shortDescription,
                url: `https://cmrsolutions.co/servicios/${s.slug}`,
              },
            })),
          }),
        }}
      />
    </>
  );
}
