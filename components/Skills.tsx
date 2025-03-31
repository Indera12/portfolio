'use client'

import { motion } from 'framer-motion'

const skills = {
  languages: [
    { name: 'JavaScript', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'React.js', level: 95 },
    { name: 'Next.js', level: 90 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 95 }
  ],
  tools: [
    { name: 'Git', level: 90 },
    { name: 'Webpack', level: 85 },
    { name: 'Responsive Design', level: 95 },
    { name: 'Cross-browser Compatibility', level: 90 },
    { name: 'RESTful APIs', level: 90 }
  ]
}

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-indigo-500 dark:bg-indigo-400 h-2 rounded-full"
        />
      </div>
    </div>
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
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Languages & Frameworks</h3>
              {skills.languages.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Tools & Other Skills</h3>
              {skills.tools.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 