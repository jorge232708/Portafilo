// En tu router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

// Definimos explícitamente el tipo 'RouteRecordRaw' para asegurar la tipificación correcta
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home', // Los nombres de las rutas suelen ser en minúsculas para consistencia
    component: () => import('../views/HomeView.vue') // Carga perezosa
  },
  {
    path: '/portafolio',
    name: 'portafolio', // Los nombres de las rutas suelen ser en minúsculas para consistencia
    component: () => import('../views/PortafolioView.vue') // Carga perezosa
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue') // Carga perezosa
  },
  {
    path: '/proyectos',
    name: 'proyectos',
    component: () => import('../views/ProjectsView.vue') // Carga perezosa
  },
  {
    path: '/habilidades',
    name: 'habilidades',
    component: () => import('../views/SkillView.vue') // Carga perezosa
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import('../views/ContactView.vue'), // Carga perezosa
  },
];

const router = createRouter({
  // Usamos import.meta.env.BASE_URL para compatibilidad con despliegues en subdirectorios
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
