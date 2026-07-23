import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Project {
  id: string
  title: string
  goal: string
  work: string
  outcome: string
  techStack: string[]
  githubUrl: string
  liveUrl?: string
  category: string
}

const projects: Project[] = [
  {
    id: '1',
    title: 'AWS Highly Available Web Infrastructure',
    goal: 'Build a fault-tolerant, production-grade web infrastructure on AWS with zero single point of failure.',
    work: 'Designed a custom VPC with public/private subnets across 2 AZs. Deployed EC2 instances with IAM roles behind an ALB with Auto Scaling. Attached EFS for shared storage, RDS for backend database, and CloudWatch for full observability — following AWS Well-Architected best practices.',
    outcome: 'Fault-tolerant architecture that auto-scales under load, survives AZ outages, and provides full monitoring visibility.',
    techStack: ['AWS', 'EC2', 'VPC', 'IAM', 'ALB', 'Auto Scaling', 'RDS', 'CloudWatch'],
    githubUrl: 'https://github.com/shubhu-io',
    category: 'cloud',
  },
  {
    id: '2',
    title: 'Infrastructure Automation with Terraform',
    goal: 'Eliminate manual provisioning by automating end-to-end cloud infrastructure deployment with reusable IaC.',
    work: 'Wrote modular Terraform configurations for EC2, VPC, IAM, Security Groups, S3, EBS, EFS, ALB, and Auto Scaling. Used S3 + DynamoDB for remote state management with state locking, and parameterized modules for environment reuse.',
    outcome: 'Full infrastructure provisioned or destroyed with a single command — consistent, repeatable, and audit-ready.',
    techStack: ['Terraform', 'AWS', 'IaC', 'VPC', 'EC2', 'S3', 'IAM'],
    githubUrl: 'https://github.com/shubhu-io',
    category: 'devops',
  },
  {
    id: '3',
    title: 'CloudVault - Automated Backup & DR',
    goal: 'Build an automated backup pipeline with versioning and a fast restore workflow for critical data.',
    work: 'Created a PowerShell + AWS S3 system that compresses, uploads, and versions data. Added EFS snapshot automation and a restore script for rapid recovery from accidental deletion, corruption, or system failure.',
    outcome: 'Automated daily backups with 30-day version history; one-command restore in under 5 minutes.',
    techStack: ['AWS S3', 'PowerShell', 'Linux', 'EFS', 'Automation'],
    githubUrl: 'https://github.com/shubhu-io/CloudVault-DR-Automation',
    category: 'devops',
  },
]

const filters = [
  { key: 'all', label: 'All', icon: '📌' },
  { key: 'cloud', label: 'Cloud', icon: '☁️' },
  { key: 'devops', label: 'DevOps', icon: '🚀' },
]

const accentColors: Record<string, string> = {
  cloud: 'border-l-blue-500',
  devops: 'border-l-purple-500',
}

const dotColors: Record<string, string> = {
  cloud: 'bg-blue-500',
  devops: 'bg-purple-500',
}

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.12, duration: 0.5, ease: 'easeOut' },
  }),
}

const lineVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.2 + i * 0.08, duration: 0.4, ease: 'easeOut' },
  }),
}

const tagVariants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: 0.5 + i * 0.035, duration: 0.3, ease: 'backOut' },
  }),
}

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mb-8">Real infrastructure I've designed, built, and automated</p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filters.map(f => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer
                ${filter === f.key
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25 scale-105'
                  : 'bg-gray-100 dark:bg-[#21262d] text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-[#30363d] border border-gray-200 dark:border-[#30363d]'
                }`}
            >
              <span className="mr-1">{f.icon}</span>
              {f.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((project, pIdx) => {
              const accent = accentColors[project.category] || 'border-l-blue-500'
              const dot = dotColors[project.category] || 'bg-blue-500'

              return (
                <motion.div
                  key={project.id}
                  custom={pIdx}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  whileHover={{ y: -5, transition: { duration: 0.25 } }}
                  className={`card-glow relative overflow-hidden group border-l-4 ${accent} transition-shadow duration-300 hover:shadow-xl`}
                >
                  <div className="p-5">
                    <div className="flex items-start gap-3 mb-4">
                      <span className={`w-2 h-2 rounded-full ${dot} mt-1.5 flex-shrink-0`} />
                      <h3 className="text-base font-bold text-white leading-snug group-hover:text-blue-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>

                    <div className="space-y-3">
                      <motion.div custom={0} variants={lineVariants} className="flex items-start gap-2.5">
                        <span className="text-sm flex-shrink-0 mt-0.5">🎯</span>
                        <p className="text-xs text-gray-400 leading-relaxed">
                          <span className="text-gray-500 font-medium">Goal: </span>
                          {project.goal}
                        </p>
                      </motion.div>

                      <motion.div custom={1} variants={lineVariants} className="flex items-start gap-2.5">
                        <span className="text-sm flex-shrink-0 mt-0.5">🛠️</span>
                        <p className="text-xs text-gray-400 leading-relaxed">
                          <span className="text-gray-500 font-medium">What I did: </span>
                          {project.work}
                        </p>
                      </motion.div>

                      <motion.div custom={2} variants={lineVariants} className="flex items-start gap-2.5">
                        <span className="text-sm flex-shrink-0 mt-0.5">✅</span>
                        <p className="text-xs text-gray-400 leading-relaxed">
                          <span className="text-gray-500 font-medium">Outcome: </span>
                          {project.outcome}
                        </p>
                      </motion.div>
                    </div>

                    <motion.div className="flex flex-wrap gap-1.5 mt-4 mb-4">
                      {project.techStack.map((tech, tIdx) => (
                        <motion.span
                          key={tech}
                          custom={tIdx}
                          variants={tagVariants}
                          whileHover={{ scale: 1.08, y: -1 }}
                          className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-blue-500/10 text-blue-500 dark:text-blue-400 border border-blue-500/20 cursor-default select-none"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 }}
                      className="flex items-center gap-3 pt-2 border-t border-white/5"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-blue-400 transition-colors duration-200"
                      >
                        <motion.svg
                          className="w-4 h-4"
                          fill="currentColor" viewBox="0 0 24 24"
                          whileHover={{ rotate: -5 }}
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </motion.svg>
                        <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-blue-400 after:transition-all after:duration-300 group-hover/link:after:w-full">
                          View Source
                        </span>
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-green-400 transition-colors duration-200"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Live Demo
                        </a>
                      )}
                    </motion.div>
                  </div>

                  <div
                    className={`absolute -bottom-5 -right-5 w-14 h-14 rounded-full ${dot.replace('bg-', 'bg-').replace('-500', '-500/10')} blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-30 pointer-events-none`}
                  />
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-500 py-12"
          >
            No projects found in this category.
          </motion.p>
        )}
      </div>
    </section>
  )
}
