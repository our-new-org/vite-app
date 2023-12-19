import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import supabase from './libs/supabase';
import { useContext } from 'react';
import StoreContext from './contexts/Store';
import AnimatedDiv from './components/AnimatedDiv';

export default function Home() {
  const { session } = useContext(StoreContext);

  return (
    <AnimatedDiv className="home-parent">
      <section className="home-block1">Welcome !</section>
      <section className="home-block2">
        {!session && (
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={[]}
          />
        )}
      </section>
    </AnimatedDiv>
  );
}
