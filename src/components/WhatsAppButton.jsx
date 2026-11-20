import { whatsappLink, SITE } from '../config/site'

// Botón de WhatsApp reutilizable.
// `message` permite armar un mensaje pre-armado específico por contexto.
export default function WhatsAppButton({
  message,
  children = 'Reservar por WhatsApp',
  variant = 'solid',
  className = '',
}) {
  const href = message ? whatsappLink(message) : whatsappLink()

  const base =
    'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background'

  const variants = {
    solid:
      'bg-accent text-white px-6 py-3 shadow-lg shadow-accent/20 hover:bg-accent-strong hover:shadow-accent/30 hover:-translate-y-0.5',
    outline:
      'border border-line text-foreground px-6 py-3 hover:border-accent hover:text-accent-text',
    ghost:
      'text-accent-text px-1 py-1 hover:text-accent-text-hover underline underline-offset-4 decoration-accent-soft-border',
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Escribir por WhatsApp a ${SITE.name}`}
      className={`${base} ${variants[variant]} ${className}`}
    >
      <WhatsAppIcon className="h-5 w-5" />
      {children}
    </a>
  )
}

function WhatsAppIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.08-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.42 1.27 4.86L2 22l5.29-1.25A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2Zm0 18a8 8 0 0 1-4.08-1.12l-.29-.17-3.14.74.75-3.06-.19-.31A7.96 7.96 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8Z" />
    </svg>
  )
}
