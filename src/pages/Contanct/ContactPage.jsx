import React from 'react'
import Form from './Form'

const ContactPage = () => {
  return (
    <div className='max-w-6xl mx-auto px-4'>

      {/* 🔥 Hero Section */}
      <section className='text-center mt-16 mb-20 relative'>
        
        {/* Glow Effects */}
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full'></div>
        <div className='absolute bottom-0 left-1/3 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full'></div>

        <p className='text-textmain/60 mb-2 tracking-wide'>
          Get In Touch
        </p>

        <h1 className='text-4xl md:text-5xl font-bold mb-4'>
          Let’s{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600'>
            Connect
          </span>
        </h1>

        <p className='text-textmain/70 max-w-xl mx-auto text-lg'>
          Have a project idea, collaboration, or opportunity? Feel free to reach out.
        </p>
      </section>

      {/* 📬 Contact Cards */}
      <section className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-20'>

        {/* Email */}
        <a
          href='mailto:navedahmad2314lko@gmail.com'
          className='bg-card border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center hover:border-purple-500/50 transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/10'
        >
          <div className='text-3xl mb-3'>📧</div>
          <h3 className='text-lg font-bold text-textmain'>Email</h3>
          <p className='text-textmain/60 text-sm mt-2'>
            navedahmad2314lko@gmail.com
          </p>
        </a>

        {/* GitHub */}
        <a
          href='https://github.com/naved255'
          target='_blank'
          rel='noreferrer'
          className='bg-card border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center hover:border-purple-500/50 transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/10'
        >
          <div className='text-3xl mb-3'><svg className='w-7 h-7 text-textmain' fill='currentColor' viewBox='0 0 24 24'><path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z'/></svg>
</div>
          <h3 className='text-lg font-bold text-textmain'>GitHub</h3>
          <p className='text-textmain/60 text-sm mt-2'>
            github.com/naved255
          </p>
        </a>

        {/* LinkedIn */}
        <a
          href='https://www.linkedin.com/in/mohd-naved-ahmad-6a643231b/'
          target='_blank'
          rel='noreferrer'
          className='bg-card border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center hover:border-purple-500/50 transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/10'
        >
          <div className='text-3xl mb-3'><svg className='w-7 h-7 text-textmain' fill='currentColor' viewBox='0 0 24 24'><path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/></svg>
</div>
          <h3 className='text-lg font-bold text-textmain'>LinkedIn</h3>
          <p className='text-textmain/60 text-sm mt-2'>
            linkedin.com/in/naved
          </p>
        </a>

      </section>

      {/* 📝 Contact Form (Optional but recommended) */}
      {/* <section className='mb-24'>
        <div className='bg-card border border-white/10 rounded-3xl p-8 md:p-12 max-w-3xl mx-auto'>
          
          <h2 className='text-2xl font-bold mb-6 text-center'>
            Send a Message
          </h2>

          <form className='flex flex-col gap-4'>
            <input
              type='text'
              placeholder='Your Name'
              className='p-3 rounded-lg bg-transparent border border-white/10 focus:border-purple-500 outline-none'
            />
            <input
              type='email'
              placeholder='Your Email'
              className='p-3 rounded-lg bg-transparent border border-white/10 focus:border-purple-500 outline-none'
            />
            <textarea
              rows='4'
              placeholder='Your Message'
              className='p-3 rounded-lg bg-transparent border border-white/10 focus:border-purple-500 outline-none'
            ></textarea>

            <button
              type='submit'
              className='mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all hover:-translate-y-1'
            >
              Send Message
            </button>
          </form>

        </div>
      </section> */}

      <Form/>

    </div>
  )
}

export default ContactPage