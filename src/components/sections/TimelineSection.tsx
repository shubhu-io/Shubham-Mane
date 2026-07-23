import { motion } from 'framer-motion'
import type { TimelineItem } from '../../types/portfolio'

const items: TimelineItem[] = [
  {
    id: '1',
    title: 'AI/ML Intern',
    subtitle: 'NDI Techsys',
    period: 'Jan 2025',
    description: 'Maintained technical documentation, tracked SDLC tasks, and contributed to data handling and analytical model workflows.',
    type: 'work',
  },
  {
    id: '2',
    title: 'CloudVault - Automated Backup & DR',
    subtitle: 'Personal Cloud Project',
    period: '2024',
    description: 'Built automated backup and disaster-recovery pipeline using AWS S3 and PowerShell.',
    type: 'achievement',
  },
  {
    id: '3',
    title: 'Infrastructure Automation with Terraform',
    subtitle: 'Personal Cloud Lab',
    period: '2024',
    description: 'Automated end-to-end provisioning of AWS resources using Terraform with modular, reusable modules.',
    type: 'achievement',
  },
  {
    id: '4',
    title: 'AWS Highly Available Web Infrastructure',
    subtitle: 'Personal Cloud Lab',
    period: '2024',
    description: 'Designed custom VPC, EC2, ALB, Auto Scaling, RDS, and CloudWatch monitoring per AWS Well-Architected practices.',
    type: 'achievement',
  },
  {
    id: '5',
    title: 'B.Tech, Computer Science',
    subtitle: 'P.E.S. College of Engineering',
    period: '2021 - 2025',
    description: 'Graduated with CGPA 7.65. Strong foundation in cloud computing and infrastructure automation.',
    type: 'education',
  },
]

const typeConfig = {
  work: { icon: '💼', color: 'bg-blue-500' },
  education: { icon: '🎓', color: 'bg-green-500' },
  achievement: { icon: '🏆', color: 'bg-purple-500' },
}

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title text-center">
            My <span className="gradient-text">Timeline</span>
          </h2>
          <p className="section-subtitle text-center">The journey so far</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200 dark:bg-[#30363d]" />

          <div className="space-y-8">
            {items.map((item, idx) => {
              const config = typeConfig[item.type]
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="relative pl-16"
                >
                  <div
                    className={`absolute left-4 top-1 w-5 h-5 rounded-full ${config.color} border-4 border-white dark:border-[#0d1117] flex items-center justify-center text-[8px]`}
                  >
                    {config.icon}
                  </div>

                  <div className="card-glow">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-base font-semibold">{item.title}</h3>
                        <p className="text-sm text-blue-600 dark:text-blue-400">
                          {item.subtitle}
                        </p>
                      </div>
                      <span className="text-xs text-gray-500 whitespace-nowrap px-2 py-1 rounded bg-gray-100 dark:bg-[#21262d]">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
