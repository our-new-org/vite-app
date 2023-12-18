import { motion } from 'framer-motion';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import supabase from './libs/supabase';
import { useContext } from 'react';
import StoreContext from './contexts/Store';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const { session } = useContext(StoreContext);
  const navigate = useNavigate();

  if (session) {
    navigate('/vite-app/dashboard');
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <div>Welcome !</div>
      {!session && (
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={[]}
        />
      )}
    </motion.div>
  );
}
