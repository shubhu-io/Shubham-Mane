import { motion } from 'framer-motion'

const categories = [
  {
    label: 'AWS Cloud',
    subtitle: 'Compute · Networking · Storage · Serverless',
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
      { name: 'Route53', icon: '🔗' },
      { name: 'ALB / NLB', icon: '⚖️' },
      { name: 'Auto Scaling', icon: '📈' },
      { name: 'Lambda', icon: '⚡' },
      { name: 'CloudWatch', icon: '📊' },
    ],
    span: 'md:col-span-4',
  },
  {
    label: 'CI/CD & Version Control',
    subtitle: 'Automation · Pipelines · Collaboration',
    icon: '🔄',
    gradient: 'from-purple-500 to-pink-500',
    glow: 'shadow-purple-500/20',
    border: 'border-purple-500/30',
    bg: 'bg-purple-500/10',
    text: 'text-purple-600 dark:text-purple-400',
    skills: [
      { name: 'Git & GitHub', icon: '🔀' },
      { name: 'GitHub Actions', icon: '⚙️' },
      { name: 'CI/CD Pipelines', icon: '🔄' },
      { name: 'Jenkins', icon: '🏗️' },
      { name: 'Shell Scripting', icon: '⌨️' },
      { name: 'GitHub Pages', icon: '📄' },
    ],
    span: 'md:col-span-2',
  },
  {
    label: 'Infrastructure as Code',
    subtitle: 'Provisioning · Containerization · Orchestration',
    icon: '🏗️',
    gradient: 'from-blue-500 to-cyan-500',
    glow: 'shadow-blue-500/20',
    border: 'border-blue-500/30',
    bg: 'bg-blue-500/10',
    text: 'text-blue-600 dark:text-blue-400',
    skills: [
      { name: 'Terraform', icon: '🏗️' },
      { name: 'Docker', icon: '🐳' },
      { name: 'Kubernetes', icon: '☸️' },
      { name: 'Ansible', icon: '📜' },
    ],
    span: 'md:col-span-2',
  },
  {
    label: 'Programming Languages',
    subtitle: 'Scripting · Web · Backend',
    icon: '💻',
    gradient: 'from-green-500 to-emerald-500',
    glow: 'shadow-green-500/20',
    border: 'border-green-500/30',
    bg: 'bg-green-500/10',
    text: 'text-green-600 dark:text-green-400',
    skills: [
      { name: 'Python', icon: '🐍' },
      { name: 'JavaScript', icon: '🟨' },
      { name: 'TypeScript', icon: '🔷' },
      { name: 'HTML / CSS', icon: '🌐' },
      { name: 'Java', icon: '☕' },
      { name: 'SQL', icon: '🗃️' },
    ],
    span: 'md:col-span-2',
  },
  {
    label: 'CS Fundamentals',
    subtitle: 'Core Engineering Concepts',
    icon: '🎓',
    gradient: 'from-cyan-500 to-teal-500',
    glow: 'shadow-cyan-500/20',
    border: 'border-cyan-500/30',
    bg: 'bg-cyan-500/10',
    text: 'text-cyan-600 dark:text-cyan-400',
    skills: [
      { name: 'Data Structures', icon: '📐' },
      { name: 'Algorithms', icon: '🧮' },
      { name: 'OOP Concepts', icon: '🧩' },
      { name: 'Computer Networks', icon: '🌐' },
      { name: 'Operating Systems', icon: '⚙️' },
      { name: 'DBMS', icon: '🗂️' },
    ],
    span: 'md:col-span-3',
  },
  {
    label: 'Monitoring & Tools',
    subtitle: 'Observability · Productivity · OS',
    icon: '🛠️',
    gradient: 'from-yellow-500 to-orange-500',
    glow: 'shadow-yellow-500/20',
    border: 'border-yellow-500/30',
    bg: 'bg-yellow-500/10',
    text: 'text-yellow-600 dark:text-yellow-400',
    skills: [
      { name: 'Linux / Ubuntu', icon: '🐧' },
      { name: 'VS Code', icon: '📝' },
      { name: 'Prometheus', icon: '📈' },
      { name: 'Grafana', icon: '📊' },
      { name: 'Jupyter', icon: '📓' },
      { name: 'Bash / PowerShell', icon: '⌨️' },
    ],
    span: 'md:col-span-3',
  },
]

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
          className="text-center mb-12"
        >
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            <span className="inline-flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-current" />
              Cloud · DevOps · Development · Fundamentals
              <span className="w-1 h-1 rounded-full bg-current" />
            </span>
          </p>
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
              className={`card-glow ${cat.span} relative overflow-hidden group`}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${cat.gradient.replace('from-', '').split(' ')[0].replace('-500', '')}15, transparent 40%)`,
                }}
              />

              <div className={`relative z-10 p-4`}>
                <div className={`flex items-start gap-4 mb-5 p-4 -m-4 -mt-0 rounded-t-xl bg-gradient-to-r ${cat.gradient} bg-opacity-5`}>
                  <div
                    className={`w-11 h-11 rounded-xl ${cat.bg} border ${cat.border} flex items-center justify-center text-xl flex-shrink-0 shadow-lg ${cat.glow}`}
                  >
                    {cat.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      {cat.label}
                      <span className={`text-[10px] font-normal px-2 py-0.5 rounded-full ${cat.bg} ${cat.text}`}>
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
                        ${cat.bg} ${cat.text} border ${cat.border}
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
                className={`absolute -bottom-6 -right-6 w-20 h-20 rounded-full ${cat.bg} opacity-10 blur-2xl transition-all duration-700 group-hover:scale-150 group-hover:opacity-30 pointer-events-none`}
              />
            </motion.div>
          ))}
        </motion.div>

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
