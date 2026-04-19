import React from 'react'

const mernProjects = [
  {
    title: 'Video Conference App',
    url:'https://video-conference-zoom-clone-psi.vercel.app/',
    description: 'Real-time video calling application with authentication and seamless communication features.',
  },
  {
    title: 'Wonderlust (Airbnb Clone)',
    url:'https://wonder-lust-kqfy.onrender.com/',
    description: 'Full-stack booking platform with listings, authentication, and responsive UI.',
  },
  {
    title: 'Zerodha Clone',
    url: 'https://zerodha-clone-six-sooty.vercel.app/',
    description: 'Stock trading UI with separate frontend and dashboard, inspired by Zerodha platform.',
  },
]

const MernSection = () => {
  return (
    <section className='my-12 sm:my-16 md:my-20 px-2 sm:px-0'>
      
      {/* Heading */}
      <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4'>
        MERN{' '}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600'>
          Projects
        </span>
      </h2>

      <p className='text-sm sm:text-base text-textmain/60 text-center mb-8 sm:mb-12 max-w-md sm:max-w-xl mx-auto'>
        Full-stack applications built using MongoDB, Express, React, and Node.js
      </p>

      {/* Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
        {mernProjects.map((project, index) => (
          <a
            href={project.url}
            key={index}
            target='_blank'
            rel='noopener noreferrer'
            className='bg-card border border-white/10 
            rounded-xl sm:rounded-2xl 
            p-5 sm:p-6 
            transition-all duration-300 
            hover:border-purple-500/50 
            hover:shadow-xl hover:shadow-purple-500/10 
            hover:-translate-y-1 sm:hover:-translate-y-2
            hover:scale-[1.02]'
          >
            <h3 className='text-lg sm:text-xl font-bold text-textmain mb-2 sm:mb-3'>
              {project.title}
            </h3>

            <p className='text-xs sm:text-sm text-textmain/60 leading-relaxed'>
              {project.description}
            </p>
          </a>
        ))}
      </div>

    </section>
  )
}

export default MernSection