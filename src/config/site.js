// PLACEHOLDER — Todos los datos reales del estudio viven acá.
// Buscá "PLACEHOLDER" en el proyecto para encontrar todo lo que hay que reemplazar.
// Solo necesitás editar ESTE archivo para actualizar el sitio completo.

export const SITE = {
  name: 'Diamond Studio',
  tagline: 'Tatuajes hechos a medida.',
  // PLACEHOLDER: número de WhatsApp con código de país, sin "+" ni espacios.
  whatsapp: '5355215681',
  // Mensaje base que se pre-arma al tocar cualquier botón de reserva.
  whatsappMessage: '¡Hola Diamond Studio! Me gustaría reservar un turno.',
  // PLACEHOLDER: dirección real del estudio.
  address: 'Calvo A/27 y 28',
  // PLACEHOLDER: ciudad/sector para el link de mapas.
  city: 'Cárdenas',
  // PLACEHOLDER: horarios reales.
  hours: 'Mar a Sáb · 12:00 – 20:00',
  hoursDetail: [
    { day: 'Lunes', time: 'Cerrado' },
    { day: 'Martes a Viernes', time: '12:00 – 20:00' },
    { day: 'Sábados', time: '11:00 – 19:00' },
    { day: 'Domingos', time: 'Cerrado' },
  ],
  // Link de Instagram real del estudio.
  instagram: 'https://www.instagram.com/diamond_studio005/',
  instagramHandle: '@diamond_studio005',
  // PLACEHOLDER: query de Google Maps para el botón "Cómo llegar".
  mapUrl: 'https://maps.app.goo.gl/Jk6NMFSWFGJHj3cc8', //'https://www.google.com/maps/search/?api=1&query=Av.+Ejemplo+123,+Ciudad', 
  currency: 'CUP',
  established: '2020',
}

// Armá el link de WhatsApp con el mensaje pre-armado.
export function whatsappLink(message = SITE.whatsappMessage) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`
}

// Atajo para el link de Instagram.
export function instagramLink(path = '') {
  return `${SITE.instagram}${path}`
}
