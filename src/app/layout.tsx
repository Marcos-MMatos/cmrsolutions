import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import TechBackground from "@/components/TechBackground";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cmrsolutions.co"),
  title: {
    default: "CMR Solutions — Seguridad Electrónica & IT en Santa Marta",
    template: "%s | CMR Solutions",
  },
  description:
    "Soluciones inteligentes en CCTV, control de acceso, redes e infraestructura IT. Protegemos y conectamos tu empresa con tecnología de última generación en Santa Marta, Colombia.",
  keywords: [
    "CCTV Santa Marta",
    "cámaras de seguridad Colombia",
    "control de acceso",
    "redes empresariales",
    "infraestructura IT",
    "videovigilancia",
    "seguridad electrónica Santa Marta",
    "Dahua",
    "Hikvision",
    "automatización",
  ],
  authors: [{ name: "CMR Solutions" }],
  creator: "CMR Solutions",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://cmrsolutions.co",
    siteName: "CMR Solutions",
    title: "CMR Solutions — Seguridad Electrónica & IT",
    description:
      "Tecnología al servicio de tu tranquilidad. CCTV, control de acceso, redes e infraestructura IT en Santa Marta, Colombia.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CMR Solutions — Seguridad Electrónica & IT",
    description:
      "Tecnología al servicio de tu tranquilidad. Soluciones inteligentes en seguridad e IT.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0e1a",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "CMR Solutions",
  description:
    "Empresa de seguridad electrónica e infraestructura IT en Santa Marta, Colombia.",
  url: "https://cmrsolutions.co",
  telephone: "+573046717881",
  email: "soporte@cmrsolutions.co",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Santa Marta",
    addressRegion: "Magdalena",
    addressCountry: "CO",
  },
  sameAs: ["https://instagram.com/cmrsolutions.co"],
  areaServed: { "@type": "Country", name: "Colombia" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrains.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <TechBackground />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
