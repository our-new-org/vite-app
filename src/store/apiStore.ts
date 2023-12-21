import { create } from 'zustand';
import { User } from './authStore';
const API_URL = import.meta.env.VITE_API_URL;

interface ApiStore {
  user: User[] | null;
  facility: Record<string, string> | null;
  fetchFacility: () => void;
}

export const useApiStore = create<ApiStore>((set) => ({
  user: null,
  facility: null,

  fetchFacility: async () => {
    try {
      const response = await fetch(`${API_URL}/facilities/3`);
      const facility = await response.json();
      console.log(facility);

      set({ facility });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
}));
