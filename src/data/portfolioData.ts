import { PersonalInfo, Service, SkillCategory, Project, Stat, SocialLink } from '@/types/portfolio';

export const personalData: PersonalInfo = {
  name: "Jeremías Del Do",
  role: "Desarrollador & Diseñador Web Freelance",
  shortBio: "Diseño y desarrollo sitios web profesionales, rápidos y atractivos pensados para hacer crecer tu marca y captar más clientes.",
  fullBio: [
    "Hola, soy Jeremías. Me dedico a crear páginas web de alto nivel para empresas, profesionales independientes y proyectos que buscan transmitir confianza y autoridad.",
    "Mi objetivo es convertir la presencia digital de mis clientes en su mejor herramienta de ventas: sitios web modernos, rápidos en celulares y computadoras, con diseño impecable y fácil navegación.",
    "Acompaño cada proyecto desde la idea inicial hasta el lanzamiento, asegurando comunicación fluida, entregas en tiempo y forma, y un resultado final del que te sientas orgulloso."
  ],
  location: "Argentina",
  email: "jeremias.deldo@gmail.com",
  linkedin: "https://www.linkedin.com/in/jerem%C3%ADas-del-do-92277a38a/",
  github: "https://github.com/jeredeldo",
  availableForWork: true,
  avatarUrl: "/avatar-placeholder.png",
  resumeUrl: "#"
};

export const servicesData: Service[] = [
  {
    id: "landing-pages",
    title: "Landing Pages de Alta Conversión",
    description: "Páginas clave diseñadas para promocionar un servicio o producto específico, captar clientes potenciales y maximizar el retorno de tu publicidad.",
    iconName: "Rocket",
    features: ["Diseño exclusivo enfocado en ventas", "Carga ultra rápida en móviles", "Integración con WhatsApp y formularios", "Optimizadas para Google Ads y redes"],
    popular: true
  },
  {
    id: "sitios-corporativos",
    title: "Sitios Web Corporativos",
    description: "La carta de presentación digital ideal para tu empresa o consultoría. Transmití profesionalismo, confianza y autoridad ante tus clientes.",
    iconName: "Building2",
    features: ["Secciones de servicios e historia", "Diseño responsive (adaptable a todo dispositivo)", "Posicionamiento SEO inicial", "Dominio y correo profesional"],
  },
  {
    id: "e-commerce",
    title: "Tiendas Online (E-Commerce)",
    description: "Vendé tus productos las 24 horas del día con una tienda virtual rápida, segura y fácil de administrar.",
    iconName: "ShoppingBag",
    features: ["Catálogo dinámico de productos", "Pasarela de pagos (MercadoPago / Stripe)", "Carrito de compras en tiempo real", "Panel de gestión de stock sencillo"],
  },
  {
    id: "optimizacion-seo",
    title: "Rediseño & Optimización Web",
    description: "Transformá un sitio antiguo o lento en una experiencia moderna, rápida y adaptable que destaque frente a tu competencia.",
    iconName: "Zap",
    features: ["Aceleración de tiempo de carga", "Rediseño visual moderno y limpio", "Corrección de errores y usabilidad", "Adaptación 100% móvil"],
  }
];

export const statsData: Stat[] = [
  {
    label: "Satisfacción",
    value: "100%",
    description: "Clientes satisfechos con el resultado"
  },
  {
    label: "Entregas a Tiempo",
    value: "Puntual",
    description: "Compromiso estricto con plazos"
  },
  {
    label: "Velocidad de Carga",
    value: "< 1 seg",
    description: "Páginas optimizadas al máximo"
  },
  {
    label: "Soporte Continuo",
    value: "24/7",
    description: "Acompañamiento post-lanzamiento"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "design-dev",
    name: "Diseño & Desarrollo Web",
    skills: [
      { name: "React / Next.js", iconName: "Zap", level: "Profesional", featured: true },
      { name: "HTML5 / CSS3", iconName: "Layout", level: "Profesional", featured: true },
      { name: "Tailwind CSS", iconName: "Palette", level: "Profesional", featured: true },
      { name: "TypeScript", iconName: "Code2", level: "Profesional", featured: true },
      { name: "Diseño UX/UI", iconName: "Figma", level: "Avanzado", featured: true },
      { name: "Optimización SEO", iconName: "Globe", level: "Avanzado", featured: true },
    ]
  },
  {
    id: "integrations",
    name: "Integraciones & Herramientas",
    skills: [
      { name: "WordPress / Headless", iconName: "Layers", level: "Avanzado", featured: true },
      { name: "Node.js & APIs", iconName: "Server", level: "Avanzado", featured: true },
      { name: "Bases de Datos", iconName: "Database", level: "Avanzado" },
      { name: "MercadoPago / Stripe", iconName: "ShieldCheck", level: "Avanzado", featured: true },
      { name: "Vercel / Hosting", iconName: "Cloud", level: "Profesional", featured: true },
      { name: "Git & Control de Versiones", iconName: "GitBranch", level: "Profesional" }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "nexus-saas",
    title: "Plataforma Web Corporativa",
    description: "Sitio web institucional para empresa de tecnología con diseño de alto nivel, animaciones suaves y panel de consultas directo.",
    longDescription: "Diseñado para maximizar la conversión de clientes corporativos. Incluye catálogo interactivo de soluciones, testimonios y formulario de contacto optimizado.",
    image: "/projects/nexus-ai.webp",
    tags: ["Sitio Corporativo", "Next.js", "Tailwind CSS", "Diseño UX/UI"],
    category: "Full Stack",
    githubUrl: "https://github.com/jeredeldo",
    demoUrl: "https://nexus-ai-demo.vercel.app",
    featured: true,
    clientBadge: "Empresa de Tecnología"
  },
  {
    id: "ecopulse-dashboard",
    title: "Portal de Servicios & Analítica",
    description: "Plataforma interactiva para gestión de clientes en tiempo real con visualización de datos y panel de control personalizado.",
    longDescription: "Solución a medida para empresa de consultoría financiera. Monitoreo en vivo de métricas y exportación de reportes.",
    image: "/projects/ecopulse.webp",
    tags: ["Portal de Clientes", "React", "Node.js", "Dashboard"],
    category: "Full Stack",
    githubUrl: "https://github.com/jeredeldo",
    demoUrl: "https://ecopulse-demo.vercel.app",
    featured: true,
    clientBadge: "Consultoría Financiera"
  },
  {
    id: "aura-commerce",
    title: "Tienda Online E-Commerce",
    description: "E-commerce de productos premium con catálogo interactivo, carrito dinámico y pasarela de pago automatizada.",
    longDescription: "Tienda virtual diseñada para acelerar las ventas. Carga instantánea, checkout simplificado y adaptable a dispositivos móviles.",
    image: "/projects/aura-commerce.webp",
    tags: ["Tienda Online", "Stripe / MercadoPago", "Next.js 15", "UI Premium"],
    category: "Frontend",
    githubUrl: "https://github.com/jeredeldo",
    demoUrl: "https://aura-commerce.vercel.app",
    featured: true,
    clientBadge: "Marca de Moda / Retail"
  },
  {
    id: "flowcraft-api",
    title: "Landing Page de Alta Conversión",
    description: "Landing page para lanzamiento de producto digital con flujo de registro automatizado e integración con email marketing.",
    longDescription: "Optimizada para campanas de publicidad pagada en Meta Ads y Google Ads. Tasa de conversión superior al 18%.",
    image: "/projects/flowcraft.webp",
    tags: ["Landing Page", "Captación de Leads", "SEO & Speed", "Tailwind"],
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
