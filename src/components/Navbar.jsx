import { useState, useEffect } from 'react'
import Logo from './Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
        background: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(108,63,199,0.1)' : '1px solid transparent',
        boxShadow: scrolled ? '0 1px 3px rgba(0,0,0,0.06)' : 'none',
      }}
    >
      <nav
        style={{
          maxWidth: 1120, margin: '0 auto',
          padding: '0 1.5rem', height: 64,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}
      >
        <a href="#inicio" aria-label="Fluxoapp inicio">
          <Logo size="sm" />
        </a>
        <a
          href="mailto:info@fluxoapp.es"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#6C3FC7', color: '#fff',
            fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 600,
            padding: '8px 20px', borderRadius: 10,
            textDecoration: 'none',
            transition: 'all 0.18s cubic-bezier(0.16,1,0.3,1)',
            boxShadow: '0 2px 8px rgba(108,63,199,0.25)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = '#5330A0'
            e.currentTarget.style.transform = 'translateY(-1px)'
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(108,63,199,0.35)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = '#6C3FC7'
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(108,63,199,0.25)'
          }}
        >
          Contacto
        </a>
      </nav>
    </header>
  )
}
