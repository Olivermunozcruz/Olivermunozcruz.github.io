import { motion } from 'framer-motion'
import { trajectory, type Lang, type Translation } from '../translations'

interface Props { tr: Translation; lang: Lang }

export default function Trajectory({ tr, lang }: Readonly<Props>) {
  return (
    <section className="section" id="trajectory">
      <div className="container">
        <p className="kicker">{tr.trajectory.title}</p>
        <div className="trajectory-grid">
          {trajectory.map((item, i) => (
            <motion.article
              className="card trajectory-card"
              key={item.title.en}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className="trajectory-top">
                <span className="trajectory-kind">{item.kind[lang]}</span>
                <span className="trajectory-date">{item.dates[lang]}</span>
              </div>
              <h3>{item.title[lang]}</h3>
              <p className="trajectory-place">{item.place}</p>
              <p className="trajectory-meta">{item.meta[lang]}</p>
              {item.desc && <p className="trajectory-desc">{item.desc[lang]}</p>}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}