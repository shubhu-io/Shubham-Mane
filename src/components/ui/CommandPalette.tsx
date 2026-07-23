import { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const commands = [
  { id: 'home', label: 'Go to Home', path: '/', icon: '🏠' },
  { id: 'blog', label: 'Go to Blog', path: '/blog', icon: '📝' },
  { id: 'projects', label: 'View Projects', path: '/#projects', icon: '🚀' },
  { id: 'skills', label: 'View Skills', path: '/#skills', icon: '⚡' },
  { id: 'contact', label: 'Contact Me', path: '/#contact', icon: '✉️' },
  { id: 'theme', label: 'Toggle Theme', path: '', icon: '🎨', action: 'toggleTheme' },
  { id: 'top', label: 'Scroll to Top', path: '', icon: '⬆️', action: 'scrollTop' },
]

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selectedIdx, setSelectedIdx] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase()),
  )

  const toggleTheme = useCallback(() => {
    const isDark = document.documentElement.classList.contains('dark')
    document.documentElement.classList.toggle('dark', !isDark)
    localStorage.setItem('portfolio-theme', !isDark ? 'dark' : 'light')
  }, [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen((prev) => !prev)
        setQuery('')
      }
      if (e.key === 'Escape') {
        setOpen(false)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus()
    }
  }, [open])

  function execute(item: (typeof filtered)[0]) {
    setOpen(false)
    setQuery('')

    if (item.action === 'toggleTheme') {
      toggleTheme()
    } else if (item.action === 'scrollTop') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (item.path.startsWith('/#')) {
      const id = item.path.slice(2)
      navigate('/')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      navigate(item.path)
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIdx((prev) => Math.min(prev + 1, filtered.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIdx((prev) => Math.max(prev - 1, 0))
    } else if (e.key === 'Enter' && filtered[selectedIdx]) {
      execute(filtered[selectedIdx])
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 text-xs text-gray-400 border border-gray-200 dark:border-[#30363d] rounded-lg hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
        aria-label="Open command palette"
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        Search...
        <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-[#21262d] rounded text-[10px] font-mono">⌘K</kbd>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.15 }}
              className="w-full max-w-lg mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="glass rounded-xl overflow-hidden shadow-2xl">
                <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-200 dark:border-[#30363d]">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search commands..."
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value)
                      setSelectedIdx(0)
                    }}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent outline-none text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400"
                  />
                  <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-[#21262d] rounded text-[10px] font-mono text-gray-400">esc</kbd>
                </div>

                <div className="max-h-64 overflow-y-auto p-2">
                  {filtered.length === 0 && (
                    <p className="text-center text-sm text-gray-400 py-8">No results found</p>
                  )}
                  {filtered.map((item, idx) => (
                    <button
                      key={item.id}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg transition-colors text-left ${
                        idx === selectedIdx
                          ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#21262d]'
                      }`}
                      onClick={() => execute(item)}
                      onMouseEnter={() => setSelectedIdx(idx)}
                    >
                      <span className="text-base">{item.icon}</span>
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
