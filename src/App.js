import React from 'react'

// import { About, Footer, Header, Skills, Testimonial, Work } from './container'
import { Navbar } from './components/Navbar'
import { Hero } from './container/Hero'
import { Choose } from './container/Choose'
import './styles.css'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <Choose />
    </div>
  )
}

export default App