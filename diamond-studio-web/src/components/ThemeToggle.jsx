import { useEffect, useState } from 'react'

// Botón para alternar entre tema claro y oscuro.
// Por defecto sigue el tema del dispositivo (lo aplica el script de index.html).
// Al tocarlo, guarda la elección explícita en localStorage y deja de seguir al sistema.
export default function ThemeToggle() {
  const [dark, setDark] = useState(() =>
    typeof document !== 'undefined'
      ? document.documentElement.classList.contains('dark')
      : false,
  )

  useEffect(() => {
    const root = document.documentElement
    const mq = window.matchMedia('(prefers-color-scheme: dark)')

    // Si el usuario guardó una elección, respetamos solo esa.
    const onSystemChange = (e) => {
      if (!localStorage.getItem('theme')) {
        root.classList.toggle('dark', e.matches)
        setDark(e.matches)
      }
    }

    // Sincroniza el estado si cambió desde otro lado (p. ej. otra pestaña).
    const onStorage = () => setDark(root.classList.contains('dark'))

    mq.addEventListener('change', onSystemChange)
    window.addEventListener('storage', onStorage)
    return () => {
      mq.removeEventListener('change', onSystemChange)
      window.removeEventListener('storage', onStorage)
    }
  }, [])

  const toggle = () => {
    const root = document.documentElement
    const next = !root.classList.contains('dark')
    root.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
    setDark(next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
      aria-pressed={dark}
      title={dark ? 'Tema claro' : 'Tema oscuro'}
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-body transition-colors duration-200 hover:bg-surface-alt hover:text-accent-text focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      {dark ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  )
}
