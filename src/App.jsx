import { useState } from 'react'
import Navbar from './Navbar'
import {Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home/HomePage'
import AboutPage from './pages/About/AboutPage'
import SkillPage from './pages/Skills/SkillPage'
import ProjectPage from './pages/Projects/ProjectPage'
import ContactPage from './pages/Contanct/ContactPage'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full text-textmain h-screen overflow-y-auto bg-darkbg '>
        <Navbar />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/skill' element={<SkillPage />} />
          <Route path='/project' element={<ProjectPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>

        <Footer/>

      </div>


    </>
  )
}

export default App
