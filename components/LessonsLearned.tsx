'use client'

import { motion } from 'framer-motion'
import { lessons } from '@/lib/data'

export default function LessonsLearned() {
  return (
    <section className="section">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="text-sm font-semibold tracking-widest text-lavender-600 uppercase">Lessons</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            Things I've learned <span className="gradient-text">the hard way</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {lessons.map((l, i) => (
            <motion.div
              key={l}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-5 flex gap-3"
            >
              <span className="text-lavender-500 font-bold">0{i + 1}</span>
              <p className="text-ink-700 text-sm leading-relaxed">{l}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
