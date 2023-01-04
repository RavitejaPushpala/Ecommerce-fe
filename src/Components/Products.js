import React from 'react'
import BottleImg from './bottleImg'
import './comp.css';
import ProductPageDescription from './ProductPageDescription';
import useProductData from '../Hooks/useProductData';
import { useParams } from 'react-router-dom';
import { useState } from 'react'
function Products() {
  let id = useParams().id;
  const { isLoading, data, isFetched, isError, error } = useProductData(id);
  const [image, setImage] = useState(null);
  if (isLoading) {
    return <h2>Loading ...</h2>
  }
  if (isError) {
    return <h2>{error.message}</h2>
  }
  if (isFetched && image === null) {
    setImage(data?.data.image)
  }
  const imageVarient = (variantColor) => {
    let variImage;
    for (let variant of data.data.variants) {
      if (variant.color === variantColor) {
        variImage = variant.image;
        break;
      }

    }
    setImage(variImage);

  }
  return (
    <div className='Products'>
      <BottleImg image={image} />
      <ProductPageDescription productData={data.data} imageVarient={imageVarient} />
    </div>
  )
}

export default Products