import { useEffect } from 'react';
import { useAuthStore } from '../store/authStore';
import { useBookingStore } from '../store/bookingStore';

const Booking = () => {
  const { user } = useAuthStore();

  const { bookings, fetchBookingByUser } = useBookingStore();

  useEffect(() => {
    if (user) {
      console.log('found user');

      fetchBookingByUser(user.id); // Assuming user.id is the ID of the logged-in user
    }
  }, [user, fetchBookingByUser]);

  return (
    <div>
      <h1>Booking</h1>
      {bookings && (
        <ul>
          {bookings.map((booking) => (
            <li key={booking.id}>{/* Display booking information here */}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Booking;
