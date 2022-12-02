import React from 'react'
import BottleImg from "./bottleImg";
import './comp.css';
import Description from "./Description";
function Individual_product(props) {
  return (
    <div className='Individual_product'>
         <BottleImg productData={props.productData}/>
        <Description productData={props.productData}/>
    </div>
  )
}

export default Individual_product