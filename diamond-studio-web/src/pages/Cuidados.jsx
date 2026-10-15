import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'
import WhatsAppButton from '../components/WhatsAppButton'
import { AFTERCARE, AFTERCARE_NOTE } from '../data/aftercare'

export default function Cuidados() {
  return (
    <>
      <section className="border-b border-ink-200 bg-ink-50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <Reveal>
            <SectionTitle
              eyebrow="Cuidados"
              title="Cómo cuidar tu tatuaje"
              description="Seguir estos pasos ayuda a que la cicatrización sea limpia y la pieza conserve el color y el detalle por mucho tiempo."
            />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="space-y-10">
          {AFTERCARE.map((phase, i) => (
            <Reveal key={phase.id} delay={i * 60}>
              <article className="overflow-hidden rounded-3xl border border-ink-200">
                <header className="flex items-center gap-4 border-b border-ink-200 bg-ink-50 px-6 py-5 sm:px-8">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-diamond-600">
                    <PhaseIcon name={phase.icon} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-diamond-600">
                      Paso {i + 1}
                    </p>
                    <h2 className="font-display text-xl text-ink-900 sm:text-2xl">{phase.title}</h2>
                  </div>
                </header>
                <ul className="divide-y divide-ink-100">
                  {phase.tips.map((tip, t) => (
                    <li key={t} className="flex items-start gap-3 px-6 py-4 sm:px-8">
                      <svg viewBox="0 0 24 24" fill="none" className="mt-0.5 h-5 w-5 shrink-0 text-diamond-500" aria-hidden="true">
                        <path d="M5 12l4 4 10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-ink-500">{tip}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-8 rounded-xl bg-ink-50 px-5 py-4 text-sm text-ink-400">
            {AFTERCARE_NOTE}
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <Reveal>
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-ink-200 bg-ink-50 p-8 text-center sm:flex-row sm:p-10 sm:text-left">
            <div>
              <h2 className="font-display text-2xl text-ink-900">¿Tenés dudas con tu cicatrización?</h2>
              <p className="mt-2 text-ink-500">
                Escribinos y te ayudamos. Si notás algo raro, siempre es mejor consultar.
              </p>
            </div>
            <WhatsAppButton className="shrink-0">Consultar por WhatsApp</WhatsAppButton>
          </div>
        </Reveal>
      </section>
    </>
  )
}

function PhaseIcon({ name }) {
  if (name === 'calendar') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <rect x="3" y="5" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3 9h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    )
  }
  if (name === 'clock') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M12 3l1.8 4.9L19 9l-4.3 3.4L15.6 18 12 15.1 8.4 18l.9-5.6L5 9l5.2-1.1L12 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}
