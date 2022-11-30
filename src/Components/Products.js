import React from 'react'
import BottleImg from './bottleImg'
import Description from './Description'
import './comp.css';
import ProductPageDescription from './ProductPageDescription';

function Products() {
  return (
    <div className='Products'>
      <BottleImg/>
      <ProductPageDescription/>
    </div>
  )
}

export default Products