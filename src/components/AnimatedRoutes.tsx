import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import { AnimatePresence } from "framer-motion";
import Facility from "../pages/Facility";
import Booking from "../pages/Booking";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/vite-app" element={<Home />} />
        <Route path="/vite-app/dashboard" element={<Dashboard />} />
        <Route path="/vite-app/facility/:id" element={<Facility />} />
        <Route path="/vite-app/bookings" element={<Booking />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
