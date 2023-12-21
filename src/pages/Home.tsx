import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import supabase from '../libs/supabase';
import AnimatedDiv from '../components/AnimatedDiv';
import homeImage from '../assets/home.jpg';
import { useEffect } from 'react';
import { useAuthStore } from '../store/authStore';

export default function Home() {
  const { session, fetchUser, setSession } = useAuthStore();

  const scrollToLogin = () => {
    const authContainer = document.getElementsByClassName('auth-container')[0];
    authContainer.scrollIntoView({ behavior: 'smooth' });
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

  return (
    <AnimatedDiv className="home">
      <main className="home-container">
        <div className="home-container__welcome">
          <button
            onClick={scrollToLogin}
            className="home-container__welcome__loginButton">
            Login
          </button>
          <img
            src={homeImage}
            alt="home image"
            className="home-container__welcome__image"
          />
        </div>

        <div className="home-container__login">
          <span className="home-container__login--text">Welcome Back!</span>
          {!session && (
            <Auth
              supabaseClient={supabase}
              appearance={{
                theme: ThemeSupa,
                className: { container: 'auth-container' },
                style: {
                  container: { margin: '8px', color: 'white' },
                  anchor: { color: '#38665F', margin: '10px' },
                  button: {
                    backgroundColor: '#38665F',
                    borderColor: '#5D5C57',
                    color: 'white',
                    borderRadius: '5px',
                  },
                },
              }}
              theme="default"
              providers={[]}
            />
          )}
        </div>
      </main>
    </AnimatedDiv>
  );
}
