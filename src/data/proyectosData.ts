// src/data/ProjectData.ts

// Interfaz para definir la estructura de un proyecto
export interface Project {
  id: string;
  name: string;
  description: string;
  image: string; // Ruta a la imagen del proyecto (ej. '/images/proyectos/proyecto1.jpg')
  repoLink: string; // Enlace al repositorio de GitHub o similar
  demoLink?: string; // Enlace opcional a una demo en vivo
  technologies: string[]; // Array de tecnologías usadas (ej. ['Vue.js', 'Django', 'Tailwind CSS'])
}

// Lista de 15 proyectos de ejemplo
export const jorgeProjects: Project[] = [
  {
    id: 'p3',
    name: 'Portafolio Personal (Este Mismo)',
    description: 'El desarrollo de este portafolio personal es un testimonio de mis habilidades en frontend. Construido con las últimas tecnologías.',
    image: '/images/proyectos/portafolio.png',
    repoLink: 'https://github.com/jorge232708/Portafilo.git', // ¡Mi link!
    technologies: ['Vue.js', 'Vite', 'Tailwind CSS', 'TypeScript', 'Responsive Design']
  },
  {
    id: 'p4',
    name: 'API RESTful para E-commerce',
    description: 'Backend robusto y escalable para una tienda en línea, gestionando productos, usuarios, pedidos y pagos.',
    image: '/images/proyectos/project-placeholder-4.png',
    repoLink: 'https://github.com/jorge232708/E-comerce.git', // ¡Tu link!
    technologies: ['Node.js', 'Express.js', 'better-sqlite3', 'JWT', 'REST API']
  },
  {
    id: 'p5',
    name: 'Calculadora en Typescript',
    description: 'Calculadora en typescript compilado a javascript, con funcionalidades básicas.',
    image: '/images/proyectos/calculadora.png',
    repoLink: 'https://github.com/jorge232708/calculadora.git', // ¡Tu link!
    technologies: ['TS', 'JS', 'HTML', 'CSS']
  },
  {
    id: 'p6',
    name: 'Blog de Contenido Interactivo',
    description: 'Plataforma de blog con editor de texto enriquecido, comentarios, y autenticación de usuarios.',
    image: '/images/proyectos/project-placeholder-6.jpg',
    repoLink: 'https://github.com/tuusuario/interactive-blog', // ¡Tu link!
    technologies: ['Django', 'Python', 'SQLite', 'CKEditor']
  },
  {
    id: 'p7',
    name: 'Dashboard de Análisis de Datos',
    description: 'Panel de control interactivo para visualizar y analizar métricas de negocio en tiempo real.',
    image: '/images/proyectos/project-placeholder-7.jpg',
    repoLink: 'https://github.com/tuusuario/data-dashboard', // ¡Tu link!
    technologies: ['Vue.js', 'Vite', 'Chart.js', 'REST API']
  },
  {
    id: 'p8',
    name: 'Aplicación Móvil Híbrida (Concepto)',
    description: 'Prototipo de aplicación móvil para gestión de eventos, construida con tecnologías web.',
    image: '/images/proyectos/project-placeholder-8.jpg',
    repoLink: 'https://github.com/tuusuario/hybrid-app-concept', // ¡Tu link!
    technologies: ['Svelte', 'Capacitor', 'Tailwind CSS']
  },
  {
    id: 'p9',
    name: 'Clon de Red Social (Minimalista)',
    description: 'Implementación básica de funcionalidades de una red social: posts, likes, seguidores.',
    image: '/images/proyectos/project-placeholder-9.jpg',
    repoLink: 'https://github.com/tuusuario/minimal-social-clone', // ¡Tu link!
    technologies: ['Node.js', 'Express.js', 'PostgreSQL', 'Socket.io']
  },
  {
    id: 'p10',
    name: 'Generador de CV Online',
    description: 'Herramienta web para crear y personalizar currículums vitae de forma sencilla y exportar a PDF.',
    image: '/images/proyectos/project-placeholder-10.jpg',
    repoLink: 'https://github.com/tuusuario/cv-generator', // ¡Tu link!
    technologies: ['Vue.js', 'TypeScript', 'PDF.js']
  },
  {
    id: 'p11',
    name: 'Juego Web Basado en Turnos',
    description: 'Pequeño juego interactivo desarrollado completamente en el navegador con lógica de turnos y puntuación.',
    image: '/images/proyectos/project-placeholder-11.jpg',
    repoLink: 'https://github.com/tuusuario/turn-based-game', // ¡Tu link!
    technologies: ['JavaScript', 'HTML5 Canvas', 'CSS3']
  },
  {
    id: 'p12',
    name: 'Sistema de Gestión de Clientes (CRM)',
    description: 'Herramienta para pequeñas empresas para gestionar clientes, contactos y seguimientos de ventas.',
    image: '/images/proyectos/project-placeholder-12.jpg',
    repoLink: 'https://github.com/tuusuario/simple-crm', // ¡Tu link!
    technologies: ['PHP', 'CodeIgniter', 'MariaDB']
  },
  {
    id: 'p13',
    name: 'Aplicación de Pronóstico del Tiempo',
    description: 'Muestra el pronóstico del tiempo actual y futuro utilizando una API externa, con diseño responsivo.',
    image: '/images/proyectos/project-placeholder-13.jpg',
    repoLink: 'https://github.com/tuusuario/weather-app', // ¡Tu link!
    technologies: ['Vue.js', 'Axios', 'OpenWeather API', 'CSS Grid']
  },
  {
    id: 'p14',
    name: 'Landing Page Animada',
    description: 'Página de aterrizaje moderna con animaciones sutiles y diseño atractivo para captar la atención.',
    image: '/images/proyectos/project-placeholder-14.jpg',
    repoLink: 'https://github.com/tuusuario/animated-landing', // ¡Tu link!
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP']
  },
  {
    id: 'p15',
    name: 'Sistema de Gestión de Bibliotecas',
    description: 'Permite a los usuarios buscar libros, ver disponibilidad, y gestionar préstamos y devoluciones.',
    image: '/images/proyectos/project-placeholder-15.jpg',
    repoLink: 'https://github.com/tuusuario/library-manager', // ¡Tu link!
    technologies: ['Django', 'Bootstrap', 'SQLite']
  }
];
