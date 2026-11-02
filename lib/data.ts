export type Tech = {
  name: string
  category: string
  use: string
  color: string
}

export const techStack: Tech[] = [
  { name: 'React.js', category: 'Frontend', use: 'Building reusable, component-driven UIs for SaaS and enterprise apps.', color: 'from-sky-400 to-blue-500' },
  { name: 'Next.js', category: 'Framework', use: 'Server-side rendering, routing, and production-grade React apps.', color: 'from-ink-900 to-ink-700' },
  { name: 'JavaScript', category: 'Language', use: 'Core language for all my frontend logic and interactions.', color: 'from-yellow-400 to-amber-500' },
  { name: 'TypeScript', category: 'Language', use: 'Type-safe components, better DX, fewer runtime bugs.', color: 'from-blue-500 to-indigo-600' },
  { name: 'Node.js', category: 'Backend', use: 'Exploring APIs and full-stack development (currently learning).', color: 'from-green-500 to-emerald-600' },
  { name: 'Tailwind CSS', category: 'Styling', use: 'Rapid, consistent, responsive styling with utility classes.', color: 'from-cyan-400 to-sky-500' },
  { name: 'Bootstrap', category: 'Styling', use: 'Quick responsive layouts for client projects and portals.', color: 'from-purple-500 to-violet-600' },
  { name: 'HTML5', category: 'Markup', use: 'Semantic, accessible page structure.', color: 'from-orange-500 to-red-500' },
  { name: 'CSS3', category: 'Styling', use: 'Animations, layouts, and fine-grained visual polish.', color: 'from-blue-400 to-indigo-500' },
  { name: 'REST APIs', category: 'Integration', use: 'Connecting frontends to backends with Axios/fetch.', color: 'from-emerald-400 to-teal-500' },
  { name: 'GitHub', category: 'Tools', use: 'Version control, collaboration, and code reviews.', color: 'from-gray-700 to-gray-900' },
  { name: 'Postman', category: 'Tools', use: 'Testing and debugging API endpoints.', color: 'from-orange-400 to-orange-600' },
  { name: 'Figma', category: 'Design', use: 'Translating designs into pixel-perfect UI.', color: 'from-pink-400 to-rose-500' },
  { name: 'GitHub Copilot', category: 'AI', use: 'AI-assisted coding and faster iteration.', color: 'from-indigo-400 to-purple-500' },
  { name: 'ChatGPT', category: 'AI', use: 'Brainstorming, debugging, and learning new concepts.', color: 'from-teal-400 to-green-500' },
  { name: 'Cursor AI', category: 'AI', use: 'AI-powered editor for productivity and refactoring.', color: 'from-violet-400 to-fuchsia-500' },
]

export type Project = {
  title: string
  subtitle: string
  description: string
  role: string
  tags: string[]
  highlights: string[]
  live?: string
  github?: string
  accent: string
}

export const projects: Project[] = [
  {
    title: 'Exam Management System (EMS)',
    subtitle: 'Enterprise exam operations platform',
    description:
      'A professional platform handling exam sessions, scheduling, subjects, student mapping, marks, grading, attendance, reports, dynamic forms and validations, with REST API integrations and cross-team coordination.',
    role: 'Frontend Developer & Team Lead (5 members)',
    tags: ['React.js', 'Next.js', 'TypeScript', 'REST APIs', 'Dynamic Forms'],
    highlights: [
      'Led a team of 5 developers end-to-end on the frontend.',
      'Built dynamic forms with complex validations and conditional fields.',
      'Integrated REST APIs for sessions, scheduling, marks, grading, attendance.',
      'Delivered urgent features with tight deadlines.',
    ],
    accent: 'from-lavender-400 to-blush-300',
  },
  {
    title: 'Customer Management Portal',
    subtitle: 'SaaS for a logistics company',
    description:
      'A SaaS application for customer onboarding, vehicle tracking, driver and client management, order monitoring, and active/inactive customer status handling.',
    role: 'Frontend Developer',
    tags: ['React.js', 'Bootstrap', 'Axios', 'REST APIs'],
    highlights: [
      'Built responsive dashboards for onboarding, tracking, and orders.',
      'Managed active/inactive customer status flows.',
      'Integrated REST APIs via Axios with error handling.',
    ],
    accent: 'from-sage-300 to-lavender-300',
  },
  {
    title: 'SVARA',
    subtitle: 'Luxury fashion brand website',
    description:
      'An elegant luxury fashion brand experience with interactive shopping, outfit building, product combinations, booking functionality, and email integration.',
    role: 'Frontend Developer',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Email Integration'],
    highlights: [
      'Crafted an elegant, premium UI with smooth transitions.',
      'Built outfit builder and product combination flows.',
      'Integrated booking and email functionality.',
    ],
    accent: 'from-blush-300 to-lavender-400',
  },
  {
    title: 'Kawaii Journal App',
    subtitle: 'Personal full-stack journaling app',
    description:
      'A full-stack journaling application with journal entries, mood and weather tracking, JWT authentication, user-specific entries, and CRUD operations.',
    role: 'Full-stack (personal project)',
    tags: ['React', 'Spring Boot', 'PostgreSQL', 'JWT'],
    highlights: [
      'Designed mood and weather tracking per entry.',
      'Implemented JWT-based authentication and user-specific data.',
      'Built full CRUD for journal entries.',
    ],
    accent: 'from-sage-400 to-lavender-300',
  },
]

export const experience = [
  {
    title: 'Software Developer',
    org: 'Vinbytes Technologies Pvt. Ltd.',
    period: 'June 2023 – Present',
    points: [
      'Building frontend features with React.js and Next.js.',
      'Leading a team of 5 on the Exam Management System.',
      'Delivered a React 19 website within one month.',
      'Tailwind CSS, reusable components, performance optimization.',
    ],
  },
  {
    title: 'Software Intern',
    org: 'Shiash Info Solutions Pvt. Ltd.',
    period: 'October 2022 – December 2022',
    points: [
      'Hands-on Python and web development (HTML, CSS, JavaScript).',
      'Collaborated on real-world project deliveries.',
    ],
  },
  {
    title: 'B.E. in Computer Science',
    org: 'University',
    period: 'Completed',
    points: ['Strong CS foundation; third prize in Code Debugging Competition, Kings Ignite 2021.'],
  },
]

export const exploring = ['Node.js', 'Full-stack development', 'AWS / Cloud', 'AI-powered dev tools']

export const stats = [
  { label: 'Years of experience', value: '3' },
  { label: 'Team members led', value: '5' },
  { label: 'Projects shipped', value: '4+' },
  { label: 'React 19 sites in 1 month', value: '1' },
]

export const lessons = [
  'Build reusable components from day one — they pay off on the second feature.',
  'Always handle API errors gracefully; users blame the UI, not the server.',
  'Responsive design is not an afterthought — design mobile-first.',
  'Clear communication beats clever code when working in a team.',
]

export const funFacts = [
  'Coffee is my debugging companion ☕',
  'I love turning messy ideas into clean interfaces.',
  'Currently teaching myself Node.js and cloud fundamentals.',
  'I enjoy experimenting with AI tools to ship faster.',
]

export const terminalCommands: Record<string, string> = {
  help: 'Available commands: help, about, skills, projects, contact, clear',
  about: 'Indera — Frontend Developer at Vinbytes Technologies. React/Next.js/TS. Team lead on EMS.',
  skills: techStack.map((t) => t.name).join(', '),
  projects: projects.map((p) => p.title).join(' | '),
  contact: 'Email: inderabharati@gmail.com | LinkedIn: linkedin.com/in/indera-bharati',
}
