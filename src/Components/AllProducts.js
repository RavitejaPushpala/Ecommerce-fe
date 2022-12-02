import React from 'react'
import IndividualProduct from './IndividualProduct';
import './comp.css';
import useProductsData from '../Hooks/useProductsData';
function AllProducts() {
  const { isLoading, data, isError, error } = useProductsData();
  if (isLoading) {
    return <h2>Loading ...</h2>
  }
  if (isError) {
    return <h2>{error.message}</h2>
  }
  return (
    <>
      <div className='AllProducts'>
        {
          data?.data.map((pData) => {
            return <IndividualProduct key={pData.id} productData={pData} />
          })
        }
      </div>
    </>

  )
}

export default AllProducts