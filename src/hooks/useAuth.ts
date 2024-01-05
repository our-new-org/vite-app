import { useEffect } from 'react';
import { useAuthStore } from '../store/authStore';
import supabase from '../libs/supabase';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const { fetchUser, setSession, setUser } = useAuthStore();
  const navigate = useNavigate();
  const scrollToLogin = () => {
    const elementToScrollTo = document.querySelector('.login-container')!;
    elementToScrollTo.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, supabaseSession) => {
      setSession(supabaseSession);
      supabaseSession && fetchUser();

      if (_event === 'SIGNED_OUT') {
        setUser(null);
        navigate('/');
      }
      if (_event === 'SIGNED_IN') {
        navigate('/dashboard');
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  return { scrollToLogin };
};
