import { motion } from 'framer-motion'
import { exploring } from '../data/site'
import styles from './Journey.module.css'

export function Journey() {
  return (
    <section id="journey" className="section">
      <div className="section-inner">
        <motion.p
          className="section-kicker"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          03 // Path
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Currently <span>exploring</span>
        </motion.h2>
        <ol className={styles.list}>
          {exploring.map((item, index) => (
            <motion.li
              key={item.label}
              className={styles.item}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ x: 6 }}
            >
              <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{item.label}</h3>
                <p>{item.detail}</p>
              </div>
              <span className={styles.tag}>Learning goal</span>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
