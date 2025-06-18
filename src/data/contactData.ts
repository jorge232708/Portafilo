// src/data/contactData.ts

// Interfaz para definir la estructura de un medio de contacto
export interface ContactMedium {
  id: string;
  name: string;
  // iconClass: string; // <-- ¡Elimina esta línea!
  icon: string[]; // <-- ¡Nuevo: Ahora será un array para FontAwesome! (ej. ['fab', 'linkedin'])
  link: string;
  description?: string;
}

// Información centralizada de los medios de contacto
export const contactData = {
  introMessage: "¡Estoy emocionado de conectar contigo! Ya sea que tengas una consulta, una oportunidad de colaboración o simplemente quieras saludar, no dudes en utilizar los siguientes medios para contactarme. Valoraré cada mensaje y me esforzaré por responderte lo antes posible.",

  socialAndProfessional: [
    {
      id: 'soc1',
      name: 'Instagram', // ¡Cambiado de LinkedIn a Instagram!
      icon: ['fab', 'instagram'], // ¡Cambiado el icono!
      link: 'https://www.instagram.com/jb_web_dev?igsh=bTllNGFmNnhlZWZi', // ¡Reemplaza con tu URL de Instagram REAL!
      description: 'Sígueme en Instagram para ver mis últimas actualizaciones y trabajo.' // Descripción actualizada
    },
    {
      id: 'soc2',
      name: 'GitHub',
      // iconClass: 'fab fa-github', // Antiguo
      icon: ['fab', 'github'], // ¡Nuevo formato para FontAwesome!
      link: 'https://github.com/jorge232708', // ¡Reemplaza con tu URL de GitHub!
      description: 'Explora mis repositorios y proyectos de código abierto.'
    },
  ],

  directContact: [
    {
      id: 'dir1',
      name: 'Email',
      // iconClass: 'fas fa-envelope', // Antiguo
      icon: ['fas', 'envelope'], // ¡Nuevo formato para FontAwesome!
      link: 'mailto:jjbarbeito1@gmail.com', // ¡Reemplaza con tu dirección de Email!
      description: 'La forma más directa de comunicación para consultas detalladas.'
    },
    {
      id: 'dir2',
      name: 'WhatsApp',
      // iconClass: 'fab fa-whatsapp', // Antiguo
      icon: ['fab', 'whatsapp'], // ¡Nuevo formato para FontAwesome!
      link: 'https://wa.me/584260554453', // ¡Reemplaza con tu número de WhatsApp (código de país sin +)!
      description: 'Para mensajes rápidos y comunicación fluida.'
    },
    {
      id: 'dir3',
      name: 'Teléfono',
      // iconClass: 'fas fa-phone', // Antiguo
      icon: ['fas', 'phone'], // ¡Nuevo formato para FontAwesome!
      link: 'tel:+5814260554453', // ¡Reemplaza con tu número de teléfono (código de país incluido)!
      description: 'Disponible para llamadas en horario de oficina.'
    },
    {
      id: 'dir4',
      name: 'Ubicación General',
      // iconClass: 'fas fa-map-marker-alt', // Antiguo
      icon: ['fas', 'map-marker-alt'], // ¡Nuevo formato para FontAwesome!
      link: 'https://www.google.com/maps/place/Maracaibo,+Zulia,+Venezuela', // Enlace a Maracaibo
      description: 'Ubicado en Maracaibo, Zulia, Venezuela.'
    }
  ],
};
