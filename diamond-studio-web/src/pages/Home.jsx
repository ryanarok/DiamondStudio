import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'
import GalleryGrid from '../components/GalleryGrid'
import WhatsAppButton from '../components/WhatsAppButton'
import { GALLERY } from '../data/gallery'
import { SERVICES, PROCESS } from '../data/services'
import { TESTIMONIALS } from '../data/testimonials'
import { SITE, instagramLink } from '../config/site'

export default function Home() {
  return (
    <>
      <Hero />
      <GalleryPreview />
      <About />
      <ServicesPreview />
      <Process />
      <Testimonials />
      <Location />
    </>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Detalle de fondo: brillo azul "diamante" */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(60% 55% at 75% 15%, rgba(37,99,235,0.10) 0%, rgba(255,255,255,0) 60%)',
        }}
      />
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-20 sm:px-8 sm:pb-24 sm:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-soft-border bg-accent-soft px-3 py-1 text-xs font-medium text-accent-on-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Turnos por WhatsApp
            </span>

            <h1 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight text-foreground sm:text-6xl">
              Tatuajes hechos
              <br />
              <span className="text-accent-text">a medida.</span>
            </h1>

            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              {SITE.name} es un estudio de tatuajes especializado en diseño personalizado.
              Trabajos con detalle, higiene y estilo propio.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <WhatsAppButton>Reservar por WhatsApp</WhatsAppButton>
              <Link
                to="/galeria"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-6 py-3 font-medium text-foreground transition-colors duration-200 hover:border-accent hover:text-accent-text"
              >
                Ver galería
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-faint">
              <a
                href={instagramLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-accent-text"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
                {SITE.instagramHandle}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-surface-alt shadow-2xl shadow-foreground/10">
              <img
                src={GALLERY[0].image}
                alt="Trabajo de ejemplo del estudio"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-line bg-surface px-5 py-4 shadow-xl sm:block">
              <p className="font-display text-2xl text-foreground">{SITE.established}</p>
              <p className="text-xs uppercase tracking-wider text-faint">Desde</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function GalleryPreview() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <Reveal>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <SectionTitle
            eyebrow="Trabajos"
            title="Algunas piezas recientes"
            description="Una selección de trabajos hechos en el estudio. Entrá a la galería para ver todo por estilo."
          />
          <Link
            to="/galeria"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-text hover:text-accent-text-hover"
          >
            Ver galería completa
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </Reveal>
      <Reveal delay={80}>
        <GalleryGrid items={GALLERY.slice(0, 6)} showFilters={false} />
      </Reveal>
    </section>
  )
}

function About() {
  const values = [
    {
      title: 'Diseño propio',
      description: 'Cada pieza se dibuja pensando en vos: nada genérico, nada copiado.',
    },
    {
      title: 'Higiene primero',
      description: 'Material estéril descartable y protocolos estrictos en cada sesión.',
    },
    {
      title: 'Trato cercano',
      description: 'Te acompañamos desde la idea hasta el cuidado posterior.',
    },
  ]

  return (
    <section className="border-y border-line bg-surface-alt">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionTitle
              eyebrow="Sobre el estudio"
              title="Un estudio pequeño, con atención al detalle"
              description="Somos un estudio de tatuajes enfocado en el trabajo a medida. Nos importa que cada pieza tenga sentido para quien la lleva y que la experiencia en el estudio sea tan buena como el resultado."
            />
            <div className="mt-8">
              <WhatsAppButton variant="outline">Consultar por mi idea</WhatsAppButton>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <ul className="space-y-4">
              {values.map((value) => (
                <li
                  key={value.title}
                  className="rounded-2xl border border-line bg-surface p-5 transition-colors duration-200 hover:border-accent-soft-border"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-text">
                      <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
                        <path d="M5 12l4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-medium text-foreground">{value.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{value.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function ServicesPreview() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <Reveal>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <SectionTitle
            eyebrow="Servicios"
            title="¿Qué hacemos?"
            description="Desde flash listo hasta piezas custom y cover-ups. Precios orientativos por tipo de trabajo."
          />
          <Link
            to="/servicios"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-text hover:text-accent-text-hover"
          >
            Ver servicios y precios
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service, i) => (
          <Reveal key={service.id} delay={i * 60}>
            <div className="flex h-full flex-col rounded-2xl border border-line p-6 transition-colors duration-200 hover:border-accent-soft-border">
              <h3 className="font-display text-xl text-foreground">{service.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{service.description}</p>
              <p className="mt-4 text-sm font-medium text-accent-text">
                {service.price} {SITE.currency}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="border-y border-line bg-surface-alt">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <SectionTitle
            eyebrow="Cómo trabajamos"
            title="De la idea al tatuaje en 4 pasos"
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((item, i) => (
            <Reveal key={item.step} delay={i * 70}>
              <div className="text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-accent-soft-border bg-surface font-display text-lg text-accent-text">
                  {item.step}
                </span>
                <h3 className="mt-4 font-medium text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <Reveal>
        <SectionTitle eyebrow="Testimonios" title="Qué dicen nuestros clientes" align="center" />
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.id} delay={i * 70}>
            <figure className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6">
              <div className="flex gap-1 text-diamond-500" aria-label="5 de 5 estrellas">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                    <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 15l-5.2 2.6 1-5.8L1.5 7.7l5.9-.9L10 1.5Z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-4 text-sm font-medium text-foreground">{t.name}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

// Banda de contacto: siempre oscura (tokens "night"), con acentos azules fijos.
function Location() {
  return (
    <section className="border-t border-line bg-night text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-diamond-400">
            Visitanos
          </span>
          <h2 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">
            Estamos en {SITE.city}
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-white/60">
            Sacá tu turno y vení a conocernos. Si no sabés cómo llegar, tocá el botón y te abrimos
            la ruta.
          </p>

          <dl className="mt-8 space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <dt className="sr-only">Dirección</dt>
              <dd className="flex items-start gap-3 text-white/80">
                <svg viewBox="0 0 24 24" fill="none" className="mt-0.5 h-5 w-5 shrink-0 text-diamond-400" aria-hidden="true">
                  <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6" />
                </svg>
                {SITE.address}
              </dd>
            </div>
            {SITE.hoursDetail.map((h) => (
              <div key={h.day} className="flex items-center gap-3 text-white/70">
                <dt className="w-40 shrink-0">{h.day}</dt>
                <dd className={h.time === 'Cerrado' ? 'text-white/40' : 'text-white'}>{h.time}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={SITE.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 font-medium text-white transition-colors duration-200 hover:border-diamond-400 hover:text-diamond-300"
            >
              Cómo llegar
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <WhatsAppButton>Reservar turno</WhatsAppButton>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-accent/30">
                <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
                  <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </span>
              <p className="px-6 font-display text-xl text-white">{SITE.address}</p>
              <a
                href={SITE.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-diamond-300 underline underline-offset-4"
              >
                Abrir en Google Maps
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
