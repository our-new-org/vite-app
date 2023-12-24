import { MenuOutlined } from '@ant-design/icons';
import { useState } from 'react';
import MenuDrawer from './MenuDrawer';
import logo from '../assets/logo.png';
const Navbar = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onCloseDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <nav className="navigation">
      <span>
        <img src={logo} alt="log" height={30} width={70} />
      </span>
      <span>
        <MenuOutlined className="user-icon" onClick={showDrawer} />
      </span>

      <MenuDrawer visible={drawerVisible} onClose={onCloseDrawer} />
    </nav>
  );
};

export default Navbar;
