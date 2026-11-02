'use client'

import { motion } from 'framer-motion'
import { stats } from '@/lib/data'

export default function Dashboard() {
  return (
    <section id="dashboard" className="section">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="text-sm font-semibold tracking-widest text-lavender-600 uppercase">Stats</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            Developer <span className="gradient-text">dashboard</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="font-display text-4xl font-bold gradient-text">{s.value}</div>
              <div className="mt-2 text-sm text-ink-600">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
