import { motion } from 'framer-motion'
import type { Skill, SkillCategory } from '../../types/portfolio'

const skillCategories: { category: SkillCategory; label: string; icon: string }[] = [
  { category: 'frontend', label: 'Frontend', icon: '🎨' },
  { category: 'backend', label: 'Backend', icon: '⚙️' },
  { category: 'devops', label: 'DevOps', icon: '🚀' },
  { category: 'tools', label: 'Tools', icon: '🛠️' },
  { category: 'languages', label: 'Languages', icon: '📝' },
  { category: 'databases', label: 'Databases', icon: '🗄️' },
]

const skills: Skill[] = [
  { name: 'AWS EC2', icon: '🖥️', category: 'devops', level: 85 },
  { name: 'AWS VPC', icon: '🌐', category: 'devops', level: 80 },
  { name: 'AWS IAM', icon: '🔒', category: 'devops', level: 82 },
  { name: 'AWS S3', icon: '📦', category: 'devops', level: 85 },
  { name: 'AWS EBS/EFS', icon: '💾', category: 'devops', level: 78 },
  { name: 'AWS RDS', icon: '🗄️', category: 'databases', level: 75 },
  { name: 'AWS ALB', icon: '⚖️', category: 'devops', level: 78 },
  { name: 'Auto Scaling', icon: '📈', category: 'devops', level: 80 },
  { name: 'CloudWatch', icon: '📊', category: 'devops', level: 75 },
  { name: 'Terraform', icon: '🏗️', category: 'devops', level: 80 },
  { name: 'Linux (Ubuntu)', icon: '🐧', category: 'tools', level: 82 },
  { name: 'Python', icon: '🐍', category: 'languages', level: 78 },
  { name: 'Shell Scripting', icon: '⌨️', category: 'languages', level: 70 },
  { name: 'SQL / MySQL', icon: '🗃️', category: 'databases', level: 75 },
  { name: 'Git & GitHub', icon: '🔀', category: 'tools', level: 85 },
]

const categoryColors: Record<SkillCategory, string> = {
  frontend: 'from-blue-500 to-cyan-500',
  backend: 'from-green-500 to-emerald-500',
  devops: 'from-orange-500 to-red-500',
  tools: 'from-purple-500 to-pink-500',
  languages: 'from-yellow-500 to-orange-500',
  databases: 'from-teal-500 to-green-500',
}

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, catIdx) => {
            const catSkills = skills.filter((s) => s.category === cat.category)
            if (catSkills.length === 0) return null

            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: catIdx * 0.1 }}
                className="card-glow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{cat.icon}</span>
                  <h3 className="text-lg font-semibold">{cat.label}</h3>
                </div>
                <div className="space-y-3">
                  {catSkills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-700 dark:text-gray-300">
                          {skill.icon} {skill.name}
                        </span>
                        <span className="text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-gray-200 dark:bg-[#30363d] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                          className={`h-full rounded-full bg-gradient-to-r ${categoryColors[skill.category]}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
