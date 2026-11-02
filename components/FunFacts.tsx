'use client'

import { motion } from 'framer-motion'
import { funFacts } from '@/lib/data'

export default function FunFacts() {
  return (
    <section className="section">
      <div className="container max-w-3xl">
        <div className="glass rounded-3xl p-8 md:p-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">A little more about me ☕</h2>
          <ul className="space-y-3">
            {funFacts.map((f) => (
              <motion.li
                key={f}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-3 text-ink-700"
              >
                <span className="text-blush-400">✦</span>
                {f}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
