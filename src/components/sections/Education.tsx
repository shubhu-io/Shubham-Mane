import { motion } from 'framer-motion'
import type { Education as EducationType } from '../../types/portfolio'

const educationList: EducationType[] = [
  {
    id: '1',
    institution: 'P.E.S. College of Engineering, Chhatrapati Sambhaji Nagar',
    degree: 'B.Tech, Computer Science',
    period: '2021 - 2025',
    description:
      'Graduated with a strong foundation in computer science, cloud computing, and infrastructure automation.',
    gpa: '7.65',
  },
  {
    id: '2',
    institution: 'Milind College of Science, Chhatrapati Sambhaji Nagar',
    degree: 'Higher Secondary Certificate (H.S.C.)',
    period: '',
    description: 'Completed higher secondary education in science.',
  },
  {
    id: '3',
    institution: 'Little Flower High School, Chhatrapati Sambhaji Nagar',
    degree: 'Secondary School Certificate (S.S.C.)',
    period: '',
    description: 'Completed secondary education.',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle">My academic background</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {educationList.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="card-glow"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {edu.period}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-1">{edu.degree}</h3>
              <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-2">
                {edu.institution}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                {edu.description}
              </p>
              {edu.gpa && (
                <span className="inline-block px-2 py-0.5 text-xs rounded bg-green-500/10 text-green-600 dark:text-green-400">
                  GPA: {edu.gpa}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
