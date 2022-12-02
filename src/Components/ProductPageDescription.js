import React from 'react'
import Description from './Description'
import AddToCart from './AddToCart'
import './comp.css';

function ProductPageDescription(props) {
  return (
    <div className='ProductPageDescription'>
        <Description productData={props.productData}/>
        <p className='quantity'>Quantity : <strong>{props.productData.quantity}</strong></p>

        <AddToCart/>
    </div>
  )
}
export default ProductPageDescription
