<template>
  <div class="relative w-screen min-h-screen overflow-hidden flex items-center justify-center">
    <div
      class="absolute inset-0 bg-black bg-opacity-50 z-10 pointer-events-none"
      aria-hidden="true"
      role="presentation"
    ></div>

    <div
      class="container mx-auto relative z-20 flex flex-col md:flex-row items-center md:justify-center gap-12 py-12 px-12 bg-gray-900 rounded-lg shadow-xl custom-diffused-border home-presentation-card"
    >
      <div class="flex-shrink-0 mb-10 md:mb-0">
        <picture class="block">
          <img
            src="/images/AvatarUno.png"
            alt="Imagen de Jorge Barbeito"
            class="w-64 h-64 rounded-full object-cover shadow-2xl border-4 border-emerald-500 transform transition-transform duration-300 hover:scale-105"
          />
        </picture>
      </div>

      <div class="text-center md:text-left flex-grow">
        <h1 class="text-6xl font-extrabold text-emerald-400 mb-6 leading-tight">
          ¡Soy! Jorge Barbeito
        </h1>

        <p class="text-2xl text-emerald-300 mb-8 font-semibold">
          El Arquitecto Digital de la Perfección Matemática
        </p>

        <p class="text-lg text-gray-300 mb-4 max-w-4xl mx-auto md:mx-0">
          Cada línea de código en mis proyectos está diseñada con la precisión de la física y la
          lógica matemática, garantizando soluciones robustas y elegantes.
        </p>
        <p class="text-lg text-gray-300 mb-8 max-w-4xl mx-auto md:mx-0">
          Mi pasión por el desarrollo web se fusiona con mi experiencia en enseñanza para crear
          experiencias digitales impecables y profundamente optimizadas.
        </p>

        <router-link
          to="/proyectos"
          class="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300 shadow-lg"
        >
          Ver mis Proyectos
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'HomeView',
}
</script>

<style scoped>
.custom-diffused-border {
  box-shadow: 0 0 40px 8px rgba(52, 211, 153, 0.6); /* emerald-400 con opacidad */
}

/* Clase personalizada para controlar el ancho y alto del contenedor de la presentación */
.home-presentation-card {
  /* Podemos usar min-width y min-height para asegurar un tamaño mínimo */
  /* O un width y height fijos, pero eso es menos responsive */

  /* Ejemplo de ancho y alto más grandes: */
  min-width: 90vw; /* Ocupa el 90% del ancho del viewport (puedes ajustar el valor) */
  min-height: 70vh; /* Ocupa al menos el 70% de la altura del viewport (puedes ajustar el valor) */

  /* Si necesitas un max-width o max-height diferente al de Tailwind, puedes definirlo aquí.
     Por ejemplo, si quieres que no sea más grande que 1400px de ancho. */
  /* max-width: 1400px; */
  /* max-height: 800px; */
}

/* Media queries para ajustar el tamaño en pantallas más pequeñas si es necesario */
@media (min-width: 768px) {
  /* md */
  .home-presentation-card {
    min-width: 80vw; /* Un poco menos ancho en desktop para dejar margen */
  }
}

@media (min-width: 1024px) {
  /* lg */
  .home-presentation-card {
    min-width: 70vw; /* Un poco menos ancho aún en pantallas grandes */
  }
}
</style>
