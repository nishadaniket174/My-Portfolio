import { exploring } from '../data/site'
import styles from './Journey.module.css'

export function Journey() {
  return (
    <section id="journey" className="section">
      <div className="section-inner">
        <p className="section-kicker">03 // Path</p>
        <h2 className="section-title">
          Currently <span>exploring</span>
        </h2>
        <ol className={styles.list}>
          {exploring.map((item, index) => (
            <li key={item.label} className={styles.item}>
              <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{item.label}</h3>
                <p>{item.detail}</p>
              </div>
              <span className={styles.tag}>Learning goal</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
