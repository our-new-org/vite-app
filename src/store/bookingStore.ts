import { create } from 'zustand';
import { Booking } from '../types';

const API_URL = import.meta.env.VITE_API_URL;

type BookingStore = {
  bookings: Booking[] | null;
  bookingDetails: Booking | null;
  fetchBookingByUser: (userId: number) => void;
  setBookingDetails: (bookingDetails: Booking) => void;
  cancelBooking: (bookingId: number) => void;
};

export const useBookingStore = create<BookingStore>((set) => ({
  bookings: null,
  bookingDetails: null,
  fetchBookingByUser: async (userId: number) => {
    try {
      const response = await fetch(`${API_URL}/bookings/${userId}`);
      const bookings = await response.json();
      console.log(bookings);

      set({ bookings });
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  },
  setBookingDetails: (bookingDetails: Booking) => {
    set({ bookingDetails });
  },
  cancelBooking: async (bookingId: number) => {
    try {
      const response = await fetch(`${API_URL}/bookings/${bookingId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Booking cancellation failed.');
      }

      set({ bookingDetails: null }); // Clear booking details after cancellation
    } catch (error) {
      console.error('Error cancelling booking:', error);
    }
  },
}));
