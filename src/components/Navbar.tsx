import { UserOutlined } from '@ant-design/icons';
import logo from '../assets/logo-image.png';
import { Avatar, Button, Flex } from 'antd';
import { useAuthStore } from '../store/authStore';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import MenuDrawer from './MenuDrawer';
import { useWindowSize } from '@uidotdev/usehooks';
import supabase from '../libs/supabase';

const Navbar = () => {
  const { user } = useAuthStore();
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
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
        }}>
        <Link to="#">
          <img src={logo} alt="log" height={30} width={40} />
        </Link>
        <span style={{ color: '#ef7ca0' }}>Shared</span>Nest
      </span>
      <span>
        <Flex gap={10}>
          {user && !mobileView && (
            <Flex gap={40} align="center" style={{ marginRight: '20px' }}>
              <Link className="navigation__link" to="/dashboard/facilities">
                Make a Booking
              </Link>
              <Link className="navigation__link" to="/dashboard">
                My Bookings
              </Link>
              <Button onClick={() => supabase.auth.signOut()} type="primary">
                Sign out
              </Button>
            </Flex>
          )}
          <MenuDrawer visible={drawerVisible} onClose={onCloseDrawer} />
          {mobileView && (
            <Avatar
              className="navigation__avatar"
              icon={<UserOutlined onClick={showDrawer} />}
            />
          )}
        </Flex>
      </span>
    </nav>
  );
};
//

export default Navbar;
