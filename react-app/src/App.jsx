import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import Navbar from '../src/components/Navbar/Navbar.jsx'
import GetStarted from '../src/components/GetStarted/GetStarted.jsx'
import About from '../src/components/About/About.jsx'
import Features from '../src/components/Features/Features.jsx'
import Plans from '../src/components/Plans/Plans.jsx'
import Globe from '../src/components/Globe/Globe.jsx'
import Reviews from '../src/components/Reviews/Reviews.jsx'
import Subscribe from '../src/components/Subscribe/Subscribe.jsx'
import Footer from '../src/components/Footer/Footer.jsx'

function App() {
  // JSX for rendering the component
  return (
    <>
    <Navbar />
    <div className='container'>
    <GetStarted />
    <About />
    <Features />
    <Plans />
    <Globe />
    <Reviews />
    <Subscribe />
    <Footer />
      {/* <Routes>
        <Route path='#' element = {<GetStarted />} />
        <Route path='/#about' element = {<About />} />
        <Route path='/#features' element = {<Features />} />
        <Route path='/#plans' element = {<Plans />} />
        <Route path='/#globe' element = {<Globe />} />
        <Route path='/#reviews' element = {<Reviews />} />
        <Route path='/#subscribe' element = {<Subscribe />} />
        <Route path='/#footer' element = {<Footer />} />
      </Routes> */}
       </div>
    </>
  )
}

export default App
