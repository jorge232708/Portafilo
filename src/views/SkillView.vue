<template>
  <MainContentWrapper>
    <div class="skills-view p-6 md:p-10">
      <h1 class="text-5xl md:text-6xl font-extrabold text-emerald-400 text-center mb-10">
        Mis Habilidades Técnicas
      </h1>

      <p class="text-xl text-gray-300 text-center max-w-4xl mx-auto mb-16">
        Aquí se detalla el espectro de mis capacidades técnicas, desde el desarrollo de software hasta el diseño, reflejando mi dominio y mi pasión por la precisión en cada herramienta.
      </p>

      <div class="space-y-12">
        <section class="bg-gray-800 rounded-lg shadow-xl p-8 custom-diffused-border-card">
          <h2 class="text-4xl font-bold text-emerald-400 mb-8 text-center">Desarrollo</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <SkillBar
              v-for="skill in filteredSkills('Desarrollo')"
              :key="skill.id"
              :skill="skill"
            />
          </div>
        </section>

        <section class="bg-gray-800 rounded-lg shadow-xl p-8 custom-diffused-border-card">
          <h2 class="text-4xl font-bold text-blue-400 mb-8 text-center">Bases de Datos</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <SkillBar
              v-for="skill in filteredSkills('Bases de Datos')"
              :key="skill.id"
              :skill="skill"
            />
          </div>
        </section>

        <section class="bg-gray-800 rounded-lg shadow-xl p-8 custom-diffused-border-card">
          <h2 class="text-4xl font-bold text-purple-400 mb-8 text-center">Diseño</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <SkillBar
              v-for="skill in filteredSkills('Diseño')"
              :key="skill.id"
              :skill="skill"
            />
          </div>
        </section>
      </div>
    </div>
  </MainContentWrapper>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import MainContentWrapper from '@/components/layout/MainContentWrapper.vue';
import SkillBar from '@/components/UI/SkillBar.vue';
import type { Skill } from '@/data/skillsData'; 
import { jorgeSkills } from '@/data/skillsData';

// Función computada que filtra las habilidades por una categoría específica.
// Esto permite renderizar dinámicamente solo las habilidades de una categoría dada.
const filteredSkills = (category: Skill['category']) => {
  // Usamos .value porque computed devuelve una Ref, y necesitamos el valor subyacente.
  return computed(() => jorgeSkills.filter(skill => skill.category === category)).value;
};
</script>

<style scoped>
/* Reutilizamos la clase para el borde difuminado en las secciones de habilidades */
.custom-diffused-border-card {
  box-shadow: 0 0 30px 6px rgba(52, 211, 153, 0.5); /* Sutil difuminado con color emerald-400 */
}
</style>
