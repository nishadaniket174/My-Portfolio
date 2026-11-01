import { motion } from 'framer-motion'
import { contact } from '../data/site'
import { HudCorners } from './HudCorners'
import styles from './Contact.module.css'

const items = [contact.github, contact.linkedin, contact.email]

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section-inner">
        <motion.p
          className="section-kicker"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          05 // Signal
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Let&apos;s <span>connect</span>
        </motion.h2>
        <div className={styles.grid}>
          {items.map((item, idx) => (
            <motion.article
              key={item.label}
              className={`panel ${styles.card}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ y: -4, scale: 1.015 }}
            >
              <HudCorners />
              <p className="meta">{item.href ? 'Available' : 'Pending'}</p>
              <h3>{item.label}</h3>
              {item.href ? (
                <a href={item.href} target={item.href.startsWith('mailto:') ? undefined : '_blank'} rel="noreferrer">
                  Open {item.label} &rarr;
                </a>
              ) : (
                <p className={styles.pending}>{item.pendingLabel}</p>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
