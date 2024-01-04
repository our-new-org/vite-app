import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import supabase from '../libs/supabase';
import AnimatedDiv from '../components/AnimatedDiv';
import homeImage from '../assets/new-home.jpg';
import { useAuth } from '../hooks/useAuth';
import { useAuthStore } from '../store/authStore';
import { Button } from 'antd';
import { useWindowSize } from '@uidotdev/usehooks';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const { session } = useAuthStore();
  const { scrollToLogin } = useAuth();
  const size = useWindowSize();
  const navigate = useNavigate();

  return (
    <AnimatedDiv className="home">
      <main className="home-container">
        <div className="content-container">
          <div className="home__image__container">
            <img src={homeImage} alt="building" className="home__image" />
            <div className="image__content">
              <div>
                <h1>SharedNest</h1>
                <h2>Your Gateway to Hassle-Free Facility Access</h2>
              </div>
              {size.width && size.width < 768 && (
                <Button
                  type="primary"
                  size="large"
                  block
                  onClick={
                    !session
                      ? scrollToLogin
                      : () => navigate('/dashboard/facilities')
                  }
                  className="shadow">
                  Explore Facilities
                </Button>
              )}
            </div>
          </div>
          {!session && (
            <div className="login-container">
              {!session ? (
                <Auth
                  localization={{
                    variables: {
                      sign_in: {
                        email_label: 'Email',
                        email_input_placeholder: 'test@salt.dev',
                        password_label: 'Password',
                        password_input_placeholder: '******',
                        link_text: 'No Account? Sign up',
                      },
                      sign_up: {
                        email_label: 'Email',
                        email_input_placeholder: 'test@salt.dev',
                        password_label: 'Password',
                        password_input_placeholder: '******',
                        link_text: 'No Account? Sign up',
                      },
                      forgotten_password: {
                        email_label: 'Email',
                        email_input_placeholder: 'test@salt.dev',
                        password_label: 'Password',
                        link_text: 'Forgot password?',
                      },
                    },
                  }}
                  supabaseClient={supabase}
                  appearance={{
                    className: 'auth-container',
                    theme: ThemeSupa,
                    style: {
                      input: { border: '1px solid #ef7ca0' },
                      container: { color: 'white', minWidth: '300px' },
                      anchor: {
                        color: '#ef7ca0',
                        textDecoration: 'none',
                      },
                      button: {
                        backgroundColor: '#ef7ca0',
                        borderColor: '#ef7ca0',
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
              ) : (
                <h3>Signed In!</h3>
              )}
            </div>
          )}
        </div>
      </main>
    </AnimatedDiv>
  );
}
