import React, { FunctionComponent, useCallback, useContext } from 'react';
import { Link } from 'react-router-dom';

import firebase from '../lib/firebase';
import { FirebaseAuthContext } from './hocs/FirebaseAuth';

const NavBar: FunctionComponent<{}> = () => {
  const { loggedIn } = useContext(FirebaseAuthContext);

  const logOut = useCallback(() => {
    firebase.auth().signOut();
  }, []);

  return (
    <nav>
      <h2>
        <Link to="/">Games</Link>
      </h2>
      {loggedIn ? (
        <button type="button" onClick={logOut}>
          Log Out
        </button>
      ) : (
        <Link to="/login/">Log In</Link>
      )}
    </nav>
  );
};

export default NavBar;
