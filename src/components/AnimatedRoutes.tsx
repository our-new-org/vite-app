import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import { AnimatePresence } from 'framer-motion';
import Facility from '../pages/Facility';
import Facilities from '../pages/Facilities';
import BookingPage from '../pages/BookingPage';
import Confirmation from './ConfirmationInfo';
import EditBookingPage from '../pages/EditBookingPage';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
      }}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/facilities" element={<Facilities />} />
        <Route path="/dashboard/facilities/:id" element={<Facility />} />
        <Route
          path="/dashboard/bookings/:bookingId"
          element={<BookingPage />}
        />
        <Route
          path="/dashboard/bookings/:bookingId/edit"
          element={<EditBookingPage />}
        />
        <Route
          path="/dashboard/bookings/:bookingId/:facilityId/edit"
          element={<EditBookingPage />}
        />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
