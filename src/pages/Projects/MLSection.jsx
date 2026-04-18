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
    <section className='my-20'>
      <h2 className='text-3xl font-bold text-center mb-4'>
        Machine Learning & <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600'>Deep Learning</span>
      </h2>

      <p className='text-textmain/60 text-center mb-12 max-w-xl mx-auto'>
        Intelligent systems built using neural networks, NLP, and computer vision
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {mlProjects.map((project, index) => (
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

export default MLSection