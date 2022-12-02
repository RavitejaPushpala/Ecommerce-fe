import axios from 'axios'
import {useQuery} from 'react-query'
async function FetchData(api){
    return await axios.get(api);
}
export default function useFetchUserData(Id,api) {
  return useQuery(Id,async ()=>FetchData(api));
}
