import axios from 'axios'
import {useQuery} from 'react-query'
async function FetchData(id){
    return await axios.get(`http://localhost:4000/Products/${id}`);
}
export default function useProductData(id) {
  return useQuery(['Product',id],async ()=>FetchData(id));
}
