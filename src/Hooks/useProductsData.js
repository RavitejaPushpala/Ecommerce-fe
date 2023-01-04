import axios from 'axios'
import {useQuery} from 'react-query'
async function FetchData(){
    return await axios.get('http://localhost:4000/Products');
}
export default function useProductsData() {
  return useQuery('Products',async ()=>FetchData());
}
