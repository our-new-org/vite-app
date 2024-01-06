import { Drawer } from 'antd';
import { useAuthStore } from '../store/authStore';
import { Link, useNavigate } from 'react-router-dom';
import supabase from '../libs/supabase';
import { CloseCircleOutlined } from '@ant-design/icons';
import { useAuth } from '../hooks/useAuth';
import { delay } from '../utils';
import { useDatePickerStore } from '../store/datePickerStore';

type MenuDrawerProps = {
  visible: boolean;
  onClose: () => void;
};

const MenuDrawer = ({ visible, onClose }: MenuDrawerProps) => {
  const { user, session } = useAuthStore();
  const { scrollToLogin } = useAuth();
  const navigate = useNavigate();
  const { setSelectedSlot } = useDatePickerStore();

  const handleLinkClick = () => {
    onClose();
  };

  const handleClick = () => {
    navigate('/dashboard/facilities');
    setSelectedSlot(null);
    handleLinkClick();
  };

  return (
    <Drawer
      title="Menu"
      placement="right"
      onClose={onClose}
      open={visible}
      closeIcon={<CloseCircleOutlined className="close-icon" />}>
      <ul className="menu-list">
        <li className="menu-list__item">
          {user ? (
            <>
              <Link
                to="/dashboard"
                onClick={handleLinkClick}
                className="menu-list__link">
                My Bookings
              </Link>
              <Link
                className="menu-list__link"
                to="/dashboard/facilities"
                onClick={handleClick}>
                Make a Booking
              </Link>
            </>
          ) : (
            <Link
              to={''}
              onClick={async () => {
                handleLinkClick();
                await delay(400);
                scrollToLogin();
              }}
              className="menu-list__link">
              Login
            </Link>
          )}
          {session && (
            <>
              <Link
                to="/"
                onClick={() => {
                  supabase.auth.signOut();
                  handleLinkClick();
                }}
                className="menu-list__link">
                Sign out
              </Link>
            </>
          )}
        </li>
      </ul>
    </Drawer>
  );
};

export default MenuDrawer;
