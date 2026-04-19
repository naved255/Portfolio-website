import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Form = () => {

  const formRef = useRef()
  const [loading, setLoading] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_PUBLIC_KEY
    )
    .then(() => {
      alert('Message sent successfully 🚀')
      formRef.current.reset()
      setLoading(false)
    })
    .catch((error) => {
      console.error(error)
      alert('Failed to send message ❌')
      setLoading(false)
    })
  }

  return (
    <div className='max-w-6xl mx-auto px-4 sm:px-6'>

      {/* 📝 Contact Form */}
      <section className='mb-16 sm:mb-20 md:mb-24'>
        
        <div className='bg-card border border-white/10 
        rounded-2xl md:rounded-3xl 
        px-6 sm:px-8 md:px-12 py-8 sm:py-10 md:py-12 
        max-w-lg sm:max-w-xl md:max-w-3xl mx-auto'>

          <h2 className='text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center'>
            Send a Message
          </h2>

          <form ref={formRef} onSubmit={sendEmail} className='flex flex-col gap-4 sm:gap-5'>

            <input
              type='text'
              name='name'
              placeholder='Your Name'
              required
              className='p-3 sm:p-3.5 text-sm sm:text-base rounded-lg 
              bg-transparent border border-white/10 
              focus:border-purple-500 outline-none 
              transition-all'
            />

            <input
              type='email'
              name='email'
              placeholder='Your Email'
              required
              className='p-3 sm:p-3.5 text-sm sm:text-base rounded-lg 
              bg-transparent border border-white/10 
              focus:border-purple-500 outline-none 
              transition-all'
            />

            <textarea
              rows='4'
              name='message'
              placeholder='Your Message'
              required
              className='p-3 sm:p-3.5 text-sm sm:text-base rounded-lg 
              bg-transparent border border-white/10 
              focus:border-purple-500 outline-none 
              transition-all resize-none'
            ></textarea>

            <button
              type='submit'
              disabled={loading}
              className={`mt-4 px-6 sm:px-7 md:px-8 
              py-3 sm:py-3.5 md:py-4 
              text-sm sm:text-base md:text-lg
              bg-gradient-to-r from-blue-500 to-purple-600 
              text-white rounded-full font-semibold 
              transition-all duration-300 
              ${loading 
                ? 'opacity-70 cursor-not-allowed' 
                : 'hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-1 hover:scale-105'}`}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>

          </form>

        </div>

      </section>

    </div>
  )
}

export default Form