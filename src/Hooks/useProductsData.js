import axios from 'axios'
import {useQuery} from 'react-query'
async function FetchData(){
    return await axios.get('https://obscure-refuge-62167.herokuapp.com/products');
}
export default function useProductsData() {
  return useQuery('Products',async ()=>FetchData());
}
