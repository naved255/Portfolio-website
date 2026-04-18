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
    <section className='my-20'>
      <h2 className='text-3xl font-bold text-center mb-4'>
        MERN <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600'>Projects</span>
      </h2>

      <p className='text-textmain/60 text-center mb-12 max-w-xl mx-auto'>
        Full-stack applications built using MongoDB, Express, React, and Node.js
      </p>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {mernProjects.map((project, index) => (
          <a href={project.url}
            key={index}
            className='bg-card border border-transparent hover:border-purple-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2'
          >
            <h3 className='text-xl font-bold text-textmain mb-3'>
              {project.title}
            </h3>
            <p className='text-textmain/60 text-sm leading-relaxed'>
              {project.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  )
}

export default MernSection