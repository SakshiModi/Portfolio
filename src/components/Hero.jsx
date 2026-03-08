import styles from './Hero.module.css'

export default function Hero({ hero, stats }) {
  const firstName = hero?.name?.split(' ')[0] || 'Sakshi'
  const lastName  = hero?.name?.split(' ')[1] || 'Modi'

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.gridLines} aria-hidden />
      <div className={styles.glow1} aria-hidden />
      <div className={styles.glow2} aria-hidden />

      <div className={styles.tag}>
        <span className={styles.tagLine} />
        {hero?.role} · {hero?.location}
      </div>

      <h1 className={styles.h1}>
        {firstName}<br />
        <span className={styles.accent}>{lastName}.</span>
      </h1>

      <p className={styles.sub}>{hero?.tagline}</p>

      {/* Open-to-work badge */}
      {hero?.openTo && (
        <div className={styles.openTo}>
          <span className={styles.dot} />
          {hero.openTo}
        </div>
      )}

      <div className={styles.cta}>
        <a href="#experience" className={styles.btnPrimary}>View Experience</a>
        <a href="#contact"    className={styles.btnOutline}>Get In Touch</a>
        {hero?.resumeUrl && hero.resumeUrl !== '#' ? (
          <a href={hero.resumeUrl} target="_blank" rel="noreferrer" className={styles.btnOutline}>
            ↓ Resume
          </a>
        ) : (
          <span className={styles.btnDisabled} title="Resume link coming soon">↓ Resume</span>
        )}
      </div>

      <div className={styles.stats}>
        {stats?.map((s, i) => (
          <div key={i} className={styles.stat}>
            <div className={styles.statNum}>{s.value}</div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
