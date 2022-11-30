import React from 'react'
import {NavLink} from 'react-router-dom';
import './comp.css';

function Navbar() {
  return (
    <nav className='navbar'>
        <NavLink className='navlink1' to='/'>Home</NavLink>
        <NavLink to='/Products/:id'>Products</NavLink>
    </nav>
  )
}
export default  Navbar
