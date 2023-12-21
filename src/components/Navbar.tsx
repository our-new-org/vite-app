import { Link } from 'react-router-dom';
import supabase from '../libs/supabase';
import { UserOutlined } from '@ant-design/icons';
import { useAuthStore } from '../store/authStore';

const Navbar = () => {
  const session = useAuthStore((state) => state.session);

  return (
    <nav className="navigation">
      <ul className="list">
        <span>logo</span>
        <span>
          <UserOutlined className="user-icon" />
        </span>
        {false && (
          <>
            <li>
              <Link to={'/vite-app/'}>Home</Link>
            </li>
            <li>
              <Link to={'/vite-app/Dashboard'}>Dashboard</Link>
            </li>
          </>
        )}
        {session && (
          <li>
            <Link to={'/vite-app/'} onClick={() => supabase.auth.signOut()}>
              Sign out
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
