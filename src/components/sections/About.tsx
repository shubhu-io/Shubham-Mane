import { motion } from 'framer-motion'

const highlights = [
  { label: 'AWS Services', value: '10+' },
  { label: 'Cloud Projects', value: '3+' },
  { label: 'Certifications', value: '5' },
  { label: 'Languages', value: '3' },
]

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">Get to know me a little better</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              I'm an entry-level AWS Cloud/DevOps Engineer with a B.Tech in
              Computer Science and hands-on experience designing, provisioning,
              and automating cloud infrastructure on AWS. I love turning complex
              infrastructure challenges into scalable, automated solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              Skilled in Infrastructure as Code with Terraform, Linux system
              administration, Python scripting, networking fundamentals, and
              automation. Strong troubleshooting mindset, fast learner, and eager
              to contribute to a cloud, DevOps, or SRE team.
            </p>
            <div className="flex flex-wrap gap-3">
              {['AWS', 'Terraform', 'Linux', 'Python', 'Shell Scripting', 'SQL'].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item) => (
              <div
                key={item.label}
                className="card-glow text-center p-6"
              >
                <div className="text-3xl font-bold gradient-text mb-1">
                  {item.value}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
