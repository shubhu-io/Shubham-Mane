import { motion } from 'framer-motion'

const categories = [
  {
    label: 'AWS Cloud',
    subtitle: 'Compute · Networking · Storage · Security',
    icon: '☁️',
    gradient: 'from-orange-500 to-red-500',
    glow: 'shadow-orange-500/20',
    border: 'border-orange-500/30',
    bg: 'bg-orange-500/10',
    text: 'text-orange-600 dark:text-orange-400',
    skills: [
      { name: 'EC2', icon: '🖥️' },
      { name: 'VPC', icon: '🌐' },
      { name: 'IAM', icon: '🔒' },
      { name: 'S3', icon: '📦' },
      { name: 'EBS / EFS', icon: '💾' },
      { name: 'RDS', icon: '🗄️' },
      { name: 'ALB', icon: '⚖️' },
      { name: 'Auto Scaling', icon: '📈' },
      { name: 'CloudWatch', icon: '📊' },
      { name: 'Lambda', icon: '⚡' },
    ],
    span: 'md:col-span-4',
  },
  {
    label: 'DevOps & IaC',
    subtitle: 'Automation · CI/CD · Configuration',
    icon: '🚀',
    gradient: 'from-purple-500 to-pink-500',
    glow: 'shadow-purple-500/20',
    border: 'border-purple-500/30',
    bg: 'bg-purple-500/10',
    text: 'text-purple-600 dark:text-purple-400',
    skills: [
      { name: 'Terraform', icon: '🏗️' },
      { name: 'Docker', icon: '🐳' },
      { name: 'CI/CD Pipelines', icon: '🔄' },
      { name: 'Git & GitHub', icon: '🔀' },
      { name: 'Linux (Ubuntu)', icon: '🐧' },
      { name: 'Shell Scripting', icon: '⌨️' },
      { name: 'Monitoring', icon: '📊' },
    ],
    span: 'md:col-span-3',
  },
  {
    label: 'Programming',
    subtitle: 'Languages · Scripting · Databases',
    icon: '💻',
    gradient: 'from-green-500 to-emerald-500',
    glow: 'shadow-green-500/20',
    border: 'border-green-500/30',
    bg: 'bg-green-500/10',
    text: 'text-green-600 dark:text-green-400',
    skills: [
      { name: 'Python', icon: '🐍' },
      { name: 'SQL / MySQL', icon: '🗃️' },
      { name: 'Data Structures', icon: '📐' },
      { name: 'Algorithms', icon: '🧮' },
      { name: 'OOP Concepts', icon: '🧩' },
    ],
    span: 'md:col-span-3',
  },
  {
    label: 'Computer Science',
    subtitle: 'Core Engineering Foundations',
    icon: '🎓',
    gradient: 'from-cyan-500 to-blue-500',
    glow: 'shadow-cyan-500/20',
    border: 'border-cyan-500/30',
    bg: 'bg-cyan-500/10',
    text: 'text-cyan-600 dark:text-cyan-400',
    skills: [
      { name: 'Networking', icon: '🌐' },
      { name: 'Operating Systems', icon: '⚙️' },
      { name: 'DBMS', icon: '🗂️' },
      { name: 'Problem Solving', icon: '🧠' },
      { name: 'SDLC', icon: '📋' },
    ],
    span: 'md:col-span-2',
  },
  {
    label: 'Tools & OS',
    subtitle: 'Development Environment',
    icon: '🛠️',
    gradient: 'from-yellow-500 to-orange-500',
    glow: 'shadow-yellow-500/20',
    border: 'border-yellow-500/30',
    bg: 'bg-yellow-500/10',
    text: 'text-yellow-600 dark:text-yellow-400',
    skills: [
      { name: 'VS Code', icon: '📝' },
      { name: 'Jupyter', icon: '📓' },
      { name: 'Anaconda', icon: '🐍' },
      { name: 'Windows', icon: '🪟' },
      { name: 'Ubuntu', icon: '🐧' },
    ],
    span: 'md:col-span-2',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.04, duration: 0.3, ease: 'backOut' },
  }),
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">Technologies and concepts I work with</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-6 gap-5"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.label}
              variants={cardVariants}
              className={`card-glow ${cat.span} hover:${cat.glow} transition-shadow duration-300 relative overflow-hidden group`}
            >
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                style={{
                  background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${cat.gradient.replace('from-', '').split(' ')[0].replace('-500', '')}11, transparent 40%)`,
                }}
              />
              <div className={`flex items-start gap-4 mb-5 p-4 -m-4 -mt-0 rounded-t-xl bg-gradient-to-r ${cat.gradient} bg-opacity-5`}>
                <div
                  className={`w-11 h-11 rounded-xl ${cat.bg} border ${cat.border} flex items-center justify-center text-xl flex-shrink-0 shadow-lg ${cat.glow}`}
                >
                  {cat.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-bold text-white">{cat.label}</h3>
                  <p className="text-[11px] text-white/60 mt-0.5">{cat.subtitle}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <motion.span
                    key={skill.name}
                    custom={sIdx}
                    variants={badgeVariants}
                    whileHover={{ scale: 1.06, y: -3 }}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium
                      ${cat.bg} ${cat.text} border ${cat.border}
                      hover:shadow-lg hover:${cat.glow}
                      transition-all duration-200 cursor-default select-none
                      backdrop-blur-sm`}
                  >
                    <span className="text-sm leading-none">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </motion.span>
                ))}
              </div>
              <div
                className={`absolute -bottom-6 -right-6 w-16 h-16 rounded-full ${cat.bg} opacity-20 blur-xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-30`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
