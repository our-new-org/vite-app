import { create } from 'zustand';
import { Facility } from '../types';
const API_URL = import.meta.env.VITE_API_URL;

interface FacilitiyStore {
  facility: Facility | null;
  facilities: Facility[] | null;
  fetchFacility: (facilityId: number) => Promise<void>;
  fetchFacilities: () => Promise<void>;
}

export const useFacilityStore = create<FacilitiyStore>((set) => ({
  facility: null,
  facilities: null,
  fetchFacilities: async () => {
    try {
      const response = await fetch(`${API_URL}/facilities`);
      const facilities = await response.json();
      set({ facilities });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
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
