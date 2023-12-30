// useBooking.ts
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { useDatePickerStore } from '../store/datePickerStore';
import { useFacilityStore } from '../store/facilityStore';
import { formatISO } from 'date-fns';
import { addDurationToDate } from '../utils';
import { useBookingStore } from '../store/bookingStore';

const API_URL = import.meta.env.VITE_API_URL;

const useBooking = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const { facility } = useFacilityStore();
  const { selectedDate, selectedSlot } = useDatePickerStore();
  const { setBookingDetails } = useBookingStore();

  const handleBooking = useCallback(async () => {
    if (!selectedSlot || !facility || !user) return;

    try {
      const startTime = formatISO(selectedSlot);
      const endTime = formatISO(
        addDurationToDate(selectedSlot, facility.slotDuration),
      );

      const response = await fetch(`${API_URL}/bookings`, {
        method: 'POST',
        body: JSON.stringify({
          userId: user.id,
          facilityId: facility.id,
          facilityName: facility.name,
          date: formatISO(selectedDate),
          startTime,
          endTime,
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error('Booking failed');
      }

      const result = await response.json();
      setBookingDetails(result);
      navigate('/confirmation');
    } catch (error) {
      // Display error to user
      console.error('Error creating booking:', error);
    }
  }, [user, facility, selectedSlot, selectedDate, navigate]);

  return { handleBooking };
};

export default useBooking;
