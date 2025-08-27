import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PracticeAreas from './components/PracticeAreas'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <PracticeAreas />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
