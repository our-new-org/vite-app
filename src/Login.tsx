import './index.css';
import { useContext } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import StoreContext from './contexts/Store';
import { motion } from 'framer-motion';
import supabase from './libs/supabase';

export default function Login() {
  const { session } = useContext(StoreContext);

  if (!session) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <div>
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={[]}
          />
        </div>
      </motion.div>
    );
  }
}
