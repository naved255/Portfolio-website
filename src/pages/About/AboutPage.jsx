import React from 'react'

const skills = [
  'React.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'JavaScript',
  'Tailwind CSS',
  'Machine Learning',
  'Deep Learning',
  'CNN',
  'RNN',
  'NLP'
]

const AboutPage = () => {
  return (
    <div className='max-w-6xl mx-auto px-4'>

      {/* 🔥 Hero Section */}
      <section className='text-center mt-16 mb-20 relative'>
        
        {/* Glow Effects */}
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full'></div>
        <div className='absolute bottom-0 left-1/3 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full'></div>

        <p className='text-textmain/60 mb-2 tracking-wide'>
          About Me
        </p>

        <h1 className='text-4xl md:text-5xl font-bold leading-tight mb-4 relative'>
          Crafting{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600'>
            scalable & intelligent
          </span>{' '}
          solutions
        </h1>

        <p className='text-textmain/70 max-w-2xl mx-auto text-lg relative'>
          Full-Stack Developer blending modern web technologies with machine learning to build impactful digital experiences.
        </p>
      </section>

      {/* 👨‍💻 About Content */}
      <section className='mb-20'>
        <div className='bg-card border border-white/10 rounded-3xl p-8 md:p-12 shadow-lg'>
          
          <p className='text-textmain/80 text-lg leading-relaxed mb-6'>
            I'm <span className='font-semibold text-textmain'>Mohd Naved Ahmad</span>, a Full-Stack Developer and Machine Learning enthusiast. I specialize in building scalable web applications using the MERN stack and developing intelligent systems using deep learning.
          </p>

          <p className='text-textmain/70 text-lg leading-relaxed mb-6'>
            I enjoy solving real-world problems by combining web development with AI. From building full-stack platforms like Airbnb and Zerodha clones to developing deep learning models like face mask detection and sentiment analysis, I focus on creating practical and impactful solutions.
          </p>

          <p className='text-textmain/70 text-lg leading-relaxed'>
            What sets me apart is my ability to bridge the gap between full-stack development and machine learning—building not just applications, but intelligent systems.
          </p>
        </div>
      </section>

      {/* 🧠 Skills Section */}
      <section className='mb-20'>
        <h2 className='text-3xl font-bold text-center mb-12'>
          My <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600'>Skills</span>
        </h2>

        <div className='flex flex-wrap justify-center gap-4'>
          {skills.map((skill, index) => (
            <span
              key={index}
              className='px-5 py-2 bg-card border border-white/10 rounded-full text-textmain/80 hover:border-purple-500/50 hover:text-purple-400 transition-all duration-300 cursor-default'
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* 🚀 Highlight Section */}
      <section className='mb-20 grid md:grid-cols-2 gap-8'>
        
        <div className='bg-card p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all'>
          <h3 className='text-xl font-bold mb-3 text-textmain'>
            💻 Full-Stack Development
          </h3>
          <p className='text-textmain/70'>
            Building scalable and responsive web applications using modern technologies like React, Node.js, and MongoDB.
          </p>
        </div>

        <div className='bg-card p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all'>
          <h3 className='text-xl font-bold mb-3 text-textmain'>
            🤖 Machine Learning & AI
          </h3>
          <p className='text-textmain/70'>
            Developing intelligent systems using deep learning, computer vision, and NLP to solve real-world problems.
          </p>
        </div>

      </section>

      {/* 📈 CTA */}
      <section className='my-24 text-center bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-3xl p-12'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4'>
          Let’s work together
        </h2>
        <p className='text-textmain/70 mb-8 max-w-xl mx-auto'>
          I'm always open to opportunities, collaborations, and exciting projects.
        </p>
        <a
          href='/contact'
          className='inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-1'
        >
          Contact Me
        </a>
      </section>

    </div>
  )
}

export default AboutPage