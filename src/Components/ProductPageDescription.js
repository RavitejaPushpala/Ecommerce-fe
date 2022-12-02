import React from 'react'
import Description from './Description'
import AddToCart from './AddToCart'
import './comp.css';

const getQuantStatus=(quantity)=>{
  console.log(quantity);
  switch(true){
    case quantity===0: return 'unavailable';
    case quantity>10: return 'available';
    case quantity<=10: return 'selling fast';
  }
  
}
const ProductPageDescription=(props)=> {
  let quantity=props.productData.quantity;
  let quantityStatus=getQuantStatus(quantity);
  function OnClickVarient(variantColor){
      props.imageVarient(variantColor);
  }
  return (
    <div className='ProductPageDescription'>
        <Description productData={props.productData}/>

        <p className='quantity'>Quantity : <strong>{quantityStatus}</strong></p>
        {
          props.productData.variants.map((variant)=>{
            return <div key={variant.color} className='variants' onClick={()=>OnClickVarient(variant.color)}>{variant.color} </div>
          })
        }
        <AddToCart/>
    </div>
  )
}
export default ProductPageDescription
