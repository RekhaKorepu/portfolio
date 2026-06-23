import { useEffect, useRef, useState } from 'react'
import { PROJECTS_DATA } from '../data/projectsData'
import './Projects.css'

export function Projects() {
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
      id="projects"
      ref={sectionRef}
      className={`proj-section${visible ? ' proj-visible' : ''}`}
    >
      <div className="container">
        <div className="proj-header">
          <span className="proj-eyebrow">Project Showcase</span>
          <h2 className="proj-title">Innovative Projects</h2>
          <div className="proj-title-line" />
        </div>

        <div className="proj-grid">
          {PROJECTS_DATA.map((project, idx) => (
            <div
              key={project.title}
              className="proj-card glass"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              {/* Image Banner wrapper */}
              <div className="proj-img-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="proj-img"
                />
                <div className="proj-img-overlay" aria-hidden="true" />
                
                {/* Floating links visible on hover */}
                {(project.github || project.live) && (
                  <div className="proj-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="proj-link-btn"
                        aria-label={`View GitHub repository for ${project.title}`}
                      >
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="proj-link-btn"
                        aria-label={`Visit live website for ${project.title}`}
                      >
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Text content details */}
              <div className="proj-content">
                <h3 className="proj-card-title">{project.title}</h3>
                <p className="proj-desc">{project.description}</p>
                
                <div className="proj-features-box">
                  <h4 className="proj-features-title">Key Features</h4>
                  <ul className="proj-features-list" role="list">
                    {project.features.map((feature, fIdx) => (
                      <li key={fIdx} className="proj-feature-item">
                        <span className="proj-bullet" aria-hidden="true">▹</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="proj-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="proj-tag">{tag}</span>
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
