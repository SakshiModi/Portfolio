import { usePortfolioData } from './usePortfolioData'
import Nav          from './components/Nav'
import Hero         from './components/Hero'
import Skills       from './components/Skills'
import Experience   from './components/Experience'
import Projects     from './components/Projects'
import Education    from './components/Education'
import Achievements from './components/Achievements'
import Contact      from './components/Contact'
import styles       from './App.module.css'

export default function App() {
  const { data } = usePortfolioData()

  return (
    <>
      <Nav name={data.hero?.name} />

      <main>
        <Hero         hero={data.hero}               stats={data.stats} />
        <Skills       skills={data.skills} />
        <Experience   experience={data.experience} />
        <Projects     projects={data.projects} />
        <Achievements achievements={data.achievements} />
        <Education    education={data.education}     certifications={data.certifications} />
        <Contact      hero={data.hero} />
      </main>

      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} {data.hero?.name}</span>
        <span className={styles.footerTech}>Built with React · Vite · GitHub Pages</span>
      </footer>
    </>
  )
}
