import { motion } from 'framer-motion'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Skills from '../components/sections/Skills'
import Experience from '../components/sections/Experience'
import Education from '../components/sections/Education'
import GitHubDashboard from '../components/sections/GitHubDashboard'
import Certificates from '../components/sections/Certificates'
import TimelineSection from '../components/sections/TimelineSection'
import BlogSection from '../components/sections/BlogSection'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <GitHubDashboard />
      <Certificates />
      <TimelineSection />
      <BlogSection />
      <Contact />
    </motion.div>
  )
}
