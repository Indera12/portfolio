'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { terminalCommands } from '@/lib/data'

export default function Terminal() {
  const [lines, setLines] = useState<string[]>(['Welcome! Type "help" to see commands.'])
  const [input, setInput] = useState('')
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [lines])

  const run = (cmd: string) => {
    const c = cmd.trim().toLowerCase()
    if (c === '') return
    if (c === 'clear') {
      setLines([])
      return
    }
    const out = terminalCommands[c] ?? `Command not found: ${c}. Type "help".`
    setLines((prev) => [...prev, `$ ${cmd}`, out])
  }

  return (
    <section id="terminal" className="section">
      <div className="container max-w-3xl">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <span className="text-sm font-semibold tracking-widest text-lavender-600 uppercase">Interactive</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            Developer <span className="gradient-text">terminal</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-2xl overflow-hidden shadow-soft"
        >
          <div className="flex items-center gap-2 px-4 py-3 bg-ink-900/80 text-white">
            <span className="w-3 h-3 rounded-full bg-red-400" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-400" />
            <span className="ml-3 text-xs font-mono text-white/70">indera@portfolio ~ %</span>
          </div>
          <div className="bg-ink-900/90 text-green-300 font-mono text-sm p-4 h-64 overflow-y-auto">
            {lines.map((l, i) => (
              <div key={i} className="whitespace-pre-wrap">{l}</div>
            ))}
            <div ref={endRef} />
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              run(input)
              setInput('')
            }}
            className="flex items-center gap-2 bg-ink-900/90 px-4 py-3 border-t border-white/10"
          >
            <span className="text-green-400 font-mono">$</span>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent text-green-300 font-mono outline-none placeholder:text-green-300/40"
              placeholder="type a command..."
              autoFocus={false}
            />
          </form>
        </motion.div>
      </div>
    </section>
  )
}
