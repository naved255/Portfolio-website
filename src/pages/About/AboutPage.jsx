import React from 'react'

const skills = [
  'React.js','Node.js','Express.js','MongoDB','JavaScript',
  'Tailwind CSS','Machine Learning','Deep Learning','CNN','RNN','NLP'
]

const AboutPage = () => {
  return (
    <div className='max-w-6xl mx-auto px-4 sm:px-6'>

      {/* 🔥 Hero Section */}
      <section className='text-center py-1.5 mt-12 sm:mt-16 md:mt-20 mb-16 sm:mb-20 relative overflow-hidden'>
        
        {/* Glow Effects */}
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-52 sm:w-72 h-52 sm:h-72 bg-purple-500/20 blur-3xl rounded-full'></div>
        <div className='absolute bottom-0 left-1/3 w-52 sm:w-72 h-52 sm:h-72 bg-blue-500/20 blur-3xl rounded-full'></div>

        <p className='text-xs sm:text-sm text-textmain/60 mb-2 tracking-wide'>
          About Me
        </p>

        <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-4 relative'>
          Crafting{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600'>
            scalable & intelligent
          </span>{' '}
          solutions
        </h1>

        <p className='text-sm sm:text-base md:text-lg text-textmain/70 max-w-md sm:max-w-xl mx-auto relative'>
          Full-Stack Developer blending modern web technologies with machine learning to build impactful digital experiences.
        </p>
      </section>

      {/* 👨‍💻 About Content */}
      <section className='mb-16 sm:mb-20'>
        <div className='bg-card border border-white/10 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 shadow-lg'>
          
          <p className='text-sm sm:text-base md:text-lg text-textmain/80 leading-relaxed mb-4 sm:mb-6'>
            I'm <span className='font-semibold text-textmain'>Mohd Naved Ahmad</span>, a Full-Stack Developer and Machine Learning enthusiast.
          </p>

          <p className='text-sm sm:text-base md:text-lg text-textmain/70 leading-relaxed mb-4 sm:mb-6'>
            I specialize in building scalable web applications using the MERN stack and developing intelligent systems using deep learning.
          </p>

          <p className='text-sm sm:text-base md:text-lg text-textmain/70 leading-relaxed'>
            I bridge the gap between full-stack development and machine learning—building not just applications, but intelligent systems.
          </p>
        </div>
      </section>

      {/* 🧠 Skills */}
      <section className='mb-16 sm:mb-20'>
        <h2 className='text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12'>
          My{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600'>
            Skills
          </span>
        </h2>

        <div className='flex flex-wrap justify-center gap-3 sm:gap-4'>
          {skills.map((skill, index) => (
            <span
              key={index}
              className='px-4 sm:px-5 py-2 text-sm sm:text-base 
              bg-card border border-white/10 rounded-full 
              text-textmain/80 hover:border-purple-500/50 hover:text-purple-400 
              transition-all duration-300 cursor-default'
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* 🚀 Highlights */}
      <section className='mb-16 sm:mb-20 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8'>
        
        <div className='bg-card p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all'>
          <h3 className='text-lg sm:text-xl flex gap-2 items-center font-bold mb-2 sm:mb-3 text-textmain'>
            <img className='w-10 h-10 rounded-full' src="full-stack-development.png" alt="img" /> <p>Full-Stack Development</p>
          </h3>
          <p className='text-sm sm:text-base text-textmain/70'>
            Building scalable and responsive web applications using React, Node.js, and MongoDB.
          </p>
        </div>

        <div className='bg-card p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all'>
          <h3 className='text-lg sm:text-xl flex gap-2 items-center font-bold mb-2 sm:mb-3 text-textmain'>
            <svg className='w-7 h-7' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Probot</title><path fill='white' d="M12 .04a1.743 1.743 0 0 0-.537 3.401l-.631 2.579H2.456A2.456 2.456 0 0 0 0 8.476v13.029a2.456 2.456 0 0 0 2.456 2.456h19.088c1.356 0 2.456-1.1 2.456-2.456V8.476c0-1.356-1.1-2.456-2.456-2.456h-8.403l-.616-2.575A1.743 1.743 0 0 0 11.999.04zM3.933 7.881h16.136c1.101 0 1.994.893 1.994 1.994v10.117a1.994 1.994 0 0 1-1.994 1.994H3.933a1.994 1.994 0 0 1-1.994-1.994V9.875c0-1.101.893-1.994 1.994-1.994zm3.254 2.312a4.575 4.575 0 1 0 0 9.15 4.575 4.575 0 0 0 0-9.15zm9.743 0a4.575 4.575 0 1 0 0 9.15 4.575 4.575 0 0 0 0-9.15zm-9.743 1.07a3.506 3.506 0 1 1 0 7.011 3.506 3.506 0 0 1 0-7.011zm9.743 0a3.506 3.506 0 1 1 0 7.011 3.506 3.506 0 0 1 0-7.011zm-9.743 1.663a1.843 1.843 0 1 0 0 3.686 1.843 1.843 0 0 0 0-3.686zm9.743 0a1.843 1.843 0 1 0 0 3.686 1.843 1.843 0 0 0 0-3.686zm-6.927 6.5v2.159h.706v-2.159h-.706zm1.077 0v2.159h.705v-2.159h-.705zm1.076 0v2.159h.706v-2.159h-.706zm1.077 0v2.159h.706v-2.159h-.706zm1.077.03v2.1a1.08 1.08 0 0 0 .829-1.049v-.001c0-.51-.354-.937-.829-1.05zm-4.678.028a1.08 1.08 0 0 0-.731 1.021v.001c0 .474.306.876.731 1.021v-2.043z"/></svg> <p>Machine Learning & AI</p>
          </h3>
          <p className='text-sm sm:text-base text-textmain/70'>
            Developing intelligent systems using deep learning, computer vision, and NLP.
          </p>
        </div>

      </section>

      {/* 📈 CTA */}
      <section className='my-16 sm:my-20 md:my-24 text-center 
      bg-gradient-to-r from-blue-500/10 to-purple-600/10 
      rounded-2xl md:rounded-3xl 
      px-6 sm:px-8 md:px-12 py-10 sm:py-12 md:py-16'>

        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4'>
          Let’s work together
        </h2>

        <p className='text-sm sm:text-base md:text-lg text-textmain/70 mb-6 sm:mb-8 max-w-md sm:max-w-xl mx-auto'>
          I'm always open to opportunities, collaborations, and exciting projects.
        </p>

        <a
          href='/contact'
          className='inline-block px-6 sm:px-7 md:px-8 
          py-3 sm:py-3.5 md:py-4 
          text-sm sm:text-base md:text-lg
          bg-gradient-to-r from-blue-500 to-purple-600 
          text-white font-semibold rounded-full 
          hover:shadow-lg hover:shadow-purple-500/30 
          transition-all duration-300 hover:-translate-y-1 hover:scale-105'
        >
          Contact Me
        </a>
      </section>

    </div>
  )
}

export default AboutPage