import { contact } from '../data/site'
import { HudCorners } from './HudCorners'
import styles from './Contact.module.css'

const items = [contact.github, contact.linkedin, contact.email]

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section-inner">
        <p className="section-kicker">05 // Signal</p>
        <h2 className="section-title">
          Let&apos;s <span>connect</span>
        </h2>
        <div className={styles.grid}>
          {items.map((item) => (
            <article key={item.label} className={`panel ${styles.card}`}>
              <HudCorners />
              <p className="meta">{item.href ? 'Available' : 'Placeholder'}</p>
              <h3>{item.label}</h3>
              {item.href ? (
                <a href={item.href} target={item.href.startsWith('mailto:') ? undefined : '_blank'} rel="noreferrer">
                  Open {item.label}
                </a>
              ) : (
                <p className={styles.pending}>{item.pendingLabel}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
