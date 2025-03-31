'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Software Developer',
    company: 'Vinbytes Technologies Pvt Ltd',
    period: 'Jul 2023 - Present',
    description: [
      'Developed and maintained frontend features using React.js and Next.js, ensuring optimal performance and usability.',
      'Applied Tailwind CSS to build responsive, modern UIs, enhancing the user experience across devices.',
      'Collaborated with cross-functional teams to implement design solutions and optimize web performance.',
      'Ensured cross-browser compatibility and resolved UI issues efficiently.',
      'Adapted quickly to new frameworks and tools, continuously enhancing development practices.'
    ],
    technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'UI/UX', 'Performance Optimization']
  },
  {
    title: 'Software Intern',
    company: 'Shiash Info Solutions Pvt Ltd',
    period: 'Oct 2022 - Dec 2022',
    description: [
      'Gained hands-on experience in Python programming and web development (HTML, CSS, JavaScript).',
      'Collaborated with team members on real-world projects, contributing to successful deliveries.'
    ],
    technologies: ['Python', 'HTML', 'CSS', 'JavaScript']
  }
]

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400"></div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {experience.title}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                  {experience.company}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {experience.period}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {experience.description.join('\n')}
                </p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience 