import { useFadeIn } from '../hooks/useFadeIn'

const problems = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    text: 'Gestionas las citas por WhatsApp y te interrumpen constantemente',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8A16 16 0 0 0 16 16.09l.85-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    text: 'Los clientes llaman fuera de horario y pierdes reservas',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
    <section ref={ref} id="problema" style={{ padding: '5rem 1rem', background: '#F8F7F4' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="label-overline" style={{ display: 'block', marginBottom: 12 }}>
            El problema
          </span>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            fontWeight: 800, lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: '#1A1A2E', margin: 0,
          }}>
            ¿Te suena esto?
          </h2>
        </div>

        <div style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {problems.map((p, i) => (
            <div
              key={i}
              className={`fade-in delay-${i + 1}`}
              style={{
                background: '#fff',
                borderRadius: 20,
                padding: '28px 28px 32px',
                border: '1px solid #EEECE8',
                boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                display: 'flex', flexDirection: 'column', gap: 16,
                transition: 'box-shadow 0.25s cubic-bezier(0.16,1,0.3,1), transform 0.25s cubic-bezier(0.16,1,0.3,1)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: 'rgba(229,72,77,0.08)',
                color: '#E5484D',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {p.icon}
              </div>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 16, fontWeight: 500,
                lineHeight: 1.6, color: '#3D3A35', margin: 0,
              }}>
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
