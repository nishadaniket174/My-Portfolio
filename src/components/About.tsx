import { motion } from 'framer-motion'
import { profile } from '../data/site'
import { HudCorners } from './HudCorners'
import styles from './About.module.css'

const facts = [
  { label: 'Name', value: profile.fullName },
  { label: 'Program', value: profile.education },
  { label: 'Focus', value: profile.specialization },
  { label: 'College', value: profile.college },
  { label: 'Stage', value: profile.stage },
]

export function About() {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <motion.p
          className="section-kicker"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          01 // Profile
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          About <span>Me</span>
        </motion.h2>
        <div className={styles.grid}>
          <motion.article
            className={`panel ${styles.bio}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <HudCorners />
            <p className="meta">Personal profile</p>
            <div className={styles.copy}>
              {profile.about.split('\n\n').map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>
          </motion.article>
          <motion.dl
            className={styles.facts}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {facts.map((fact) => (
              <motion.div
                key={fact.label}
                className={styles.fact}
                whileHover={{ scale: 1.015, x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  )
}
