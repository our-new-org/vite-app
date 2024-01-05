import { useEffect } from 'react';
import { useAuthStore } from '../store/authStore';
import supabase from '../libs/supabase';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const { fetchUser, setSession, session: storedSessions } = useAuthStore();
  const navigate = useNavigate();

  const scrollToLogin = () => {
    const elementToScrollTo = document.querySelector('.login-container')!;
    elementToScrollTo.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user?.id == storedSessions?.user?.id) {
        console.log('they did match');
        console.log(session?.user?.id, storedSessions?.user?.id);
        return;
      }
      setSession(session);
      fetchUser();
      navigate('/dashboard');
    });
  }, []);

  return { scrollToLogin };
};
