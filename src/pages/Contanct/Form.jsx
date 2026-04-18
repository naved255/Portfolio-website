import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Form = () => {

  const formRef = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,      // replace
      import.meta.env.VITE_TEMPLATE_ID,     // replace
      formRef.current,
      import.meta.env.VITE_PUBLIC_KEY       // replace
    )
    .then(() => {
      alert('Message sent successfully 🚀')
      formRef.current.reset()
    })
    .catch((error) => {
      console.error(error)
      alert('Failed to send message ❌')
    })
  }

  return (
    <div className='max-w-6xl mx-auto px-4'>

      {/* 📝 Contact Form */}
      <section className='mb-24'>
        <div className='bg-card border border-white/10 rounded-3xl p-8 md:p-12 max-w-3xl mx-auto'>
          
          <h2 className='text-2xl font-bold mb-6 text-center'>
            Send a Message
          </h2>

          {/* ✅ IMPORTANT: ref + onSubmit */}
          <form ref={formRef} onSubmit={sendEmail} className='flex flex-col gap-4'>

            {/* ✅ name attributes must match template */}
            <input
              type='text'
              name='name'
              placeholder='Your Name'
              required
              className='p-3 rounded-lg bg-transparent border border-white/10 focus:border-purple-500 outline-none'
            />

            <input
              type='email'
              name='email'
              placeholder='Your Email'
              required
              className='p-3 rounded-lg bg-transparent border border-white/10 focus:border-purple-500 outline-none'
            />

            <textarea
              rows='4'
              name='message'
              placeholder='Your Message'
              required
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
      </section>

    </div>
  )
}

export default Form