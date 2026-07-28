import React, { useEffect, useRef } from 'react'

const BackgroundBubbles = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let animationFrameId
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    // Handle Window Resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    // Mouse Tracking for subtle interactive fluid response
    const mouse = {
      x: null,
      y: null,
      radius: 120,
    }

    const handleMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const handleMouseLeave = () => {
      mouse.x = null
      mouse.y = null
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    // Bubble Class with Organic Physics & Lighting
    class Bubble {
      constructor() {
        this.reset(true)
      }

      reset(initial = false) {
        this.radius = Math.random() * 22 + 8 // Organic variations in bubble size
        this.x = Math.random() * width
        this.y = initial ? Math.random() * height : height + this.radius + Math.random() * 50
        
        // Realistic slow floating speeds
        this.vy = -(Math.random() * 0.4 + 0.2)
        this.vx = (Math.random() - 0.5) * 0.3
        
        // Horizontal swaying frequency & amplitude
        this.swayAngle = Math.random() * Math.PI * 2
        this.swaySpeed = Math.random() * 0.015 + 0.005
        this.swayAmplitude = Math.random() * 0.8 + 0.2
        
        // Depth, transparency & glow palette (Matching portfolio blue/purple theme)
        this.alpha = Math.random() * 0.45 + 0.15
        this.hue = Math.random() * 40 + 210 // Palette range: 210 (Deep Sky Blue) to 250 (Indigo/Purple)
      }

      update() {
        // Natural swaying motion
        this.swayAngle += this.swaySpeed
        this.x += Math.sin(this.swayAngle) * this.swayAmplitude + this.vx
        this.y += this.vy

        // Gentle Mouse Interaction (Bubbles softly push away from cursor)
        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x
          const dy = this.y - mouse.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius
            const angle = Math.atan2(dy, dx)
            this.x += Math.cos(angle) * force * 1.8
            this.y += Math.sin(angle) * force * 1.8
          }
        }

        // Reset bubble when it floats off the top screen
        if (this.y + this.radius < -20 || this.x < -30 || this.x > width + 30) {
          this.reset(false)
        }
      }

      draw() {
        ctx.save()
        ctx.translate(this.x, this.y)

        // 1. Soft Outer Atmospheric Glow
        const glowGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.radius * 1.4)
        glowGradient.addColorStop(0, `hsla(${this.hue}, 85%, 60%, ${this.alpha * 0.6})`)
        glowGradient.addColorStop(1, `hsla(${this.hue}, 85%, 60%, 0)`)
        ctx.beginPath()
        ctx.arc(0, 0, this.radius * 1.4, 0, Math.PI * 2)
        ctx.fillStyle = glowGradient
        ctx.fill()

        // 2. Translucent Bubble Shell Gradient
        const shellGradient = ctx.createRadialGradient(
          -this.radius * 0.3,
          -this.radius * 0.3,
          this.radius * 0.1,
          0,
          0,
          this.radius
        )
        shellGradient.addColorStop(0, `hsla(${this.hue}, 90%, 75%, ${this.alpha * 0.25})`)
        shellGradient.addColorStop(0.7, `hsla(${this.hue}, 80%, 50%, ${this.alpha * 0.1})`)
        shellGradient.addColorStop(1, `hsla(${this.hue}, 100%, 65%, ${this.alpha * 0.5})`)

        ctx.beginPath()
        ctx.arc(0, 0, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = shellGradient
        ctx.lineWidth = 1
        ctx.strokeStyle = `hsla(${this.hue}, 90%, 70%, ${this.alpha * 0.7})`
        ctx.fill()
        ctx.stroke()

        // 3. Realistic Curved Specular Highlight (Light reflection on top-left)
        ctx.beginPath()
        ctx.arc(
          -this.radius * 0.35,
          -this.radius * 0.35,
          this.radius * 0.3,
          Math.PI * 1.1,
          Math.PI * 1.8
        )
        ctx.lineWidth = Math.max(1, this.radius * 0.1)
        ctx.strokeStyle = `rgba(255, 255, 255, ${this.alpha * 0.8})`
        ctx.stroke()

        ctx.restore()
      }
    }

    // Determine bubble count according to screen size
    const count = Math.floor((width * height) / 22000)
    const bubbles = Array.from({ length: Math.min(count, 45) }, () => new Bubble())

    // Render Loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      bubbles.forEach((bubble) => {
        bubble.update()
        bubble.draw()
      })
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup Events
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  )
}

export default BackgroundBubbles