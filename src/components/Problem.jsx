import { useFadeIn } from '../hooks/useFadeIn'

const problems = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    text: 'Gestionas las citas por WhatsApp y te interrumpen constantemente',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8A16 16 0 0 0 16 16.09l.85-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    text: 'Los clientes llaman fuera de horario y pierdes reservas',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12,6 12,12 16,14" />
      </svg>
    ),
    text: 'Dedicas tiempo cada semana a tareas que podrían hacerse solas',
  },
]

export default function Problem() {
  const ref = useFadeIn()

  return (
    <section ref={ref} id="problema" className="py-20 sm:py-28 bg-slate-50 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14 fade-in">
          <span className="inline-block text-blue-700 font-semibold text-sm uppercase tracking-widest mb-3">
            El problema
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            ¿Te suena esto?
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {problems.map((p, i) => (
            <div
              key={i}
              className={`fade-in delay-${i + 1} bg-white rounded-2xl p-7 shadow-sm border border-slate-100 flex flex-col gap-4`}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-red-50 text-red-500">
                {p.icon}
              </div>
              <p className="text-slate-700 text-base font-medium leading-relaxed">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
