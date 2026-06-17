import { useState, useEffect } from 'react'
import { t, links, type Lang } from './translations'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Trajectory from './components/Trajectory'
import Contact from './components/Contact'

export default function App() {
  const [lang, setLang] = useState<Lang>('es')
  const tr = t[lang]

  useEffect(() => { document.documentElement.lang = lang }, [lang])

  const toggleLang = () => setLang((prev) => (prev === 'es' ? 'en' : 'es'))

  return (
    <>
      <Nav tr={tr} lang={lang} toggleLang={toggleLang} />
      <main>
        <Hero tr={tr} lang={lang} />
        <About tr={tr} lang={lang} />
        <Skills tr={tr} lang={lang} />
        <Projects tr={tr} lang={lang} />
        <Trajectory tr={tr} lang={lang} />
        <Contact tr={tr} lang={lang} />
      </main>
      <footer className="footer">
        <div className="container">
          <span>© {new Date().getFullYear()} Oliver Muñoz Cruz</span>
          <a href={links.github} target="_blank" rel="noreferrer">{tr.footer}</a>
        </div>
      </footer>
    </>
  )
}
