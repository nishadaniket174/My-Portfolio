import { motion } from 'framer-motion'
import { hudLabels, profile } from '../data/site'
import { HudCorners } from './HudCorners'
import { useTypewriter } from '../hooks/useTypewriter'
import styles from './Hero.module.css'

export function Hero() {
  const { displayedText: typedIntro, isDone } = useTypewriter(profile.intro, 20, 400)

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.inner}>
        {/* Floating tactical HUD labels */}
        <motion.ul
          className={styles.metaRow}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {hudLabels.map((item, index) => (
            <motion.li
              key={item.key}
              animate={{
                y: [0, -3, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.4,
              }}
            >
              <span>{item.key}</span>
              {item.value}
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          className={styles.stage}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <HudCorners />
          <p className={styles.role}>{profile.role}</p>

          <h1 className={styles.name}>
            <span className={styles.glitchText} data-text={profile.firstName}>
              {profile.firstName}
            </span>
            <span>{profile.lastName}</span>
          </h1>

          <p className={styles.intro}>
            {typedIntro}
            {!isDone && <span className={styles.cursor}>_</span>}
          </p>

          <div className={styles.actions}>
            <motion.a
              className={`btn btn-primary ${styles.tacticalBtn}`}
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className={styles.scanEffect} aria-hidden="true" />
              Explore my work
            </motion.a>
            <motion.a
              className={`btn btn-ghost ${styles.tacticalBtn}`}
              href="#about"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className={styles.scanEffect} aria-hidden="true" />
              About me
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
