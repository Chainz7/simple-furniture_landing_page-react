import React from 'react'

import './styles.css'
import { Footer, Navbar } from './containers'
import { Choose, Furniture, Hero, Newsletter, Partner, Product } from './pages'

function App() {
  return (
    <>
      <div className='app'>
        <Navbar />
        <Hero />
        <Choose />
        <Partner />
        <Furniture />
        <Product />
        {/* <Newsletter /> */}
        {/* <Footer /> */}
      </div>
      <div className="app-device">
        <span className="device-small">This Screen Size Is Too Small</span>
      </div>
    </>
  )
}

export default App