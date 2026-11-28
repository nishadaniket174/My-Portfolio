import { motion } from 'framer-motion'
import { educationData } from '../data/site'
import { HudCorners } from './HudCorners'
import styles from './Education.module.css'

export function Education() {
  const credentials = [
    {
      kicker: 'CAMPUS OF INSTRUCTION',
      label: 'Institution of Study',
      value: educationData.institution,
      sub: `${educationData.location} (Autonomous Learning Campus)`,
    },
    {
      kicker: 'DEGREE CONFERRED BY',
      label: 'Degree-Awarding Body',
      value: educationData.degreeAwardingBody,
      sub: 'Degree-granting university partnership',
    },
    {
      kicker: 'ACADEMIC PROGRAM',
      label: 'Degree & Program',
      value: educationData.degree,
      sub: 'Four-year undergraduate engineering curriculum',
    },
    {
      kicker: 'SPECIALIZATION TRACK',
      label: 'Field of Specialization',
      value: educationData.specialization,
      sub: 'Core focus: Applied ML, Systems & Problem-Solving',
    },
    {
      kicker: 'TIMELINE & STATUS',
      label: 'Current Academic Status',
      value: `${educationData.status} (Graduation: ${educationData.expectedGraduation})`,
      sub: 'Active full-time enrollment',
    },
  ]

  return (
    <section id="education" className="section" aria-label="Education & Achievements">
      <div className="section-inner">
        <motion.p
          className="section-kicker"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          05 // Academic Foundations & Development
        </motion.p>

        <div className={styles.sectionHeader}>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Education <span>&amp; Achievements</span>
          </motion.h2>

          <motion.p
            className={styles.sectionSubtext}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Transparent overview of my undergraduate engineering degree, current institutional affiliation, and ongoing learning objectives.
          </motion.p>
        </div>

        <div className={styles.grid}>
          {/* Primary Academic Card */}
          <motion.article
            className={`panel ${styles.primaryCard}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <HudCorners />
            <div className={styles.cardAccent} aria-hidden="true" />

            <div className={styles.cardHeader}>
              <span className={styles.badge}>ACADEMIC_ENROLLMENT // ACTIVE</span>
              <span className={styles.gradBadge}>BATCH: 2026 &ndash; {educationData.expectedGraduation}</span>
            </div>

            <div className={styles.primaryStatementBox}>
              <span className={styles.statementKicker}>PRIMARY ACADEMIC PROFILE:</span>
              <p className={styles.primaryStatement}>
                &ldquo;{educationData.primaryDescription}&rdquo;
              </p>
            </div>

            <div className={styles.credentialsList}>
              {credentials.map((cred) => (
                <div key={cred.kicker} className={styles.credentialItem}>
                  <div className={styles.credTop}>
                    <span className={styles.credKicker}>{cred.kicker}</span>
                    <span className={styles.credLabel}>{cred.label}</span>
                  </div>
                  <p className={styles.credValue}>{cred.value}</p>
                  <span className={styles.credSub}>{cred.sub}</span>
                </div>
              ))}
            </div>
          </motion.article>

          {/* Current Focus & Development (Restrained Achievements Area) */}
          <motion.article
            className={`panel ${styles.achievementsCard}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <HudCorners />
            <div className={styles.cardAccentAlt} aria-hidden="true" />

            <div className={styles.cardHeader}>
              <span className={styles.badgeAlt}>CURRENT_MILESTONE // STAGE_01</span>
              <span className={styles.statusLabel}>UNDERGRADUATE FOCUS</span>
            </div>

            <div className={styles.focusContent}>
              <h3 className={styles.focusTitle}>Current Growth &amp; Technical Objective</h3>
              <p className={styles.focusStatement}>
                {educationData.focusStatement}
              </p>

              <div className={styles.focusHighlights}>
                <div className={styles.highlightItem}>
                  <span className={styles.highlightDot} aria-hidden="true" />
                  <div>
                    <h4 className={styles.highlightHeading}>Academic Rigor &amp; Theory</h4>
                    <p className={styles.highlightText}>
                      Mastering computational logic, discrete mathematics, and fundamental data structures through university coursework.
                    </p>
                  </div>
                </div>

                <div className={styles.highlightItem}>
                  <span className={styles.highlightDot} aria-hidden="true" />
                  <div>
                    <h4 className={styles.highlightHeading}>Practical Software Projects</h4>
                    <p className={styles.highlightText}>
                      Applying concepts to functional applications (e.g., Weekwise schedule engine and minigit systems engine) alongside studies.
                    </p>
                  </div>
                </div>

                <div className={styles.highlightItem}>
                  <span className={styles.highlightDot} aria-hidden="true" />
                  <div>
                    <h4 className={styles.highlightHeading}>Open-Source Engagement</h4>
                    <p className={styles.highlightText}>
                      Contributing regression test suites, boundary condition coverage, and mathematical validation to established codebases.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.transparencyNote}>
                <span className={styles.noteKicker}>TRANSPARENCY NOTE:</span>
                <p className={styles.noteText}>
                  As a first-year undergraduate, formal hackathon victories, commercial certifications, and external awards are currently in progress rather than completed. All work showcased reflects authentic personal projects and coursework.
                </p>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
