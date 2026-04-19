import React from 'react'

const mlProjects = [
  {
    title: 'Face Mask Detection (CNN)',
    url:'',
    description: 'Deep learning model using CNN to detect whether a person is wearing a mask or not in real-time.',
  },
  {
    title: 'Sentiment Analysis (RNN)',
    url:'https://sentiment-analysis-project-self.vercel.app/',
    description: 'Natural Language Processing model using RNN to classify text sentiment as positive or negative.',
  },
]

const MLSection = () => {
  return (
    <section className='my-12 sm:my-16 md:my-20 px-2 sm:px-0'>

      {/* Heading */}
      <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 leading-tight'>
        Machine Learning &{' '}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600'>
          Deep Learning
        </span>
      </h2>

      <p className='text-sm sm:text-base text-textmain/60 text-center mb-8 sm:mb-12 max-w-md sm:max-w-xl mx-auto'>
        Intelligent systems built using neural networks, NLP, and computer vision
      </p>

      {/* Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
        {mlProjects.map((project, index) => {
          const isClickable = project.url && project.url.trim() !== ''

          return (
            <div
              key={index}
              className={`bg-card border border-white/10 
              rounded-xl sm:rounded-2xl 
              p-5 sm:p-6 
              transition-all duration-300 
              hover:border-purple-500/50 
              hover:shadow-xl hover:shadow-purple-500/10 
              hover:-translate-y-1 sm:hover:-translate-y-2
              ${isClickable ? 'hover:scale-[1.02] cursor-pointer' : 'opacity-80 cursor-default'}`}
              
              onClick={() => {
                if (isClickable) {
                  window.open(project.url, '_blank')
                }
              }}
            >
              <h3 className='text-lg sm:text-xl font-bold text-textmain mb-2 sm:mb-3'>
                {project.title}
              </h3>

              <p className='text-xs sm:text-sm text-textmain/60 leading-relaxed'>
                {project.description}
              </p>

              {!isClickable && (
                <p className='text-xs text-textmain/40 mt-3'>
                  (Project link coming soon)
                </p>
              )}
            </div>
          )
        })}
      </div>

    </section>
  )
}

export default MLSection