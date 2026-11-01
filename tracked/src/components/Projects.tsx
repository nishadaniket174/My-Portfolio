import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data/site'
import { ProjectCard } from './ProjectCard'
import styles from './Projects.module.css'

type FilterCategory = 'ALL' | 'Python' | 'System & Artificial Intelligence' | 'Projects'

const CATEGORIES: FilterCategory[] = [
  'ALL',
  'Python',
  'System & Artificial Intelligence',
  'Projects',
]

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('ALL')

  const filteredProjects =
    activeFilter === 'ALL'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <motion.p
          className="section-kicker"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          04 // Archive & Deployments
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Initiatives <span>// Academic & Research</span>
        </motion.h2>

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
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
