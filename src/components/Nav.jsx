import { useState, useEffect } from 'react'
import styles from './Nav.module.css'

const links = ['skills','experience','projects','achievements','education','contact']

export default function Nav({ name }) {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      links.forEach(id => {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 140) setActive(id)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>{name?.split(' ')[0]?.[0]}{name?.split(' ')[1]?.[0]}/</div>
      <ul className={styles.links}>
        {links.map(id => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={active === id ? styles.activeLink : ''}
            >{id}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
