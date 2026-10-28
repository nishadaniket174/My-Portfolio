import styles from './Monogram.module.css'

type Props = {
  size?: 'sm' | 'lg'
}

export function Monogram({ size = 'sm' }: Props) {
  return (
    <svg
      className={size === 'lg' ? styles.lg : styles.sm}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="6" y="6" width="108" height="108" stroke="#c9b25a" strokeWidth="1" />
      <path d="M6 6h18M6 6v18M114 6h-18M114 6v18M6 114h18M6 114v-18M114 114h-18M114 114v-18" stroke="#c9b25a" strokeWidth="2" />
      <path d="M28 86L48 34h8l20 52h-9l-4-12H41l-4 12h-9zm16-20h16l-8-24-8 24z" fill="#ece8dc" />
      <path d="M78 34h9v20.5l17-20.5h11L94 58l22 28H105L87 64.5V86h-9V34z" fill="#ece8dc" />
      <line x1="20" y1="100" x2="100" y2="100" stroke="#c9b25a" strokeOpacity="0.45" />
    </svg>
  )
}
