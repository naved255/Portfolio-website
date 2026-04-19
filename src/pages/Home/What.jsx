import React from 'react'

const What = () => {
  return (
    <div className='my-12 sm:my-16 md:my-20 px-4 sm:px-6'>
      
      <div className='relative text-center'>

        {/* Heading */}
        <h2 className='text-2xl sm:text-3xl md:text-5xl lg:text-6xl 
        font-bold leading-tight'>

          Turning ideas into{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600'>
            reality
          </span>
          <br className='hidden sm:block' />
          through clean code.
        </h2>

        {/* Subtext */}
        <p className='text-sm sm:text-base md:text-lg 
        text-textmain/60 mt-4 sm:mt-6 
        max-w-md sm:max-w-xl md:max-w-2xl mx-auto'>
          Crafting digital experiences that are fast, responsive, and built to scale.
        </p>

      </div>

    </div>
  )
}

export default What