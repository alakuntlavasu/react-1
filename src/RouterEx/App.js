import React from 'react'
import Navbar from './RouterEx/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './RouterEx/Home'
import About from './RouterEx/About'
import Service from './RouterEx/Service'
const App = () => {
  return (
    <div>
    <Router>
      <Navbar>
        <Routes>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/About'element={<About/>}/>
          <Route path='/service'element={<Service/>}/>
        </Routes>
      </Navbar>
    </Router>
    
    </div>
  )
}

export default App