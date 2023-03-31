import React from 'react'
import Navbar from './Router/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Router/Home'
import About from './Router/About'
import Services from './Router/Services'
import Contacts from './Router/Contacts'
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />

          <Route path='/contacts' element={<Contacts />} />

        </Routes>
      </Router>
    </div>
  )
}

export default App