import React from 'react'

const SkillCard = ({ title, url, description }) => {
  return (
    <div className='group bg-card border border-transparent hover:border-purple-500/50 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2 cursor-pointer w-full max-w-xs'>
      <div className='w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
        <img
          src={url}
          alt={title}
          className='w-12 h-12 object-contain'
        />
      </div>
      <h3 className='text-textmain font-bold text-xl text-center'>
        {title}
      </h3>
      {description && (
        <p className='text-textmain/60 text-sm text-center'>
          {description}
        </p>
      )}
    </div>
  )
}

export default SkillCard
