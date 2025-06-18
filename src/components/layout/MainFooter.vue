<template>
  <footer class="bg-gray-900 text-gray-400 py-8 text-center border-t border-emerald-700">
    <div class="container mx-auto px-4">
      <div class="flex justify-center space-x-6 mb-4">
        <a href="https://github.com/jorge232708" target="_blank" rel="noopener noreferrer"
           class="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-3xl">
          <font-awesome-icon :icon="['fab', 'github']" aria-label="Mi perfil de GitHub" />
        </a>

        <a href="https://www.instagram.com/jb_web_dev?igsh=bTllNGFmNnhlZWZi" target="_blank" rel="noopener noreferrer"
           class="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-3xl">
          <font-awesome-icon :icon="['fab', 'instagram']" aria-label="Mi perfil de Instagram" />
        </a>

        </div>

      <p class="text-sm">
        &copy; {{ currentYear }} Jorge Barbeito. Todos los derechos reservados.
        <br>
        Hecho con <font-awesome-icon :icon="['fas', 'heart']" class="text-red-500 mx-1" /> por Zayana.
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
// No necesitamos importar FontAwesomeIcon aquí porque ya lo registramos globalmente en main.ts

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
/* No se necesitan estilos adicionales si Tailwind maneja todo */
</style>
