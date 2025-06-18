<script setup lang="ts">
import { RouterLink } from 'vue-router';

// Definimos las props que este componente de botón recibirá
interface Props {
  to: string; // La ruta a la que navegará (ej. "/proyectos")
  label: string; // El texto que se mostrará en el botón (ej. "Proyectos")
}

const props = defineProps<Props>();
</script>

<template>
  <RouterLink
    :to="props.to"
    class="
      px-4 py-2 rounded-md
      bg-transparent
      text-gray-200
      hover:bg-emerald-600 hover:text-white
      focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50
      transition-all duration-300 ease-in-out
      inline-flex items-center justify-center
      whitespace-nowrap /* Evita que el texto del botón se rompa en varias líneas */
      font-semibold
    "
  >
    {{ props.label }}
  </RouterLink>
</template>

<style scoped>
/* Este scoped style es solo para overrides muy específicos de este componente si los necesitas */
/* Para el estilo global de '.router-link-active', recuerda ponerlo en base.css */
.router-link-active {
  background-color: #059669; /* Verde esmeralda más oscuro para el botón activo */
  color: white; /* Texto blanco en el botón activo */
}
</style>
