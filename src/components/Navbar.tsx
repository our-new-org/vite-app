import logo from '../assets/logo-image.png';
import { Button, Flex } from 'antd';
import { useAuthStore } from '../store/authStore';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MenuDrawer from './MenuDrawer';
import { useWindowSize } from '@uidotdev/usehooks';
import supabase from '../libs/supabase';
import { TiThMenu } from 'react-icons/ti';
import { useDatePickerStore } from '../store/datePickerStore';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const { user } = useAuthStore();
  const size = useWindowSize();
  const [drawerVisible, setDrawerVisible] = useState(false);
  const mobileView = size.width ? (size.width < 600 ? true : false) : false;
  const navigate = useNavigate();
  const { setSelectedSlot } = useDatePickerStore();
  const location = useLocation();

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

  useEffect(() => {
    if (location.pathname.includes('dashboard')) {
      console.log('found one');
    } else {
      console.log('found two');
    }
    location.pathname.includes('dashboard');
  }, [location]);

  return (
    <nav
      className={`navigation ${
        location.pathname.includes('dashboard') ? 'no-bottom' : ''
      }`}>
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
              <Button onClick={handleClick} type="primary">
                Book Now
              </Button>
              <Link className="navigation__link" to="/dashboard">
                Active Bookings
              </Link>
              <Link
                className="navigation__link"
                to="/dashboard/facilities"
                onClick={() => supabase.auth.signOut()}>
                Sign out
              </Link>
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
