import { motion } from 'framer-motion'
import { projects, type Lang, type Translation } from '../translations'
import { GithubIcon } from './icons'

interface Props { tr: Translation; lang: Lang }

export default function Projects({ tr, lang }: Readonly<Props>) {
  return (
    <section className="section" id="projects">
      <div className="container">
        <p className="kicker">{tr.projects.title}</p>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.article
              className="card project-card"
              key={project.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="project-head">
                <h3>{project.name}</h3>
                {project.wip && <span className="tag-wip">{tr.projects.wip}</span>}
              </div>
              <p className="project-desc">{project.desc[lang]}</p>
              <ul className="stack">
                {project.stack.map((tech) => (<li key={tech}>{tech}</li>))}
              </ul>
              <div className="project-links">
                <a href={project.repo} target="_blank" rel="noreferrer"><GithubIcon size={16} /> GitHub</a>
                {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Demo</a>}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
