import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import supabase from "./libs/supabase";
import { useContext } from "react";
import StoreContext from "./contexts/Store";
import AnimatedDiv from "./components/AnimatedDiv";
import homeImage from "../src/asserts/home.jpg";

export default function Home() {
  const { session } = useContext(StoreContext);

  return (
    <AnimatedDiv className="home">
     <main className="home-container">
      <div className="home-container__welcome">
        
        <img src={homeImage} alt="home image" className="home-container__welcome__image"/>
      </div>

      <div className="home-container__login">
       <span>Welcome Back!</span>
        {!session && (
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={[]}
          />
        )}
      </div>
      </main>
    </AnimatedDiv>
  );
}
