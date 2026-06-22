import { useFadeIn } from '../hooks/useFadeIn'

export default function Contact() {
  const ref = useFadeIn()

  return (
    <section ref={ref} id="contacto" className="py-20 sm:py-28 bg-white px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="fade-in">
          <span className="inline-block text-blue-700 font-semibold text-sm uppercase tracking-widest mb-3">
            Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            ¿Hablamos?
          </h2>
          <p className="text-slate-500 text-lg mb-10 leading-relaxed">
            Sin compromiso. Te explico cómo funcionaría en tu negocio concreto en 15 minutos.
          </p>
        </div>

        <div className="fade-in delay-1">
          <a
            href="mailto:info@fluxoapp.es"
            className="inline-flex items-center justify-center gap-3 bg-blue-700 hover:bg-blue-600 text-white font-bold text-xl px-10 py-5 rounded-2xl transition-all duration-200 shadow-xl shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-0.5"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Escríbeme a info@fluxoapp.es
          </a>
        </div>

        <p className="fade-in delay-2 mt-8 text-slate-400 text-sm">
          Soy Enric, estoy en Rubí. Atiendo personalmente.
        </p>
      </div>
    </section>
  )
}
