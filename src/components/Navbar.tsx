import logo from '../assets/logo-image.png';
import { Button, Flex } from 'antd';
import { useAuthStore } from '../store/authStore';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import MenuDrawer from './MenuDrawer';
import { useWindowSize } from '@uidotdev/usehooks';
import supabase from '../libs/supabase';
import { TiThMenu } from 'react-icons/ti';
import { useDatePickerStore } from '../store/datePickerStore';

const Navbar = () => {
  const { user } = useAuthStore();
  const size = useWindowSize();
  const [drawerVisible, setDrawerVisible] = useState(false);
  const mobileView = size.width ? (size.width < 600 ? true : false) : false;
  const navigate = useNavigate();
  const { setSelectedSlot } = useDatePickerStore();

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onCloseDrawer = () => {
    setDrawerVisible(false);
  };

  const handleClick = () => {
    navigate('/dashboard/facilities');
    setSelectedSlot(null);
  };

  return (
    <nav className="navigation">
      <span>
        <Link to="/" className="brand-link">
          <img src={logo} alt="log" height={30} width={40} />
          Shared<span style={{ color: 'black' }}>Nest</span>
        </Link>
      </span>
      <span>
        <Flex gap={10}>
          {user && !mobileView && (
            <Flex gap={40} align="center" style={{ marginRight: '20px' }}>
              <Link
                className="navigation__link"
                to="/dashboard/facilities"
                onClick={handleClick}>
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
            <TiThMenu className="navigation__avatar" onClick={showDrawer} />
          )}
        </Flex>
      </span>
    </nav>
  );
};
//

export default Navbar;
