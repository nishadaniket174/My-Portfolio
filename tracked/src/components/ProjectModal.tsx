import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Project } from '../data/site'
import { HudCorners } from './HudCorners'
import styles from './ProjectModal.module.css'

type Props = {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (project) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  if (!project || !project.technicalOverview) return null

  const { technicalOverview } = project

  return (
    <AnimatePresence>
      <motion.div
        className={styles.backdrop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <motion.div
          className={`panel ${styles.modalPanel}`}
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
        >
          <HudCorners />
          <div className={styles.accent} />

          {/* Header */}
          <div className={styles.modalHeader}>
            <div className={styles.headerLeft}>
              <div className={styles.metaRow}>
                <span className={styles.code}>{project.code}</span>
                <span className={styles.statusBadge}>{project.status}</span>
                <span className={styles.categoryBadge}>{project.category}</span>
              </div>
              <h2 id="project-modal-title" className={styles.title}>
                {project.title}
              </h2>
            </div>
            <button
              type="button"
              className={styles.closeBtn}
              onClick={onClose}
              aria-label="Close project specifications"
            >
              [ ESC // CLOSE ]
            </button>
          </div>

          <div className={styles.modalContent}>
            {/* Quick action bar */}
            <div className={styles.actionBar}>
              <div className={styles.actionLinks}>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <span>[LIVE]</span> Launch Application &rarr;
                  </a>
                )}
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                  >
                    <span>[CODE]</span> GitHub Repository &rarr;
                  </a>
                ) : (
                  <span className={styles.pendingRepoBadge}>
                    [CODE] Repository Address Pending Verification
                  </span>
                )}
              </div>
              <div className={styles.stageIndicator}>
                <span className={styles.stageLabel}>STATUS:</span>
                <span className={styles.stageValue}>{technicalOverview.currentStage}</span>
              </div>
            </div>

            {/* Section 1: Problem Statement & Audience */}
            <div className={styles.sectionBlock}>
              <div className={styles.sectionTitleRow}>
                <span className={styles.sectionIndex}>01</span>
                <h3 className={styles.sectionHeading}>Problem Statement & Context</h3>
              </div>
              <p className={styles.problemText}>{technicalOverview.problemStatement}</p>
              <div className={styles.audienceCallout}>
                <span className={styles.calloutLabel}>TARGET AUDIENCE & STAKEHOLDERS:</span>
                <p className={styles.calloutText}>{technicalOverview.targetAudience}</p>
              </div>
            </div>

            {/* Section 2: Proposed Solution */}
            <div className={styles.sectionBlock}>
              <div className={styles.sectionTitleRow}>
                <span className={styles.sectionIndex}>02</span>
                <h3 className={styles.sectionHeading}>Proposed Solution</h3>
              </div>
              <p className={styles.solutionText}>{technicalOverview.solutionSummary}</p>
            </div>

            {/* Section 3: Solution Architecture */}
            <div className={styles.sectionBlock}>
              <div className={styles.sectionTitleRow}>
                <span className={styles.sectionIndex}>03</span>
                <h3 className={styles.sectionHeading}>Solution Architecture & System Layers</h3>
              </div>
              <div className={styles.layersGrid}>
                {technicalOverview.architecture.layers.map((layer, idx) => (
                  <div key={layer.name} className={styles.layerCard}>
                    <div className={styles.layerHeader}>
                      <span className={styles.layerIdx}>L{idx + 1}</span>
                      <h4 className={styles.layerName}>{layer.name}</h4>
                    </div>
                    <p className={styles.layerDetails}>{layer.details}</p>
                  </div>
                ))}
              </div>
              <div className={styles.workflowBox}>
                <span className={styles.workflowLabel}>EXECUTION LIFECYCLE WORKFLOW:</span>
                <p className={styles.workflowText}>{technicalOverview.architecture.workflow}</p>
              </div>
            </div>

            {/* Section 4: Technology Stack & Engineering Rationale */}
            <div className={styles.sectionBlock}>
              <div className={styles.sectionTitleRow}>
                <span className={styles.sectionIndex}>04</span>
                <h3 className={styles.sectionHeading}>Technology Stack & Engineering Rationales</h3>
              </div>
              <div className={styles.techTable}>
                {technicalOverview.techStackDetails.map((tech) => (
                  <div key={tech.name} className={styles.techRow}>
                    <div className={styles.techColName}>
                      <span className={styles.techItemName}>{tech.name}</span>
                      <span className={styles.techItemRole}>{tech.role}</span>
                    </div>
                    <div className={styles.techColPurpose}>
                      <p className={styles.techItemPurpose}>{tech.purpose}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 5: Individual Contribution & Verification */}
            <div className={styles.sectionBlock}>
              <div className={styles.sectionTitleRow}>
                <span className={styles.sectionIndex}>05</span>
                <h3 className={styles.sectionHeading}>Individual Contribution & Tooling Transparency</h3>
              </div>
              <div className={styles.contributionBox}>
                <p className={styles.contributionSummary}>
                  {technicalOverview.individualContribution.summary}
                </p>
                <div className={styles.tasksList}>
                  <span className={styles.tasksLabel}>PRIMARY RESPONSIBILITIES & VERIFIED WORK:</span>
                  <ul>
                    {technicalOverview.individualContribution.keyTasks.map((task) => (
                      <li key={task}>{task}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.aiDisclosure}>
                  <span className={styles.aiLabel}>TOOLING & METHODOLOGY:</span>
                  <p className={styles.aiText}>
                    {technicalOverview.individualContribution.aiToolsUsed}
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6: Planned Features & Evolution */}
            {technicalOverview.plannedFeatures && technicalOverview.plannedFeatures.length > 0 && (
              <div className={styles.sectionBlock}>
                <div className={styles.sectionTitleRow}>
                  <span className={styles.sectionIndex}>06</span>
                  <h3 className={styles.sectionHeading}>Roadmap & Planned Capabilities</h3>
                </div>
                <ul className={styles.plannedList}>
                  {technicalOverview.plannedFeatures.map((feat) => (
                    <li key={feat}>
                      <span className={styles.planMarker}>[PLANNED]</span> {feat}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className={styles.modalFooter}>
            <span className={styles.footerInfo}>SYSTEM // FACULTY & RECRUITER TECHNICAL DOSSIER</span>
            <button type="button" className={styles.footerCloseBtn} onClick={onClose}>
              Back to Portfolio &uarr;
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
