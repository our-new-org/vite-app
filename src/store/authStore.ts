import { Session } from '@supabase/supabase-js';
import { create } from 'zustand';
import { User } from '../types';
const API_URL = import.meta.env.VITE_API_URL;

interface AuthStore {
  user: User | null;
  fetchUser: (session: Session) => void;
  session: Session | null;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  session: null,
  fetchUser: async (session: Session) => {
    try {
      const response = await fetch(`${API_URL}/users/${session.user.email}`);
      const user = await response.json();
      console.log('found this user', user);
      set({ user });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
}));

export function setSession(session: Session | null) {
  useAuthStore.setState({ session });
}
