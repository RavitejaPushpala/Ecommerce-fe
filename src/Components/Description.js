import React from 'react'
import './comp.css';
function Description(props) {
  return (
    <div className='Description'>
      <h3>{props.productData.name}</h3>
      <div>{props.productData.description}</div>
      <div>Price : <strong>$ {props.productData.price}</strong></div>

    </div>
  )
}

export default Description