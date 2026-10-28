import { useEffect, useRef, useState } from 'react'
import { Monogram } from './Monogram'
import styles from './Loader.module.css'

type Props = {
  onComplete: () => void
}

export function Loader({ onComplete }: Props) {
  const [progress, setProgress] = useState(0)
  const completeRef = useRef(onComplete)
  completeRef.current = onComplete

  useEffect(() => {
    const started = performance.now()
    const duration = 1600
    let frame = 0
    let closeTimer = 0

    const tick = (now: number) => {
      const next = Math.min(100, ((now - started) / duration) * 100)
      setProgress(next)
      if (next < 100) {
        frame = requestAnimationFrame(tick)
      } else {
        closeTimer = window.setTimeout(() => completeRef.current(), 280)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(frame)
      window.clearTimeout(closeTimer)
    }
  }, [])

  return (
    <div className={styles.overlay} role="dialog" aria-label="Initializing interface" aria-busy="true">
      <div className={styles.inner}>
        <Monogram size="lg" />
        <p className={styles.status}>Initializing interface...</p>
        <div className={styles.track} aria-hidden="true">
          <div className={styles.fill} style={{ width: `${progress}%` }} />
        </div>
        <p className={styles.percent}>{String(Math.round(progress)).padStart(3, '0')}%</p>
        <button type="button" className={styles.skip} onClick={onComplete}>
          Skip
        </button>
      </div>
    </div>
  )
}
