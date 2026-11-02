'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="mt-10">
      <div className="container">
        <div className="glass rounded-3xl p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-display font-bold text-lg mb-3">Indera</h3>
              <p className="text-sm text-ink-600 leading-relaxed">
                Frontend Developer crafting beautiful, interactive digital experiences with React, Next.js, and TypeScript.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Quick links</h3>
              <ul className="space-y-2 text-sm text-ink-600">
                {['About', 'Stack', 'Projects', 'Experience', 'Contact'].map((l) => (
                  <li key={l}>
                    <a href={`#${l.toLowerCase() === 'stack' ? 'stack' : l.toLowerCase()}`} className="hover:text-ink-900 transition">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Connect</h3>
              <div className="flex gap-3">
                <a href="https://github.com/Indera12" target="_blank" rel="noopener noreferrer" className="glass rounded-full w-10 h-10 flex items-center justify-center hover:bg-white/70 transition">GH</a>
                <a href="https://www.linkedin.com/in/indera-bharati/" target="_blank" rel="noopener noreferrer" className="glass rounded-full w-10 h-10 flex items-center justify-center hover:bg-white/70 transition">in</a>
                <a href="mailto:inderabharati@gmail.com" className="glass rounded-full w-10 h-10 flex items-center justify-center hover:bg-white/70 transition">✉</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-white/40 text-center text-sm text-ink-500">
            {'\u00A9'} {new Date().getFullYear()} Indera Bharati. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
