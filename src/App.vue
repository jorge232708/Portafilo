<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainNavbar from '@/components/layout/MainNavbar.vue';
import MainFooter from '@/components/layout/MainFooter.vue';


</script>

<template>
  <header class="bg-gray-900 text-gray-200 p-4 shadow-lg sticky top-0 z-50">
    <MainNavbar />
  </header>

  <main class="main bg-gray-800 text-gray-100 py-10">

    <RouterView />

  </main>

  <footer>
    <MainFooter />
    </footer>
</template>

<style scoped>
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;;
}
</style>
