import { motion } from 'framer-motion'
import type { Experience as ExperienceType } from '../../types/portfolio'

const experiences: ExperienceType[] = [
  {
    id: '1',
    company: 'NDI Techsys',
    role: 'AI/ML Intern',
    period: 'Jan 2025',
    description:
      'Maintained technical documentation and tracked project tasks across the SDLC. Contributed to data handling and analytical model workflows, supporting experimentation, evaluation, and reproducibility of results.',
    techStack: ['Python', 'Data Analysis', 'Documentation', 'SDLC'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">My professional journey</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200 dark:bg-[#30363d]" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative pl-16"
              >
                <div className="absolute left-6 top-2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-[#0d1117]" />

                <div className="card-glow">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold">{exp.role}</h3>
                      <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 px-3 py-1 rounded-full bg-gray-100 dark:bg-[#21262d]">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs rounded bg-blue-500/10 text-blue-600 dark:text-blue-400"
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
      </div>
    </section>
  )
}
