import { Link } from 'react-router-dom'
import { SITE, instagramLink } from '../config/site'

const LINKS = [
  { to: './', label: 'Inicio' },
  { to: './galeria', label: 'Galería' },
  { to: './servicios', label: 'Servicios y precios' },
  { to: './cuidados', label: 'Cuidados' },
]

// Se calcula una vez a nivel de módulo (evita el warning de pureza en render).
const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface-alt">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-accent-text" aria-hidden="true">
              <path
                d="M6 3h12l3 5-9 13L3 8l3-5Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-display text-lg font-semibold text-foreground">{SITE.name}</span>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            {SITE.tagline} Trabajo personalizado, higiene y buena onda.
          </p>
          <a
            href={instagramLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent-text"
          >
            <InstagramIcon />
            {SITE.instagramHandle}
          </a>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Navegación</h3>
          <ul className="mt-4 space-y-2.5">
            {LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-muted transition-colors hover:text-accent-text"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Contacto</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li className="flex items-start gap-2">
              <PinIcon />
              <span>{SITE.address}</span>
            </li>
            <li className="flex items-start gap-2">
              <ClockIcon />
              <span>{SITE.hours}</span>
            </li>
          </ul>
          <a
            href={SITE.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent-text hover:text-accent-text-hover"
          >
            Cómo llegar
            <ArrowIcon />
          </a>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-faint sm:flex-row sm:px-8">
          <span>
            © {YEAR} {SITE.name}. Todos los derechos reservados.
          </span>
          <span>Hecho con 💎</span>
        </div>
      </div>
    </footer>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="mt-0.5 h-4 w-4 shrink-0 text-accent-text" aria-hidden="true">
      <path
        d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="mt-0.5 h-4 w-4 shrink-0 text-accent-text" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
