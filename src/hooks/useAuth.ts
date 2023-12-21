import { useEffect } from 'react';
import { useAuthStore } from '../store/authStore';
import supabase from '../libs/supabase';

export const useAuth = () => {
  const { session, fetchUser, setSession } = useAuthStore();

  const scrollToLogin = () => {
    const elementToScrollTo = document.querySelector('.login-scroll')!;
    elementToScrollTo.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, supabaseSession) => {
      setSession(supabaseSession);
      supabaseSession && fetchUser();
    });

    return () => subscription.unsubscribe();
  }, []);

  return { session, scrollToLogin };
};
