import { useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Certifications } from './components/Certifications'
import './App.css'

function ScrollProgress() {
  useEffect(() => {
    const bar = document.getElementById('aurora-progress')
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      const progress = total > 0 ? window.scrollY / total : 0
      if (bar) bar.style.transform = `scaleX(${progress})`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div
      id="aurora-progress"
      style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        height: '3px', background: 'var(--aurora)',
        zIndex: 9999, transformOrigin: '0 50%', transform: 'scaleX(0)',
      }}
      aria-hidden="true"
    />
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <ScrollProgress />
      <Navbar />

      <main>
        <HeroSection />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
      </main>
    </ThemeProvider>
  )
}
