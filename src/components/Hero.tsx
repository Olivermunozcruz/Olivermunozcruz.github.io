import { motion } from 'framer-motion'
import { NAME, links, type Lang, type Translation } from '../translations'
import { GithubIcon, LinkedinIcon, MailIcon } from './icons'

interface Props { tr: Translation; lang: Lang }

export default function Hero({ tr, lang }: Readonly<Props>) {

  return (
    <section className="section hero" id="top">
      <div className="container hero-inner">
        <motion.div
          className="hero-main"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="hero-name">{NAME}</h1>
          <p className="hero-role">{tr.hero.role}</p>
          <p className="hero-tagline">{tr.hero.tagline}</p>
          <div className="hero-cta">
            <a className="btn btn-primary" href={links.cv[lang]} target="_blank" rel="noreferrer">{tr.hero.cvLabel}</a>
            <a className="btn" href="#contact">{tr.hero.contactLabel}</a>
          </div>
          <div className="hero-social">
            <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon size={20} /></a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon size={20} /></a>
            <a href={`mailto:${links.email}`} aria-label="Email"><MailIcon size={20} /></a>
          </div>
        </motion.div>
        <motion.div
          className="hero-aside"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        >
          <img className="hero-photo" src="/OliverMunozCruz.jpg" alt="Oliver Muñoz Cruz" />
        </motion.div>
      </div>
    </section>
  )
}
