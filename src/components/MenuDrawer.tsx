import { Drawer } from 'antd';
import { useAuthStore } from '../store/authStore';
import { Link } from 'react-router-dom';
import supabase from '../libs/supabase';

type MenuDrawerProps = {
  visible: boolean;
  onClose: () => void;
};

const MenuDrawer = ({ visible, onClose }: MenuDrawerProps) => {
  const session = useAuthStore((state) => state.session);

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <Drawer
      title="Quick Menu"
      placement="right"
      onClose={onClose}
      open={visible}>
      <ul className="menu-list">
        <li className="menu-list__item">
          <Link
            to={'/vite-app/'}
            onClick={handleLinkClick}
            className="menu-list__link">
            Home
          </Link>
        </li>
        <li className="menu-list__item">
          <Link
            to={'/vite-app/Dashboard'}
            onClick={handleLinkClick}
            className="menu-list__link">
            Dashboard
          </Link>
        </li>
        {session && (
          <>
            <li className="menu-list__item">
              <Link
                to={'/vite-app/bookings'}
                onClick={handleLinkClick}
                className="menu-list__link">
                All bookings
              </Link>
            </li>
            <li className="menu-list__item">
              <Link
                to={'/vite-app/'}
                onClick={() => {
                  supabase.auth.signOut();
                  handleLinkClick();
                }}
                className="menu-list__link">
                Sign out
              </Link>
            </li>
          </>
        )}
      </ul>
    </Drawer>
  );
};

export default MenuDrawer;
