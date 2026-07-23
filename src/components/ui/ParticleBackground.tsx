import { useEffect, useRef } from 'react'
import { useTheme } from '../../context/ThemeContext'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  alpha: number
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { isDark } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let particles: Particle[] = []

    const cvs = canvas
    const c = ctx

    function resize() {
      cvs.width = window.innerWidth
      cvs.height = window.innerHeight
    }

    function createParticles(count: number) {
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * cvs.width,
        y: Math.random() * cvs.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      }))
    }

    function draw() {
      c.clearRect(0, 0, cvs.width, cvs.height)
      const color = isDark ? '147, 197, 253' : '59, 130, 246'

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = cvs.width
        if (p.x > cvs.width) p.x = 0
        if (p.y < 0) p.y = cvs.height
        if (p.y > cvs.height) p.y = 0

        c.beginPath()
        c.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        c.fillStyle = `rgba(${color}, ${p.alpha})`
        c.fill()
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 120) {
            c.beginPath()
            c.moveTo(particles[i].x, particles[i].y)
            c.lineTo(particles[j].x, particles[j].y)
            c.strokeStyle = `rgba(${color}, ${0.1 * (1 - dist / 120)})`
            c.stroke()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }

    resize()
    createParticles(80)
    draw()

    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [isDark])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  )
}
