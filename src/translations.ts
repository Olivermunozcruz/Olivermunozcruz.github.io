export type Lang = "es" | "en";

export interface Translation {
  nav: {
    about: string;
    skills: string;
    projects: string;
    trajectory: string;
    contact: string;
  };
  hero: {
    role: string;
    tagline: string;
    cvLabel: string;
    contactLabel: string;
  };
  about: { title: string; body: string };
  skills: { title: string };
  projects: { title: string; wip: string };
  trajectory: { title: string };
  contact: { title: string; heading: string; body: string };
  footer: string;
}

export interface SkillGroup {
  name: Record<Lang, string>;
  items: string[];
}
export interface Project {
  name: string;
  desc: Record<Lang, string>;
  stack: string[];
  repo: string;
  demo?: string;
  wip?: boolean;
}
export interface TrajectoryItem {
  kind: Record<Lang, string>;
  title: Record<Lang, string>;
  place: string;
  meta: Record<Lang, string>;
  dates: Record<Lang, string>;
  desc?: Record<Lang, string>;
}
export interface Fact {
  label: Record<Lang, string>;
  value: Record<Lang, string>;
}

export const NAME = "Oliver Muñoz Cruz";

export const links = {
  email: "olivermunozcruz@gmail.com",
  linkedin: "https://www.linkedin.com/in/olivermunozcruz",
  github: "https://github.com/Olivermunozcruz",
  cv: { es: "/CV_OliverMunozCruz_ESP.pdf", en: "/CV_OliverMunozCruz_ENG.pdf" },
};

export const t: Record<Lang, Translation> = {
  es: {
    nav: {
      about: "Sobre mí",
      skills: "Habilidades",
      projects: "Proyectos",
      trajectory: "Trayectoria",
      contact: "Contacto",
    },
    hero: {
      role: "Desarrollador de aplicaciones multiplataforma",
      tagline:
        "Recién titulado en Desarrollo de Aplicaciones Multiplataforma, full-stack con Java, Spring Boot y Angular. Busco mi primera oportunidad profesional para seguir creciendo",
      cvLabel: "Ver CV",
      contactLabel: "Contacto",
    },
    about: {
      title: "Sobre mí",
      body: "Hice mis prácticas en Atos durante cuatro meses y disfruto construyendo aplicaciones de principio a fin, del backend a la interfaz. Me interesa el desarrollo bien hecho: código limpio que se explique por sí solo, sin necesidad de llenarlo de comentarios, con pruebas y un flujo de trabajo ordenado para que el resultado sea fiable y fácil de mantener",
    },
    skills: { title: "Habilidades" },
    projects: { title: "Proyectos", wip: "En desarrollo" },
    trajectory: { title: "Trayectoria" },
    contact: {
      title: "Contacto",
      heading: "¿Hablamos?",
      body: "Estoy abierto a oportunidades como desarrollador junior y con ganas de empezar a aportar en un equipo. Si crees que puedo encajar o quieres saber más sobre lo que hago, escríbeme por correo o LinkedIn. Responderé lo antes posible",
    },
    footer: "Hecho con React y TypeScript",
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      trajectory: "Career path",
      contact: "Contact",
    },
    hero: {
      role: "Multiplatform application developer",
      tagline:
        "Recent graduate in multiplatform app development, full-stack with Java, Spring Boot and Angular. Looking for my first professional opportunity to keep growing",
      cvLabel: "View CV",
      contactLabel: "Contact",
    },
    about: {
      title: "About me",
      body: "I did a four-month internship at Atos and I enjoy building applications end to end, from the backend to the interface. I care about doing development well: clean code that explains itself, without filling it with comments, with tests and a tidy workflow so the result is reliable and easy to maintain",
    },
    skills: { title: "Skills" },
    projects: { title: "Projects", wip: "Work in progress" },
    trajectory: { title: "Career path" },
    contact: {
      title: "Contact",
      heading: "Let's talk",
      body: "I am open to junior developer opportunities and eager to start contributing to a team. If you think I could be a good fit, or you just want to know more about what I do, reach out by email or LinkedIn. I will get back to you as soon as possible",
    },
    footer: "Built with React and TypeScript",
  },
};

export const skillGroups: SkillGroup[] = [
  {
    name: { es: "Backend", en: "Backend" },
    items: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "REST",
      "Maven",
      "Swagger",
    ],
  },
  {
    name: { es: "Frontend", en: "Frontend" },
    items: ["Angular", "TypeScript", "JavaScript", "HTML / CSS", "PrimeNG"],
  },
  {
    name: { es: "Bases de datos", en: "Databases" },
    items: ["PostgreSQL", "SQLite", "MongoDB"],
  },
  {
    name: { es: "DevOps y calidad", en: "DevOps & quality" },
    items: ["Docker", "GitHub Actions", "Git", "SonarQube", "JUnit", "Mockito"],
  },
];

export const projects: Project[] = [
  {
    name: "SnippetVault",
    desc: {
      es: "Gestor de snippets de código con autenticación JWT, resaltado de sintaxis y despliegue con Docker",
      en: "Code snippet manager with JWT authentication, syntax highlighting and Docker deployment",
    },
    stack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "Angular",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "SonarQube",
      "GitHub Actions",
    ],
    repo: "https://github.com/Olivermunozcruz/snippetvault",
  },
  {
    name: "WriteSense",
    desc: {
      es: "App de escritorio multiplataforma para analítica de pulsaciones de teclado, con cumplimiento RGPD y tests automatizados",
      en: "Cross-platform desktop app for keystroke analytics, with GDPR compliance and automated tests",
    },
    stack: [
      "Python",
      "Flask",
      "SQLite",
      "HTML / CSS",
      "JavaScript",
      "PyInstaller",
    ],
    repo: "https://github.com/Olivermunozcruz/writesense",
  },
  {
    name: "Flowlet",
    desc: {
      es: "App de finanzas personales con enfoque en prácticas profesionales de desarrollo",
      en: "Personal finance app focused on professional development practices",
    },
    stack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "Docker",
    ],
    repo: "https://github.com/Olivermunozcruz/flowlet",
    wip: true,
  },
];

export const trajectory: TrajectoryItem[] = [
  {
    kind: { es: "Formación", en: "Education" },
    title: {
      es: "Técnico Superior en DAM",
      en: "Higher Technician in Multiplatform App Development",
    },
    place: "CIFP César Manrique - Tenerife",
    meta: {
      es: "Desarrollo de Aplicaciones Multiplataforma",
      en: "Multiplatform Application Development",
    },
    dates: { es: "2024 - 2026", en: "2024 - 2026" },
    desc: {
      es: "Formación full-stack en Java, JavaScript, TypeScript, Spring Boot, React y React Native, Hibernate y bases de datos (PostgreSQL y MongoDB)",
      en: "Full-stack training in Java, JavaScript, TypeScript, Spring Boot, React and React Native, Hibernate and databases (PostgreSQL and MongoDB)",
    },
  },
  {
    kind: { es: "Experiencia", en: "Experience" },
    title: {
      es: "Desarrollador de software en prácticas",
      en: "Software Developer internship",
    },
    place: "Atos",
    meta: { es: "4 meses - Híbrido", en: "4 months - Hybrid" },
    dates: { es: "Febrero 2026 - Mayo 2026", en: "February 2026 - May 2026" },
    desc: {
      es: "Desarrollo full-stack con Java, Spring Boot, TypeScript y Angular, con APIs REST, documentación Swagger, pruebas (JUnit y Mockito), Docker y SonarQube",
      en: "Full-stack development with Java, Spring Boot, TypeScript and Angular, with REST APIs, Swagger docs, testing (JUnit and Mockito), Docker and SonarQube",
    },
  },
];

export const aboutFacts: Fact[] = [
  {
    label: { es: "Ubicación", en: "Location" },
    value: { es: "Tenerife, España", en: "Tenerife, Spain" },
  },
  {
    label: { es: "Idiomas", en: "Languages" },
    value: {
      es: "Español (nativo) - Inglés B2 - Francés A2 (sin certificar)",
      en: "Spanish (native) - English B2 - French A2 (not certified)",
    },
  },
  {
    label: { es: "Modalidad", en: "Work mode" },
    value: {
      es: "Presencial - Remoto - Híbrido",
      en: "On-site - Remote - Hybrid",
    },
  },
  {
    label: { es: "Buscando", en: "Looking for" },
    value: { es: "Primer empleo como junior", en: "First junior role" },
  },
];
