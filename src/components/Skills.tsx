import Reveal from './Reveal'
import { skillGroups, type Lang, type Translation } from '../translations'

interface Props { tr: Translation; lang: Lang }

export default function Skills({ tr, lang }: Readonly<Props>) {
  return (
    <section className="section" id="skills">
      <div className="container">
        <Reveal><p className="kicker">{tr.skills.title}</p></Reveal>
        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <Reveal key={group.name.en} delay={i * 0.08}>
              <div className="skills-group">
                <h3 className="skills-group-name">{group.name[lang]}</h3>
                <ul className="chips">
                  {group.items.map((item) => (<li className="chip" key={item}>{item}</li>))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
