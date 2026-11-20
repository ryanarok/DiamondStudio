import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'
import WhatsAppButton from '../components/WhatsAppButton'
import { SERVICES, POLICIES } from '../data/services'
import { SITE, whatsappLink } from '../config/site'

export default function Servicios() {
  return (
    <>
      <section className="border-b border-line bg-surface-alt">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <Reveal>
            <SectionTitle
              eyebrow="Servicios y precios"
              title="Trabajos a medida para cada idea"
              description={
                <>
                  Los precios son orientativos y varían según tamaño, zona y detalle.{' '}
                  {SITE.currency} — la cifra final se define después de ver tu idea.
                </>
              }
            />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-4 sm:grid-cols-2">
          {SERVICES.map((service, i) => (
            <Reveal key={service.id} delay={i * 60}>
              <article className="flex h-full flex-col rounded-2xl border border-line p-6 transition-colors duration-200 hover:border-accent-soft-border sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="font-display text-2xl text-foreground">{service.name}</h2>
                  <span className="shrink-0 rounded-full bg-accent-soft px-3 py-1 text-sm font-medium text-accent-on-soft">
                    {service.price} {SITE.currency}
                  </span>
                </div>
                <p className="mt-3 flex-1 leading-relaxed text-muted">{service.description}</p>
                <div className="mt-5 flex items-center justify-between gap-4 border-t border-line-soft pt-4">
                  <span className="inline-flex items-center gap-1.5 text-sm text-faint">
                    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
                      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                    {service.duration}
                  </span>
                  <a
                    href={whatsappLink(
                      `¡Hola! Me interesa el servicio de ${service.name}. ¿Me pasás más información?`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-accent-text hover:text-accent-text-hover"
                  >
                    Consultar →
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-surface-alt">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <Reveal>
            <SectionTitle eyebrow="Políticas" title="Antes de reservar" />
          </Reveal>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {POLICIES.map((policy, i) => (
              <Reveal key={policy.title} delay={i * 60}>
                <div>
                  <h3 className="flex items-center gap-2 font-medium text-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {policy.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{policy.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <div className="flex flex-col items-center justify-center gap-6 rounded-3xl border border-accent-soft-border bg-accent-soft p-8 text-center sm:p-12">
            <h2 className="font-display text-3xl text-foreground">¿Listo para tu próximo tatuaje?</h2>
            <p className="max-w-lg text-muted">
              Escribinos con tu idea, zona y tamaño aproximado. Te respondemos con un presupuesto
              y las próximas disponibilidades.
            </p>
            <WhatsAppButton>Reservar por WhatsApp</WhatsAppButton>
          </div>
        </Reveal>
      </section>
    </>
  )
}
