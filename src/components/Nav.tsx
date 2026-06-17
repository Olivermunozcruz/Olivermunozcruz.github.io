import { useState } from 'react'
import { NAME, type Lang, type Translation } from '../translations'
import { MenuIcon, CloseIcon } from './icons'
import { useActiveSection } from '../hooks/useActiveSection'

const SECTION_IDS = ['about', 'skills', 'projects', 'trajectory', 'contact'] as const

interface Props { tr: Translation; lang: Lang; toggleLang: () => void }

export default function Nav({ tr, lang, toggleLang }: Readonly<Props>) {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(SECTION_IDS)

  return (
    <header className="nav">
      <div className="nav-inner container">
        <a href="#top" className="nav-brand">{NAME}</a>
        <nav className={`nav-links ${open ? 'is-open' : ''}`} aria-label="Principal">
          {SECTION_IDS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className={active === id ? 'is-active' : ''}
              aria-current={active === id ? 'true' : undefined}
            >
              {tr.nav[id]}
            </a>
          ))}
          <button className="lang-btn" onClick={toggleLang} aria-label="Cambiar idioma">{lang === 'es' ? 'EN' : 'ES'}</button>
        </nav>
        <button className="nav-toggle" onClick={() => setOpen((v) => !v)} aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open}>
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  )
}