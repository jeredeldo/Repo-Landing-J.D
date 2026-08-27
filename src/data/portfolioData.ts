import { PersonalInfo, Service, SkillCategory, Project, Stat, SocialLink } from '@/types/portfolio';

export const brandData = {
  name: "ALBION WEB",
  tagline: "Desarrollo & Diseño Web de Alto Impacto",
  description: "Creamos experiencias digitales minimalistas, ultra rápidas y enfocadas en acelerar el crecimiento de tu marca.",
  founder: "Jeremías Del Do",
  founderRole: "Fundador & Lead Web Developer",
};

export const personalData: PersonalInfo = {
  name: "Jeremías Del Do",
  role: "Fundador & Lead Web Developer en ALBION WEB",
  shortBio: "Lidero ALBION WEB, creando sitios web minimalistas, ultra rápidos y con estándares internacionales de diseño para empresas y marcas exigentes.",
  fullBio: [
    "Bienvenido a ALBION WEB. Somos un estudio independiente dedicado al diseño y desarrollo de proyectos digitales de alto impacto para negocios, marcas y profesionales.",
    "Bajo la dirección de Jeremías Del Do, nos especializamos en transformar la presencia digital de nuestros clientes combinando una estética monocromática minimalista, ingeniería de software moderna (Next.js, TypeScript, React) y optimización SEO orientada a conversiones.",
    "Acompañamos cada proyecto desde la conceptualización estratégica hasta la publicación final, garantizando plazos de entrega rigurosos, atención personalizada y un resultado final sofisticado y duradero."
  ],
  location: "Argentina (Disponible para Clientes Globales)",
  email: "jeremias.deldo@gmail.com",
  linkedin: "https://www.linkedin.com/in/jerem%C3%ADas-del-do-92277a38a/",
  github: "https://github.com/jeredeldo",
  availableForWork: true,
  avatarUrl: "/albion-logo.jpg",
  resumeUrl: "#"
};

export const servicesData: Service[] = [
  {
    id: "landing-pages",
    title: "Landing Pages de Alta Conversión",
    description: "Páginas exclusivas diseñadas para destacar tu producto o servicio, captar clientes calificados y potenciar tus campañas de publicidad.",
    iconName: "Rocket",
    features: [
      "Diseño minimalista premium de alta gama",
      "Carga instantánea (< 1 segundo)",
      "Integración directa con WhatsApp y formularios",
      "Optimización para Google Ads & Meta Ads"
    ],
    popular: true
  },
  {
    id: "sitios-corporativos",
    title: "Sitios Web Corporativos",
    description: "La plataforma digital definitiva para tu empresa. Transmití solidez, autoridad y elegancia ante tus clientes e inversores.",
    iconName: "Building2",
    features: [
      "Estructura institucional completa",
      "Diseño 100% adaptable a celulares y pantallas 4K",
      "Posicionamiento SEO estratégico inicial",
      "Dominio, servidor seguro y correos corporativos"
    ]
  },
  {
    id: "e-commerce",
    title: "Tiendas Online (E-Commerce)",
    description: "Plataformas virtuales de venta 24/7 diseñadas para ofrecer una experiencia de compra fluida, rápida y segura.",
    iconName: "ShoppingBag",
    features: [
      "Catálogo interactivo de productos",
      "Integración con MercadoPago, Stripe y tarjetas",
      "Carrito de compras sin interrupciones",
      "Panel de administración intuitivo"
    ]
  },
  {
    id: "optimizacion-seo",
    title: "Rediseño & Optimización de Elite",
    description: "Modernizamos tu plataforma actual reemplazando tecnologías obsoletas por código moderno, veloz y de bajo mantenimiento.",
    iconName: "Zap",
    features: [
      "Rediseño bajo la identidad ALBION WEB",
      "Aceleración de rendimiento Google PageSpeed 95+",
      "Auditoría de usabilidad y conversión UX/UI",
      "Mantenimiento técnico y soporte garantizado"
    ]
  }
];

export const statsData: Stat[] = [
  {
    label: "Garantía de Calidad",
    value: "100%",
    description: "Satisfacción total en cada entrega"
  },
  {
    label: "Cumplimiento",
    value: "Puntual",
    description: "Fechas de lanzamiento estrictas"
  },
  {
    label: "Rendimiento",
    value: "99/100",
    description: "Puntuación en Google PageSpeed"
  },
  {
    label: "Soporte ALBION",
    value: "24/7",
    description: "Acompañamiento continuo post-lanzamiento"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "design-dev",
    name: "Estándares de Desarrollo & Diseño",
    skills: [
      { name: "Next.js 15 & React", iconName: "Zap", level: "Arquitectura", featured: true },
      { name: "TypeScript", iconName: "Code2", level: "Ingeniería", featured: true },
      { name: "Tailwind CSS & Monocromo", iconName: "Palette", level: "Diseño UI", featured: true },
      { name: "Diseño UX/UI Minimalista", iconName: "Figma", level: "Experiencia", featured: true },
      { name: "SEO & Performance", iconName: "Globe", level: "Posicionamiento", featured: true },
      { name: "E-Commerce Integrado", iconName: "ShieldCheck", level: "Pagos", featured: true },
    ]
  },
  {
    id: "infrastructure",
    name: "Infraestructura & Plataformas",
    skills: [
      { name: "Vercel / Cloud Edge", iconName: "Cloud", level: "Despliegue", featured: true },
      { name: "Node.js & REST APIs", iconName: "Server", level: "Backend", featured: true },
      { name: "MercadoPago & Stripe API", iconName: "ShieldCheck", level: "Pasarelas", featured: true },
      { name: "Headless CMS & Databases", iconName: "Database", level: "Contenidos" },
      { name: "Git & Control de Código", iconName: "GitBranch", level: "Versiones" }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "albion-corporate",
    title: "Plataforma Web Corporativa",
    description: "Desarrollo web institucional de alta gama para empresa de tecnología y negocios globales. Estética minimalista monocromática y carga instantánea.",
    longDescription: "Diseñado para posicionar la marca con autoridad. Incluye catálogo interactivo, módulo de servicios y captación de clientes de alto valor.",
    image: "/projects/nexus-ai.webp",
    tags: ["Corporativo", "ALBION WEB", "Next.js 15", "Minimalista"],
    category: "Full Stack",
    githubUrl: "https://github.com/jeredeldo",
    demoUrl: "https://nexus-ai-demo.vercel.app",
    featured: true,
    clientBadge: "Cliente Corporativo"
  },
  {
    id: "albion-portal",
    title: "Portal de Consultoría & Analítica",
    description: "Sitio web y plataforma interactiva para firma de consultoría financiera con panel de clientes en vivo.",
    longDescription: "Solución a medida para visualización de informes y gestión de servicios. Interfaz sobria en blanco y negro.",
    image: "/projects/ecopulse.webp",
    tags: ["Portal Web", "Consultoría", "React", "UI Monocromática"],
    category: "Full Stack",
    githubUrl: "https://github.com/jeredeldo",
    demoUrl: "https://ecopulse-demo.vercel.app",
    featured: true,
    clientBadge: "Firma Financiera"
  },
  {
    id: "albion-store",
    title: "Tienda Online E-Commerce Premium",
    description: "E-Commerce de lujo para marca de diseño. Catálogo interactivo, pasarela de pago instantánea y experiencia fluida en móviles.",
    longDescription: "Tienda virtual optimizada para ventas internacionales. Proceso de pago simplificado y catálogo visual de alto rendimiento.",
    image: "/projects/aura-commerce.webp",
    tags: ["E-Commerce", "Stripe / MercadoPago", "Minimalista", "Next.js"],
    category: "Frontend",
    githubUrl: "https://github.com/jeredeldo",
    demoUrl: "https://aura-commerce.vercel.app",
    featured: true,
    clientBadge: "Marca de Lujo"
  },
  {
    id: "albion-landing",
    title: "Landing Page de Alta Conversión",
    description: "Landing page de captación para lanzamiento digital con flujo de reservas automatizado y métricas en tiempo real.",
    longDescription: "Optimizada para campañas publicitarias de alto presupuesto. Tasa de conversión de leads maximizada.",
    image: "/projects/flowcraft.webp",
    tags: ["Landing Page", "Leads", "SEO Edge", "High Performance"],
    category: "Frontend",
    githubUrl: "https://github.com/jeredeldo",
    demoUrl: "https://flowcraft-api.vercel.app",
    featured: true,
    clientBadge: "Lanzamiento Digital"
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/jerem%C3%ADas-del-do-92277a38a/",
    iconName: "Linkedin"
  },
  {
    name: "GitHub",
    url: "https://github.com/jeredeldo",
    iconName: "Github"
  },
  {
    name: "Email",
    url: "mailto:jeremias.deldo@gmail.com",
    iconName: "Mail"
  }
];
