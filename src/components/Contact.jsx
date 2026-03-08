import { useState } from 'react'
import styles from './Contact.module.css'

const FORM_ACTION = 'https://formsubmit.co/c138b449760ad85a1111008f6fedd0d1'

export default function Contact({ hero }) {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Name is required'
    if (!form.email.trim())   e.email   = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    setErrors(er => ({ ...er, [e.target.name]: undefined }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setStatus('sending')
    try {
      const body = new FormData()
      Object.entries(form).forEach(([k, v]) => body.append(k, v))
      body.append('_captcha', 'false')
      body.append('_template', 'table')

      const res = await fetch(FORM_ACTION, { method: 'POST', body })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.label}><span />Let's Connect</div>
        <h2 className={styles.h2}>Get In Touch</h2>

        <div className={styles.layout}>
          <div className={styles.left}>
            <p className={styles.intro}>
              Open to senior backend, full-stack, and platform engineering roles.
              Fill in the form and I'll get back to you.
            </p>
            <div className={styles.links}>
              {hero?.linkedin && (
                <a href={hero.linkedin} target="_blank" rel="noreferrer" className={styles.socialLink}>
                  <span className={styles.socialIcon}>in</span>
                  <span>LinkedIn</span>
                </a>
              )}
              {hero?.github && (
                <a href={hero.github} target="_blank" rel="noreferrer" className={styles.socialLink}>
                  <span className={styles.socialIcon}>⌥</span>
                  <span>GitHub</span>
                </a>
              )}
              {hero?.leetcode && (
                <a href={hero.leetcode} target="_blank" rel="noreferrer" className={styles.socialLink}>
                  <span className={styles.socialIcon}>LC</span>
                  <span>LeetCode</span>
                </a>
              )}
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            {/* FormSubmit honeypot */}
            <input type="text" name="_honey" style={{ display: 'none' }} />

            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.fieldLabel}>Name *</label>
                <input
                  type="text" name="name" value={form.name}
                  onChange={handleChange} placeholder="Your full name"
                  className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                />
                {errors.name && <span className={styles.error}>{errors.name}</span>}
              </div>
              <div className={styles.field}>
                <label className={styles.fieldLabel}>Email *</label>
                <input
                  type="email" name="email" value={form.email}
                  onChange={handleChange} placeholder="your@email.com"
                  className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                />
                {errors.email && <span className={styles.error}>{errors.email}</span>}
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.fieldLabel}>Subject</label>
              <input
                type="text" name="subject" value={form.subject}
                onChange={handleChange} placeholder="What's this about?"
                className={styles.input}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.fieldLabel}>Message *</label>
              <textarea
                name="message" value={form.message}
                onChange={handleChange} rows={5}
                placeholder="Tell me about the role or project..."
                className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputError : ''}`}
              />
              {errors.message && <span className={styles.error}>{errors.message}</span>}
            </div>

            <button
              type="submit"
              className={styles.submit}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message →'}
            </button>

            {status === 'success' && (
              <div className={styles.successMsg}>
                ✓ Message sent! I'll be in touch soon.
              </div>
            )}
            {status === 'error' && (
              <div className={styles.errorMsg}>
                Something went wrong. Please try again or reach out on LinkedIn.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
