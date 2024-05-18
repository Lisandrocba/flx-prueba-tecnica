import './NavBar.css'
import { Layout } from 'antd';

const { Header } = Layout;

const NavBar = () => {
  return (
  <Layout className='layout-navbar'>
    <Header className="header-navbar" style={{ background: '#d5d5d5' }}>
      <div className='img-navbar'>
        <img src='/flexxus_logo.png' alt='logo empresa'/>
      </div>
    </Header>
  </Layout>
  )
}

export default NavBar
