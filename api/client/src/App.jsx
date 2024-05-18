import MyLayout from "./components/Layout/MyLayout"
import { useEffect } from "react";
import useApi from "./hooks/useApi";
import TableUsers from "./components/TableUsers/TableUsers";
import ModalComponent from "./components/Modals/ModalComponent";
import { useSelector } from "react-redux";
import ModalDelete from "./components/Modals/ModalDelete";
import { Skeleton } from 'antd';

function App() {
  const data = useSelector(state=> state.users.userList)
  const { axiosRequest } = useApi()
  
  useEffect(() => {
    setTimeout(()=>{
      axiosRequest('get', 'http://localhost:4000/users')
    }, 1500)
  }, []);

  return (
    <MyLayout>
      {
        data.length > 0 ?
        <TableUsers data={data} /> :
        <Skeleton />
      }
    <ModalComponent />
    <ModalDelete />
    
    </MyLayout>
  )
}

export default App
