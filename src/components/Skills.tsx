import { skillCategories } from '../data/site'
import { HudCorners } from './HudCorners'
import styles from './Skills.module.css'

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <p className="section-kicker">02 // Capabilities</p>
        <h2 className="section-title">
          Tech stack <span>// Specialization</span>
        </h2>
        <div className={styles.categoryGrid}>
          {skillCategories.map((cat) => (
            <article key={cat.category} className={`panel ${styles.categoryPanel}`}>
              <HudCorners />
              <div className={styles.accent} />
              <header className={styles.categoryHeader}>
                <span className={styles.badge}>{cat.status}</span>
                <h3 className={styles.categoryTitle}>{cat.category}</h3>
              </header>
              <div className={styles.itemList}>
                {cat.items.map((item) => (
                  <div key={item.name} className={styles.itemCard}>
                    <div className={styles.itemTop}>
                      <span className={styles.itemName}>{item.name}</span>
                      <span className={styles.itemFocus}>{item.focus}</span>
                    </div>
                    <p className={styles.itemDetails}>{item.details}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
