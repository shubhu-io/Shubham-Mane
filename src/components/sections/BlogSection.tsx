import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const posts = [
  {
    slug: 'building-scalable-react-apps',
    title: 'Building Scalable React Applications',
    description: 'Best practices for structuring large-scale React applications with TypeScript.',
    date: '2024-03-15',
    tags: ['React', 'TypeScript', 'Architecture'],
    readingTime: 8,
  },
  {
    slug: 'tailwind-css-tips',
    title: 'Tailwind CSS Tips & Tricks',
    description: 'Advanced Tailwind CSS patterns to improve your workflow and build better UIs.',
    date: '2024-02-20',
    tags: ['CSS', 'Tailwind', 'Design'],
    readingTime: 6,
  },
  {
    slug: 'github-actions-ci-cd',
    title: 'GitHub Actions for CI/CD',
    description: 'Setting up automated deployment pipelines with GitHub Actions.',
    date: '2024-01-10',
    tags: ['DevOps', 'GitHub', 'CI/CD'],
    readingTime: 10,
  },
]

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            Latest <span className="gradient-text">Blog Posts</span>
          </h2>
          <p className="section-subtitle">Thoughts and tutorials</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, idx) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Link to={`/blog/${post.slug}`} className="card-glow block h-full group">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs text-gray-500">{post.date}</span>
                  <span className="text-xs text-gray-400">·</span>
                  <span className="text-xs text-gray-500">
                    {post.readingTime} min read
                  </span>
                </div>
                <h3 className="text-base font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {post.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] rounded bg-blue-500/10 text-blue-600 dark:text-blue-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Link to="/blog" className="btn-secondary">
            View All Posts
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
