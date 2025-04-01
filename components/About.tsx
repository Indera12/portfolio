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

        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  I'm a Frontend Developer focused on building modern web applications. 
                  My foundation in computer science supports my commitment to continuous learning and 
                  adapting to new technologies. Over the past year, I've specialized in React.js, Next.js, 
                  and Tailwind CSS, developing responsive and scalable web applications. I prioritize 
                  user-friendly interfaces and optimized performance. I'm skilled in component integration 
                  and have a strong attention to detail. I enjoy collaborative work and strive to improve 
                  development processes. My goal is to contribute to innovative projects, delivering 
                  effective user experiences. I'm dedicated to expanding my skills and staying current 
                  with industry trends, ultimately creating web applications that users find valuable.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                In my current role, I've cultivated strong collaborative relationships with design and 
                backend teams, resulting in the delivery of seamless and intuitive user experiences. 
                My contributions go beyond coding; I proactively troubleshoot and efficiently resolve 
                complex frontend issues, ensuring optimal application performance. I actively support
                colleagues by sharing knowledge and assisting with technical challenges. I prioritize 
                clear communication and efficient problem-solving, streamlining workflows in agile 
                environments. My focus is on delivering high-quality, user-centric solutions that align
                with business objectives. I am committed to continuous technical improvement and 
                fostering a collaborative team dynamic, ultimately creating valuable and enjoyable user
                experiences.
                </p>
              </div>
              {/* <div className="flex flex-wrap gap-2 mt-6">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">
                  React.js
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">
                  Tailwind CSS
                </span>
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 