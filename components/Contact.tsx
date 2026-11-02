'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const socials = [
  { name: 'Email', href: 'mailto:inderabharati@gmail.com', label: 'inderabharati@gmail.com' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/indera-bharati/', label: 'linkedin.com/in/indera-bharati' },
  { name: 'GitHub', href: 'https://github.com/Indera12', label: 'github.com/Indera12' },
]

interface FormData { name: string; email: string; message: string }
interface FormErrors { name?: string; email?: string; message?: string }

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const validate = () => {
    const e: FormErrors = {}
    let ok = true
    if (!formData.name.trim()) { e.name = 'Name is required'; ok = false }
    else if (formData.name.length < 2) { e.name = 'At least 2 characters'; ok = false }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) { e.email = 'Email is required'; ok = false }
    else if (!emailRegex.test(formData.email)) { e.email = 'Invalid email'; ok = false }
    if (!formData.message.trim()) { e.message = 'Message is required'; ok = false }
    else if (formData.message.length < 10) { e.message = 'At least 10 characters'; ok = false }
    setErrors(e)
    return ok
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')
    setErrorMessage('')
    try {
      // Primary: deliver directly to inderabharati@gmail.com via FormSubmit (no backend/env vars needed).
      const res = await fetch('https://formsubmit.co/ajax/inderabharati@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio contact from ${formData.name}`,
          _template: 'table',
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || data.success !== 'true') {
        throw new Error('Delivery failed')
      }
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setErrors({})
    } catch (err) {
      // Fallback: open the visitor's email client so the message still reaches you.
      const subject = encodeURIComponent(`Portfolio contact from ${formData.name}`)
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)
      window.location.href = `mailto:inderabharati@gmail.com?subject=${subject}&body=${body}`
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setErrors({})
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((p) => ({ ...p, [name]: value }))
    if (errors[name as keyof FormErrors]) setErrors((p) => ({ ...p, [name]: undefined }))
  }

  const inputCls = (err?: string) =>
    `w-full px-4 py-2.5 rounded-xl glass outline-none focus:ring-2 focus:ring-lavender-400 transition ${err ? 'ring-2 ring-red-400' : ''}`

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-sm font-semibold tracking-widest text-lavender-600 uppercase">Contact</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            Let's build something <span className="gradient-text">great</span>
          </h2>
          <p className="mt-4 text-ink-600">Have an interesting idea or opportunity? Let's build something great together!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="glass rounded-3xl p-6 md:p-8 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-sage-400 animate-pulse" />
              <span className="text-sm font-medium text-ink-700">Available for new opportunities</span>
            </div>
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target={s.name === 'Email' ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="block glass rounded-2xl p-4 hover:bg-white/70 transition"
              >
                <p className="text-xs uppercase tracking-wider text-ink-500">{s.name}</p>
                <p className="font-medium text-ink-900 mt-0.5">{s.label}</p>
              </a>
            ))}
            <a href="/resume.pdf" className="btn-primary w-full justify-center">Download Resume</a>
          </div>

          <form onSubmit={handleSubmit} className="glass rounded-3xl p-6 md:p-8 space-y-4">
            <div>
              <label className="block text-sm font-medium text-ink-700 mb-1">Name</label>
              <input name="name" value={formData.name} onChange={handleChange} className={inputCls(errors.name)} />
              {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-ink-700 mb-1">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className={inputCls(errors.email)} />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-ink-700 mb-1">Message</label>
              <textarea name="message" rows={4} value={formData.message} onChange={handleChange} className={inputCls(errors.message)} />
              {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary w-full justify-center disabled:opacity-60"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && <p className="text-sm text-sage-600">Message sent successfully! 🎉</p>}
            {status === 'error' && <p className="text-sm text-red-500">{errorMessage}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
