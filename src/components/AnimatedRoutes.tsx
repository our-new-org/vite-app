import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../Home';
import Dashboard from '../Dashboard';
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/vite-app" Component={Home} />
        <Route path="/vite-app/dashboard" Component={Dashboard} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
