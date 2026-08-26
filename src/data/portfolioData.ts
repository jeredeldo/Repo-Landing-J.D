import { PersonalInfo, SkillCategory, Project, Stat, SocialLink } from '@/types/portfolio';

export const personalData: PersonalInfo = {
  name: "Jeremías Del Do",
  role: "Full Stack Developer",
  shortBio: "Desarrollador Full Stack apasionado por construir productos web modernos, de alto rendimiento y con un diseño impecable.",
  fullBio: [
    "Hola, soy Jeremías. Desarrollador Web Full Stack enfocado en crear soluciones tecnológicas eficientes, elegantes y orientadas a resultados.",
    "Me especializo en el ecosistema de JavaScript y TypeScript (React, Next.js, Node.js), diseñando e implementando desde interfaces de usuario altamente interactivas hasta arquitecturas backend escalables y APIs robustas.",
    "Apasionado por las buenas prácticas de código, el diseño minimalista estilo SaaS, la optimización del rendimiento (SEO/Web Vitals) y la mejora continua en cada línea de código."
  ],
  location: "Argentina",
  email: "jeremiasdeldo@email.com", // Cambiar por tu email real
  linkedin: "https://www.linkedin.com/in/jerem%C3%ADas-del-do-92277a38a/",
  github: "https://github.com/jeremiasdeldo", // Cambiar si tienes usuario diferente
  availableForWork: true,
  avatarUrl: "/avatar-placeholder.png",
  resumeUrl: "#"
};

export const statsData: Stat[] = [
  {
    label: "Experiencia",
    value: "+3 Años",
    description: "Creando software web moderno"
  },
  {
    label: "Proyectos",
    value: "+15",
    description: "Completados con éxito"
  },
  {
    label: "Código Limpio",
    value: "100%",
    description: "TypeScript & Best Practices"
  },
  {
    label: "Satisfacción",
    value: "5/5",
    description: "Compromiso y puntualidad"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend",
    skills: [
      { name: "React", iconName: "Atom", level: "Avanzado", featured: true },
      { name: "Next.js 15", iconName: "Zap", level: "Avanzado", featured: true },
      { name: "TypeScript", iconName: "Code2", level: "Avanzado", featured: true },
      { name: "Tailwind CSS", iconName: "Palette", level: "Avanzado", featured: true },
      { name: "Framer Motion", iconName: "Sparkles", level: "Intermedio-Avanzado", featured: true },
      { name: "HTML5 / CSS3", iconName: "Layout", level: "Avanzado" },
      { name: "Redux / Zustand", iconName: "Layers", level: "Intermedio" }
    ]
  },
  {
    id: "backend",
    name: "Backend",
    skills: [
      { name: "Node.js", iconName: "Server", level: "Avanzado", featured: true },
      { name: "Express.js", iconName: "Cpu", level: "Avanzado", featured: true },
      { name: "NestJS", iconName: "ShieldCheck", level: "Intermedio" },
      { name: "REST APIs", iconName: "Globe", level: "Avanzado", featured: true },
      { name: "PostgreSQL", iconName: "Database", level: "Intermedio-Avanzado", featured: true },
      { name: "MongoDB", iconName: "HardDrive", level: "Intermedio" },
      { name: "Prisma / Drizzle", iconName: "Workflow", level: "Intermedio-Avanzado" }
    ]
  },
  {
    id: "tools",
    name: "Herramientas & DevOps",
    skills: [
      { name: "Git & GitHub", iconName: "GitBranch", level: "Avanzado", featured: true },
      { name: "Vercel / Netlify", iconName: "Cloud", level: "Avanzado", featured: true },
      { name: "Docker", iconName: "Box", level: "Intermedio" },
      { name: "Postman", iconName: "Send", level: "Avanzado" },
      { name: "Figma (UI/UX)", iconName: "Figma", level: "Intermedio" },
      { name: "CI / CD", iconName: "Repeat", level: "Intermedio" }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "nexus-ai",
    title: "Nexus AI Platform",
    description: "Plataforma SaaS moderna de inteligencia artificial para generación de contenido y análisis predictivo en tiempo real.",
    longDescription: "Un ecosistema completo desarrollado con Next.js 15, Server Actions y Tailwind CSS. Incluye autenticación segura, streaming de respuestas de IA y panel analítico interactivo con métricas detalladas.",
    image: "/projects/nexus-ai.webp",
    tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "OpenAI API", "Prisma"],
    category: "AI / Innovation",
    githubUrl: "https://github.com/jeremiasdeldo/nexus-ai",
    demoUrl: "https://nexus-ai-demo.vercel.app",
    featured: true
  },
  {
    id: "ecopulse-dashboard",
    title: "EcoPulse Analytics",
    description: "Dashboard financiero y de métricas en tiempo real con visualización gráfica interactiva y modo oscuro elegante.",
    longDescription: "Dashboard para monitoreo de datos con WebSocket para actualización en vivo, gráficos dinámicos y arquitectura modular optimizada para máximo rendimiento.",
    image: "/projects/ecopulse.webp",
    tags: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Node.js"],
    category: "Full Stack",
    githubUrl: "https://github.com/jeremiasdeldo/ecopulse-dashboard",
    demoUrl: "https://ecopulse-demo.vercel.app",
    featured: true
  },
  {
    id: "aura-commerce",
    title: "Aura Commerce Storefront",
    description: "E-commerce ultra veloz orientado a conversión con pasarela de pagos Stripe y diseño glassmorphism.",
    longDescription: "Tienda online de alto rendimiento con carrito en tiempo real, búsqueda con filtros rápidos, paginación optimizada y flujo de checkout automatizado.",
    image: "/projects/aura-commerce.webp",
    tags: ["Next.js 15", "Tailwind CSS", "Stripe", "Zustand", "Framer Motion"],
    category: "Frontend",
    githubUrl: "https://github.com/jeremiasdeldo/aura-commerce",
    demoUrl: "https://aura-commerce.vercel.app",
    featured: true
  },
  {
    id: "flowcraft-api",
    title: "FlowCraft Workflow Backend",
    description: "API RESTful escalable para automatización de tareas y gestión de flujos de trabajo en equipos remotos.",
    longDescription: "Backend construido con Node.js, Express y PostgreSQL. Cuenta con documentación Swagger, pruebas unitarias integradas, autenticación JWT y limitador de peticiones (Rate Limiting).",
    image: "/projects/flowcraft.webp",
    tags: ["Node.js", "Express", "PostgreSQL", "Docker", "Jest"],
    category: "Backend",
    githubUrl: "https://github.com/jeremiasdeldo/flowcraft-api",
    demoUrl: "https://flowcraft-api.vercel.app",
    featured: true
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
    url: "https://github.com/jeremiasdeldo",
    iconName: "Github"
  },
  {
    name: "Email",
    url: "mailto:jeremiasdeldo@email.com",
    iconName: "Mail"
  }
];
