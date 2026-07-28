import React from 'react'
import { motion } from 'framer-motion'
import Hero from './Hero'
import What from './What'
import SkillCard from './SkillCard'
import { CustomCursor, THEME } from '../../CustomCursor'
import { Layers, Rocket } from 'lucide-react'

const skills = [
  { title: 'React.js', url: 'react.svg', description: 'Building dynamic UIs' },
  { title: 'Node.js', url: 'node.svg', description: 'Server-side development' },
  { title: 'MongoDB', url: 'mongo.svg', description: 'NoSQL databases' },
  { title: 'Express.js', url: 'express.svg', description: 'RESTful APIs' },
  { title: 'JavaScript', url: 'js.svg', description: 'ES6+ & Modern JS' },
  { title: 'Tailwind CSS', url: 'tailwind.svg', description: 'Modern responsive styling' },
  { title: 'Machine Learning', url: 'ml.svg', description: 'Model building, NLP & data analysis' },
  { title: 'Deep Learning', url: 'dl.svg', description: 'CNN, RNN & neural architectures' },
]

const HomePage = () => {
  return (
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 overflow-hidden">
      {/* 🎯 Dynamic Custom Pointer Circle */}
      <CustomCursor />

      <Hero />
      <What />

      {/* 🛠 Tech Stack Grid */}
      <section className="my-16 sm:my-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-3 text-xs sm:text-sm">
            <Layers className="w-4 h-4 text-purple-400" />
            <span className={THEME.textMuted}>Capabilities</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-3">
            My{' '}
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${THEME.primaryGradient}`}>
              Tech Stack
            </span>
          </h2>

          <p className={`text-sm sm:text-base ${THEME.textMuted} max-w-md sm:max-w-xl mx-auto`}>
            Technologies I work with to bring high-performance web applications and neural solutions to life.
          </p>
        </motion.div>

        {/* Scroll-Revealed Staggered Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </motion.div>
      </section>

      {/* 🚀 Dynamic CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`my-16 sm:my-24 text-center bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-white/10 rounded-3xl px-6 sm:px-12 py-12 sm:py-16 relative overflow-hidden`}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
          Let's build something amazing together
        </h2>

        <p className={`text-sm sm:text-base md:text-lg ${THEME.textMuted} mb-8 max-w-md sm:max-w-lg md:max-w-xl mx-auto`}>
          I'm currently available for freelance projects and full-time software engineering roles.
        </p>

        <motion.a
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          href="/contact"
          className={`inline-flex items-center gap-2 px-8 py-3.5 text-base ${THEME.btnGradient} text-white font-semibold rounded-full shadow-lg ${THEME.btnShadow} transition-all duration-300`}
        >
          <Rocket className="w-5 h-5" />
          <span>Get In Touch</span>
        </motion.a>
      </motion.section>
    </div>
  )
}

export default HomePage