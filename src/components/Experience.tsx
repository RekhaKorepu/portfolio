import { useEffect, useRef, useState } from 'react'
import { EXPERIENCE_DATA } from '../data/experienceData'
import './Experience.css'

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [expanded, setExpanded] = useState<number | null>(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const toggle = (idx: number) =>
    setExpanded(prev => (prev === idx ? null : idx))

  return (
    <section
      id="experience"
      ref={sectionRef}
      className={`exp-section${visible ? ' exp-visible' : ''}`}
    >
      <div className="container">
        <div className="exp-header">
          <span className="exp-eyebrow">Career Path</span>
          <h2 className="exp-title">Professional Experience</h2>
          <div className="exp-title-line" />
        </div>

        <div className="exp-list">
          {EXPERIENCE_DATA.map((entry, idx) => {
            const isOpen = expanded === idx

            return (
              <article
                key={idx}
                className={`exp-card${isOpen ? ' exp-card-open' : ''}${idx === 0 ? ' exp-card-featured' : ''}`}
                style={{ animationDelay: `${idx * 0.12}s` }}
              >
                <button
                  className="exp-card-trigger"
                  aria-expanded={isOpen}
                  aria-controls={`exp-panel-${idx}`}
                  id={`exp-trigger-${idx}`}
                  onClick={() => toggle(idx)}
                >
                  <div className="exp-card-left">
                    <div className="exp-card-icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="14" x="2" y="7" rx="2" />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      </svg>
                    </div>

                    <div className="exp-card-info">
                      <div className="exp-card-role-row">
                        <h3 className="exp-role">{entry.role}</h3>
                        {entry.current && (
                          <span className="exp-current-badge">
                            <span className="exp-current-dot" />
                            Current
                          </span>
                        )}
                      </div>
                      <div className="exp-company-row">
                        {entry.companyUrl ? (
                          <a
                            href={entry.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="exp-company-link"
                            onClick={e => e.stopPropagation()}
                          >
                            {entry.company}
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                              <polyline points="15 3 21 3 21 9" />
                              <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                          </a>
                        ) : (
                          <span className="exp-company-name">{entry.company}</span>
                        )}
                        <span className="exp-type-badge">{entry.type}</span>
                      </div>
                    </div>
                  </div>

                  <div className="exp-card-right">
                    <div className="exp-meta">
                      <span className="exp-meta-item">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                          <rect width="18" height="18" x="3" y="4" rx="2" />
                          <path d="M16 2v4M8 2v4M3 10h18" />
                        </svg>
                        {entry.period}
                      </span>
                      <span className="exp-meta-item">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                          <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        {entry.location}
                      </span>
                    </div>

                    <div className={`exp-chevron${isOpen ? ' exp-chevron-open' : ''}`} aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </div>
                  </div>
                </button>

                <div
                  id={`exp-panel-${idx}`}
                  role="region"
                  aria-labelledby={`exp-trigger-${idx}`}
                  className={`exp-panel${isOpen ? ' exp-panel-open' : ''}`}
                >
                  <div className="exp-panel-inner">
                    {entry.projectName && (
                      <div className="exp-project-header" style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.75rem', marginBottom: '1rem' }}>
                        <h4 className="exp-project-title" style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text)' }}>
                          {entry.projectName}
                          {entry.projectSubtitle && <span className="exp-project-subtitle" style={{ fontSize: '0.9rem', fontWeight: 400, color: 'var(--text-muted)' }}> • {entry.projectSubtitle}</span>}
                        </h4>
                        {entry.projectPeriod && (
                          <span className="exp-project-period" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 500, color: 'var(--primary-muted)' }}>
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ marginRight: '4px', verticalAlign: 'middle' }}>
                              <rect width="18" height="18" x="3" y="4" rx="2" />
                              <path d="M16 2v4M8 2v4M3 10h18" />
                            </svg>
                            {entry.projectPeriod}
                          </span>
                        )}
                      </div>
                    )}

                    {entry.description && <p className="exp-description">{entry.description}</p>}

                    {entry.achievements && entry.achievements.length > 0 && (
                      <ul className="exp-achievements">
                        {entry.achievements.map((a, j) => (
                          <li key={j} className="exp-achievement-item">
                            <span className="exp-achievement-marker" aria-hidden="true">▹</span>
                            {a.text}
                          </li>
                        ))}
                      </ul>
                    )}

                    {entry.skills && entry.skills.length > 0 && (
                      <div className="exp-skills">
                        {entry.skills.map((s, k) => (
                          <span key={k} className="exp-skill-tag">{s}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
