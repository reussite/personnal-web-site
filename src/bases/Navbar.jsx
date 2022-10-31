import React from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/css/navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo'>Logo </div>
      <ul>
        <li><NavLink className="link"> Resum</NavLink> </li>
        <li><NavLink className="link"> Project</NavLink> </li>
        <li><NavLink className="link"> Contact</NavLink> </li>
      </ul>
    </div>
  )
}

export default Navbar