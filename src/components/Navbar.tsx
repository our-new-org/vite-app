import { useContext } from 'react';
import { Link } from 'react-router-dom';
import StoreContext from '../contexts/Store';
import supabase from '../libs/supabase';

const Navbar = () => {
  const { session } = useContext(StoreContext);

  return (
    <nav>
      <ul>
        <li>
          <Link to={'/vite-app'}>Home</Link>
        </li>
        {!session ? (
          <li>
            <Link to={'/vite-app/login'}>Login</Link>
          </li>
        ) : (
          <li>
            <span onClick={() => supabase.auth.signOut()}>Logout</span>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
