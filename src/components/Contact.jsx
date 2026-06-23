import { useFadeIn } from '../hooks/useFadeIn'

export default function Contact() {
  const ref = useFadeIn()

  return (
    <section ref={ref} id="contacto" style={{
      padding: '5rem 1rem',
      background: '#ffffff',
    }}>
      <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
        <div className="fade-in">
          <span className="label-overline" style={{ display: 'block', marginBottom: 12 }}>
            Contacto
          </span>
          <h2 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 800, lineHeight: 1.05,
            letterSpacing: '-0.03em',
            color: '#1A1A2E', margin: '0 0 1rem',
          }}>
            ¿Hablamos?
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 18, lineHeight: 1.65,
            color: '#8A8680', margin: '0 0 2.5rem',
          }}>
            Sin compromiso. Te explico cómo funcionaría en tu negocio concreto en 15 minutos.
          </p>
        </div>

        <div className="fade-in delay-1">
          <a
            href="mailto:info@fluxoapp.es"
            style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 12,
              background: '#6C3FC7', color: '#fff',
              fontFamily: "'Inter', sans-serif", fontSize: 18, fontWeight: 700,
              padding: '18px 40px', borderRadius: 16, textDecoration: 'none',
              boxShadow: '0 8px 40px rgba(108,63,199,0.35)',
              transition: 'all 0.25s cubic-bezier(0.16,1,0.3,1)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#5330A0'
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 12px 48px rgba(108,63,199,0.5)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#6C3FC7'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 8px 40px rgba(108,63,199,0.35)'
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Escríbeme a info@fluxoapp.es
          </a>
        </div>

        <p className="fade-in delay-2" style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 14, color: '#C8C4BC', marginTop: 28,
        }}>
          Soy Enric, estoy en Rubí. Atiendo personalmente.
        </p>
      </div>
    </section>
  )
}
