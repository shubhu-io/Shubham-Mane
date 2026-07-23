import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { siteConfig } from '../../config/site'

const iconPaths: Record<string, (cls: string) => JSX.Element> = {
  linkedin: (cls) => (
    <svg className={cls} fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
  ),
  github: (cls) => (
    <svg className={cls} fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
  ),
  twitter: (cls) => (
    <svg className={cls} fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
  ),
  medium: (cls) => (
    <svg className={cls} fill="currentColor" viewBox="0 0 24 24"><path d="M0 0v24h24V0H0zm19.938 5.686L18.651 6.92a.376.376 0 00-.143.362v9.067a.376.376 0 00.143.362l1.257 1.234v.271h-6.322v-.27l1.302-1.264c.128-.128.128-.165.128-.361V8.99l-3.62 9.195h-.49L6.69 8.99v6.163a.85.85 0 00.233.707l1.694 2.054v.271H3.815v-.27l1.694-2.054a.82.82 0 00.218-.707V8.336a.613.613 0 00-.197-.523L4.045 5.686v-.271h4.674l3.613 7.923 3.176-7.923h4.456v.271z"/></svg>
  ),
  leetcode: (cls) => (
    <svg className={cls} fill="currentColor" viewBox="0 0 24 24"><path d="M13.483 0a1.374 1.374 0 00-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 00-1.209 2.104 5.35 5.35 0 00-.125.513 5.527 5.527 0 00.062 2.362 5.83 5.83 0 00.349 1.017 5.938 5.938 0 001.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 00-1.951-.003l-2.396 2.392a3.021 3.021 0 01-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.47-.948-2.263a2.68 2.68 0 01.066-.523 2.545 2.545 0 01.619-1.16L7.98 8.398l6.872-6.651c.108-.108.236-.2.371-.287.376-.242.872-.178 1.18.131a1.376 1.376 0 01.003 1.947L11.1 9.82a1.374 1.374 0 00.002 1.947 1.38 1.38 0 001.95-.001l5.146-5.078a4.134 4.134 0 00-.004-5.84 4.134 4.134 0 00-2.115-1.09A4.45 4.45 0 0013.483 0z"/></svg>
  ),
  hackerrank: (cls) => (
    <svg className={cls} fill="currentColor" viewBox="0 0 24 24"><path d="M0 0v24h24V0H0zm11.04 4.003h1.98v5.994h-1.98V4.003zm-5.516.005h1.982v8.095H5.524V4.008zm11.044 0h1.982v14.578h-1.982V4.008zM9.505 7.26h1.98v7.733h-1.98V7.26zm4.002 3.005h1.98v4.326h-1.98v-4.326z"/></svg>
  ),
  devto: (cls) => (
    <svg className={cls} fill="currentColor" viewBox="0 0 24 24"><path d="M7.4 10.1c-.1-.4-.3-.5-.6-.5H6v4.6h.7c.4 0 .5-.1.6-.5.1-.3.1-3.6 0-3.6zm9.5.8c-.8-.3-1.7-.4-2.5-.3-.4.1-.8.3-1.1.5-.2.2-.5.4-.5.7v1.8c0 .3.2.5.5.7.4.2.7.4 1.1.5.8.1 1.7 0 2.5-.3.2-.1.4-.3.4-.5v-1c0-.2-.2-.4-.4-.5H15v.8h1.5v.3c-.3.2-.7.3-1 .3-.4 0-.7-.1-1-.3-.1-.1-.2-.3-.2-.5v-1.2c0-.2.1-.4.2-.5.3-.2.6-.3 1-.3.4 0 .7.1 1 .3.2.1.3.3.3.5h.8l.1-.7c0-.3-.2-.5-.5-.6zM12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22.8C6 22.8 1.2 18 1.2 12S6 1.2 12 1.2 22.8 6 22.8 12 18 22.8 12 22.8zM18.5 8.3c.3.3.5.7.5 1.2v5.1c0 .4-.2.8-.5 1.1-.3.3-.7.5-1.2.5H6.2c-.5 0-.9-.2-1.2-.5-.3-.3-.5-.7-.5-1.2V9.4c0-.4.1-.8.4-1.1.3-.3.7-.4 1.2-.4h11.1c.5 0 .9.1 1.2.4h.1z"/></svg>
  ),
}

const socialEntries = [
  { key: 'linkedin' as const, name: 'LinkedIn', subtitle: 'Connect professionally', url: siteConfig.social.linkedin, color: '#0A66C2' },
  { key: 'github' as const, name: 'GitHub', subtitle: 'View my code', url: siteConfig.social.github, color: '#6e5494' },
  { key: 'twitter' as const, name: 'X / Twitter', subtitle: '@shubh__m_', url: siteConfig.social.twitter, color: '#000000' },
  { key: 'medium' as const, name: 'Medium', subtitle: 'My articles', url: siteConfig.social.medium, color: '#757575' },
  { key: 'leetcode' as const, name: 'LeetCode', subtitle: 'Problem solving', url: siteConfig.social.leetcode, color: '#FFA116' },
  { key: 'hackerrank' as const, name: 'HackerRank', subtitle: 'Coding challenges', url: siteConfig.social.hackerrank, color: '#00EA64' },
  { key: 'devto' as const, name: 'Dev.to', subtitle: 'Blog posts', url: siteConfig.social.devto, color: '#0a0a0a' },
  {
    key: 'portfolio' as const,
    name: 'Portfolio',
    subtitle: 'shubhu-io.github.io',
    url: siteConfig.social.portfolio,
    color: '#6366f1',
    icon: (cls: string) => (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
    ),
  },
  {
    key: 'resume' as const,
    name: 'Resume',
    subtitle: 'Download PDF',
    url: siteConfig.social.resume,
    color: '#22c55e',
    icon: (cls: string) => (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
    ),
  },
  {
    key: 'email' as const,
    name: 'Email',
    subtitle: siteConfig.social.email,
    url: `mailto:${siteConfig.social.email}`,
    color: '#ef4444',
    icon: (cls: string) => (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    ),
  },
].filter((s) => s.url)

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">Let's work together</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="card-glow p-8 mb-12"
        >
          <form
            action={`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID || 'your-form-id'}`}
            method="POST"
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2.5 rounded-lg glass border border-gray-200 dark:border-[#30363d] focus:border-blue-500 outline-none text-sm transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2.5 rounded-lg glass border border-gray-200 dark:border-[#30363d] focus:border-blue-500 outline-none text-sm transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-2.5 rounded-lg glass border border-gray-200 dark:border-[#30363d] focus:border-blue-500 outline-none text-sm transition-colors"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-2.5 rounded-lg glass border border-gray-200 dark:border-[#30363d] focus:border-blue-500 outline-none text-sm transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>

            <button type="submit" className="btn-primary w-full justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send Message
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3"
        >
          {socialEntries.map((entry) => {
            const SvgIcon = entry.icon || iconPaths[entry.key]
            return (
              <motion.a
                key={entry.key}
                variants={cardVariants}
                href={entry.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={entry.name}
                className="group relative flex flex-col items-center justify-center gap-2 p-5 rounded-2xl border border-gray-200/60 dark:border-white/10 bg-white/50 dark:bg-white/[0.03] backdrop-blur-xl shadow-sm hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-white/5 transition-all duration-300 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
                style={{
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                }}
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${entry.color}15, transparent 40%)`,
                  }}
                />

                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border"
                  style={{ borderColor: `${entry.color}40` }}
                />

                <div className="relative z-10 flex flex-col items-center gap-2">
                  {SvgIcon && (
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300"
                      style={{
                        backgroundColor: `${entry.color}12`,
                        color: entry.color,
                      }}
                    >
                      {SvgIcon("w-5 h-5 transition-colors duration-300 group-hover:text-white")}
                    </div>
                  )}

                  <span className="font-bold text-sm text-gray-900 dark:text-white transition-colors duration-300">
                    {entry.name}
                  </span>

                  {entry.subtitle && (
                    <span className="text-[11px] text-gray-400 dark:text-gray-500 text-center leading-tight max-w-[120px]">
                      {entry.subtitle}
                    </span>
                  )}
                </div>

                <ExternalLink className="absolute top-3 right-3 w-3.5 h-3.5 text-gray-300 dark:text-gray-600 group-hover:text-gray-500 dark:group-hover:text-gray-400 transition-colors duration-300" />
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
