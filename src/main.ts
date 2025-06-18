
// src/main.ts

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css'; // Tu archivo CSS global de Tailwind

// --- Inicio de la Integración de FontAwesome ---
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Importa los iconos específicos que vas a usar:
// Iconos sólidos (fas)
import {
  faEnvelope, // Para email
  faPhone,    // Para teléfono
  faMapMarkerAlt, // Para ubicación
  faArrowRight // Para la flecha en los enlaces
} from '@fortawesome/free-solid-svg-icons';

// Iconos de marcas (fab)
import {
  faLinkedin, // Para LinkedIn
  faGithub,   // Para GitHub
  faWhatsapp, // Para WhatsApp
  faInstagram
  // faTwitter, // Si decides añadir Twitter/X más adelante
} from '@fortawesome/free-brands-svg-icons';

// Añade los iconos importados a la librería de FontAwesome.
// Solo se incluirán estos en tu bundle final, lo que optimiza el tamaño.
library.add(
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faArrowRight,
  faLinkedin,
  faGithub,
  faWhatsapp,
  faInstagram  // faTwitter, // Descomenta si lo añades arriba
);
// --- Fin de la Integración de FontAwesome ---


const app = createApp(App);

app.use(router);

// Registra el componente FontAwesomeIcon globalmente
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
