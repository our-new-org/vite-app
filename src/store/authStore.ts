import { Session } from '@supabase/supabase-js';
import { create } from 'zustand';
import { User } from '../types';
const API_URL = import.meta.env.VITE_API_URL;

interface AuthStore {
  user: User | null;
  fetchUser: () => void;
  session: Session | null;
  setSession: (session: Session | null) => void;
  setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthStore>((set, get) => ({
  user: null,
  session: null,
  setSession: (session: Session | null) => set({ session }),
  setUser: (user: User | null) => set({ user }),
  fetchUser: async () => {
    try {
      const response = await fetch(
        `${API_URL}/users/${get().session?.user.email}`,
      );
      const user = await response.json();
      console.log('Logged in user: ', user);
      set({ user });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
}));
