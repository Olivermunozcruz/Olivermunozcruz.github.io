import Reveal from './Reveal'
import { aboutFacts, type Lang, type Translation } from '../translations'

interface Props { tr: Translation; lang: Lang }

export default function About({ tr, lang }: Readonly<Props>) {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal><p className="kicker">{tr.about.title}</p></Reveal>
        <div className="about-inner">
          <Reveal><p className="about-body">{tr.about.body}</p></Reveal>
          <Reveal delay={0.1}>
            <dl className="about-facts">
              {aboutFacts.map((f) => (
                <div className="fact" key={f.label.en}>
                  <dt>{f.label[lang]}</dt>
                  <dd>{f.value[lang]}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}