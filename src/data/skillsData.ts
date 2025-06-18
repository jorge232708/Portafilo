// src/data/skillsData.ts

// Interfaz para definir la estructura de una habilidad
export interface Skill {
  id: string;
  name: string;
  percentage: number; // Valor entre 0 y 100
  category: 'Desarrollo' | 'Bases de Datos' | 'Diseño'; // Categorías que definiste
}

// Lista de tus habilidades
export const jorgeSkills: Skill[] = [
  // Habilidades de Desarrollo
  { id: 'dev1', name: 'JavaScript', percentage: 85, category: 'Desarrollo' },
  { id: 'dev2', name: 'TypeScript', percentage: 80, category: 'Desarrollo' },
  { id: 'dev3', name: 'HTML', percentage: 95, category: 'Desarrollo' },
  { id: 'dev4', name: 'CSS', percentage: 80, category: 'Desarrollo' },
  { id: 'dev5', name: 'Python', percentage: 70, category: 'Desarrollo' },
  { id: 'dev6', name: 'Django REST Framework (DRF)', percentage: 70, category: 'Desarrollo' },
  { id: 'dev7', name: 'Node.js', percentage: 80, category: 'Desarrollo' },
  { id: 'dev8', name: 'Vue.js', percentage: 85, category: 'Desarrollo' },
  { id: 'dev9', name: 'Svelte', percentage: 50, category: 'Desarrollo' },
  { id: 'dev10', name: 'Tailwind', percentage: 65, category: 'Desarrollo' },

  // Habilidades de Bases de Datos
  { id: 'db1', name: 'MySQL', percentage: 50, category: 'Bases de Datos' },
  { id: 'db2', name: 'PostgreSQL', percentage: 50, category: 'Bases de Datos' },
  { id: 'db3', name: 'MongoDB', percentage: 50, category: 'Bases de Datos' },
  { id: 'db4', name: 'SQLite', percentage: 70, category: 'Bases de Datos' },

  // Habilidades de Diseño
  { id: 'design1', name: 'Gimp', percentage: 80, category: 'Diseño' },
  { id: 'design2', name: 'Inkscape', percentage: 75, category: 'Diseño' },
  { id: 'design3', name: 'Canva', percentage: 80, category: 'Diseño' },
  { id: 'design4', name: 'Figma', percentage: 60, category: 'Diseño' },
];
