import { projects } from '../data/site'
import { ProjectCard } from './ProjectCard'
import styles from './Projects.module.css'

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <p className="section-kicker">04 // Archive</p>
        <h2 className="section-title">
          Initiatives <span>// Academic & Research</span>
        </h2>
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
