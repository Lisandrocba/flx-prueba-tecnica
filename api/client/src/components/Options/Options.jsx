import { Input, Select, Button, Layout, message } from "antd";
import { useDispatch } from "react-redux";
import { openModal } from "../../features/modal/modalSlive";
import useApi from "../../hooks/useApi";
const { Search } = Input;

const { Content } = Layout;

const Options = () => {
  const dispatch = useDispatch()
  const { axiosRequest } = useApi()

  const onSearch = (value) => {
    try {
      axiosRequest('get', `http://localhost:4000/users?name_like=${value}`)
    } catch (error) {
      message.success('Error al aplicar el filtro')
    }
  }

  const handleChange = (value) => {
      try {
        axiosRequest('get', `http://localhost:4000/users?status=${value}`)
      } catch (error) {
        message.success('Error al aplicar el filtro')
      }
  };

  const showModal = () => {
    dispatch(openModal());
  };

  return (
    <Content style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <Search
              placeholder="Buscar usuarios"
              onSearch={onSearch}
              style={{ width: 300, marginRight: '1rem' }}
          />
          <Select
              placeholder="Filtro por estado"
              style={{ width: 200 }}
              onChange={handleChange}
              options={[
              {
                  value: "active",
                  label: "Active",
              },
              {
                  value: "inactive",
                  label: "Inactive",
              }
              ]}
          />
        </div>
        <Button onClick={showModal} type="primary">Agregar usuario</Button>
    </Content>    
  );
};

export default Options;
