import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import { AnimatePresence } from 'framer-motion';
import Facility from '../pages/Facility';
import Booking from '../pages/Booking';
import Facilities from '../pages/Facilities';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/facilities" element={<Facilities />} />
        <Route path="/dashboard/facilities/:id" element={<Facility />} />
        <Route path="/dashboard/bookings" element={<Booking />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
