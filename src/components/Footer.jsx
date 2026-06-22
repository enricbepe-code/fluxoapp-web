export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-10 px-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        {/* Logo */}
        <span className="inline-flex items-center gap-2 select-none">
          <svg
            width="28"
            height="28"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle cx="18" cy="18" r="18" fill="#2470b8" />
            <path d="M18 8 A10 10 0 0 1 28 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <polygon points="28,14 28,22 33,18" fill="white" />
            <path d="M18 28 A10 10 0 0 1 8 18" stroke="#16b882" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <polygon points="8,22 8,14 3,18" fill="#16b882" />
          </svg>
          <span className="text-white font-bold text-lg tracking-tight">Fluxoapp</span>
        </span>

        <p className="text-center">© 2026 Fluxoapp · Rubí, Barcelona</p>

        <a
          href="mailto:info@fluxoapp.es"
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          info@fluxoapp.es
        </a>
      </div>
    </footer>
  )
}
