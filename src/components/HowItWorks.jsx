import { useFadeIn } from '../hooks/useFadeIn'

const steps = [
  {
    num: '1',
    title: 'Me cuentas cómo funciona tu negocio',
    desc: 'Una llamada de 15 minutos para entender qué necesitas y qué te está comiendo el tiempo.',
  },
  {
    num: '2',
    title: 'Configuro la solución en menos de una semana',
    desc: 'Me encargo de todo el proceso técnico. Sin que tengas que aprender nada nuevo.',
  },
  {
    num: '3',
    title: 'Tú lo usas, yo me encargo de que funcione',
    desc: 'Soporte continuo incluido. Si algo falla, lo resuelvo yo.',
  },
]

export default function HowItWorks() {
  const ref = useFadeIn()

  return (
    <section ref={ref} id="como-funciona" className="py-20 sm:py-28 bg-gradient-to-br from-blue-950 to-slate-900 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14 fade-in">
          <span className="inline-block text-blue-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Proceso
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Así de fácil
          </h2>
        </div>

        <div className="relative">
          {/* Connector line – desktop only */}
          <div
            className="hidden sm:block absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-0.5 bg-blue-800"
            aria-hidden="true"
          />

          <div className="grid gap-8 sm:grid-cols-3 relative">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`fade-in delay-${i + 1} flex flex-col items-center text-center`}
              >
                <div className="relative w-20 h-20 flex items-center justify-center rounded-full bg-blue-700 border-4 border-blue-900 mb-6 z-10">
                  <span className="text-2xl font-extrabold text-white">{step.num}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
