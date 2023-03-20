import React from 'react'
import{Link} from 'react-router-dom'

const Navbar = () => {
  return <nav className='navbar navbar-dark bg-dark navbar-expand p-3'>
       <Link to='#' className='navbar-brand'></Link>
  
    <div className='ml-auto'>
       <ul className='navbar-nav'>
       <li className='nav-list'> <Link to='Home' className='nav-link'>Home</Link></li>
       <li className='nav-list'><Link to='About' className='nav-link'>About</Link></li>
       <li className='nav-list'><Link to='Services' className='nav-link'>services</Link></li>

       </ul>
    </div>
    </nav>
  
}

export default Navbar