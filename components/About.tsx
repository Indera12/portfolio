'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </motion.div>

        <div className="mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm"
          >
            <div className="space-y-6">
              <p className="text-gray-600 dark:text-gray-300">
                I am a passionate Frontend Developer with expertise in building modern web applications.
                My journey in software development began with a strong foundation in computer science,
                and I've been continuously learning and evolving with the latest technologies.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                I specialize in creating responsive, user-friendly applications using React, Next.js,
                and various modern web technologies. My approach combines clean code practices with
                efficient problem-solving to deliver high-quality solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm">
                  React
                </span>
                <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm">
                  Next.js
                </span>
                <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm">
                  TypeScript
                </span>
                <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm">
                  Tailwind CSS
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 