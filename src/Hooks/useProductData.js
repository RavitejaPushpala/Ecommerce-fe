import axios from 'axios'
import {useQuery} from 'react-query'
async function FetchData(id){
    return await axios.get(`https://obscure-refuge-62167.herokuapp.com/products/${id}`);
}
export default function useProductData(id) {
  return useQuery(['Product',id],async ()=>FetchData(id));
}
