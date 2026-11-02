'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-widest text-lavender-600 uppercase"
          >
            About me
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-3 font-display text-4xl md:text-5xl font-bold"
          >
            A developer who loves <span className="gradient-text">beautiful UI</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4 text-ink-700 leading-relaxed">
              <p>
                Hey! I'm Indera — a Frontend Developer currently at Vinbytes Technologies Pvt. Ltd.
                (since June 2023). I specialize in React.js, Next.js, JavaScript, TypeScript,
                responsive web design, reusable components, and REST API integration.
              </p>
              <p>
                I'm currently leading a team of 5 developers on an Exam Management System. I enjoy
                solving challenging problems, creating intuitive user experiences, and experimenting
                with new technologies. I'm also expanding into Node.js, full-stack development, and
                AI-powered dev tools.
              </p>
            </div>
            <div className="space-y-4 text-ink-700 leading-relaxed">
              <p>
                My journey started as a Software Intern at Shiash Info Solutions, where I got hands-on
                with Python and web fundamentals. From there I grew into a frontend role, shipping
                production apps and learning to balance speed with quality.
              </p>
              <p>
                I care about clean code, accessibility, and the small details that make an interface
                feel alive. When I'm not coding, I'm probably exploring new tools or sketching ideas.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
