import React from 'react'
import{Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
 
    <div class="collapse navbar-collapse">
    <ul class="navbar-nav mx-auto">
        <li class="nav-item">
        <Link class="nav-link" to='home'>Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='about'>About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='services'>Services</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='contacts'>Contacts</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar