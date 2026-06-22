import { useFadeIn } from '../hooks/useFadeIn'

const sectors = [
  {
    label: 'Peluquerías caninas',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2 .336-3.5 2.226-3.5 3.775 0 .975.325 1.908 1 2.583.675.675 1.5.97 2 1.142V14a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V7.5c0-.828-.895-1.5-2-1.5-.4 0-.77.1-1 .25V5.172z" />
        <path d="M14.5 3c-1.923-.321-3.5.782-3.5 2.172v5.157c.23.15.6.25 1 .25 1.105 0 2-.672 2-1.5V8.5" />
        <circle cx="17.5" cy="14.5" r="2.5" />
        <path d="M20 17l2 2" />
      </svg>
    ),
  },
  {
    label: 'Fisioterapias',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0Z" />
        <path d="M14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0Z" />
        <path d="M1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122Z" />
        <path d="M17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611" />
      </svg>
    ),
  },
  {
    label: 'Psicólogos',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M12 8a3 3 0 0 0-3 3v1h6v-1a3 3 0 0 0-3-3z" />
        <line x1="12" y1="16" x2="12" y2="18" />
      </svg>
    ),
  },
  {
    label: 'Peluquerías',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <line x1="20" y1="4" x2="8.12" y2="15.88" />
        <line x1="14.47" y1="14.48" x2="20" y2="20" />
        <line x1="8.12" y1="8.12" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    label: 'Clínicas dentales',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8.5 2 7 4.5 7 7c0 1.5.5 3 1 4 .7 1.5.5 3 .5 5 0 2 1 4 2.5 4s2-2 2-4V14c0-1 .5-1.5 1-1.5s1 .5 1 1.5v2c0 2 .5 4 2 4s2.5-2 2.5-4c0-2-.2-3.5.5-5 .5-1 1-2.5 1-4C21 4.5 19.5 2 16 2c-1.5 0-2.5.8-3 1.5C12.5 2.8 13.5 2 12 2z" />
      </svg>
    ),
  },
  {
    label: 'Comercios locales',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9,22 9,12 15,12 15,22" />
      </svg>
    ),
  },
]

export default function ForWhom() {
  const ref = useFadeIn()

  return (
    <section ref={ref} id="para-quien" className="py-20 sm:py-28 bg-slate-50 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14 fade-in">
          <span className="inline-block text-blue-700 font-semibold text-sm uppercase tracking-widest mb-3">
            Para quién
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trabajo con negocios como el tuyo
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {sectors.map((s, i) => (
            <div
              key={i}
              className={`fade-in delay-${i + 1} flex flex-col items-center gap-3 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300`}
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                {s.icon}
              </div>
              <span className="text-sm font-semibold text-slate-800 text-center">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
