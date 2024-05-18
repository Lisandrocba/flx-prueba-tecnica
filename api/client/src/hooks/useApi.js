import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getUsersFailure, getUsersStart, getUsersSuccess } from '../features/users/userSlice';


const useApi = () => {
  const dispatch = useDispatch()

  const axiosRequest = async (method, url, requestData = null) => {
    dispatch(getUsersStart())
    try {
      const response = await axios[method](url, requestData);
      if(method === 'get'){
        dispatch(getUsersSuccess(response.data))
      }
    } catch (err) {
      dispatch(getUsersFailure(err))
    } 
  };

  return { axiosRequest };
};

export default useApi;