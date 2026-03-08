import styles from './Skills.module.css'

export default function Skills({ skills }) {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.label}><span />Technical Stack</div>
        <h2 className={styles.h2}>Skills &amp; Technologies</h2>
        <div className={styles.grid}>
          {skills?.map((s, i) => {
            const tags = typeof s.tags === 'string' ? s.tags.split(',') : s.tags || []
            const hi   = typeof s.highlights === 'string' ? s.highlights.split(',') : s.highlights || []
            return (
              <div key={i} className={styles.card}>
                <div className={styles.icon}>{s.icon}</div>
                <div className={styles.title}>{s.title}</div>
                <div className={styles.tags}>
                  {tags.map((t, j) => (
                    <span key={j} className={`${styles.tag} ${hi.includes(t.trim()) ? styles.hi : ''}`}>
                      {t.trim()}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
