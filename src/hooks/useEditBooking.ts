import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { useDatePickerStore } from '../store/datePickerStore';
import { useFacilityStore } from '../store/facilityStore';
import { formatISO } from 'date-fns';
import { addDurationToDate } from '../utils';
import { useBookingStore } from '../store/bookingStore';

const API_URL = import.meta.env.VITE_API_URL;

const useEditBooking = (bookingId: string | undefined | null) => {
  const navigate = useNavigate();
  const { user, fetchUser } = useAuthStore();
  const { facility, setFacility } = useFacilityStore();
  const { selectedDate, selectedSlot, setSelectedSlot } = useDatePickerStore();
  const { setBookingDetails } = useBookingStore();

  const handleEditBooking = useCallback(async () => {
    if (!selectedSlot || !facility || !user || !bookingId) return;

    try {
      const startTime = formatISO(selectedSlot);
      const endTime = formatISO(
        addDurationToDate(selectedSlot, facility.slotDuration),
      );

      const response = await fetch(`${API_URL}/bookings/${bookingId}`, {
        method: 'PUT',
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
        throw new Error('Booking update failedd');
      }

      const result = await response.json();
      fetchUser();
      setSelectedSlot(null);
      setFacility(null);
      setBookingDetails(result);
      navigate('/confirmation');
    } catch (error) {
      // Display error to user
      console.error('Error updating booking:', error);
    }
  }, [bookingId, user, facility, selectedSlot, selectedDate, navigate]);

  return { handleEditBooking };
};

export default useEditBooking;
