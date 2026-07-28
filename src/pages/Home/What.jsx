import React from 'react'
import { motion } from 'framer-motion'
import { THEME } from '../../CustomCursor'
import { Code, Cpu, Zap } from 'lucide-react'

const What = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8 }}
      className="my-16 sm:my-20 px-4 sm:px-6"
    >
      <div className="relative text-center border border-white/10 rounded-3xl p-8 sm:p-12 bg-white/[0.02] backdrop-blur-sm overflow-hidden">
        
        {/* Decorative Floating Badges */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="hidden md:flex absolute top-6 left-10 items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium"
        >
          <Code className="w-4 h-4" /> Clean Architecture
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="hidden md:flex absolute bottom-6 right-10 items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium"
        >
          <Cpu className="w-4 h-4" /> AI Integration
        </motion.div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black leading-tight">
          Turning ideas into{' '}
          <span className={`text-transparent bg-clip-text bg-gradient-to-r ${THEME.primaryGradient}`}>
            reality
          </span>
          <br className="hidden sm:block" />
          {' '}through clean, efficient code.
        </h2>

        <p className={`text-sm sm:text-base md:text-lg ${THEME.textMuted} mt-4 sm:mt-6 max-w-md sm:max-w-xl md:max-w-2xl mx-auto flex items-center justify-center gap-2`}>
          <Zap className="w-4 h-4 text-purple-400 shrink-0" />
          <span>Crafting digital experiences that are fast, responsive, and built to scale.</span>
        </p>
      </div>
    </motion.div>
  )
}

export default What