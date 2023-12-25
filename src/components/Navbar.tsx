import { UserOutlined } from '@ant-design/icons';
import logo from '../assets/logo.png';
import { Avatar, Flex } from 'antd';
import { useAuthStore } from '../store/authStore';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import MenuDrawer from './MenuDrawer';
import { useWindowSize } from '@uidotdev/usehooks';

const Navbar = () => {
  const { user } = useAuthStore();
  const navigate = useNavigate();
  const size = useWindowSize();
  const [drawerVisible, setDrawerVisible] = useState(false);
  const mobileView = size.width ? (size.width < 600 ? true : false) : false;
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
        <Flex gap={10}>
          {user && !mobileView && (
            <Flex vertical align="end">
              <span className="navigation__email">{user?.email}</span>
              <Link className="navigation__sign-out" to="/">
                Sign out
              </Link>
            </Flex>
          )}
          <MenuDrawer visible={drawerVisible} onClose={onCloseDrawer} />

          <Avatar
            className="navigation__avatar"
            icon={
              <UserOutlined
                onClick={() => {
                  if (mobileView) {
                    showDrawer();
                  } else {
                    navigate('/dashboard');
                  }
                }}
              />
            }
          />
        </Flex>
      </span>
    </nav>
  );
};
//

export default Navbar;
