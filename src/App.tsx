import { useEffect, useState, createContext, useContext } from 'react'
import './App.css'

type Theme = 'dark' | 'light'

const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({
  theme: 'dark',
  toggle: () => { },
})

function useTheme() { return useContext(ThemeContext) }

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-theme') as Theme | null
      if (saved) return saved
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    return 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggle = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))
  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>
}

function ThemeToggleButton() {
  const { theme, toggle } = useTheme()
  return (
    <button
      id="theme-toggle-btn"
      className="theme-toggle"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={toggle}
      title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
    >
      {theme === 'dark' ? (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
        </svg>
      )}
    </button>
  )
}

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

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/rekhakorepu',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rekha-korepu-809b89265/',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:rekhaakorepu@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
        <rect x="2" y="4" width="20" height="16" rx="2" />
      </svg>
    ),
  },
]

const ROLES = [
  'A Full-Stack Developer',
  'A Problem Solver',
  'An AI/ML Enthusiast'
]

function useTypewriter(words: string[], speed = 75, pause = 1800) {
  const [displayed, setDisplayed] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIdx]
    let t: ReturnType<typeof setTimeout>
    if (!deleting && charIdx < word.length) {
      t = setTimeout(() => setCharIdx(c => c + 1), speed)
    } else if (!deleting && charIdx === word.length) {
      t = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIdx > 0) {
      t = setTimeout(() => setCharIdx(c => c - 1), speed / 2)
    } else {
      setDeleting(false)
      setWordIdx(i => (i + 1) % words.length)
    }
    setDisplayed(word.slice(0, charIdx))
    return () => clearTimeout(t)
  }, [charIdx, deleting, wordIdx, words, speed, pause])

  return displayed
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const onScroll = () => {
      const sections = NAV_LINKS.map(l => l.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (href: string) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header className="navbar" role="banner">
        <div className="navbar-pill glass">
          <a
            href="#hero"
            className="navbar-logo"
            onClick={e => { e.preventDefault(); go('#hero') }}
          >
            <span className="navbar-logo-badge" aria-hidden="true">R</span>
            <span className="navbar-logo-text">
              Rekha<span>.dev</span>
            </span>
          </a>

          <ul className="navbar-links" role="list">
            {NAV_LINKS.map(link => (
              <li key={link.label}>
                <button
                  id={`nav-${link.label}`}
                  className={`navbar-link${activeSection === link.href.replace('#', '') ? ' active' : ''}`}
                  onClick={() => go(link.href)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="navbar-actions">
            <ThemeToggleButton />

            <a
              id="nav-talk-btn"
              href="#contact"
              className="btn-talk"
              onClick={e => { e.preventDefault(); go('#contact') }}
            >
              Let&apos;s talk
            </a>

            <button
              id="mobile-menu-toggle"
              className="menu-toggle"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileOpen(o => !o)}
            >
              {mobileOpen ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <line x1="3" y1="7" x2="10" y2="7" />
                  <line x1="3" y1="12" x2="14" y2="12" />
                  <line x1="3" y1="17" x2="18" y2="17" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <nav className={`mobile-nav${mobileOpen ? ' open' : ''}`} aria-label="Mobile navigation">
        {NAV_LINKS.map(link => (
          <button
            key={link.label}
            id={`mobile-nav-${link.label}`}
            className={`mobile-nav-link${activeSection === link.href.replace('#', '') ? ' active' : ''}`}
            onClick={() => go(link.href)}
          >
            {link.label}
          </button>
        ))}
        <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.625rem' }}>
          {SOCIAL_LINKS.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              className="social-btn" aria-label={s.label}>
              {s.icon}
            </a>
          ))}
        </div>
      </nav>
    </>
  )
}

function HeroSection() {
  const role = useTypewriter(ROLES)

  return (
    <section id="hero" className="hero">
      <div className="hero-blobs" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      <div className="container">
        <div className="hero-inner">

          <div className="hero-text">

            <p className="hero-intro">Hello, I&apos;m</p>

            <h1 className="h1 hero-name gradient-text">
              Rekha Korepu
            </h1>

            <div className="hero-typewriter">
              <p className="hero-role">
                <span className="typed-word">{role}</span>
                <span className="cursor-blink" aria-hidden="true" />
              </p>
            </div>

            <p className="hero-bio">
              Driven by curiosity and a love for problem-solving, I transform ideas
              into reliable software, building products that solve real-world
              challenges and create meaningful experiences through technology.
            </p>

            <div className="hero-actions">
              <a
                id="hero-primary-btn"
                href="/resume.pdf"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                Resume
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </a>

              <div className="hero-divider" aria-hidden="true" />

              <div className="hero-socials" role="list" aria-label="Social links">
                {SOCIAL_LINKS.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    aria-label={s.label}
                    role="listitem"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll</span>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <div className="grid-bg" aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true" />

      <ScrollProgress />

      <Navbar />

      <main>
        <HeroSection />

        <section id="about" style={{ minHeight: '60px' }} />
        <section id="experience" style={{ minHeight: '60px' }} />
        <section id="skills" style={{ minHeight: '60px' }} />
        <section id="projects" style={{ minHeight: '60px' }} />
        <section id="contact" style={{ minHeight: '60px' }} />
      </main>
    </ThemeProvider>
  )
}
