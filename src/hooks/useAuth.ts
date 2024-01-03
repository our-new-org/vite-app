import { useEffect } from 'react';
import { useAuthStore } from '../store/authStore';
import supabase from '../libs/supabase';
import { useNavigate } from 'react-router-dom';
import { delay } from '../utils';

export const useAuth = () => {
  const { fetchUser, setSession, setUser } = useAuthStore();
  const navigate = useNavigate();
  const scrollToLogin = () => {
    const elementToScrollTo = document.querySelector('.login-scroll')!;
    elementToScrollTo.scrollIntoView({ behavior: 'smooth' });
  };

  const delayLogin = async () => {
    await delay(800);
    navigate('/dashboard');
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
        delayLogin();
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  return { scrollToLogin };
};
