import React from 'react'
import Products_h2 from "./Products_h2"
import CreateProduct from "./CreateProduct"
import './comp.css';

function Header() {
  return (
    <div className='header'>
        <Products_h2></Products_h2>
        <CreateProduct></CreateProduct>
    </div>
  )
}
export default Header
