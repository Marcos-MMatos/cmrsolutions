import Link from "next/link";
import {
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import Logo from "./Logo";
import {
  SITE,
  CONTACT,
  WHATSAPP_URL,
  NAV_LINKS,
  SERVICES,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative border-t border-accent-blue/15 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Logo size={40} />
            <p className="text-slate-400 text-sm mt-4 leading-relaxed">
              {SITE.tagline}. Especialistas en seguridad electrónica e
              infraestructura IT en {SITE.location}.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-accent-cyan hover:bg-accent-blue/20 hover:text-white transition-all"
              >
                <FaWhatsapp />
              </a>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-accent-cyan hover:bg-accent-blue/20 hover:text-white transition-all"
              >
                <FaInstagram />
              </a>
              <a
                href={`mailto:${SITE.email}`}
                aria-label="Correo"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-accent-cyan hover:bg-accent-blue/20 hover:text-white transition-all"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-accent-cyan transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Servicios
            </h4>
            <ul className="space-y-2">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/servicios/${s.slug}`}
                    className="text-slate-400 text-sm hover:text-accent-cyan transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/servicios"
                  className="text-accent-cyan text-sm font-semibold hover:text-white transition-colors"
                >
                  Ver todos →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <FaWhatsapp className="text-accent-cyan mt-0.5 flex-shrink-0" />
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-cyan transition-colors"
                >
                  {CONTACT.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <FaEnvelope className="text-accent-cyan mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="hover:text-accent-cyan transition-colors break-all"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <FaInstagram className="text-accent-cyan mt-0.5 flex-shrink-0" />
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-cyan transition-colors"
                >
                  {CONTACT.instagramHandle}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-accent-cyan mt-0.5 flex-shrink-0" />
                <span>{SITE.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-accent-blue/10 flex flex-col md:flex-row gap-4 justify-between items-center text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {SITE.name} · Todos los derechos
            reservados.
          </p>
          <p className="font-mono">
            <span className="text-accent-cyan">{SITE.domain}</span> · v1.0
          </p>
        </div>
      </div>
    </footer>
  );
}
