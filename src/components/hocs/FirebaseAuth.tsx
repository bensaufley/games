import React, { createContext, FunctionComponent, useEffect, useState } from 'react';

import firebase from '../../lib/firebase';

export interface AuthState {
  loggedIn: boolean;
  user: firebase.User | null;
}

export const FirebaseAuthContext = createContext<AuthState>({
  loggedIn: false,
  user: null,
});

export const FirebaseAuthProvider: FunctionComponent<{}> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    loggedIn: false,
    user: null,
  });

  useEffect(
    () =>
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          setAuthState({ user, loggedIn: true });
        } else {
          setAuthState({ loggedIn: false, user: null });
        }
      }),
    [],
  );

  return <FirebaseAuthContext.Provider value={authState}>{children}</FirebaseAuthContext.Provider>;
};
