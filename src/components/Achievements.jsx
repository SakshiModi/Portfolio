import styles from './Achievements.module.css'

export default function Achievements({ achievements }) {
  if (!achievements?.length) return null
  return (
    <section id="achievements" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.label}><span />Recognition</div>
        <h2 className={styles.h2}>Achievements</h2>
        <div className={styles.grid}>
          {achievements.map((a, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.icon}>{a.icon}</div>
              <div className={styles.title}>{a.title}</div>
              <div className={styles.desc}>{a.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
