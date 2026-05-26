export const SITE = {
  name: 'CMR Solutions',
  domain: 'cmrsolutions.co',
  url: 'https://cmrsolutions.co',
  tagline: 'Tecnología al servicio de tu tranquilidad',
  location: 'Santa Marta, Colombia',
  email: 'comercial@cmrsolutions.co',
  description:
    'Soluciones inteligentes en seguridad electrónica e infraestructura IT.',
} as const;

export const CONTACT = {
  whatsappNumber: '573046717881',
  whatsappDisplay: '+57 304 671 7881',
  whatsappMessage: 'Hola, quiero información sobre sus servicios tecnológicos.',
  instagram: 'https://instagram.com/cmrsolutions.co',
  instagramHandle: '@cmrsolutions.co',
} as const;

export const WHATSAPP_URL = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
  CONTACT.whatsappMessage,
)}`;

export const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#ventajas', label: 'Ventajas' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#contacto', label: 'Contacto' },
] as const;

export const SERVICES = [
  {
    icon: 'FaVideo',
    title: 'Cámaras CCTV y Videovigilancia',
    description:
      'Sistemas IP, análogos e híbridos. Monitoreo 24/7 con tecnología Dahua y Hikvision.',
  },
  {
    icon: 'FaFingerprint',
    title: 'Control de Acceso',
    description:
      'Lectores biométricos, RFID, tarjetas y apps móviles. Protege espacios críticos.',
  },
  {
    icon: 'FaNetworkWired',
    title: 'Redes e Infraestructura',
    description:
      'Cableado estructurado, switches, routers y configuración profesional empresarial.',
  },
  {
    icon: 'FaTools',
    title: 'Diagnóstico y Mantenimiento',
    description:
      'Auditorías, prevención de fallos y mantenimiento preventivo a tu infraestructura.',
  },
  {
    icon: 'FaBolt',
    title: 'Automatización',
    description:
      'Soluciones inteligentes que conectan dispositivos y optimizan tus procesos.',
  },
  {
    icon: 'FaHeadset',
    title: 'Soporte Tecnológico',
    description:
      'Asesoría y soporte técnico remoto y en sitio para tu equipo y empresa.',
  },
  {
    icon: 'FaDesktop',
    title: 'Mantenimiento de Cómputo',
    description:
      'Reparación, optimización y actualización de equipos de cómputo y servidores.',
  },
] as const;

export const ADVANTAGES = [
  {
    icon: 'FaUserShield',
    title: 'Atención personalizada',
    description:
      'Cada cliente recibe una solución diseñada a la medida de su operación.',
  },
  {
    icon: 'FaMicrochip',
    title: 'Tecnología moderna',
    description:
      'Equipos y marcas líderes del mercado con garantía de fábrica.',
  },
  {
    icon: 'FaClock',
    title: 'Soporte técnico 24/7',
    description:
      'Respaldo continuo cuando lo necesites — sin interrupciones operativas.',
  },
  {
    icon: 'FaCertificate',
    title: 'Instalación profesional',
    description:
      'Personal capacitado y certificado en instalación y configuración.',
  },
  {
    icon: 'FaLock',
    title: 'Seguridad empresarial',
    description:
      'Protocolos robustos para proteger tu información y activos críticos.',
  },
  {
    icon: 'FaServer',
    title: 'Experiencia en IT',
    description:
      'Años de trayectoria implementando infraestructura tecnológica confiable.',
  },
] as const;

export const PROJECTS = [
  {
    title: 'Instalación CCTV Exterior',
    category: 'Videovigilancia',
    accent: 'blue',
    iconType: 'camera',
  },
  {
    title: 'Rack de Servidores',
    category: 'Infraestructura',
    accent: 'cyan',
    iconType: 'server',
  },
  {
    title: 'Cableado Estructurado',
    category: 'Networking',
    accent: 'blue',
    iconType: 'cables',
  },
  {
    title: 'Control de Acceso Biométrico',
    category: 'Seguridad',
    accent: 'cyan',
    iconType: 'fingerprint',
  },
  {
    title: 'Switch & Networking',
    category: 'Redes',
    accent: 'blue',
    iconType: 'network',
  },
  {
    title: 'Centro de Monitoreo',
    category: 'Operaciones',
    accent: 'cyan',
    iconType: 'monitor',
  },
] as const;
