import Logo from './Logo'

export default function Footer() {
  return (
    <footer style={{
      background: '#1A1A2E',
      padding: '2.5rem 1.5rem',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div style={{
        maxWidth: 1120, margin: '0 auto',
        display: 'flex', flexWrap: 'wrap',
        alignItems: 'center', justifyContent: 'space-between',
        gap: 16,
      }}>
        <Logo size="sm" light />

        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 14, color: 'rgba(255,255,255,0.35)',
          margin: 0,
        }}>
          © 2026 Fluxoapp · Rubí, Barcelona
        </p>

        <a
          href="mailto:info@fluxoapp.es"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 14, fontWeight: 500,
            color: '#A78BFA', textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#C4B5FD'}
          onMouseLeave={e => e.currentTarget.style.color = '#A78BFA'}
        >
          info@fluxoapp.es
        </a>
      </div>
    </footer>
  )
}
