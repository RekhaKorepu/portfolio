import { useEffect, useRef, useState } from 'react'
import { EDUCATION_DATA } from '../data/educationData'
import './Education.css'

export function Education() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [activeIdx, setActiveIdx] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const entry = EDUCATION_DATA[activeIdx]

  return (
    <section id="education" ref={sectionRef} className={`edu-section${visible ? ' edu-visible' : ''}`}>
      <div className="container">

        <div className="edu-header">
          <span className="edu-eyebrow">Academic Background</span>
          <h2 className="edu-title">Education</h2>
          <div className="edu-title-line" />
        </div>

        <div className="edu-layout">
          <div className="edu-tabs" role="tablist">
            {EDUCATION_DATA.map((e, i) => (
              <button
                key={i}
                id={`edu-tab-${i}`}
                role="tab"
                aria-selected={activeIdx === i}
                aria-controls={`edu-panel-${i}`}
                className={`edu-tab${activeIdx === i ? ' edu-tab-active' : ''}`}
                onClick={() => setActiveIdx(i)}
              >
                <span className="edu-tab-degree">{e.degree}</span>
                <span className="edu-tab-inst">{e.institution.split('(')[0].trim()}</span>
                <span className="edu-tab-period">{e.period}</span>
              </button>
            ))}
          </div>

          <div
            id={`edu-panel-${activeIdx}`}
            role="tabpanel"
            aria-labelledby={`edu-tab-${activeIdx}`}
            className="edu-panel"
          >
            <div className="edu-panel-top">
              <div className="edu-panel-icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>

              <div className="edu-panel-meta">
                <h3 className="edu-panel-degree">{entry.degree}</h3>
                <p className="edu-panel-field">{entry.field}</p>
                <p className="edu-panel-inst">
                  {entry.link ? (
                    <a
                      href={entry.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="edu-inst-link"
                    >
                      {entry.institution}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="edu-link-icon"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  ) : (
                    entry.institution
                  )}
                </p>

                <div className="edu-panel-badges">
                  <span className="edu-badge">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {entry.location}
                  </span>

                  <span className="edu-badge">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <rect width="18" height="18" x="3" y="4" rx="2" />
                      <path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                    {entry.period}
                  </span>

                  {entry.grade && (
                    <span className="edu-badge edu-badge-accent">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      {entry.grade}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {entry.highlights && entry.highlights.length > 0 && (
              entry.highlights.length === 1 ? (
                <div className="edu-highlights-single">
                  <p className="edu-highlight-text">{entry.highlights[0]}</p>
                </div>
              ) : (
                <ul className="edu-highlights">
                  {entry.highlights.map((h, j) => (
                    <li key={j} className="edu-highlight-item">
                      <span className="edu-bullet" aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>
              )
            )}

            {entry.courses && entry.courses.length > 0 && (
              <div className="edu-courses-wrap">
                <h4 className="edu-courses-title">Core Academic Courses</h4>
                <div className="edu-courses-grid">
                  {entry.courses.map((course, idx) => (
                    <span key={idx} className="edu-course-tag">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  )
}
