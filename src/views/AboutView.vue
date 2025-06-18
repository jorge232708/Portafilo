<template>
  <MainContentWrapper>
    <div class="about-view p-6 md:p-10">
      <h1 class="text-5xl md:text-6xl font-extrabold text-emerald-400 text-center mb-10">
        Acerca de Mí
      </h1>

      <div class="bg-gray-800 rounded-lg shadow-xl p-8 md:p-12 custom-diffused-border-card text-gray-300 leading-relaxed text-lg about-bio-content">
        <p v-for="(paragraph, index) in formattedBioParagraphs" :key="index" class="about-paragraph">
          <span v-html="paragraph"></span>
        </p>
      </div>
    </div>
  </MainContentWrapper>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import MainContentWrapper from '@/components/layout/MainContentWrapper.vue';
import { aboutData } from '@/data/aboutData';

const formattedBioParagraphs = computed(() => {
  // Dividimos la biografía por los dobles saltos de línea para obtener párrafos separados.
  // Luego, eliminamos cualquier párrafo vacío que pueda resultar del split.
  // Finalmente, cada párrafo se procesa para convertir **texto** a <b>texto</b>
  return aboutData.longBio
    .split('\n\n') // Divide el texto en un array de párrafos por doble salto de línea
    .filter(paragraph => paragraph.trim() !== '') // Elimina párrafos vacíos o solo con espacios
    .map(paragraph => paragraph.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')); // Convierte **texto** a <b>texto</b>
});
</script>

<style scoped>
/* Reutilizamos la clase del borde difuminado para la tarjeta de biografía */
.custom-diffused-border-card {
  box-shadow: 0 0 30px 6px rgba(52, 211, 153, 0.5); /* Ajustado para un difuminado sutil */
}

/* Estilos para el contenedor de la biografía */
.about-bio-content {
  /* Aquí aplicamos el justificado a todo el bloque de texto */
  text-align: justify;
}

/* Estilos para cada párrafo dentro de la biografía */
.about-paragraph {
  text-indent: 2.5em; /* Sangría: 2.5 veces el tamaño de la fuente actual. Ajusta a tu gusto. */
  margin-bottom: 1.5em; /* Espacio adicional entre párrafos: 1.5 veces el tamaño de la fuente actual. Ajusta. */
  line-height: 1.6; /* Mejora la legibilidad del texto justificado */
}

/* El último párrafo no debe tener margin-bottom para evitar espacio extra innecesario al final */
.about-paragraph:last-child {
  margin-bottom: 0;
}
</style>
