# CMR Solutions — Landing Web

Sitio web corporativo de **CMR Solutions** (cmrsolutions.co), empresa de seguridad electrónica e infraestructura IT en Santa Marta, Colombia.

> _Tecnología al servicio de tu tranquilidad._

---

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **TailwindCSS 3** con paleta personalizada
- **Framer Motion** para animaciones
- **React Icons** para iconografía
- 100% responsive · SEO optimizado · Dark mode nativo

## Estructura

```
src/
├── app/
│   ├── layout.tsx       # Layout + SEO metadata + fuentes
│   ├── page.tsx         # Página principal (compone todas las secciones)
│   └── globals.css      # Tokens de diseño + utilidades
├── components/
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── ServicesSection.tsx
│   ├── WhyChooseUs.tsx
│   ├── GallerySection.tsx
│   ├── ProjectCard.tsx
│   ├── CTASection.tsx
│   ├── Footer.tsx
│   ├── WhatsAppButton.tsx
│   ├── TechBackground.tsx
│   └── Logo.tsx
└── lib/
    └── constants.ts     # Datos centrales (servicios, contacto, etc.)
```

---

## Desarrollo local

```powershell
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

### Comandos disponibles

| Comando | Acción |
|---------|--------|
| `npm run dev` | Servidor de desarrollo en `:3000` |
| `npm run build` | Build de producción |
| `npm start` | Sirve el build de producción |
| `npm run lint` | Verifica el código con ESLint |

---

## Deploy en Vercel (recomendado)

### Opción A — Desde GitHub (1 click deploy)

1. Crea un repositorio en GitHub y sube este proyecto:
   ```powershell
   git init
   git add .
   git commit -m "feat: lanzamiento web CMR Solutions"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/cmrsolutions-web.git
   git push -u origin main
   ```

2. Entra a [vercel.com/new](https://vercel.com/new), conéctate con tu cuenta de GitHub y selecciona el repositorio.

3. Vercel detectará automáticamente Next.js. Solo presiona **Deploy**.

4. (Opcional) Configura tu dominio `cmrsolutions.co`:
   - Vercel Dashboard → tu proyecto → **Settings** → **Domains**
   - Añade `cmrsolutions.co` y `www.cmrsolutions.co`
   - Apunta los DNS de tu dominio según las instrucciones de Vercel

### Opción B — CLI

```powershell
npm install -g vercel
vercel login
vercel --prod
```

---

## Personalización

Toda la información editable está centralizada en [`src/lib/constants.ts`](./src/lib/constants.ts):

- **`SITE`** — nombre, dominio, eslogan, ubicación, email
- **`CONTACT`** — número de WhatsApp, mensaje precargado, Instagram
- **`SERVICES`** — lista de los 7 servicios mostrados
- **`ADVANTAGES`** — lista de las 6 ventajas competitivas
- **`PROJECTS`** — galería de proyectos

### Cambiar el número de WhatsApp

Edita `CONTACT.whatsappNumber` en `src/lib/constants.ts`. El número debe ir sin `+`, sin espacios, formato internacional (ej: `573046717881`).

### Reemplazar imágenes de galería con fotos reales

La galería actual usa ilustraciones SVG generadas. Para usar fotos reales:

1. Coloca tus fotos en `public/images/proyectos/` (recomendado JPG/WebP, 800×600 mínimo)
2. Edita `src/components/ProjectCard.tsx` para usar `next/image` apuntando a las nuevas rutas
3. Actualiza `PROJECTS` en `constants.ts` con las rutas

---

## SEO

- Meta tags configurados en `src/app/layout.tsx`
- Schema.org `LocalBusiness` incluido
- Open Graph y Twitter Card configurados
- Para subir un Open Graph image personalizado: coloca `og-image.png` (1200×630) en `public/` y agrégalo a `openGraph.images` en `layout.tsx`

---

## Próximas integraciones (planificadas)

La estructura está preparada para añadir sin refactor mayor:

- 💬 **Chatbot IA** — nuevo componente en `src/components/` + API route
- 🎫 **Sistema de tickets** — nueva ruta `src/app/tickets/`
- 📹 **Monitoreo Dahua DSS** — embed en `src/app/monitoreo/`
- 👤 **Panel cliente** — `src/app/cliente/` con NextAuth
- 🔄 **Webhooks n8n** — API routes en `src/app/api/webhooks/`

---

© 2026 CMR Solutions · Santa Marta, Colombia
