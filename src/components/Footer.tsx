import { profile } from '../data/site'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>{profile.brand}</p>
      <p>Cinematic UI for a developer identity.</p>
    </footer>
  )
}
