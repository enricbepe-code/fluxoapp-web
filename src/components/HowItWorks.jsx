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
    <section ref={ref} id="como-funciona" style={{
      padding: '5rem 1rem',
      background: 'linear-gradient(135deg, #1A1A2E 0%, #252540 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Accent dot top-right */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '-4rem', right: '-4rem',
        width: 320, height: 320, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(108,63,199,0.3), transparent 70%)',
        filter: 'blur(40px)',
      }} />

      <div style={{ maxWidth: 1120, margin: '0 auto', position: 'relative' }}>
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{
            display: 'block', marginBottom: 12,
            fontFamily: "'Inter', sans-serif", fontSize: 12,
            fontWeight: 600, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: '#A78BFA',
          }}>
            Proceso
          </span>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            fontWeight: 800, lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: '#ffffff', margin: 0,
          }}>
            Así de fácil
          </h2>
        </div>

        <div style={{ position: 'relative' }}>
          {/* Connector line — visible on desktop */}
          <div aria-hidden="true" style={{
            display: 'none',
            position: 'absolute', top: 40,
            left: 'calc(16.67% + 2.5rem)', right: 'calc(16.67% + 2.5rem)',
            height: 1,
            background: 'linear-gradient(90deg, rgba(108,63,199,0.6), rgba(245,200,66,0.4), rgba(108,63,199,0.6))',
          }} className="connector-line" />

          <div style={{ display: 'grid', gap: 40, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
            {steps.map((step, i) => (
              <div
                key={i}
                className={`fade-in delay-${i + 1}`}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
              >
                <div style={{
                  width: 80, height: 80, borderRadius: '50%',
                  background: '#6C3FC7',
                  border: '3px solid rgba(108,63,199,0.3)',
                  boxShadow: '0 0 0 6px rgba(108,63,199,0.1), 0 8px 32px rgba(108,63,199,0.4)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 24, position: 'relative', zIndex: 1,
                }}>
                  <span style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: 28, fontWeight: 800, color: '#ffffff',
                  }}>
                    {step.num}
                  </span>
                </div>
                <h3 style={{
                  fontFamily: "'Syne', sans-serif", fontSize: 18, fontWeight: 700,
                  color: '#ffffff', margin: '0 0 12px', lineHeight: 1.25,
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontFamily: "'Inter', sans-serif", fontSize: 15,
                  lineHeight: 1.65, color: 'rgba(255,255,255,0.5)', margin: 0,
                }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .connector-line { display: block !important; }
        }
      `}</style>
    </section>
  )
}
