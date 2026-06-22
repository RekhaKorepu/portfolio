import { useEffect, useRef, useState } from 'react'
import { CERTIFICATIONS_DATA } from '../data/certificationsData'
import './Certifications.css'

export function Certifications() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className={`cert-section${visible ? ' cert-visible' : ''}`}
    >
      <div className="container">
        <div className="cert-header">
          <span className="cert-eyebrow">Professional Credentials</span>
          <h2 className="cert-title">Certifications</h2>
          <div className="cert-title-line" />
        </div>

        <div className="cert-grid">
          {CERTIFICATIONS_DATA.map((cert, idx) => (
            <div
              key={cert.title}
              className="cert-card glass"
              style={{
                animationDelay: `${idx * 0.1}s`,
                // Pass brand color as a custom CSS property
                ['--issuer-color' as any]: cert.themeColor,
              }}
            >
              <div className="cert-content">
                <div className="cert-meta-header">
                  <h3 className="cert-card-title">{cert.title}</h3>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-link-btn"
                    aria-label={`Verify credential for ${cert.title}`}
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>

                {/* Issuer details and verification date */}
                <div className="cert-issuer-box">
                  <div className="cert-issuer-badge">
                    {cert.shortIssuer}
                  </div>
                  <div className="cert-issuer-info">
                    <span className="cert-issuer-name">{cert.issuer}</span>
                    <span className="cert-issuer-date">Issued {cert.date}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="cert-desc">{cert.description}</p>

                {/* Skill Badges */}
                <div className="cert-tags">
                  {cert.tags.map(tag => (
                    <span key={tag} className="cert-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
