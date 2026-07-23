import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const categories = [
  {
    key: 'aws',
    label: 'AWS Cloud',
    subtitle: 'Compute · Networking · Storage · Serverless',
    icon: '☁️',
    span: 'md:col-span-5',
    count: 11,
    sparkline: [40, 55, 45, 65, 50, 70, 85, 75, 90],
    skills: [
      { name: 'EC2', icon: '🖥️', level: 5 },
      { name: 'VPC', icon: '🌐', level: 4 },
      { name: 'IAM', icon: '🔒', level: 5 },
      { name: 'S3', icon: '📦', level: 5 },
      { name: 'EBS / EFS', icon: '💾', level: 4 },
      { name: 'RDS', icon: '🗄️', level: 4 },
      { name: 'Route53', icon: '🔗', level: 3 },
      { name: 'ALB / NLB', icon: '⚖️', level: 4 },
      { name: 'Auto Scaling', icon: '📈', level: 4 },
      { name: 'Lambda', icon: '⚡', level: 4 },
      { name: 'CloudWatch', icon: '📊', level: 4 },
    ],
  },
  {
    key: 'cicd',
    label: 'CI/CD & Version Control',
    subtitle: 'Automation · Pipelines · Collaboration',
    icon: '🔄',
    span: 'md:col-span-4',
    count: 6,
    sparkline: [50, 65, 55, 75, 70, 85],
    skills: [
      { name: 'Git & GitHub', icon: '🔀', level: 5 },
      { name: 'GitHub Actions', icon: '⚙️', level: 4 },
      { name: 'CI/CD Pipelines', icon: '🔄', level: 4 },
      { name: 'Jenkins', icon: '🏗️', level: 3 },
      { name: 'Shell Scripting', icon: '⌨️', level: 4 },
      { name: 'GitHub Pages', icon: '📄', level: 3 },
    ],
  },
  {
    key: 'iac',
    label: 'Infrastructure as Code',
    subtitle: 'Provisioning · Containerization · Orchestration',
    icon: '🏗️',
    span: 'md:col-span-3',
    count: 4,
    sparkline: [35, 55, 45, 65],
    skills: [
      { name: 'Terraform', icon: '🏗️', level: 4 },
      { name: 'Docker', icon: '🐳', level: 4 },
      { name: 'Kubernetes', icon: '☸️', level: 2 },
      { name: 'Ansible', icon: '📜', level: 2 },
    ],
  },
  {
    key: 'lang',
    label: 'Programming Languages',
    subtitle: 'Scripting · Web · Backend',
    icon: '💻',
    span: 'md:col-span-4',
    count: 6,
    sparkline: [60, 70, 55, 75, 65, 80],
    skills: [
      { name: 'Python', icon: '🐍', level: 4 },
      { name: 'JavaScript', icon: '🟨', level: 3 },
      { name: 'TypeScript', icon: '🔷', level: 3 },
      { name: 'HTML / CSS', icon: '🌐', level: 3 },
      { name: 'Java', icon: '☕', level: 2 },
      { name: 'SQL', icon: '🗃️', level: 3 },
    ],
  },
  {
    key: 'cs',
    label: 'CS Fundamentals',
    subtitle: 'Core Engineering Concepts',
    icon: '🎓',
    span: 'md:col-span-4',
    count: 6,
    sparkline: [45, 55, 50, 60, 55, 65],
    skills: [
      { name: 'Data Structures', icon: '📐', level: 3 },
      { name: 'Algorithms', icon: '🧮', level: 3 },
      { name: 'OOP Concepts', icon: '🧩', level: 4 },
      { name: 'Computer Networks', icon: '🌐', level: 3 },
      { name: 'Operating Systems', icon: '⚙️', level: 3 },
      { name: 'DBMS', icon: '🗂️', level: 3 },
    ],
  },
  {
    key: 'tools',
    label: 'Monitoring & Tools',
    subtitle: 'Observability · Productivity · OS',
    icon: '🛠️',
    span: 'md:col-span-4',
    count: 6,
    sparkline: [55, 60, 45, 65, 50, 70],
    skills: [
      { name: 'Linux / Ubuntu', icon: '🐧', level: 4 },
      { name: 'VS Code', icon: '📝', level: 4 },
      { name: 'Prometheus', icon: '📈', level: 2 },
      { name: 'Grafana', icon: '📊', level: 2 },
      { name: 'Jupyter', icon: '📓', level: 3 },
      { name: 'Bash / PowerShell', icon: '⌨️', level: 4 },
    ],
  },
]

type ColorTheme = 'default' | 'neon' | 'ocean' | 'forest' | 'sunset'
type FilterKey = 'all' | 'aws' | 'cicd' | 'iac' | 'lang' | 'cs' | 'tools'

const filters: { key: FilterKey; label: string; icon: string }[] = [
  { key: 'all', label: 'All', icon: '📌' },
  { key: 'aws', label: 'AWS', icon: '☁️' },
  { key: 'cicd', label: 'CI/CD', icon: '🔄' },
  { key: 'iac', label: 'IaC', icon: '🏗️' },
  { key: 'lang', label: 'Languages', icon: '💻' },
  { key: 'cs', label: 'CS Core', icon: '🎓' },
  { key: 'tools', label: 'Tools', icon: '🛠️' },
]

const colorThemes: Record<ColorTheme, Record<string, { gradient: string; border: string; bg: string; text: string; dot: string }>> = {
  default: {
    aws: { gradient: 'from-orange-500 to-red-500', border: 'border-orange-500/30', bg: 'bg-orange-500/10', text: 'text-orange-600 dark:text-orange-400', dot: 'bg-orange-400' },
    cicd: { gradient: 'from-purple-500 to-pink-500', border: 'border-purple-500/30', bg: 'bg-purple-500/10', text: 'text-purple-600 dark:text-purple-400', dot: 'bg-purple-400' },
    iac: { gradient: 'from-blue-500 to-cyan-500', border: 'border-blue-500/30', bg: 'bg-blue-500/10', text: 'text-blue-600 dark:text-blue-400', dot: 'bg-blue-400' },
    lang: { gradient: 'from-green-500 to-emerald-500', border: 'border-green-500/30', bg: 'bg-green-500/10', text: 'text-green-600 dark:text-green-400', dot: 'bg-green-400' },
    cs: { gradient: 'from-cyan-500 to-teal-500', border: 'border-cyan-500/30', bg: 'bg-cyan-500/10', text: 'text-cyan-600 dark:text-cyan-400', dot: 'bg-cyan-400' },
    tools: { gradient: 'from-yellow-500 to-orange-500', border: 'border-yellow-500/30', bg: 'bg-yellow-500/10', text: 'text-yellow-600 dark:text-yellow-400', dot: 'bg-yellow-400' },
  },
  neon: {
    aws: { gradient: 'from-fuchsia-500 to-rose-500', border: 'border-fuchsia-500/40', bg: 'bg-fuchsia-500/15', text: 'text-fuchsia-400 dark:text-fuchsia-300', dot: 'bg-fuchsia-400' },
    cicd: { gradient: 'from-violet-500 to-purple-500', border: 'border-violet-500/40', bg: 'bg-violet-500/15', text: 'text-violet-400 dark:text-violet-300', dot: 'bg-violet-400' },
    iac: { gradient: 'from-cyan-400 to-blue-500', border: 'border-cyan-400/40', bg: 'bg-cyan-400/15', text: 'text-cyan-400 dark:text-cyan-300', dot: 'bg-cyan-400' },
    lang: { gradient: 'from-lime-400 to-green-500', border: 'border-lime-400/40', bg: 'bg-lime-400/15', text: 'text-lime-400 dark:text-lime-300', dot: 'bg-lime-400' },
    cs: { gradient: 'from-teal-400 to-cyan-500', border: 'border-teal-400/40', bg: 'bg-teal-400/15', text: 'text-teal-400 dark:text-teal-300', dot: 'bg-teal-400' },
    tools: { gradient: 'from-amber-400 to-orange-500', border: 'border-amber-400/40', bg: 'bg-amber-400/15', text: 'text-amber-400 dark:text-amber-300', dot: 'bg-amber-400' },
  },
  ocean: {
    aws: { gradient: 'from-blue-600 to-blue-800', border: 'border-blue-500/30', bg: 'bg-blue-500/10', text: 'text-blue-600 dark:text-blue-400', dot: 'bg-blue-400' },
    cicd: { gradient: 'from-indigo-500 to-blue-600', border: 'border-indigo-500/30', bg: 'bg-indigo-500/10', text: 'text-indigo-600 dark:text-indigo-400', dot: 'bg-indigo-400' },
    iac: { gradient: 'from-cyan-500 to-blue-500', border: 'border-cyan-500/30', bg: 'bg-cyan-500/10', text: 'text-cyan-600 dark:text-cyan-400', dot: 'bg-cyan-400' },
    lang: { gradient: 'from-teal-500 to-emerald-600', border: 'border-teal-500/30', bg: 'bg-teal-500/10', text: 'text-teal-600 dark:text-teal-400', dot: 'bg-teal-400' },
    cs: { gradient: 'from-sky-400 to-cyan-500', border: 'border-sky-400/30', bg: 'bg-sky-400/10', text: 'text-sky-600 dark:text-sky-400', dot: 'bg-sky-400' },
    tools: { gradient: 'from-blue-400 to-indigo-500', border: 'border-blue-400/30', bg: 'bg-blue-400/10', text: 'text-blue-600 dark:text-blue-400', dot: 'bg-blue-400' },
  },
  forest: {
    aws: { gradient: 'from-amber-600 to-yellow-600', border: 'border-amber-600/30', bg: 'bg-amber-600/10', text: 'text-amber-600 dark:text-amber-400', dot: 'bg-amber-400' },
    cicd: { gradient: 'from-emerald-500 to-green-600', border: 'border-emerald-500/30', bg: 'bg-emerald-500/10', text: 'text-emerald-600 dark:text-emerald-400', dot: 'bg-emerald-400' },
    iac: { gradient: 'from-green-600 to-emerald-700', border: 'border-green-600/30', bg: 'bg-green-600/10', text: 'text-green-600 dark:text-green-400', dot: 'bg-green-400' },
    lang: { gradient: 'from-lime-500 to-green-500', border: 'border-lime-500/30', bg: 'bg-lime-500/10', text: 'text-lime-600 dark:text-lime-400', dot: 'bg-lime-400' },
    cs: { gradient: 'from-teal-600 to-emerald-600', border: 'border-teal-600/30', bg: 'bg-teal-600/10', text: 'text-teal-600 dark:text-teal-400', dot: 'bg-teal-400' },
    tools: { gradient: 'from-yellow-600 to-amber-700', border: 'border-yellow-600/30', bg: 'bg-yellow-600/10', text: 'text-yellow-600 dark:text-yellow-400', dot: 'bg-yellow-400' },
  },
  sunset: {
    aws: { gradient: 'from-red-500 to-rose-500', border: 'border-red-500/30', bg: 'bg-red-500/10', text: 'text-red-600 dark:text-red-400', dot: 'bg-red-400' },
    cicd: { gradient: 'from-pink-500 to-rose-500', border: 'border-pink-500/30', bg: 'bg-pink-500/10', text: 'text-pink-600 dark:text-pink-400', dot: 'bg-pink-400' },
    iac: { gradient: 'from-orange-500 to-red-500', border: 'border-orange-500/30', bg: 'bg-orange-500/10', text: 'text-orange-600 dark:text-orange-400', dot: 'bg-orange-400' },
    lang: { gradient: 'from-amber-500 to-orange-500', border: 'border-amber-500/30', bg: 'bg-amber-500/10', text: 'text-amber-600 dark:text-amber-400', dot: 'bg-amber-400' },
    cs: { gradient: 'from-rose-400 to-pink-500', border: 'border-rose-400/30', bg: 'bg-rose-400/10', text: 'text-rose-600 dark:text-rose-400', dot: 'bg-rose-400' },
    tools: { gradient: 'from-yellow-500 to-amber-500', border: 'border-yellow-500/30', bg: 'bg-yellow-500/10', text: 'text-yellow-600 dark:text-yellow-400', dot: 'bg-yellow-400' },
  },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.25 } },
}

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.7, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.04, duration: 0.3, ease: 'backOut' },
  }),
}

const skillLevelColor = (level: number) => {
  if (level >= 4) return 'bg-green-500'
  if (level >= 3) return 'bg-yellow-500'
  return 'bg-gray-500'
}

const levelLabel = (level: number) => {
  if (level >= 5) return 'Expert'
  if (level >= 4) return 'Advanced'
  if (level >= 3) return 'Proficient'
  if (level >= 2) return 'Intermediate'
  return 'Beginner'
}

function Sparkline({ data, color }: { data: number[]; color: string }) {
  const w = 60
  const h = 24
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1
  const stepX = w / (data.length - 1)
  const points = data.map((d, i) => `${i * stepX},${h - ((d - min) / range) * (h - 4) - 2}`).join(' ')

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="flex-shrink-0">
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="opacity-70"
      />
      <polyline
        points={`0,${h - 2} ${points} ${w},${h - 2}`}
        fill={color}
        className="opacity-10"
      />
    </svg>
  )
}

export default function Skills() {
  const [colorTheme, setColorTheme] = useState<ColorTheme>('default')
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all')

  const theme = colorThemes[colorTheme]

  const filtered = activeFilter === 'all'
    ? categories
    : categories.filter(c => c.key === activeFilter)

  const getTheme = (key: string) => theme[key as keyof typeof theme] ?? theme.aws
  const getColor = (key: string) => {
    const t = getTheme(key)
    const colorMap: Record<string, string> = {
      'bg-orange-400': '#fb923c', 'bg-purple-400': '#c084fc', 'bg-blue-400': '#60a5fa',
      'bg-green-400': '#4ade80', 'bg-cyan-400': '#22d3ee', 'bg-yellow-400': '#fbbf24',
      'bg-fuchsia-400': '#e879f9', 'bg-violet-400': '#a78bfa', 'bg-lime-400': '#a3e635',
      'bg-teal-400': '#2dd4bf', 'bg-amber-400': '#fbbf24', 'bg-sky-400': '#38bdf8',
      'bg-indigo-400': '#818cf8', 'bg-emerald-400': '#34d399', 'bg-rose-400': '#fb7185',
      'bg-red-400': '#f87171',
    }
    return colorMap[t.dot] ?? '#60a5fa'
  }

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle mb-8">
            <span className="inline-flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-current" />
              39 technologies across 6 domains
              <span className="w-1 h-1 rounded-full bg-current" />
            </span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
            <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Filter</span>
            <div className="flex flex-wrap gap-1.5">
              {filters.map(f => (
                <button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer
                    ${activeFilter === f.key
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25 scale-105'
                      : 'bg-gray-100 dark:bg-[#21262d] text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-[#30363d] border border-gray-200 dark:border-[#30363d]'
                    }`}
                >
                  <span className="mr-1">{f.icon}</span>
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-2">
            <span className="text-xs text-gray-500 font-medium uppercase tracking-wider mr-1">Theme</span>
            <div className="flex gap-1.5">
              {(['default', 'neon', 'ocean', 'forest', 'sunset'] as ColorTheme[]).map(t => (
                <button
                  key={t}
                  onClick={() => setColorTheme(t)}
                  className={`w-7 h-7 rounded-full transition-all duration-200 cursor-pointer
                    ${colorTheme === t ? 'ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-[#0d1117] scale-110' : 'opacity-60 hover:opacity-100'}
                  `}
                  style={{
                    background: t === 'default' ? 'linear-gradient(135deg, #f97316, #ef4444)' :
                                 t === 'neon' ? 'linear-gradient(135deg, #d946ef, #f43f5e)' :
                                 t === 'ocean' ? 'linear-gradient(135deg, #0ea5e9, #3b82f6)' :
                                 t === 'forest' ? 'linear-gradient(135deg, #84cc16, #22c55e)' :
                                 'linear-gradient(135deg, #f59e0b, #ef4444)',
                  }}
                  title={t.charAt(0).toUpperCase() + t.slice(1)}
                />
              ))}
            </div>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${colorTheme}-${activeFilter}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-12 gap-4"
          >
            {filtered.map((cat) => {
              const t = getTheme(cat.key)
              const lineColor = getColor(cat.key)

              return (
                <motion.div
                  key={cat.key}
                  variants={cardVariants}
                  className={`card-glow ${cat.span} relative overflow-hidden group`}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(600px circle at 50% 0%, ${t.dot.replace('bg-', '').replace('-400', '')}10, transparent 50%)`,
                    }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between px-4 pt-4 pb-3 border-b border-white/5">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className={`w-10 h-10 rounded-lg ${t.bg} border ${t.border} flex items-center justify-center text-lg flex-shrink-0`}>
                          {cat.icon}
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-sm font-bold text-white flex items-center gap-2">
                            {cat.label}
                            <span className={`text-[10px] font-mono font-normal px-1.5 py-0.5 rounded ${t.bg} ${t.text}`}>
                              {cat.count}
                            </span>
                          </h3>
                          <p className="text-[10px] text-white/50 mt-px font-mono">{cat.subtitle}</p>
                        </div>
                      </div>
                      <Sparkline data={cat.sparkline} color={lineColor} />
                    </div>

                    <div className="p-4">
                      <div className="flex flex-wrap gap-2">
                        {cat.skills.map((skill, sIdx) => (
                          <motion.div
                            key={skill.name}
                            custom={sIdx}
                            variants={badgeVariants}
                            className="group/badge relative"
                          >
                            <div
                              className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-[11px] font-medium
                                ${t.bg} ${t.text} border ${t.border}
                                hover:border-opacity-60 hover:shadow-lg hover:shadow-current/10
                                transition-all duration-200 cursor-default select-none`}
                            >
                              <span className={`w-1.5 h-1.5 rounded-full ${skillLevelColor(skill.level)} flex-shrink-0`} />
                              <span className="leading-none">{skill.icon}</span>
                              <span>{skill.name}</span>
                            </div>

                            <div className="absolute -bottom-0.5 left-0 right-0 h-[2px] rounded-full bg-white/5 overflow-hidden opacity-0 group-hover/badge:opacity-100 transition-opacity duration-200">
                              <motion.div
                                className={`h-full rounded-full ${t.dot.replace('bg-', 'bg-')}`}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${(skill.level / 5) * 100}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, ease: 'easeOut' }}
                              />
                            </div>

                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-gray-900 dark:bg-[#21262d] border border-gray-700 text-[10px] text-white whitespace-nowrap opacity-0 group-hover/badge:opacity-100 transition-opacity duration-200 pointer-events-none">
                              {levelLabel(skill.level)} · {skill.level}/5
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`absolute -bottom-4 -right-4 w-12 h-12 rounded-full ${t.bg} opacity-5 blur-xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-15 pointer-events-none`}
                  />
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-8 text-[11px] text-gray-500 dark:text-gray-500 font-mono"
        >
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-500" /> Advanced / Expert
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-yellow-500" /> Proficient
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-gray-500" /> Intermediate
          </span>
        </motion.div>
      </div>
    </section>
  )
}
