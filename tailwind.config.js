// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  // ESTA ES LA PARTE CLAVE: aquí le dices a Tailwind dónde buscar tus clases
  content: [
    "./index.html",             // Ruta a tu archivo HTML principal (donde se monta tu app Vue)
    "./src/**/*.{vue,js,ts,jsx,tsx}", // ¡Importante! Escanea todos los archivos .vue, .js, .ts, .jsx, .tsx dentro de la carpeta 'src' y sus subcarpetas.
                                      // Esto incluye tus componentes, vistas, etc.
  ],
  theme: {
    extend: {
      // Aquí puedes extender los temas predeterminados de Tailwind (colores, fuentes, espaciados, etc.)
      // Por ejemplo, para añadir un color personalizado:
       colors: {
        'grass-green-bright': '#6AFF6A',
        'fluorescent-green': '#39FF14'
    },
  },
  plugins: [
    // Aquí puedes añadir plugins de Tailwind CSS (ej. @tailwindcss/forms, @tailwindcss/typography)
  ],
}
}
