import { create } from 'zustand';
import { Facility, User } from '../types';
const API_URL = import.meta.env.VITE_API_URL;

interface ApiStore {
  user: User | null;
  facility: Facility | null;
  fetchFacility: (facilityId: number) => void;
}

export const useFacilityStore = create<ApiStore>((set) => ({
  user: null,
  facility: null,

  fetchFacility: async (facilityId: number) => {
    try {
      const response = await fetch(`${API_URL}/facilities/${facilityId}`);
      const facility = await response.json();
      set({ facility });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
}));
