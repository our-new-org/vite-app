import { useContext } from 'react';
import { Link } from 'react-router-dom';
import StoreContext from '../contexts/Store';
import supabase from '../libs/supabase';

const Navbar = () => {
  const { session } = useContext(StoreContext);

  return (
    <nav>
      <ul
        style={{
          display: 'flex',
          listStyleType: 'none',
          gap: 20,
        }}>
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
    </nav>
  );
};

export default Navbar;
