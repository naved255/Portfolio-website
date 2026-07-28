import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, ArrowUpRight, Copy, Check, MessageSquare, Sparkles, Send } from 'lucide-react'
import Form from './Form'
import {CustomCursor, THEME } from '../../CustomCursor'

// 🔹 SVGs for reliable social icon rendering
const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const contactCards = [
  {
    title: 'Email',
    value: 'navedahmad2314lko@gmail.com',
    link: 'mailto:navedahmad2314lko@gmail.com',
    icon: Mail,
    color: 'text-blue-400',
    bgGlow: 'from-blue-500/20 to-indigo-500/5',
    isCopyable: true,
  },
  {
    title: 'GitHub',
    value: 'github.com/naved255',
    link: 'https://github.com/naved255',
    icon: GithubIcon,
    color: 'text-purple-400',
    bgGlow: 'from-purple-500/20 to-pink-500/5',
    isCopyable: false,
  },
  {
    title: 'LinkedIn',
    value: 'linkedin.com/in/mohd-naved-ahmad',
    link: 'https://www.linkedin.com/in/mohd-naved-ahmad-6a643231b/',
    icon: LinkedinIcon,
    color: 'text-cyan-400',
    bgGlow: 'from-cyan-500/20 to-blue-500/5',
    isCopyable: false,
  },
]

const ContactPage = () => {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = (e, email) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 overflow-hidden">
      <CustomCursor/>
      {/* 🔥 Hero Section */}
      <section className="text-center py-6 mt-8 sm:mt-12 md:mt-16 mb-12 sm:mb-16 relative">
        {/* Glow Effects */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-purple-600/20 blur-3xl rounded-full -z-10"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-0 left-1/3 w-64 sm:w-80 h-64 sm:h-80 bg-blue-600/20 blur-3xl rounded-full -z-10"
        />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4 text-xs sm:text-sm"
        >
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className={THEME.textMuted}>Available for opportunities</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-4"
        >
          Let’s{' '}
          <span className={`text-transparent bg-clip-text bg-gradient-to-r ${THEME.primaryGradient}`}>
            Connect & Collaborate
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-sm sm:text-base md:text-lg ${THEME.textMuted} max-w-md sm:max-w-xl mx-auto leading-relaxed`}
        >
          Whether you have a groundbreaking idea, an open role, or just want to discuss modern web stack & AI developments—my inbox is always open.
        </motion.p>
      </section>

      {/* 📬 Interactive Contact Cards Grid */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
        }}
        className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-16 sm:mb-20"
      >
        {contactCards.map((card, idx) => {
          const IconComponent = card.icon
          return (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className={`group relative bg-card border ${THEME.cardBorder} rounded-2xl p-6 flex flex-col justify-between hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 overflow-hidden`}
            >
              {/* Card Ambient Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${card.color} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <a
                    href={card.link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-white/5 text-textmain/50 hover:text-white hover:bg-white/10 transition-colors"
                    aria-label={`Open ${card.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                <h3 className="text-lg font-bold text-white mb-1">{card.title}</h3>
                <p className="text-xs sm:text-sm text-textmain/70 truncate">{card.value}</p>
              </div>

              {/* Action area */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <a
                  href={card.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-semibold text-purple-400 group-hover:text-purple-300 transition-colors flex items-center gap-1"
                >
                  Visit Link
                </a>

                {card.isCopyable && (
                  <button
                    onClick={(e) => handleCopyEmail(e, card.value)}
                    className="inline-flex items-center gap-1.5 text-xs text-textmain/60 hover:text-white px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 transition-all"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-400" />
                        <span className="text-green-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </motion.div>
          )
        })}
      </motion.section>

      {/* 📝 Contact Form */}
      <Form />

    </div>
  )
}

export default ContactPage