import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'

interface Project {
  id: string
  title: string
  description: string
  image: string
  techStack: string[]
  githubUrl: string
  liveUrl?: string
  category: string
  stars: number
  forks: number
}

const projects: Project[] = [
  {
    id: '1',
    title: 'AWS Highly Available Web Infrastructure',
    description: 'Designed a custom VPC with public/private subnets, EC2 instances with IAM roles, ALB with Auto Scaling, EBS/EFS storage, RDS backend, and CloudWatch monitoring — all per AWS Well-Architected practices.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
    techStack: ['AWS', 'EC2', 'VPC', 'IAM', 'ALB', 'Auto Scaling', 'RDS', 'CloudWatch'],
    githubUrl: 'https://github.com/shubhu-io',
    category: 'backend',
    stars: 0,
    forks: 0,
  },
  {
    id: '2',
    title: 'Infrastructure Automation with Terraform',
    description: 'Automated end-to-end provisioning of EC2, VPC, IAM, Security Groups, S3, EBS, EFS, ALB, and Auto Scaling resources using Terraform with modular, reusable modules and remote state management.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop',
    techStack: ['Terraform', 'AWS', 'IaC', 'VPC', 'EC2', 'S3', 'IAM'],
    githubUrl: 'https://github.com/shubhu-io',
    category: 'backend',
    stars: 0,
    forks: 0,
  },
  {
    id: '3',
    title: 'CloudVault - Automated Backup & DR',
    description: 'Built an automated backup and disaster-recovery pipeline using AWS S3 and PowerShell that compresses, uploads, and versions data, with a restore workflow for fast recovery from data loss or system failure.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
    techStack: ['AWS S3', 'PowerShell', 'Linux', 'EFS', 'Automation'],
    githubUrl: 'https://github.com/shubhu-io/CloudVault-DR-Automation',
    category: 'backend',
    stars: 0,
    forks: 0,
  },
]

const categories = ['all', 'frontend', 'backend', 'fullstack', 'ai', 'cloud', 'devops']

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState<'stars' | 'updated' | 'name'>('stars')

  const filtered = useMemo(() => {
    let result = [...projects]

    if (filter !== 'all') {
      result = result.filter((p) => p.category === filter)
    }

    if (search) {
      const q = search.toLowerCase()
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.techStack.some((t) => t.toLowerCase().includes(q)),
      )
    }

    result.sort((a, b) => {
      if (sort === 'stars') return b.stars - a.stars
      if (sort === 'name') return a.title.localeCompare(b.title)
      return 0
    })

    return result
  }, [filter, search, sort])

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">Some things I've built</p>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg glass border border-gray-200 dark:border-[#30363d] focus:border-blue-500 outline-none text-sm"
            />
          </div>
          <div className="flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                  filter === cat
                    ? 'bg-blue-600 text-white'
                    : 'glass glass-hover text-gray-600 dark:text-gray-400'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as typeof sort)}
            className="px-3 py-2 rounded-lg glass border border-gray-200 dark:border-[#30363d] text-sm outline-none"
          >
            <option value="stars">Most Stars</option>
            <option value="name">Name</option>
          </select>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="card-glow group overflow-hidden"
            >
              <div className="relative h-44 -mx-6 -mt-6 mb-4 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-[#161b22]/80 to-transparent" />
                <div className="absolute bottom-3 left-3 flex gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-1 text-xs rounded bg-white/90 dark:bg-[#21262d]/90 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-1 text-xs rounded bg-white/90 dark:bg-[#21262d]/90 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Source
                  </a>
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-[10px] rounded bg-blue-500/10 text-blue-600 dark:text-blue-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  {project.stars}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  {project.forks}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 py-12">No projects found matching your criteria.</p>
        )}
      </div>
    </section>
  )
}
