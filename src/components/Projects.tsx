import { motion } from 'framer-motion'
import { projects } from '../data/site'
import { ProjectCard } from './ProjectCard'
import styles from './Projects.module.css'

export function Projects() {
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
          04 // Archive
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
        <div className={styles.grid}>
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
