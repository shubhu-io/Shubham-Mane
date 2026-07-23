import { motion } from 'framer-motion'
import type { Certificate } from '../../types/portfolio'

const certificates: Certificate[] = [
  {
    id: '1',
    title: 'Ubuntu Linux Professional',
    issuer: 'Canonical',
    date: '',
    url: 'https://canonical.com/',
  },
  {
    id: '2',
    title: 'DevOps Foundations',
    issuer: 'LinkedIn Learning',
    date: '',
    url: 'https://www.linkedin.com/learning/',
  },
  {
    id: '3',
    title: 'Wells Fargo Software Engineering Job Simulation',
    issuer: 'Forage',
    date: '',
    url: 'https://www.theforage.com/',
  },
  {
    id: '4',
    title: 'Using Python to Interact with the Operating System',
    issuer: 'Google',
    date: '',
    url: 'https://www.coursera.org/',
  },
  {
    id: '5',
    title: 'Learning GitHub',
    issuer: 'LinkedIn Learning',
    date: '',
    url: 'https://www.linkedin.com/learning/',
  },
]

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subtitle">Professional certifications I hold</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certificates.map((cert, idx) => (
            <motion.a
              key={cert.id}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="card-glow text-center group"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {cert.title}
              </h3>
              <p className="text-xs text-gray-500">{cert.issuer}</p>
              <p className="text-xs text-gray-400 mt-1">{cert.date}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
