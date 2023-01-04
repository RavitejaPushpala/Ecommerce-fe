import React from 'react'
import { NavLink } from 'react-router-dom';
import Cart from './Cart';
import './comp.css';

function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <NavLink className='navlink1' to='/'>Home</NavLink>
        <NavLink to='/products/1'>Products</NavLink>

      </nav>
      <Cart ></Cart></>

  )
}
export default Navbar
