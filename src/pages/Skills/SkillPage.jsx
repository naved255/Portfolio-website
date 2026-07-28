import React from 'react'
import { motion } from 'framer-motion'
import {
  Code2,
  Server,
  Database,
  BrainCircuit,
  Sparkles,
  Cpu,
} from 'lucide-react'

import { CustomCursor } from '../../CustomCursor'
// ==========================================
// 🎨 CENTRAL THEME CONFIGURATION
// Keep this consistent with your ProjectPage theme!
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

  // Icon Container Gradients
  iconBg: 'from-blue-500/15 to-purple-600/15',
  iconBorder: 'border-white/10',

  // Text Colors
  textMain: 'text-textmain',
  textMuted: 'text-textmain/60',
  textSubtle: 'text-textmain/40',
}

// Data with category icons, descriptions, and proficiency tags
export const skillsData = [
  {
    category: 'Frontend Development',
    icon: Code2,
    description:
      'Crafting responsive, accessible, and highly interactive user interfaces with modern web standards.',
    items: [
      { title: 'React.js', icon: '/react.svg', level: 'Advanced' },
      { title: 'JavaScript', icon: '/js.svg', level: 'Advanced' },
      { title: 'Tailwind CSS', icon: '/tailwind.svg', level: 'Intermediate' },
    ],
  },
  {
    category: 'Backend Architecture',
    icon: Server,
    description:
      'Designing RESTful APIs, microservices, and server-side application logic.',
    items: [
      { title: 'Node.js', icon: '/node.svg', level: 'Advanced' },
      { title: 'Express.js', icon: '/express.svg', level: 'Advanced' },
    ],
  },
  {
    category: 'Database Management',
    icon: Database,
    description:
      'Structuring relational and NoSQL databases for high performance and data integrity.',
    items: [
      { title: 'MongoDB', icon: '/mongo.svg', level: 'Advanced' },
      { title: 'MySQL', icon: '/sql.svg', level: 'Intermediate' },
    ],
  },
  {
    category: 'Machine Learning & AI',
    icon: BrainCircuit,
    description:
      'Building predictive models, neural networks, and computer vision / NLP algorithms.',
    items: [
      { title: 'Machine Learning', icon: '/ml.svg', level: 'Core' },
      { title: 'Deep Learning', icon: '/dl.svg', level: 'Core' },
      { title: 'CNN', icon: '/cnn.svg', level: 'Neural Nets' },
      { title: 'RNN', icon: '/rnn.svg', level: 'Sequence' },
      { title: 'NLP', icon: '/nlp.jpg', level: 'Text AI' },
    ],
  },
]

// ==========================================
// 🌊 ANIMATION VARIANTS
// ==========================================
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const staggerGrid = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// Floating Ambient Glows
const FloatingGlows = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
    <motion.div
      animate={{
        y: [0, -30, 0],
        x: [0, 20, 0],
      }}
      transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      className={`absolute top-20 right-10 w-72 h-72 ${THEME.glowPurple} blur-3xl rounded-full`}
    />
    <motion.div
      animate={{
        y: [0, 40, 0],
        x: [0, -20, 0],
      }}
      transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      className={`absolute bottom-20 left-10 w-80 h-80 ${THEME.glowBlue} blur-3xl rounded-full`}
    />
  </div>
)

// Individual Interactive Skill Card
const SkillCard = ({ title, icon, level }) => {
  return (
    <>
      <CustomCursor />
      <motion.div
        variants={fadeInUp}
        whileHover={{ y: -6, scale: 1.03 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className={`group relative ${THEME.cardBg} border ${THEME.cardBorder} rounded-2xl p-5 flex flex-col items-center justify-center gap-3 transition-all duration-300 ${THEME.cardHoverBorder} hover:shadow-xl ${THEME.cardHoverShadow}`}
      >

        {/* Icon Wrapper with Subtle Inner Glow */}
        <div
          className={`w-16 h-16 flex items-center justify-center bg-gradient-to-br ${THEME.iconBg} border ${THEME.iconBorder} rounded-xl group-hover:scale-110 transition-transform duration-300`}
        >
          <img
            src={icon}
            alt={title}
            className="w-10 h-10 object-contain drop-shadow-md"
            onError={(e) => {
              // Fallback text icon in case asset path fails
              e.target.style.display = 'none'
            }}
          />
        </div>

        <div className="text-center">
          <p className={`${THEME.textMain} font-semibold text-base group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${THEME.primaryGradient} transition-colors`}>
            {title}
          </p>

          {level && (
            <span className="text-[10px] uppercase tracking-wider text-white/40 font-medium mt-1 inline-block">
              {level}
            </span>
          )}
        </div>
      </motion.div>

    </>
  )
}

// Category Section with Header & Grid
const SkillSection = ({ category, icon: CategoryIcon, description, items }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className="mb-16 sm:mb-20"
    >
      {/* Section Header */}
      <motion.div variants={fadeInUp} className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-purple-400">
            <CategoryIcon className="w-5 h-5" />
          </div>
          <h2 className={`text-xl sm:text-2xl font-bold ${THEME.textMain}`}>
            {category}
          </h2>
        </div>

        {description && (
          <p className={`text-sm ${THEME.textMuted} max-w-2xl`}>
            {description}
          </p>
        )}
      </motion.div>

      {/* Grid of Cards */}
      <motion.div
        variants={staggerGrid}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6"
      >
        {items.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </motion.div>
    </motion.div>
  )
}

// Main Page Component
const SkillsPage = () => {
  return (
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 overflow-hidden">
      <FloatingGlows />

      {/* 🚀 Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mt-6 mb-16 sm:mb-20 relative"
      >
        <div className="inline-block mb-3">
          <span className="px-4 py-1.5 rounded-full text-xs sm:text-sm bg-white/5 border border-white/10 text-purple-300 font-medium inline-flex items-center gap-2">
            <Cpu className="w-4 h-4 text-purple-400" /> Technical Expertise
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Tech Stack &{' '}
          <span className={`text-transparent bg-clip-text bg-gradient-to-r ${THEME.primaryGradient}`}>
            Capabilities
          </span>
        </h1>

        <p className={`text-sm sm:text-base md:text-lg ${THEME.textMuted} max-w-md sm:max-w-xl md:max-w-2xl mx-auto`}>
          A breakdown of the tools, frameworks, and technologies I leverage to build production-grade web applications and machine learning solutions.
        </p>
      </motion.section>

      {/* 🛠 Skills Categories */}
      <div>
        {skillsData.map((section, index) => (
          <SkillSection
            key={index}
            category={section.category}
            icon={section.icon}
            description={section.description}
            items={section.items}
          />
        ))}
      </div>

      {/* 💡 Sub-callout Footer */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="mt-12 text-center p-6 rounded-2xl bg-white/5 border border-white/10 max-w-2xl mx-auto"
      >
        <p className={`text-xs sm:text-sm ${THEME.textMuted} flex items-center justify-center gap-2`}>
          <Sparkles className="w-4 h-4 text-purple-400 shrink-0" />
          Always expanding my stack with modern frameworks and cloud-native practices.
        </p>
      </motion.div>
    </div>
  )
}

export default SkillsPage