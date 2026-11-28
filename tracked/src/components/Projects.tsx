import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects, type Project } from '../data/site'
import { ProjectCard } from './ProjectCard'
import { ProjectModal } from './ProjectModal'
import styles from './Projects.module.css'

type FilterCategory = 'ALL' | 'Systems & Applications' | 'Python'

const CATEGORIES: FilterCategory[] = [
  'ALL',
  'Systems & Applications',
  'Python',
]

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('ALL')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects =
    activeFilter === 'ALL'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="section" aria-label="Technical Projects and Initiatives">
      <div className="section-inner">
        <motion.p
          className="section-kicker"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          04 // Technical Projects & Architecture
        </motion.p>

        <div className={styles.sectionHeader}>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Engineering <span>// Projects & Systems</span>
          </motion.h2>

          <motion.p
            className={styles.sectionSubtext}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Full-stack student software and AI engineering applications. Click any featured card or select &ldquo;Inspect System Specs&rdquo; to review real-world problem statements, solution architectures, technology stack rationales, and verified individual contributions.
          </motion.p>
        </div>

        {/* Tactical Filter Tabs */}
        <div className={styles.filterRow}>
          <span className={styles.filterLabel}>FILTER MATRIX:</span>
          <div className={styles.tabs}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`${styles.tabBtn} ${activeFilter === cat ? styles.activeTab : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {activeFilter === cat && <span className={styles.tabMarker}>[+]</span>}
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id || project.title}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              layout
            >
              <ProjectCard
                project={project}
                onOpenSpecs={(p) => setSelectedProject(p)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Accessible In-Depth Technical Specification Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
