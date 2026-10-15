import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { SITE, instagramLink } from '../config/site'
import WhatsAppButton from './WhatsAppButton'

const LINKS = [
  { to: '/', label: 'Inicio' },
  { to: '/galeria', label: 'Galería' },
  { to: '/servicios', label: 'Servicios y precios' },
  { to: '/cuidados', label: 'Cuidados' },
]

// Links del nav. `end` evita que "/" se resalte en todas las rutas.
function linkClass({ isActive }) {
  return `text-sm font-medium transition-colors duration-200 ${
    isActive ? 'text-diamond-600' : 'text-ink-500 hover:text-ink-900'
  }`
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Cierra el menú al navegar.
  const close = () => setOpen(false)

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-white/80 backdrop-blur-md transition-colors duration-200 ${
        scrolled ? 'border-ink-200' : 'border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link to="/" onClick={close} className="flex items-center gap-2">
          <DiamondMark className="h-6 w-6 text-diamond-600" />
          <span className="font-display text-lg font-semibold tracking-tight text-ink-900">
            {SITE.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <WhatsAppButton className="px-5 py-2.5 text-sm">Reservar</WhatsAppButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink-700 hover:bg-ink-100 md:hidden"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-ink-200 bg-white px-5 pb-5 pt-2 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Móvil">
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={close}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2.5 text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-diamond-50 text-diamond-600'
                      : 'text-ink-700 hover:bg-ink-100'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-4 flex items-center justify-between gap-4">
            <WhatsAppButton className="w-full">Reservar por WhatsApp</WhatsAppButton>
          </div>
          <a
            href={instagramLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm text-ink-500 hover:text-diamond-600"
          >
            {SITE.instagramHandle}
          </a>
        </div>
      )}
    </header>
  )
}

function DiamondMark({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6 3h12l3 5-9 13L3 8l3-5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M3 8h18M9 3l-1 5 4 13 4-13-1-5" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}
