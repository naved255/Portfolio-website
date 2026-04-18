import React from 'react'
import SkillCard from './SkillCard'

const SkillSection = ({ category, items }) => {
  return (
    <div className='mb-16'>
      <h3 className='text-2xl font-bold mb-6 text-textmain'>
        {category}
      </h3>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>
        {items.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </div>
  )
}

export default SkillSection