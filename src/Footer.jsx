import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles, Code2, User, FolderKanban, Mail, Terminal } from 'lucide-react'
import { THEME } from './CustomCursor' // Reusing your site theme

const navItems = [
  { name: 'Home', path: '/', icon: Terminal },
  { name: 'About', path: '/about', icon: User },
  { name: 'Projects', path: '/projects', icon: FolderKanban },
  { name: 'Contact', path: '/contact', icon: Mail },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Handle navbar background blur on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          
          {/* 🔹 Logo */}
          <Link to="/" className="relative z-50 flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.4 }}
              className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-purple-400 group-hover:border-purple-500/50"
            >
              <Code2 className="w-5 h-5" />
            </motion.div>
            <span className="text-xl font-extrabold tracking-tight">
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${THEME.primaryGradient}`}>
                DevNaved
              </span>
            </span>
          </Link>

          {/* 🔹 Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative px-4 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 rounded-full bg-purple-500/20 border border-purple-500/40"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className={isActive ? 'text-white' : 'text-textmain/70 hover:text-white'}>
                    {item.name}
                  </span>
                </Link>
              )
            })}
          </nav>

          {/* 🔹 Right CTA Button (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className="px-4 py-2 text-xs sm:text-sm font-medium rounded-full bg-white/5 hover:bg-purple-500/10 border border-white/10 hover:border-purple-500/40 text-white transition-all duration-300 flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Hire Me</span>
            </Link>
          </div>

          {/* 🔹 Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden relative z-50 p-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:border-purple-500/50 transition-all duration-200"
          >
            {isOpen ? <X className="w-6 h-6 text-purple-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* 🔹 Mobile Menu Sliding Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Dim Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 md:hidden"
            />

            {/* Sliding Panel - Positioned 'fixed' so it slides OVER the page */}
            <motion.div
              initial={{ y: -20, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -20, opacity: 0, scale: 0.98 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-16 inset-x-4 z-40 md:hidden bg-zinc-950/90 border border-white/10 rounded-2xl backdrop-blur-2xl p-6 shadow-2xl overflow-hidden"
            >
              {/* Subtle background glow inside the menu */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/15 blur-2xl rounded-full pointer-events-none -z-10" />

              <div className="flex flex-col space-y-3">
                {navItems.map((item, idx) => {
                  const Icon = item.icon
                  const isActive = location.pathname === item.path
                  return (
                    <motion.div
                      key={item.path}
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-base transition-all duration-200 ${
                          isActive
                            ? 'bg-purple-500/20 border border-purple-500/40 text-white'
                            : 'text-textmain/70 hover:text-white hover:bg-white/5 border border-transparent'
                        }`}
                      >
                        <Icon className={`w-5 h-5 ${isActive ? 'text-purple-400' : 'text-textmain/50'}`} />
                        <span>{item.name}</span>
                      </Link>
                    </motion.div>
                  )
                })}

                <div className="pt-4 border-t border-white/10">
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className={`w-full py-3 px-4 flex items-center justify-center gap-2 text-sm font-semibold text-white rounded-xl ${THEME.btnGradient} shadow-lg shadow-purple-500/20`}
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Let's Build Something</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar