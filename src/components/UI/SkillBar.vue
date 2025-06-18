<script setup lang="ts">
import { computed } from 'vue';
import type { Skill } from '@/data/skillsData'; // Importa la interfaz Skill para el tipado

// Define las props que este componente espera recibir
const props = defineProps<{
  skill: Skill; // Esperamos un objeto de tipo Skill
}>();

// Calcula el ancho de la barra de progreso
const barWidth = computed(() => {
  // Aseguramos que el porcentaje esté entre 0 y 100 para evitar desbordamientos
  const percentage = Math.max(0, Math.min(100, props.skill.percentage));
  return `${percentage}%`;
});

// Determina el color de la barra según la categoría de la habilidad
const barColorClass = computed(() => {
  switch (props.skill.category) {
    case 'Desarrollo':
      return 'bg-emerald-600'; // El color verde principal para desarrollo
    case 'Bases de Datos':
      return 'bg-blue-600';    // Un color azul para bases de datos
    case 'Diseño':
      return 'bg-purple-600';  // Un color púrpura para diseño
    default:
      return 'bg-gray-500';    // Color por defecto si la categoría no coincide
  }
});
</script>

<template>
  <div class="skill-item mb-6">
    <div class="flex justify-between items-center mb-2">
      <span class="text-gray-200 font-medium text-lg">{{ props.skill.name }}</span>
      <span class="text-gray-300 text-md font-semibold">{{ props.skill.percentage }}%</span>
    </div>
    <div class="w-full bg-gray-700 rounded-full h-3.5">
      <div
        class="h-full rounded-full transition-all duration-700 ease-out"
        :class="barColorClass"
        :style="{ width: barWidth }"
        :aria-valuenow="props.skill.percentage"
        aria-valuemin="0"
        aria-valuemax="100"
        role="progressbar"
      ></div>
    </div>
  </div>
</template>

<style scoped>
/* En componentes UI simples como este, Tailwind CSS suele ser suficiente
   y no se necesita mucho CSS adicional aquí. */
</style>
