import React from 'react'
import { motion } from 'framer-motion'
import { THEME } from '../../CustomCursor'

const SkillCard = ({ title, url, description }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`group relative ${THEME.cardBg} border ${THEME.cardBorder} rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 ${THEME.cardHoverBorder} hover:shadow-xl ${THEME.cardHoverShadow} cursor-pointer w-full`}
    >
      {/* Icon Wrapper */}
      <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-blue-500/15 to-purple-600/15 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
        <img
          src={url}
          alt={title}
          className="w-10 h-10 sm:w-12 sm:h-12 object-contain filter drop-shadow-md"
        />
      </div>

      <h3 className={`text-lg sm:text-xl font-bold ${THEME.textMain} text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${THEME.primaryGradient} transition-colors`}>
        {title}
      </h3>

      {description && (
        <p className={`text-xs sm:text-sm ${THEME.textMuted} text-center leading-relaxed`}>
          {description}
        </p>
      )}
    </motion.div>
  )
}

export default SkillCard