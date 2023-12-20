import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/vite-app" element={<Home />} />
        <Route path="/vite-app/dashboard" element={<Dashboard />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
