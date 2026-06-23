import { useEffect, useRef, useState } from 'react'
import { SOCIAL_LINKS } from '../data/siteData'
import './Contact.css'

const CONTACT_ITEMS = [
  {
    id: 'email',
    label: 'Email',
    value: 'rekhaakorepu@gmail.com',
    href: 'mailto:rekhaakorepu@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
        <rect x="2" y="4" width="20" height="16" rx="2" />
      </svg>
    ),
  },
  {
    id: 'location',
    label: 'Location',
    value: 'Hyderabad, India',
    href: null,
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
]

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')

    // Build a mailto link as a graceful fallback (no backend needed)
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)
    window.location.href = `mailto:rekhaakorepu@gmail.com?subject=${subject}&body=${body}`

    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    }, 800)
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`ctc-section${visible ? ' ctc-visible' : ''}`}
    >
      {/* Background blobs */}
      <div className="ctc-blob ctc-blob--1" aria-hidden="true" />
      <div className="ctc-blob ctc-blob--2" aria-hidden="true" />

      <div className="container">
        <div className="ctc-header">
          <span className="ctc-eyebrow">Get In Touch</span>
          <h2 className="ctc-title">Let&apos;s Connect</h2>
          <div className="ctc-title-line" />
        </div>

        <div className="ctc-body">
          {/* Left column */}
          <div className="ctc-left">
            <p className="ctc-tagline">
              I&apos;m always open to discussing new opportunities, creative ideas, or opportunities
              to be part of your visions. Feel free to reach out using the form or via direct email.
            </p>

            <div className="ctc-info-list">
              {CONTACT_ITEMS.map(item => (
                <div key={item.id} className="ctc-info-item">
                  <span className="ctc-info-icon">{item.icon}</span>
                  <div className="ctc-info-text">
                    <span className="ctc-info-label">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className="ctc-info-value ctc-info-link">
                        {item.value}
                      </a>
                    ) : (
                      <span className="ctc-info-value">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="ctc-social-block">
              <p className="ctc-social-label">Social Profiles</p>
              <div className="ctc-social-links">
                {SOCIAL_LINKS.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ctc-social-btn"
                    aria-label={s.label}
                    title={s.label}
                  >
                    {s.icon}
                    <span className="ctc-social-name">{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right column — contact form */}
          <div className="ctc-right glass">
            {status === 'sent' ? (
              <div className="ctc-success">
                <div className="ctc-success-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3 className="ctc-success-title">Message sent!</h3>
                <p className="ctc-success-text">Thanks for reaching out. I'll get back to you as soon as possible.</p>
                <button className="ctc-btn-ghost" onClick={() => setStatus('idle')}>
                  Send another
                </button>
              </div>
            ) : (
              <form className="ctc-form" onSubmit={handleSubmit} noValidate>
                <h3 className="ctc-form-title">Send a message</h3>

                <div className="ctc-field">
                  <label className="ctc-label" htmlFor="ctc-name">Your Name</label>
                  <input
                    id="ctc-name"
                    name="name"
                    type="text"
                    className="ctc-input"
                    placeholder="Rekha Korepu"
                    value={form.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                  />
                </div>

                <div className="ctc-field">
                  <label className="ctc-label" htmlFor="ctc-email">Your Email</label>
                  <input
                    id="ctc-email"
                    name="email"
                    type="email"
                    className="ctc-input"
                    placeholder="hello@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                  />
                </div>

                <div className="ctc-field">
                  <label className="ctc-label" htmlFor="ctc-message">Your Message</label>
                  <textarea
                    id="ctc-message"
                    name="message"
                    className="ctc-textarea"
                    placeholder="I'd love to talk about..."
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  id="ctc-submit-btn"
                  type="submit"
                  className={`ctc-submit${status === 'sending' ? ' ctc-submit--sending' : ''}`}
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <>
                      <span className="ctc-spinner" aria-hidden="true" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m22 2-7 20-4-9-9-4Z" />
                        <path d="M22 2 11 13" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer strip */}
      <div className="ctc-footer">
        <p className="ctc-footer-text">
          Designed &amp; built by <span className="ctc-footer-name">Rekha Korepu</span> · {new Date().getFullYear()}
        </p>
      </div>
    </section>
  )
}
