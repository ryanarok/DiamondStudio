import SectionTitle from '../components/SectionTitle'
import Reveal from '../components/Reveal'
import GalleryGrid from '../components/GalleryGrid'
import WhatsAppButton from '../components/WhatsAppButton'

export default function Galeria() {
  return (
    <>
      <section className="border-b border-ink-200 bg-ink-50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <Reveal>
            <SectionTitle
              eyebrow="Galería"
              title="Nuestros trabajos"
              description="Filtrá por estilo y tocá cualquier pieza para verla en grande. Si alguna te inspira, escribinos y la adaptamos a tu idea."
            />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <Reveal>
          <GalleryGrid />
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <Reveal>
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-ink-200 bg-ink-50 p-8 text-center sm:flex-row sm:p-10 sm:text-left">
            <div>
              <h2 className="font-display text-2xl text-ink-900">¿Te gustó alguna pieza?</h2>
              <p className="mt-2 text-ink-500">
                Contanos cuál te llamó la atención y la usamos como referencia para la tuya.
              </p>
            </div>
            <WhatsAppButton className="shrink-0">Reservar tu cita</WhatsAppButton>
          </div>
        </Reveal>
      </section>
    </>
  )
}
