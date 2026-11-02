'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function EasterEgg() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    let buf = ''
    const onKey = (e: KeyboardEvent) => {
      buf = (buf + e.key.toLowerCase()).slice(-6)
      if (buf.includes('party')) {
        setShow(true)
        buf = ''
        setTimeout(() => setShow(false), 4000)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.9 }}
          className="fixed bottom-6 right-6 z-[9998] glass-strong rounded-2xl px-5 py-4 shadow-glow max-w-xs"
        >
          <p className="font-medium text-ink-900">🎉 You found the Easter egg!</p>
          <p className="text-sm text-ink-600 mt-1">Thanks for exploring. You're awesome. ✨</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
