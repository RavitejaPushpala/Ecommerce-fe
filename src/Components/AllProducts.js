import React from 'react'
import Individual_product from "./Individual-product";
import './comp.css';

function AllProducts() {
  return (
    <div className='AllProducts'>
        <Individual_product/>
        <Individual_product/>
        <Individual_product/>
        <Individual_product/>
        <Individual_product/>
        <Individual_product/>
    </div>
  )
}

export default AllProducts