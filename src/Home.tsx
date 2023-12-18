import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <div>Welcome !</div>
      <nav>
        <li>
          <Link to="/vite-app/login">Login</Link>
        </li>
      </nav>
    </motion.div>
  );
}
