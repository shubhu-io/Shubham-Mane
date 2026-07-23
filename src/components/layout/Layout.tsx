import { Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollProgress from '../ui/ScrollProgress'
import BackToTop from '../ui/BackToTop'
import ParticleBackground from '../ui/ParticleBackground'

export default function Layout() {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <ScrollProgress />
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="relative z-10 pt-16"
      >
        <Outlet />
      </motion.main>
      <Footer />
      <BackToTop />
    </div>
  )
}
