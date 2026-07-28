import React from 'react'
import { motion } from 'framer-motion'
import { Mail, ArrowUpRight, Sparkles, Terminal } from 'lucide-react'
import { THEME } from '../../CustomCursor'

// 🔹 Inline SVGs for social icons to avoid lucide-react export version mismatches
const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const socialLinks = [
  {
    link: 'https://github.com/naved255',
    icon: GithubIcon,
    label: 'GitHub',
  },
  {
    link: 'https://www.linkedin.com/in/mohd-naved-ahmad-6a643231b/',
    icon: LinkedinIcon,
    label: 'LinkedIn',
  },
  {
    link: 'mailto:navedahmad2314lko@gmail.com',
    icon: Mail,
    label: 'Email',
  },
]

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-7 items-center mt-6 sm:mt-12 md:mt-16 mb-12 sm:mb-20 px-4 sm:px-6 gap-8 md:gap-10 relative">
      
      {/* 🔹 Floating Background Blobs */}
      <motion.div
        animate={{ y: [0, -25, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className={`absolute -top-10 -left-10 w-64 h-64 ${THEME.glowPurple} blur-3xl rounded-full -z-10`}
      />
      <motion.div
        animate={{ y: [0, 25, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className={`absolute top-1/2 right-0 w-72 h-72 ${THEME.glowBlue} blur-3xl rounded-full -z-10`}
      />

      {/* 🔹 Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="col-span-1 md:col-span-4 order-2 md:order-1"
      >
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4 text-xs sm:text-sm"
        >
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className={THEME.textMuted}>Welcome to my portfolio</span>
        </motion.div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-3">
          Hi, I'm{' '}
          <span className={`text-transparent bg-clip-text bg-gradient-to-r ${THEME.primaryGradient}`}>
            Mohd Naved Ahmad
          </span>
        </h1>

        <h2 className="text-lg sm:text-xl md:text-2xl text-purple-300 font-medium mb-4 flex items-center gap-2">
          <Terminal className="w-5 h-5 text-blue-400 inline" />
          MERN Stack & Machine Learning Developer
        </h2>

        <p className={`text-sm sm:text-base md:text-lg ${THEME.textMuted} leading-relaxed mb-8 max-w-md sm:max-w-xl`}>
          I build <span className="text-white font-semibold">scalable web apps</span> and{' '}
          <span className="text-white font-semibold">intelligent systems</span> by combining modern frontend and backend architectures with neural models.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="/projects"
            className={`px-6 py-3 text-sm sm:text-base ${THEME.btnGradient} text-white font-semibold rounded-full shadow-lg ${THEME.btnShadow} transition-all duration-300 inline-flex items-center gap-2`}
          >
            <span>View My Work</span>
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="/contact"
            className="px-6 py-3 text-sm sm:text-base border border-white/20 hover:border-purple-500 text-white font-semibold rounded-full hover:bg-white/5 transition-all duration-300"
          >
            Contact Me
          </motion.a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3 mt-8">
          {socialLinks.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.a
                key={i}
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className={`p-3 ${THEME.cardBg} border ${THEME.cardBorder} rounded-full hover:border-purple-500/50 hover:text-purple-400 transition-all duration-300`}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            )
          })}
        </div>
      </motion.div>

      {/* 🔹 Right Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="col-span-1 md:col-span-3 order-1 md:order-2 flex justify-center"
      >
        <div className="relative group">
          {/* Animated Glowing Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className={`absolute -inset-1 rounded-full bg-gradient-to-r ${THEME.primaryGradient} opacity-75 blur-md group-hover:opacity-100 transition duration-500`}
          />

          {/* Profile Frame with Precise Face Focal Cropping */}
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full p-1.5 bg-black/40 backdrop-blur-xl border border-white/20 shadow-2xl">
            <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-purple-900/40 to-black">
              <img
                src="/navedImage.jpeg" // 👈 Replace with your image path (e.g. inside public folder)
                alt="Mohd Naved Ahmad"
                className="w-full h-full object-cover object-[center_20%] scale-110 group-hover:scale-115 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Hero