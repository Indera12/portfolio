'use client'

import { motion } from 'framer-motion'
import { exploring } from '@/lib/data'

export default function CurrentlyExploring() {
  return (
    <section className="section">
      <div className="container">
        <div className="glass rounded-3xl p-8 md:p-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Currently exploring 🚀</h2>
          <div className="flex flex-wrap gap-3">
            {exploring.map((e, i) => (
              <motion.span
                key={e}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="px-4 py-2 rounded-full glass text-ink-800 font-medium"
              >
                {e}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
