import styles from './Scene.module.css'

export function Scene() {
  return (
    <div className={styles.scene} aria-hidden="true">
      <div className={styles.grid} />
      <div className={styles.vignette} />
      <div className={styles.orb} />
      <svg className={styles.geometry} viewBox="0 0 800 800" fill="none">
        <rect x="120" y="80" width="420" height="280" stroke="#c9b25a" strokeOpacity="0.12" />
        <rect x="280" y="220" width="360" height="320" stroke="#c9b25a" strokeOpacity="0.08" />
        <circle cx="540" cy="200" r="90" stroke="#c9b25a" strokeOpacity="0.1" />
        <path d="M80 620 L220 480 L360 620" stroke="#c9b25a" strokeOpacity="0.12" />
        <line x1="40" y1="40" x2="200" y2="40" stroke="#c9b25a" strokeOpacity="0.2" />
        <line x1="40" y1="40" x2="40" y2="160" stroke="#c9b25a" strokeOpacity="0.2" />
      </svg>
    </div>
  )
}
