<template>
  <MainContentWrapper>
    <div class="contact-view p-6 md:p-10">
      <h1 class="text-5xl md:text-6xl font-extrabold text-emerald-400 text-center mb-10">
        Contacta Conmigo
      </h1>

      <p class="text-xl text-gray-300 text-center max-w-4xl mx-auto mb-16 leading-relaxed">
        {{ contactData.introMessage }}
      </p>

      <section class="bg-gray-800 rounded-lg shadow-xl p-8 custom-diffused-border-card mb-12">
        <h2 class="text-4xl font-bold text-emerald-400 mb-8 text-center">Redes y Perfiles Profesionales</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div
            v-for="medium in contactData.socialAndProfessional"
            :key="medium.id"
            class="contact-item bg-gray-900 p-6 rounded-lg shadow-md flex items-center space-x-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <font-awesome-icon :icon="medium.icon" class="text-5xl text-emerald-500" />
            <div>
              <h3 class="text-2xl font-semibold text-gray-100 mb-2">{{ medium.name }}</h3>
              <p class="text-gray-300 text-md mb-3">{{ medium.description }}</p>
              <a
                :href="medium.link"
                target="_blank"
                rel="noopener noreferrer"
                class="text-emerald-400 hover:text-emerald-300 font-medium text-lg transition-colors duration-200"
              >
                Visitar Perfil <font-awesome-icon :icon="['fas', 'arrow-right']" class="ml-2 text-sm" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-gray-800 rounded-lg shadow-xl p-8 custom-diffused-border-card">
        <h2 class="text-4xl font-bold text-emerald-400 mb-8 text-center">Contacto Directo</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div
            v-for="medium in contactData.directContact"
            :key="medium.id"
            class="contact-item bg-gray-900 p-6 rounded-lg shadow-md flex items-center space-x-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <font-awesome-icon :icon="medium.icon" class="text-5xl text-emerald-500" />
            <div>
              <h3 class="text-2xl font-semibold text-gray-100 mb-2">{{ medium.name }}</h3>
              <p class="text-gray-300 text-md mb-3">{{ medium.description }}</p>
              <a
                :href="medium.link"
                :target="medium.name === 'Ubicación General' ? '_blank' : '_self'"
                :rel="medium.name === 'Ubicación General' ? 'noopener noreferrer' : ''"
                class="text-emerald-400 hover:text-emerald-300 font-medium text-lg transition-colors duration-200"
              >
                {{ medium.name === 'Email' ? 'Enviar Email' : medium.name === 'Ubicación General' ? 'Ver Mapa' : 'Contactar Ahora' }}
                <font-awesome-icon :icon="['fas', 'arrow-right']" class="ml-2 text-sm" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </MainContentWrapper>
</template>

<script setup lang="ts">
import MainContentWrapper from '@/components/layout/MainContentWrapper.vue';
import { contactData } from '@/data/contactData';
// No necesitamos importar FontAwesomeIcon aquí porque lo registramos globalmente en main.ts
</script>

<style scoped>
.custom-diffused-border-card {
  box-shadow: 0 0 30px 6px rgba(52, 211, 153, 0.5);
}
.contact-item {
  /* Estilos adicionales si los deseas para cada tarjeta de contacto */
}
</style>
