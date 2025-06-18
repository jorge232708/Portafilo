<template>
  <div class="container mx-auto p-4 md:p-8 lg:p-12 max-w-7xl">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
// No se necesita lógica compleja, props o estado para este componente envoltorio simple.
// Si en el futuro necesitas que este wrapper sea dinámico (ej. cambiar max-width),
// podrías añadir props aquí.
</script>

<style scoped>
/*
  Puedes añadir estilos 'scoped' aquí si necesitas un control muy específico
  que las clases de Tailwind no proporcionen para este contenedor,
  aunque para un wrapper simple, Tailwind es generalmente suficiente.
*/
</style>
