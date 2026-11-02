import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import TechStack from '@/components/TechStack'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import CurrentlyExploring from '@/components/CurrentlyExploring'
import Dashboard from '@/components/Dashboard'
import LessonsLearned from '@/components/LessonsLearned'
import FunFacts from '@/components/FunFacts'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import CursorEffect from '@/components/CursorEffect'
import LoadingScreen from '@/components/LoadingScreen'
import EasterEgg from '@/components/EasterEgg'

const Terminal = dynamic(() => import('@/components/Terminal'), { ssr: false })

export default function Home() {
  return (
    <main className="min-h-screen">
      <LoadingScreen />
      <CursorEffect />
      <EasterEgg />
      <Navbar />

      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Terminal />
      <CurrentlyExploring />
      <Dashboard />
      <LessonsLearned />
      <FunFacts />
      <Contact />
      <Footer />
    </main>
  )
}
