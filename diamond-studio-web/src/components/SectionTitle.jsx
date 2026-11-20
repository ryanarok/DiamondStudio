// Título de sección con detalle azul "diamante".
// `eyebrow` es el texto pequeño en mayúsculas; `title` el título principal.
export default function SectionTitle({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-text">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl leading-tight text-foreground sm:text-4xl">{title}</h2>
      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-muted">{description}</p>
      )}
      <span className="mt-1 h-px w-12 bg-accent" aria-hidden="true" />
    </div>
  )
}
