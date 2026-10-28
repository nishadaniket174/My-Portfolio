import { hudLabels, profile } from '../data/site'
import { HudCorners } from './HudCorners'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.inner}>
        <ul className={styles.metaRow}>
          {hudLabels.map((item) => (
            <li key={item.key}>
              <span>{item.key}</span>
              {item.value}
            </li>
          ))}
        </ul>
        <div className={styles.stage}>
          <HudCorners />
          <p className={styles.role}>{profile.role}</p>
          <h1 className={styles.name}>
            <span>{profile.firstName}</span>
            <span>{profile.lastName}</span>
          </h1>
          <p className={styles.intro}>{profile.intro}</p>
          <div className={styles.actions}>
            <a className="btn btn-primary" href="#projects">
              Explore my work
            </a>
            <a className="btn btn-ghost" href="#about">
              About me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
