import React from 'react'
import BottleImg from './bottleImg'
import './comp.css';
import ProductPageDescription from './ProductPageDescription';
import useFetchUserData from '../Hooks/useFetchUserData';
import { useParams } from 'react-router-dom';
import { useState } from 'react'
function Products() {
  let id = useParams().id;
  const { isLoading, data, isFetched } = useFetchUserData(['product-details', id], `https://obscure-refuge-62167.herokuapp.com/products/${id}`);
  const [image, setImage] = useState(null);
  if (isLoading) {
    return <h2>Loading ...</h2>
  }
  if (isFetched && image === null) {
    setImage(data?.data.image)
  }
  function imageVarient(variantColor) {
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