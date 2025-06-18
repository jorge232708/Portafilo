<template>
  <MainContentWrapper>
    <div class="portafolio-view p-6 md:p-10">
      <h1 class="text-5xl md:text-6xl font-extrabold text-emerald-400 text-center mb-10">
        Mi Portafolio de Proyectos
      </h1>

      <p class="text-xl text-gray-300 text-center max-w-4xl mx-auto mb-16">
        Sumérgete en un viaje por mis creaciones más destacadas, donde la precisión matemática se fusiona con la innovación digital. Cada proyecto es un testimonio de mi compromiso con soluciones robustas y elegantes.
      </p>

      <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div
          v-for="project in jorgeBarbeitoData.projects"
          :key="project.id"
          class="project-card bg-gray-800 rounded-lg shadow-xl p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col custom-diffused-border-card"
        >
          <img
            :src="project.thumbnail"
            :alt="`Miniatura de ${project.name}`"
            class="w-full h-48 object-cover rounded-md mb-6 border border-emerald-700"
          />
          <h3 class="text-3xl font-bold text-emerald-300 mb-4">{{ project.name }}</h3>
          <p class="text-gray-300 text-lg mb-4 flex-grow">{{ project.description }}</p>

          <div class="flex flex-wrap gap-2 mb-6">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="bg-emerald-700 text-white text-xs font-semibold px-3 py-1 rounded-full opacity-80"
            >
              {{ tag }}
            </span>
          </div>

          <a
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-full text-lg text-center transition-colors duration-300 shadow-md mt-auto"
          >
            Ver Proyecto
            <i class="fas fa-external-link-alt ml-2"></i> </a>
        </div>
      </section>

      <div class="text-center mt-20 mb-10">
        <h2 class="text-4xl font-extrabold text-emerald-400 mb-8">
          Conoce el Alcance de mis Habilidades
        </h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          Cada proyecto es una oportunidad para aplicar y expandir mi dominio en diversas tecnologías. Explora en detalle las herramientas y metodologías que me permiten construir soluciones impecables.
        </p>
        <router-link
          to="/habilidades"
          class="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-12 rounded-full text-xl transition-colors duration-300 shadow-lg"
        >
          Ver Todas mis Habilidades
        </router-link>
      </div>
    </div>
  </MainContentWrapper>
</template>

<script setup lang="ts">
import MainContentWrapper from '@/components/layout/MainContentWrapper.vue';
import { jorgeBarbeitoData } from '@/data/portfolioData';

// ¡Importante! Asegúrate de tener FontAwesome configurado si vas a usar iconos como 'fa-external-link-alt'.
// Si no lo tienes, puedes omitir los <i> o usar iconos SVG locales.
</script>

<style scoped>
/* Estilo para el borde difuminado en las tarjetas de proyecto */
.custom-diffused-border-card {
  /* Ajusta el blur y el spread si quieres un difuminado diferente para las tarjetas */
  box-shadow: 0 0 20px 4px rgba(52, 211, 153, 0.4); /* emerald-400 con menor opacidad */
}

/* Ajustes para la responsividad de las columnas de proyectos */
@media (max-width: 767px) {
  .project-card {
    margin-left: auto;
    margin-right: auto;
    max-width: 90%; /* Asegura que la tarjeta no sea demasiado ancha en móviles */
  }
}
</style>
