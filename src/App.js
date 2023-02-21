import React from 'react'

// import { About, Footer, Header, Skills, Testimonial, Work } from './container'
import { Navbar } from './components/Navbar'
import { Hero } from './container/Hero'
import './styles.css'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default App