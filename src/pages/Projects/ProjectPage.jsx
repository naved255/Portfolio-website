import React from 'react'
import MernSection from './MernSection'
import MLSection from './MLSection'

const ProjectPage = () => {
  return (
    <div className='max-w-6xl mx-auto px-4'>

      {/* 🔥 Hero Section */}
      <section className='text-center mt-16 mb-20 relative'>
        
        {/* Glow Effects */}
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full'></div>
        <div className='absolute bottom-0 left-1/3 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full'></div>

        <p className='text-textmain/60 mb-2 tracking-wide'>
          My Work & Projects
        </p>

        <h1 className='text-4xl md:text-5xl font-bold leading-tight mb-4 relative'>
          Turning ideas into{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600'>
            real-world applications
          </span>
        </h1>

        <p className='text-textmain/70 max-w-2xl mx-auto text-lg relative'>
          A collection of my work in full-stack development, machine learning, and deep learning—focused on building scalable and intelligent solutions.
        </p>
      </section>

      {/* 🔷 MERN Projects */}
      <div className='relative z-10'>
        <MernSection />
      </div>

      {/* 🟣 ML / DL Projects */}
      <div className='relative z-10'>
        <MLSection />
      </div>

      {/* 🚀 Bottom CTA */}
      <section className='my-24 text-center bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-3xl p-12'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4'>
          Have an idea in mind?
        </h2>
        <p className='text-textmain/70 mb-8 max-w-xl mx-auto'>
          Let’s collaborate and build something impactful together.
        </p>
        <a
          href='/contact'
          className='inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-1'
        >
          Get In Touch
        </a>
      </section>

    </div>
  )
}

export default ProjectPage