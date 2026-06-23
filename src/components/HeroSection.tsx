import { SOCIAL_LINKS, ROLES } from '../data/siteData'
import { useTypewriter } from '../hooks/useTypewriter'
import './HeroSection.css'

export function HeroSection() {
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
