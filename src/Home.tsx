import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <div>Welcome !</div>
      <nav>
        <li>
          <Link to="/vite-app/login">Login</Link>
        </li>
      </nav>
    </div>
  );
}
