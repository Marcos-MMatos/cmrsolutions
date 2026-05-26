"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import Logo from "./Logo";
import { NAV_LINKS, WHATSAPP_URL, SERVICES } from "@/lib/constants";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "glass-strong shadow-lg shadow-accent-blue/10"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" aria-label="Inicio">
            <Logo size={36} />
          </Link>

          <ul className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li
                key={link.href}
                className="relative"
                onMouseEnter={() =>
                  link.hasDropdown && setServicesOpen(true)
                }
                onMouseLeave={() =>
                  link.hasDropdown && setServicesOpen(false)
                }
              >
                <Link
                  href={link.href}
                  className={`text-sm flex items-center gap-1 transition-colors duration-200 relative group ${
                    isActive(link.href)
                      ? "text-accent-cyan"
                      : "text-slate-300 hover:text-accent-cyan"
                  }`}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <FaChevronDown className="text-[10px] mt-0.5" />
                  )}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-accent-cyan transition-all duration-300 ${
                      isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>

                {/* Dropdown */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                      >
                        <div className="glass-strong rounded-xl border border-accent-blue/20 p-2 min-w-[280px] shadow-xl shadow-accent-blue/10">
                          {SERVICES.map((s) => (
                            <Link
                              key={s.slug}
                              href={`/servicios/${s.slug}`}
                              className="block px-4 py-2.5 rounded-lg text-sm text-slate-300 hover:bg-accent-blue/10 hover:text-accent-cyan transition-colors"
                            >
                              {s.title}
                            </Link>
                          ))}
                          <div className="border-t border-accent-blue/15 mt-2 pt-2">
                            <Link
                              href="/servicios"
                              className="block px-4 py-2.5 rounded-lg text-sm text-accent-cyan font-semibold hover:bg-accent-blue/10 transition-colors"
                            >
                              → Ver todos los servicios
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex btn-primary text-sm py-2.5 px-5"
          >
            <FaWhatsapp />
            <span>Hablemos</span>
          </a>

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-white text-2xl p-2"
            aria-label="Abrir menú"
          >
            <FaBars />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-bg-primary/80 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute top-0 right-0 h-full w-80 max-w-[85vw] glass-strong border-l border-accent-blue/20 p-8 flex flex-col overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-12">
                <Logo size={32} />
                <button
                  onClick={() => setOpen(false)}
                  className="text-white text-2xl p-2"
                  aria-label="Cerrar menú"
                >
                  <FaTimes />
                </button>
              </div>

              <ul className="flex flex-col gap-4 mb-10">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    {link.hasDropdown ? (
                      <>
                        <button
                          onClick={() =>
                            setMobileServicesOpen(!mobileServicesOpen)
                          }
                          className="flex items-center justify-between w-full text-lg text-slate-200 hover:text-accent-cyan transition-colors"
                        >
                          <Link
                            href={link.href}
                            onClick={() => setOpen(false)}
                          >
                            {link.label}
                          </Link>
                          <FaChevronDown
                            className={`text-sm transition-transform ${
                              mobileServicesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden pl-4 mt-2 space-y-2 border-l border-accent-blue/20"
                            >
                              {SERVICES.map((s) => (
                                <li key={s.slug}>
                                  <Link
                                    href={`/servicios/${s.slug}`}
                                    onClick={() => setOpen(false)}
                                    className="block text-sm text-slate-400 hover:text-accent-cyan py-1"
                                  >
                                    {s.title}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="text-lg text-slate-200 hover:text-accent-cyan transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full mt-auto"
                onClick={() => setOpen(false)}
              >
                <FaWhatsapp />
                <span>Contáctanos</span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
