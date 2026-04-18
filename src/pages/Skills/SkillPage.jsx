import React from 'react'
import { skillsData } from './SkillData'
import SkillSection from './SkillSection'

const SkillsPage = () => {
  return (
    <div className='max-w-6xl mx-auto px-4 my-20'>

      <h1 className='text-4xl font-bold text-center mb-16'>
        My <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600'>Skills</span>
      </h1>

      {skillsData.map((section, index) => (
        <SkillSection
          key={index}
          category={section.category}
          items={section.items}
        />
      ))}

    </div>
  )
}

export default SkillsPage

