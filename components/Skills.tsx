'use client'

import { motion } from 'framer-motion'

const skills = {
  languages: [
    'JavaScript',
    'TypeScript',
    'React.js',
    'Next.js',
    'Tailwind CSS',
    'HTML',
    'CSS'
  ],
  tools: [
    'Git',
    'Webpack',
    'Responsive Design',
    'Cross-browser Compatibility',
    'RESTful APIs'
  ]
}

const SkillTag = ({ name, index }: { name: string; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="inline-block"
    >
      <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200 rounded-full text-sm font-medium hover:bg-indigo-200 dark:hover:bg-indigo-800 transition-colors duration-200">
        {name}
      </span>
    </motion.div>
  )
}

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Skills</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </motion.div>

        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-6">Languages & Frameworks</h3>
              <div className="flex flex-wrap gap-3">
                {skills.languages.map((skill, index) => (
                  <SkillTag key={index} name={skill} index={index} />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-6">Tools & Other Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.tools.map((skill, index) => (
                  <SkillTag key={index} name={skill} index={index} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 