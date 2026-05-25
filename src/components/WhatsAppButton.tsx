"use client";

import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL } from "@/lib/constants";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatea con nosotros por WhatsApp"
      className="group fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/30 wpp-pulse hover:scale-110 transition-transform"
    >
      <FaWhatsapp className="text-3xl md:text-4xl" />
      <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg glass-strong text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
        Chatea con nosotros
      </span>
    </a>
  );
}
