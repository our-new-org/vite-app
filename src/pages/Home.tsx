import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import supabase from '../libs/supabase';
import AnimatedDiv from '../components/AnimatedDiv';
import homeImage from '../assets/home.jpg';
import { useAuth } from '../hooks/useAuth';
import { useAuthStore } from '../store/authStore';
import { Button } from 'antd';

export default function Home() {
  const { session } = useAuthStore();
  const { scrollToLogin } = useAuth();

  return (
    <AnimatedDiv className="home">
      <main className="home-container">
        <div className="home-container__welcome">
          <img
            src={homeImage}
            alt="home image"
            className="home-container__welcome__image"
          />
          <div className="home-container__welcome__login-button">
            <Button
              type="primary"
              size="large"
              block
              onClick={scrollToLogin}
              className="shadow">
              Login
            </Button>
          </div>
        </div>

        <div className="home-container__login">
          <span className="home-container__login--text">Welcome Back!</span>
          {!session && (
            <Auth
              supabaseClient={supabase}
              appearance={{
                theme: ThemeSupa,
                className: { container: 'auth-container login-scroll' },
                style: {
                  container: { margin: '8px', color: 'white' },
                  anchor: { color: '#e99ea9', margin: '10px' },
                  button: {
                    backgroundColor: '#e99ea9',
                    borderColor: '#e99ea9',
                    boxShadow:
                      '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
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
