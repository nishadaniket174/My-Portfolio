import { useState } from 'react'
import { AnimatePresence, motion, type Variants } from 'framer-motion'
import { SystemSettingsProvider } from './context/SystemSettingsContext'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Journey } from './components/Journey'
import { Loader } from './components/Loader'
import { Projects } from './components/Projects'
import { Scene } from './components/Scene'
import { Skills } from './components/Skills'

function shouldBoot() {
  if (typeof window === 'undefined') return false
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
  return sessionStorage.getItem('ak-interface-ready') !== '1'
}

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export default function App() {
  const [booting, setBooting] = useState(shouldBoot)

  return (
    <SystemSettingsProvider>
      <a className="skip-link" href="#home">
        Skip to content
      </a>
      <AnimatePresence>
        {booting && (
          <Loader
            onComplete={() => {
              sessionStorage.setItem('ak-interface-ready', '1')
              setBooting(false)
            }}
          />
        )}
      </AnimatePresence>
      <div className="grain" aria-hidden="true" />
      <div className="scanlines" aria-hidden="true" />
      <Scene />
      <Header />
      <main className="site-main">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={sectionVariants}
        >
          <Hero />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={sectionVariants}
        >
          <About />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={sectionVariants}
        >
          <Skills />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={sectionVariants}
        >
          <Journey />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={sectionVariants}
        >
          <Projects />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={sectionVariants}
        >
          <Contact />
        </motion.div>
      </main>
      <Footer />
    </SystemSettingsProvider>
  )
}
