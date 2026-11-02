'use client'

import { motion } from 'framer-motion'
import { techStack } from '@/lib/data'

export default function TechStack() {
  return (
    <section id="stack" className="section">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-sm font-semibold tracking-widest text-lavender-600 uppercase">Tech stack</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            Tools I <span className="gradient-text">build with</span>
          </h2>
          <p className="mt-4 text-ink-600">Hover a card to see how I use it.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {techStack.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative glass rounded-2xl p-5 cursor-default overflow-hidden"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${t.color} blur-2xl -z-10`} style={{ opacity: 0.15 }} />
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.color} mb-3 shadow-soft`} />
              <h3 className="font-semibold text-ink-900">{t.name}</h3>
              <p className="text-xs text-ink-500 mt-0.5">{t.category}</p>
              <p className="mt-3 text-sm text-ink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-snug">
                {t.use}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
