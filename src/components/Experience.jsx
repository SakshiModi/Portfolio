import { useEffect, useRef } from 'react'
import styles from './Experience.module.css'

export default function Experience({ experience }) {
  const itemRefs = useRef([])

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add(styles.visible), i * 100)
        }
      }),
      { threshold: 0.1 }
    )
    itemRefs.current.forEach(el => el && obs.observe(el))
    return () => obs.disconnect()
  }, [experience])

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.label}><span />Career</div>
        <h2 className={styles.h2}>Work Experience</h2>
        <div className={styles.list}>
          {experience?.map((exp, i) => {
            const bullets = Array.isArray(exp.bullets)
              ? exp.bullets
              : typeof exp.bullets === 'string'
              ? exp.bullets.split('|')
              : []
            const tags = typeof exp.tags === 'string' ? exp.tags.split(',') : exp.tags || []
            return (
              <div key={i} className={styles.item} ref={el => (itemRefs.current[i] = el)}>
                <div className={styles.meta}>
                  <div className={styles.date}>{exp.date}</div>
                  <div className={styles.company}>{exp.company}</div>
                </div>
                <div className={styles.body}>
                  <div className={styles.title}>{exp.title}</div>
                  <ul className={styles.bullets}>
                    {bullets.map((b, j) => (
                      <li key={j} dangerouslySetInnerHTML={{ __html: b.trim() }} />
                    ))}
                  </ul>
                  <div className={styles.tags}>
                    {tags.map((t, j) => (
                      <span key={j} className={styles.tag}>{t.trim()}</span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
