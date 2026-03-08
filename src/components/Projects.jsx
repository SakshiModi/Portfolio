import styles from './Projects.module.css'

export default function Projects({ projects }) {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.label}><span />Highlights</div>
        <h2 className={styles.h2}>Key Projects</h2>
        <div className={styles.grid}>
          {projects?.map((p, i) => {
            const tags = typeof p.tags === 'string' ? p.tags.split(',') : p.tags || []
            return (
              <div key={i} className={styles.card}>
                <div className={styles.num}>
                  {String(i + 1).padStart(2, '0')} / PROJECT
                </div>
                <div className={styles.name}>{p.name}</div>
                <p className={styles.desc}>{p.desc}</p>
                <div className={styles.impact}>{p.impact}</div>
                <div className={styles.tags}>
                  {tags.map((t, j) => (
                    <span key={j} className={styles.tag}>{t.trim()}</span>
                  ))}
                </div>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" className={styles.ghLink}>
                    ↗ View on GitHub
                  </a>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
