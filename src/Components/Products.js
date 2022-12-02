import React from 'react'
import BottleImg from './bottleImg'
import './comp.css';
import ProductPageDescription from './ProductPageDescription';
import useFetchUserData from '../Hooks/useFetchUserData';
import { useParams } from 'react-router-dom';
function Products() {
  let id=useParams().id;
  const {isLoading,data}=useFetchUserData(['product-details',id],`https://obscure-refuge-62167.herokuapp.com/products/${id}`);
  
  if(isLoading){
    return <h2>Loading ...</h2>
  }
  return (
    <div className='Products'>
      <BottleImg productData={data.data}/>
      <ProductPageDescription productData={data.data}/>
    </div>
  )
}

export default Products