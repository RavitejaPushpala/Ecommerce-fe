import React from 'react'
import Individual_product from "./Individual-product";
import './comp.css';
import useFetchUserData from '../Hooks/useFetchUserData';
function AllProducts() {
  const {isLoading,data}=useFetchUserData('product-details2','https://obscure-refuge-62167.herokuapp.com/products');
  if(isLoading){
    return <h2>Loading ...</h2>
  }
  console.log(data)
  return (
    <>
    <div className='AllProducts'>
    {
      data?.data.map((pData)=>{
        return <Individual_product key={pData.id} productData={pData}/>
      })
      
    }
    </div>
    </>
    
  )
}

export default AllProducts