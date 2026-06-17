import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface Props { children: ReactNode; delay?: number }

export default function Reveal({ children, delay = 0 }: Readonly<Props>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}
