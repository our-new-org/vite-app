import { Session } from '@supabase/supabase-js';
import { create } from 'zustand';

type User = {
  id: number;
  email: string;
  apartmentNumber: number;
};

interface AuthStore {
  user: User | null;
  session: Session | null;
  selected: Date | null;
}

export const useAuthStore = create<AuthStore>(() => ({
  user: null,
  session: null,
  selected: null,
}));

export function setSession(session: Session | null) {
  useAuthStore.setState({ session });
}
