import { motion } from 'framer-motion'
import { openSourceContributions, repositoryInfo } from '../data/site'
import { HudCorners } from './HudCorners'
import styles from './Contributions.module.css'

export function Contributions() {
  return (
    <section id="contributions" className="section" aria-label="Open-Source Contributions">
      <div className="section-inner">
        <motion.p
          className="section-kicker"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          03 // Open-Source Contributions
        </motion.p>

        <div className={styles.sectionHeader}>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Open-Source <span>Contributions</span>
          </motion.h2>

          <motion.aside
            className={styles.repoMeta}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            aria-label="Target repository details"
          >
            <div className={styles.repoStatus}>
              <span className={styles.pulseDot} aria-hidden="true" />
              <span className={styles.repoLabel}>TARGET REPOSITORY:</span>
            </div>
            <a
              href={repositoryInfo.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.repoLink}
              aria-label="Visit S-AI-Projects / TheAlgorithms-JavaScript on GitHub (opens in new tab)"
            >
              {repositoryInfo.name} &rarr;
            </a>
          </motion.aside>
        </div>

        <motion.div
          className={styles.subtextPanel}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className={styles.introSummary}>
            Submitted pull requests to the open-source algorithm repository, focusing on regression testing, mathematical validation, and edge-case handling.
          </p>
          <span className={styles.counterBadge}>
            [ {openSourceContributions.length} CONTRIBUTIONS SUBMITTED ]
          </span>
        </motion.div>

        <div className={styles.grid}>
          {openSourceContributions.map((item, index) => (
            <motion.article
              key={item.id}
              className={`panel ${styles.card}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (index % 4) * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <HudCorners />
              <div className={styles.cardAccent} aria-hidden="true" />

              <header className={styles.cardHeader}>
                <div className={styles.badgeGroup}>
                  <span className={styles.indexTag}>
                    #{String(index + 1).padStart(2, '0')}
                  </span>
                  <span className={styles.taskBadge}>{item.task}</span>
                </div>
                <span className={styles.statusBadge}>PR SUBMITTED</span>
              </header>

              <h3 className={styles.title}>{item.title}</h3>

              <div className={styles.bodySection}>
                <div className={styles.block}>
                  <span className={styles.blockLabel}>CODE MODIFICATIONS</span>
                  <p className={styles.blockContent}>{item.modifications}</p>
                </div>

                <div className={styles.block}>
                  <span className={styles.blockLabel}>TECHNICAL RATIONALE</span>
                  <p className={styles.blockContent}>{item.rationale}</p>
                </div>
              </div>

              <footer className={styles.cardFooter}>
                <div className={styles.links}>
                  <a
                    href={item.prUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.actionBtn}
                    aria-label={`View Pull Request #${item.prNumber} for ${item.title} on GitHub (opens in new tab)`}
                  >
                    <span className={styles.actionIcon} aria-hidden="true">[PR]</span>
                    <span>PR #{item.prNumber}</span>
                  </a>
                  <a
                    href={item.issueUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.actionBtn} ${styles.issueBtn}`}
                    aria-label={`View Issue #${item.issueNumber} for ${item.title} on GitHub (opens in new tab)`}
                  >
                    <span className={styles.actionIcon} aria-hidden="true">[ISSUE]</span>
                    <span>Issue #{item.issueNumber}</span>
                  </a>
                </div>
              </footer>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
