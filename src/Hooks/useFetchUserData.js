import axios from 'axios'
import {useQuery} from 'react-query'
function FetchData(api){
    return axios.get(api);
}
export default function useFetchUserData(Id,api) {
  return useQuery(Id,()=>FetchData(api));
}
