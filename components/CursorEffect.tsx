'use client'

import { useEffect, useState } from 'react'

export default function CursorEffect() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }
    const leave = () => setVisible(false)
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseleave', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseleave', leave)
    }
  }, [])

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null

  return (
    <div
      className="pointer-events-none fixed z-[9999] transition-opacity duration-300"
      style={{ left: pos.x, top: pos.y, opacity: visible ? 1 : 0, transform: 'translate(-50%, -50%)' }}
    >
      <div className="w-6 h-6 rounded-full border-2 border-lavender-400/60" />
      <div className="absolute inset-0 m-auto w-1.5 h-1.5 rounded-full bg-lavender-500" />
    </div>
  )
}
