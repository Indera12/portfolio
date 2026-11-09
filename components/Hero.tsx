'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10 bg-grid">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-lavender-300/40 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-sage-300/40 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blush-200/40 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-sm font-medium text-ink-700"
          >
            <span className="w-2 h-2 rounded-full bg-sage-400 animate-pulse" />
            Available for new opportunities
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
          >
            Hey, I'm <span className="gradient-text">Indera</span>!
            <br />
            <span className="text-ink-900">I turn ideas into</span>
            <br />
            <span className="text-ink-500">interactive digital experiences.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-ink-600 max-w-xl leading-relaxed"
          >
            Frontend Developer with 3+ years of experience building SaaS products,
            leading teams, and crafting interfaces people actually enjoy using. React, Next.js,
            TypeScript — and a soft spot for delightful details.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#projects" className="btn-primary">Explore My Work →</a>
            <a href="/resume.pdf" className="btn-ghost">Download Resume</a>
            <a href="#contact" className="btn-ghost">Let's Connect</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex items-center gap-6 text-sm text-ink-500"
          >
            <div><span className="font-bold text-ink-900">3+</span> years</div>
            <div className="w-px h-4 bg-ink-300" />
            <div><span className="font-bold text-ink-900">5</span> devs led</div>
            <div className="w-px h-4 bg-ink-300" />
            <div><span className="font-bold text-ink-900">4+</span> projects</div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative w-72 h-96 md:w-80 md:h-[26rem]">
            <div className="absolute inset-0 bg-gradient-to-br from-lavender-300 to-sage-300 rounded-[2rem] rotate-6 opacity-40" />
            <div className="relative w-full h-full glass-strong rounded-[2rem] overflow-hidden shadow-soft">
              <Image
                src="/assets/profile.jpg"
                alt="Indera Salil Bharati"
                fill
                sizes="(max-width: 768px) 288px, 320px"
                className="object-cover"
                priority
              />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-2 shadow-soft"
            >
              <span className="text-sm font-medium">✨ Frontend Dev</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -left-4 glass rounded-2xl px-4 py-2 shadow-soft"
            >
              <span className="text-sm font-medium">⚛️ React</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
