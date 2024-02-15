import React from 'react'
import './Navbar.css'

import '../../assets/logo.svg'

const Navbar = () => {
  return (
    <nav className='nav-bar'>

      <div className='logo'>
      <a href='#'>
        <img src='/src/assets/logo.svg' alt='LaslesVPN logo' />
      </a>
      </div>
      <ul>
        <li>
          <a href='/#about'>About</a>
        </li>
        <li>
          <a href='/#features'>Features</a>
        </li>
        <li>
          <a href='/#plans'>Pricing</a>
        </li>
        <li>
          <a href='/#reviews'>Testimonials</a>
        </li>
        <li>
          <a href='/#subscribe'>Help</a>
        </li>
        <li>
          <a href='/#sign-in' className='sign-in'>Sign In</a>
        </li>
        <li>
          <a href='/#sign-up'>
          <button className='signup-btn'>Sign Up</button>
          </a>
        </li>
      </ul>
    </nav>
    
  );
}

export default Navbar