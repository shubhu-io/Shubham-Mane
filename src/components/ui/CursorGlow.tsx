import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX - 150}px, ${e.clientY - 150}px)`
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 w-[300px] h-[300px] pointer-events-none z-50 opacity-20 dark:opacity-10 transition-transform duration-300 ease-out"
      style={{
        background:
          'radial-gradient(circle, rgba(59,130,246,0.4) 0%, rgba(139,92,246,0.2) 40%, transparent 70%)',
        filter: 'blur(40px)',
      }}
    />
  )
}
