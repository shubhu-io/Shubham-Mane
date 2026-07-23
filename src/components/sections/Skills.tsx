import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const categories = [
  {
    key: 'aws',
    label: 'AWS Cloud',
    subtitle: 'Compute · Networking · Storage · Serverless',
    icon: '☁️',
    defaultTheme: {
      gradient: 'from-orange-500 to-red-500',
      border: 'border-orange-500/30',
      bg: 'bg-orange-500/10',
      text: 'text-orange-600 dark:text-orange-400',
    },
    skills: [
      { name: 'EC2', icon: '🖥️' },
      { name: 'VPC', icon: '🌐' },
      { name: 'IAM', icon: '🔒' },
      { name: 'S3', icon: '📦' },
      { name: 'EBS / EFS', icon: '💾' },
      { name: 'RDS', icon: '🗄️' },
      { name: 'Route53', icon: '🔗' },
      { name: 'ALB / NLB', icon: '⚖️' },
      { name: 'Auto Scaling', icon: '📈' },
      { name: 'Lambda', icon: '⚡' },
      { name: 'CloudWatch', icon: '📊' },
    ],
    span: 'md:col-span-4',
    count: 11,
  },
  {
    key: 'cicd',
    label: 'CI/CD & Version Control',
    subtitle: 'Automation · Pipelines · Collaboration',
    icon: '🔄',
    defaultTheme: {
      gradient: 'from-purple-500 to-pink-500',
      border: 'border-purple-500/30',
      bg: 'bg-purple-500/10',
      text: 'text-purple-600 dark:text-purple-400',
    },
    skills: [
      { name: 'Git & GitHub', icon: '🔀' },
      { name: 'GitHub Actions', icon: '⚙️' },
      { name: 'CI/CD Pipelines', icon: '🔄' },
      { name: 'Jenkins', icon: '🏗️' },
      { name: 'Shell Scripting', icon: '⌨️' },
      { name: 'GitHub Pages', icon: '📄' },
    ],
    span: 'md:col-span-2',
    count: 6,
  },
  {
    key: 'iac',
    label: 'Infrastructure as Code',
    subtitle: 'Provisioning · Containerization · Orchestration',
    icon: '🏗️',
    defaultTheme: {
      gradient: 'from-blue-500 to-cyan-500',
      border: 'border-blue-500/30',
      bg: 'bg-blue-500/10',
      text: 'text-blue-600 dark:text-blue-400',
    },
    skills: [
      { name: 'Terraform', icon: '🏗️' },
      { name: 'Docker', icon: '🐳' },
      { name: 'Kubernetes', icon: '☸️' },
      { name: 'Ansible', icon: '📜' },
    ],
    span: 'md:col-span-2',
    count: 4,
  },
  {
    key: 'lang',
    label: 'Programming Languages',
    subtitle: 'Scripting · Web · Backend',
    icon: '💻',
    defaultTheme: {
      gradient: 'from-green-500 to-emerald-500',
      border: 'border-green-500/30',
      bg: 'bg-green-500/10',
      text: 'text-green-600 dark:text-green-400',
    },
    skills: [
      { name: 'Python', icon: '🐍' },
      { name: 'JavaScript', icon: '🟨' },
      { name: 'TypeScript', icon: '🔷' },
      { name: 'HTML / CSS', icon: '🌐' },
      { name: 'Java', icon: '☕' },
      { name: 'SQL', icon: '🗃️' },
    ],
    span: 'md:col-span-2',
    count: 6,
  },
  {
    key: 'cs',
    label: 'CS Fundamentals',
    subtitle: 'Core Engineering Concepts',
    icon: '🎓',
    defaultTheme: {
      gradient: 'from-cyan-500 to-teal-500',
      border: 'border-cyan-500/30',
      bg: 'bg-cyan-500/10',
      text: 'text-cyan-600 dark:text-cyan-400',
    },
    skills: [
      { name: 'Data Structures', icon: '📐' },
      { name: 'Algorithms', icon: '🧮' },
      { name: 'OOP Concepts', icon: '🧩' },
      { name: 'Computer Networks', icon: '🌐' },
      { name: 'Operating Systems', icon: '⚙️' },
      { name: 'DBMS', icon: '🗂️' },
    ],
    span: 'md:col-span-3',
    count: 6,
  },
  {
    key: 'tools',
    label: 'Monitoring & Tools',
    subtitle: 'Observability · Productivity · OS',
    icon: '🛠️',
    defaultTheme: {
      gradient: 'from-yellow-500 to-orange-500',
      border: 'border-yellow-500/30',
      bg: 'bg-yellow-500/10',
      text: 'text-yellow-600 dark:text-yellow-400',
    },
    skills: [
      { name: 'Linux / Ubuntu', icon: '🐧' },
      { name: 'VS Code', icon: '📝' },
      { name: 'Prometheus', icon: '📈' },
      { name: 'Grafana', icon: '📊' },
      { name: 'Jupyter', icon: '📓' },
      { name: 'Bash / PowerShell', icon: '⌨️' },
    ],
    span: 'md:col-span-3',
    count: 6,
  },
]

type ViewMode = 'grid' | 'compact' | 'list'
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

const colorThemes: Record<ColorTheme, Record<string, { gradient: string; border: string; bg: string; text: string }>> = {
  default: {
    aws: { gradient: 'from-orange-500 to-red-500', border: 'border-orange-500/30', bg: 'bg-orange-500/10', text: 'text-orange-600 dark:text-orange-400' },
    cicd: { gradient: 'from-purple-500 to-pink-500', border: 'border-purple-500/30', bg: 'bg-purple-500/10', text: 'text-purple-600 dark:text-purple-400' },
    iac: { gradient: 'from-blue-500 to-cyan-500', border: 'border-blue-500/30', bg: 'bg-blue-500/10', text: 'text-blue-600 dark:text-blue-400' },
    lang: { gradient: 'from-green-500 to-emerald-500', border: 'border-green-500/30', bg: 'bg-green-500/10', text: 'text-green-600 dark:text-green-400' },
    cs: { gradient: 'from-cyan-500 to-teal-500', border: 'border-cyan-500/30', bg: 'bg-cyan-500/10', text: 'text-cyan-600 dark:text-cyan-400' },
    tools: { gradient: 'from-yellow-500 to-orange-500', border: 'border-yellow-500/30', bg: 'bg-yellow-500/10', text: 'text-yellow-600 dark:text-yellow-400' },
  },
  neon: {
    aws: { gradient: 'from-fuchsia-500 to-rose-500', border: 'border-fuchsia-500/40', bg: 'bg-fuchsia-500/15', text: 'text-fuchsia-400 dark:text-fuchsia-300' },
    cicd: { gradient: 'from-violet-500 to-purple-500', border: 'border-violet-500/40', bg: 'bg-violet-500/15', text: 'text-violet-400 dark:text-violet-300' },
    iac: { gradient: 'from-cyan-400 to-blue-500', border: 'border-cyan-400/40', bg: 'bg-cyan-400/15', text: 'text-cyan-400 dark:text-cyan-300' },
    lang: { gradient: 'from-lime-400 to-green-500', border: 'border-lime-400/40', bg: 'bg-lime-400/15', text: 'text-lime-400 dark:text-lime-300' },
    cs: { gradient: 'from-teal-400 to-cyan-500', border: 'border-teal-400/40', bg: 'bg-teal-400/15', text: 'text-teal-400 dark:text-teal-300' },
    tools: { gradient: 'from-amber-400 to-orange-500', border: 'border-amber-400/40', bg: 'bg-amber-400/15', text: 'text-amber-400 dark:text-amber-300' },
  },
  ocean: {
    aws: { gradient: 'from-blue-600 to-blue-800', border: 'border-blue-500/30', bg: 'bg-blue-500/10', text: 'text-blue-600 dark:text-blue-400' },
    cicd: { gradient: 'from-indigo-500 to-blue-600', border: 'border-indigo-500/30', bg: 'bg-indigo-500/10', text: 'text-indigo-600 dark:text-indigo-400' },
    iac: { gradient: 'from-cyan-500 to-blue-500', border: 'border-cyan-500/30', bg: 'bg-cyan-500/10', text: 'text-cyan-600 dark:text-cyan-400' },
    lang: { gradient: 'from-teal-500 to-emerald-600', border: 'border-teal-500/30', bg: 'bg-teal-500/10', text: 'text-teal-600 dark:text-teal-400' },
    cs: { gradient: 'from-sky-400 to-cyan-500', border: 'border-sky-400/30', bg: 'bg-sky-400/10', text: 'text-sky-600 dark:text-sky-400' },
    tools: { gradient: 'from-blue-400 to-indigo-500', border: 'border-blue-400/30', bg: 'bg-blue-400/10', text: 'text-blue-600 dark:text-blue-400' },
  },
  forest: {
    aws: { gradient: 'from-amber-600 to-yellow-600', border: 'border-amber-600/30', bg: 'bg-amber-600/10', text: 'text-amber-600 dark:text-amber-400' },
    cicd: { gradient: 'from-emerald-500 to-green-600', border: 'border-emerald-500/30', bg: 'bg-emerald-500/10', text: 'text-emerald-600 dark:text-emerald-400' },
    iac: { gradient: 'from-green-600 to-emerald-700', border: 'border-green-600/30', bg: 'bg-green-600/10', text: 'text-green-600 dark:text-green-400' },
    lang: { gradient: 'from-lime-500 to-green-500', border: 'border-lime-500/30', bg: 'bg-lime-500/10', text: 'text-lime-600 dark:text-lime-400' },
    cs: { gradient: 'from-teal-600 to-emerald-600', border: 'border-teal-600/30', bg: 'bg-teal-600/10', text: 'text-teal-600 dark:text-teal-400' },
    tools: { gradient: 'from-yellow-600 to-amber-700', border: 'border-yellow-600/30', bg: 'bg-yellow-600/10', text: 'text-yellow-600 dark:text-yellow-400' },
  },
  sunset: {
    aws: { gradient: 'from-red-500 to-rose-500', border: 'border-red-500/30', bg: 'bg-red-500/10', text: 'text-red-600 dark:text-red-400' },
    cicd: { gradient: 'from-pink-500 to-rose-500', border: 'border-pink-500/30', bg: 'bg-pink-500/10', text: 'text-pink-600 dark:text-pink-400' },
    iac: { gradient: 'from-orange-500 to-red-500', border: 'border-orange-500/30', bg: 'bg-orange-500/10', text: 'text-orange-600 dark:text-orange-400' },
    lang: { gradient: 'from-amber-500 to-orange-500', border: 'border-amber-500/30', bg: 'bg-amber-500/10', text: 'text-amber-600 dark:text-amber-400' },
    cs: { gradient: 'from-rose-400 to-pink-500', border: 'border-rose-400/30', bg: 'bg-rose-400/10', text: 'text-rose-600 dark:text-rose-400' },
    tools: { gradient: 'from-yellow-500 to-amber-500', border: 'border-yellow-500/30', bg: 'bg-yellow-500/10', text: 'text-yellow-600 dark:text-yellow-400' },
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
  hidden: { opacity: 0, y: 40, rotateX: 5 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.25 } },
}

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.6, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.04, duration: 0.35, ease: 'backOut' },
  }),
}

const floatingIcon = (icon: string, top: string, left: string, delay: number) => (
  <motion.span
    key={`${top}-${left}`}
    className="absolute text-4xl opacity-[0.04] pointer-events-none select-none"
    style={{ top, left }}
    animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
    transition={{ duration: 6, repeat: Infinity, delay, ease: 'easeInOut' }}
  >
    {icon}
  </motion.span>
)

export default function Skills() {
  const [viewMode, setViewMode] = useState<ViewMode>('grid')
  const [colorTheme, setColorTheme] = useState<ColorTheme>('default')
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all')

  const theme = colorThemes[colorTheme]

  const filtered = activeFilter === 'all'
    ? categories
    : categories.filter(c => c.key === activeFilter)

  const getTheme = (key: string) => {
    const t = theme[key as keyof typeof theme]
    return t ?? theme.aws
  }

  const countAll = categories.reduce((sum, c) => sum + c.count, 0)

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {floatingIcon('☁️', '5%', '2%', 0)}
      {floatingIcon('🚀', '15%', '90%', 1)}
      {floatingIcon('🐳', '60%', '5%', 2)}
      {floatingIcon('⚙️', '75%', '88%', 0.5)}
      {floatingIcon('🧠', '40%', '93%', 1.5)}

      <div className="max-w-6xl mx-auto relative z-10">
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
              {countAll} technologies across 6 domains
              <span className="w-1 h-1 rounded-full bg-current" />
            </span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
            <span className="text-xs text-gray-500 dark:text-gray-500 font-medium uppercase tracking-wider">Filter</span>
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

          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500 dark:text-gray-500 font-medium uppercase tracking-wider">View</span>
              <div className="flex rounded-lg border border-gray-200 dark:border-[#30363d] overflow-hidden">
                {(['grid', 'compact', 'list'] as ViewMode[]).map(m => (
                  <button
                    key={m}
                    onClick={() => setViewMode(m)}
                    className={`px-3 py-1.5 text-xs font-medium transition-all duration-200 cursor-pointer capitalize
                      ${viewMode === m
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-50 dark:bg-[#161b22] text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#21262d]'
                      }`}
                  >
                    {m === 'grid' ? '▦' : m === 'compact' ? '⊞' : '☰'} {m}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500 dark:text-gray-500 font-medium uppercase tracking-wider">Theme</span>
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
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${viewMode}-${colorTheme}-${activeFilter}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            viewport={{ once: true, margin: '-50px' }}
            className={`${viewMode === 'list' ? 'flex flex-col gap-4' : viewMode === 'compact' ? 'grid grid-cols-1 md:grid-cols-6 gap-3' : 'grid grid-cols-1 md:grid-cols-6 gap-5'}`}
          >
            {filtered.map((cat) => {
              const t = getTheme(cat.key)

              if (viewMode === 'compact') {
                return (
                  <motion.div
                    key={cat.key}
                    variants={cardVariants}
                    className={`card-glow ${cat.span} relative overflow-hidden group p-3`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-base">{cat.icon}</span>
                      <h3 className="text-sm font-semibold text-white truncate">{cat.label}</h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill, sIdx) => (
                        <motion.span
                          key={skill.name}
                          custom={sIdx}
                          variants={badgeVariants}
                          whileHover={{ scale: 1.06, y: -2 }}
                          className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-medium
                            ${t.bg} ${t.text} border ${t.border}
                            transition-all duration-200 cursor-default select-none`}
                        >
                          <span className="leading-none">{skill.icon}</span>
                          <span>{skill.name}</span>
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                )
              }

              if (viewMode === 'list') {
                return (
                  <motion.div
                    key={cat.key}
                    variants={cardVariants}
                    className="card-glow relative overflow-hidden group"
                  >
                    <div className="flex items-center gap-3 p-3">
                      <div className={`w-9 h-9 rounded-lg ${t.bg} border ${t.border} flex items-center justify-center text-base flex-shrink-0`}>
                        {cat.icon}
                      </div>
                      <h3 className="text-sm font-semibold text-white flex-shrink-0 w-36">{cat.label}</h3>
                      <div className="flex flex-wrap gap-1.5 flex-1 min-w-0">
                        {cat.skills.map((skill, sIdx) => (
                          <motion.span
                            key={skill.name}
                            custom={sIdx}
                            variants={badgeVariants}
                            whileHover={{ scale: 1.05 }}
                            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium
                              ${t.bg} ${t.text} border ${t.border}
                              transition-all duration-200 cursor-default select-none whitespace-nowrap`}
                          >
                            <span className="leading-none text-xs">{skill.icon}</span>
                            <span>{skill.name}</span>
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )
              }

              return (
                <motion.div
                  key={cat.key}
                  variants={cardVariants}
                  className={`card-glow ${cat.span} relative overflow-hidden group`}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${t.bg.replace('bg-', '').split('/')[0]}15, transparent 40%)`,
                    }}
                  />
                  <div className="relative z-10 p-4">
                    <div className={`flex items-start gap-4 mb-5 p-4 -m-4 -mt-0 rounded-t-xl bg-gradient-to-r ${t.gradient} bg-opacity-5`}>
                      <div
                        className={`w-11 h-11 rounded-xl ${t.bg} border ${t.border} flex items-center justify-center text-xl flex-shrink-0 shadow-lg`}
                      >
                        {cat.icon}
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-base font-bold text-white flex items-center gap-2">
                          {cat.label}
                          <span className={`text-[10px] font-normal px-2 py-0.5 rounded-full ${t.bg} ${t.text}`}>
                            {cat.skills.length}
                          </span>
                        </h3>
                        <p className="text-[11px] text-white/60 mt-0.5">{cat.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill, sIdx) => (
                        <motion.span
                          key={skill.name}
                          custom={sIdx}
                          variants={badgeVariants}
                          whileHover={{ scale: 1.07, y: -3 }}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium
                            ${t.bg} ${t.text} border ${t.border}
                            hover:shadow-lg hover:shadow-current/20
                            transition-all duration-200 cursor-default select-none
                            backdrop-blur-sm relative overflow-hidden`}
                        >
                          <span className="relative z-10 text-sm leading-none">{skill.icon}</span>
                          <span className="relative z-10">{skill.name}</span>
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  <div
                    className={`absolute -bottom-6 -right-6 w-20 h-20 rounded-full ${t.bg} opacity-10 blur-2xl transition-all duration-700 group-hover:scale-150 group-hover:opacity-30 pointer-events-none`}
                  />
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 mt-10 text-sm text-gray-500 dark:text-gray-500"
        >
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-orange-500/60" /> AWS
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-purple-500/60" /> CI/CD
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-500/60" /> IaC
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-500/60" /> Languages
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-500/60" /> CS Core
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-yellow-500/60" /> Tools
          </span>
        </motion.div>
      </div>
    </section>
  )
}
