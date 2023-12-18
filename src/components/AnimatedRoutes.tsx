import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../Home';
import Login from '../Login';
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/vite-app" Component={Home} />
        <Route path="/vite-app/login" Component={Login} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
