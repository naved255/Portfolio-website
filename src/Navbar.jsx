import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='w-full sticky top-0 z-50 backdrop-blur-lg bg-white/5 border-b border-white/10'>
      <div className='max-w-6xl mx-auto px-5 py-3 flex items-center justify-between'>
        
        {/* Logo / Brand */}
        <h1 className='text-2xl font-bold tracking-wide'>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600'>
            DevNaved
          </span>
        </h1>

        {/* Nav Links */}
        <ul className='flex gap-6 items-center text-textmain font-medium'>
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Skills', path: '/skill' },
            { name: 'Projects', path: '/project' },
            { name: 'Contact', path: '/contact' },
          ].map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative px-2 py-1 transition-all duration-300 ${
                    isActive
                      ? 'text-purple-500'
                      : 'hover:text-purple-400'
                  }`
                }
              >
                {link.name}

                {/* Underline animation */}
                <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-hover:w-full'></span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar