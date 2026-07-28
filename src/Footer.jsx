import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, ArrowUp, Heart, Terminal, Code2, Sparkles } from 'lucide-react'
import { THEME } from './CustomCursor' // Reusing your site theme

// 🔹 SVGs for reliable social icon rendering
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

const techBadges = [
  'React.js',
  'Node.js',
  'MongoDB',
  'Express',
  'Tailwind CSS',
  'Machine Learning',
  'Deep Learning',
  'Python',
]

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/naved255',
    icon: GithubIcon,
    hoverColor: 'hover:border-purple-500/50 hover:text-purple-400 hover:shadow-purple-500/20',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mohd-naved-ahmad-6a643231b/',
    icon: LinkedinIcon,
    hoverColor: 'hover:border-blue-500/50 hover:text-blue-400 hover:shadow-blue-500/20',
  },
  {
    name: 'Email',
    href: 'mailto:navedahmad2314lko@gmail.com',
    icon: Mail,
    hoverColor: 'hover:border-pink-500/50 hover:text-pink-400 hover:shadow-pink-500/20',
  },
]

const quickNavigation = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]

const Footer = () => {
const scrollToTop = () => {
  // 1. Try standard window scroll
  window.scrollTo({ top: 0, behavior: 'smooth' })

  // 2. Fallback for document element (HTML)
  if (document.documentElement) {
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // 3. Fallback for body
  if (document.body) {
    document.body.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

  return (
    <footer className="relative border-t border-white/10 bg-black/40 backdrop-blur-xl mt-20 overflow-hidden">
      {/* 🔮 Background Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-32 bg-purple-600/10 blur-3xl rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-32 bg-blue-600/10 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-8">
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
          
          {/* Brand Info (Spans 5 Columns) */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="inline-block group">
              <h2 className="text-2xl font-extrabold tracking-tight flex items-center gap-2">
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${THEME.primaryGradient}`}>
                  DevNaved
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-mono">
                  v2.0
                </span>
              </h2>
            </Link>

            <p className={`text-sm ${THEME.textMuted} leading-relaxed max-w-sm`}>
              Full-Stack Developer bridging scalable Web Applications with Machine Learning intelligence. Focused on high-performance solutions and intuitive user experiences.
            </p>

            {/* Recruiter Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Open for Software Engineering & ML roles
            </div>
          </div>

          {/* Quick Links (Spans 3 Columns) */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white flex items-center gap-2">
              <Terminal className="w-4 h-4 text-purple-400" /> Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {quickNavigation.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    className="text-textmain/60 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Badges (Spans 4 Columns) */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white flex items-center gap-2">
              <Code2 className="w-4 h-4 text-purple-400" /> Tech Stack
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {techBadges.map((tech, idx) => (
                <motion.span
                  key={idx}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/5 border border-white/10 text-textmain/80 hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 transition-all cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

        </div>

        {/* Middle Divider & Social Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Social Icons with Tooltips */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social, idx) => {
              const IconComponent = social.icon
              return (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2.5 rounded-xl bg-white/5 border border-white/10 text-textmain/70 transition-all duration-300 shadow-lg ${social.hoverColor}`}
                >
                  <IconComponent />
                </motion.a>
              )
            })}
          </div>

          {/* Smooth Scroll To Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-textmain/80 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all shadow-md group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-purple-400 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>

        </div>

        {/* Bottom Rights Line */}
        <div className="mt-8 text-center text-xs text-textmain/40 flex flex-col sm:flex-row items-center justify-center gap-1.5">
          <span>© {new Date().getFullYear()} Mohd Naved Ahmad. Built with</span>
          <span className="inline-flex items-center gap-1 text-purple-400">
            <Heart className="w-3.5 h-3.5 fill-purple-400/20 text-purple-400 inline" /> React & Tailwind CSS
          </span>
        </div>

      </div>
    </footer>
  )
}

export default Footer