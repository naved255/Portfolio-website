import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

// ==========================================
// 🎨 CENTRAL THEME CONFIGURATION
// Matches your Projects & Skills page!
// ==========================================
export const THEME = {
  primaryGradient: 'from-blue-500 to-purple-600',
  glowBlue: 'bg-blue-500/20',
  glowPurple: 'bg-purple-500/20',

  cardBg: 'bg-card',
  cardBorder: 'border-white/10',
  cardHoverBorder: 'hover:border-purple-500/50',
  cardHoverShadow: 'hover:shadow-purple-500/10',

  textMain: 'text-textmain',
  textMuted: 'text-textmain/60',
  textSubtle: 'text-textmain/40',

  btnGradient: 'bg-gradient-to-r from-blue-500 to-purple-600',
  btnShadow: 'hover:shadow-purple-500/30',
}

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.closest('.interactive-hover')
      ) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  return (
    <>
      {/* Outer Glow Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovered ? 2.2 : 1,
          backgroundColor: isHovered ? 'rgba(168, 85, 247, 0.4)' : 'transparent',
          borderColor: isHovered ? 'rgba(168, 85, 247, 0.8)' : 'rgba(59, 130, 246, 0.6)',
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 20, mass: 0.5 }}
        style={{ borderWidth: '2px' }}
      />
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-purple-400 rounded-full pointer-events-none z-50 hidden md:block"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovered ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
    </>
  )
}