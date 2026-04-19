import React from 'react'

const Hero = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-7 items-center 
    mt-10 sm:mt-14 md:mt-16 mb-8 
    px-4 sm:px-6 gap-8 md:gap-10'>

      {/* 🔹 Left Content */}
      <div className='col-span-1 md:col-span-4 order-2 md:order-1'>

        <p className='text-xs sm:text-sm text-textmain font-medium mb-2 tracking-wide'>
          👋 Welcome to my portfolio
        </p>

        <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-4'>
          Hi, I'm{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-r  from-blue-500 to-purple-600'>
            Mohd Naved Ahmad
          </span>
        </h1>

        <h2 className='text-lg sm:text-xl md:text-3xl text-textmain/80 font-semibold mb-3 sm:mb-4'>
          MERN Stack & Machine Learning Developer
        </h2>

        <p className='text-sm sm:text-base md:text-lg text-textmain/70 leading-relaxed mb-6 sm:mb-8 max-w-md sm:max-w-xl'>
          I build <span className='text-textmain font-medium'>scalable</span> and{' '}
          <span className='text-textmain font-medium'>user-friendly</span>{' '}
          web applications and intelligent systems by combining modern web technologies with AI and deep learning.
        </p>
        
        {/* Buttons */}
        <div className='flex flex-wrap gap-3 sm:gap-4'>
          <a 
            href='/project' 
            className='px-5 sm:px-6 py-2.5 sm:py-3 
            text-sm sm:text-base
            bg-gradient-to-r from-blue-500 to-purple-600 
            text-white font-semibold rounded-full 
            hover:shadow-lg hover:shadow-purple-500/30 
            transition-all duration-300 hover:-translate-y-1 hover:scale-105'
          >
            View My Work
          </a>

          <a 
            href='/contact' 
            className='px-5 sm:px-6 py-2.5 sm:py-3 
            text-sm sm:text-base
            border-2 border-textmain/30 text-textmain font-semibold rounded-full 
            hover:border-purple-500 hover:text-purple-500 
            transition-all duration-300'
          >
            Contact Me
          </a>
        </div>

        {/* Social Links */}
        <div className='flex gap-3 sm:gap-4 mt-6 sm:mt-8'>
          {[ 
            {
              link: 'https://github.com/naved255',
              icon: 'github'
            },
            {
              link: 'https://www.linkedin.com/in/mohd-naved-ahmad-6a643231b/',
              icon: 'linkedin'
            },
            {
              link: 'mailto:navedahmad2314lko@gmail.com',
              icon: 'mail'
            }
          ].map((item, i) => (
            <a 
              key={i}
              href={item.link}
              target='_blank'
              rel='noreferrer'
              className='p-2.5 sm:p-3 bg-card rounded-full hover:bg-textmain/10 transition-colors'
            >
              {/* Icons (same as yours, shortened here for clarity) */}
              <span className='w-5 h-5 text-textmain'>
                {/* keep your SVGs here */}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* 🔹 Profile Image */}
      <div className='col-span-1 md:col-span-3 order-1 md:order-2 flex justify-center'>
        
        <div className='relative'>

          {/* Image Container */}
          <div className='w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full 
          bg-gradient-to-br from-blue-500 to-purple-600 p-1'>
            
            <div className='w-full h-full rounded-full bg-card overflow-hidden'>
              <img 
                src='your-photo.jpg' 
                alt='Mohd Naved Ahmad' 
                className='w-full h-full object-cover'
              />
            </div>

          </div>

          {/* Glow Effects (scaled) */}
          <div className='absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-16 sm:w-24 h-16 sm:h-24 bg-purple-500/20 rounded-full blur-xl'></div>
          <div className='absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-20 sm:w-32 h-20 sm:h-32 bg-blue-500/20 rounded-full blur-xl'></div>

        </div>

      </div>
    </div>
  )
}

export default Hero