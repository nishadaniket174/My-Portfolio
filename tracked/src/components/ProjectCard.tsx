import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Project } from '../data/site'
import { HudCorners } from './HudCorners'
import styles from './ProjectCard.module.css'

type Props = {
  project: Project
}

export function ProjectCard({ project }: Props) {
  const [inspecting, setInspecting] = useState(false)

  const archive = project.archiveStatus || {
    code: 'SYS_STREAM // ACTIVE',
    notice: 'SYSTEM UPDATE & BENCHMARK EVALUATION IN PROGRESS.',
    syncProgress: 'SYNC TELEMETRY ACTIVE',
  }

  return (
    <article
      className={`panel ${styles.card}`}
      onClick={() => setInspecting((prev) => !prev)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          setInspecting((prev) => !prev)
        }
      }}
      aria-label={`Project: ${project.title}. Click to toggle archive diagnostics.`}
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

      <div className={styles.links} onClick={(e) => e.stopPropagation()}>
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className={styles.actionBtn}
          >
            <span className={styles.indicator}>[CODE]</span> Repository &rarr;
          </a>
        ) : null}
        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className={styles.actionBtn}
          >
            <span className={styles.indicator}>[LIVE]</span> Demo &rarr;
          </a>
        ) : null}
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
      </div>

      {/* Blurred-out Tactical WIP / System Update overlay */}
      <AnimatePresence>
        {inspecting && (
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
