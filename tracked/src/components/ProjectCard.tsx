import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Project } from '../data/site'
import { HudCorners } from './HudCorners'
import styles from './ProjectCard.module.css'

type Props = {
  project: Project
  onOpenSpecs?: (project: Project) => void
}

export function ProjectCard({ project, onOpenSpecs }: Props) {
  const [inspecting, setInspecting] = useState(false)

  const archive = project.archiveStatus || {
    code: 'SYS_STREAM // ACTIVE',
    notice: 'SYSTEM UPDATE & BENCHMARK EVALUATION IN PROGRESS.',
    syncProgress: 'SYNC TELEMETRY ACTIVE',
  }

  const handleCardClick = () => {
    if (project.technicalOverview && onOpenSpecs) {
      onOpenSpecs(project)
    } else {
      setInspecting((prev) => !prev)
    }
  }

  return (
    <article
      className={`panel ${styles.card} ${project.featured ? styles.featuredCard : ''}`}
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handleCardClick()
        }
      }}
      aria-label={`Project: ${project.title}. ${project.technicalOverview ? 'Click to inspect full technical specification.' : 'Click to toggle archive diagnostics.'}`}
    >
      <HudCorners />
      <div className={styles.accent} />

      <div className={styles.header}>
        <span className={styles.code}>{project.code}</span>
        <span className={styles.categoryBadge}>{project.category}</span>
        <span className={styles.status}>{project.status}</span>
      </div>

      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.desc}>{project.description}</p>

      <ul className={styles.tech}>
        {project.technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      {/* Featured Technical Spec highlight bar */}
      {project.technicalOverview && (
        <div className={styles.specHighlight}>
          <span className={styles.specKicker}>ACADEMIC & TECHNICAL SPECIFICATION:</span>
          <p className={styles.specPreview}>
            Problem Analysis &bull; Architecture Breakdown &bull; Individual Contribution
          </p>
        </div>
      )}

      <div className={styles.links} onClick={(e) => e.stopPropagation()}>
        {project.technicalOverview && onOpenSpecs ? (
          <button
            type="button"
            className={styles.specBtn}
            onClick={() => onOpenSpecs(project)}
          >
            <span className={styles.specBtnIcon}>&bull;</span> Inspect System Specs &rarr;
          </button>
        ) : null}

        <div className={styles.externalLinks}>
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className={styles.actionBtn}
              aria-label={`Open live demo for ${project.title}`}
            >
              <span className={styles.indicator}>[LIVE]</span> Demo
            </a>
          ) : null}
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className={styles.actionBtn}
              aria-label={`GitHub repository for ${project.title}`}
            >
              <span className={styles.indicator}>[CODE]</span> GitHub
            </a>
          ) : (
            project.technicalOverview && (
              <span className={styles.pendingRepoTag} title="Repository address pending owner verification">
                Repo Pending
              </span>
            )
          )}
        </div>

        {!project.technicalOverview && (
          <button
            type="button"
            className={styles.diagTrigger}
            onClick={(e) => {
              e.stopPropagation()
              setInspecting((prev) => !prev)
            }}
          >
            {inspecting ? '[HIDE DIAGNOSTIC]' : '[SYSTEM UPDATE STATUS]'}
          </button>
        )}
      </div>

      {/* Blurred-out Tactical WIP / System Update overlay for initiatives without full specs */}
      <AnimatePresence>
        {inspecting && !project.technicalOverview && (
          <motion.div
            className={styles.archiveOverlay}
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(8px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.25 }}
            onClick={(e) => {
              e.stopPropagation()
              setInspecting(false)
            }}
          >
            <div className={styles.archiveDialog}>
              <div className={styles.diagHeader}>
                <span className={styles.diagPulse} />
                <span className={styles.diagCode}>{archive.code}</span>
                <span className={styles.diagClose}>[ESC / CLICK TO RETURN]</span>
              </div>
              <p className={styles.accessLabel}>ACCESSING ARCHIVE // SYSTEM UPDATE</p>
              <div className={styles.noticeBox}>
                <p className={styles.noticeText}>
                  {archive.notice}
                </p>
              </div>
              <div className={styles.syncRow}>
                <span className={styles.syncKey}>STATUS:</span>
                <span className={styles.syncVal}>{archive.syncProgress}</span>
              </div>
              <div className={styles.diagPrompt}>
                WORK IN PROGRESS // ARCHIVED BENCHMARKS COMPILING
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  )
}
