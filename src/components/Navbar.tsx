import { MenuOutlined } from '@ant-design/icons';
import { useState } from 'react';
import MenuDrawer from './MenuDrawer';

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
      <span>logo</span>
      <span>
        <MenuOutlined className="user-icon" onClick={showDrawer} />
      </span>

      <MenuDrawer visible={drawerVisible} onClose={onCloseDrawer} />
    </nav>
  );
};

export default Navbar;
