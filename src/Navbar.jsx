import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skill' },
    { name: 'Projects', path: '/project' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className='w-full sticky top-0 z-50 backdrop-blur-lg bg-white/5 border-b border-white/10'>
      <div className='max-w-6xl mx-auto px-5 py-3 flex items-center justify-between'>

        {/* Logo */}
        <h1 className='text-2xl font-bold tracking-wide'>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600'>
            DevNaved
          </span>
        </h1>

        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-6 items-center text-textmain font-medium'>
          {links.map((link, index) => (
            <li key={index} className='group'>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative px-2 py-1 transition-all duration-300 ${isActive
                    ? 'text-purple-500'
                    : 'hover:text-purple-400'
                  }`
                }
              >
                {link.name}
                <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-hover:w-full'></span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          className='md:hidden text-white'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul
          className={`md:hidden flex flex-col items-center absolute top-[64px] left-0 w-full z-20 gap-6
  bg-black/80 backdrop-blur-lg text-textmain font-medium
  transition-all  duration-500 ease-in-out transform
  ${isOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto py-6'
              : 'opacity-0 -translate-y-5 pointer-events-none py-0'}`}
        >
          {links.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-lg ${isActive
                    ? 'text-purple-500'
                    : 'hover:text-purple-400'
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar