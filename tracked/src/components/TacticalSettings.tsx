import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSystemSettings, type FontSizeScale } from '../context/SystemSettingsContext'
import styles from './TacticalSettings.module.css'

export function TacticalSettings() {
  const { theme, fontSize, setTheme, setFontSize } = useSystemSettings()
  const [isOpen, setIsOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const fontOptions: { scale: FontSizeScale; label: string; badge: string }[] = [
    { scale: 'sm', label: 'COMPACT', badge: '88%' },
    { scale: 'md', label: 'STANDARD', badge: '100%' },
    { scale: 'lg', label: 'LARGE', badge: '115%' },
    { scale: 'max', label: 'A11Y-MAX', badge: '130%' },
  ]

  return (
    <div className={styles.container} ref={panelRef}>
      <motion.button
        type="button"
        className={styles.settingsTrigger}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle Tactical System Settings"
        aria-expanded={isOpen}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className={styles.radarDot} />
        <span className={styles.triggerText}>SYS_CONFIG</span>
        <span className={styles.triggerStatus}>
          [{theme === 'tactical-night' ? 'NIGHT' : 'HI-VIS'}]
        </span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.panel}
            initial={{ opacity: 0, y: 10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.2 }}
          >
            <div className={styles.panelHeader}>
              <span className={styles.panelTitle}>COMMAND // SYSTEM CONFIG</span>
              <button
                type="button"
                className={styles.closeBtn}
                onClick={() => setIsOpen(false)}
                aria-label="Close settings"
              >
                [X]
              </button>
            </div>

            {/* Theme Toggle Module */}
            <div className={styles.section}>
              <div className={styles.labelRow}>
                <span className={styles.label}>VISUAL PROTOCOL</span>
                <span className={styles.statusActive}>
                  {theme === 'tactical-night' ? 'TACTICAL NIGHT' : 'HIGH VISIBILITY'}
                </span>
              </div>
              <div className={styles.buttonGroup}>
                <button
                  type="button"
                  className={`${styles.modeBtn} ${theme === 'tactical-night' ? styles.modeActive : ''}`}
                  onClick={() => setTheme('tactical-night')}
                >
                  <span className={styles.modeIcon}>☾</span>
                  <span>TACTICAL NIGHT</span>
                </button>
                <button
                  type="button"
                  className={`${styles.modeBtn} ${theme === 'high-visibility' ? styles.modeActive : ''}`}
                  onClick={() => setTheme('high-visibility')}
                >
                  <span className={styles.modeIcon}>☀</span>
                  <span>HIGH-VISIBILITY</span>
                </button>
              </div>
            </div>

            {/* Font Scale Module */}
            <div className={styles.section}>
              <div className={styles.labelRow}>
                <span className={styles.label}>TYPOGRAPHY SCALE</span>
                <span className={styles.statusActive}>
                  {fontSize.toUpperCase()}
                </span>
              </div>
              <div className={styles.fontGrid}>
                {fontOptions.map((opt) => (
                  <button
                    key={opt.scale}
                    type="button"
                    className={`${styles.fontBtn} ${fontSize === opt.scale ? styles.fontActive : ''}`}
                    onClick={() => setFontSize(opt.scale)}
                  >
                    <span className={styles.fontName}>{opt.label}</span>
                    <span className={styles.fontBadge}>{opt.badge}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.panelFooter}>
              <span className={styles.footerInfo}>TELEMETRY: SYNCHRONIZED</span>
              <span className={styles.footerVersion}>SYS_VER 2.4.0</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
