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
      title="Basic Drawer"
      placement="right"
      onClose={onClose}
      open={visible}>
      <ul className="menu-list">
        <li>
          <Link to={'/vite-app/'} onClick={handleLinkClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to={'/vite-app/Dashboard'} onClick={handleLinkClick}>
            Dashboard
          </Link>
        </li>
        {session && (
          <li>
            <Link
              to={'/vite-app/'}
              onClick={() => {
                supabase.auth.signOut();
                handleLinkClick();
              }}>
              Sign out
            </Link>
          </li>
        )}
      </ul>
    </Drawer>
  );
};

export default MenuDrawer;
