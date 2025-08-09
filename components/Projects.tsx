'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const featuredProjects = [
  {
    title: 'SIA - Shankar IAS Academy',
    description: 'I have developed this particular page for Shankar IAS Academy, using NextJs. The page includes features like branch details, course offerings and an enquiry form for prospective students.',
    links: [
      {label: '', url: 'https://www.shankariasacademy.com/tnpsc-admissions/'}
    ]
  },
  {
    title: 'Queensland Amusement Park',
    description: 'I built the gallery and contact pages for Queensland Amusement Park using NextJs and strapi. The design is responsive and user-friendly, ensuring easy access to information for visitors.',
    links: [
      { label: 'Contact Page', url: 'https://www.queenslandamusementpark.com/contact' },
      { label: 'Gallery Page', url: 'https://www.queenslandamusementpark.com/ourgallery' }
    ]
  }
]

const projects = [
  {
    title: 'Customer Management Portal',
    description: 'Built a responsive SaaS platform using React.js, Bootstrap, and RESTful APIs. Created dynamic and interactive UIs, ensuring consistent styling and cross-browser compatibility. Optimized the layout for seamless performance across various devices.',
    image: '/assets/customer.jpeg',
    technologies: ['React.js', 'Bootstrap', 'RESTful APIs', 'Responsive Design']
  },
  {
    title: 'Education Institution Web Platform',
    description: 'Developed a web platform using Next.js and Tailwind CSS, improving the institution\'s online presence. Implemented core features such as carousel, slider, Google Captcha, and OTP box. Ensured the website was optimized for performance and SEO.',
    image: '/assets/education.jpeg',
    technologies: ['Next.js', 'Tailwind CSS', 'Google Captcha', 'SEO']
  },
  {
    title: 'Authentication and Finance Module Library',
    description: 'Built a library for authentication and finance modules using TypeScript and React.js. Developed reusable components for user authentication, including login, registration, and password recovery. Implemented finance-related features such as transaction history display and data visualization.',
    image: '/assets/authFinance.jpeg',
    technologies: ['TypeScript', 'React.js', 'Authentication', 'Data Visualization']
  },
  {
    title: 'Spotify Clone',
    description: 'Built a responsive Spotify clone with React.js and Bootstrap, featuring a modern music player interface. Implemented core features including playlist management, music playback controls, and responsive design. Focused on creating an intuitive user experience with smooth transitions and interactive elements.',
    image: '/assets/music.png',
    technologies: ['React.js', 'Bootstrap', 'UI/UX', 'Responsive Design']
  }
]

const FeaturedProjectCard = ({ project }: { project: any }) => (
  <div className="relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 mb-6 border border-gray-200 dark:border-gray-800">
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>
    <div className="flex flex-wrap gap-3 mt-2">
      {project.links.map((link: any, idx: number) => (
        <a
          key={idx}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium hover:underline transition"
        >
          {link.label || 'View Project'}
        </a>
      ))}
    </div>
  </div>
)

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : ''
          }`}
          priority={index < 2}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
        <div className={`transition-all duration-300 ease-in-out md:${isHovered ? 'opacity-100' : 'opacity-0'} opacity-100`}>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
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
  )
}

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Projects</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </motion.div>
          <div className="mb-10">
    {featuredProjects.map((project) => (
      <FeaturedProjectCard key={project.title} project={project} />
    ))}
  </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 