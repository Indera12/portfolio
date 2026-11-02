'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { projects } from '@/lib/data'

const projectImages: Record<string, string> = {
  'Customer Management Portal': '/assets/customer.jpeg',
  'Education Institution Web Platform': '/assets/education.jpeg',
}

export default function Projects() {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-sm font-semibold tracking-widest text-lavender-600 uppercase">Featured projects</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            Things I've <span className="gradient-text">built</span>
          </h2>
          <p className="mt-4 text-ink-600">Tap a card to expand the case study.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => {
            const isOpen = open === p.title
            const img = projectImages[p.title]
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-3xl overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${p.accent}`} />
                {img && (
                  <div className="relative w-full aspect-[16/9] overflow-hidden">
                    <Image src={img} alt={p.title} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
                  </div>
                )}
                {!img && (
                  <div className={`relative w-full aspect-[16/9] bg-gradient-to-br ${p.accent} opacity-30 flex items-center justify-center`}>
                    <span className="font-display text-2xl font-bold text-ink-900/60">{p.title}</span>
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-xl font-bold text-ink-900">{p.title}</h3>
                      <p className="text-sm text-ink-500 mt-0.5">{p.subtitle}</p>
                    </div>
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-lavender-100 text-lavender-700 whitespace-nowrap">
                      {p.role}
                    </span>
                  </div>
                  <p className="mt-3 text-ink-600 text-sm leading-relaxed">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-white/70 text-ink-700 border border-white/60">
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setOpen(isOpen ? null : p.title)}
                    className="mt-4 text-sm font-medium text-lavender-600 hover:text-lavender-700"
                  >
                    {isOpen ? 'Hide details ↑' : 'View case study ↓'}
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="mt-4 space-y-2 overflow-hidden"
                      >
                        {p.highlights.map((h) => (
                          <li key={h} className="flex gap-2 text-sm text-ink-700">
                            <span className="text-sage-500">✓</span>
                            {h}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
