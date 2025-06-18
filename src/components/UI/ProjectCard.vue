<script setup lang="ts">
import type { Project } from '@/data/proyectosData'; // Importa la interfaz Project
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'; // Necesario si no está global

// Define las props que este componente espera recibir
const props = defineProps<{
  project: Project; // Esperamos un objeto de tipo Project
}>();
</script>

<template>
  <div class="project-card bg-gray-800 rounded-lg shadow-xl overflow-hidden
              transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
    <img :src="props.project.image" :alt="props.project.name" class="w-full h-48 object-contain object-center border-b border-emerald-700" loading="lazy" />

    <div class="p-6">
      <h3 class="text-2xl font-bold text-emerald-400 mb-3">{{ props.project.name }}</h3>

      <p class="text-gray-300 text-base mb-4 leading-relaxed">{{ props.project.description }}</p>

      <div class="flex flex-wrap gap-2 mb-5">
        <span v-for="tech in props.project.technologies" :key="tech"
              class="bg-emerald-700 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
          {{ tech }}
        </span>
      </div>

      <div class="flex justify-end space-x-4 pt-3 border-t border-gray-700">
        <a :href="props.project.repoLink" target="_blank" rel="noopener noreferrer"
           class="text-emerald-400 hover:text-emerald-300 font-medium text-lg flex items-center transition-colors duration-200">
          <font-awesome-icon :icon="['fab', 'github']" class="mr-2" /> Repositorio
        </a>
        <a v-if="props.project.demoLink" :href="props.project.demoLink" target="_blank" rel="noopener noreferrer"
           class="text-blue-400 hover:text-blue-300 font-medium text-lg flex items-center transition-colors duration-200">
          <font-awesome-icon :icon="['fas', 'external-link-alt']" class="mr-2" /> Demo
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  border: 1px solid rgba(52, 211, 153, 0.2); /* Borde sutil basado en emerald-400 */
}
</style>
