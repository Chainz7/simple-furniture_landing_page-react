import React from 'react'

import './styles.css'
import { Choose, Footer, Furniture, Hero, Navbar, Newsletter, Partner, Product } from './container'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <Choose />
      <Partner />
      {/* <Furniture /> */}
      {/* <Product /> */}
      {/* <Newsletter /> */}
      {/* <Footer /> */}
    </div>
  )
}

export default App