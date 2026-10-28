import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
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

export default function App() {
  const [booting, setBooting] = useState(shouldBoot)

  return (
    <>
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
        <Hero />
        <About />
        <Skills />
        <Journey />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
