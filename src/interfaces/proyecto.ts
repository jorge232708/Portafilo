// src/interfaces/proyecto.ts

export interface Proyecto {
  id: number;
  nombre: string;
  descripcion: string;
  // Puedes añadir más propiedades según tus necesidades para el portafolio
  imagenUrl?: string; // Opcional, para la imagen de la tarjeta
  tecnologias?: string[]; // Array de strings para las tecnologías usadas
  linkRepo?: string;    // Enlace al repositorio
  linkDemo?: string;    // Enlace a la demo desplegada
}
