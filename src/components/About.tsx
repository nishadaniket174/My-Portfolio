import { profile } from '../data/site'
import { HudCorners } from './HudCorners'
import styles from './About.module.css'

const facts = [
  { label: 'Name', value: profile.fullName },
  { label: 'Age', value: `${profile.age} years old` },
  { label: 'Program', value: profile.education },
  { label: 'Focus', value: profile.specialization },
  { label: 'College', value: profile.college },
  { label: 'Stage', value: profile.stage },
]

export function About() {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <p className="section-kicker">01 // Profile</p>
        <h2 className="section-title">
          About <span>Me</span>
        </h2>
        <div className={styles.grid}>
          <article className={`panel ${styles.bio}`}>
            <HudCorners />
            <p className="meta">Personal profile</p>
            <div className={styles.copy}>
              {profile.about.split('\n\n').map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>
          </article>
          <dl className={styles.facts}>
            {facts.map((fact) => (
              <div key={fact.label} className={styles.fact}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
