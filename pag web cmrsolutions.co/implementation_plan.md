# CMR Solutions – Página Web Corporativa Premium

Crear una página web moderna, tecnológica y premium para **CMR Solutions** (cmrsolutions.co), empresa de seguridad electrónica e infraestructura IT en Santa Marta, Colombia. Inspirada visualmente en Supervisa.co pero con identidad propia basada en el logo proporcionado.

## User Review Required

> [!IMPORTANT]
> **Stack tecnológico solicitado**: Next.js + TailwindCSS + Framer Motion. Este plan implementa exactamente esa combinación tal como lo solicitaste.

> [!IMPORTANT]
> **Logo**: Usaré el logo que proporcionaste (escudo con circuito + "CMR Solutions") para recrear el logotipo como SVG en la web, manteniendo la estética exacta de tu marca.

> [!IMPORTANT]
> **Imágenes de galería/proyectos**: Como no se proporcionaron imágenes reales de proyectos, generaré imágenes de alta calidad con IA para la sección de galería. Podrás reemplazarlas después con fotos reales de tus instalaciones.

## Paleta de Colores (extraída del logo)

| Token | Color | Uso |
|-------|-------|-----|
| `--bg-primary` | `#0a0e1a` | Fondo principal (casi negro azulado) |
| `--bg-secondary` | `#0d1529` | Fondo de tarjetas/secciones |
| `--bg-card` | `rgba(13, 21, 41, 0.7)` | Tarjetas glassmorphism |
| `--accent-blue` | `#0ea5e9` | Azul eléctrico principal (glow, botones) |
| `--accent-deep` | `#1e3a5f` | Azul oscuro profundo |
| `--accent-cyan` | `#22d3ee` | Cyan para acentos secundarios |
| `--text-primary` | `#ffffff` | Texto principal |
| `--text-secondary` | `#94a3b8` | Texto secundario |
| `--glow` | `0 0 20px rgba(14, 165, 233, 0.3)` | Efecto glow azul |

## Tipografía

- **Headings**: `Inter` (Google Fonts) — bold, modern, tech feel
- **Body**: `Inter` — limpio y legible
- **Monospace accents**: `JetBrains Mono` — para detalles tech

## Proposed Changes

### 1. Configuración del Proyecto Next.js

#### [NEW] Proyecto Next.js con TailwindCSS

Inicializar proyecto Next.js con las siguientes dependencias:
- `next` (App Router)
- `tailwindcss` v4
- `framer-motion` (animaciones)
- `react-icons` (iconos de servicios)
- `@fontsource/inter` y `@fontsource/jetbrains-mono`

```bash
npx -y create-next-app@latest ./ --tailwind --eslint --app --src-dir --import-alias "@/*" --typescript --no-turbopack
npm install framer-motion react-icons
```

---

### 2. Diseño Global y Sistema de Diseño

#### [NEW] [globals.css](file:///c:/Users/Elifff/Pictures/PAGINA%20WEB%20cmrsolutions.co/src/app/globals.css)
- Estilos base dark mode
- Variables CSS personalizadas
- Grid tecnológico como fondo animado (líneas sutiles que se mueven)
- Utilidades para glassmorphism
- Scrollbar personalizado estilo dark
- Animaciones de partículas/grid

#### [NEW] [tailwind.config.ts](file:///c:/Users/Elifff/Pictures/PAGINA%20WEB%20cmrsolutions.co/tailwind.config.ts)
- Extensión de colores con la paleta CMR
- Fuentes personalizadas
- Animaciones personalizadas (float, glow-pulse, fadeInUp)
- Breakpoints responsive

---

### 3. Layout Principal

#### [NEW] [layout.tsx](file:///c:/Users/Elifff/Pictures/PAGINA%20WEB%20cmrsolutions.co/src/app/layout.tsx)
- Meta tags SEO completos (title, description, OG tags)
- Google Fonts (Inter, JetBrains Mono)
- Schema.org structured data
- Viewport y favicon

#### [NEW] [page.tsx](file:///c:/Users/Elifff/Pictures/PAGINA%20WEB%20cmrsolutions.co/src/app/page.tsx)
- Composición de todas las secciones
- Scroll suave entre secciones

---

### 4. Componentes

#### [NEW] [Navbar.tsx](file:///c:/Users/Elifff/Pictures/PAGINA%20WEB%20cmrsolutions.co/src/components/Navbar.tsx)
- Header sticky con blur de fondo (glassmorphism)
- Logo SVG de CMR Solutions
- Navegación: Inicio, Servicios, Nosotros, Proyectos, Contacto
- Botón CTA "Contáctanos" con glow
- Menú hamburguesa en móvil con animación Framer Motion
- Cambio de estilo al hacer scroll

#### [NEW] [HeroSection.tsx](file:///c:/Users/Elifff/Pictures/PAGINA%20WEB%20cmrsolutions.co/src/components/HeroSection.tsx)
- Fondo animado con grid tecnológico + partículas
- Logo grande de CMR Solutions
- H1: **"Soluciones Inteligentes en Seguridad & IT"**
- Subtítulo: **"Protegemos y conectamos tu empresa con tecnología de última generación."**
- Botón primario: **"Contáctanos por WhatsApp"** (enlace directo a WhatsApp)
- Botón secundario: **"Ver Servicios"** (scroll a servicios)
- Efecto glassmorphism en contenedor principal
- Animación stagger de entrada (Framer Motion)
- Efecto de partículas/grid animado en canvas o SVG

#### [NEW] [ServicesSection.tsx](file:///c:/Users/Elifff/Pictures/PAGINA%20WEB%20cmrsolutions.co/src/components/ServicesSection.tsx)
7 tarjetas de servicios con:
1. 📹 Cámaras CCTV y Videovigilancia
2. 🔒 Control de Acceso
3. 🌐 Redes e Infraestructura
4. 🔧 Diagnóstico y Mantenimiento
5. ⚡ Automatización
6. 🛠️ Soporte Tecnológico
7. 💻 Mantenimiento de Equipos de Cómputo

Cada tarjeta:
- Icono SVG/React Icons con glow
- Título del servicio
- Descripción breve
- Borde sutil brillante al hover
- Animación de elevación al hover
- Fade-in staggered al entrar en viewport

#### [NEW] [WhyChooseUs.tsx](file:///c:/Users/Elifff/Pictures/PAGINA%20WEB%20cmrsolutions.co/src/components/WhyChooseUs.tsx)
6 ventajas competitivas:
1. Atención personalizada
2. Tecnología moderna
3. Soporte técnico 24/7
4. Instalación profesional
5. Seguridad empresarial
6. Experiencia en infraestructura IT

Diseño: Grid de cards con icono, número/stat y descripción
Efecto: Línea de conexión entre cards (estilo circuito) + hover glow

#### [NEW] [GallerySection.tsx](file:///c:/Users/Elifff/Pictures/PAGINA%20WEB%20cmrsolutions.co/src/components/GallerySection.tsx)
- Grid masonry/bento con 6 imágenes de proyectos:
  - Instalación CCTV
  - Rack de servidores
  - Cableado estructurado
  - Control de acceso
  - Networking
  - Centro de monitoreo
- Overlay con título del proyecto al hover
- Animación de zoom suave al hover
- Modal lightbox al click (opcional fase 1)

#### [NEW] [CTASection.tsx](file:///c:/Users/Elifff/Pictures/PAGINA%20WEB%20cmrsolutions.co/src/components/CTASection.tsx)
- Fondo con gradiente brillante azul
- Título: **"¿Necesitas una solución tecnológica para tu empresa?"**
- Subtítulo motivacional
- Botón grande de WhatsApp con animación pulse
- Efecto glassmorphism del contenedor

#### [NEW] [Footer.tsx](file:///c:/Users/Elifff/Pictures/PAGINA%20WEB%20cmrsolutions.co/src/components/Footer.tsx)
- Logo CMR Solutions
- Columnas: Servicios, Contacto, Redes
- WhatsApp: +57 304 671 7881
- Instagram: @cmrsolutions.co
- Ubicación: Santa Marta, Colombia
- Email: contacto@cmrsolutions.co (placeholder)
- Copyright © 2026 CMR Solutions
- Diseño con bordes sutiles y separadores

#### [NEW] [WhatsAppButton.tsx](file:///c:/Users/Elifff/Pictures/PAGINA%20WEB%20cmrsolutions.co/src/components/WhatsAppButton.tsx)
- Botón flotante fijo en esquina inferior derecha
- Ícono de WhatsApp
- Animación pulse permanente
- Link: `https://wa.me/573046717881?text=Hola%2C%20quiero%20información%20sobre%20sus%20servicios%20tecnológicos.`
- Tooltip al hover: "Chatea con nosotros"
- Z-index alto para siempre estar visible

#### [NEW] [TechBackground.tsx](file:///c:/Users/Elifff/Pictures/PAGINA%20WEB%20cmrsolutions.co/src/components/TechBackground.tsx)
- Fondo animado con grid de líneas tecnológicas
- Partículas flotantes sutiles
- Efecto de nodos conectados estilo red neuronal
- Renderizado con CSS animations (performant)

---

### 5. Imágenes Generadas

Se generarán imágenes con IA para la sección de galería:
1. Instalación de cámaras CCTV profesional
2. Rack de servidores organizado
3. Cableado estructurado
4. Sistema de control de acceso
5. Red de networking empresarial
6. Centro de monitoreo de seguridad

---

### 6. Animaciones (Framer Motion)

| Elemento | Animación |
|----------|-----------|
| Hero text | fadeInUp staggered (0.2s delay cada línea) |
| Service cards | fadeInUp al entrar en viewport |
| Why choose us | Scale-in con delay progresivo |
| Gallery | Fade + scale al viewport |
| CTA | Slide-up con glow pulse |
| Navbar | Backdrop blur transition al scroll |
| WhatsApp btn | Pulse continuo + bounce al hover |

---

### 7. Integraciones

#### WhatsApp
- Número: `+573046717881`
- Mensaje automático: `Hola, quiero información sobre sus servicios tecnológicos.`
- Botón flotante permanente
- Botón principal en Hero y CTA

#### Instagram
- Link: `https://instagram.com/cmrsolutions.co`
- Ícono en Footer y como ícono social

---

## Estructura de Archivos

```
📁 src/
├── 📁 app/
│   ├── layout.tsx          # Layout principal + SEO
│   ├── page.tsx            # Página principal
│   ├── globals.css         # Estilos globales + design tokens
│   └── favicon.ico
├── 📁 components/
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── ServicesSection.tsx
│   ├── WhyChooseUs.tsx
│   ├── GallerySection.tsx
│   ├── CTASection.tsx
│   ├── Footer.tsx
│   ├── WhatsAppButton.tsx
│   └── TechBackground.tsx
└── 📁 public/
    └── 📁 images/
        └── (imágenes generadas)
```

## Verification Plan

### Automated Tests
```bash
npm run build     # Verificar que compila sin errores
npm run lint      # Verificar linting
```

### Manual Verification
- Ejecutar `npm run dev` y verificar visualmente cada sección
- Verificar responsive en viewports: 320px, 768px, 1024px, 1440px
- Verificar que WhatsApp abre correctamente
- Verificar que Instagram redirige correctamente
- Verificar animaciones suaves
- Verificar rendimiento con Lighthouse
- Verificar que el build funciona para deploy en Netlify/Vercel
