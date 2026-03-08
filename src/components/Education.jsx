import styles from './Education.module.css'

export default function Education({ education, certifications }) {
  return (
    <section id="education" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.label}><span />Academic Background</div>
        <h2 className={styles.h2}>Education</h2>
        <div className={styles.grid}>
          {education?.map((e, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.degree}>{e.degree}</div>
              <div className={styles.school}>{e.school}</div>
              <div className={styles.year}>{e.year}</div>
              {e.gpa    && <div className={styles.gpa}>{e.gpa}</div>}
              {e.detail && <div className={styles.detail}>{e.detail}</div>}
            </div>
          ))}
        </div>

        {certifications?.length > 0 && (
          <>
            <div className={`${styles.label} ${styles.certLabel}`}><span />Certifications</div>
            <div className={styles.certs}>
              {certifications.map((c, i) => (
                <div key={i} className={styles.certCard}>
                  <div className={styles.certBadge}>{c.icon}</div>
                  <div>
                    <div className={styles.certName}>{c.name}</div>
                    <div className={styles.certOrg}>{c.org}</div>
                    <div className={styles.certYear}>{c.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
