import { useFadeIn } from '../hooks/useFadeIn'

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
      </svg>
    ),
    title: 'App de gestión de citas',
    desc: 'Tus clientes reservan solos, tú recibes el aviso',
    color: 'text-blue-600 bg-blue-50',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M12 8v4M12 16h.01" />
      </svg>
    ),
    title: 'Recordatorios automáticos por WhatsApp',
    desc: '24h antes de cada cita, sin que toques nada',
    color: 'text-emerald-600 bg-emerald-50',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Automatizaciones',
    desc: 'Conecta tus herramientas y elimina el trabajo repetitivo',
    color: 'text-purple-600 bg-purple-50',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'Web sencilla',
    desc: 'Presencia online profesional en una semana',
    color: 'text-orange-600 bg-orange-50',
  },
]

export default function Solution() {
  const ref = useFadeIn()

  return (
    <section ref={ref} id="servicios" className="py-20 sm:py-28 bg-white px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14 fade-in">
          <span className="inline-block text-blue-700 font-semibold text-sm uppercase tracking-widest mb-3">
            Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Lo que hago por ti
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((s, i) => (
            <div
              key={i}
              className={`fade-in delay-${i + 1} group bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300`}
            >
              <div className={`w-12 h-12 flex items-center justify-center rounded-xl ${s.color} mb-5`}>
                {s.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
