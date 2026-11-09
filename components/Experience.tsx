'use client'

import { motion } from 'framer-motion'
import { experience } from '@/lib/data'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-sm font-semibold tracking-widest text-lavender-600 uppercase">Journey</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            Career <span className="gradient-text">timeline</span>
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-lavender-300 via-sage-300 to-transparent" />
          {experience.map((e, i) => (
            <motion.div
              key={e.title + e.org}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative mb-10 pl-12 md:pl-0 ${
                i % 2 === 0 ? 'md:pr-[52%] md:text-right' : 'md:pl-[52%]'
              }`}
            >
              <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-lavender-500 ring-4 ring-cream-50 shadow-glow" />
              <div className="glass rounded-2xl p-5">
                <p className="text-xs font-semibold text-lavender-600 uppercase tracking-wider">{e.period}</p>
                <h3 className="mt-1 font-display text-lg font-bold text-ink-900">{e.title}</h3>
                <p className="text-sm text-ink-500">{e.org}</p>
                <ul className={`mt-3 space-y-1.5 text-sm text-ink-700 ${i % 2 === 0 ? 'md:ml-auto' : ''}`}>
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-2">
                      <span className="text-sage-500">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 glass rounded-3xl p-6 md:p-8 max-w-3xl mx-auto">
          <h3 className="font-display text-xl font-bold mb-3">Achievements</h3>
          <ul className="space-y-2 text-sm text-ink-700">
            <li>🏆 Third prize — Code Debugging Competition, Kings Ignite 2021.</li>
            <li>🚀 Urgent project delivery under tight deadlines.</li>
            <li>👥 Leading a 5-member development team on EMS.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
