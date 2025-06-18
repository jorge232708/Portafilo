<script setup lang="ts">
import NavLinkButton from '@/components/UI/NavLinkButton.vue';  // ¡Importa tu componente de botón!
</script>

<template>
  <nav class="flex space-x-2">
    <NavLinkButton to="/" label="Home" />
    <NavLinkButton to="/portafolio" label="Portafolio" />
    <NavLinkButton to="/about" label="Acerca de" />
    <NavLinkButton to="/proyectos" label="Proyectos" />
    <NavLinkButton to="/habilidades" label="Habilidades" />
    <NavLinkButton to="/contacto" label="Contacto" />
    </nav>
</template>

<style scoped>
/* No se necesitan muchos estilos aquí si los botones manejan su propio estilo. */
</style>
