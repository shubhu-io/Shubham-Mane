import { motion } from 'framer-motion'

const categories = [
  {
    label: 'AWS Cloud',
    icon: '☁️',
    color: 'from-orange-500 to-red-500',
    border: 'border-orange-500/30',
    bg: 'bg-orange-500/10',
    text: 'text-orange-600 dark:text-orange-400',
    skills: [
      { name: 'EC2', icon: '🖥️' },
      { name: 'VPC', icon: '🌐' },
      { name: 'IAM', icon: '🔒' },
      { name: 'S3', icon: '📦' },
      { name: 'EBS/EFS', icon: '💾' },
      { name: 'RDS', icon: '🗄️' },
      { name: 'ALB', icon: '⚖️' },
      { name: 'Auto Scaling', icon: '📈' },
      { name: 'CloudWatch', icon: '📊' },
    ],
  },
  {
    label: 'IaC & DevOps',
    icon: '🏗️',
    color: 'from-purple-500 to-pink-500',
    border: 'border-purple-500/30',
    bg: 'bg-purple-500/10',
    text: 'text-purple-600 dark:text-purple-400',
    skills: [
      { name: 'Terraform', icon: '🏗️' },
      { name: 'Git & GitHub', icon: '🔀' },
      { name: 'Linux (Ubuntu)', icon: '🐧' },
      { name: 'Shell Scripting', icon: '⌨️' },
    ],
  },
  {
    label: 'Programming',
    icon: '💻',
    color: 'from-green-500 to-emerald-500',
    border: 'border-green-500/30',
    bg: 'bg-green-500/10',
    text: 'text-green-600 dark:text-green-400',
    skills: [
      { name: 'Python', icon: '🐍' },
      { name: 'SQL / MySQL', icon: '🗃️' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">Technologies I work with</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {categories.map((cat, catIdx) => {
            const spanClass =
              cat.skills.length > 6 ? 'md:col-span-4' : cat.skills.length > 3 ? 'md:col-span-3' : 'md:col-span-2'

            return (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: catIdx * 0.1 }}
                className={`card-glow ${spanClass}`}
              >
                <div className={`flex items-center gap-3 mb-4 p-3 -m-4 -mt-4 rounded-t-xl bg-gradient-to-r ${cat.color} bg-opacity-5`}>
                  <div className={`w-10 h-10 rounded-xl ${cat.bg} border ${cat.border} flex items-center justify-center text-lg`}>
                    {cat.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{cat.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: sIdx * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium
                        ${cat.bg} ${cat.text} border ${cat.border}
                        hover:shadow-lg hover:shadow-${cat.color.replace('from-', '').split(' ')[0]}/20
                        transition-all duration-200 cursor-default`}
                    >
                      <span className="text-sm leading-none">{skill.icon}</span>
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="md:col-span-6 card-glow"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-lg text-white">
                🧰
              </div>
              <h3 className="text-lg font-semibold">Other Tools</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['VS Code', 'Jupyter Notebook', 'Anaconda', 'Windows', 'Networking Fundamentals', 'Problem Solving'].map((tool, tIdx) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: tIdx * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium
                    bg-gray-100 dark:bg-[#21262d] text-gray-700 dark:text-gray-300
                    border border-gray-200 dark:border-[#30363d]
                    hover:shadow-lg hover:shadow-gray-500/10
                    transition-all duration-200 cursor-default"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
