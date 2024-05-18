import NavBar from "../NavBar/NavBar"
import { Breadcrumb, Layout  } from 'antd';
import Options from "../Options/Options";

const { Content } = Layout;

// eslint-disable-next-line react/prop-types
const MyLayout = ({children}) => {
  return (
   <div>
    <NavBar />
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Usuario</Breadcrumb.Item>
        <Breadcrumb.Item>Listado de uduarios</Breadcrumb.Item>
      </Breadcrumb>
      <Options />
      <div className="" style={{marginTop: '1rem', marginBottom: '1rem'}}>{children}</div>
    </Content>
   </div>
  )
}

export default MyLayout
