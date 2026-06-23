import Logo from './Logo'

export default function Hero() {
  return (
    <section
      id="inicio"
      style={{
        position: 'relative', minHeight: '100vh',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #1A1A2E 0%, #252540 50%, #1A1A2E 100%)',
        padding: '6rem 1rem 4rem',
      }}
    >
      {/* Grid pattern */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, opacity: 0.06,
        backgroundImage:
          'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)',
        backgroundSize: '48px 48px',
      }} />

      {/* Blob brand */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '15%', left: '-8rem',
        width: 480, height: 480, borderRadius: '50%',
        background: 'radial-gradient(circle, #6C3FC7, transparent 70%)',
        opacity: 0.18, filter: 'blur(48px)',
      }} />
      {/* Blob accent */}
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: '15%', right: '-8rem',
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, #F5C842, transparent 70%)',
        opacity: 0.12, filter: 'blur(48px)',
      }} />

      <div style={{ position: 'relative', maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
        {/* Logo */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}>
          <Logo size="lg" />
        </div>

        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(245,200,66,0.12)', border: '1px solid rgba(245,200,66,0.3)',
          borderRadius: 999, padding: '6px 16px', marginBottom: 28,
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: '50%',
            background: '#F5C842', display: 'inline-block',
          }} />
          <span style={{
            fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 500,
            color: '#F5C842', letterSpacing: '0.04em',
          }}>
            Negocios locales en Rubí y alrededores
          </span>
        </div>

        <h1 style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: 'clamp(2.4rem, 6vw, 4rem)',
          fontWeight: 800, lineHeight: 1.05,
          letterSpacing: '-0.03em',
          color: '#ffffff', margin: '0 0 1.5rem',
        }}>
          Tu negocio,{' '}
          <span style={{ color: '#F5C842' }}>
            sin interrupciones
          </span>
        </h1>

        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
          fontWeight: 400, lineHeight: 1.65,
          color: 'rgba(255,255,255,0.65)',
          maxWidth: 600, margin: '0 auto 2.5rem',
        }}>
          Automatizo la gestión de citas, recordatorios y tareas repetitivas
          para que puedas centrarte en lo que sabes hacer.
        </p>

        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="mailto:info@fluxoapp.es"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: '#6C3FC7', color: '#fff',
              fontFamily: "'Inter', sans-serif", fontSize: 17, fontWeight: 700,
              padding: '14px 32px', borderRadius: 14, textDecoration: 'none',
              boxShadow: '0 8px 32px rgba(108,63,199,0.4)',
              transition: 'all 0.25s cubic-bezier(0.16,1,0.3,1)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(108,63,199,0.55)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(108,63,199,0.4)'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Hablemos
          </a>
          <a
            href="https://peludets-app.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.18)',
              color: '#fff',
              fontFamily: "'Inter', sans-serif", fontSize: 17, fontWeight: 600,
              padding: '14px 32px', borderRadius: 14, textDecoration: 'none',
              backdropFilter: 'blur(8px)',
              transition: 'all 0.25s cubic-bezier(0.16,1,0.3,1)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.14)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <polygon points="10,8 16,12 10,16 10,8" fill="currentColor" stroke="none" />
            </svg>
            Ver demo
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
        color: 'rgba(255,255,255,0.3)', animation: 'bounce 2s infinite',
      }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>

      <style>{`
        @keyframes bounce {
          0%,100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
    </section>
  )
}
