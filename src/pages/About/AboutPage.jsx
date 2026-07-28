import React from 'react'
import { motion } from 'framer-motion'
import { 
  Sparkles, 
  Code2, 
  Cpu, 
  Brain, 
  Terminal, 
  Rocket, 
  Layers, 
  CheckCircle2, 
  ArrowRight,
  Database,
  Globe
} from 'lucide-react'
import { CustomCursor, THEME } from '../../CustomCursor'

const skills = [
  { name: 'React.js', category: 'frontend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Express.js', category: 'backend' },
  { name: 'MongoDB', category: 'database' },
  { name: 'JavaScript', category: 'language' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Machine Learning', category: 'ai' },
  { name: 'Deep Learning', category: 'ai' },
  { name: 'CNN', category: 'ai' },
  { name: 'RNN', category: 'ai' },
  { name: 'NLP', category: 'ai' },
]

const highlights = [
  {
    title: 'Full-Stack Development',
    icon: Code2,
    gradient: 'from-blue-500/20 to-cyan-500/10',
    borderColor: 'hover:border-blue-500/50',
    iconColor: 'text-blue-400',
    description: 'Architecting end-to-end web applications with reactive frontends, resilient REST/GraphQL APIs, and optimized databases.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB']
  },
  {
    title: 'Machine Learning & AI',
    icon: Brain,
    gradient: 'from-purple-500/20 to-pink-500/10',
    borderColor: 'hover:border-purple-500/50',
    iconColor: 'text-purple-400',
    description: 'Training and deploying neural models for computer vision, natural language processing, and predictive analytics.',
    tags: ['PyTorch', 'CNNs', 'Transformers', 'NLP']
  }
]

const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 overflow-hidden">

            {/* 🎯 Dynamic Custom Pointer Circle */}
            <CustomCursor />

      {/* 🔥 Hero Section */}
      <section className="text-center py-6 mt-8 sm:mt-12 md:mt-16 mb-12 sm:mb-16 relative">
        {/* Floating Glow Effects */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-purple-600/20 blur-3xl rounded-full -z-10"
        />
        <motion.div 
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 left-1/3 w-64 sm:w-80 h-64 sm:h-80 bg-blue-600/20 blur-3xl rounded-full -z-10"
        />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4 text-xs sm:text-sm"
        >
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className={THEME.textMuted}>Get to know me</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-4"
        >
          Crafting{' '}
          <span className={`text-transparent bg-clip-text bg-gradient-to-r ${THEME.primaryGradient}`}>
            scalable & intelligent
          </span>{' '}
          systems
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-sm sm:text-base md:text-lg ${THEME.textMuted} max-w-md sm:max-w-2xl mx-auto leading-relaxed`}
        >
          Full-Stack Developer blending modern web technologies with machine learning to turn complex engineering problems into clean digital products.
        </motion.p>
      </section>

      {/* 👨‍💻 Bio Card */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7 }}
        className="mb-16 sm:mb-20"
      >
        <div className={`relative bg-gradient-to-br from-white/[0.05] to-white/[0.01] border ${THEME.cardBorder} rounded-2xl md:rounded-3xl p-6 sm:p-10 md:p-12 backdrop-blur-md shadow-2xl overflow-hidden group`}>
          
          {/* Subtle Top Border Highlight */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
              <Terminal className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Who I Am</h2>
          </div>
          
          <div className="space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg text-textmain/80 leading-relaxed">
            <p>
              I'm <span className="font-semibold text-white underline decoration-purple-500/50 underline-offset-4">Mohd Naved Ahmad</span>, a Full-Stack Software Developer deeply passionate about building performant applications and intelligent software.
            </p>

            <p className={THEME.textMuted}>
              My engineering focus centers on architecting responsive web applications with the <strong className="text-white">MERN stack</strong> while pushing boundaries in <strong className="text-white">Applied Machine Learning</strong> and Neural Networks.
            </p>

            <p className={THEME.textMuted}>
              By bridging full-stack systems architecture with deep learning algorithms, I build applications that are not only efficient and scalable, but genuinely smart.
            </p>
          </div>
        </div>
      </motion.section>

      {/* 🧠 Interactive Skills Badges */}
      <section className="mb-16 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-3 text-xs sm:text-sm">
            <Layers className="w-4 h-4 text-purple-400" />
            <span className={THEME.textMuted}>Tech Stack</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-center">
            My Core{' '}
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${THEME.primaryGradient}`}>
              Skills & Tools
            </span>
          </h2>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
          }}
          className="flex flex-wrap justify-center gap-2.5 sm:gap-3.5 max-w-4xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 15 },
                visible: { opacity: 1, scale: 1, y: 0 }
              }}
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium
              bg-card border ${THEME.cardBorder} rounded-full 
              text-textmain/80 hover:text-white hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20
              transition-all duration-300 flex items-center gap-2 cursor-pointer`}
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
              {skill.name}
            </motion.span>
          ))}
        </motion.div>
      </section>

      {/* 🚀 Feature Highlights */}
      <section className="mb-16 sm:mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {highlights.map((item, idx) => {
            const IconComponent = item.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -6 }}
                className={`bg-card p-6 sm:p-8 rounded-2xl md:rounded-3xl border ${THEME.cardBorder} ${item.borderColor} transition-all duration-300 relative overflow-hidden group shadow-lg`}
              >
                {/* Background Card Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

                <div className="flex items-center gap-3.5 mb-4">
                  <div className={`p-3 rounded-2xl bg-white/5 border border-white/10 ${item.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {item.title}
                  </h3>
                </div>

                <p className={`text-sm sm:text-base ${THEME.textMuted} leading-relaxed mb-6`}>
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-purple-300 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* 📈 Call To Action (CTA) */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`my-16 sm:my-20 text-center 
        bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 
        border ${THEME.cardBorder} rounded-2xl md:rounded-3xl 
        px-6 sm:px-8 md:px-12 py-12 sm:py-16 relative overflow-hidden`}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-white">
          Let’s build something together
        </h2>

        <p className={`text-sm sm:text-base md:text-lg ${THEME.textMuted} mb-8 max-w-md sm:max-w-xl mx-auto`}>
          I'm always open to discussing new software roles, machine learning research, or technical collaborations.
        </p>

        <motion.a
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          href="/contact"
          className={`inline-flex items-center gap-2 px-8 py-3.5 
          text-sm sm:text-base font-semibold ${THEME.btnGradient} 
          text-white rounded-full shadow-lg ${THEME.btnShadow} transition-all duration-300`}
        >
          <span>Get In Touch</span>
          <ArrowRight className="w-4 h-4" />
        </motion.a>
      </motion.section>

    </div>
  )
}

export default AboutPage