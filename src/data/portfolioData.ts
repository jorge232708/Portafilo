// src/data/portfolioData.ts

// Interfaz para definir la estructura de un proyecto
export interface Project {
  id: string;
  name: string;
  description: string;
  thumbnail: string; // Ruta a la imagen de miniatura del proyecto
  link: string; // Enlace al proyecto desplegado o repositorio (opcional)
  tags: string[]; // Por ejemplo: ['Vue.js', 'Django', 'PostgreSQL']
}

// Interfaz para definir la estructura de una habilidad (solo lo esencial para listado/referencia)
export interface Skill {
  id: string;
  name: string; // Nombre de la habilidad (ej: 'Svelte', 'TypeScript')
  level: 'Dios' | 'Gurú' | 'Experto' | 'Intermedio'; // Basado en tus niveles de experiencia
  icon?: string; // Nombre de un ícono (ej. de FontAwesome o un SVG)
}

// ... (interfaces Project y Skill permanecen igual) ...

// Información centralizada de Jorge Barbeito
export const jorgeBarbeitoData = {
  // Biografía resumida (para el Home o Portafolio)
  shortBio: "El Arquitecto Digital de la Perfección Matemática. Cada línea de código en mis proyectos está diseñada con la precisión de la física y la lógica matemática, garantizando soluciones robustas y elegantes.",

  // ¡longBio HA SIDO REMOVIDO DE AQUÍ! Ahora está en aboutData.ts

  // Habilidades (solo listado, la descripción detallada irá en SkillsView)
  skills: [
    { id: 's1', name: 'Desarrollo Web con Django', level: 'Dios', icon: 'fab fa-python' },
    { id: 's2', name: 'Node.js', level: 'Dios', icon: 'fab fa-node-js' },
    { id: 's3', name: 'Vite + Vue.js', level: 'Dios', icon: 'fab fa-vuejs' },
    { id: 's4', name: 'PHP', level: 'Dios', icon: 'fab fa-php' },
    { id: 's5', name: 'MariaDB', level: 'Gurú', icon: 'fas fa-database' },
    { id: 's6', name: 'PostgreSQL', level: 'Gurú', icon: 'fas fa-database' },
    { id: 's7', name: 'Diseño CSS (Tailwind CSS)', level: 'Dios', icon: 'fab fa-css3-alt' },
    { id: 's8', name: 'TypeScript', level: 'Experto', icon: 'fas fa-code' },
    { id: 's9', name: 'Svelte', level: 'Experto', icon: 'fas fa-code' },
    { id: 's10', name: 'Vite', level: 'Experto', icon: 'fas fa-bolt' },
    // ... puedes añadir más habilidades aquí
  ],

  // Proyectos destacados (permanecen igual)
  projects: [
    {
      id: 'p1',
      name: 'Sistema de Gestión Académica',
      description: 'Plataforma web completa para la gestión de estudiantes, cursos y calificaciones. Implementa autenticación de usuarios, roles, y reportes dinámicos. Desarrollado con Django y PostgreSQL, asegurando escalabilidad y seguridad.',
      thumbnail: '/images/proyectos/proyecto1_thumb.jpg',
      link: 'https://github.com/jorgebarbeito/gestion-academica',
      tags: ['Django', 'PostgreSQL', 'Python', 'Web Security']
    },
    {
      id: 'p2',
      name: 'Aplicación de Tareas en Tiempo Real',
      description: 'Una aplicación de lista de tareas colaborativa con actualizaciones en tiempo real. Permite la creación, asignación y seguimiento de tareas entre múltiples usuarios, con actualizaciones instantáneas gracias a WebSockets. Construida con Vue.js en el frontend y Node.js con Express en el backend.',
      thumbnail: '/images/proyectos/proyecto2_thumb.jpg',
      link: 'https://github.com/jorgebarbeito/realtime-todo',
      tags: ['Vue.js', 'Node.js', 'Express.js', 'WebSocket', 'TypeScript']
    },
    {
      id: 'p3',
      name: 'Portafolio Personal (Este Mismo)',
      description: 'El desarrollo de este portafolio personal es un testimonio de mis habilidades en frontend. Construido con Vue 3, Vite y Tailwind CSS, enfatiza la responsividad, la optimización de rendimiento y una interfaz de usuario impecable.',
      thumbnail: '/images/proyectos/portfolio_thumb.jpg',
      link: 'https://github.com/jorgebarbeito/my-portfolio',
      tags: ['Vue.js', 'Vite', 'Tailwind CSS', 'TypeScript', 'Responsive Design']
    },
    // ... (resto de proyectos) ...
  ],
};
