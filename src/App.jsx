import { useState } from 'react'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home/HomePage'
import AboutPage from './pages/About/AboutPage'
import SkillPage from './pages/Skills/SkillPage'
import ProjectPage from './pages/Projects/ProjectPage'
import ContactPage from './pages/Contanct/ContactPage'
import Footer from './Footer'
import BackgroundBubbles from './components/BackgroundBubbles'

function App() {
  return (
    <div className='relative w-full text-textmain min-h-screen bg-darkbg flex flex-col justify-between overflow-x-hidden'>
      {/* 🔮 Dynamic Realistic Blue Bubbles Background */}
      <BackgroundBubbles />

      {/* Main Page Content Wrapper (Above the bubbles layer) */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen">
        <div>
          <Navbar />
          <div className="h-20"></div>

          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/skill' element={<SkillPage />} />
            <Route path='/projects' element={<ProjectPage />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default App