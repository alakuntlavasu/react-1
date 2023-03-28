//  import React from 'react'
//   import Products from './Products'
//   import Product from './Product'

//  import{BrowserRouter as Router,Routes,Route} from'react-router-dom'
//  const App = () => {
//    return (
//      <div>
//      <Router>
//      <Routes>
//         <Route exact path='/' element={<Products/>}/>
//         <Route exact path='/product/:id' element={<Product/>}/>

//       </Routes>
//     </Router> 
//     </div>
//    )
//  }

// export default App


// import React from 'react'
// import Navbar from './Router/Navbar'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Home from './Router/Home'
// import About from './Router/About'
// import Services from './Router/Services'
// import Contacts from './Router/Contacts'
// const App = () => {
//   return (
//     <div>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path='/home' element={<Home />} />
//           <Route path='/about' element={<About />} />
//           <Route path='/services' element={<Services />} />

//           <Route path='/contacts' element={<Contacts />} />

//         </Routes>
//       </Router>
//     </div>
//   )
// }

// export default App

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