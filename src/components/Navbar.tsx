import { useEffect, useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { NAV_LINKS, SOCIAL_LINKS } from '../data/siteData'
import './Navbar.css'

export function Navbar() {
  const { theme, toggle } = useTheme()
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
          <a href="#hero" className="navbar-logo" onClick={e => { e.preventDefault(); go('#hero') }}>
            <span className="navbar-logo-badge" aria-hidden="true">R</span>
            <span className="navbar-logo-text">
              Rekha<span>.</span>
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
            <button
              id="theme-toggle-btn"
              className="theme-toggle"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              onClick={toggle}
              title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            >
              {theme === 'dark' ? (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                </svg>
              ) : (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
                </svg>
              )}
            </button>

            <a
              id="nav-talk-btn"
              href="mailto:rekhaakorepu@gmail.com"
              className="btn-talk"
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
