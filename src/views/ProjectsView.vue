<template>
  <MainContentWrapper>
    <div class="projects-view p-6 md:p-10">
      <h1 class="text-5xl md:text-6xl font-extrabold text-emerald-400 text-center mb-10">
        Mis Proyectos Destacados
      </h1>

      <p class="text-xl text-gray-300 text-center max-w-4xl mx-auto mb-16 leading-relaxed">
        Explora una selección de mis trabajos más relevantes. Cada proyecto refleja mi pasión por la lógica, la eficiencia y el diseño, abarcando diversas tecnologías y soluciones.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          v-for="project in jorgeProjects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </MainContentWrapper>
</template>

<script setup lang="ts">
import MainContentWrapper from '@/components/layout/MainContentWrapper.vue';
import ProjectCard from '@/components/UI/ProjectCard.vue';
import { jorgeProjects } from '@/data/proyectosData'; // Importa tus proyectos

// No se necesita lógica compleja adicional aquí, ya que los datos se pasan directamente a ProjectCard.
</script>

<style scoped>
/* No se necesitan estilos específicos de esta vista si ProjectCard maneja su propio estilo */
</style>
