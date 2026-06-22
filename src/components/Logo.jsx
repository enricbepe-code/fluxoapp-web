export default function Logo({ size = 'md' }) {
  const sizes = {
    sm: { icon: 28, text: 'text-lg' },
    md: { icon: 36, text: 'text-2xl' },
    lg: { icon: 44, text: 'text-3xl' },
  }
  const s = sizes[size]

  return (
    <span className="inline-flex items-center gap-2 select-none">
      <svg
        width={s.icon}
        height={s.icon}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="18" cy="18" r="18" fill="#1e5a96" />
        {/* Outer arrow (clockwise top arc) */}
        <path
          d="M18 8 A10 10 0 0 1 28 18"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <polygon points="28,14 28,22 33,18" fill="white" />
        {/* Inner arrow (counter-clockwise bottom arc) */}
        <path
          d="M18 28 A10 10 0 0 1 8 18"
          stroke="#16b882"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <polygon points="8,22 8,14 3,18" fill="#16b882" />
      </svg>
      <span className={`font-bold tracking-tight text-slate-900 ${s.text}`}>
        Fluxoapp
      </span>
    </span>
  )
}
