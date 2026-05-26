import type { Metadata } from "next";
import {
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
  FaClock,
  FaPhone,
} from "react-icons/fa";
import PageHero from "@/components/PageHero";
import { SITE, CONTACT, WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contacto — Hablemos de tu proyecto",
  description:
    "Contáctanos por WhatsApp, Instagram o correo. Atendemos toda Colombia desde Santa Marta. Respuesta inmediata.",
  alternates: { canonical: "/contacto" },
};

const CHANNELS = [
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    subtitle: "Respuesta inmediata",
    value: CONTACT.whatsappDisplay,
    href: WHATSAPP_URL,
    external: true,
    primary: true,
    color: "#25D366",
  },
  {
    icon: FaEnvelope,
    title: "Correo electrónico",
    subtitle: "Para cotizaciones y propuestas",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    external: false,
    primary: false,
    color: "#0ea5e9",
  },
  {
    icon: FaInstagram,
    title: "Instagram",
    subtitle: "Mira nuestros proyectos",
    value: CONTACT.instagramHandle,
    href: CONTACT.instagram,
    external: true,
    primary: false,
    color: "#E4405F",
  },
  {
    icon: FaPhone,
    title: "Llamada directa",
    subtitle: "Atención telefónica",
    value: CONTACT.whatsappDisplay,
    href: `tel:+${CONTACT.whatsappNumber}`,
    external: false,
    primary: false,
    color: "#22d3ee",
  },
];

export default function ContactoPage() {
  return (
    <>
      <PageHero
        badge="Contacto"
        title="Hablemos de"
        highlight="tu proyecto"
        subtitle="Estamos listos para ayudarte. Elige el canal que prefieras y respondemos al instante."
        breadcrumbs={[{ label: "Contacto" }]}
      />

      {/* Contact channels grid */}
      <section className="section pt-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {CHANNELS.map((channel) => {
              const Icon = channel.icon;
              return (
                <a
                  key={channel.title}
                  href={channel.href}
                  target={channel.external ? "_blank" : undefined}
                  rel={channel.external ? "noopener noreferrer" : undefined}
                  className={`group relative overflow-hidden rounded-2xl glass p-8 transition-all duration-300 hover:-translate-y-1 ${
                    channel.primary
                      ? "border border-[#25D366]/40 shadow-[0_0_30px_rgba(37,211,102,0.15)]"
                      : "glow-border"
                  }`}
                >
                  <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity"
                    style={{ background: channel.color }}
                  />
                  <div className="relative flex items-start gap-5">
                    <div
                      className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl"
                      style={{
                        background: `${channel.color}20`,
                        border: `1px solid ${channel.color}50`,
                        color: channel.color,
                      }}
                    >
                      <Icon />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {channel.title}
                      </h3>
                      <p className="text-xs text-slate-500 mb-3">
                        {channel.subtitle}
                      </p>
                      <p className="text-base font-mono text-accent-cyan break-all">
                        {channel.value}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location + hours */}
      <section className="section pt-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass rounded-2xl p-8 border border-accent-blue/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-accent-blue/20 border border-accent-blue/40 flex items-center justify-center">
                <FaMapMarkerAlt className="text-xl text-accent-cyan" />
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-accent-cyan">
                  Ubicación
                </span>
                <h3 className="text-xl font-bold text-white">¿Dónde estamos?</h3>
              </div>
            </div>
            <p className="text-slate-300 mb-4">{SITE.location}</p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Atendemos en Santa Marta y municipios cercanos del Magdalena. Para
              proyectos especiales viajamos a toda la Costa Caribe y resto de
              Colombia.
            </p>
          </div>

          <div className="glass rounded-2xl p-8 border border-accent-blue/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-accent-blue/20 border border-accent-blue/40 flex items-center justify-center">
                <FaClock className="text-xl text-accent-cyan" />
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-accent-cyan">
                  Horarios
                </span>
                <h3 className="text-xl font-bold text-white">¿Cuándo?</h3>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex justify-between">
                <span>Lunes a Viernes</span>
                <span className="font-mono text-accent-cyan">8:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sábados</span>
                <span className="font-mono text-accent-cyan">9:00 - 14:00</span>
              </li>
              <li className="flex justify-between">
                <span>Soporte de emergencia</span>
                <span className="font-mono text-accent-cyan">24/7</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section pt-0">
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-3xl overflow-hidden border border-accent-blue/20">
            <iframe
              title="Ubicación CMR Solutions en Santa Marta"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126244.18796776528!2d-74.27577!3d11.241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef4a1c1cdd1e0d3%3A0x6e1a1234567890!2sSanta%20Marta%2C%20Magdalena!5e0!3m2!1ses!2sco!4v1700000000000"
              width="100%"
              height="420"
              style={{ border: 0, filter: "invert(0.92) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Big CTA */}
      <section className="section pt-0">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl glass-strong p-10 md:p-16 text-center border border-accent-blue/30">
            <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />
            <div className="relative">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                <span className="text-white">Escríbenos </span>
                <span className="gradient-text">ahora mismo</span>
              </h2>
              <p className="text-slate-300 mb-8">
                La forma más rápida de contactarnos. Te respondemos en minutos.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4 wpp-pulse inline-flex"
              >
                <FaWhatsapp className="text-2xl" />
                <span>Iniciar conversación</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
