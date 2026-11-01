import { motion } from 'framer-motion'
import { skillCategories } from '../data/site'
import { HudCorners } from './HudCorners'
import styles from './Skills.module.css'

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <motion.p
          className="section-kicker"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          02 // Capabilities
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Tech stack <span>// Specialization</span>
        </motion.h2>
        <div className={styles.categoryGrid}>
          {skillCategories.map((cat, idx) => (
            <motion.article
              key={cat.category}
              className={`panel ${styles.categoryPanel}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
            >
              <HudCorners />
              <div className={styles.accent} />
              <header className={styles.categoryHeader}>
                <span className={styles.badge}>{cat.status}</span>
                <h3 className={styles.categoryTitle}>{cat.category}</h3>
              </header>
              <div className={styles.itemList}>
                {cat.items.map((item) => (
                  <motion.div
                    key={item.name}
                    className={styles.itemCard}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={styles.itemTop}>
                      <span className={styles.itemName}>{item.name}</span>
                      <span className={styles.itemFocus}>{item.focus}</span>
                    </div>
                    <p className={styles.itemDetails}>{item.details}</p>
                  </motion.div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
