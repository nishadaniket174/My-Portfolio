import { motion } from 'framer-motion'
import { proofOfWork, skillCategories } from '../data/site'
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
          Skills
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

        {/* Proof of Work Area */}
        <motion.div
          className={styles.powSection}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className={styles.powHeader}>
            <span className={styles.powKicker}>VERIFIED_IMPLEMENTATION // EVIDENCE</span>
            <h3 className={styles.powTitle}>Proof of Work</h3>
          </div>
          <div className={styles.powGrid}>
            {proofOfWork.map((project) => (
              <article key={project.id} className={`panel ${styles.powCard}`}>
                <HudCorners />
                <div className={styles.powCardHeader}>
                  <span className={styles.badge}>{project.badge}</span>
                  <h4 className={styles.powProjectTitle}>{project.title}</h4>
                </div>
                <p className={styles.powDescription}>{project.description}</p>
                <div className={styles.powTags}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.powTag}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={styles.powActions}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn btn-ghost ${styles.powLinkBtn}`}
                    aria-label={`GitHub Repository for ${project.title}`}
                  >
                    GitHub Repository ↗
                  </a>
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn btn-primary ${styles.powLinkBtn}`}
                    aria-label={`Live Demo for ${project.title}`}
                  >
                    Live Demo ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
