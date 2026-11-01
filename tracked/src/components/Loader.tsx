import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Monogram } from './Monogram'
import styles from './Loader.module.css'

type Props = {
  onComplete: () => void
}

const BOOT_STAGES = [
  { threshold: 0, text: 'INITIALIZING INTERFACE KERNEL...' },
  { threshold: 22, text: 'ALLOCATING BUFFER // MEMORY CHECK OK' },
  { threshold: 52, text: 'ESTABLISHING SECURE PROTOCOLS // LINK ACTIVE' },
  { threshold: 78, text: 'LOADING IDENTITY MATRIX // ANIKET [DEV]' },
  { threshold: 96, text: 'INTERFACE ONLINE // ALL SUBSYSTEMS NOMINAL' },
]

export function Loader({ onComplete }: Props) {
  const [progress, setProgress] = useState(0)
  const completeRef = useRef(onComplete)
  completeRef.current = onComplete

  useEffect(() => {
    const started = performance.now()
    const duration = 2200
    let frame = 0
    let closeTimer = 0

    const tick = (now: number) => {
      const elapsed = now - started
      const rawPct = Math.min(100, (elapsed / duration) * 100)
      setProgress(rawPct)

      if (rawPct < 100) {
        frame = requestAnimationFrame(tick)
      } else {
        closeTimer = window.setTimeout(() => completeRef.current(), 350)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(frame)
      window.clearTimeout(closeTimer)
    }
  }, [])

  const currentStageText =
    [...BOOT_STAGES].reverse().find((stage) => progress >= stage.threshold)?.text ||
    BOOT_STAGES[0].text

  return (
    <motion.div
      className={styles.overlay}
      role="dialog"
      aria-label="Initializing tactical interface"
      aria-busy="true"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className={styles.inner}>
        <div className={styles.monogramBox}>
          <Monogram size="lg" />
        </div>

        <div className={styles.diagnostics}>
          <span className={styles.diagBadge}>SYS_DIAGNOSTIC</span>
          <AnimatePresence mode="wait">
            <motion.p
              key={currentStageText}
              className={styles.status}
              initial={{ opacity: 0, y: 3 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -3 }}
              transition={{ duration: 0.15 }}
            >
              {currentStageText}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className={styles.track} aria-hidden="true">
          <motion.div
            className={styles.fill}
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className={styles.footerRow}>
          <span className={styles.code}>MODULE: 0xAK_SYS_INIT</span>
          <p className={styles.percent}>{String(Math.round(progress)).padStart(3, '0')}%</p>
        </div>

        <button type="button" className={styles.skip} onClick={onComplete}>
          [ ABORT / SKIP SEQUENCE ]
        </button>
      </div>
    </motion.div>
  )
}
