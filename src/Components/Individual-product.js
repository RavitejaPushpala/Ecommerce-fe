import React from 'react'
import BottleImg from "./bottleImg";
import './comp.css';
import Description from "./Description";
import {Link} from 'react-router-dom'
function Individual_product(props) {
  return (
    <Link to={'/products/'+props.productData.id} className='Individual_product'>
         <BottleImg image={props.productData.image}/>
        <Description productData={props.productData}/>
    </Link>
    
  )
}

export default Individual_product