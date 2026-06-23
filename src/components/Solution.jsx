import { useFadeIn } from '../hooks/useFadeIn'

const services = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
      </svg>
    ),
    title: 'App de gestión de citas',
    desc: 'Tus clientes reservan solos, tú recibes el aviso',
    iconBg: 'rgba(108,63,199,0.1)',
    iconColor: '#6C3FC7',
    tag: 'Más popular',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M12 8v4M12 16h.01" />
      </svg>
    ),
    title: 'Recordatorios por WhatsApp',
    desc: '24h antes de cada cita, sin que toques nada',
    iconBg: 'rgba(22,184,130,0.1)',
    iconColor: '#16B882',
    tag: null,
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Automatizaciones',
    desc: 'Conecta tus herramientas y elimina el trabajo repetitivo',
    iconBg: 'rgba(245,200,66,0.12)',
    iconColor: '#D4A810',
    tag: null,
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'Web sencilla',
    desc: 'Presencia online profesional en una semana',
    iconBg: 'rgba(36,112,184,0.1)',
    iconColor: '#2470B8',
    tag: null,
  },
]

export default function Solution() {
  const ref = useFadeIn()

  return (
    <section ref={ref} id="servicios" style={{ padding: '5rem 1rem', background: '#ffffff' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="label-overline" style={{ display: 'block', marginBottom: 12 }}>
            Servicios
          </span>
          <h2 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            fontWeight: 800, lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: '#1A1A2E', margin: 0,
          }}>
            Lo que hago por ti
          </h2>
        </div>

        <div style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {services.map((s, i) => (
            <div
              key={i}
              className={`fade-in delay-${i + 1}`}
              style={{
                background: '#fff', borderRadius: 20, padding: '28px 28px 32px',
                border: '1px solid #EEECE8',
                boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                position: 'relative', overflow: 'hidden',
                transition: 'box-shadow 0.25s cubic-bezier(0.16,1,0.3,1), transform 0.25s cubic-bezier(0.16,1,0.3,1), border-color 0.25s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(108,63,199,0.12)'
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.borderColor = 'rgba(108,63,199,0.2)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = '#EEECE8'
              }}
            >
              {s.tag && (
                <span style={{
                  position: 'absolute', top: 20, right: 20,
                  background: '#F5C842', color: '#1A1A2E',
                  fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700,
                  padding: '3px 10px', borderRadius: 999, letterSpacing: '0.04em',
                }}>
                  {s.tag}
                </span>
              )}
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: s.iconBg, color: s.iconColor,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 20,
              }}>
                {s.icon}
              </div>
              <h3 style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 18, fontWeight: 700,
                color: '#1A1A2E', margin: '0 0 8px',
              }}>
                {s.title}
              </h3>
              <p style={{
                fontFamily: "'Inter', sans-serif", fontSize: 15,
                lineHeight: 1.6, color: '#8A8680', margin: 0,
              }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
