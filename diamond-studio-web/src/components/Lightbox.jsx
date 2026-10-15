import { useEffect } from 'react'

// Modal a pantalla completa para ver un trabajo en grande.
// Se cierra con Escape, clic fuera o el botón de cerrar.
export default function Lightbox({ item, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  if (!item) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink-900/90 p-4 backdrop-blur-sm sm:p-8"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Cerrar"
        className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white"
      >
        <CloseIcon />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
        }}
        aria-label="Anterior"
        className="absolute left-3 inline-flex h-11 w-11 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white sm:left-6"
      >
        <ChevronLeft />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
        aria-label="Siguiente"
        className="absolute right-3 inline-flex h-11 w-11 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white sm:right-6"
      >
        <ChevronRight />
      </button>

      <figure
        onClick={(e) => e.stopPropagation()}
        className="max-h-full w-full max-w-3xl overflow-hidden rounded-2xl bg-ink-900 shadow-2xl"
      >
        <img
          src={item.image}
          alt={item.title}
          className="max-h-[75vh] w-full object-contain"
          loading="eager"
        />
        <figcaption className="flex items-center justify-between gap-4 border-t border-white/10 px-5 py-4 text-white">
          <div>
            <p className="font-display text-lg">{item.title}</p>
            <p className="text-sm text-white/60">{item.artist}</p>
          </div>
          <span className="rounded-full border border-diamond-400/40 px-3 py-1 text-xs font-medium text-diamond-300">
            {item.style}
          </span>
        </figcaption>
      </figure>
    </div>
  )
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function ChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
