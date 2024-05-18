/* eslint-disable react/prop-types */
import { Space, Table, Tag } from 'antd';
import ButtonComponent from '../Button/ButtonComponent';

const columns = [
    {
      title: 'Usuario',
      dataIndex: 'username',
      key: 'username'
    },
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Apellido',
      dataIndex: 'lastname',
      key: 'lastname',
    },
    {
      title: 'Estado',
      key: 'status',
      dataIndex: 'status',
      render: (_, { status }) => (
        <>
          {    
            <Tag color={status === 'active' ? 'green' : 'red'} key={status}>
              {status.toUpperCase()}
            </Tag> 
          }
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (data) => (
       <Space size="middle">
          <ButtonComponent tipe='update' data={data}>Editar</ButtonComponent>
          <ButtonComponent tipe='delete' data={data}>Eliminar</ButtonComponent>
       </Space> 
      ),
    },
  ];

// eslint-disable-next-line react/prop-types
const TableUsers = ({data}) => {

  return (
    <div>
      <Table columns={columns} dataSource={data.map(item => ({...item, key: item.id}))} />
    </div>
  )
}

export default TableUsers
