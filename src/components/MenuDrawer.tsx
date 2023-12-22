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

  return (
    <Drawer
      title="Basic Drawer"
      placement="right"
      onClose={onClose}
      open={visible}>
      <ul className="menu-list">
        <li>
          <Link to={'/vite-app/'}>Home</Link>
        </li>
        <li>
          <Link to={'/vite-app/Dashboard'}>Dashboard</Link>
        </li>
        {session && (
          <li>
            <Link to={'/vite-app/'} onClick={() => supabase.auth.signOut()}>
              Sign out
            </Link>
          </li>
        )}
      </ul>
    </Drawer>
  );
};

export default MenuDrawer;
