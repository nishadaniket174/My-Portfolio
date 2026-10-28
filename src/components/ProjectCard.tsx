import type { Project } from '../data/site'
import { HudCorners } from './HudCorners'
import styles from './ProjectCard.module.css'

type Props = {
  project: Project
}

export function ProjectCard({ project }: Props) {
  return (
    <article className={`panel ${styles.card}`}>
      <HudCorners />
      <div className={styles.accent} />
      <div className={styles.header}>
        <span className={styles.code}>{project.code}</span>
        <span className={styles.status}>{project.status}</span>
      </div>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.desc}>{project.description}</p>
      <ul className={styles.tech}>
        {project.technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <div className={styles.links}>
        {project.github ? (
          <a href={project.github} target="_blank" rel="noreferrer" className={styles.actionBtn}>
            <span className={styles.indicator}>[CODE]</span> Repository &rarr;
          </a>
        ) : null}
        {project.demo ? (
          <a href={project.demo} target="_blank" rel="noreferrer" className={styles.actionBtn}>
            <span className={styles.indicator}>[LIVE]</span> System Demo &rarr;
          </a>
        ) : null}
      </div>
    </article>
  )
}
