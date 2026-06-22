const BRAND = '#6C3FC7'

function GearIcon({ size }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={BRAND}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.92c.04-.36.07-.72.07-1.08s-.03-.73-.07-1.08l2.32-1.82c.21-.16.27-.46.13-.7l-2.2-3.81c-.13-.25-.42-.33-.67-.25l-2.74 1.1c-.57-.44-1.18-.8-1.85-1.07L14.16 1.5c-.04-.27-.28-.5-.57-.5h-4.4c-.29 0-.53.23-.57.5L8.28 4.07C7.61 4.34 7 4.7 6.43 5.14L3.69 4.04c-.25-.09-.54 0-.67.25L.82 8.1c-.14.24-.08.54.13.7l2.32 1.82C3.03 11.27 3 11.63 3 12s.03.73.07 1.08L.75 14.9c-.21.16-.27.46-.13.7l2.2 3.81c.13.25.42.33.67.25l2.74-1.1c.57.44 1.18.8 1.85 1.07l.34 2.57c.04.27.28.5.57.5h4.4c.29 0 .53-.23.57-.5l.34-2.57c.67-.27 1.28-.63 1.85-1.07l2.74 1.1c.25.09.54 0 .67-.25l2.2-3.81c.14-.24.08-.54-.13-.7l-2.32-1.82z" />
    </svg>
  )
}

export default function Logo({ size = 'md', light = false }) {
  const configs = {
    sm: { fontSize: 18, gear: 18 },
    md: { fontSize: 24, gear: 24 },
    lg: { fontSize: 48, gear: 44 },
  }
  const c = configs[size]
  const color = light ? '#ffffff' : BRAND

  return (
    <span
      className="inline-flex items-center select-none"
      style={{ gap: 4 }}
    >
      <span
        style={{
          fontWeight: 500,
          fontSize: c.fontSize,
          color,
          lineHeight: 1,
          fontFamily: 'Inter, system-ui, sans-serif',
        }}
      >
        flux
      </span>
      <GearIcon size={c.gear} style={{ color }} />
      <span
        style={{
          fontWeight: 500,
          fontSize: c.fontSize,
          color,
          lineHeight: 1,
          fontFamily: 'Inter, system-ui, sans-serif',
        }}
      >
        app
      </span>
    </span>
  )
}
