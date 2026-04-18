import React from 'react'

const SkillCard = ({ title, icon }) => {
  return (
    <div className='group bg-card border border-transparent hover:border-purple-500/50 rounded-2xl p-5 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2'>
      
      <div className='w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl group-hover:scale-110 transition'>
        <img src={icon} alt={title} className='w-10 h-10 object-contain' />
      </div>

      <p className='text-textmain font-medium text-center'>
        {title}
      </p>
    </div>
  )
}

export default SkillCard