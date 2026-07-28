import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Lock, Sparkles, Code2, BrainCircuit } from 'lucide-react'
import { CustomCursor } from '../../CustomCursor'

// ==========================================
// 🎨 CENTRAL THEME CONFIGURATION
// Change your colors, gradients, and styling here!
// ==========================================
const THEME = {
  // Gradients
  primaryGradient: 'from-blue-500 to-purple-600',
  glowBlue: 'bg-blue-500/20',
  glowPurple: 'bg-purple-500/20',
  
  // Card & Border Colors
  cardBg: 'bg-card',
  cardBorder: 'border-white/10',
  cardHoverBorder: 'hover:border-purple-500/50',
  cardHoverShadow: 'hover:shadow-purple-500/10',
  
  // Text Colors
  textMain: 'text-textmain',
  textMuted: 'text-textmain/60',
  textSubtle: 'text-textmain/40',
  
  // Button & Accent Colors
  btnGradient: 'bg-gradient-to-r from-blue-500 to-purple-600',
  btnShadow: 'hover:shadow-purple-500/30',
}

// Data
const mernProjects = [
  {
    title: 'Video Conference App',
    url: 'https://video-conference-zoom-clone-psi.vercel.app/',
    description: 'Real-time video calling application with authentication and seamless communication features.',
    tags: ['React', 'Node.js', 'WebRTC', 'MongoDB'],
  },
  {
    title: 'Wonderlust (Airbnb Clone)',
    url: 'https://wonder-lust-kqfy.onrender.com/',
    description: 'Full-stack booking platform with listings, authentication, and responsive UI.',
    tags: ['Express', 'React', 'MongoDB', 'Tailwind'],
  },
  {
    title: 'Zerodha Clone',
    url: 'https://zerodha-clone-six-sooty.vercel.app/',
    description: 'Stock trading UI with separate frontend and dashboard, inspired by Zerodha platform.',
    tags: ['React', 'Redux', 'Node.js', 'Chart.js'],
  },
]

const mlProjects = [
  {
    title: 'Face Mask Detection (CNN)',
    url: '',
    description: 'Deep learning model using CNN to detect whether a person is wearing a mask or not in real-time.',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'CNN'],
  },
  {
    title: 'Sentiment Analysis (RNN)',
    url: 'https://sentiment-analysis-project-self.vercel.app/',
    description: 'Natural Language Processing model using RNN to classify text sentiment as positive or negative.',
    tags: ['PyTorch', 'NLP', 'RNN', 'Streamlit'],
  },
]

// ==========================================
// 🌊 ANIMATION VARIANTS
// ==========================================
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

// Floating Background Particles Component
const FloatingBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
    <motion.div
      animate={{
        y: [0, -30, 0],
        x: [0, 20, 0],
        rotate: [0, 10, 0],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      className={`absolute top-10 left-10 w-64 h-64 ${THEME.glowPurple} blur-3xl rounded-full`}
    />
    <motion.div
      animate={{
        y: [0, 40, 0],
        x: [0, -25, 0],
        rotate: [0, -10, 0],
      }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      className={`absolute top-1/2 right-10 w-80 h-80 ${THEME.glowBlue} blur-3xl rounded-full`}
    />
  </div>
)

// Project Card Component
const ProjectCard = ({ project }) => {
  const isClickable = Boolean(project.url && project.url.trim() !== '')

  return (
      <>
      <CustomCursor/>
            <motion.div
      variants={fadeInUp}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={() => isClickable && window.open(project.url, '_blank')}
      className={`group relative ${THEME.cardBg} border ${THEME.cardBorder} rounded-2xl p-6 transition-all duration-300 ${THEME.cardHoverBorder} hover:shadow-xl ${THEME.cardHoverShadow} ${
        isClickable ? 'cursor-pointer' : 'cursor-default opacity-85'
      }`}
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className={`text-xl font-bold ${THEME.textMain} group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${THEME.primaryGradient} transition-colors`}>
          {project.title}
        </h3>
        {isClickable ? (
          <ExternalLink className="w-5 h-5 text-white/40 group-hover:text-purple-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        ) : (
          <Lock className="w-4 h-4 text-white/30" />
        )}
      </div>

      <p className={`text-sm ${THEME.textMuted} leading-relaxed mb-4`}>
        {project.description}
      </p>

      {/* Tech Stack Pills */}
      <div className="flex flex-wrap gap-2 mb-2">
        {project.tags?.map((tag, idx) => (
          <span key={idx} className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
            {tag}
          </span>
        ))}
      </div>

      {!isClickable && (
        <p className={`text-xs ${THEME.textSubtle} mt-3 flex items-center gap-1`}>
          <span>•</span> Link coming soon
        </p>
      )}
    </motion.div>
      </>
  )
}

// Section Header Component
const SectionHeader = ({ icon: Icon, title, highlightedText, description }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-100px' }}
    variants={fadeInUp}
    className="text-center mb-10 sm:mb-12"
  >
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-3 text-xs sm:text-sm text-white/80">
      <Icon className="w-4 h-4 text-purple-400" />
      <span>{title}</span>
    </div>

    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-3">
      {title}{' '}
      <span className={`text-transparent bg-clip-text bg-gradient-to-r ${THEME.primaryGradient}`}>
        {highlightedText}
      </span>
    </h2>

    <p className={`text-sm sm:text-base ${THEME.textMuted} max-w-md sm:max-w-xl mx-auto`}>
      {description}
    </p>
  </motion.div>
)

// Main Page Component
const ProjectPage = () => {
  return (
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-10 overflow-hidden">
      <FloatingBackground />

      {/* 🚀 Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mt-6 sm:mt-10 mb-16 sm:mb-24 relative"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="inline-block mb-3"
        >
          <span className="px-4 py-1.5 rounded-full text-xs sm:text-sm bg-white/5 border border-white/10 text-purple-300 font-medium flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-400" /> My Work & Projects
          </span>
        </motion.div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-4 tracking-tight">
          Turning ideas into{' '}
          <span className={`text-transparent bg-clip-text bg-gradient-to-r ${THEME.primaryGradient}`}>
            real-world applications
          </span>
        </h1>

        <p className={`text-sm sm:text-base md:text-lg ${THEME.textMuted} max-w-md sm:max-w-xl md:max-w-2xl mx-auto`}>
          A curated showcase of full-stack systems and machine learning models designed with performance and scalability in mind.
        </p>
      </motion.section>

      {/* 🔷 MERN Projects Section */}
      <section className="my-16 sm:my-20">
        <SectionHeader
          icon={Code2}
          title="MERN"
          highlightedText="Projects"
          description="Full-stack applications built using MongoDB, Express, React, and Node.js"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {mernProjects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </motion.div>
      </section>

      {/* 🟣 ML / DL Projects Section */}
      <section className="my-16 sm:my-24">
        <SectionHeader
          icon={BrainCircuit}
          title="Machine Learning &"
          highlightedText="Deep Learning"
          description="Intelligent systems built using neural networks, NLP, and computer vision"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {mlProjects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </motion.div>
      </section>

      {/* 🚀 Dynamic Bottom CTA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className={`my-16 sm:my-24 text-center bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-white/10 rounded-3xl px-6 sm:px-12 py-12 sm:py-16 relative overflow-hidden`}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Have an idea in mind?
        </h2>

        <p className={`text-sm sm:text-base md:text-lg ${THEME.textMuted} mb-8 max-w-md sm:max-w-xl mx-auto`}>
          Let’s collaborate and build something impactful together.
        </p>

        <motion.a
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          href="/contact"
          className={`inline-block px-8 py-3.5 text-base ${THEME.btnGradient} text-white font-semibold rounded-full shadow-lg ${THEME.btnShadow} transition-all duration-300`}
        >
          Get In Touch
        </motion.a>
      </motion.section>
    </div>
  )
}

export default ProjectPage