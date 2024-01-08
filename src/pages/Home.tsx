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
  const { session, user } = useAuthStore();
  const { scrollToLogin } = useAuth();
  const size = useWindowSize();
  const navigate = useNavigate();

  const signIn = async () => {
    const email = 'test@salt.dev';
    const password = 'episalt';

    try {
      const {
        data: { user },
        error,
      } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      console.log('User signed in:', user);
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  return (
    <AnimatedDiv className="home">
      <main className="home-container">
        <div className="content-container">
          <div className="home__image__container">
            <img src={homeImage} alt="building" className="home__image" />
            <div className="image__content">
              <div>
                <h1 style={{ marginTop: '10px' }}>SharedNest</h1>
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
          <div className="login-container">
            {!session ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginTop: '10px',
                }}>
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
                      container: { color: 'white', minWidth: '250px' },
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
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                  }}>
                  <Button style={{ width: '100%' }} onClick={() => signIn()}>
                    Login with Test Accout
                  </Button>
                </div>
              </div>
            ) : (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '20px',
                }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '2px',
                  }}>
                  <h3>Signed in with</h3>
                  <span>{user?.email}</span>
                </div>
                <Button
                  onClick={() => navigate('/dashboard/facilities')}
                  type="primary">
                  Explore Facilities
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
    </AnimatedDiv>
  );
}
