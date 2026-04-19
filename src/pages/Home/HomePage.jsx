import React from 'react'
import Hero from './Hero'
import What from './What'
import SkillCard from './SkillCard'

const skills = [
  { title: 'React.js', url: 'react.svg', description: 'Building dynamic UIs' },
  { title: 'Node.js', url: 'node.svg', description: 'Server-side development' },
  { title: 'MongoDB', url: 'mongo.svg', description: 'NoSQL databases' },
  { title: 'Express.js', url: 'express.svg', description: 'RESTful APIs' },
  { title: 'JavaScript', url: 'js.svg', description: 'ES6+ & TypeScript' },
  { title: 'Tailwind CSS', url: 'tailwind.svg', description: 'Modern styling' },
  { title: 'Machine Learning', url: 'ml.svg', description: 'Model building, NLP & data analysis' },
  { title: 'Deep Learning', url: 'dl.svg', description: 'CNN, RNN & neural network architectures' },
]

const HomePage = () => {
  return (
    <div className='max-w-6xl mx-auto px-4 sm:px-6'>

      <Hero />
      <What />

      {/* Skills Section */}
      <section className='my-12 sm:my-16 md:my-20'>
        
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4'>
          My{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600'>
            Tech Stack
          </span>
        </h2>

        <p className='text-sm sm:text-base text-textmain/60 text-center mb-8 sm:mb-12 max-w-md sm:max-w-xl mx-auto'>
          Technologies I work with to bring your projects to life
        </p>

        {/* Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>

      </section>

      {/* CTA Section */}
      <section className='my-12 sm:my-16 md:my-20 
      bg-gradient-to-r from-blue-500/10 to-purple-600/10 
      rounded-2xl md:rounded-3xl 
      px-6 sm:px-8 md:px-12 py-10 sm:py-12 md:py-16 
      text-center'>

        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight'>
          Let's build something amazing together
        </h2>

        <p className='text-sm sm:text-base md:text-lg text-textmain/70 
        mb-6 sm:mb-8 max-w-md sm:max-w-lg md:max-w-xl mx-auto'>
          I'm currently available for freelance work and full-time positions.
        </p>

        <a 
          href='/contact' 
          className='inline-block 
          px-6 sm:px-7 md:px-8 
          py-3 sm:py-3.5 md:py-4 
          text-sm sm:text-base md:text-lg
          bg-gradient-to-r from-blue-500 to-purple-600 
          text-white font-semibold rounded-full 
          hover:shadow-lg hover:shadow-purple-500/30 
          transition-all duration-300 
          hover:-translate-y-1 hover:scale-105'>
          
          Get In Touch
        </a>

      </section>

    </div>
  )
}

export default HomePage