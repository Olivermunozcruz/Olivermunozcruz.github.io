import Reveal from './Reveal'
import { links, type Lang, type Translation } from '../translations'
import { MailIcon, LinkedinIcon, GithubIcon } from './icons'

interface Props { tr: Translation; lang: Lang }

export default function Contact({ tr }: Readonly<Props>) {
  const methods = [
    { icon: <MailIcon size={18} />, label: 'Email', value: links.email, href: `mailto:${links.email}` },
    { icon: <LinkedinIcon size={18} />, label: 'LinkedIn', value: 'in/olivermunozcruz', href: links.linkedin },
    { icon: <GithubIcon size={18} />, label: 'GitHub', value: 'Olivermunozcruz', href: links.github },
  ]

  return (
    <section className="section" id="contact">
      <div className="container">
        <Reveal><p className="kicker">{tr.contact.title}</p></Reveal>
        <div className="contact-inner">
          <Reveal>
            <div>
              <h2 className="contact-heading">{tr.contact.heading}</h2>
              <p className="contact-body">{tr.contact.body}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="contact-methods">
              {methods.map((m) => {
                const external = m.href.startsWith('http')
                return (
                  <li key={m.label}>
                    <a className="contact-row" href={m.href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
                      <span className="contact-icon">{m.icon}</span>
                      <span className="contact-info">
                        <span className="contact-label">{m.label}</span>
                        <span className="contact-value">{m.value}</span>
                      </span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}