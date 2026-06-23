import { useFadeIn } from '../hooks/useFadeIn'

const sectors = [
  {
    label: 'Peluquerías caninas',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    label: 'Peluquerías',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8.5 2 7 4.5 7 7c0 1.5.5 3 1 4 .7 1.5.5 3 .5 5 0 2 1 4 2.5 4s2-2 2-4V14c0-1 .5-1.5 1-1.5s1 .5 1 1.5v2c0 2 .5 4 2 4s2.5-2 2.5-4c0-2-.2-3.5.5-5 .5-1 1-2.5 1-4C21 4.5 19.5 2 16 2c-1.5 0-2.5.8-3 1.5C12.5 2.8 13.5 2 12 2z" />
      </svg>
    ),
  },
  {
    label: 'Comercios locales',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9,22 9,12 15,12 15,22" />
      </svg>
    ),
  },
]

export default function ForWhom() {
  const ref = useFadeIn()

  return (
    <section ref={ref} id="para-quien" style={{ padding: '5rem 1rem', background: '#F8F7F4' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="label-overline" style={{ display: 'block', marginBottom: 12 }}>
            Para quién
          </span>
          <h2 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            fontWeight: 800, lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: '#1A1A2E', margin: 0,
          }}>
            Trabajo con negocios como el tuyo
          </h2>
        </div>

        <div style={{
          display: 'grid', gap: 20,
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        }}>
          {sectors.map((s, i) => (
            <div
              key={i}
              className={`fade-in delay-${i + 1}`}
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
                background: '#fff', borderRadius: 20, padding: '28px 20px',
                border: '1px solid #EEECE8',
                boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                transition: 'all 0.25s cubic-bezier(0.16,1,0.3,1)',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(108,63,199,0.12)'
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.borderColor = 'rgba(108,63,199,0.2)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = '#EEECE8'
              }}
            >
              <div style={{
                width: 56, height: 56, borderRadius: 16,
                background: 'rgba(108,63,199,0.08)', color: '#6C3FC7',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {s.icon}
              </div>
              <span style={{
                fontFamily: "'Inter', sans-serif", fontSize: 14,
                fontWeight: 600, color: '#1A1A2E', textAlign: 'center',
              }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
