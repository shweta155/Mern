import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/nav-logo.svg'
import navprofile from '../../assets/nav-profile.svg'
 export const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={navlogo} alt="nav_logo_image" className='nav-logo' />
      <img src={navprofile} alt="nav-profile_image" className='nav-profile' />
    </div>
  )
}

