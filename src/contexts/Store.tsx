import {
  useState,
  FunctionComponent,
  useMemo,
  useEffect,
  createContext,
} from 'react';
import React from 'react';
import { Session } from '@supabase/supabase-js';
import supabase from '../libs/supabase';

type ContextType = {
  isSignedIn: boolean;
  user: null;
  session: Session | null;
  setSession: (value: null | Session) => void;
};

type StoreContextProps = {
  children: React.ReactNode;
};

const StoreContext = createContext<ContextType>({
  isSignedIn: false,
  user: null,
  session: null,
  setSession: () => {},
});

export const StoreContextProvider: FunctionComponent<StoreContextProps> = (
  props: StoreContextProps
) => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [user, setUser] = useState<null>(null);
  const [session, setSession] = useState<Session | null>(null);
  useEffect(() => {
    // Only runs once when the application starts
  }, []);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session: sessionIn } }) => {
      setSession(sessionIn);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, sessionOut) => {
      setSession(sessionOut);
    });

    return () => subscription.unsubscribe();
  }, []);

  const state = useMemo(
    () => ({
      isSignedIn,
      setIsSignedIn,
      user,
      setUser,
      session,
      setSession,
    }),
    [isSignedIn, setIsSignedIn, user, setUser, session, setSession]
  );

  return (
    <StoreContext.Provider value={state}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
