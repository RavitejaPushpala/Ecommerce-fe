import React from 'react'
import Description from './Description'
import AddToCart from './AddToCart'
import './comp.css';

function ProductPageDescription() {
  return (
    <div className='ProductPageDescription'>
        <Description/>
        <AddToCart/>
    </div>
  )
}
export default ProductPageDescription
