import { useState } from 'react'
import { GALLERY, STYLES } from '../data/gallery'
import Lightbox from './Lightbox'

// Galería con filtros por estilo y lightbox.
// `items` permite pasar un subconjunto (para el preview del home).
export default function GalleryGrid({ items = GALLERY, showFilters = true }) {
  const [filter, setFilter] = useState('Todos')
  const [index, setIndex] = useState(null)

  const filtered =
    filter === 'Todos' ? items : items.filter((item) => item.style === filter)

  // Los filtros solo tienen sentido sobre el set completo.
  const activeStyles = STYLES.filter(
    (style) => style === 'Todos' || items.some((i) => i.style === style),
  )

  const open = (i) => setIndex(i)
  const close = () => setIndex(null)
  const prev = () => setIndex((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length))
  const next = () => setIndex((i) => (i === null ? i : (i + 1) % filtered.length))

  return (
    <div>
      {showFilters && (
        <div className="mb-8 flex flex-wrap gap-2">
          {activeStyles.map((style) => {
            const active = style === filter
            return (
              <button
                key={style}
                type="button"
                onClick={() => setFilter(style)}
                aria-pressed={active}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                  active
                    ? 'bg-diamond-600 text-white shadow-sm'
                    : 'bg-ink-100 text-ink-500 hover:bg-ink-200 hover:text-ink-900'
                }`}
              >
                {style}
              </button>
            )
          })}
        </div>
      )}

      {filtered.length === 0 ? (
        <p className="py-16 text-center text-ink-400">No hay trabajos de este estilo todavía.</p>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {filtered.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => open(i)}
              className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-ink-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-diamond-600"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute inset-x-0 bottom-0 translate-y-2 p-4 text-left opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="block font-display text-white">{item.title}</span>
                <span className="mt-0.5 block text-xs text-white/70">{item.style}</span>
              </span>
            </button>
          ))}
        </div>
      )}

      {index !== null && (
        <Lightbox item={filtered[index]} onClose={close} onPrev={prev} onNext={next} />
      )}
    </div>
  )
}
