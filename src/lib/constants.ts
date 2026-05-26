export const SITE = {
  name: "CMR Solutions",
  domain: "cmrsolutions.co",
  url: "https://cmrsolutions.co",
  tagline: "Tecnología al servicio de tu tranquilidad",
  location: "Santa Marta, Colombia",
  email: "soporte@cmrsolutions.co",
  description:
    "Soluciones inteligentes en seguridad electrónica e infraestructura IT.",
} as const;

export const CONTACT = {
  whatsappNumber: "573046717881",
  whatsappDisplay: "+57 304 671 7881",
  whatsappMessage: "Hola, quiero información sobre sus servicios tecnológicos.",
  instagram: "https://instagram.com/cmrsolutions.co",
  instagramHandle: "@cmrsolutions.co",
} as const;

export const WHATSAPP_URL = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
  CONTACT.whatsappMessage,
)}`;

export const whatsappLinkFor = (subject: string) =>
  `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
    `Hola, quiero información sobre: ${subject}`,
  )}`;

export type NavLink = {
  href: string;
  label: string;
  hasDropdown?: boolean;
};

export const NAV_LINKS: readonly NavLink[] = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios", hasDropdown: true },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export type Service = {
  slug: string;
  icon: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  features: readonly string[];
  benefits: readonly string[];
  useCases: readonly string[];
};

export const SERVICES: readonly Service[] = [
  {
    slug: "cctv-videovigilancia",
    icon: "FaVideo",
    title: "Cámaras CCTV y Videovigilancia",
    shortDescription:
      "Sistemas IP, análogos e híbridos. Monitoreo 24/7 con tecnología Dahua y Hikvision.",
    longDescription:
      "Diseñamos e instalamos sistemas de videovigilancia profesional adaptados a tu operación. Trabajamos con las mejores marcas del mercado (Dahua, Hikvision, Imou) para garantizar imagen de alta resolución, almacenamiento confiable y acceso remoto desde cualquier dispositivo.",
    features: [
      "Cámaras IP de 2MP, 4MP y 8MP (4K)",
      "Visión nocturna con tecnología infrarroja y Color Night",
      "DVR / NVR con almacenamiento configurable",
      "Acceso remoto vía app móvil (iOS / Android)",
      "Visualización multipantalla en tiempo real",
      "Sistemas inalámbricos y por cable Ethernet (PoE)",
    ],
    benefits: [
      "Disuasión visible contra robos e intrusiones",
      "Evidencia digital ante incidentes o disputas",
      "Control remoto del establecimiento desde cualquier lugar",
      "Reducción de costos operativos en vigilancia",
    ],
    useCases: [
      "Comercios, bodegas y oficinas",
      "Conjuntos residenciales y casas",
      "Industria, hoteles y restaurantes",
      "Establecimientos educativos y de salud",
    ],
  },
  {
    slug: "control-de-acceso",
    icon: "FaFingerprint",
    title: "Control de Acceso",
    shortDescription:
      "Lectores biométricos, RFID, tarjetas y apps móviles. Protege espacios críticos.",
    longDescription:
      "Implementamos sistemas de control de acceso que permiten gestionar quién entra y sale de cada espacio. Desde lectores biométricos de huella y reconocimiento facial hasta tarjetas RFID y soluciones con app móvil, te ayudamos a proteger zonas sensibles con tecnología confiable.",
    features: [
      "Lectores biométricos (huella, rostro, palma)",
      "Tarjetas RFID y proximidad",
      "Apertura por código PIN o app móvil",
      "Software de gestión centralizada de usuarios",
      "Registro de entradas/salidas (auditoría)",
      "Integración con torniquetes, electroimanes y barreras",
    ],
    benefits: [
      "Control total de quién accede a cada zona",
      "Eliminación de llaves físicas y duplicados",
      "Reportes de asistencia y presencia automatizados",
      "Mayor seguridad para áreas restringidas",
    ],
    useCases: [
      "Oficinas y empresas con áreas restringidas",
      "Centros de datos y cuartos de servidores",
      "Bodegas y zonas industriales",
      "Edificios residenciales con torniquetes",
    ],
  },
  {
    slug: "redes-e-infraestructura",
    icon: "FaNetworkWired",
    title: "Redes e Infraestructura",
    shortDescription:
      "Cableado estructurado, switches, routers y configuración profesional empresarial.",
    longDescription:
      "Diseñamos e implementamos redes empresariales robustas: desde el cableado estructurado certificado hasta la configuración de switches administrables, routers y firewalls. Tu red es la columna vertebral de tu negocio — la construimos para que sea rápida, segura y escalable.",
    features: [
      "Cableado estructurado Cat 6 y Cat 6A certificado",
      "Switches administrables PoE y no-PoE",
      "Configuración de VLANs y segmentación de red",
      "Puntos de acceso WiFi empresariales (Ubiquiti, TP-Link)",
      "Routers y firewalls de nueva generación",
      "Racks, patch panels y organización profesional",
    ],
    benefits: [
      "Velocidad y estabilidad sin caídas",
      "Red preparada para crecer con tu empresa",
      "Segmentación de tráfico para mayor seguridad",
      "Documentación completa de la infraestructura",
    ],
    useCases: [
      "Oficinas que crecen y necesitan infraestructura sólida",
      "Hoteles, restaurantes y centros comerciales",
      "Industria con múltiples puntos de red",
      "Conjuntos residenciales con WiFi comunitario",
    ],
  },
  {
    slug: "diagnostico-y-mantenimiento",
    icon: "FaTools",
    title: "Diagnóstico y Mantenimiento",
    shortDescription:
      "Auditorías, prevención de fallos y mantenimiento preventivo a tu infraestructura.",
    longDescription:
      "Auditamos tu infraestructura tecnológica actual, identificamos puntos críticos y diseñamos un plan de mantenimiento preventivo que evita caídas y prolonga la vida útil de tus equipos. Prevenir es mucho más barato que reparar.",
    features: [
      "Auditoría técnica de cámaras, redes y equipos",
      "Limpieza física de equipos y racks",
      "Actualización de firmware y software",
      "Revisión de cableado y conexiones",
      "Pruebas de rendimiento y conectividad",
      "Reportes técnicos con recomendaciones",
    ],
    benefits: [
      "Detección temprana de problemas",
      "Reducción de tiempos de inactividad",
      "Mayor vida útil de los equipos",
      "Optimización del rendimiento",
    ],
    useCases: [
      "Empresas con infraestructura instalada hace años",
      "Locales con caídas frecuentes de red",
      "Sistemas CCTV con cámaras intermitentes",
      "Diagnóstico previo a expansión o remodelación",
    ],
  },
  {
    slug: "automatizacion",
    icon: "FaBolt",
    title: "Automatización",
    shortDescription:
      "Soluciones inteligentes que conectan dispositivos y optimizan tus procesos.",
    longDescription:
      "Implementamos soluciones de automatización que integran cámaras, alarmas, iluminación, climatización y control de acceso en una sola plataforma. Tu negocio o casa funcionando solo, con reglas inteligentes que se adaptan a tu rutina.",
    features: [
      "Integración de cámaras + alarmas + iluminación",
      "Automatización por horarios y eventos",
      "Notificaciones inteligentes a tu celular",
      "Control por voz (Alexa, Google Assistant)",
      "Escenarios programables (apertura, cierre, alarma)",
      "Domótica residencial y comercial",
    ],
    benefits: [
      "Ahorro de energía y tiempo",
      "Operación remota desde cualquier lugar",
      "Respuesta automática ante eventos",
      "Mejor experiencia para clientes y empleados",
    ],
    useCases: [
      "Locales comerciales con horarios fijos",
      "Casas inteligentes (smart home)",
      "Bodegas con encendido/apagado automatizado",
      "Hoteles con automatización por habitación",
    ],
  },
  {
    slug: "soporte-tecnologico",
    icon: "FaHeadset",
    title: "Soporte Tecnológico",
    shortDescription:
      "Asesoría y soporte técnico remoto y en sitio para tu equipo y empresa.",
    longDescription:
      "Ofrecemos soporte técnico remoto y en sitio para resolver problemas rápidamente. Planes de soporte mensual o por evento, con tiempos de respuesta garantizados. Somos tu departamento de IT externo cuando lo necesites.",
    features: [
      "Soporte remoto vía AnyDesk, TeamViewer",
      "Visitas técnicas en sitio en Santa Marta y alrededores",
      "Mesa de ayuda por WhatsApp y teléfono",
      "Planes mensuales de soporte con SLA",
      "Asesoría en compra y renovación de equipos",
      "Capacitación a usuarios finales",
    ],
    benefits: [
      "Respuesta rápida a incidentes",
      "Reducción de tiempos perdidos por fallos",
      "Costo predecible con plan mensual",
      "Tranquilidad de tener un equipo experto a la mano",
    ],
    useCases: [
      "PYMES sin departamento de IT propio",
      "Profesionales independientes con oficina",
      "Tiendas, locales y franquicias",
      "Soporte post-instalación a clientes existentes",
    ],
  },
  {
    slug: "mantenimiento-de-computo",
    icon: "FaDesktop",
    title: "Mantenimiento de Cómputo",
    shortDescription:
      "Reparación, optimización y actualización de equipos de cómputo y servidores.",
    longDescription:
      "Reparación, optimización y mantenimiento de computadores de escritorio, portátiles, all-in-one y servidores. Cambio de discos a SSD, ampliación de RAM, limpieza profunda, instalación de software y recuperación de información.",
    features: [
      "Mantenimiento preventivo y correctivo",
      "Migración HDD → SSD para máxima velocidad",
      "Ampliación de RAM y mejoras de hardware",
      "Reinstalación de Windows y software base",
      "Recuperación de información y backups",
      "Limpieza física y de software (malware)",
    ],
    benefits: [
      "Equipos que vuelven a sentirse nuevos",
      "Mayor productividad de tus colaboradores",
      "Ahorro vs. comprar equipo nuevo",
      "Mejor rendimiento en aplicaciones pesadas",
    ],
    useCases: [
      "Equipos lentos o que tardan en arrancar",
      "Migración masiva de equipos de oficina",
      "Recuperación tras fallas de disco",
      "Preparación de equipos antes de entregarlos",
    ],
  },
];

export const ADVANTAGES = [
  {
    icon: "FaUserShield",
    title: "Atención personalizada",
    description: "Cada cliente recibe una solución diseñada a la medida de su operación.",
  },
  {
    icon: "FaMicrochip",
    title: "Tecnología moderna",
    description: "Equipos y marcas líderes del mercado con garantía de fábrica.",
  },
  {
    icon: "FaClock",
    title: "Soporte técnico 24/7",
    description: "Respaldo continuo cuando lo necesites — sin interrupciones operativas.",
  },
  {
    icon: "FaCertificate",
    title: "Instalación profesional",
    description: "Personal capacitado y certificado en instalación y configuración.",
  },
  {
    icon: "FaLock",
    title: "Seguridad empresarial",
    description: "Protocolos robustos para proteger tu información y activos críticos.",
  },
  {
    icon: "FaServer",
    title: "Experiencia en IT",
    description: "Años de trayectoria implementando infraestructura tecnológica confiable.",
  },
] as const;

export const PROJECTS = [
  {
    title: "Instalación CCTV Exterior",
    category: "Videovigilancia",
    accent: "blue",
    iconType: "camera",
  },
  {
    title: "Rack de Servidores",
    category: "Infraestructura",
    accent: "cyan",
    iconType: "server",
  },
  {
    title: "Cableado Estructurado",
    category: "Networking",
    accent: "blue",
    iconType: "cables",
  },
  {
    title: "Control de Acceso Biométrico",
    category: "Seguridad",
    accent: "cyan",
    iconType: "fingerprint",
  },
  {
    title: "Switch & Networking",
    category: "Redes",
    accent: "blue",
    iconType: "network",
  },
  {
    title: "Centro de Monitoreo",
    category: "Operaciones",
    accent: "cyan",
    iconType: "monitor",
  },
  {
    title: "CCTV Comercial Indoor",
    category: "Videovigilancia",
    accent: "cyan",
    iconType: "camera",
  },
  {
    title: "Cableado para Hotel",
    category: "Networking",
    accent: "blue",
    iconType: "cables",
  },
  {
    title: "Sistema Biométrico Empresa",
    category: "Seguridad",
    accent: "cyan",
    iconType: "fingerprint",
  },
] as const;

export const COMPANY = {
  founded: "Años de experiencia",
  mission:
    "Brindar soluciones tecnológicas confiables que protejan y potencien el crecimiento de empresas y personas en la Costa Caribe colombiana.",
  vision:
    "Ser el aliado tecnológico de referencia en seguridad electrónica e infraestructura IT en el norte de Colombia, reconocidos por la calidad, innovación y servicio.",
  values: [
    {
      icon: "FaShieldAlt",
      title: "Confianza",
      description: "Cumplimos lo que prometemos. Tu tranquilidad es nuestro compromiso.",
    },
    {
      icon: "FaLightbulb",
      title: "Innovación",
      description: "Buscamos siempre la tecnología más actualizada para tu negocio.",
    },
    {
      icon: "FaHandshake",
      title: "Compromiso",
      description: "Nos involucramos con tu proyecto como si fuera nuestro.",
    },
    {
      icon: "FaAward",
      title: "Calidad",
      description: "Trabajamos con marcas reconocidas y estándares profesionales.",
    },
  ],
} as const;
