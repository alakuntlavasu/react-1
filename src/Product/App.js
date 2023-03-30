 import React from 'react'
  import Products from './Products'
  import Product from './Product'

 import{BrowserRouter as Router,Routes,Route} from'react-router-dom'
 const App = () => {
   return (
     <div>
     <Router>
     <Routes>
        <Route exact path='/' element={<Products/>}/>
        <Route exact path='/product/:id' element={<Product/>}/>

      </Routes>
    </Router> 
    </div>
   )
 }

export default App